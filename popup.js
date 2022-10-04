const URL = "https://api.binance.com/api/v3/ticker/price?symbol={0}USDT";

document.getElementById("name").addEventListener("input", rePri);
document.getElementById("btn-1").addEventListener("click", cls);
document.getElementById("btn-2").addEventListener("click", getRad);
document.getElementById("x").addEventListener("input", () => reCal("x"));
document
  .getElementById("entry")
  .addEventListener("input", () => reCal("entry"));
document.getElementById("vol").addEventListener("input", () => reCal("vol"));
document
  .getElementById("margin")
  .addEventListener("input", () => reCal("margin"));
document.getElementById("tp").addEventListener("input", () => reCal("tp"));
document.getElementById("tpu").addEventListener("input", () => reCal("tpu"));
document.getElementById("tpp").addEventListener("input", () => reCal("tpp"));
document.getElementById("sl").addEventListener("input", () => reCal("sl"));
document.getElementById("slu").addEventListener("input", () => reCal("slu"));
document.getElementById("slp").addEventListener("input", () => reCal("slp"));

function reCal(vari = "") {
  const z = getVal("x");
  const zz = getVal("vol");
  const zzz = getVal("margin");
  const zzzz = getVal("entry");
  const obj = getObj();
  handle1(vari, z, zz, zzz);
  if (!zzzz) return;
  const { type, x, entry, vol, margin, tp, tpu, tpp, sl, slu, slp } = obj;
  if (tp || tpp || tpu) {
    handle2(type, x, tp, tpp, tpu);
  }
  if (sl || slp || slu) {
    handle3(type, x, sl, slp, slu);
  }
}

function rePri() {
  const name = document.getElementById("name").value;
  getPri(name);
}

function getPri(name) {
  console.log(name);
  const rq = URL.replace("{0}", name.toUpperCase());
  fetch(rq)
    .then((response) => response.json())
    .then((data) => {
      if (data.price.slice(0, 5) == "0.000") {
        const value = +data.price * 1000;
        setPri(value);
      } else {
        const value = data.price;
        setPri(value);
      }
    })
    .catch(() => setPri(""));
}

function setPri(price) {
  document.getElementById("pri").innerHTML = price.slice(0, 5);
}

function setVal(name, value) {
  document.getElementById(name).innerHTML = value;
}

function getVal(name) {
  return document.getElementById(name).value;
}

function cls() {
  [
    "name",
    "x",
    "entry",
    "vol",
    "margin",
    "tp",
    "tpu",
    "tpp",
    "sl",
    "slu",
    "slp",
    "min",
    "max",
  ].forEach((e) => setInp(e, ""));
}

function setInp(name, val) {
  document.getElementById(name).value = val;
}

function getObj() {
  const type = document.getElementById("type").value;
  const x = document.getElementById("x").value;
  const entry = document.getElementById("entry").value;
  const vol = document.getElementById("vol").value;
  const margin = document.getElementById("margin").value;
  const tp = document.getElementById("tp").value;
  const tpu = document.getElementById("tpu").value;
  const tpp = document.getElementById("tpp").value;
  const sl = document.getElementById("sl").value;
  const slu = document.getElementById("slu").value;
  const slp = document.getElementById("slp").value;
  return { type, x, entry, vol, margin, tp, tpu, tpp, sl, slu, slp };
}

function getRad() {
  const min = document.getElementById("min").value || 0;
  const max = document.getElementById("max").value || 100;
  setVal("rad", getNum(+min, +max));
}

function getNum(min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return Math.floor(Math.random() * (min - max + 1) + max);
}

function handle1(vari, x, vol, margin) {
  if (vari === "x") {
    if (!x) {
      setInp("margin", "");
    } else {
      setInp("margin", vol * x);
    }
    return;
  }

  if (vari === "vol") {
    if (!vol) {
      setInp("margin", "");
    } else if (x) {
      setInp("margin", vol * x);
    }
    return;
  }
  if (vari === "margin") {
    if (!margin) {
      setInp("vol", "");
    } else if (x) {
      setInp("vol", margin / x);
    }
    return;
  }
}
function handle2(type, x, tp, tpp, tpu) {}
function handle3(type, x, sl, slp, slu) {}
