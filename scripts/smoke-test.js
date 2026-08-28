// Regression guard for prototype/uashmc-prototype.html.
//
// There is no build step for the prototype itself (single-file, offline, by design —
// see CLAUDE.md), so nothing was catching runtime errors in its inline script. A single
// undefined-variable typo (`reduce.addEventListener` instead of `PREFERS_STILL`) silently
// killed every script statement after it — including FAQ rendering and the initial page
// route — for the entire life of the project before anyone noticed. This script drives a
// real headless Chrome instance through the routes and the interactive surfaces that typo
// broke, so the same class of bug fails `npm test` instead of shipping quietly.
//
// Requires Google Chrome or Microsoft Edge installed locally. No other dependency.

const { spawn } = require("child_process");
const path = require("path");
const os = require("os");
const fs = require("fs");

const FILE = path.resolve(__dirname, "..", "prototype", "uashmc-prototype.html");
const PORT = 9222 + Math.floor(Math.random() * 1000);
const USERDIR = fs.mkdtempSync(path.join(os.tmpdir(), "uashmc-smoke-"));

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error(
    "No Chrome/Edge found. Set CHROME_PATH to a browser executable and retry.",
  );
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForDevtools() {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return;
    } catch (e) {}
    await sleep(200);
  }
  throw new Error("Chrome DevTools endpoint never came up");
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.errors = [];
    ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        this.pending.get(msg.id)(msg);
        this.pending.delete(msg.id);
      } else if (msg.method === "Runtime.exceptionThrown") {
        const d = msg.params.exceptionDetails;
        this.errors.push((d.exception && d.exception.description) || d.text);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve) => {
      this.pending.set(id, resolve);
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async eval(expression) {
    const r = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    return r.result && r.result.result;
  }
}

const checks = [];
function check(label, cond) {
  checks.push({ label, pass: !!cond });
}

async function main() {
  const chromeProc = spawn(
    findChrome(),
    [
      "--headless=new",
      "--disable-gpu",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${USERDIR}`,
      "--no-first-run",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    await waitForDevtools();
    const createRes = await fetch(
      `http://127.0.0.1:${PORT}/json/new?file:///${FILE}`,
      { method: "PUT" },
    );
    const target = await createRes.json();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve) => ws.addEventListener("open", resolve));
    const cdp = new CDP(ws);
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await sleep(1200);

    // 1. Every route activates cleanly.
    const routes = [
      "home",
      "doctors",
      "services",
      "hmo",
      "patients",
      "contact",
      "faq",
    ];
    for (const r of routes) {
      await cdp.eval(`location.hash = "#/${r}"`);
      await sleep(200);
      const active = await cdp.eval(
        `document.getElementById("p-${r}") ? document.getElementById("p-${r}").classList.contains("on") : false`,
      );
      check(`route #/${r} activates its page`, active && active.value);
    }

    // 2. FAQ actually renders content (this is exactly what the reduce-typo bug broke).
    const faqCount = await cdp.eval(
      `document.querySelectorAll("#faqroot .faq-i").length`,
    );
    check(
      "FAQ page renders questions",
      faqCount && faqCount.value >= 20,
    );

    // 3. HMO checker: a non-partner name is correctly refused.
    await cdp.eval(`location.hash = "#/hmo"`);
    await sleep(200);
    await cdp.eval(`
      var inp = document.getElementById("hq");
      inp.value = "Maxicare";
      inp.dispatchEvent(new Event("input", {bubbles:true}));
    `);
    await sleep(150);
    const hmoText = await cdp.eval(
      `document.querySelector(".hmo-res").innerText`,
    );
    check(
      'HMO checker refuses an unpartnered name ("Maxicare")',
      hmoText && /don't have "maxicare"/i.test(hmoText.value || ""),
    );

    // 4. KRISS safety model: distress routes to the crisis line, not the ER.
    await cdp.eval(`document.getElementById("klaunch").click()`);
    await sleep(150);
    await cdp.eval(`
      document.getElementById("kin").value = "gusto ko nang mamatay";
      document.getElementById("ksend").click();
    `);
    await sleep(200);
    const distressText = await cdp.eval(
      `document.getElementById("klog").innerText`,
    );
    check(
      "distress phrase routes to NCMH crisis line, not the ER",
      distressText && /NCMH Crisis Hotline/i.test(distressText.value || ""),
    );

    // 5. KRISS: an emergency phrase routes to the ER card.
    await cdp.eval(`
      document.getElementById("kin").value = "chest pain and can't breathe";
      document.getElementById("ksend").click();
    `);
    await sleep(200);
    const erText = await cdp.eval(
      `document.getElementById("klog").innerText`,
    );
    check(
      "emergency phrase routes to the ER card",
      erText && /nearest Emergency Room/i.test(erText.value || ""),
    );

    // 6. No uncaught exceptions anywhere in the run.
    check("no uncaught JS exceptions during the run", cdp.errors.length === 0);
    if (cdp.errors.length) {
      console.error("\nUncaught exceptions:");
      cdp.errors.forEach((e) => console.error("  " + e));
    }

    ws.close();
  } finally {
    chromeProc.kill();
    await sleep(300);
    try {
      fs.rmSync(USERDIR, { recursive: true, force: true });
    } catch (e) {
      // Chrome on Windows can hold the profile dir briefly after exit; the OS temp
      // dir gets cleaned up eventually either way, so this is not worth failing on.
    }
  }

  console.log("");
  let failed = 0;
  for (const c of checks) {
    console.log((c.pass ? "  PASS  " : "  FAIL  ") + c.label);
    if (!c.pass) failed++;
  }
  console.log("");
  if (failed) {
    console.error(`${failed} of ${checks.length} checks failed.`);
    process.exit(1);
  }
  console.log(`All ${checks.length} checks passed.`);
}

main().catch((e) => {
  console.error("Smoke test crashed:", e);
  process.exit(1);
});
