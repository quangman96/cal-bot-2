var _0x448842 = _0x1d4b;
(function (_0x33ef84, _0x181091) {
  var _0x1ea17e = _0x1d4b,
    _0x133ad7 = _0x33ef84();
  while (!![]) {
    try {
      var _0x6d2453 =
        (parseInt(_0x1ea17e(0x139)) / 0x1) *
          (parseInt(_0x1ea17e(0x138)) / 0x2) +
        (-parseInt(_0x1ea17e(0x125)) / 0x3) *
          (-parseInt(_0x1ea17e(0x140)) / 0x4) +
        parseInt(_0x1ea17e(0x148)) / 0x5 +
        parseInt(_0x1ea17e(0x144)) / 0x6 +
        (parseInt(_0x1ea17e(0x14a)) / 0x7) *
          (parseInt(_0x1ea17e(0x13e)) / 0x8) +
        -parseInt(_0x1ea17e(0x143)) / 0x9 +
        -parseInt(_0x1ea17e(0x121)) / 0xa;
      if (_0x6d2453 === _0x181091) break;
      else _0x133ad7["push"](_0x133ad7["shift"]());
    } catch (_0xc09bde) {
      _0x133ad7["push"](_0x133ad7["shift"]());
    }
  }
})(_0xdd9e, 0x75585);
var btnFillForm = document["getElementById"](_0x448842(0x14d)),
  iRisk = document[_0x448842(0x141)](_0x448842(0x12e)),
  iRatio = document[_0x448842(0x141)](_0x448842(0x14c)),
  iEntry = document[_0x448842(0x141)](_0x448842(0x142)),
  iStoploss = document[_0x448842(0x141)](_0x448842(0x12a)),
  iVol = document["getElementById"]("vol"),
  iMargin = document["getElementById"](_0x448842(0x13a)),
  volLong = document[_0x448842(0x141)](_0x448842(0x14e)),
  volShort = document[_0x448842(0x141)](_0x448842(0x12c));
iRisk[_0x448842(0x122)](_0x448842(0x124), caculateVol),
  iEntry[_0x448842(0x122)](_0x448842(0x124), caculateVol),
  iStoploss[_0x448842(0x122)]("input", caculateVol),
  iVol[_0x448842(0x122)](_0x448842(0x14b), (_0x56ae1c) => {
    var _0x42f256 = _0x448842;
    navigator[_0x42f256(0x12f)][_0x42f256(0x12b)](iVol[_0x42f256(0x13f)]);
  }),
  iEntry[_0x448842(0x122)](_0x448842(0x14b), (_0x17e471) => {
    var _0x115cc4 = _0x448842;
    navigator[_0x115cc4(0x12f)]["writeText"](iEntry[_0x115cc4(0x13f)]);
  }),
  iStoploss[_0x448842(0x122)](_0x448842(0x14b), (_0x4aeb4a) => {
    var _0x101117 = _0x448842;
    navigator["clipboard"][_0x101117(0x12b)](iStoploss[_0x101117(0x13f)]);
  }),
  volLong["addEventListener"](_0x448842(0x14b), (_0x4d7b59) => {
    var _0xaa1efe = _0x448842;
    navigator[_0xaa1efe(0x12f)][_0xaa1efe(0x12b)](volLong[_0xaa1efe(0x13f)]);
  }),
  volShort[_0x448842(0x122)](_0x448842(0x14b), (_0x34f808) => {
    navigator["clipboard"]["writeText"](volShort["value"]);
  });
