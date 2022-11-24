const SERVER = "https://key-server-2310.herokuapp.com/";
const localKey = localStorage.getItem("local-key");
if (!localKey) {
  const key = prompt("Nhập key:", "");
  if (key) {
    checkAuth(key);
  }
} else {
  checkAuth(localKey);
}

function checkAuth(key) {
  try {
    fetch(SERVER + "auth", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key,
      }),
    }).then(async (result) => {
      const isValid = await result.json();
      if (isValid) {
        localStorage.setItem("local-key", key);
        initExtension(key);
      } else {
        localStorage.setItem("local-key", "");
      }
    });
  } catch {
    localStorage.setItem("local-key", "");
  }
}

function initExtension(key) {
  document["body"]["insertAdjacentHTML"](
    "beforeend",
    '<div id="bot-container" class="b-o-t-container"> <div class="b-o-t-b-o-t"> <div class="b-o-t-inputfield"> <span class="b-o-t-text"><span>Risk</span></span> <input id="risk" type="number"               placeholder="USDT"               class="b-o-t-text-input"               value="10"             />           </div>           <div class="b-o-t-inputfield1">             <span class="b-o-t-text02"><span>Entry</span></span>             <input               id="entry"               type="number"               placeholder="USDT"               class="b-o-t-text-input1"             />           </div>           <div class="b-o-t-inputfield2">             <span class="b-o-t-text04"><span>Stop Loss</span></span>             <input               id="sl"               type="number"               placeholder="USDT"               class="b-o-t-text-input2"             />           </div>           <div class="b-o-t-inputfield3">             <span class="b-o-t-text06"><span>Margin</span></span>             <input               id="margin"               type="number"               placeholder="USDT"               class="b-o-t-text-input3"               disabled             />           </div>           <div class="b-o-t-inputfield4">             <span class="b-o-t-text08"><span>Volume</span></span>             <input               id="volume"               type="number"               placeholder="COIN"               class="b-o-t-text-input4"               disabled             />           </div>           <button id="copy1" class="b-o-t-button">             <span class="b-o-t-text10"><span>Copy</span></span>           </button>           <button id="pull" class="b-o-t-button1">             <span class="b-o-t-text12"><span>PULL</span></span>           </button>           <button id="push" class="b-o-t-button1">             <span class="b-o-t-text12"><span>PUSH</span></span>           </button>           <button id="custom" class="b-o-t-button2">             <span class="b-o-t-text14"><span>CUSTOM</span></span>           </button>           <button id="go" class="b-o-t-button3">             <span class="b-o-t-text16"><span>GO</span></span>           </button>           <button id="copy2" class="b-o-t-button4">             <span class="b-o-t-text18"><span>Copy</span></span>           </button>           <span class="b-o-t-text20 H2"><span>HGNC BOT</span></span>           <span class="b-o-t-text22 H3"><span>2.2</span></span>         </div>       </div>'
  );

  const isMan = key === "mannq";

  document.getElementById("entry").addEventListener("input", calculate);
  document.getElementById("sl").addEventListener("input", calculate);
  document.getElementById("copy1").addEventListener("click", copy1);
  document.getElementById("copy2").addEventListener("click", copy2);
  document.getElementById("pull").addEventListener("click", pullData);
  document.getElementById("push").addEventListener("click", pushData);
  document.getElementById("custom").addEventListener("click", custom);
  document.getElementById("go").addEventListener("click", go);

  setTimeout(() => {
    document.getElementById("bot-container").style.display = "block";
    document.getElementById(isMan ? "pull" : "push").style.display = "none";
    document.getElementById(isMan ? "push" : "pull").style.display = "flex";
  }, 500);

  setTimeout(() => {
    try {
      document
        .getElementsByClassName("components-newsticker-index-container")[0]
        .remove();
      document
        .getElementsByClassName("pages-contract-index-NetWorkStatusWrap")[0]
        .remove();
      document
        .getElementsByClassName(
          "pages-contract-index-content pages-contract-index-verticalLayout"
        )[0]
        .style.setProperty(
          "grid-template-columns",
          "minmax(582px,auto) 0px 320px",
          "important"
        );

      const listCoin = document.getElementsByClassName(
        "pages-contract-contractdetail-favlist-item"
      );
      for (const coin of listCoin) {
        coin.children[0].innerHTML =
          "  " + coin.children[0].innerHTML.split(" ")[0];
      }
    } catch {}
  }, 5000);
}

function cls() {
  document.getElementById("entry").value = "";
  document.getElementById("sl").value = "";
  document.getElementById("volume").value = "";
  document.getElementById("margin").value = "";
}

const ids = ["entry", "sl", "volume"];

function getData() {
  const result = [];
  let check = -1;
  ids.forEach((e) => {
    const z = document.getElementById(e).value;
    if (!z) check = 0;
    result.push(z);
  });
  return check === 0 ? 0 : result;
}

