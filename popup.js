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
  if ((tp || tpp || tpu) && x && entry && vol) {
    handle2(vari, x, entry, vol, tp, tpp, tpu, type);
  }
  if ((sl || slp || slu) && x && entry && vol) {
    handle3(vari, x, entry, vol, sl, slp, slu, type);
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
  document.getElementById("pri").innerHTML = price
    ? parseFloat(price).toFixed(2)
    : price;
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
  setPri("");
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
function handle2(vari, x, entry, vol, tp, tpp, tpu, type) {
  if (vari === "tp") {
    if (!tp) {
      setInp("tpp", "");
      setInp("tpu", "");
      return;
    }
    const z = getZ(tp, entry, x, type);
    setInp("tpp", z / getN(x));
    setInp("tpu", (z / 100) * getN(vol));
    return;
  }

  if (vari === "tpu") {
    if (!tpu) {
      setInp("tpp", "");
      setInp("tp", "");
      return;
    }

    const z = getX(tpu, x, vol, type);
    setInp("tpp", (getN(tpu) * getN(entry) * z) / getN(x));
    setInp("tp", getN(entry) + getN(entry) * z);
  }

  if (vari === "tpp") {
    if (!tpp) {
      setInp("tpu", "");
      setInp("tp", "");
      return;
    }
    const z = getY(getN(tpp) * getN(x), x, type);
    setInp("tpu", getN(vol) * getN(x) * z);
    setInp("tp", getN(entry) + getN(entry) * z);
  }
}
function handle3(vari, x, entry, vol, sl, slp, slu, type) {
  if (vari === "sl") {
    if (!sl) {
      setInp("slp", "");
      setInp("slu", "");
      return;
    }
    const z = getZ(sl, entry, x, type);
    setInp("slp", z / getN(x));
    setInp("slu", (z / 100) * getN(vol));
    return;
  }

  if (vari === "slu") {
    if (!slu) {
      setInp("slp", "");
      setInp("sl", "");
      return;
    }

    const z = getX(slu, x, vol, type);
    setInp("slp", (getN(slu) * getN(entry) * z) / getN(x));
    setInp("sl", getN(entry) + getN(entry) * z);
  }

  if (vari === "slp") {
    if (!slp) {
      setInp("slu", "");
      setInp("sl", "");
      return;
    }
    const z = getY(getN(slp) * getN(x), x, type);
    setInp("slu", getN(vol) * getN(x) * z);
    setInp("sl", getN(entry) + getN(entry) * z);
  }
}

function getN(n) {
  return +n;
}

function getZ(t, e, x, y) {
  const n = ((getN(t) / getN(e)) * 100 - 100) * getN(x);
  return y === "l" ? n : -n;
}

function getX(t, x, v, y) {
  const n = getN(t) / getN(v) / getN(x);
  return y === "l" ? n : -n;
}

function getY(t, x, y) {
  const n = getN(t) / getN(x) / 100;
  return y === "l" ? n : -n;
}
