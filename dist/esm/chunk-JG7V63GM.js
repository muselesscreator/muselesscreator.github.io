"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/esm/chunk-JG7V63GM.js
var chunk_JG7V63GM_exports = {};
__export(chunk_JG7V63GM_exports, {
  a: () => m,
  b: () => n
});
module.exports = __toCommonJS(chunk_JG7V63GM_exports);
var g = Object.create;
var f = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf;
var k = Object.prototype.hasOwnProperty;
var m = (b, a) => () => (a || b((a = { exports: {} }).exports, a), a.exports);
var l = (b, a, c, e) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (let d of i(a))
      !k.call(b, d) && d !== c && f(b, d, { get: () => a[d], enumerable: !(e = h(a, d)) || e.enumerable });
  return b;
};
var n = (b, a, c) => (c = b != null ? g(j(b)) : {}, l(a || !b || !b.__esModule ? f(c, "default", { value: b, enumerable: true }) : c, b));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  a,
  b
});