function go() {
  const data = getData();
  const text1 = document.getElementsByClassName(
    "pages-contract-handle-component-leverageedit-long"
  )[0].innerHTML;
  const text2 = document.getElementsByClassName(
    "pages-contract-handle-component-leverageedit-short"
  )[0].innerHTML;
  if (data === 0) {
    alert(`KHÔNG NHẬP SAO VÀO LỆNH ĐC !!!`);
    return;
  }
  if (
    (text1 || "").toLowerCase().includes("isolated") ||
    (text2 || "").toLowerCase().includes("isolated")
  ) {
    alert(`VÃI LZ ISOLATED !!!`);
    return;
  }
  const tabs = document.getElementsByClassName(
    "pages-contract-handle-index-tabs"
  )[0].childNodes;
  if (!tabs) return;
  const parent = document.getElementsByClassName(
    "pages-contract-handle-index-handleWrapper"
  )[0];
  const inputs = parent.querySelectorAll(".ant-input");
  const buttons1 = document.getElementsByClassName(
    "pages-contract-handle-component-index-longBtn"
  );
  const buttons2 = document.getElementsByClassName(
    "pages-contract-handle-component-index-shortBtn"
  );
  const isLong = +data[0] > +data[1];
  setTimeout(() => {
    tabs[0].click();
    inputs[0].focus();
    document.execCommand("selectAll");
    document.execCommand("delete");
    document.execCommand("insertText", false, +data[0]);
    inputs[1].focus();
    document.execCommand("selectAll");
    document.execCommand("delete");
    document.execCommand("insertText", false, +data[2]);
    isLong ? buttons1[0].click() : buttons2[0].click();
    tabs[1].click();
    inputs[2].focus();
    document.execCommand("selectAll");
    document.execCommand("delete");
    document.execCommand("insertText", false, +data[1]);
    inputs[3].focus();
    document.execCommand("selectAll");
    document.execCommand("delete");
    document.execCommand("insertText", false, +data[2]);
    isLong ? buttons2[1].click() : buttons1[1].click();
    tabs[0].click();
    setTimeout(() => {
      goodLuck(isLong, data);
    }, 500);
  }, 0);
}

function copy(index) {
  const data = getData();
  const parent = document.getElementsByClassName(
    "pages-contract-handle-index-handleWrapper"
  )[0];
  const inputs = parent.querySelectorAll(".ant-input");

  const n = document.getElementsByClassName(
    "pages-contract-handle-index-tabs"
  )[0]?.childNodes[0]?.className
    ? 0
    : 2;

  inputs[n].focus();
  document.execCommand("selectAll");
  document.execCommand("delete");
  document.execCommand("insertText", false, +data[index]);
  inputs[n + 1].focus();
  document.execCommand("selectAll");
  document.execCommand("delete");
  document.execCommand("insertText", false, +data[2]);
}

function goodLuck(isLong, data) {
  const coin = (
    document.querySelector(
      ".pages-contract-contractdetail-contractdetail-contractName"
    ).innerText || ""
  ).split(" ")[0];
  alert(
    `VỪA GO ${isLong ? "LONG" : "SHORT"} ${coin}. GIÁ ${data[0]}, SL ${
      data[1]
    }.\n XEM LẠI LỆNH ĐÚNG CHƯA.\n CHÚC MAY MẮN !!!`
  );
}

function getVal(name) {
  return document.getElementById(name).value;
}

function setInp(name, val) {
  document.getElementById(name).value = val;
}

function getN(n) {
  return +n;
}

function round(n) {
  return Math.round(n * 100) / 100;
}

function calculate() {
  try {
    const bay = getN(
      document
        .getElementsByClassName(
          "pages-contract-handle-component-leverageedit-long"
        )[0]
        .innerHTML.match(/\d+/)[0]
    );
    const risk = getN(getVal("risk"));
    const entry = getN(getVal("entry"));
    const sl = getN(getVal("sl"));
    if (!risk || !entry || !sl) return;
    const volume = round(Math.abs(risk / (entry - sl)));
    const margin = round(((volume * entry) / bay) * (1 + (1.2 * bay) / 1000));
    setInp("volume", volume);
    setInp("margin", margin);
  } catch {
    return;
  }
}

function copy1() {
  copy(0);
}

function copy2() {
  copy(1);
}

function custom() {
  console.log(`custom`);
}

async function pushData() {
  const entry = getN(getVal("entry"));
  const sl = getN(getVal("sl"));
  console.log(entry, sl);
  if (!entry || !sl) return;
  const response = await fetch(SERVER + "push", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      entry,
      sl,
    }),
  });
  console.log(await response.json());
}

async function pullData() {
  const response = await fetch(SERVER + "pull", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const result = await response.json();
  if (typeof result === "object") {
    setInp("entry", result["entry"]);
    setInp("sl", result["sl"]);
    calculate();
  }
}
