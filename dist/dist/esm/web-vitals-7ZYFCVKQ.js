"use strict";

// dist/dist/esm/web-vitals-7ZYFCVKQ.js
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
var web_vitals_7ZYFCVKQ_exports = {};
__export(web_vitals_7ZYFCVKQ_exports, {
  CLSThresholds: () => q,
  FCPThresholds: () => O,
  FIDThresholds: () => _,
  INPThresholds: () => z,
  LCPThresholds: () => K,
  TTFBThresholds: () => Q,
  getCLS: () => un,
  getFCP: () => tn,
  getFID: () => sn,
  getINP: () => fn,
  getLCP: () => dn,
  getTTFB: () => ln,
  onCLS: () => un,
  onFCP: () => tn,
  onFID: () => sn,
  onINP: () => fn,
  onLCP: () => dn,
  onTTFB: () => ln
});
module.exports = __toCommonJS(web_vitals_7ZYFCVKQ_exports);
var v;
var y;
var U;
var L;
var D;
var V = -1;
var m = function(t2) {
  addEventListener("pageshow", function(n) {
    n.persisted && (V = n.timeStamp, t2(n));
  }, true);
};
var M = function() {
  return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
};
var S = function() {
  var t2 = M();
  return t2 && t2.activationStart || 0;
};
var f = function(t2, n) {
  var r = M(), i = "navigate";
  return V >= 0 ? i = "back-forward-cache" : r && (document.prerendering || S() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : r.type && (i = r.type.replace(/_/g, "-"))), { name: t2, value: n === void 0 ? -1 : n, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: i };
};
var g = function(t2, n, r) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t2)) {
      var i = new PerformanceObserver(function(e) {
        Promise.resolve().then(function() {
          n(e.getEntries());
        });
      });
      return i.observe(Object.assign({ type: t2, buffered: true }, r || {})), i;
    }
  } catch {
  }
};
var d = function(t2, n, r, i) {
  var e, a;
  return function(c) {
    n.value >= 0 && (c || i) && ((a = n.value - (e || 0)) || e === void 0) && (e = n.value, n.delta = a, n.rating = function(u, o) {
      return u > o[1] ? "poor" : u > o[0] ? "needs-improvement" : "good";
    }(n.value, r), t2(n));
  };
};
var k = function(t2) {
  requestAnimationFrame(function() {
    return requestAnimationFrame(function() {
      return t2();
    });
  });
};
var P = function(t2) {
  var n = function(r) {
    r.type !== "pagehide" && document.visibilityState !== "hidden" || t2(r);
  };
  addEventListener("visibilitychange", n, true), addEventListener("pagehide", n, true);
};
var B = function(t2) {
  var n = false;
  return function(r) {
    n || (t2(r), n = true);
  };
};
var h = -1;
var R = function() {
  return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
};
var w = function(t2) {
  document.visibilityState === "hidden" && h > -1 && (h = t2.type === "visibilitychange" ? t2.timeStamp : 0, nn());
};
var H = function() {
  addEventListener("visibilitychange", w, true), addEventListener("prerenderingchange", w, true);
};
var nn = function() {
  removeEventListener("visibilitychange", w, true), removeEventListener("prerenderingchange", w, true);
};
var x = function() {
  return h < 0 && (h = R(), H(), m(function() {
    setTimeout(function() {
      h = R(), H();
    }, 0);
  })), { get firstHiddenTime() {
    return h;
  } };
};
var E = function(t2) {
  document.prerendering ? addEventListener("prerenderingchange", function() {
    return t2();
  }, true) : t2();
};
var O = [1800, 3e3];
var tn = function(t2, n) {
  n = n || {}, E(function() {
    var r, i = x(), e = f("FCP"), a = g("paint", function(c) {
      c.forEach(function(u) {
        u.name === "first-contentful-paint" && (a.disconnect(), u.startTime < i.firstHiddenTime && (e.value = Math.max(u.startTime - S(), 0), e.entries.push(u), r(true)));
      });
    });
    a && (r = d(t2, e, O, n.reportAllChanges), m(function(c) {
      e = f("FCP"), r = d(t2, e, O, n.reportAllChanges), k(function() {
        e.value = performance.now() - c.timeStamp, r(true);
      });
    }));
  });
};
var q = [0.1, 0.25];
var un = function(t2, n) {
  n = n || {}, tn(B(function() {
    var r, i = f("CLS", 0), e = 0, a = [], c = function(o) {
      o.forEach(function(s) {
        if (!s.hadRecentInput) {
          var p = a[0], b = a[a.length - 1];
          e && s.startTime - b.startTime < 1e3 && s.startTime - p.startTime < 5e3 ? (e += s.value, a.push(s)) : (e = s.value, a = [s]);
        }
      }), e > i.value && (i.value = e, i.entries = a, r());
    }, u = g("layout-shift", c);
    u && (r = d(t2, i, q, n.reportAllChanges), P(function() {
      c(u.takeRecords()), r(true);
    }), m(function() {
      e = 0, i = f("CLS", 0), r = d(t2, i, q, n.reportAllChanges), k(function() {
        return r();
      });
    }), setTimeout(r, 0));
  }));
};
var T = { passive: true, capture: true };
var en = /* @__PURE__ */ new Date();
var j = function(t2, n) {
  v || (v = n, y = t2, U = /* @__PURE__ */ new Date(), X(removeEventListener), W());
};
var W = function() {
  if (y >= 0 && y < U - en) {
    var t2 = { entryType: "first-input", name: v.type, target: v.target, cancelable: v.cancelable, startTime: v.timeStamp, processingStart: v.timeStamp + y };
    L.forEach(function(n) {
      n(t2);
    }), L = [];
  }
};
var rn = function(t2) {
  if (t2.cancelable) {
    var n = (t2.timeStamp > 1e12 ? /* @__PURE__ */ new Date() : performance.now()) - t2.timeStamp;
    t2.type == "pointerdown" ? function(r, i) {
      var e = function() {
        j(r, i), c();
      }, a = function() {
        c();
      }, c = function() {
        removeEventListener("pointerup", e, T), removeEventListener("pointercancel", a, T);
      };
      addEventListener("pointerup", e, T), addEventListener("pointercancel", a, T);
    }(n, t2) : j(n, t2);
  }
};
var X = function(t2) {
  ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
    return t2(n, rn, T);
  });
};
var _ = [100, 300];
var sn = function(t2, n) {
  n = n || {}, E(function() {
    var r, i = x(), e = f("FID"), a = function(o) {
      o.startTime < i.firstHiddenTime && (e.value = o.processingStart - o.startTime, e.entries.push(o), r(true));
    }, c = function(o) {
      o.forEach(a);
    }, u = g("first-input", c);
    r = d(t2, e, _, n.reportAllChanges), u && P(B(function() {
      c(u.takeRecords()), u.disconnect();
    })), u && m(function() {
      var o;
      e = f("FID"), r = d(t2, e, _, n.reportAllChanges), L = [], y = -1, v = null, X(addEventListener), o = a, L.push(o), W();
    });
  });
};
var Y = 0;
var I = 1 / 0;
var C = 0;
var an = function(t2) {
  t2.forEach(function(n) {
    n.interactionId && (I = Math.min(I, n.interactionId), C = Math.max(C, n.interactionId), Y = C ? (C - I) / 7 + 1 : 0);
  });
};
var Z = function() {
  return D ? Y : performance.interactionCount || 0;
};
var on = function() {
  "interactionCount" in performance || D || (D = g("event", an, { type: "event", buffered: true, durationThreshold: 0 }));
};
var z = [200, 500];
var $ = 0;
var G = function() {
  return Z() - $;
};
var l = [];
var F = {};
var J = function(t2) {
  var n = l[l.length - 1], r = F[t2.interactionId];
  if (r || l.length < 10 || t2.duration > n.latency) {
    if (r)
      r.entries.push(t2), r.latency = Math.max(r.latency, t2.duration);
    else {
      var i = { id: t2.interactionId, latency: t2.duration, entries: [t2] };
      F[i.id] = i, l.push(i);
    }
    l.sort(function(e, a) {
      return a.latency - e.latency;
    }), l.splice(10).forEach(function(e) {
      delete F[e.id];
    });
  }
};
var fn = function(t2, n) {
  n = n || {}, E(function() {
    var r;
    on();
    var i, e = f("INP"), a = function(u) {
      u.forEach(function(p) {
        p.interactionId && J(p), p.entryType === "first-input" && !l.some(function(b) {
          return b.entries.some(function(N) {
            return p.duration === N.duration && p.startTime === N.startTime;
          });
        }) && J(p);
      });
      var o, s = (o = Math.min(l.length - 1, Math.floor(G() / 50)), l[o]);
      s && s.latency !== e.value && (e.value = s.latency, e.entries = s.entries, i());
    }, c = g("event", a, { durationThreshold: (r = n.durationThreshold) !== null && r !== void 0 ? r : 40 });
    i = d(t2, e, z, n.reportAllChanges), c && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && c.observe({ type: "first-input", buffered: true }), P(function() {
      a(c.takeRecords()), e.value < 0 && G() > 0 && (e.value = 0, e.entries = []), i(true);
    }), m(function() {
      l = [], $ = Z(), e = f("INP"), i = d(t2, e, z, n.reportAllChanges);
    }));
  });
};
var K = [2500, 4e3];
var A = {};
var dn = function(t2, n) {
  n = n || {}, E(function() {
    var r, i = x(), e = f("LCP"), a = function(o) {
      var s = o[o.length - 1];
      s && s.startTime < i.firstHiddenTime && (e.value = Math.max(s.startTime - S(), 0), e.entries = [s], r());
    }, c = g("largest-contentful-paint", a);
    if (c) {
      r = d(t2, e, K, n.reportAllChanges);
      var u = B(function() {
        A[e.id] || (a(c.takeRecords()), c.disconnect(), A[e.id] = true, r(true));
      });
      ["keydown", "click"].forEach(function(o) {
        addEventListener(o, function() {
          return setTimeout(u, 0);
        }, true);
      }), P(u), m(function(o) {
        e = f("LCP"), r = d(t2, e, K, n.reportAllChanges), k(function() {
          e.value = performance.now() - o.timeStamp, A[e.id] = true, r(true);
        });
      });
    }
  });
};
var Q = [800, 1800];
var cn = function t(n) {
  document.prerendering ? E(function() {
    return t(n);
  }) : document.readyState !== "complete" ? addEventListener("load", function() {
    return t(n);
  }, true) : setTimeout(n, 0);
};
var ln = function(t2, n) {
  n = n || {};
  var r = f("TTFB"), i = d(t2, r, Q, n.reportAllChanges);
  cn(function() {
    var e = M();
    if (e) {
      var a = e.responseStart;
      if (a <= 0 || a > performance.now())
        return;
      r.value = Math.max(a - S(), 0), r.entries = [e], i(true), m(function() {
        r = f("TTFB", 0), (i = d(t2, r, Q, n.reportAllChanges))(true);
      });
    }
  });
};