function getElementByXpath(_0x1faa0a) {
  var _0x233f34 = _0x448842;
  return document[_0x233f34(0x123)](
    _0x1faa0a,
    document,
    null,
    XPathResult[_0x233f34(0x146)],
    null
  )[_0x233f34(0x132)];
}
function _0xdd9e() {
  var _0x19ae83 = [
    "length",
    "childNodes",
    "innerText",
    "Long",
    "stoploss_price",
    "writeText",
    "vol-short",
    "getElementsByClassName",
    "risk",
    "clipboard",
    "EPS_Content",
    "block",
    "singleNodeValue",
    "log",
    "style",
    "//div[contains(@class,\x20\x27ant-table-content\x27)]/table/tbody",
    "display",
    "replace",
    "1438mNkkST",
    "57GriPsc",
    "margin",
    "none",
    "includes",
    "toFixed",
    "472veihNv",
    "value",
    "3388rxkKZU",
    "getElementById",
    "entry_price",
    "8488251HTWGrS",
    "5525532MSsEhe",
    "abs",
    "FIRST_ORDERED_NODE_TYPE",
    "match",
    "347215dosBcj",
    "pages-contract-handle-component-leverageedit-long",
    "70826fePqSU",
    "dblclick",
    "ratio",
    "btnFillForm",
    "vol-long",
    "click",
    "6017690NlqsvV",
    "addEventListener",
    "evaluate",
    "input",
    "1407eoSsoE",
  ];
  _0xdd9e = function () {
    return _0x19ae83;
  };
  return _0xdd9e();
}
function displayVol(_0x31a95b, _0x5f21ac) {
  var _0x1c4850 = _0x448842,
    _0x9e91d1 = _0x31a95b[_0x1c4850(0x127)][0x1]["innerText"]
      [_0x1c4850(0x137)](",", "")
      [_0x1c4850(0x147)](/[+-]?\d+(\.\d+)?/g)
      ["map"](function (_0x21df29) {
        return parseFloat(_0x21df29) / 0x2;
      });
  _0x31a95b[_0x1c4850(0x127)][0x0][_0x1c4850(0x128)][_0x1c4850(0x13c)](
    _0x1c4850(0x129)
  )
    ? ((volLong[_0x1c4850(0x13f)] = _0x9e91d1),
      _0x5f21ac && (volShort[_0x1c4850(0x13f)] = ""))
    : ((volShort[_0x1c4850(0x13f)] = _0x9e91d1),
      _0x5f21ac && (volLong[_0x1c4850(0x13f)] = ""));
}
function _0x1d4b(_0x58d324, _0x26dc94) {
  var _0xdd9e61 = _0xdd9e();
  return (
    (_0x1d4b = function (_0x1d4b07, _0x5b0c86) {
      _0x1d4b07 = _0x1d4b07 - 0x121;
      var _0xde9af9 = _0xdd9e61[_0x1d4b07];
      return _0xde9af9;
    }),
    _0x1d4b(_0x58d324, _0x26dc94)
  );
}
function volLongShort() {
  var _0x4fac0f = _0x448842,
    _0x293a8e = getElementByXpath(_0x4fac0f(0x135));
  (_0x293a8e == null ||
    _0x293a8e[_0x4fac0f(0x127)][0x0]["childNodes"][_0x4fac0f(0x126)] == 0x1) &&
    ((volLong[_0x4fac0f(0x13f)] = ""), (volShort[_0x4fac0f(0x13f)] = ""));
  displayVol(_0x293a8e["childNodes"][0x0], !![]),
    _0x293a8e[_0x4fac0f(0x127)][_0x4fac0f(0x126)] > 0x1 &&
      displayVol(_0x293a8e[_0x4fac0f(0x127)][0x1], ![]);
}
function caculateVol() {
  var _0x5eb89e = _0x448842;
  try {
    (iVol[_0x5eb89e(0x13f)] = Math[_0x5eb89e(0x145)](
      iRisk[_0x5eb89e(0x13f)] / (iEntry["value"] - iStoploss["value"])
    )["toFixed"](0x4)),
      navigator[_0x5eb89e(0x12f)][_0x5eb89e(0x12b)](iVol["value"]);
    var _0x565e99 = document[_0x5eb89e(0x12d)](_0x5eb89e(0x149));
    _0x565e99[_0x5eb89e(0x126)] &&
      ((iRatio[_0x5eb89e(0x13f)] =
        _0x565e99[0x0][_0x5eb89e(0x128)][_0x5eb89e(0x147)](/\d+/)[0x0]),
      (iMargin["value"] = (((iEntry[_0x5eb89e(0x13f)] * iVol["value"]) /
        iRatio[_0x5eb89e(0x13f)]) *
        (0x1 + (1.2 * iRatio[_0x5eb89e(0x13f)]) / 0x3e8))[_0x5eb89e(0x13d)](
        0x4
      ))),
      volLongShort();
  } catch (_0x31e0a4) {
    console[_0x5eb89e(0x133)](_0x31e0a4);
  }
}
document["getElementsByClassName"]("eps_title")[0x0]["addEventListener"](
  _0x448842(0x14f),
  (_0x380ae2) => {
    var _0x2cdb19 = _0x448842,
      _0x187df6 = document[_0x2cdb19(0x141)](_0x2cdb19(0x130));
    _0x187df6["style"][_0x2cdb19(0x136)] == "" ||
    _0x187df6["style"]["display"] == _0x2cdb19(0x13b)
      ? (_0x187df6["style"][_0x2cdb19(0x136)] = _0x2cdb19(0x131))
      : (_0x187df6[_0x2cdb19(0x134)][_0x2cdb19(0x136)] = "none");
  }
);
