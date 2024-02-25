"use strict";

// dist/dist/dist/esm/index.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
var import_react_router_dom = require("react-router-dom");
var import_react_router_dom2 = require("react-router-dom");
var import_classnames = __toESM(require("classnames"));
var import_react_bootstrap = require("react-bootstrap");
var import_fa = require("react-icons/fa");
var import_fa6 = require("react-icons/fa6");
var import_classnames2 = __toESM(require("classnames"));
var import_react_router_dom3 = require("react-router-dom");
var import_use_keyed_state = require("@muselesscreator/use-keyed-state");
var import_classnames3 = __toESM(require("classnames"));
var import_fa2 = require("react-icons/fa");
var import_ri = require("react-icons/ri");
var import_gi = require("react-icons/gi");
var uE = m((ut) => {
  "use strict";
  var Bf = Symbol.for("react.element"), Ez = Symbol.for("react.portal"), Tz = Symbol.for("react.fragment"), kz = Symbol.for("react.strict_mode"), _z = Symbol.for("react.profiler"), Oz = Symbol.for("react.provider"), Nz = Symbol.for("react.context"), Lz = Symbol.for("react.forward_ref"), Uz = Symbol.for("react.suspense"), Iz = Symbol.for("react.memo"), $z = Symbol.for("react.lazy"), KR = Symbol.iterator;
  function Mz(n2) {
    return n2 === null || typeof n2 != "object" ? null : (n2 = KR && n2[KR] || n2["@@iterator"], typeof n2 == "function" ? n2 : null);
  }
  var tE = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, nE = Object.assign, rE = {};
  function zs(n2, r, o) {
    this.props = n2, this.context = r, this.refs = rE, this.updater = o || tE;
  }
  zs.prototype.isReactComponent = {};
  zs.prototype.setState = function(n2, r) {
    if (typeof n2 != "object" && typeof n2 != "function" && n2 != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n2, r, "setState");
  };
  zs.prototype.forceUpdate = function(n2) {
    this.updater.enqueueForceUpdate(this, n2, "forceUpdate");
  };
  function aE() {
  }
  aE.prototype = zs.prototype;
  function yS(n2, r, o) {
    this.props = n2, this.context = r, this.refs = rE, this.updater = o || tE;
  }
  var gS = yS.prototype = new aE();
  gS.constructor = yS;
  nE(gS, zs.prototype);
  gS.isPureReactComponent = true;
  var ZR = Array.isArray, iE = Object.prototype.hasOwnProperty, SS = { current: null }, oE = { key: true, ref: true, __self: true, __source: true };
  function lE(n2, r, o) {
    var u, c = {}, p = null, d = null;
    if (r != null)
      for (u in r.ref !== void 0 && (d = r.ref), r.key !== void 0 && (p = "" + r.key), r)
        iE.call(r, u) && !oE.hasOwnProperty(u) && (c[u] = r[u]);
    var b = arguments.length - 2;
    if (b === 1)
      c.children = o;
    else if (1 < b) {
      for (var x = Array(b), T = 0; T < b; T++)
        x[T] = arguments[T + 2];
      c.children = x;
    }
    if (n2 && n2.defaultProps)
      for (u in b = n2.defaultProps, b)
        c[u] === void 0 && (c[u] = b[u]);
    return { $$typeof: Bf, type: n2, key: p, ref: d, props: c, _owner: SS.current };
  }
  function Az(n2, r) {
    return { $$typeof: Bf, type: n2.type, key: r, ref: n2.ref, props: n2.props, _owner: n2._owner };
  }
  function bS(n2) {
    return typeof n2 == "object" && n2 !== null && n2.$$typeof === Bf;
  }
  function zz(n2) {
    var r = { "=": "=0", ":": "=2" };
    return "$" + n2.replace(/[=:]/g, function(o) {
      return r[o];
    });
  }
  var eE = /\/+/g;
  function hS(n2, r) {
    return typeof n2 == "object" && n2 !== null && n2.key != null ? zz("" + n2.key) : r.toString(36);
  }
  function Fv(n2, r, o, u, c) {
    var p = typeof n2;
    (p === "undefined" || p === "boolean") && (n2 = null);
    var d = false;
    if (n2 === null)
      d = true;
    else
      switch (p) {
        case "string":
        case "number":
          d = true;
          break;
        case "object":
          switch (n2.$$typeof) {
            case Bf:
            case Ez:
              d = true;
          }
      }
    if (d)
      return d = n2, c = c(d), n2 = u === "" ? "." + hS(d, 0) : u, ZR(c) ? (o = "", n2 != null && (o = n2.replace(eE, "$&/") + "/"), Fv(c, r, o, "", function(T) {
        return T;
      })) : c != null && (bS(c) && (c = Az(c, o + (!c.key || d && d.key === c.key ? "" : ("" + c.key).replace(eE, "$&/") + "/") + n2)), r.push(c)), 1;
    if (d = 0, u = u === "" ? "." : u + ":", ZR(n2))
      for (var b = 0; b < n2.length; b++) {
        p = n2[b];
        var x = u + hS(p, b);
        d += Fv(p, r, o, x, c);
      }
    else if (x = Mz(n2), typeof x == "function")
      for (n2 = x.call(n2), b = 0; !(p = n2.next()).done; )
        p = p.value, x = u + hS(p, b++), d += Fv(p, r, o, x, c);
    else if (p === "object")
      throw r = String(n2), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(n2).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
    return d;
  }
  function Hv(n2, r, o) {
    if (n2 == null)
      return n2;
    var u = [], c = 0;
    return Fv(n2, u, "", "", function(p) {
      return r.call(o, p, c++);
    }), u;
  }
  function jz(n2) {
    if (n2._status === -1) {
      var r = n2._result;
      r = r(), r.then(function(o) {
        (n2._status === 0 || n2._status === -1) && (n2._status = 1, n2._result = o);
      }, function(o) {
        (n2._status === 0 || n2._status === -1) && (n2._status = 2, n2._result = o);
      }), n2._status === -1 && (n2._status = 0, n2._result = r);
    }
    if (n2._status === 1)
      return n2._result.default;
    throw n2._result;
  }
  var Lr = { current: null }, Vv = { transition: null }, Pz = { ReactCurrentDispatcher: Lr, ReactCurrentBatchConfig: Vv, ReactCurrentOwner: SS };
  ut.Children = { map: Hv, forEach: function(n2, r, o) {
    Hv(n2, function() {
      r.apply(this, arguments);
    }, o);
  }, count: function(n2) {
    var r = 0;
    return Hv(n2, function() {
      r++;
    }), r;
  }, toArray: function(n2) {
    return Hv(n2, function(r) {
      return r;
    }) || [];
  }, only: function(n2) {
    if (!bS(n2))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n2;
  } };
  ut.Component = zs;
  ut.Fragment = Tz;
  ut.Profiler = _z;
  ut.PureComponent = yS;
  ut.StrictMode = kz;
  ut.Suspense = Uz;
  ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pz;
  ut.cloneElement = function(n2, r, o) {
    if (n2 == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n2 + ".");
    var u = nE({}, n2.props), c = n2.key, p = n2.ref, d = n2._owner;
    if (r != null) {
      if (r.ref !== void 0 && (p = r.ref, d = SS.current), r.key !== void 0 && (c = "" + r.key), n2.type && n2.type.defaultProps)
        var b = n2.type.defaultProps;
      for (x in r)
        iE.call(r, x) && !oE.hasOwnProperty(x) && (u[x] = r[x] === void 0 && b !== void 0 ? b[x] : r[x]);
    }
    var x = arguments.length - 2;
    if (x === 1)
      u.children = o;
    else if (1 < x) {
      b = Array(x);
      for (var T = 0; T < x; T++)
        b[T] = arguments[T + 2];
      u.children = b;
    }
    return { $$typeof: Bf, type: n2.type, key: c, ref: p, props: u, _owner: d };
  };
  ut.createContext = function(n2) {
    return n2 = { $$typeof: Nz, _currentValue: n2, _currentValue2: n2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n2.Provider = { $$typeof: Oz, _context: n2 }, n2.Consumer = n2;
  };
  ut.createElement = lE;
  ut.createFactory = function(n2) {
    var r = lE.bind(null, n2);
    return r.type = n2, r;
  };
  ut.createRef = function() {
    return { current: null };
  };
  ut.forwardRef = function(n2) {
    return { $$typeof: Lz, render: n2 };
  };
  ut.isValidElement = bS;
  ut.lazy = function(n2) {
    return { $$typeof: $z, _payload: { _status: -1, _result: n2 }, _init: jz };
  };
  ut.memo = function(n2, r) {
    return { $$typeof: Iz, type: n2, compare: r === void 0 ? null : r };
  };
  ut.startTransition = function(n2) {
    var r = Vv.transition;
    Vv.transition = {};
    try {
      n2();
    } finally {
      Vv.transition = r;
    }
  };
  ut.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  ut.useCallback = function(n2, r) {
    return Lr.current.useCallback(n2, r);
  };
  ut.useContext = function(n2) {
    return Lr.current.useContext(n2);
  };
  ut.useDebugValue = function() {
  };
  ut.useDeferredValue = function(n2) {
    return Lr.current.useDeferredValue(n2);
  };
  ut.useEffect = function(n2, r) {
    return Lr.current.useEffect(n2, r);
  };
  ut.useId = function() {
    return Lr.current.useId();
  };
  ut.useImperativeHandle = function(n2, r, o) {
    return Lr.current.useImperativeHandle(n2, r, o);
  };
  ut.useInsertionEffect = function(n2, r) {
    return Lr.current.useInsertionEffect(n2, r);
  };
  ut.useLayoutEffect = function(n2, r) {
    return Lr.current.useLayoutEffect(n2, r);
  };
  ut.useMemo = function(n2, r) {
    return Lr.current.useMemo(n2, r);
  };
  ut.useReducer = function(n2, r, o) {
    return Lr.current.useReducer(n2, r, o);
  };
  ut.useRef = function(n2) {
    return Lr.current.useRef(n2);
  };
  ut.useState = function(n2) {
    return Lr.current.useState(n2);
  };
  ut.useSyncExternalStore = function(n2, r, o) {
    return Lr.current.useSyncExternalStore(n2, r, o);
  };
  ut.useTransition = function() {
    return Lr.current.useTransition();
  };
  ut.version = "18.2.0";
});
var sE = m((st, Yv) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n2 = "18.2.0", r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), j2 = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), J = Symbol.iterator, ie = "@@iterator";
    function Ge(y) {
      if (y === null || typeof y != "object")
        return null;
      var R = J && y[J] || y[ie];
      return typeof R == "function" ? R : null;
    }
    var N = { current: null }, C = { transition: null }, k2 = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false }, Q = { current: null }, X = {}, re = null;
    function ee(y) {
      re = y;
    }
    X.setExtraStackFrame = function(y) {
      re = y;
    }, X.getCurrentStack = null, X.getStackAddendum = function() {
      var y = "";
      re && (y += re);
      var R = X.getCurrentStack;
      return R && (y += R() || ""), y;
    };
    var he = false, Me = false, Re = false, dt = false, yt = false, Te = { ReactCurrentDispatcher: N, ReactCurrentBatchConfig: C, ReactCurrentOwner: Q };
    Te.ReactDebugCurrentFrame = X, Te.ReactCurrentActQueue = k2;
    function bt(y) {
      {
        for (var R = arguments.length, v = new Array(R > 1 ? R - 1 : 0), g2 = 1; g2 < R; g2++)
          v[g2 - 1] = arguments[g2];
        Lt("warn", y, v);
      }
    }
    function be(y) {
      {
        for (var R = arguments.length, v = new Array(R > 1 ? R - 1 : 0), g2 = 1; g2 < R; g2++)
          v[g2 - 1] = arguments[g2];
        Lt("error", y, v);
      }
    }
    function Lt(y, R, v) {
      {
        var g2 = Te.ReactDebugCurrentFrame, D = g2.getStackAddendum();
        D !== "" && (R += "%s", v = v.concat([D]));
        var L = v.map(function(A) {
          return String(A);
        });
        L.unshift("Warning: " + R), Function.prototype.apply.call(console[y], console, L);
      }
    }
    var Pe = {};
    function at(y, R) {
      {
        var v = y.constructor, g2 = v && (v.displayName || v.name) || "ReactClass", D = g2 + "." + R;
        if (Pe[D])
          return;
        be("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, g2), Pe[D] = true;
      }
    }
    var bn = { isMounted: function(y) {
      return false;
    }, enqueueForceUpdate: function(y, R, v) {
      at(y, "forceUpdate");
    }, enqueueReplaceState: function(y, R, v, g2) {
      at(y, "replaceState");
    }, enqueueSetState: function(y, R, v, g2) {
      at(y, "setState");
    } }, Zt = Object.assign, M = {};
    Object.freeze(M);
    function q(y, R, v) {
      this.props = y, this.context = R, this.refs = M, this.updater = v || bn;
    }
    q.prototype.isReactComponent = {}, q.prototype.setState = function(y, R) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, R, "setState");
    }, q.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    {
      var Le = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] }, Qe = function(y, R) {
        Object.defineProperty(q.prototype, y, { get: function() {
          bt("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
        } });
      };
      for (var We in Le)
        Le.hasOwnProperty(We) && Qe(We, Le[We]);
    }
    function ct() {
    }
    ct.prototype = q.prototype;
    function ft(y, R, v) {
      this.props = y, this.context = R, this.refs = M, this.updater = v || bn;
    }
    var et = ft.prototype = new ct();
    et.constructor = ft, Zt(et, q.prototype), et.isPureReactComponent = true;
    function Be() {
      var y = { current: null };
      return Object.seal(y), y;
    }
    var Ot = Array.isArray;
    function $n(y) {
      return Ot(y);
    }
    function br(y) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, v = R && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return v;
      }
    }
    function en(y) {
      try {
        return wn(y), false;
      } catch {
        return true;
      }
    }
    function wn(y) {
      return "" + y;
    }
    function Bt(y) {
      if (en(y))
        return be("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(y)), wn(y);
    }
    function dn(y, R, v) {
      var g2 = y.displayName;
      if (g2)
        return g2;
      var D = R.displayName || R.name || "";
      return D !== "" ? v + "(" + D + ")" : v;
    }
    function tn(y) {
      return y.displayName || "Context";
    }
    function nn(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && be("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case p:
          return "Profiler";
        case c:
          return "StrictMode";
        case T:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case b:
            var R = y;
            return tn(R) + ".Consumer";
          case d:
            var v = y;
            return tn(v._context) + ".Provider";
          case x:
            return dn(y, y.render, "ForwardRef");
          case U:
            var g2 = y.displayName || null;
            return g2 !== null ? g2 : nn(y.type) || "Memo";
          case j2: {
            var D = y, L = D._payload, A = D._init;
            try {
              return nn(A(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Mn = Object.prototype.hasOwnProperty, Yn = { key: true, ref: true, __self: true, __source: true }, zr, wr, xn;
    xn = {};
    function xr(y) {
      if (Mn.call(y, "ref")) {
        var R = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (R && R.isReactWarning)
          return false;
      }
      return y.ref !== void 0;
    }
    function Dn(y) {
      if (Mn.call(y, "key")) {
        var R = Object.getOwnPropertyDescriptor(y, "key").get;
        if (R && R.isReactWarning)
          return false;
      }
      return y.key !== void 0;
    }
    function Dr(y, R) {
      var v = function() {
        zr || (zr = true, be("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
      };
      v.isReactWarning = true, Object.defineProperty(y, "key", { get: v, configurable: true });
    }
    function Xt(y, R) {
      var v = function() {
        wr || (wr = true, be("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
      };
      v.isReactWarning = true, Object.defineProperty(y, "ref", { get: v, configurable: true });
    }
    function jr(y) {
      if (typeof y.ref == "string" && Q.current && y.__self && Q.current.stateNode !== y.__self) {
        var R = nn(Q.current.type);
        xn[R] || (be('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, y.ref), xn[R] = true);
      }
    }
    var Zr = function(y, R, v, g2, D, L, A) {
      var te = { $$typeof: r, type: y, key: R, ref: v, props: A, _owner: L };
      return te._store = {}, Object.defineProperty(te._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(te, "_self", { configurable: false, enumerable: false, writable: false, value: g2 }), Object.defineProperty(te, "_source", { configurable: false, enumerable: false, writable: false, value: D }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function Va(y, R, v) {
      var g2, D = {}, L = null, A = null, te = null, K = null;
      if (R != null) {
        xr(R) && (A = R.ref, jr(R)), Dn(R) && (Bt(R.key), L = "" + R.key), te = R.__self === void 0 ? null : R.__self, K = R.__source === void 0 ? null : R.__source;
        for (g2 in R)
          Mn.call(R, g2) && !Yn.hasOwnProperty(g2) && (D[g2] = R[g2]);
      }
      var se = arguments.length - 2;
      if (se === 1)
        D.children = v;
      else if (se > 1) {
        for (var we = Array(se), Ee = 0; Ee < se; Ee++)
          we[Ee] = arguments[Ee + 2];
        Object.freeze && Object.freeze(we), D.children = we;
      }
      if (y && y.defaultProps) {
        var Oe = y.defaultProps;
        for (g2 in Oe)
          D[g2] === void 0 && (D[g2] = Oe[g2]);
      }
      if (L || A) {
        var Ue = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
        L && Dr(D, Ue), A && Xt(D, Ue);
      }
      return Zr(y, L, A, te, K, Q.current, D);
    }
    function oe(y, R) {
      var v = Zr(y.type, R, y.ref, y._self, y._source, y._owner, y.props);
      return v;
    }
    function xe(y, R, v) {
      if (y == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
      var g2, D = Zt({}, y.props), L = y.key, A = y.ref, te = y._self, K = y._source, se = y._owner;
      if (R != null) {
        xr(R) && (A = R.ref, se = Q.current), Dn(R) && (Bt(R.key), L = "" + R.key);
        var we;
        y.type && y.type.defaultProps && (we = y.type.defaultProps);
        for (g2 in R)
          Mn.call(R, g2) && !Yn.hasOwnProperty(g2) && (R[g2] === void 0 && we !== void 0 ? D[g2] = we[g2] : D[g2] = R[g2]);
      }
      var Ee = arguments.length - 2;
      if (Ee === 1)
        D.children = v;
      else if (Ee > 1) {
        for (var Oe = Array(Ee), Ue = 0; Ue < Ee; Ue++)
          Oe[Ue] = arguments[Ue + 2];
        D.children = Oe;
      }
      return Zr(y.type, L, A, te, K, se, D);
    }
    function Ae(y) {
      return typeof y == "object" && y !== null && y.$$typeof === r;
    }
    var pt = ".", vt = ":";
    function on(y) {
      var R = /[=:]/g, v = { "=": "=0", ":": "=2" }, g2 = y.replace(R, function(D) {
        return v[D];
      });
      return "$" + g2;
    }
    var Qt = false, ir = /\/+/g;
    function Dt(y) {
      return y.replace(ir, "$&/");
    }
    function Qn(y, R) {
      return typeof y == "object" && y !== null && y.key != null ? (Bt(y.key), on("" + y.key)) : R.toString(36);
    }
    function Ct(y, R, v, g2, D) {
      var L = typeof y;
      (L === "undefined" || L === "boolean") && (y = null);
      var A = false;
      if (y === null)
        A = true;
      else
        switch (L) {
          case "string":
          case "number":
            A = true;
            break;
          case "object":
            switch (y.$$typeof) {
              case r:
              case o:
                A = true;
            }
        }
      if (A) {
        var te = y, K = D(te), se = g2 === "" ? pt + Qn(te, 0) : g2;
        if ($n(K)) {
          var we = "";
          se != null && (we = Dt(se) + "/"), Ct(K, R, we, "", function(Yl) {
            return Yl;
          });
        } else
          K != null && (Ae(K) && (K.key && (!te || te.key !== K.key) && Bt(K.key), K = oe(K, v + (K.key && (!te || te.key !== K.key) ? Dt("" + K.key) + "/" : "") + se)), R.push(K));
        return 1;
      }
      var Ee, Oe, Ue = 0, Ve = g2 === "" ? pt : g2 + vt;
      if ($n(y))
        for (var $t = 0; $t < y.length; $t++)
          Ee = y[$t], Oe = Ve + Qn(Ee, $t), Ue += Ct(Ee, R, v, Oe, D);
      else {
        var tt = Ge(y);
        if (typeof tt == "function") {
          var Ga = y;
          tt === Ga.entries && (Qt || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = true);
          for (var Vo = tt.call(Ga), Yo, yc = 0; !(Yo = Vo.next()).done; )
            Ee = Yo.value, Oe = Ve + Qn(Ee, yc++), Ue += Ct(Ee, R, v, Oe, D);
        } else if (L === "object") {
          var ka = String(y);
          throw new Error("Objects are not valid as a React child (found: " + (ka === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : ka) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return Ue;
    }
    function Rt(y, R, v) {
      if (y == null)
        return y;
      var g2 = [], D = 0;
      return Ct(y, g2, "", "", function(L) {
        return R.call(v, L, D++);
      }), g2;
    }
    function Da(y) {
      var R = 0;
      return Rt(y, function() {
        R++;
      }), R;
    }
    function ea(y, R, v) {
      Rt(y, function() {
        R.apply(this, arguments);
      }, v);
    }
    function Bi(y) {
      return Rt(y, function(R) {
        return R;
      }) || [];
    }
    function No(y) {
      if (!Ae(y))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return y;
    }
    function $l(y) {
      var R = { $$typeof: b, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      R.Provider = { $$typeof: d, _context: R };
      var v = false, g2 = false, D = false;
      {
        var L = { $$typeof: b, _context: R };
        Object.defineProperties(L, { Provider: { get: function() {
          return g2 || (g2 = true, be("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
        }, set: function(A) {
          R.Provider = A;
        } }, _currentValue: { get: function() {
          return R._currentValue;
        }, set: function(A) {
          R._currentValue = A;
        } }, _currentValue2: { get: function() {
          return R._currentValue2;
        }, set: function(A) {
          R._currentValue2 = A;
        } }, _threadCount: { get: function() {
          return R._threadCount;
        }, set: function(A) {
          R._threadCount = A;
        } }, Consumer: { get: function() {
          return v || (v = true, be("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
        } }, displayName: { get: function() {
          return R.displayName;
        }, set: function(A) {
          D || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", A), D = true);
        } } }), R.Consumer = L;
      }
      return R._currentRenderer = null, R._currentRenderer2 = null, R;
    }
    var ta = -1, Ya = 0, Ca = 1, Si = 2;
    function Qa(y) {
      if (y._status === ta) {
        var R = y._result, v = R();
        if (v.then(function(L) {
          if (y._status === Ya || y._status === ta) {
            var A = y;
            A._status = Ca, A._result = L;
          }
        }, function(L) {
          if (y._status === Ya || y._status === ta) {
            var A = y;
            A._status = Si, A._result = L;
          }
        }), y._status === ta) {
          var g2 = y;
          g2._status = Ya, g2._result = v;
        }
      }
      if (y._status === Ca) {
        var D = y._result;
        return D === void 0 && be(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, D), "default" in D || be(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, D), D.default;
      } else
        throw y._result;
    }
    function Ra(y) {
      var R = { _status: ta, _result: y }, v = { $$typeof: j2, _payload: R, _init: Qa };
      {
        var g2, D;
        Object.defineProperties(v, { defaultProps: { configurable: true, get: function() {
          return g2;
        }, set: function(L) {
          be("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), g2 = L, Object.defineProperty(v, "defaultProps", { enumerable: true });
        } }, propTypes: { configurable: true, get: function() {
          return D;
        }, set: function(L) {
          be("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), D = L, Object.defineProperty(v, "propTypes", { enumerable: true });
        } } });
      }
      return v;
    }
    function na(y) {
      y != null && y.$$typeof === U ? be("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof y != "function" ? be("forwardRef requires a render function but was given %s.", y === null ? "null" : typeof y) : y.length !== 0 && y.length !== 2 && be("forwardRef render functions accept exactly two parameters: props and ref. %s", y.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), y != null && (y.defaultProps != null || y.propTypes != null) && be("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var R = { $$typeof: x, render: y };
      {
        var v;
        Object.defineProperty(R, "displayName", { enumerable: false, configurable: true, get: function() {
          return v;
        }, set: function(g2) {
          v = g2, !y.name && !y.displayName && (y.displayName = g2);
        } });
      }
      return R;
    }
    var ra;
    ra = Symbol.for("react.module.reference");
    function bi(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === u || y === p || yt || y === c || y === T || y === V || dt || y === H || he || Me || Re || typeof y == "object" && y !== null && (y.$$typeof === j2 || y.$$typeof === U || y.$$typeof === d || y.$$typeof === b || y.$$typeof === x || y.$$typeof === ra || y.getModuleId !== void 0));
    }
    function E(y, R) {
      bi(y) || be("memo: The first argument must be a component. Instead received: %s", y === null ? "null" : typeof y);
      var v = { $$typeof: U, type: y, compare: R === void 0 ? null : R };
      {
        var g2;
        Object.defineProperty(v, "displayName", { enumerable: false, configurable: true, get: function() {
          return g2;
        }, set: function(D) {
          g2 = D, !y.name && !y.displayName && (y.displayName = D);
        } });
      }
      return v;
    }
    function W() {
      var y = N.current;
      return y === null && be(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), y;
    }
    function ae(y) {
      var R = W();
      if (y._context !== void 0) {
        var v = y._context;
        v.Consumer === y ? be("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : v.Provider === y && be("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return R.useContext(y);
    }
    function ve(y) {
      var R = W();
      return R.useState(y);
    }
    function Xe(y, R, v) {
      var g2 = W();
      return g2.useReducer(y, R, v);
    }
    function it(y) {
      var R = W();
      return R.useRef(y);
    }
    function He(y, R) {
      var v = W();
      return v.useEffect(y, R);
    }
    function Ce(y, R) {
      var v = W();
      return v.useInsertionEffect(y, R);
    }
    function ln(y, R) {
      var v = W();
      return v.useLayoutEffect(y, R);
    }
    function Ut(y, R) {
      var v = W();
      return v.useCallback(y, R);
    }
    function It(y, R) {
      var v = W();
      return v.useMemo(y, R);
    }
    function An(y, R, v) {
      var g2 = W();
      return g2.useImperativeHandle(y, R, v);
    }
    function Ea(y, R) {
      {
        var v = W();
        return v.useDebugValue(y, R);
      }
    }
    function Lo() {
      var y = W();
      return y.useTransition();
    }
    function or(y) {
      var R = W();
      return R.useDeferredValue(y);
    }
    function hc() {
      var y = W();
      return y.useId();
    }
    function Wa(y, R, v) {
      var g2 = W();
      return g2.useSyncExternalStore(y, R, v);
    }
    var Fe = 0, wi, Ba, Uo, Io, $o, Mo, Ao;
    function zo() {
    }
    zo.__reactDisabledLog = true;
    function Ml() {
      {
        if (Fe === 0) {
          wi = console.log, Ba = console.info, Uo = console.warn, Io = console.error, $o = console.group, Mo = console.groupCollapsed, Ao = console.groupEnd;
          var y = { configurable: true, enumerable: true, value: zo, writable: true };
          Object.defineProperties(console, { info: y, log: y, warn: y, error: y, group: y, groupCollapsed: y, groupEnd: y });
        }
        Fe++;
      }
    }
    function zu() {
      {
        if (Fe--, Fe === 0) {
          var y = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, { log: Zt({}, y, { value: wi }), info: Zt({}, y, { value: Ba }), warn: Zt({}, y, { value: Uo }), error: Zt({}, y, { value: Io }), group: Zt({}, y, { value: $o }), groupCollapsed: Zt({}, y, { value: Mo }), groupEnd: Zt({}, y, { value: Ao }) });
        }
        Fe < 0 && be("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Al = Te.ReactCurrentDispatcher, Xi;
    function Ta(y, R, v) {
      {
        if (Xi === void 0)
          try {
            throw Error();
          } catch (D) {
            var g2 = D.stack.trim().match(/\n( *(at )?)/);
            Xi = g2 && g2[1] || "";
          }
        return `
` + Xi + y;
      }
    }
    var lr = false, aa;
    {
      var xi = typeof WeakMap == "function" ? WeakMap : Map;
      aa = new xi();
    }
    function Ji(y, R) {
      if (!y || lr)
        return "";
      {
        var v = aa.get(y);
        if (v !== void 0)
          return v;
      }
      var g2;
      lr = true;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = Al.current, Al.current = null, Ml();
      try {
        if (R) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (Ve) {
              g2 = Ve;
            }
            Reflect.construct(y, [], A);
          } else {
            try {
              A.call();
            } catch (Ve) {
              g2 = Ve;
            }
            y.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            g2 = Ve;
          }
          y();
        }
      } catch (Ve) {
        if (Ve && g2 && typeof Ve.stack == "string") {
          for (var te = Ve.stack.split(`
`), K = g2.stack.split(`
`), se = te.length - 1, we = K.length - 1; se >= 1 && we >= 0 && te[se] !== K[we]; )
            we--;
          for (; se >= 1 && we >= 0; se--, we--)
            if (te[se] !== K[we]) {
              if (se !== 1 || we !== 1)
                do
                  if (se--, we--, we < 0 || te[se] !== K[we]) {
                    var Ee = `
` + te[se].replace(" at new ", " at ");
                    return y.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", y.displayName)), typeof y == "function" && aa.set(y, Ee), Ee;
                  }
                while (se >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        lr = false, Al.current = L, zu(), Error.prepareStackTrace = D;
      }
      var Oe = y ? y.displayName || y.name : "", Ue = Oe ? Ta(Oe) : "";
      return typeof y == "function" && aa.set(y, Ue), Ue;
    }
    function zl(y, R, v) {
      return Ji(y, false);
    }
    function ju(y) {
      var R = y.prototype;
      return !!(R && R.isReactComponent);
    }
    function Di(y, R, v) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return Ji(y, ju(y));
      if (typeof y == "string")
        return Ta(y);
      switch (y) {
        case T:
          return Ta("Suspense");
        case V:
          return Ta("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case x:
            return zl(y.render);
          case U:
            return Di(y.type, R, v);
          case j2: {
            var g2 = y, D = g2._payload, L = g2._init;
            try {
              return Di(L(D), R, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Pu = {}, Xa = Te.ReactDebugCurrentFrame;
    function Gi(y) {
      if (y) {
        var R = y._owner, v = Di(y.type, y._source, R ? R.type : null);
        Xa.setExtraStackFrame(v);
      } else
        Xa.setExtraStackFrame(null);
    }
    function jl(y, R, v, g2, D) {
      {
        var L = Function.call.bind(Mn);
        for (var A in y)
          if (L(y, A)) {
            var te = void 0;
            try {
              if (typeof y[A] != "function") {
                var K = Error((g2 || "React class") + ": " + v + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              te = y[A](R, A, g2, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              te = se;
            }
            te && !(te instanceof Error) && (Gi(D), be("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g2 || "React class", v, A, typeof te), Gi(null)), te instanceof Error && !(te.message in Pu) && (Pu[te.message] = true, Gi(D), be("Failed %s type: %s", v, te.message), Gi(null));
          }
      }
    }
    function ia(y) {
      if (y) {
        var R = y._owner, v = Di(y.type, y._source, R ? R.type : null);
        ee(v);
      } else
        ee(null);
    }
    var jo;
    jo = false;
    function ot() {
      if (Q.current) {
        var y = nn(Q.current.type);
        if (y)
          return `

Check the render method of \`` + y + "`.";
      }
      return "";
    }
    function Pl(y) {
      if (y !== void 0) {
        var R = y.fileName.replace(/^.*[\\\/]/, ""), v = y.lineNumber;
        return `

Check your code at ` + R + ":" + v + ".";
      }
      return "";
    }
    function Hl(y) {
      return y != null ? Pl(y.__source) : "";
    }
    var ze = {};
    function Hu(y) {
      var R = ot();
      if (!R) {
        var v = typeof y == "string" ? y : y.displayName || y.name;
        v && (R = `

Check the top-level render call using <` + v + ">.");
      }
      return R;
    }
    function Cn(y, R) {
      if (!(!y._store || y._store.validated || y.key != null)) {
        y._store.validated = true;
        var v = Hu(R);
        if (!ze[v]) {
          ze[v] = true;
          var g2 = "";
          y && y._owner && y._owner !== Q.current && (g2 = " It was passed a child from " + nn(y._owner.type) + "."), ia(y), be('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, g2), ia(null);
        }
      }
    }
    function Ci(y, R) {
      if (typeof y == "object") {
        if ($n(y))
          for (var v = 0; v < y.length; v++) {
            var g2 = y[v];
            Ae(g2) && Cn(g2, R);
          }
        else if (Ae(y))
          y._store && (y._store.validated = true);
        else if (y) {
          var D = Ge(y);
          if (typeof D == "function" && D !== y.entries)
            for (var L = D.call(y), A; !(A = L.next()).done; )
              Ae(A.value) && Cn(A.value, R);
        }
      }
    }
    function Ja(y) {
      {
        var R = y.type;
        if (R == null || typeof R == "string")
          return;
        var v;
        if (typeof R == "function")
          v = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === x || R.$$typeof === U))
          v = R.propTypes;
        else
          return;
        if (v) {
          var g2 = nn(R);
          jl(v, y.props, "prop", g2, y);
        } else if (R.PropTypes !== void 0 && !jo) {
          jo = true;
          var D = nn(R);
          be("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && be("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fu(y) {
      {
        for (var R = Object.keys(y.props), v = 0; v < R.length; v++) {
          var g2 = R[v];
          if (g2 !== "children" && g2 !== "key") {
            ia(y), be("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g2), ia(null);
            break;
          }
        }
        y.ref !== null && (ia(y), be("Invalid attribute `ref` supplied to `React.Fragment`."), ia(null));
      }
    }
    function un(y, R, v) {
      var g2 = bi(y);
      if (!g2) {
        var D = "";
        (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var L = Hl(R);
        L ? D += L : D += ot();
        var A;
        y === null ? A = "null" : $n(y) ? A = "array" : y !== void 0 && y.$$typeof === r ? (A = "<" + (nn(y.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : A = typeof y, be("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, D);
      }
      var te = Va.apply(this, arguments);
      if (te == null)
        return te;
      if (g2)
        for (var K = 2; K < arguments.length; K++)
          Ci(arguments[K], y);
      return y === u ? Fu(te) : Ja(te), te;
    }
    var zt = false;
    function Vu(y) {
      var R = un.bind(null, y);
      return R.type = y, zt || (zt = true, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", { enumerable: false, get: function() {
        return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: y }), y;
      } }), R;
    }
    function Cr(y, R, v) {
      for (var g2 = xe.apply(this, arguments), D = 2; D < arguments.length; D++)
        Ci(arguments[D], g2.type);
      return Ja(g2), g2;
    }
    function ur(y, R) {
      var v = C.transition;
      C.transition = {};
      var g2 = C.transition;
      C.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        y();
      } finally {
        if (C.transition = v, v === null && g2._updatedFibers) {
          var D = g2._updatedFibers.size;
          D > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g2._updatedFibers.clear();
        }
      }
    }
    var oa = false, Po = null;
    function Ho(y) {
      if (Po === null)
        try {
          var R = ("require" + Math.random()).slice(0, 7), v = Yv && Yv[R];
          Po = v.call(Yv, "timers").setImmediate;
        } catch {
          Po = function(D) {
            oa === false && (oa = true, typeof MessageChannel > "u" && be("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var L = new MessageChannel();
            L.port1.onmessage = D, L.port2.postMessage(void 0);
          };
        }
      return Po(y);
    }
    var Pr = 0, Fl = false;
    function Ri(y) {
      {
        var R = Pr;
        Pr++, k2.current === null && (k2.current = []);
        var v = k2.isBatchingLegacy, g2;
        try {
          if (k2.isBatchingLegacy = true, g2 = y(), !v && k2.didScheduleLegacyUpdate) {
            var D = k2.current;
            D !== null && (k2.didScheduleLegacyUpdate = false, Ei(D));
          }
        } catch (Oe) {
          throw qi(R), Oe;
        } finally {
          k2.isBatchingLegacy = v;
        }
        if (g2 !== null && typeof g2 == "object" && typeof g2.then == "function") {
          var L = g2, A = false, te = { then: function(Oe, Ue) {
            A = true, L.then(function(Ve) {
              qi(R), Pr === 0 ? Vl(Ve, Oe, Ue) : Oe(Ve);
            }, function(Ve) {
              qi(R), Ue(Ve);
            });
          } };
          return !Fl && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            A || (Fl = true, be("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), te;
        } else {
          var K = g2;
          if (qi(R), Pr === 0) {
            var se = k2.current;
            se !== null && (Ei(se), k2.current = null);
            var we = { then: function(Oe, Ue) {
              k2.current === null ? (k2.current = [], Vl(K, Oe, Ue)) : Oe(K);
            } };
            return we;
          } else {
            var Ee = { then: function(Oe, Ue) {
              Oe(K);
            } };
            return Ee;
          }
        }
      }
    }
    function qi(y) {
      y !== Pr - 1 && be("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Pr = y;
    }
    function Vl(y, R, v) {
      {
        var g2 = k2.current;
        if (g2 !== null)
          try {
            Ei(g2), Ho(function() {
              g2.length === 0 ? (k2.current = null, R(y)) : Vl(y, R, v);
            });
          } catch (D) {
            v(D);
          }
        else
          R(y);
      }
    }
    var la = false;
    function Ei(y) {
      if (!la) {
        la = true;
        var R = 0;
        try {
          for (; R < y.length; R++) {
            var v = y[R];
            do
              v = v(true);
            while (v !== null);
          }
          y.length = 0;
        } catch (g2) {
          throw y = y.slice(R + 1), g2;
        } finally {
          la = false;
        }
      }
    }
    var Ti = un, Fo = Cr, Yu = Vu, Qu = { map: Rt, forEach: ea, count: Da, toArray: Bi, only: No };
    st.Children = Qu, st.Component = q, st.Fragment = u, st.Profiler = p, st.PureComponent = ft, st.StrictMode = c, st.Suspense = T, st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, st.cloneElement = Fo, st.createContext = $l, st.createElement = Ti, st.createFactory = Yu, st.createRef = Be, st.forwardRef = na, st.isValidElement = Ae, st.lazy = Ra, st.memo = E, st.startTransition = ur, st.unstable_act = Ri, st.useCallback = Ut, st.useContext = ae, st.useDebugValue = Ea, st.useDeferredValue = or, st.useEffect = He, st.useId = hc, st.useImperativeHandle = An, st.useInsertionEffect = Ce, st.useLayoutEffect = ln, st.useMemo = It, st.useReducer = Xe, st.useRef = it, st.useState = ve, st.useSyncExternalStore = Wa, st.useTransition = Lo, st.version = n2, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var Ur = m((q4, wS) => {
  "use strict";
  process.env.NODE_ENV === "production" ? wS.exports = uE() : wS.exports = sE();
});
var SE = m((Pt) => {
  "use strict";
  function RS(n2, r) {
    var o = n2.length;
    n2.push(r);
    e:
      for (; 0 < o; ) {
        var u = o - 1 >>> 1, c = n2[u];
        if (0 < Qv(c, r))
          n2[u] = r, n2[o] = c, o = u;
        else
          break e;
      }
  }
  function fi(n2) {
    return n2.length === 0 ? null : n2[0];
  }
  function Bv(n2) {
    if (n2.length === 0)
      return null;
    var r = n2[0], o = n2.pop();
    if (o !== r) {
      n2[0] = o;
      e:
        for (var u = 0, c = n2.length, p = c >>> 1; u < p; ) {
          var d = 2 * (u + 1) - 1, b = n2[d], x = d + 1, T = n2[x];
          if (0 > Qv(b, o))
            x < c && 0 > Qv(T, b) ? (n2[u] = T, n2[x] = o, u = x) : (n2[u] = b, n2[d] = o, u = d);
          else if (x < c && 0 > Qv(T, o))
            n2[u] = T, n2[x] = o, u = x;
          else
            break e;
        }
    }
    return r;
  }
  function Qv(n2, r) {
    var o = n2.sortIndex - r.sortIndex;
    return o !== 0 ? o : n2.id - r.id;
  }
  typeof performance == "object" && typeof performance.now == "function" ? (cE = performance, Pt.unstable_now = function() {
    return cE.now();
  }) : (xS = Date, fE = xS.now(), Pt.unstable_now = function() {
    return xS.now() - fE;
  });
  var cE, xS, fE, Hi = [], vl = [], Hz = 1, Ma = null, vr = 3, Xv = false, wu = false, Jf = false, vE = typeof setTimeout == "function" ? setTimeout : null, mE = typeof clearTimeout == "function" ? clearTimeout : null, dE = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function ES(n2) {
    for (var r = fi(vl); r !== null; ) {
      if (r.callback === null)
        Bv(vl);
      else if (r.startTime <= n2)
        Bv(vl), r.sortIndex = r.expirationTime, RS(Hi, r);
      else
        break;
      r = fi(vl);
    }
  }
  function TS(n2) {
    if (Jf = false, ES(n2), !wu)
      if (fi(Hi) !== null)
        wu = true, _S(kS);
      else {
        var r = fi(vl);
        r !== null && OS(TS, r.startTime - n2);
      }
  }
  function kS(n2, r) {
    wu = false, Jf && (Jf = false, mE(Gf), Gf = -1), Xv = true;
    var o = vr;
    try {
      for (ES(r), Ma = fi(Hi); Ma !== null && (!(Ma.expirationTime > r) || n2 && !gE()); ) {
        var u = Ma.callback;
        if (typeof u == "function") {
          Ma.callback = null, vr = Ma.priorityLevel;
          var c = u(Ma.expirationTime <= r);
          r = Pt.unstable_now(), typeof c == "function" ? Ma.callback = c : Ma === fi(Hi) && Bv(Hi), ES(r);
        } else
          Bv(Hi);
        Ma = fi(Hi);
      }
      if (Ma !== null)
        var p = true;
      else {
        var d = fi(vl);
        d !== null && OS(TS, d.startTime - r), p = false;
      }
      return p;
    } finally {
      Ma = null, vr = o, Xv = false;
    }
  }
  var Jv = false, Wv = null, Gf = -1, hE = 5, yE = -1;
  function gE() {
    return !(Pt.unstable_now() - yE < hE);
  }
  function DS() {
    if (Wv !== null) {
      var n2 = Pt.unstable_now();
      yE = n2;
      var r = true;
      try {
        r = Wv(true, n2);
      } finally {
        r ? Xf() : (Jv = false, Wv = null);
      }
    } else
      Jv = false;
  }
  var Xf;
  typeof dE == "function" ? Xf = function() {
    dE(DS);
  } : typeof MessageChannel < "u" ? (CS = new MessageChannel(), pE = CS.port2, CS.port1.onmessage = DS, Xf = function() {
    pE.postMessage(null);
  }) : Xf = function() {
    vE(DS, 0);
  };
  var CS, pE;
  function _S(n2) {
    Wv = n2, Jv || (Jv = true, Xf());
  }
  function OS(n2, r) {
    Gf = vE(function() {
      n2(Pt.unstable_now());
    }, r);
  }
  Pt.unstable_IdlePriority = 5;
  Pt.unstable_ImmediatePriority = 1;
  Pt.unstable_LowPriority = 4;
  Pt.unstable_NormalPriority = 3;
  Pt.unstable_Profiling = null;
  Pt.unstable_UserBlockingPriority = 2;
  Pt.unstable_cancelCallback = function(n2) {
    n2.callback = null;
  };
  Pt.unstable_continueExecution = function() {
    wu || Xv || (wu = true, _S(kS));
  };
  Pt.unstable_forceFrameRate = function(n2) {
    0 > n2 || 125 < n2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : hE = 0 < n2 ? Math.floor(1e3 / n2) : 5;
  };
  Pt.unstable_getCurrentPriorityLevel = function() {
    return vr;
  };
  Pt.unstable_getFirstCallbackNode = function() {
    return fi(Hi);
  };
  Pt.unstable_next = function(n2) {
    switch (vr) {
      case 1:
      case 2:
      case 3:
        var r = 3;
        break;
      default:
        r = vr;
    }
    var o = vr;
    vr = r;
    try {
      return n2();
    } finally {
      vr = o;
    }
  };
  Pt.unstable_pauseExecution = function() {
  };
  Pt.unstable_requestPaint = function() {
  };
  Pt.unstable_runWithPriority = function(n2, r) {
    switch (n2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        n2 = 3;
    }
    var o = vr;
    vr = n2;
    try {
      return r();
    } finally {
      vr = o;
    }
  };
  Pt.unstable_scheduleCallback = function(n2, r, o) {
    var u = Pt.unstable_now();
    switch (typeof o == "object" && o !== null ? (o = o.delay, o = typeof o == "number" && 0 < o ? u + o : u) : o = u, n2) {
      case 1:
        var c = -1;
        break;
      case 2:
        c = 250;
        break;
      case 5:
        c = 1073741823;
        break;
      case 4:
        c = 1e4;
        break;
      default:
        c = 5e3;
    }
    return c = o + c, n2 = { id: Hz++, callback: r, priorityLevel: n2, startTime: o, expirationTime: c, sortIndex: -1 }, o > u ? (n2.sortIndex = o, RS(vl, n2), fi(Hi) === null && n2 === fi(vl) && (Jf ? (mE(Gf), Gf = -1) : Jf = true, OS(TS, o - u))) : (n2.sortIndex = c, RS(Hi, n2), wu || Xv || (wu = true, _S(kS))), n2;
  };
  Pt.unstable_shouldYield = gE;
  Pt.unstable_wrapCallback = function(n2) {
    var r = vr;
    return function() {
      var o = vr;
      vr = r;
      try {
        return n2.apply(this, arguments);
      } finally {
        vr = o;
      }
    };
  };
});
var bE = m((At) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n2 = false, r = false, o = 5;
    function u(oe, xe) {
      var Ae = oe.length;
      oe.push(xe), d(oe, xe, Ae);
    }
    function c(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function p(oe) {
      if (oe.length === 0)
        return null;
      var xe = oe[0], Ae = oe.pop();
      return Ae !== xe && (oe[0] = Ae, b(oe, Ae, 0)), xe;
    }
    function d(oe, xe, Ae) {
      for (var pt = Ae; pt > 0; ) {
        var vt = pt - 1 >>> 1, on = oe[vt];
        if (x(on, xe) > 0)
          oe[vt] = xe, oe[pt] = on, pt = vt;
        else
          return;
      }
    }
    function b(oe, xe, Ae) {
      for (var pt = Ae, vt = oe.length, on = vt >>> 1; pt < on; ) {
        var Qt = (pt + 1) * 2 - 1, ir = oe[Qt], Dt = Qt + 1, Qn = oe[Dt];
        if (x(ir, xe) < 0)
          Dt < vt && x(Qn, ir) < 0 ? (oe[pt] = Qn, oe[Dt] = xe, pt = Dt) : (oe[pt] = ir, oe[Qt] = xe, pt = Qt);
        else if (Dt < vt && x(Qn, xe) < 0)
          oe[pt] = Qn, oe[Dt] = xe, pt = Dt;
        else
          return;
      }
    }
    function x(oe, xe) {
      var Ae = oe.sortIndex - xe.sortIndex;
      return Ae !== 0 ? Ae : oe.id - xe.id;
    }
    var T = 1, V = 2, U = 3, j2 = 4, H = 5;
    function J(oe, xe) {
    }
    var ie = typeof performance == "object" && typeof performance.now == "function";
    if (ie) {
      var Ge = performance;
      At.unstable_now = function() {
        return Ge.now();
      };
    } else {
      var N = Date, C = N.now();
      At.unstable_now = function() {
        return N.now() - C;
      };
    }
    var k2 = 1073741823, Q = -1, X = 250, re = 5e3, ee = 1e4, he = k2, Me = [], Re = [], dt = 1, yt = null, Te = U, bt = false, be = false, Lt = false, Pe = typeof setTimeout == "function" ? setTimeout : null, at = typeof clearTimeout == "function" ? clearTimeout : null, bn = typeof setImmediate < "u" ? setImmediate : null, Zt = typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
    function M(oe) {
      for (var xe = c(Re); xe !== null; ) {
        if (xe.callback === null)
          p(Re);
        else if (xe.startTime <= oe)
          p(Re), xe.sortIndex = xe.expirationTime, u(Me, xe);
        else
          return;
        xe = c(Re);
      }
    }
    function q(oe) {
      if (Lt = false, M(oe), !be)
        if (c(Me) !== null)
          be = true, Dr(Le);
        else {
          var xe = c(Re);
          xe !== null && Xt(q, xe.startTime - oe);
        }
    }
    function Le(oe, xe) {
      be = false, Lt && (Lt = false, jr()), bt = true;
      var Ae = Te;
      try {
        if (r)
          try {
            return Qe(oe, xe);
          } catch (vt) {
            if (yt !== null) {
              var pt = At.unstable_now();
              yt.isQueued = false;
            }
            throw vt;
          }
        else
          return Qe(oe, xe);
      } finally {
        yt = null, Te = Ae, bt = false;
      }
    }
    function Qe(oe, xe) {
      var Ae = xe;
      for (M(Ae), yt = c(Me); yt !== null && !n2 && !(yt.expirationTime > Ae && (!oe || Mn())); ) {
        var pt = yt.callback;
        if (typeof pt == "function") {
          yt.callback = null, Te = yt.priorityLevel;
          var vt = yt.expirationTime <= Ae, on = pt(vt);
          Ae = At.unstable_now(), typeof on == "function" ? yt.callback = on : yt === c(Me) && p(Me), M(Ae);
        } else
          p(Me);
        yt = c(Me);
      }
      if (yt !== null)
        return true;
      var Qt = c(Re);
      return Qt !== null && Xt(q, Qt.startTime - Ae), false;
    }
    function We(oe, xe) {
      switch (oe) {
        case T:
        case V:
        case U:
        case j2:
        case H:
          break;
        default:
          oe = U;
      }
      var Ae = Te;
      Te = oe;
      try {
        return xe();
      } finally {
        Te = Ae;
      }
    }
    function ct(oe) {
      var xe;
      switch (Te) {
        case T:
        case V:
        case U:
          xe = U;
          break;
        default:
          xe = Te;
          break;
      }
      var Ae = Te;
      Te = xe;
      try {
        return oe();
      } finally {
        Te = Ae;
      }
    }
    function ft(oe) {
      var xe = Te;
      return function() {
        var Ae = Te;
        Te = xe;
        try {
          return oe.apply(this, arguments);
        } finally {
          Te = Ae;
        }
      };
    }
    function et(oe, xe, Ae) {
      var pt = At.unstable_now(), vt;
      if (typeof Ae == "object" && Ae !== null) {
        var on = Ae.delay;
        typeof on == "number" && on > 0 ? vt = pt + on : vt = pt;
      } else
        vt = pt;
      var Qt;
      switch (oe) {
        case T:
          Qt = Q;
          break;
        case V:
          Qt = X;
          break;
        case H:
          Qt = he;
          break;
        case j2:
          Qt = ee;
          break;
        case U:
        default:
          Qt = re;
          break;
      }
      var ir = vt + Qt, Dt = { id: dt++, callback: xe, priorityLevel: oe, startTime: vt, expirationTime: ir, sortIndex: -1 };
      return vt > pt ? (Dt.sortIndex = vt, u(Re, Dt), c(Me) === null && Dt === c(Re) && (Lt ? jr() : Lt = true, Xt(q, vt - pt))) : (Dt.sortIndex = ir, u(Me, Dt), !be && !bt && (be = true, Dr(Le))), Dt;
    }
    function Be() {
    }
    function Ot() {
      !be && !bt && (be = true, Dr(Le));
    }
    function $n() {
      return c(Me);
    }
    function br(oe) {
      oe.callback = null;
    }
    function en() {
      return Te;
    }
    var wn = false, Bt = null, dn = -1, tn = o, nn = -1;
    function Mn() {
      var oe = At.unstable_now() - nn;
      return !(oe < tn);
    }
    function Yn() {
    }
    function zr(oe) {
      if (oe < 0 || oe > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      oe > 0 ? tn = Math.floor(1e3 / oe) : tn = o;
    }
    var wr = function() {
      if (Bt !== null) {
        var oe = At.unstable_now();
        nn = oe;
        var xe = true, Ae = true;
        try {
          Ae = Bt(xe, oe);
        } finally {
          Ae ? xn() : (wn = false, Bt = null);
        }
      } else
        wn = false;
    }, xn;
    if (typeof bn == "function")
      xn = function() {
        bn(wr);
      };
    else if (typeof MessageChannel < "u") {
      var xr = new MessageChannel(), Dn = xr.port2;
      xr.port1.onmessage = wr, xn = function() {
        Dn.postMessage(null);
      };
    } else
      xn = function() {
        Pe(wr, 0);
      };
    function Dr(oe) {
      Bt = oe, wn || (wn = true, xn());
    }
    function Xt(oe, xe) {
      dn = Pe(function() {
        oe(At.unstable_now());
      }, xe);
    }
    function jr() {
      at(dn), dn = -1;
    }
    var Zr = Yn, Va = null;
    At.unstable_IdlePriority = H, At.unstable_ImmediatePriority = T, At.unstable_LowPriority = j2, At.unstable_NormalPriority = U, At.unstable_Profiling = Va, At.unstable_UserBlockingPriority = V, At.unstable_cancelCallback = br, At.unstable_continueExecution = Ot, At.unstable_forceFrameRate = zr, At.unstable_getCurrentPriorityLevel = en, At.unstable_getFirstCallbackNode = $n, At.unstable_next = ct, At.unstable_pauseExecution = Be, At.unstable_requestPaint = Zr, At.unstable_runWithPriority = We, At.unstable_scheduleCallback = et, At.unstable_shouldYield = Mn, At.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var LS = m((eP, NS) => {
  "use strict";
  process.env.NODE_ENV === "production" ? NS.exports = SE() : NS.exports = bE();
});
var E_ = m((wa) => {
  "use strict";
  var TT = Ur(), Sa = LS();
  function ne(n2) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n2, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n2 + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var kT = /* @__PURE__ */ new Set(), gd = {};
  function Iu(n2, r) {
    ic(n2, r), ic(n2 + "Capture", r);
  }
  function ic(n2, r) {
    for (gd[n2] = r, n2 = 0; n2 < r.length; n2++)
      kT.add(r[n2]);
  }
  var Eo = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), t1 = Object.prototype.hasOwnProperty, Fz = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wE = {}, xE = {};
  function Vz(n2) {
    return t1.call(xE, n2) ? true : t1.call(wE, n2) ? false : Fz.test(n2) ? xE[n2] = true : (wE[n2] = true, false);
  }
  function Yz(n2, r, o, u) {
    if (o !== null && o.type === 0)
      return false;
    switch (typeof r) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return u ? false : o !== null ? !o.acceptsBooleans : (n2 = n2.toLowerCase().slice(0, 5), n2 !== "data-" && n2 !== "aria-");
      default:
        return false;
    }
  }
  function Qz(n2, r, o, u) {
    if (r === null || typeof r > "u" || Yz(n2, r, o, u))
      return true;
    if (u)
      return false;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === false;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return false;
  }
  function Mr(n2, r, o, u, c, p, d) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n2, this.type = r, this.sanitizeURL = p, this.removeEmptyString = d;
  }
  var ar = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n2) {
    ar[n2] = new Mr(n2, 0, false, n2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n2) {
    var r = n2[0];
    ar[r] = new Mr(r, 1, false, n2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 2, false, n2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 2, false, n2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n2) {
    ar[n2] = new Mr(n2, 3, false, n2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 3, true, n2, null, false, false);
  });
  ["capture", "download"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 4, false, n2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 6, false, n2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 5, false, n2.toLowerCase(), null, false, false);
  });
  var B1 = /[\-:]([a-z])/g;
  function X1(n2) {
    return n2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n2) {
    var r = n2.replace(B1, X1);
    ar[r] = new Mr(r, 1, false, n2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n2) {
    var r = n2.replace(B1, X1);
    ar[r] = new Mr(r, 1, false, n2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(n2) {
    var r = n2.replace(B1, X1);
    ar[r] = new Mr(r, 1, false, n2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 1, false, n2.toLowerCase(), null, false, false);
  });
  ar.xlinkHref = new Mr("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(n2) {
    ar[n2] = new Mr(n2, 1, false, n2.toLowerCase(), null, true, true);
  });
  function J1(n2, r, o, u) {
    var c = ar.hasOwnProperty(r) ? ar[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Qz(r, o, c, u) && (o = null), u || c === null ? Vz(r) && (o === null ? n2.removeAttribute(r) : n2.setAttribute(r, "" + o)) : c.mustUseProperty ? n2[c.propertyName] = o === null ? c.type === 3 ? false : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n2.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === true ? "" : "" + o, u ? n2.setAttributeNS(u, r, o) : n2.setAttribute(r, o))));
  }
  var Oo = TT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gv = Symbol.for("react.element"), Hs = Symbol.for("react.portal"), Fs = Symbol.for("react.fragment"), G1 = Symbol.for("react.strict_mode"), n1 = Symbol.for("react.profiler"), _T = Symbol.for("react.provider"), OT = Symbol.for("react.context"), q1 = Symbol.for("react.forward_ref"), r1 = Symbol.for("react.suspense"), a1 = Symbol.for("react.suspense_list"), K1 = Symbol.for("react.memo"), hl = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var NT = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var DE = Symbol.iterator;
  function qf(n2) {
    return n2 === null || typeof n2 != "object" ? null : (n2 = DE && n2[DE] || n2["@@iterator"], typeof n2 == "function" ? n2 : null);
  }
  var Kt = Object.assign, US;
  function id(n2) {
    if (US === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        US = r && r[1] || "";
      }
    return `
` + US + n2;
  }
  var IS = false;
  function $S(n2, r) {
    if (!n2 || IS)
      return "";
    IS = true;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (T) {
            var u = T;
          }
          Reflect.construct(n2, [], r);
        } else {
          try {
            r.call();
          } catch (T) {
            u = T;
          }
          n2.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          u = T;
        }
        n2();
      }
    } catch (T) {
      if (T && u && typeof T.stack == "string") {
        for (var c = T.stack.split(`
`), p = u.stack.split(`
`), d = c.length - 1, b = p.length - 1; 1 <= d && 0 <= b && c[d] !== p[b]; )
          b--;
        for (; 1 <= d && 0 <= b; d--, b--)
          if (c[d] !== p[b]) {
            if (d !== 1 || b !== 1)
              do
                if (d--, b--, 0 > b || c[d] !== p[b]) {
                  var x = `
` + c[d].replace(" at new ", " at ");
                  return n2.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n2.displayName)), x;
                }
              while (1 <= d && 0 <= b);
            break;
          }
      }
    } finally {
      IS = false, Error.prepareStackTrace = o;
    }
    return (n2 = n2 ? n2.displayName || n2.name : "") ? id(n2) : "";
  }
  function Wz(n2) {
    switch (n2.tag) {
      case 5:
        return id(n2.type);
      case 16:
        return id("Lazy");
      case 13:
        return id("Suspense");
      case 19:
        return id("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n2 = $S(n2.type, false), n2;
      case 11:
        return n2 = $S(n2.type.render, false), n2;
      case 1:
        return n2 = $S(n2.type, true), n2;
      default:
        return "";
    }
  }
  function i1(n2) {
    if (n2 == null)
      return null;
    if (typeof n2 == "function")
      return n2.displayName || n2.name || null;
    if (typeof n2 == "string")
      return n2;
    switch (n2) {
      case Fs:
        return "Fragment";
      case Hs:
        return "Portal";
      case n1:
        return "Profiler";
      case G1:
        return "StrictMode";
      case r1:
        return "Suspense";
      case a1:
        return "SuspenseList";
    }
    if (typeof n2 == "object")
      switch (n2.$$typeof) {
        case OT:
          return (n2.displayName || "Context") + ".Consumer";
        case _T:
          return (n2._context.displayName || "Context") + ".Provider";
        case q1:
          var r = n2.render;
          return n2 = n2.displayName, n2 || (n2 = r.displayName || r.name || "", n2 = n2 !== "" ? "ForwardRef(" + n2 + ")" : "ForwardRef"), n2;
        case K1:
          return r = n2.displayName || null, r !== null ? r : i1(n2.type) || "Memo";
        case hl:
          r = n2._payload, n2 = n2._init;
          try {
            return i1(n2(r));
          } catch {
          }
      }
    return null;
  }
  function Bz(n2) {
    var r = n2.type;
    switch (n2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n2 = r.render, n2 = n2.displayName || n2.name || "", r.displayName || (n2 !== "" ? "ForwardRef(" + n2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return i1(r);
      case 8:
        return r === G1 ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ol(n2) {
    switch (typeof n2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n2;
      case "object":
        return n2;
      default:
        return "";
    }
  }
  function LT(n2) {
    var r = n2.type;
    return (n2 = n2.nodeName) && n2.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Xz(n2) {
    var r = LT(n2) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n2.constructor.prototype, r), u = "" + n2[r];
    if (!n2.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, p = o.set;
      return Object.defineProperty(n2, r, { configurable: true, get: function() {
        return c.call(this);
      }, set: function(d) {
        u = "" + d, p.call(this, d);
      } }), Object.defineProperty(n2, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(d) {
        u = "" + d;
      }, stopTracking: function() {
        n2._valueTracker = null, delete n2[r];
      } };
    }
  }
  function qv(n2) {
    n2._valueTracker || (n2._valueTracker = Xz(n2));
  }
  function UT(n2) {
    if (!n2)
      return false;
    var r = n2._valueTracker;
    if (!r)
      return true;
    var o = r.getValue(), u = "";
    return n2 && (u = LT(n2) ? n2.checked ? "true" : "false" : n2.value), n2 = u, n2 !== o ? (r.setValue(n2), true) : false;
  }
  function Rm(n2) {
    if (n2 = n2 || (typeof document < "u" ? document : void 0), typeof n2 > "u")
      return null;
    try {
      return n2.activeElement || n2.body;
    } catch {
      return n2.body;
    }
  }
  function o1(n2, r) {
    var o = r.checked;
    return Kt({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n2._wrapperState.initialChecked });
  }
  function CE(n2, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Ol(r.value != null ? r.value : o), n2._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function IT(n2, r) {
    r = r.checked, r != null && J1(n2, "checked", r, false);
  }
  function l1(n2, r) {
    IT(n2, r);
    var o = Ol(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n2.value === "" || n2.value != o) && (n2.value = "" + o) : n2.value !== "" + o && (n2.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n2.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? u1(n2, r.type, o) : r.hasOwnProperty("defaultValue") && u1(n2, r.type, Ol(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n2.defaultChecked = !!r.defaultChecked);
  }
  function RE(n2, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n2._wrapperState.initialValue, o || r === n2.value || (n2.value = r), n2.defaultValue = r;
    }
    o = n2.name, o !== "" && (n2.name = ""), n2.defaultChecked = !!n2._wrapperState.initialChecked, o !== "" && (n2.name = o);
  }
  function u1(n2, r, o) {
    (r !== "number" || Rm(n2.ownerDocument) !== n2) && (o == null ? n2.defaultValue = "" + n2._wrapperState.initialValue : n2.defaultValue !== "" + o && (n2.defaultValue = "" + o));
  }
  var od = Array.isArray;
  function Zs(n2, r, o, u) {
    if (n2 = n2.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++)
        r["$" + o[c]] = true;
      for (o = 0; o < n2.length; o++)
        c = r.hasOwnProperty("$" + n2[o].value), n2[o].selected !== c && (n2[o].selected = c), c && u && (n2[o].defaultSelected = true);
    } else {
      for (o = "" + Ol(o), r = null, c = 0; c < n2.length; c++) {
        if (n2[c].value === o) {
          n2[c].selected = true, u && (n2[c].defaultSelected = true);
          return;
        }
        r !== null || n2[c].disabled || (r = n2[c]);
      }
      r !== null && (r.selected = true);
    }
  }
  function s1(n2, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(ne(91));
    return Kt({}, r, { value: void 0, defaultValue: void 0, children: "" + n2._wrapperState.initialValue });
  }
  function EE(n2, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(ne(92));
        if (od(o)) {
          if (1 < o.length)
            throw Error(ne(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n2._wrapperState = { initialValue: Ol(o) };
  }
  function $T(n2, r) {
    var o = Ol(r.value), u = Ol(r.defaultValue);
    o != null && (o = "" + o, o !== n2.value && (n2.value = o), r.defaultValue == null && n2.defaultValue !== o && (n2.defaultValue = o)), u != null && (n2.defaultValue = "" + u);
  }
  function TE(n2) {
    var r = n2.textContent;
    r === n2._wrapperState.initialValue && r !== "" && r !== null && (n2.value = r);
  }
  function MT(n2) {
    switch (n2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function c1(n2, r) {
    return n2 == null || n2 === "http://www.w3.org/1999/xhtml" ? MT(r) : n2 === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n2;
  }
  var Kv, AT = function(n2) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n2(r, o, u, c);
      });
    } : n2;
  }(function(n2, r) {
    if (n2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n2)
      n2.innerHTML = r;
    else {
      for (Kv = Kv || document.createElement("div"), Kv.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Kv.firstChild; n2.firstChild; )
        n2.removeChild(n2.firstChild);
      for (; r.firstChild; )
        n2.appendChild(r.firstChild);
    }
  });
  function Sd(n2, r) {
    if (r) {
      var o = n2.firstChild;
      if (o && o === n2.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n2.textContent = r;
  }
  var sd = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Jz = ["Webkit", "ms", "Moz", "O"];
  Object.keys(sd).forEach(function(n2) {
    Jz.forEach(function(r) {
      r = r + n2.charAt(0).toUpperCase() + n2.substring(1), sd[r] = sd[n2];
    });
  });
  function zT(n2, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || sd.hasOwnProperty(n2) && sd[n2] ? ("" + r).trim() : r + "px";
  }
  function jT(n2, r) {
    n2 = n2.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, c = zT(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n2.setProperty(o, c) : n2[o] = c;
      }
  }
  var Gz = Kt({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function f1(n2, r) {
    if (r) {
      if (Gz[n2] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(ne(137, n2));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(ne(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(ne(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(ne(62));
    }
  }
  function d1(n2, r) {
    if (n2.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var p1 = null;
  function Z1(n2) {
    return n2 = n2.target || n2.srcElement || window, n2.correspondingUseElement && (n2 = n2.correspondingUseElement), n2.nodeType === 3 ? n2.parentNode : n2;
  }
  var v1 = null, ec = null, tc = null;
  function kE(n2) {
    if (n2 = Ad(n2)) {
      if (typeof v1 != "function")
        throw Error(ne(280));
      var r = n2.stateNode;
      r && (r = Zm(r), v1(n2.stateNode, n2.type, r));
    }
  }
  function PT(n2) {
    ec ? tc ? tc.push(n2) : tc = [n2] : ec = n2;
  }
  function HT() {
    if (ec) {
      var n2 = ec, r = tc;
      if (tc = ec = null, kE(n2), r)
        for (n2 = 0; n2 < r.length; n2++)
          kE(r[n2]);
    }
  }
  function FT(n2, r) {
    return n2(r);
  }
  function VT() {
  }
  var MS = false;
  function YT(n2, r, o) {
    if (MS)
      return n2(r, o);
    MS = true;
    try {
      return FT(n2, r, o);
    } finally {
      MS = false, (ec !== null || tc !== null) && (VT(), HT());
    }
  }
  function bd(n2, r) {
    var o = n2.stateNode;
    if (o === null)
      return null;
    var u = Zm(o);
    if (u === null)
      return null;
    o = u[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n2 = n2.type, u = !(n2 === "button" || n2 === "input" || n2 === "select" || n2 === "textarea")), n2 = !u;
          break e;
        default:
          n2 = false;
      }
    if (n2)
      return null;
    if (o && typeof o != "function")
      throw Error(ne(231, r, typeof o));
    return o;
  }
  var m1 = false;
  if (Eo)
    try {
      js = {}, Object.defineProperty(js, "passive", { get: function() {
        m1 = true;
      } }), window.addEventListener("test", js, js), window.removeEventListener("test", js, js);
    } catch {
      m1 = false;
    }
  var js;
  function qz(n2, r, o, u, c, p, d, b, x) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, T);
    } catch (V) {
      this.onError(V);
    }
  }
  var cd = false, Em = null, Tm = false, h1 = null, Kz = { onError: function(n2) {
    cd = true, Em = n2;
  } };
  function Zz(n2, r, o, u, c, p, d, b, x) {
    cd = false, Em = null, qz.apply(Kz, arguments);
  }
  function ej(n2, r, o, u, c, p, d, b, x) {
    if (Zz.apply(this, arguments), cd) {
      if (cd) {
        var T = Em;
        cd = false, Em = null;
      } else
        throw Error(ne(198));
      Tm || (Tm = true, h1 = T);
    }
  }
  function $u(n2) {
    var r = n2, o = n2;
    if (n2.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n2 = r;
      do
        r = n2, r.flags & 4098 && (o = r.return), n2 = r.return;
      while (n2);
    }
    return r.tag === 3 ? o : null;
  }
  function QT(n2) {
    if (n2.tag === 13) {
      var r = n2.memoizedState;
      if (r === null && (n2 = n2.alternate, n2 !== null && (r = n2.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function _E(n2) {
    if ($u(n2) !== n2)
      throw Error(ne(188));
  }
  function tj(n2) {
    var r = n2.alternate;
    if (!r) {
      if (r = $u(n2), r === null)
        throw Error(ne(188));
      return r !== n2 ? null : n2;
    }
    for (var o = n2, u = r; ; ) {
      var c = o.return;
      if (c === null)
        break;
      var p = c.alternate;
      if (p === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === o)
            return _E(c), n2;
          if (p === u)
            return _E(c), r;
          p = p.sibling;
        }
        throw Error(ne(188));
      }
      if (o.return !== u.return)
        o = c, u = p;
      else {
        for (var d = false, b = c.child; b; ) {
          if (b === o) {
            d = true, o = c, u = p;
            break;
          }
          if (b === u) {
            d = true, u = c, o = p;
            break;
          }
          b = b.sibling;
        }
        if (!d) {
          for (b = p.child; b; ) {
            if (b === o) {
              d = true, o = p, u = c;
              break;
            }
            if (b === u) {
              d = true, u = p, o = c;
              break;
            }
            b = b.sibling;
          }
          if (!d)
            throw Error(ne(189));
        }
      }
      if (o.alternate !== u)
        throw Error(ne(190));
    }
    if (o.tag !== 3)
      throw Error(ne(188));
    return o.stateNode.current === o ? n2 : r;
  }
  function WT(n2) {
    return n2 = tj(n2), n2 !== null ? BT(n2) : null;
  }
  function BT(n2) {
    if (n2.tag === 5 || n2.tag === 6)
      return n2;
    for (n2 = n2.child; n2 !== null; ) {
      var r = BT(n2);
      if (r !== null)
        return r;
      n2 = n2.sibling;
    }
    return null;
  }
  var XT = Sa.unstable_scheduleCallback, OE = Sa.unstable_cancelCallback, nj = Sa.unstable_shouldYield, rj = Sa.unstable_requestPaint, cn = Sa.unstable_now, aj = Sa.unstable_getCurrentPriorityLevel, eb = Sa.unstable_ImmediatePriority, JT = Sa.unstable_UserBlockingPriority, km = Sa.unstable_NormalPriority, ij = Sa.unstable_LowPriority, GT = Sa.unstable_IdlePriority, Jm = null, Qi = null;
  function oj(n2) {
    if (Qi && typeof Qi.onCommitFiberRoot == "function")
      try {
        Qi.onCommitFiberRoot(Jm, n2, void 0, (n2.current.flags & 128) === 128);
      } catch {
      }
  }
  var hi = Math.clz32 ? Math.clz32 : sj, lj = Math.log, uj = Math.LN2;
  function sj(n2) {
    return n2 >>>= 0, n2 === 0 ? 32 : 31 - (lj(n2) / uj | 0) | 0;
  }
  var Zv = 64, em = 4194304;
  function ld(n2) {
    switch (n2 & -n2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n2;
    }
  }
  function _m(n2, r) {
    var o = n2.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, c = n2.suspendedLanes, p = n2.pingedLanes, d = o & 268435455;
    if (d !== 0) {
      var b = d & ~c;
      b !== 0 ? u = ld(b) : (p &= d, p !== 0 && (u = ld(p)));
    } else
      d = o & ~c, d !== 0 ? u = ld(d) : p !== 0 && (u = ld(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n2.entangledLanes, r !== 0)
      for (n2 = n2.entanglements, r &= u; 0 < r; )
        o = 31 - hi(r), c = 1 << o, u |= n2[o], r &= ~c;
    return u;
  }
  function cj(n2, r) {
    switch (n2) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fj(n2, r) {
    for (var o = n2.suspendedLanes, u = n2.pingedLanes, c = n2.expirationTimes, p = n2.pendingLanes; 0 < p; ) {
      var d = 31 - hi(p), b = 1 << d, x = c[d];
      x === -1 ? (!(b & o) || b & u) && (c[d] = cj(b, r)) : x <= r && (n2.expiredLanes |= b), p &= ~b;
    }
  }
  function y1(n2) {
    return n2 = n2.pendingLanes & -1073741825, n2 !== 0 ? n2 : n2 & 1073741824 ? 1073741824 : 0;
  }
  function qT() {
    var n2 = Zv;
    return Zv <<= 1, !(Zv & 4194240) && (Zv = 64), n2;
  }
  function AS(n2) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n2);
    return r;
  }
  function $d(n2, r, o) {
    n2.pendingLanes |= r, r !== 536870912 && (n2.suspendedLanes = 0, n2.pingedLanes = 0), n2 = n2.eventTimes, r = 31 - hi(r), n2[r] = o;
  }
  function dj(n2, r) {
    var o = n2.pendingLanes & ~r;
    n2.pendingLanes = r, n2.suspendedLanes = 0, n2.pingedLanes = 0, n2.expiredLanes &= r, n2.mutableReadLanes &= r, n2.entangledLanes &= r, r = n2.entanglements;
    var u = n2.eventTimes;
    for (n2 = n2.expirationTimes; 0 < o; ) {
      var c = 31 - hi(o), p = 1 << c;
      r[c] = 0, u[c] = -1, n2[c] = -1, o &= ~p;
    }
  }
  function tb(n2, r) {
    var o = n2.entangledLanes |= r;
    for (n2 = n2.entanglements; o; ) {
      var u = 31 - hi(o), c = 1 << u;
      c & r | n2[u] & r && (n2[u] |= r), o &= ~c;
    }
  }
  var _t = 0;
  function KT(n2) {
    return n2 &= -n2, 1 < n2 ? 4 < n2 ? n2 & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ZT, nb, ek, tk, nk, g1 = false, tm = [], xl = null, Dl = null, Cl = null, wd = /* @__PURE__ */ new Map(), xd = /* @__PURE__ */ new Map(), gl = [], pj = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function NE(n2, r) {
    switch (n2) {
      case "focusin":
      case "focusout":
        xl = null;
        break;
      case "dragenter":
      case "dragleave":
        Dl = null;
        break;
      case "mouseover":
      case "mouseout":
        Cl = null;
        break;
      case "pointerover":
      case "pointerout":
        wd.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xd.delete(r.pointerId);
    }
  }
  function Kf(n2, r, o, u, c, p) {
    return n2 === null || n2.nativeEvent !== p ? (n2 = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = Ad(r), r !== null && nb(r)), n2) : (n2.eventSystemFlags |= u, r = n2.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n2);
  }
  function vj(n2, r, o, u, c) {
    switch (r) {
      case "focusin":
        return xl = Kf(xl, n2, r, o, u, c), true;
      case "dragenter":
        return Dl = Kf(Dl, n2, r, o, u, c), true;
      case "mouseover":
        return Cl = Kf(Cl, n2, r, o, u, c), true;
      case "pointerover":
        var p = c.pointerId;
        return wd.set(p, Kf(wd.get(p) || null, n2, r, o, u, c)), true;
      case "gotpointercapture":
        return p = c.pointerId, xd.set(p, Kf(xd.get(p) || null, n2, r, o, u, c)), true;
    }
    return false;
  }
  function rk(n2) {
    var r = Cu(n2.target);
    if (r !== null) {
      var o = $u(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = QT(o), r !== null) {
            n2.blockedOn = r, nk(n2.priority, function() {
              ek(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n2.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n2.blockedOn = null;
  }
  function mm(n2) {
    if (n2.blockedOn !== null)
      return false;
    for (var r = n2.targetContainers; 0 < r.length; ) {
      var o = S1(n2.domEventName, n2.eventSystemFlags, r[0], n2.nativeEvent);
      if (o === null) {
        o = n2.nativeEvent;
        var u = new o.constructor(o.type, o);
        p1 = u, o.target.dispatchEvent(u), p1 = null;
      } else
        return r = Ad(o), r !== null && nb(r), n2.blockedOn = o, false;
      r.shift();
    }
    return true;
  }
  function LE(n2, r, o) {
    mm(n2) && o.delete(r);
  }
  function mj() {
    g1 = false, xl !== null && mm(xl) && (xl = null), Dl !== null && mm(Dl) && (Dl = null), Cl !== null && mm(Cl) && (Cl = null), wd.forEach(LE), xd.forEach(LE);
  }
  function Zf(n2, r) {
    n2.blockedOn === r && (n2.blockedOn = null, g1 || (g1 = true, Sa.unstable_scheduleCallback(Sa.unstable_NormalPriority, mj)));
  }
  function Dd(n2) {
    function r(c) {
      return Zf(c, n2);
    }
    if (0 < tm.length) {
      Zf(tm[0], n2);
      for (var o = 1; o < tm.length; o++) {
        var u = tm[o];
        u.blockedOn === n2 && (u.blockedOn = null);
      }
    }
    for (xl !== null && Zf(xl, n2), Dl !== null && Zf(Dl, n2), Cl !== null && Zf(Cl, n2), wd.forEach(r), xd.forEach(r), o = 0; o < gl.length; o++)
      u = gl[o], u.blockedOn === n2 && (u.blockedOn = null);
    for (; 0 < gl.length && (o = gl[0], o.blockedOn === null); )
      rk(o), o.blockedOn === null && gl.shift();
  }
  var nc = Oo.ReactCurrentBatchConfig, Om = true;
  function hj(n2, r, o, u) {
    var c = _t, p = nc.transition;
    nc.transition = null;
    try {
      _t = 1, rb(n2, r, o, u);
    } finally {
      _t = c, nc.transition = p;
    }
  }
  function yj(n2, r, o, u) {
    var c = _t, p = nc.transition;
    nc.transition = null;
    try {
      _t = 4, rb(n2, r, o, u);
    } finally {
      _t = c, nc.transition = p;
    }
  }
  function rb(n2, r, o, u) {
    if (Om) {
      var c = S1(n2, r, o, u);
      if (c === null)
        YS(n2, r, u, Nm, o), NE(n2, u);
      else if (vj(c, n2, r, o, u))
        u.stopPropagation();
      else if (NE(n2, u), r & 4 && -1 < pj.indexOf(n2)) {
        for (; c !== null; ) {
          var p = Ad(c);
          if (p !== null && ZT(p), p = S1(n2, r, o, u), p === null && YS(n2, r, u, Nm, o), p === c)
            break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else
        YS(n2, r, u, null, o);
    }
  }
  var Nm = null;
  function S1(n2, r, o, u) {
    if (Nm = null, n2 = Z1(u), n2 = Cu(n2), n2 !== null)
      if (r = $u(n2), r === null)
        n2 = null;
      else if (o = r.tag, o === 13) {
        if (n2 = QT(r), n2 !== null)
          return n2;
        n2 = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n2 = null;
      } else
        r !== n2 && (n2 = null);
    return Nm = n2, null;
  }
  function ak(n2) {
    switch (n2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (aj()) {
          case eb:
            return 1;
          case JT:
            return 4;
          case km:
          case ij:
            return 16;
          case GT:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bl = null, ab = null, hm = null;
  function ik() {
    if (hm)
      return hm;
    var n2, r = ab, o = r.length, u, c = "value" in bl ? bl.value : bl.textContent, p = c.length;
    for (n2 = 0; n2 < o && r[n2] === c[n2]; n2++)
      ;
    var d = o - n2;
    for (u = 1; u <= d && r[o - u] === c[p - u]; u++)
      ;
    return hm = c.slice(n2, 1 < u ? 1 - u : void 0);
  }
  function ym(n2) {
    var r = n2.keyCode;
    return "charCode" in n2 ? (n2 = n2.charCode, n2 === 0 && r === 13 && (n2 = 13)) : n2 = r, n2 === 10 && (n2 = 13), 32 <= n2 || n2 === 13 ? n2 : 0;
  }
  function nm() {
    return true;
  }
  function UE() {
    return false;
  }
  function ba(n2) {
    function r(o, u, c, p, d) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = d, this.currentTarget = null;
      for (var b in n2)
        n2.hasOwnProperty(b) && (o = n2[b], this[b] = o ? o(p) : p[b]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? nm : UE, this.isPropagationStopped = UE, this;
    }
    return Kt(r.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = nm);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = nm);
    }, persist: function() {
    }, isPersistent: nm }), r;
  }
  var dc = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n2) {
    return n2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ib = ba(dc), Md = Kt({}, dc, { view: 0, detail: 0 }), gj = ba(Md), zS, jS, ed, Gm = Kt({}, Md, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ob, button: 0, buttons: 0, relatedTarget: function(n2) {
    return n2.relatedTarget === void 0 ? n2.fromElement === n2.srcElement ? n2.toElement : n2.fromElement : n2.relatedTarget;
  }, movementX: function(n2) {
    return "movementX" in n2 ? n2.movementX : (n2 !== ed && (ed && n2.type === "mousemove" ? (zS = n2.screenX - ed.screenX, jS = n2.screenY - ed.screenY) : jS = zS = 0, ed = n2), zS);
  }, movementY: function(n2) {
    return "movementY" in n2 ? n2.movementY : jS;
  } }), IE = ba(Gm), Sj = Kt({}, Gm, { dataTransfer: 0 }), bj = ba(Sj), wj = Kt({}, Md, { relatedTarget: 0 }), PS = ba(wj), xj = Kt({}, dc, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dj = ba(xj), Cj = Kt({}, dc, { clipboardData: function(n2) {
    return "clipboardData" in n2 ? n2.clipboardData : window.clipboardData;
  } }), Rj = ba(Cj), Ej = Kt({}, dc, { data: 0 }), $E = ba(Ej), Tj = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, kj = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, _j = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Oj(n2) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n2) : (n2 = _j[n2]) ? !!r[n2] : false;
  }
  function ob() {
    return Oj;
  }
  var Nj = Kt({}, Md, { key: function(n2) {
    if (n2.key) {
      var r = Tj[n2.key] || n2.key;
      if (r !== "Unidentified")
        return r;
    }
    return n2.type === "keypress" ? (n2 = ym(n2), n2 === 13 ? "Enter" : String.fromCharCode(n2)) : n2.type === "keydown" || n2.type === "keyup" ? kj[n2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ob, charCode: function(n2) {
    return n2.type === "keypress" ? ym(n2) : 0;
  }, keyCode: function(n2) {
    return n2.type === "keydown" || n2.type === "keyup" ? n2.keyCode : 0;
  }, which: function(n2) {
    return n2.type === "keypress" ? ym(n2) : n2.type === "keydown" || n2.type === "keyup" ? n2.keyCode : 0;
  } }), Lj = ba(Nj), Uj = Kt({}, Gm, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ME = ba(Uj), Ij = Kt({}, Md, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ob }), $j = ba(Ij), Mj = Kt({}, dc, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Aj = ba(Mj), zj = Kt({}, Gm, { deltaX: function(n2) {
    return "deltaX" in n2 ? n2.deltaX : "wheelDeltaX" in n2 ? -n2.wheelDeltaX : 0;
  }, deltaY: function(n2) {
    return "deltaY" in n2 ? n2.deltaY : "wheelDeltaY" in n2 ? -n2.wheelDeltaY : "wheelDelta" in n2 ? -n2.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), jj = ba(zj), Pj = [9, 13, 27, 32], lb = Eo && "CompositionEvent" in window, fd = null;
  Eo && "documentMode" in document && (fd = document.documentMode);
  var Hj = Eo && "TextEvent" in window && !fd, ok = Eo && (!lb || fd && 8 < fd && 11 >= fd), AE = " ", zE = false;
  function lk(n2, r) {
    switch (n2) {
      case "keyup":
        return Pj.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function uk(n2) {
    return n2 = n2.detail, typeof n2 == "object" && "data" in n2 ? n2.data : null;
  }
  var Vs = false;
  function Fj(n2, r) {
    switch (n2) {
      case "compositionend":
        return uk(r);
      case "keypress":
        return r.which !== 32 ? null : (zE = true, AE);
      case "textInput":
        return n2 = r.data, n2 === AE && zE ? null : n2;
      default:
        return null;
    }
  }
  function Vj(n2, r) {
    if (Vs)
      return n2 === "compositionend" || !lb && lk(n2, r) ? (n2 = ik(), hm = ab = bl = null, Vs = false, n2) : null;
    switch (n2) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ok && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Yj = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function jE(n2) {
    var r = n2 && n2.nodeName && n2.nodeName.toLowerCase();
    return r === "input" ? !!Yj[n2.type] : r === "textarea";
  }
  function sk(n2, r, o, u) {
    PT(u), r = Lm(r, "onChange"), 0 < r.length && (o = new ib("onChange", "change", null, o, u), n2.push({ event: o, listeners: r }));
  }
  var dd = null, Cd = null;
  function Qj(n2) {
    bk(n2, 0);
  }
  function qm(n2) {
    var r = Ws(n2);
    if (UT(r))
      return n2;
  }
  function Wj(n2, r) {
    if (n2 === "change")
      return r;
  }
  var ck = false;
  Eo && (Eo ? (am = "oninput" in document, am || (HS = document.createElement("div"), HS.setAttribute("oninput", "return;"), am = typeof HS.oninput == "function"), rm = am) : rm = false, ck = rm && (!document.documentMode || 9 < document.documentMode));
  var rm, am, HS;
  function PE() {
    dd && (dd.detachEvent("onpropertychange", fk), Cd = dd = null);
  }
  function fk(n2) {
    if (n2.propertyName === "value" && qm(Cd)) {
      var r = [];
      sk(r, Cd, n2, Z1(n2)), YT(Qj, r);
    }
  }
  function Bj(n2, r, o) {
    n2 === "focusin" ? (PE(), dd = r, Cd = o, dd.attachEvent("onpropertychange", fk)) : n2 === "focusout" && PE();
  }
  function Xj(n2) {
    if (n2 === "selectionchange" || n2 === "keyup" || n2 === "keydown")
      return qm(Cd);
  }
  function Jj(n2, r) {
    if (n2 === "click")
      return qm(r);
  }
  function Gj(n2, r) {
    if (n2 === "input" || n2 === "change")
      return qm(r);
  }
  function qj(n2, r) {
    return n2 === r && (n2 !== 0 || 1 / n2 === 1 / r) || n2 !== n2 && r !== r;
  }
  var gi = typeof Object.is == "function" ? Object.is : qj;
  function Rd(n2, r) {
    if (gi(n2, r))
      return true;
    if (typeof n2 != "object" || n2 === null || typeof r != "object" || r === null)
      return false;
    var o = Object.keys(n2), u = Object.keys(r);
    if (o.length !== u.length)
      return false;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!t1.call(r, c) || !gi(n2[c], r[c]))
        return false;
    }
    return true;
  }
  function HE(n2) {
    for (; n2 && n2.firstChild; )
      n2 = n2.firstChild;
    return n2;
  }
  function FE(n2, r) {
    var o = HE(n2);
    n2 = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n2 + o.textContent.length, n2 <= r && u >= r)
          return { node: o, offset: r - n2 };
        n2 = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = HE(o);
    }
  }
  function dk(n2, r) {
    return n2 && r ? n2 === r ? true : n2 && n2.nodeType === 3 ? false : r && r.nodeType === 3 ? dk(n2, r.parentNode) : "contains" in n2 ? n2.contains(r) : n2.compareDocumentPosition ? !!(n2.compareDocumentPosition(r) & 16) : false : false;
  }
  function pk() {
    for (var n2 = window, r = Rm(); r instanceof n2.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o)
        n2 = r.contentWindow;
      else
        break;
      r = Rm(n2.document);
    }
    return r;
  }
  function ub(n2) {
    var r = n2 && n2.nodeName && n2.nodeName.toLowerCase();
    return r && (r === "input" && (n2.type === "text" || n2.type === "search" || n2.type === "tel" || n2.type === "url" || n2.type === "password") || r === "textarea" || n2.contentEditable === "true");
  }
  function Kj(n2) {
    var r = pk(), o = n2.focusedElem, u = n2.selectionRange;
    if (r !== o && o && o.ownerDocument && dk(o.ownerDocument.documentElement, o)) {
      if (u !== null && ub(o)) {
        if (r = u.start, n2 = u.end, n2 === void 0 && (n2 = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n2, o.value.length);
        else if (n2 = (r = o.ownerDocument || document) && r.defaultView || window, n2.getSelection) {
          n2 = n2.getSelection();
          var c = o.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n2.extend && p > u && (c = u, u = p, p = c), c = FE(o, p);
          var d = FE(o, u);
          c && d && (n2.rangeCount !== 1 || n2.anchorNode !== c.node || n2.anchorOffset !== c.offset || n2.focusNode !== d.node || n2.focusOffset !== d.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n2.removeAllRanges(), p > u ? (n2.addRange(r), n2.extend(d.node, d.offset)) : (r.setEnd(d.node, d.offset), n2.addRange(r)));
        }
      }
      for (r = [], n2 = o; n2 = n2.parentNode; )
        n2.nodeType === 1 && r.push({ element: n2, left: n2.scrollLeft, top: n2.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n2 = r[o], n2.element.scrollLeft = n2.left, n2.element.scrollTop = n2.top;
    }
  }
  var Zj = Eo && "documentMode" in document && 11 >= document.documentMode, Ys = null, b1 = null, pd = null, w1 = false;
  function VE(n2, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    w1 || Ys == null || Ys !== Rm(u) || (u = Ys, "selectionStart" in u && ub(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), pd && Rd(pd, u) || (pd = u, u = Lm(b1, "onSelect"), 0 < u.length && (r = new ib("onSelect", "select", null, r, o), n2.push({ event: r, listeners: u }), r.target = Ys)));
  }
  function im(n2, r) {
    var o = {};
    return o[n2.toLowerCase()] = r.toLowerCase(), o["Webkit" + n2] = "webkit" + r, o["Moz" + n2] = "moz" + r, o;
  }
  var Qs = { animationend: im("Animation", "AnimationEnd"), animationiteration: im("Animation", "AnimationIteration"), animationstart: im("Animation", "AnimationStart"), transitionend: im("Transition", "TransitionEnd") }, FS = {}, vk = {};
  Eo && (vk = document.createElement("div").style, "AnimationEvent" in window || (delete Qs.animationend.animation, delete Qs.animationiteration.animation, delete Qs.animationstart.animation), "TransitionEvent" in window || delete Qs.transitionend.transition);
  function Km(n2) {
    if (FS[n2])
      return FS[n2];
    if (!Qs[n2])
      return n2;
    var r = Qs[n2], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in vk)
        return FS[n2] = r[o];
    return n2;
  }
  var mk = Km("animationend"), hk = Km("animationiteration"), yk = Km("animationstart"), gk = Km("transitionend"), Sk = /* @__PURE__ */ new Map(), YE = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ll(n2, r) {
    Sk.set(n2, r), Iu(r, [n2]);
  }
  for (om = 0; om < YE.length; om++)
    lm = YE[om], QE = lm.toLowerCase(), WE = lm[0].toUpperCase() + lm.slice(1), Ll(QE, "on" + WE);
  var lm, QE, WE, om;
  Ll(mk, "onAnimationEnd");
  Ll(hk, "onAnimationIteration");
  Ll(yk, "onAnimationStart");
  Ll("dblclick", "onDoubleClick");
  Ll("focusin", "onFocus");
  Ll("focusout", "onBlur");
  Ll(gk, "onTransitionEnd");
  ic("onMouseEnter", ["mouseout", "mouseover"]);
  ic("onMouseLeave", ["mouseout", "mouseover"]);
  ic("onPointerEnter", ["pointerout", "pointerover"]);
  ic("onPointerLeave", ["pointerout", "pointerover"]);
  Iu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Iu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Iu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Iu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Iu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Iu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ud = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), e3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ud));
  function BE(n2, r, o) {
    var u = n2.type || "unknown-event";
    n2.currentTarget = o, ej(u, r, void 0, n2), n2.currentTarget = null;
  }
  function bk(n2, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n2.length; o++) {
      var u = n2[o], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var d = u.length - 1; 0 <= d; d--) {
            var b = u[d], x = b.instance, T = b.currentTarget;
            if (b = b.listener, x !== p && c.isPropagationStopped())
              break e;
            BE(c, b, T), p = x;
          }
        else
          for (d = 0; d < u.length; d++) {
            if (b = u[d], x = b.instance, T = b.currentTarget, b = b.listener, x !== p && c.isPropagationStopped())
              break e;
            BE(c, b, T), p = x;
          }
      }
    }
    if (Tm)
      throw n2 = h1, Tm = false, h1 = null, n2;
  }
  function Vt(n2, r) {
    var o = r[E1];
    o === void 0 && (o = r[E1] = /* @__PURE__ */ new Set());
    var u = n2 + "__bubble";
    o.has(u) || (wk(r, n2, 2, false), o.add(u));
  }
  function VS(n2, r, o) {
    var u = 0;
    r && (u |= 4), wk(o, n2, u, r);
  }
  var um = "_reactListening" + Math.random().toString(36).slice(2);
  function Ed(n2) {
    if (!n2[um]) {
      n2[um] = true, kT.forEach(function(o) {
        o !== "selectionchange" && (e3.has(o) || VS(o, false, n2), VS(o, true, n2));
      });
      var r = n2.nodeType === 9 ? n2 : n2.ownerDocument;
      r === null || r[um] || (r[um] = true, VS("selectionchange", false, r));
    }
  }
  function wk(n2, r, o, u) {
    switch (ak(r)) {
      case 1:
        var c = hj;
        break;
      case 4:
        c = yj;
        break;
      default:
        c = rb;
    }
    o = c.bind(null, r, o, n2), c = void 0, !m1 || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = true), u ? c !== void 0 ? n2.addEventListener(r, o, { capture: true, passive: c }) : n2.addEventListener(r, o, true) : c !== void 0 ? n2.addEventListener(r, o, { passive: c }) : n2.addEventListener(r, o, false);
  }
  function YS(n2, r, o, u, c) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var d = u.tag;
          if (d === 3 || d === 4) {
            var b = u.stateNode.containerInfo;
            if (b === c || b.nodeType === 8 && b.parentNode === c)
              break;
            if (d === 4)
              for (d = u.return; d !== null; ) {
                var x = d.tag;
                if ((x === 3 || x === 4) && (x = d.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c))
                  return;
                d = d.return;
              }
            for (; b !== null; ) {
              if (d = Cu(b), d === null)
                return;
              if (x = d.tag, x === 5 || x === 6) {
                u = p = d;
                continue e;
              }
              b = b.parentNode;
            }
          }
          u = u.return;
        }
    YT(function() {
      var T = p, V = Z1(o), U = [];
      e: {
        var j2 = Sk.get(n2);
        if (j2 !== void 0) {
          var H = ib, J = n2;
          switch (n2) {
            case "keypress":
              if (ym(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              H = Lj;
              break;
            case "focusin":
              J = "focus", H = PS;
              break;
            case "focusout":
              J = "blur", H = PS;
              break;
            case "beforeblur":
            case "afterblur":
              H = PS;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = IE;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = bj;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = $j;
              break;
            case mk:
            case hk:
            case yk:
              H = Dj;
              break;
            case gk:
              H = Aj;
              break;
            case "scroll":
              H = gj;
              break;
            case "wheel":
              H = jj;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Rj;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = ME;
          }
          var ie = (r & 4) !== 0, Ge = !ie && n2 === "scroll", N = ie ? j2 !== null ? j2 + "Capture" : null : j2;
          ie = [];
          for (var C = T, k2; C !== null; ) {
            k2 = C;
            var Q = k2.stateNode;
            if (k2.tag === 5 && Q !== null && (k2 = Q, N !== null && (Q = bd(C, N), Q != null && ie.push(Td(C, Q, k2)))), Ge)
              break;
            C = C.return;
          }
          0 < ie.length && (j2 = new H(j2, J, null, o, V), U.push({ event: j2, listeners: ie }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (j2 = n2 === "mouseover" || n2 === "pointerover", H = n2 === "mouseout" || n2 === "pointerout", j2 && o !== p1 && (J = o.relatedTarget || o.fromElement) && (Cu(J) || J[To]))
            break e;
          if ((H || j2) && (j2 = V.window === V ? V : (j2 = V.ownerDocument) ? j2.defaultView || j2.parentWindow : window, H ? (J = o.relatedTarget || o.toElement, H = T, J = J ? Cu(J) : null, J !== null && (Ge = $u(J), J !== Ge || J.tag !== 5 && J.tag !== 6) && (J = null)) : (H = null, J = T), H !== J)) {
            if (ie = IE, Q = "onMouseLeave", N = "onMouseEnter", C = "mouse", (n2 === "pointerout" || n2 === "pointerover") && (ie = ME, Q = "onPointerLeave", N = "onPointerEnter", C = "pointer"), Ge = H == null ? j2 : Ws(H), k2 = J == null ? j2 : Ws(J), j2 = new ie(Q, C + "leave", H, o, V), j2.target = Ge, j2.relatedTarget = k2, Q = null, Cu(V) === T && (ie = new ie(N, C + "enter", J, o, V), ie.target = k2, ie.relatedTarget = Ge, Q = ie), Ge = Q, H && J)
              t: {
                for (ie = H, N = J, C = 0, k2 = ie; k2; k2 = Ps(k2))
                  C++;
                for (k2 = 0, Q = N; Q; Q = Ps(Q))
                  k2++;
                for (; 0 < C - k2; )
                  ie = Ps(ie), C--;
                for (; 0 < k2 - C; )
                  N = Ps(N), k2--;
                for (; C--; ) {
                  if (ie === N || N !== null && ie === N.alternate)
                    break t;
                  ie = Ps(ie), N = Ps(N);
                }
                ie = null;
              }
            else
              ie = null;
            H !== null && XE(U, j2, H, ie, false), J !== null && Ge !== null && XE(U, Ge, J, ie, true);
          }
        }
        e: {
          if (j2 = T ? Ws(T) : window, H = j2.nodeName && j2.nodeName.toLowerCase(), H === "select" || H === "input" && j2.type === "file")
            var X = Wj;
          else if (jE(j2))
            if (ck)
              X = Gj;
            else {
              X = Xj;
              var re = Bj;
            }
          else
            (H = j2.nodeName) && H.toLowerCase() === "input" && (j2.type === "checkbox" || j2.type === "radio") && (X = Jj);
          if (X && (X = X(n2, T))) {
            sk(U, X, o, V);
            break e;
          }
          re && re(n2, j2, T), n2 === "focusout" && (re = j2._wrapperState) && re.controlled && j2.type === "number" && u1(j2, "number", j2.value);
        }
        switch (re = T ? Ws(T) : window, n2) {
          case "focusin":
            (jE(re) || re.contentEditable === "true") && (Ys = re, b1 = T, pd = null);
            break;
          case "focusout":
            pd = b1 = Ys = null;
            break;
          case "mousedown":
            w1 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            w1 = false, VE(U, o, V);
            break;
          case "selectionchange":
            if (Zj)
              break;
          case "keydown":
          case "keyup":
            VE(U, o, V);
        }
        var ee;
        if (lb)
          e: {
            switch (n2) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Vs ? lk(n2, o) && (he = "onCompositionEnd") : n2 === "keydown" && o.keyCode === 229 && (he = "onCompositionStart");
        he && (ok && o.locale !== "ko" && (Vs || he !== "onCompositionStart" ? he === "onCompositionEnd" && Vs && (ee = ik()) : (bl = V, ab = "value" in bl ? bl.value : bl.textContent, Vs = true)), re = Lm(T, he), 0 < re.length && (he = new $E(he, n2, null, o, V), U.push({ event: he, listeners: re }), ee ? he.data = ee : (ee = uk(o), ee !== null && (he.data = ee)))), (ee = Hj ? Fj(n2, o) : Vj(n2, o)) && (T = Lm(T, "onBeforeInput"), 0 < T.length && (V = new $E("onBeforeInput", "beforeinput", null, o, V), U.push({ event: V, listeners: T }), V.data = ee));
      }
      bk(U, r);
    });
  }
  function Td(n2, r, o) {
    return { instance: n2, listener: r, currentTarget: o };
  }
  function Lm(n2, r) {
    for (var o = r + "Capture", u = []; n2 !== null; ) {
      var c = n2, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = bd(n2, o), p != null && u.unshift(Td(n2, p, c)), p = bd(n2, r), p != null && u.push(Td(n2, p, c))), n2 = n2.return;
    }
    return u;
  }
  function Ps(n2) {
    if (n2 === null)
      return null;
    do
      n2 = n2.return;
    while (n2 && n2.tag !== 5);
    return n2 || null;
  }
  function XE(n2, r, o, u, c) {
    for (var p = r._reactName, d = []; o !== null && o !== u; ) {
      var b = o, x = b.alternate, T = b.stateNode;
      if (x !== null && x === u)
        break;
      b.tag === 5 && T !== null && (b = T, c ? (x = bd(o, p), x != null && d.unshift(Td(o, x, b))) : c || (x = bd(o, p), x != null && d.push(Td(o, x, b)))), o = o.return;
    }
    d.length !== 0 && n2.push({ event: r, listeners: d });
  }
  var t3 = /\r\n?/g, n3 = /\u0000|\uFFFD/g;
  function JE(n2) {
    return (typeof n2 == "string" ? n2 : "" + n2).replace(t3, `
`).replace(n3, "");
  }
  function sm(n2, r, o) {
    if (r = JE(r), JE(n2) !== r && o)
      throw Error(ne(425));
  }
  function Um() {
  }
  var x1 = null, D1 = null;
  function C1(n2, r) {
    return n2 === "textarea" || n2 === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var R1 = typeof setTimeout == "function" ? setTimeout : void 0, r3 = typeof clearTimeout == "function" ? clearTimeout : void 0, GE = typeof Promise == "function" ? Promise : void 0, a3 = typeof queueMicrotask == "function" ? queueMicrotask : typeof GE < "u" ? function(n2) {
    return GE.resolve(null).then(n2).catch(i3);
  } : R1;
  function i3(n2) {
    setTimeout(function() {
      throw n2;
    });
  }
  function QS(n2, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n2.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (u === 0) {
            n2.removeChild(c), Dd(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    Dd(r);
  }
  function Rl(n2) {
    for (; n2 != null; n2 = n2.nextSibling) {
      var r = n2.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n2.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n2;
  }
  function qE(n2) {
    n2 = n2.previousSibling;
    for (var r = 0; n2; ) {
      if (n2.nodeType === 8) {
        var o = n2.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n2;
          r--;
        } else
          o === "/$" && r++;
      }
      n2 = n2.previousSibling;
    }
    return null;
  }
  var pc = Math.random().toString(36).slice(2), Yi = "__reactFiber$" + pc, kd = "__reactProps$" + pc, To = "__reactContainer$" + pc, E1 = "__reactEvents$" + pc, o3 = "__reactListeners$" + pc, l3 = "__reactHandles$" + pc;
  function Cu(n2) {
    var r = n2[Yi];
    if (r)
      return r;
    for (var o = n2.parentNode; o; ) {
      if (r = o[To] || o[Yi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n2 = qE(n2); n2 !== null; ) {
            if (o = n2[Yi])
              return o;
            n2 = qE(n2);
          }
        return r;
      }
      n2 = o, o = n2.parentNode;
    }
    return null;
  }
  function Ad(n2) {
    return n2 = n2[Yi] || n2[To], !n2 || n2.tag !== 5 && n2.tag !== 6 && n2.tag !== 13 && n2.tag !== 3 ? null : n2;
  }
  function Ws(n2) {
    if (n2.tag === 5 || n2.tag === 6)
      return n2.stateNode;
    throw Error(ne(33));
  }
  function Zm(n2) {
    return n2[kd] || null;
  }
  var T1 = [], Bs = -1;
  function Ul(n2) {
    return { current: n2 };
  }
  function Yt(n2) {
    0 > Bs || (n2.current = T1[Bs], T1[Bs] = null, Bs--);
  }
  function Ht(n2, r) {
    Bs++, T1[Bs] = n2.current, n2.current = r;
  }
  var Nl = {}, gr = Ul(Nl), Jr = Ul(false), _u = Nl;
  function oc(n2, r) {
    var o = n2.type.contextTypes;
    if (!o)
      return Nl;
    var u = n2.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in o)
      c[p] = r[p];
    return u && (n2 = n2.stateNode, n2.__reactInternalMemoizedUnmaskedChildContext = r, n2.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Gr(n2) {
    return n2 = n2.childContextTypes, n2 != null;
  }
  function Im() {
    Yt(Jr), Yt(gr);
  }
  function KE(n2, r, o) {
    if (gr.current !== Nl)
      throw Error(ne(168));
    Ht(gr, r), Ht(Jr, o);
  }
  function xk(n2, r, o) {
    var u = n2.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(ne(108, Bz(n2) || "Unknown", c));
    return Kt({}, o, u);
  }
  function $m(n2) {
    return n2 = (n2 = n2.stateNode) && n2.__reactInternalMemoizedMergedChildContext || Nl, _u = gr.current, Ht(gr, n2), Ht(Jr, Jr.current), true;
  }
  function ZE(n2, r, o) {
    var u = n2.stateNode;
    if (!u)
      throw Error(ne(169));
    o ? (n2 = xk(n2, r, _u), u.__reactInternalMemoizedMergedChildContext = n2, Yt(Jr), Yt(gr), Ht(gr, n2)) : Yt(Jr), Ht(Jr, o);
  }
  var xo = null, eh = false, WS = false;
  function Dk(n2) {
    xo === null ? xo = [n2] : xo.push(n2);
  }
  function u3(n2) {
    eh = true, Dk(n2);
  }
  function Il() {
    if (!WS && xo !== null) {
      WS = true;
      var n2 = 0, r = _t;
      try {
        var o = xo;
        for (_t = 1; n2 < o.length; n2++) {
          var u = o[n2];
          do
            u = u(true);
          while (u !== null);
        }
        xo = null, eh = false;
      } catch (c) {
        throw xo !== null && (xo = xo.slice(n2 + 1)), XT(eb, Il), c;
      } finally {
        _t = r, WS = false;
      }
    }
    return null;
  }
  var Xs = [], Js = 0, Mm = null, Am = 0, Aa = [], za = 0, Ou = null, Do = 1, Co = "";
  function xu(n2, r) {
    Xs[Js++] = Am, Xs[Js++] = Mm, Mm = n2, Am = r;
  }
  function Ck(n2, r, o) {
    Aa[za++] = Do, Aa[za++] = Co, Aa[za++] = Ou, Ou = n2;
    var u = Do;
    n2 = Co;
    var c = 32 - hi(u) - 1;
    u &= ~(1 << c), o += 1;
    var p = 32 - hi(r) + c;
    if (30 < p) {
      var d = c - c % 5;
      p = (u & (1 << d) - 1).toString(32), u >>= d, c -= d, Do = 1 << 32 - hi(r) + c | o << c | u, Co = p + n2;
    } else
      Do = 1 << p | o << c | u, Co = n2;
  }
  function sb(n2) {
    n2.return !== null && (xu(n2, 1), Ck(n2, 1, 0));
  }
  function cb(n2) {
    for (; n2 === Mm; )
      Mm = Xs[--Js], Xs[Js] = null, Am = Xs[--Js], Xs[Js] = null;
    for (; n2 === Ou; )
      Ou = Aa[--za], Aa[za] = null, Co = Aa[--za], Aa[za] = null, Do = Aa[--za], Aa[za] = null;
  }
  var ga = null, ya = null, Wt = false, mi = null;
  function Rk(n2, r) {
    var o = ja(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n2, r = n2.deletions, r === null ? (n2.deletions = [o], n2.flags |= 16) : r.push(o);
  }
  function eT(n2, r) {
    switch (n2.tag) {
      case 5:
        var o = n2.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n2.stateNode = r, ga = n2, ya = Rl(r.firstChild), true) : false;
      case 6:
        return r = n2.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n2.stateNode = r, ga = n2, ya = null, true) : false;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ou !== null ? { id: Do, overflow: Co } : null, n2.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ja(18, null, null, 0), o.stateNode = r, o.return = n2, n2.child = o, ga = n2, ya = null, true) : false;
      default:
        return false;
    }
  }
  function k1(n2) {
    return (n2.mode & 1) !== 0 && (n2.flags & 128) === 0;
  }
  function _1(n2) {
    if (Wt) {
      var r = ya;
      if (r) {
        var o = r;
        if (!eT(n2, r)) {
          if (k1(n2))
            throw Error(ne(418));
          r = Rl(o.nextSibling);
          var u = ga;
          r && eT(n2, r) ? Rk(u, o) : (n2.flags = n2.flags & -4097 | 2, Wt = false, ga = n2);
        }
      } else {
        if (k1(n2))
          throw Error(ne(418));
        n2.flags = n2.flags & -4097 | 2, Wt = false, ga = n2;
      }
    }
  }
  function tT(n2) {
    for (n2 = n2.return; n2 !== null && n2.tag !== 5 && n2.tag !== 3 && n2.tag !== 13; )
      n2 = n2.return;
    ga = n2;
  }
  function cm(n2) {
    if (n2 !== ga)
      return false;
    if (!Wt)
      return tT(n2), Wt = true, false;
    var r;
    if ((r = n2.tag !== 3) && !(r = n2.tag !== 5) && (r = n2.type, r = r !== "head" && r !== "body" && !C1(n2.type, n2.memoizedProps)), r && (r = ya)) {
      if (k1(n2))
        throw Ek(), Error(ne(418));
      for (; r; )
        Rk(n2, r), r = Rl(r.nextSibling);
    }
    if (tT(n2), n2.tag === 13) {
      if (n2 = n2.memoizedState, n2 = n2 !== null ? n2.dehydrated : null, !n2)
        throw Error(ne(317));
      e: {
        for (n2 = n2.nextSibling, r = 0; n2; ) {
          if (n2.nodeType === 8) {
            var o = n2.data;
            if (o === "/$") {
              if (r === 0) {
                ya = Rl(n2.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n2 = n2.nextSibling;
        }
        ya = null;
      }
    } else
      ya = ga ? Rl(n2.stateNode.nextSibling) : null;
    return true;
  }
  function Ek() {
    for (var n2 = ya; n2; )
      n2 = Rl(n2.nextSibling);
  }
  function lc() {
    ya = ga = null, Wt = false;
  }
  function fb(n2) {
    mi === null ? mi = [n2] : mi.push(n2);
  }
  var s3 = Oo.ReactCurrentBatchConfig;
  function pi(n2, r) {
    if (n2 && n2.defaultProps) {
      r = Kt({}, r), n2 = n2.defaultProps;
      for (var o in n2)
        r[o] === void 0 && (r[o] = n2[o]);
      return r;
    }
    return r;
  }
  var zm = Ul(null), jm = null, Gs = null, db = null;
  function pb() {
    db = Gs = jm = null;
  }
  function vb(n2) {
    var r = zm.current;
    Yt(zm), n2._currentValue = r;
  }
  function O1(n2, r, o) {
    for (; n2 !== null; ) {
      var u = n2.alternate;
      if ((n2.childLanes & r) !== r ? (n2.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n2 === o)
        break;
      n2 = n2.return;
    }
  }
  function rc(n2, r) {
    jm = n2, db = Gs = null, n2 = n2.dependencies, n2 !== null && n2.firstContext !== null && (n2.lanes & r && (Xr = true), n2.firstContext = null);
  }
  function Ha(n2) {
    var r = n2._currentValue;
    if (db !== n2)
      if (n2 = { context: n2, memoizedValue: r, next: null }, Gs === null) {
        if (jm === null)
          throw Error(ne(308));
        Gs = n2, jm.dependencies = { lanes: 0, firstContext: n2 };
      } else
        Gs = Gs.next = n2;
    return r;
  }
  var Ru = null;
  function mb(n2) {
    Ru === null ? Ru = [n2] : Ru.push(n2);
  }
  function Tk(n2, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, mb(r)) : (o.next = c.next, c.next = o), r.interleaved = o, ko(n2, u);
  }
  function ko(n2, r) {
    n2.lanes |= r;
    var o = n2.alternate;
    for (o !== null && (o.lanes |= r), o = n2, n2 = n2.return; n2 !== null; )
      n2.childLanes |= r, o = n2.alternate, o !== null && (o.childLanes |= r), o = n2, n2 = n2.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var yl = false;
  function hb(n2) {
    n2.updateQueue = { baseState: n2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function kk(n2, r) {
    n2 = n2.updateQueue, r.updateQueue === n2 && (r.updateQueue = { baseState: n2.baseState, firstBaseUpdate: n2.firstBaseUpdate, lastBaseUpdate: n2.lastBaseUpdate, shared: n2.shared, effects: n2.effects });
  }
  function Ro(n2, r) {
    return { eventTime: n2, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function El(n2, r, o) {
    var u = n2.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, St & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, ko(n2, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, mb(u)) : (r.next = c.next, c.next = r), u.interleaved = r, ko(n2, o);
  }
  function gm(n2, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n2.pendingLanes, o |= u, r.lanes = o, tb(n2, o);
    }
  }
  function nT(n2, r) {
    var o = n2.updateQueue, u = n2.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, p = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var d = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          p === null ? c = p = d : p = p.next = d, o = o.next;
        } while (o !== null);
        p === null ? c = p = r : p = p.next = r;
      } else
        c = p = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n2.updateQueue = o;
      return;
    }
    n2 = o.lastBaseUpdate, n2 === null ? o.firstBaseUpdate = r : n2.next = r, o.lastBaseUpdate = r;
  }
  function Pm(n2, r, o, u) {
    var c = n2.updateQueue;
    yl = false;
    var p = c.firstBaseUpdate, d = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var x = b, T = x.next;
      x.next = null, d === null ? p = T : d.next = T, d = x;
      var V = n2.alternate;
      V !== null && (V = V.updateQueue, b = V.lastBaseUpdate, b !== d && (b === null ? V.firstBaseUpdate = T : b.next = T, V.lastBaseUpdate = x));
    }
    if (p !== null) {
      var U = c.baseState;
      d = 0, V = T = x = null, b = p;
      do {
        var j2 = b.lane, H = b.eventTime;
        if ((u & j2) === j2) {
          V !== null && (V = V.next = { eventTime: H, lane: 0, tag: b.tag, payload: b.payload, callback: b.callback, next: null });
          e: {
            var J = n2, ie = b;
            switch (j2 = r, H = o, ie.tag) {
              case 1:
                if (J = ie.payload, typeof J == "function") {
                  U = J.call(H, U, j2);
                  break e;
                }
                U = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ie.payload, j2 = typeof J == "function" ? J.call(H, U, j2) : J, j2 == null)
                  break e;
                U = Kt({}, U, j2);
                break e;
              case 2:
                yl = true;
            }
          }
          b.callback !== null && b.lane !== 0 && (n2.flags |= 64, j2 = c.effects, j2 === null ? c.effects = [b] : j2.push(b));
        } else
          H = { eventTime: H, lane: j2, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, V === null ? (T = V = H, x = U) : V = V.next = H, d |= j2;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null)
            break;
          j2 = b, b = j2.next, j2.next = null, c.lastBaseUpdate = j2, c.shared.pending = null;
        }
      } while (true);
      if (V === null && (x = U), c.baseState = x, c.firstBaseUpdate = T, c.lastBaseUpdate = V, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          d |= c.lane, c = c.next;
        while (c !== r);
      } else
        p === null && (c.shared.lanes = 0);
      Lu |= d, n2.lanes = d, n2.memoizedState = U;
    }
  }
  function rT(n2, r, o) {
    if (n2 = r.effects, r.effects = null, n2 !== null)
      for (r = 0; r < n2.length; r++) {
        var u = n2[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = o, typeof c != "function")
            throw Error(ne(191, c));
          c.call(u);
        }
      }
  }
  var _k = new TT.Component().refs;
  function N1(n2, r, o, u) {
    r = n2.memoizedState, o = o(u, r), o = o == null ? r : Kt({}, r, o), n2.memoizedState = o, n2.lanes === 0 && (n2.updateQueue.baseState = o);
  }
  var th = { isMounted: function(n2) {
    return (n2 = n2._reactInternals) ? $u(n2) === n2 : false;
  }, enqueueSetState: function(n2, r, o) {
    n2 = n2._reactInternals;
    var u = $r(), c = kl(n2), p = Ro(u, c);
    p.payload = r, o != null && (p.callback = o), r = El(n2, p, c), r !== null && (yi(r, n2, c, u), gm(r, n2, c));
  }, enqueueReplaceState: function(n2, r, o) {
    n2 = n2._reactInternals;
    var u = $r(), c = kl(n2), p = Ro(u, c);
    p.tag = 1, p.payload = r, o != null && (p.callback = o), r = El(n2, p, c), r !== null && (yi(r, n2, c, u), gm(r, n2, c));
  }, enqueueForceUpdate: function(n2, r) {
    n2 = n2._reactInternals;
    var o = $r(), u = kl(n2), c = Ro(o, u);
    c.tag = 2, r != null && (c.callback = r), r = El(n2, c, u), r !== null && (yi(r, n2, u, o), gm(r, n2, u));
  } };
  function aT(n2, r, o, u, c, p, d) {
    return n2 = n2.stateNode, typeof n2.shouldComponentUpdate == "function" ? n2.shouldComponentUpdate(u, p, d) : r.prototype && r.prototype.isPureReactComponent ? !Rd(o, u) || !Rd(c, p) : true;
  }
  function Ok(n2, r, o) {
    var u = false, c = Nl, p = r.contextType;
    return typeof p == "object" && p !== null ? p = Ha(p) : (c = Gr(r) ? _u : gr.current, u = r.contextTypes, p = (u = u != null) ? oc(n2, c) : Nl), r = new r(o, p), n2.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = th, n2.stateNode = r, r._reactInternals = n2, u && (n2 = n2.stateNode, n2.__reactInternalMemoizedUnmaskedChildContext = c, n2.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function iT(n2, r, o, u) {
    n2 = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n2 && th.enqueueReplaceState(r, r.state, null);
  }
  function L1(n2, r, o, u) {
    var c = n2.stateNode;
    c.props = o, c.state = n2.memoizedState, c.refs = _k, hb(n2);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = Ha(p) : (p = Gr(r) ? _u : gr.current, c.context = oc(n2, p)), c.state = n2.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (N1(n2, r, p, o), c.state = n2.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && th.enqueueReplaceState(c, c.state, null), Pm(n2, o, c, u), c.state = n2.memoizedState), typeof c.componentDidMount == "function" && (n2.flags |= 4194308);
  }
  function td(n2, r, o) {
    if (n2 = o.ref, n2 !== null && typeof n2 != "function" && typeof n2 != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(ne(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(ne(147, n2));
        var c = u, p = "" + n2;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(d) {
          var b = c.refs;
          b === _k && (b = c.refs = {}), d === null ? delete b[p] : b[p] = d;
        }, r._stringRef = p, r);
      }
      if (typeof n2 != "string")
        throw Error(ne(284));
      if (!o._owner)
        throw Error(ne(290, n2));
    }
    return n2;
  }
  function fm(n2, r) {
    throw n2 = Object.prototype.toString.call(r), Error(ne(31, n2 === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n2));
  }
  function oT(n2) {
    var r = n2._init;
    return r(n2._payload);
  }
  function Nk(n2) {
    function r(N, C) {
      if (n2) {
        var k2 = N.deletions;
        k2 === null ? (N.deletions = [C], N.flags |= 16) : k2.push(C);
      }
    }
    function o(N, C) {
      if (!n2)
        return null;
      for (; C !== null; )
        r(N, C), C = C.sibling;
      return null;
    }
    function u(N, C) {
      for (N = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? N.set(C.key, C) : N.set(C.index, C), C = C.sibling;
      return N;
    }
    function c(N, C) {
      return N = _l(N, C), N.index = 0, N.sibling = null, N;
    }
    function p(N, C, k2) {
      return N.index = k2, n2 ? (k2 = N.alternate, k2 !== null ? (k2 = k2.index, k2 < C ? (N.flags |= 2, C) : k2) : (N.flags |= 2, C)) : (N.flags |= 1048576, C);
    }
    function d(N) {
      return n2 && N.alternate === null && (N.flags |= 2), N;
    }
    function b(N, C, k2, Q) {
      return C === null || C.tag !== 6 ? (C = ZS(k2, N.mode, Q), C.return = N, C) : (C = c(C, k2), C.return = N, C);
    }
    function x(N, C, k2, Q) {
      var X = k2.type;
      return X === Fs ? V(N, C, k2.props.children, Q, k2.key) : C !== null && (C.elementType === X || typeof X == "object" && X !== null && X.$$typeof === hl && oT(X) === C.type) ? (Q = c(C, k2.props), Q.ref = td(N, C, k2), Q.return = N, Q) : (Q = Cm(k2.type, k2.key, k2.props, null, N.mode, Q), Q.ref = td(N, C, k2), Q.return = N, Q);
    }
    function T(N, C, k2, Q) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== k2.containerInfo || C.stateNode.implementation !== k2.implementation ? (C = e1(k2, N.mode, Q), C.return = N, C) : (C = c(C, k2.children || []), C.return = N, C);
    }
    function V(N, C, k2, Q, X) {
      return C === null || C.tag !== 7 ? (C = ku(k2, N.mode, Q, X), C.return = N, C) : (C = c(C, k2), C.return = N, C);
    }
    function U(N, C, k2) {
      if (typeof C == "string" && C !== "" || typeof C == "number")
        return C = ZS("" + C, N.mode, k2), C.return = N, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Gv:
            return k2 = Cm(C.type, C.key, C.props, null, N.mode, k2), k2.ref = td(N, null, C), k2.return = N, k2;
          case Hs:
            return C = e1(C, N.mode, k2), C.return = N, C;
          case hl:
            var Q = C._init;
            return U(N, Q(C._payload), k2);
        }
        if (od(C) || qf(C))
          return C = ku(C, N.mode, k2, null), C.return = N, C;
        fm(N, C);
      }
      return null;
    }
    function j2(N, C, k2, Q) {
      var X = C !== null ? C.key : null;
      if (typeof k2 == "string" && k2 !== "" || typeof k2 == "number")
        return X !== null ? null : b(N, C, "" + k2, Q);
      if (typeof k2 == "object" && k2 !== null) {
        switch (k2.$$typeof) {
          case Gv:
            return k2.key === X ? x(N, C, k2, Q) : null;
          case Hs:
            return k2.key === X ? T(N, C, k2, Q) : null;
          case hl:
            return X = k2._init, j2(N, C, X(k2._payload), Q);
        }
        if (od(k2) || qf(k2))
          return X !== null ? null : V(N, C, k2, Q, null);
        fm(N, k2);
      }
      return null;
    }
    function H(N, C, k2, Q, X) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return N = N.get(k2) || null, b(C, N, "" + Q, X);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case Gv:
            return N = N.get(Q.key === null ? k2 : Q.key) || null, x(C, N, Q, X);
          case Hs:
            return N = N.get(Q.key === null ? k2 : Q.key) || null, T(C, N, Q, X);
          case hl:
            var re = Q._init;
            return H(N, C, k2, re(Q._payload), X);
        }
        if (od(Q) || qf(Q))
          return N = N.get(k2) || null, V(C, N, Q, X, null);
        fm(C, Q);
      }
      return null;
    }
    function J(N, C, k2, Q) {
      for (var X = null, re = null, ee = C, he = C = 0, Me = null; ee !== null && he < k2.length; he++) {
        ee.index > he ? (Me = ee, ee = null) : Me = ee.sibling;
        var Re = j2(N, ee, k2[he], Q);
        if (Re === null) {
          ee === null && (ee = Me);
          break;
        }
        n2 && ee && Re.alternate === null && r(N, ee), C = p(Re, C, he), re === null ? X = Re : re.sibling = Re, re = Re, ee = Me;
      }
      if (he === k2.length)
        return o(N, ee), Wt && xu(N, he), X;
      if (ee === null) {
        for (; he < k2.length; he++)
          ee = U(N, k2[he], Q), ee !== null && (C = p(ee, C, he), re === null ? X = ee : re.sibling = ee, re = ee);
        return Wt && xu(N, he), X;
      }
      for (ee = u(N, ee); he < k2.length; he++)
        Me = H(ee, N, he, k2[he], Q), Me !== null && (n2 && Me.alternate !== null && ee.delete(Me.key === null ? he : Me.key), C = p(Me, C, he), re === null ? X = Me : re.sibling = Me, re = Me);
      return n2 && ee.forEach(function(dt) {
        return r(N, dt);
      }), Wt && xu(N, he), X;
    }
    function ie(N, C, k2, Q) {
      var X = qf(k2);
      if (typeof X != "function")
        throw Error(ne(150));
      if (k2 = X.call(k2), k2 == null)
        throw Error(ne(151));
      for (var re = X = null, ee = C, he = C = 0, Me = null, Re = k2.next(); ee !== null && !Re.done; he++, Re = k2.next()) {
        ee.index > he ? (Me = ee, ee = null) : Me = ee.sibling;
        var dt = j2(N, ee, Re.value, Q);
        if (dt === null) {
          ee === null && (ee = Me);
          break;
        }
        n2 && ee && dt.alternate === null && r(N, ee), C = p(dt, C, he), re === null ? X = dt : re.sibling = dt, re = dt, ee = Me;
      }
      if (Re.done)
        return o(N, ee), Wt && xu(N, he), X;
      if (ee === null) {
        for (; !Re.done; he++, Re = k2.next())
          Re = U(N, Re.value, Q), Re !== null && (C = p(Re, C, he), re === null ? X = Re : re.sibling = Re, re = Re);
        return Wt && xu(N, he), X;
      }
      for (ee = u(N, ee); !Re.done; he++, Re = k2.next())
        Re = H(ee, N, he, Re.value, Q), Re !== null && (n2 && Re.alternate !== null && ee.delete(Re.key === null ? he : Re.key), C = p(Re, C, he), re === null ? X = Re : re.sibling = Re, re = Re);
      return n2 && ee.forEach(function(yt) {
        return r(N, yt);
      }), Wt && xu(N, he), X;
    }
    function Ge(N, C, k2, Q) {
      if (typeof k2 == "object" && k2 !== null && k2.type === Fs && k2.key === null && (k2 = k2.props.children), typeof k2 == "object" && k2 !== null) {
        switch (k2.$$typeof) {
          case Gv:
            e: {
              for (var X = k2.key, re = C; re !== null; ) {
                if (re.key === X) {
                  if (X = k2.type, X === Fs) {
                    if (re.tag === 7) {
                      o(N, re.sibling), C = c(re, k2.props.children), C.return = N, N = C;
                      break e;
                    }
                  } else if (re.elementType === X || typeof X == "object" && X !== null && X.$$typeof === hl && oT(X) === re.type) {
                    o(N, re.sibling), C = c(re, k2.props), C.ref = td(N, re, k2), C.return = N, N = C;
                    break e;
                  }
                  o(N, re);
                  break;
                } else
                  r(N, re);
                re = re.sibling;
              }
              k2.type === Fs ? (C = ku(k2.props.children, N.mode, Q, k2.key), C.return = N, N = C) : (Q = Cm(k2.type, k2.key, k2.props, null, N.mode, Q), Q.ref = td(N, C, k2), Q.return = N, N = Q);
            }
            return d(N);
          case Hs:
            e: {
              for (re = k2.key; C !== null; ) {
                if (C.key === re)
                  if (C.tag === 4 && C.stateNode.containerInfo === k2.containerInfo && C.stateNode.implementation === k2.implementation) {
                    o(N, C.sibling), C = c(C, k2.children || []), C.return = N, N = C;
                    break e;
                  } else {
                    o(N, C);
                    break;
                  }
                else
                  r(N, C);
                C = C.sibling;
              }
              C = e1(k2, N.mode, Q), C.return = N, N = C;
            }
            return d(N);
          case hl:
            return re = k2._init, Ge(N, C, re(k2._payload), Q);
        }
        if (od(k2))
          return J(N, C, k2, Q);
        if (qf(k2))
          return ie(N, C, k2, Q);
        fm(N, k2);
      }
      return typeof k2 == "string" && k2 !== "" || typeof k2 == "number" ? (k2 = "" + k2, C !== null && C.tag === 6 ? (o(N, C.sibling), C = c(C, k2), C.return = N, N = C) : (o(N, C), C = ZS(k2, N.mode, Q), C.return = N, N = C), d(N)) : o(N, C);
    }
    return Ge;
  }
  var uc = Nk(true), Lk = Nk(false), zd = {}, Wi = Ul(zd), _d = Ul(zd), Od = Ul(zd);
  function Eu(n2) {
    if (n2 === zd)
      throw Error(ne(174));
    return n2;
  }
  function yb(n2, r) {
    switch (Ht(Od, r), Ht(_d, n2), Ht(Wi, zd), n2 = r.nodeType, n2) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : c1(null, "");
        break;
      default:
        n2 = n2 === 8 ? r.parentNode : r, r = n2.namespaceURI || null, n2 = n2.tagName, r = c1(r, n2);
    }
    Yt(Wi), Ht(Wi, r);
  }
  function sc() {
    Yt(Wi), Yt(_d), Yt(Od);
  }
  function Uk(n2) {
    Eu(Od.current);
    var r = Eu(Wi.current), o = c1(r, n2.type);
    r !== o && (Ht(_d, n2), Ht(Wi, o));
  }
  function gb(n2) {
    _d.current === n2 && (Yt(Wi), Yt(_d));
  }
  var Gt = Ul(0);
  function Hm(n2) {
    for (var r = n2; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n2)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n2)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var BS = [];
  function Sb() {
    for (var n2 = 0; n2 < BS.length; n2++)
      BS[n2]._workInProgressVersionPrimary = null;
    BS.length = 0;
  }
  var Sm = Oo.ReactCurrentDispatcher, XS = Oo.ReactCurrentBatchConfig, Nu = 0, qt = null, Un = null, Fn = null, Fm = false, vd = false, Nd = 0, c3 = 0;
  function mr() {
    throw Error(ne(321));
  }
  function bb(n2, r) {
    if (r === null)
      return false;
    for (var o = 0; o < r.length && o < n2.length; o++)
      if (!gi(n2[o], r[o]))
        return false;
    return true;
  }
  function wb(n2, r, o, u, c, p) {
    if (Nu = p, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Sm.current = n2 === null || n2.memoizedState === null ? v3 : m3, n2 = o(u, c), vd) {
      p = 0;
      do {
        if (vd = false, Nd = 0, 25 <= p)
          throw Error(ne(301));
        p += 1, Fn = Un = null, r.updateQueue = null, Sm.current = h3, n2 = o(u, c);
      } while (vd);
    }
    if (Sm.current = Vm, r = Un !== null && Un.next !== null, Nu = 0, Fn = Un = qt = null, Fm = false, r)
      throw Error(ne(300));
    return n2;
  }
  function xb() {
    var n2 = Nd !== 0;
    return Nd = 0, n2;
  }
  function Vi() {
    var n2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fn === null ? qt.memoizedState = Fn = n2 : Fn = Fn.next = n2, Fn;
  }
  function Fa() {
    if (Un === null) {
      var n2 = qt.alternate;
      n2 = n2 !== null ? n2.memoizedState : null;
    } else
      n2 = Un.next;
    var r = Fn === null ? qt.memoizedState : Fn.next;
    if (r !== null)
      Fn = r, Un = n2;
    else {
      if (n2 === null)
        throw Error(ne(310));
      Un = n2, n2 = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Fn === null ? qt.memoizedState = Fn = n2 : Fn = Fn.next = n2;
    }
    return Fn;
  }
  function Ld(n2, r) {
    return typeof r == "function" ? r(n2) : r;
  }
  function JS(n2) {
    var r = Fa(), o = r.queue;
    if (o === null)
      throw Error(ne(311));
    o.lastRenderedReducer = n2;
    var u = Un, c = u.baseQueue, p = o.pending;
    if (p !== null) {
      if (c !== null) {
        var d = c.next;
        c.next = p.next, p.next = d;
      }
      u.baseQueue = c = p, o.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var b = d = null, x = null, T = p;
      do {
        var V = T.lane;
        if ((Nu & V) === V)
          x !== null && (x = x.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), u = T.hasEagerState ? T.eagerState : n2(u, T.action);
        else {
          var U = { lane: V, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null };
          x === null ? (b = x = U, d = u) : x = x.next = U, qt.lanes |= V, Lu |= V;
        }
        T = T.next;
      } while (T !== null && T !== p);
      x === null ? d = u : x.next = b, gi(u, r.memoizedState) || (Xr = true), r.memoizedState = u, r.baseState = d, r.baseQueue = x, o.lastRenderedState = u;
    }
    if (n2 = o.interleaved, n2 !== null) {
      c = n2;
      do
        p = c.lane, qt.lanes |= p, Lu |= p, c = c.next;
      while (c !== n2);
    } else
      c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function GS(n2) {
    var r = Fa(), o = r.queue;
    if (o === null)
      throw Error(ne(311));
    o.lastRenderedReducer = n2;
    var u = o.dispatch, c = o.pending, p = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var d = c = c.next;
      do
        p = n2(p, d.action), d = d.next;
      while (d !== c);
      gi(p, r.memoizedState) || (Xr = true), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), o.lastRenderedState = p;
    }
    return [p, u];
  }
  function Ik() {
  }
  function $k(n2, r) {
    var o = qt, u = Fa(), c = r(), p = !gi(u.memoizedState, c);
    if (p && (u.memoizedState = c, Xr = true), u = u.queue, Db(zk.bind(null, o, u, n2), [n2]), u.getSnapshot !== r || p || Fn !== null && Fn.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ud(9, Ak.bind(null, o, u, c, r), void 0, null), Vn === null)
        throw Error(ne(349));
      Nu & 30 || Mk(o, r, c);
    }
    return c;
  }
  function Mk(n2, r, o) {
    n2.flags |= 16384, n2 = { getSnapshot: r, value: o }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n2]) : (o = r.stores, o === null ? r.stores = [n2] : o.push(n2));
  }
  function Ak(n2, r, o, u) {
    r.value = o, r.getSnapshot = u, jk(r) && Pk(n2);
  }
  function zk(n2, r, o) {
    return o(function() {
      jk(r) && Pk(n2);
    });
  }
  function jk(n2) {
    var r = n2.getSnapshot;
    n2 = n2.value;
    try {
      var o = r();
      return !gi(n2, o);
    } catch {
      return true;
    }
  }
  function Pk(n2) {
    var r = ko(n2, 1);
    r !== null && yi(r, n2, 1, -1);
  }
  function lT(n2) {
    var r = Vi();
    return typeof n2 == "function" && (n2 = n2()), r.memoizedState = r.baseState = n2, n2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ld, lastRenderedState: n2 }, r.queue = n2, n2 = n2.dispatch = p3.bind(null, qt, n2), [r.memoizedState, n2];
  }
  function Ud(n2, r, o, u) {
    return n2 = { tag: n2, create: r, destroy: o, deps: u, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n2.next = n2) : (o = r.lastEffect, o === null ? r.lastEffect = n2.next = n2 : (u = o.next, o.next = n2, n2.next = u, r.lastEffect = n2)), n2;
  }
  function Hk() {
    return Fa().memoizedState;
  }
  function bm(n2, r, o, u) {
    var c = Vi();
    qt.flags |= n2, c.memoizedState = Ud(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function nh(n2, r, o, u) {
    var c = Fa();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (Un !== null) {
      var d = Un.memoizedState;
      if (p = d.destroy, u !== null && bb(u, d.deps)) {
        c.memoizedState = Ud(r, o, p, u);
        return;
      }
    }
    qt.flags |= n2, c.memoizedState = Ud(1 | r, o, p, u);
  }
  function uT(n2, r) {
    return bm(8390656, 8, n2, r);
  }
  function Db(n2, r) {
    return nh(2048, 8, n2, r);
  }
  function Fk(n2, r) {
    return nh(4, 2, n2, r);
  }
  function Vk(n2, r) {
    return nh(4, 4, n2, r);
  }
  function Yk(n2, r) {
    if (typeof r == "function")
      return n2 = n2(), r(n2), function() {
        r(null);
      };
    if (r != null)
      return n2 = n2(), r.current = n2, function() {
        r.current = null;
      };
  }
  function Qk(n2, r, o) {
    return o = o != null ? o.concat([n2]) : null, nh(4, 4, Yk.bind(null, r, n2), o);
  }
  function Cb() {
  }
  function Wk(n2, r) {
    var o = Fa();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && bb(r, u[1]) ? u[0] : (o.memoizedState = [n2, r], n2);
  }
  function Bk(n2, r) {
    var o = Fa();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && bb(r, u[1]) ? u[0] : (n2 = n2(), o.memoizedState = [n2, r], n2);
  }
  function Xk(n2, r, o) {
    return Nu & 21 ? (gi(o, r) || (o = qT(), qt.lanes |= o, Lu |= o, n2.baseState = true), r) : (n2.baseState && (n2.baseState = false, Xr = true), n2.memoizedState = o);
  }
  function f3(n2, r) {
    var o = _t;
    _t = o !== 0 && 4 > o ? o : 4, n2(true);
    var u = XS.transition;
    XS.transition = {};
    try {
      n2(false), r();
    } finally {
      _t = o, XS.transition = u;
    }
  }
  function Jk() {
    return Fa().memoizedState;
  }
  function d3(n2, r, o) {
    var u = kl(n2);
    if (o = { lane: u, action: o, hasEagerState: false, eagerState: null, next: null }, Gk(n2))
      qk(r, o);
    else if (o = Tk(n2, r, o, u), o !== null) {
      var c = $r();
      yi(o, n2, u, c), Kk(o, r, u);
    }
  }
  function p3(n2, r, o) {
    var u = kl(n2), c = { lane: u, action: o, hasEagerState: false, eagerState: null, next: null };
    if (Gk(n2))
      qk(r, c);
    else {
      var p = n2.alternate;
      if (n2.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var d = r.lastRenderedState, b = p(d, o);
          if (c.hasEagerState = true, c.eagerState = b, gi(b, d)) {
            var x = r.interleaved;
            x === null ? (c.next = c, mb(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = Tk(n2, r, c, u), o !== null && (c = $r(), yi(o, n2, u, c), Kk(o, r, u));
    }
  }
  function Gk(n2) {
    var r = n2.alternate;
    return n2 === qt || r !== null && r === qt;
  }
  function qk(n2, r) {
    vd = Fm = true;
    var o = n2.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n2.pending = r;
  }
  function Kk(n2, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n2.pendingLanes, o |= u, r.lanes = o, tb(n2, o);
    }
  }
  var Vm = { readContext: Ha, useCallback: mr, useContext: mr, useEffect: mr, useImperativeHandle: mr, useInsertionEffect: mr, useLayoutEffect: mr, useMemo: mr, useReducer: mr, useRef: mr, useState: mr, useDebugValue: mr, useDeferredValue: mr, useTransition: mr, useMutableSource: mr, useSyncExternalStore: mr, useId: mr, unstable_isNewReconciler: false }, v3 = { readContext: Ha, useCallback: function(n2, r) {
    return Vi().memoizedState = [n2, r === void 0 ? null : r], n2;
  }, useContext: Ha, useEffect: uT, useImperativeHandle: function(n2, r, o) {
    return o = o != null ? o.concat([n2]) : null, bm(4194308, 4, Yk.bind(null, r, n2), o);
  }, useLayoutEffect: function(n2, r) {
    return bm(4194308, 4, n2, r);
  }, useInsertionEffect: function(n2, r) {
    return bm(4, 2, n2, r);
  }, useMemo: function(n2, r) {
    var o = Vi();
    return r = r === void 0 ? null : r, n2 = n2(), o.memoizedState = [n2, r], n2;
  }, useReducer: function(n2, r, o) {
    var u = Vi();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n2, lastRenderedState: r }, u.queue = n2, n2 = n2.dispatch = d3.bind(null, qt, n2), [u.memoizedState, n2];
  }, useRef: function(n2) {
    var r = Vi();
    return n2 = { current: n2 }, r.memoizedState = n2;
  }, useState: lT, useDebugValue: Cb, useDeferredValue: function(n2) {
    return Vi().memoizedState = n2;
  }, useTransition: function() {
    var n2 = lT(false), r = n2[0];
    return n2 = f3.bind(null, n2[1]), Vi().memoizedState = n2, [r, n2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n2, r, o) {
    var u = qt, c = Vi();
    if (Wt) {
      if (o === void 0)
        throw Error(ne(407));
      o = o();
    } else {
      if (o = r(), Vn === null)
        throw Error(ne(349));
      Nu & 30 || Mk(u, r, o);
    }
    c.memoizedState = o;
    var p = { value: o, getSnapshot: r };
    return c.queue = p, uT(zk.bind(null, u, p, n2), [n2]), u.flags |= 2048, Ud(9, Ak.bind(null, u, p, o, r), void 0, null), o;
  }, useId: function() {
    var n2 = Vi(), r = Vn.identifierPrefix;
    if (Wt) {
      var o = Co, u = Do;
      o = (u & ~(1 << 32 - hi(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Nd++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = c3++, r = ":" + r + "r" + o.toString(32) + ":";
    return n2.memoizedState = r;
  }, unstable_isNewReconciler: false }, m3 = { readContext: Ha, useCallback: Wk, useContext: Ha, useEffect: Db, useImperativeHandle: Qk, useInsertionEffect: Fk, useLayoutEffect: Vk, useMemo: Bk, useReducer: JS, useRef: Hk, useState: function() {
    return JS(Ld);
  }, useDebugValue: Cb, useDeferredValue: function(n2) {
    var r = Fa();
    return Xk(r, Un.memoizedState, n2);
  }, useTransition: function() {
    var n2 = JS(Ld)[0], r = Fa().memoizedState;
    return [n2, r];
  }, useMutableSource: Ik, useSyncExternalStore: $k, useId: Jk, unstable_isNewReconciler: false }, h3 = { readContext: Ha, useCallback: Wk, useContext: Ha, useEffect: Db, useImperativeHandle: Qk, useInsertionEffect: Fk, useLayoutEffect: Vk, useMemo: Bk, useReducer: GS, useRef: Hk, useState: function() {
    return GS(Ld);
  }, useDebugValue: Cb, useDeferredValue: function(n2) {
    var r = Fa();
    return Un === null ? r.memoizedState = n2 : Xk(r, Un.memoizedState, n2);
  }, useTransition: function() {
    var n2 = GS(Ld)[0], r = Fa().memoizedState;
    return [n2, r];
  }, useMutableSource: Ik, useSyncExternalStore: $k, useId: Jk, unstable_isNewReconciler: false };
  function cc(n2, r) {
    try {
      var o = "", u = r;
      do
        o += Wz(u), u = u.return;
      while (u);
      var c = o;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n2, source: r, stack: c, digest: null };
  }
  function qS(n2, r, o) {
    return { value: n2, source: null, stack: o ?? null, digest: r ?? null };
  }
  function U1(n2, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var y3 = typeof WeakMap == "function" ? WeakMap : Map;
  function Zk(n2, r, o) {
    o = Ro(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Qm || (Qm = true, V1 = u), U1(n2, r);
    }, o;
  }
  function e_(n2, r, o) {
    o = Ro(-1, o), o.tag = 3;
    var u = n2.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        U1(n2, r);
      };
    }
    var p = n2.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
      U1(n2, r), typeof u != "function" && (Tl === null ? Tl = /* @__PURE__ */ new Set([this]) : Tl.add(this));
      var d = r.stack;
      this.componentDidCatch(r.value, { componentStack: d !== null ? d : "" });
    }), o;
  }
  function sT(n2, r, o) {
    var u = n2.pingCache;
    if (u === null) {
      u = n2.pingCache = new y3();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n2 = N3.bind(null, n2, r, o), r.then(n2, n2));
  }
  function cT(n2) {
    do {
      var r;
      if ((r = n2.tag === 13) && (r = n2.memoizedState, r = r !== null ? r.dehydrated !== null : true), r)
        return n2;
      n2 = n2.return;
    } while (n2 !== null);
    return null;
  }
  function fT(n2, r, o, u, c) {
    return n2.mode & 1 ? (n2.flags |= 65536, n2.lanes = c, n2) : (n2 === r ? n2.flags |= 65536 : (n2.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ro(-1, 1), r.tag = 2, El(o, r, 1))), o.lanes |= 1), n2);
  }
  var g3 = Oo.ReactCurrentOwner, Xr = false;
  function Ir(n2, r, o, u) {
    r.child = n2 === null ? Lk(r, null, o, u) : uc(r, n2.child, o, u);
  }
  function dT(n2, r, o, u, c) {
    o = o.render;
    var p = r.ref;
    return rc(r, c), u = wb(n2, r, o, u, p, c), o = xb(), n2 !== null && !Xr ? (r.updateQueue = n2.updateQueue, r.flags &= -2053, n2.lanes &= ~c, _o(n2, r, c)) : (Wt && o && sb(r), r.flags |= 1, Ir(n2, r, u, c), r.child);
  }
  function pT(n2, r, o, u, c) {
    if (n2 === null) {
      var p = o.type;
      return typeof p == "function" && !Lb(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = p, t_(n2, r, p, u, c)) : (n2 = Cm(o.type, null, u, r, r.mode, c), n2.ref = r.ref, n2.return = r, r.child = n2);
    }
    if (p = n2.child, !(n2.lanes & c)) {
      var d = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Rd, o(d, u) && n2.ref === r.ref)
        return _o(n2, r, c);
    }
    return r.flags |= 1, n2 = _l(p, u), n2.ref = r.ref, n2.return = r, r.child = n2;
  }
  function t_(n2, r, o, u, c) {
    if (n2 !== null) {
      var p = n2.memoizedProps;
      if (Rd(p, u) && n2.ref === r.ref)
        if (Xr = false, r.pendingProps = u = p, (n2.lanes & c) !== 0)
          n2.flags & 131072 && (Xr = true);
        else
          return r.lanes = n2.lanes, _o(n2, r, c);
    }
    return I1(n2, r, o, u, c);
  }
  function n_(n2, r, o) {
    var u = r.pendingProps, c = u.children, p = n2 !== null ? n2.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ht(Ks, ha), ha |= o;
      else {
        if (!(o & 1073741824))
          return n2 = p !== null ? p.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n2, cachePool: null, transitions: null }, r.updateQueue = null, Ht(Ks, ha), ha |= n2, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : o, Ht(Ks, ha), ha |= u;
      }
    else
      p !== null ? (u = p.baseLanes | o, r.memoizedState = null) : u = o, Ht(Ks, ha), ha |= u;
    return Ir(n2, r, c, o), r.child;
  }
  function r_(n2, r) {
    var o = r.ref;
    (n2 === null && o !== null || n2 !== null && n2.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function I1(n2, r, o, u, c) {
    var p = Gr(o) ? _u : gr.current;
    return p = oc(r, p), rc(r, c), o = wb(n2, r, o, u, p, c), u = xb(), n2 !== null && !Xr ? (r.updateQueue = n2.updateQueue, r.flags &= -2053, n2.lanes &= ~c, _o(n2, r, c)) : (Wt && u && sb(r), r.flags |= 1, Ir(n2, r, o, c), r.child);
  }
  function vT(n2, r, o, u, c) {
    if (Gr(o)) {
      var p = true;
      $m(r);
    } else
      p = false;
    if (rc(r, c), r.stateNode === null)
      wm(n2, r), Ok(r, o, u), L1(r, o, u, c), u = true;
    else if (n2 === null) {
      var d = r.stateNode, b = r.memoizedProps;
      d.props = b;
      var x = d.context, T = o.contextType;
      typeof T == "object" && T !== null ? T = Ha(T) : (T = Gr(o) ? _u : gr.current, T = oc(r, T));
      var V = o.getDerivedStateFromProps, U = typeof V == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      U || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b !== u || x !== T) && iT(r, d, u, T), yl = false;
      var j2 = r.memoizedState;
      d.state = j2, Pm(r, u, d, c), x = r.memoizedState, b !== u || j2 !== x || Jr.current || yl ? (typeof V == "function" && (N1(r, o, V, u), x = r.memoizedState), (b = yl || aT(r, o, b, u, j2, x, T)) ? (U || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = x), d.props = u, d.state = x, d.context = T, u = b) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), u = false);
    } else {
      d = r.stateNode, kk(n2, r), b = r.memoizedProps, T = r.type === r.elementType ? b : pi(r.type, b), d.props = T, U = r.pendingProps, j2 = d.context, x = o.contextType, typeof x == "object" && x !== null ? x = Ha(x) : (x = Gr(o) ? _u : gr.current, x = oc(r, x));
      var H = o.getDerivedStateFromProps;
      (V = typeof H == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b !== U || j2 !== x) && iT(r, d, u, x), yl = false, j2 = r.memoizedState, d.state = j2, Pm(r, u, d, c);
      var J = r.memoizedState;
      b !== U || j2 !== J || Jr.current || yl ? (typeof H == "function" && (N1(r, o, H, u), J = r.memoizedState), (T = yl || aT(r, o, T, u, j2, J, x) || false) ? (V || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(u, J, x), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(u, J, x)), typeof d.componentDidUpdate == "function" && (r.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || b === n2.memoizedProps && j2 === n2.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || b === n2.memoizedProps && j2 === n2.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = J), d.props = u, d.state = J, d.context = x, u = T) : (typeof d.componentDidUpdate != "function" || b === n2.memoizedProps && j2 === n2.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || b === n2.memoizedProps && j2 === n2.memoizedState || (r.flags |= 1024), u = false);
    }
    return $1(n2, r, o, u, p, c);
  }
  function $1(n2, r, o, u, c, p) {
    r_(n2, r);
    var d = (r.flags & 128) !== 0;
    if (!u && !d)
      return c && ZE(r, o, false), _o(n2, r, p);
    u = r.stateNode, g3.current = r;
    var b = d && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n2 !== null && d ? (r.child = uc(r, n2.child, null, p), r.child = uc(r, null, b, p)) : Ir(n2, r, b, p), r.memoizedState = u.state, c && ZE(r, o, true), r.child;
  }
  function a_(n2) {
    var r = n2.stateNode;
    r.pendingContext ? KE(n2, r.pendingContext, r.pendingContext !== r.context) : r.context && KE(n2, r.context, false), yb(n2, r.containerInfo);
  }
  function mT(n2, r, o, u, c) {
    return lc(), fb(c), r.flags |= 256, Ir(n2, r, o, u), r.child;
  }
  var M1 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function A1(n2) {
    return { baseLanes: n2, cachePool: null, transitions: null };
  }
  function i_(n2, r, o) {
    var u = r.pendingProps, c = Gt.current, p = false, d = (r.flags & 128) !== 0, b;
    if ((b = d) || (b = n2 !== null && n2.memoizedState === null ? false : (c & 2) !== 0), b ? (p = true, r.flags &= -129) : (n2 === null || n2.memoizedState !== null) && (c |= 1), Ht(Gt, c & 1), n2 === null)
      return _1(r), n2 = r.memoizedState, n2 !== null && (n2 = n2.dehydrated, n2 !== null) ? (r.mode & 1 ? n2.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (d = u.children, n2 = u.fallback, p ? (u = r.mode, p = r.child, d = { mode: "hidden", children: d }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = d) : p = ih(d, u, 0, null), n2 = ku(n2, u, o, null), p.return = r, n2.return = r, p.sibling = n2, r.child = p, r.child.memoizedState = A1(o), r.memoizedState = M1, n2) : Rb(r, d));
    if (c = n2.memoizedState, c !== null && (b = c.dehydrated, b !== null))
      return S3(n2, r, d, u, b, c, o);
    if (p) {
      p = u.fallback, d = r.mode, c = n2.child, b = c.sibling;
      var x = { mode: "hidden", children: u.children };
      return !(d & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = x, r.deletions = null) : (u = _l(c, x), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? p = _l(b, p) : (p = ku(p, d, o, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, d = n2.child.memoizedState, d = d === null ? A1(o) : { baseLanes: d.baseLanes | o, cachePool: null, transitions: d.transitions }, p.memoizedState = d, p.childLanes = n2.childLanes & ~o, r.memoizedState = M1, u;
    }
    return p = n2.child, n2 = p.sibling, u = _l(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n2 !== null && (o = r.deletions, o === null ? (r.deletions = [n2], r.flags |= 16) : o.push(n2)), r.child = u, r.memoizedState = null, u;
  }
  function Rb(n2, r) {
    return r = ih({ mode: "visible", children: r }, n2.mode, 0, null), r.return = n2, n2.child = r;
  }
  function dm(n2, r, o, u) {
    return u !== null && fb(u), uc(r, n2.child, null, o), n2 = Rb(r, r.pendingProps.children), n2.flags |= 2, r.memoizedState = null, n2;
  }
  function S3(n2, r, o, u, c, p, d) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = qS(Error(ne(422))), dm(n2, r, d, u)) : r.memoizedState !== null ? (r.child = n2.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = ih({ mode: "visible", children: u.children }, c, 0, null), p = ku(p, c, d, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && uc(r, n2.child, null, d), r.child.memoizedState = A1(d), r.memoizedState = M1, p);
    if (!(r.mode & 1))
      return dm(n2, r, d, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var b = u.dgst;
      return u = b, p = Error(ne(419)), u = qS(p, u, void 0), dm(n2, r, d, u);
    }
    if (b = (d & n2.childLanes) !== 0, Xr || b) {
      if (u = Vn, u !== null) {
        switch (d & -d) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | d) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, ko(n2, c), yi(u, n2, c, -1));
      }
      return Nb(), u = qS(Error(ne(421))), dm(n2, r, d, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n2.child, r = L3.bind(null, n2), c._reactRetry = r, null) : (n2 = p.treeContext, ya = Rl(c.nextSibling), ga = r, Wt = true, mi = null, n2 !== null && (Aa[za++] = Do, Aa[za++] = Co, Aa[za++] = Ou, Do = n2.id, Co = n2.overflow, Ou = r), r = Rb(r, u.children), r.flags |= 4096, r);
  }
  function hT(n2, r, o) {
    n2.lanes |= r;
    var u = n2.alternate;
    u !== null && (u.lanes |= r), O1(n2.return, r, o);
  }
  function KS(n2, r, o, u, c) {
    var p = n2.memoizedState;
    p === null ? n2.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = c);
  }
  function o_(n2, r, o) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (Ir(n2, r, u.children, o), u = Gt.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n2 !== null && n2.flags & 128)
        e:
          for (n2 = r.child; n2 !== null; ) {
            if (n2.tag === 13)
              n2.memoizedState !== null && hT(n2, o, r);
            else if (n2.tag === 19)
              hT(n2, o, r);
            else if (n2.child !== null) {
              n2.child.return = n2, n2 = n2.child;
              continue;
            }
            if (n2 === r)
              break e;
            for (; n2.sibling === null; ) {
              if (n2.return === null || n2.return === r)
                break e;
              n2 = n2.return;
            }
            n2.sibling.return = n2.return, n2 = n2.sibling;
          }
      u &= 1;
    }
    if (Ht(Gt, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; )
            n2 = o.alternate, n2 !== null && Hm(n2) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), KS(r, false, c, o, p);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n2 = c.alternate, n2 !== null && Hm(n2) === null) {
              r.child = c;
              break;
            }
            n2 = c.sibling, c.sibling = o, o = c, c = n2;
          }
          KS(r, true, o, null, p);
          break;
        case "together":
          KS(r, false, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function wm(n2, r) {
    !(r.mode & 1) && n2 !== null && (n2.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function _o(n2, r, o) {
    if (n2 !== null && (r.dependencies = n2.dependencies), Lu |= r.lanes, !(o & r.childLanes))
      return null;
    if (n2 !== null && r.child !== n2.child)
      throw Error(ne(153));
    if (r.child !== null) {
      for (n2 = r.child, o = _l(n2, n2.pendingProps), r.child = o, o.return = r; n2.sibling !== null; )
        n2 = n2.sibling, o = o.sibling = _l(n2, n2.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function b3(n2, r, o) {
    switch (r.tag) {
      case 3:
        a_(r), lc();
        break;
      case 5:
        Uk(r);
        break;
      case 1:
        Gr(r.type) && $m(r);
        break;
      case 4:
        yb(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Ht(zm, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ht(Gt, Gt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? i_(n2, r, o) : (Ht(Gt, Gt.current & 1), n2 = _o(n2, r, o), n2 !== null ? n2.sibling : null);
        Ht(Gt, Gt.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n2.flags & 128) {
          if (u)
            return o_(n2, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ht(Gt, Gt.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, n_(n2, r, o);
    }
    return _o(n2, r, o);
  }
  var l_, z1, u_, s_;
  l_ = function(n2, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n2.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  };
  z1 = function() {
  };
  u_ = function(n2, r, o, u) {
    var c = n2.memoizedProps;
    if (c !== u) {
      n2 = r.stateNode, Eu(Wi.current);
      var p = null;
      switch (o) {
        case "input":
          c = o1(n2, c), u = o1(n2, u), p = [];
          break;
        case "select":
          c = Kt({}, c, { value: void 0 }), u = Kt({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = s1(n2, c), u = s1(n2, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n2.onclick = Um);
      }
      f1(o, u);
      var d;
      o = null;
      for (T in c)
        if (!u.hasOwnProperty(T) && c.hasOwnProperty(T) && c[T] != null)
          if (T === "style") {
            var b = c[T];
            for (d in b)
              b.hasOwnProperty(d) && (o || (o = {}), o[d] = "");
          } else
            T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (gd.hasOwnProperty(T) ? p || (p = []) : (p = p || []).push(T, null));
      for (T in u) {
        var x = u[T];
        if (b = c?.[T], u.hasOwnProperty(T) && x !== b && (x != null || b != null))
          if (T === "style")
            if (b) {
              for (d in b)
                !b.hasOwnProperty(d) || x && x.hasOwnProperty(d) || (o || (o = {}), o[d] = "");
              for (d in x)
                x.hasOwnProperty(d) && b[d] !== x[d] && (o || (o = {}), o[d] = x[d]);
            } else
              o || (p || (p = []), p.push(T, o)), o = x;
          else
            T === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, b = b ? b.__html : void 0, x != null && b !== x && (p = p || []).push(T, x)) : T === "children" ? typeof x != "string" && typeof x != "number" || (p = p || []).push(T, "" + x) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (gd.hasOwnProperty(T) ? (x != null && T === "onScroll" && Vt("scroll", n2), p || b === x || (p = [])) : (p = p || []).push(T, x));
      }
      o && (p = p || []).push("style", o);
      var T = p;
      (r.updateQueue = T) && (r.flags |= 4);
    }
  };
  s_ = function(n2, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function nd(n2, r) {
    if (!Wt)
      switch (n2.tailMode) {
        case "hidden":
          r = n2.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n2.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n2.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n2.tail === null ? n2.tail = null : n2.tail.sibling = null : u.sibling = null;
      }
  }
  function hr(n2) {
    var r = n2.alternate !== null && n2.alternate.child === n2.child, o = 0, u = 0;
    if (r)
      for (var c = n2.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n2, c = c.sibling;
    else
      for (c = n2.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n2, c = c.sibling;
    return n2.subtreeFlags |= u, n2.childLanes = o, r;
  }
  function w3(n2, r, o) {
    var u = r.pendingProps;
    switch (cb(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return hr(r), null;
      case 1:
        return Gr(r.type) && Im(), hr(r), null;
      case 3:
        return u = r.stateNode, sc(), Yt(Jr), Yt(gr), Sb(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n2 === null || n2.child === null) && (cm(r) ? r.flags |= 4 : n2 === null || n2.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, mi !== null && (W1(mi), mi = null))), z1(n2, r), hr(r), null;
      case 5:
        gb(r);
        var c = Eu(Od.current);
        if (o = r.type, n2 !== null && r.stateNode != null)
          u_(n2, r, o, u, c), n2.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(ne(166));
            return hr(r), null;
          }
          if (n2 = Eu(Wi.current), cm(r)) {
            u = r.stateNode, o = r.type;
            var p = r.memoizedProps;
            switch (u[Yi] = r, u[kd] = p, n2 = (r.mode & 1) !== 0, o) {
              case "dialog":
                Vt("cancel", u), Vt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ud.length; c++)
                  Vt(ud[c], u);
                break;
              case "source":
                Vt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Vt("error", u), Vt("load", u);
                break;
              case "details":
                Vt("toggle", u);
                break;
              case "input":
                CE(u, p), Vt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Vt("invalid", u);
                break;
              case "textarea":
                EE(u, p), Vt("invalid", u);
            }
            f1(o, p), c = null;
            for (var d in p)
              if (p.hasOwnProperty(d)) {
                var b = p[d];
                d === "children" ? typeof b == "string" ? u.textContent !== b && (p.suppressHydrationWarning !== true && sm(u.textContent, b, n2), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (p.suppressHydrationWarning !== true && sm(u.textContent, b, n2), c = ["children", "" + b]) : gd.hasOwnProperty(d) && b != null && d === "onScroll" && Vt("scroll", u);
              }
            switch (o) {
              case "input":
                qv(u), RE(u, p, true);
                break;
              case "textarea":
                qv(u), TE(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Um);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            d = c.nodeType === 9 ? c : c.ownerDocument, n2 === "http://www.w3.org/1999/xhtml" && (n2 = MT(o)), n2 === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n2 = d.createElement("div"), n2.innerHTML = "<script></script>", n2 = n2.removeChild(n2.firstChild)) : typeof u.is == "string" ? n2 = d.createElement(o, { is: u.is }) : (n2 = d.createElement(o), o === "select" && (d = n2, u.multiple ? d.multiple = true : u.size && (d.size = u.size))) : n2 = d.createElementNS(n2, o), n2[Yi] = r, n2[kd] = u, l_(n2, r, false, false), r.stateNode = n2;
            e: {
              switch (d = d1(o, u), o) {
                case "dialog":
                  Vt("cancel", n2), Vt("close", n2), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n2), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ud.length; c++)
                    Vt(ud[c], n2);
                  c = u;
                  break;
                case "source":
                  Vt("error", n2), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt("error", n2), Vt("load", n2), c = u;
                  break;
                case "details":
                  Vt("toggle", n2), c = u;
                  break;
                case "input":
                  CE(n2, u), c = o1(n2, u), Vt("invalid", n2);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n2._wrapperState = { wasMultiple: !!u.multiple }, c = Kt({}, u, { value: void 0 }), Vt("invalid", n2);
                  break;
                case "textarea":
                  EE(n2, u), c = s1(n2, u), Vt("invalid", n2);
                  break;
                default:
                  c = u;
              }
              f1(o, c), b = c;
              for (p in b)
                if (b.hasOwnProperty(p)) {
                  var x = b[p];
                  p === "style" ? jT(n2, x) : p === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && AT(n2, x)) : p === "children" ? typeof x == "string" ? (o !== "textarea" || x !== "") && Sd(n2, x) : typeof x == "number" && Sd(n2, "" + x) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (gd.hasOwnProperty(p) ? x != null && p === "onScroll" && Vt("scroll", n2) : x != null && J1(n2, p, x, d));
                }
              switch (o) {
                case "input":
                  qv(n2), RE(n2, u, false);
                  break;
                case "textarea":
                  qv(n2), TE(n2);
                  break;
                case "option":
                  u.value != null && n2.setAttribute("value", "" + Ol(u.value));
                  break;
                case "select":
                  n2.multiple = !!u.multiple, p = u.value, p != null ? Zs(n2, !!u.multiple, p, false) : u.defaultValue != null && Zs(n2, !!u.multiple, u.defaultValue, true);
                  break;
                default:
                  typeof c.onClick == "function" && (n2.onclick = Um);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = true;
                  break e;
                default:
                  u = false;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return hr(r), null;
      case 6:
        if (n2 && r.stateNode != null)
          s_(n2, r, n2.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(ne(166));
          if (o = Eu(Od.current), Eu(Wi.current), cm(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Yi] = r, (p = u.nodeValue !== o) && (n2 = ga, n2 !== null))
              switch (n2.tag) {
                case 3:
                  sm(u.nodeValue, o, (n2.mode & 1) !== 0);
                  break;
                case 5:
                  n2.memoizedProps.suppressHydrationWarning !== true && sm(u.nodeValue, o, (n2.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Yi] = r, r.stateNode = u;
        }
        return hr(r), null;
      case 13:
        if (Yt(Gt), u = r.memoizedState, n2 === null || n2.memoizedState !== null && n2.memoizedState.dehydrated !== null) {
          if (Wt && ya !== null && r.mode & 1 && !(r.flags & 128))
            Ek(), lc(), r.flags |= 98560, p = false;
          else if (p = cm(r), u !== null && u.dehydrated !== null) {
            if (n2 === null) {
              if (!p)
                throw Error(ne(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(ne(317));
              p[Yi] = r;
            } else
              lc(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            hr(r), p = false;
          } else
            mi !== null && (W1(mi), mi = null), p = true;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n2 !== null && n2.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n2 === null || Gt.current & 1 ? In === 0 && (In = 3) : Nb())), r.updateQueue !== null && (r.flags |= 4), hr(r), null);
      case 4:
        return sc(), z1(n2, r), n2 === null && Ed(r.stateNode.containerInfo), hr(r), null;
      case 10:
        return vb(r.type._context), hr(r), null;
      case 17:
        return Gr(r.type) && Im(), hr(r), null;
      case 19:
        if (Yt(Gt), p = r.memoizedState, p === null)
          return hr(r), null;
        if (u = (r.flags & 128) !== 0, d = p.rendering, d === null)
          if (u)
            nd(p, false);
          else {
            if (In !== 0 || n2 !== null && n2.flags & 128)
              for (n2 = r.child; n2 !== null; ) {
                if (d = Hm(n2), d !== null) {
                  for (r.flags |= 128, nd(p, false), u = d.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    p = o, n2 = u, p.flags &= 14680066, d = p.alternate, d === null ? (p.childLanes = 0, p.lanes = n2, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = d.childLanes, p.lanes = d.lanes, p.child = d.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = d.memoizedProps, p.memoizedState = d.memoizedState, p.updateQueue = d.updateQueue, p.type = d.type, n2 = d.dependencies, p.dependencies = n2 === null ? null : { lanes: n2.lanes, firstContext: n2.firstContext }), o = o.sibling;
                  return Ht(Gt, Gt.current & 1 | 2), r.child;
                }
                n2 = n2.sibling;
              }
            p.tail !== null && cn() > fc && (r.flags |= 128, u = true, nd(p, false), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n2 = Hm(d), n2 !== null) {
              if (r.flags |= 128, u = true, o = n2.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), nd(p, true), p.tail === null && p.tailMode === "hidden" && !d.alternate && !Wt)
                return hr(r), null;
            } else
              2 * cn() - p.renderingStartTime > fc && o !== 1073741824 && (r.flags |= 128, u = true, nd(p, false), r.lanes = 4194304);
          p.isBackwards ? (d.sibling = r.child, r.child = d) : (o = p.last, o !== null ? o.sibling = d : r.child = d, p.last = d);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = cn(), r.sibling = null, o = Gt.current, Ht(Gt, u ? o & 1 | 2 : o & 1), r) : (hr(r), null);
      case 22:
      case 23:
        return Ob(), u = r.memoizedState !== null, n2 !== null && n2.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ha & 1073741824 && (hr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : hr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(ne(156, r.tag));
  }
  function x3(n2, r) {
    switch (cb(r), r.tag) {
      case 1:
        return Gr(r.type) && Im(), n2 = r.flags, n2 & 65536 ? (r.flags = n2 & -65537 | 128, r) : null;
      case 3:
        return sc(), Yt(Jr), Yt(gr), Sb(), n2 = r.flags, n2 & 65536 && !(n2 & 128) ? (r.flags = n2 & -65537 | 128, r) : null;
      case 5:
        return gb(r), null;
      case 13:
        if (Yt(Gt), n2 = r.memoizedState, n2 !== null && n2.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(ne(340));
          lc();
        }
        return n2 = r.flags, n2 & 65536 ? (r.flags = n2 & -65537 | 128, r) : null;
      case 19:
        return Yt(Gt), null;
      case 4:
        return sc(), null;
      case 10:
        return vb(r.type._context), null;
      case 22:
      case 23:
        return Ob(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pm = false, yr = false, D3 = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function qs(n2, r) {
    var o = n2.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          an(n2, r, u);
        }
      else
        o.current = null;
  }
  function j1(n2, r, o) {
    try {
      o();
    } catch (u) {
      an(n2, r, u);
    }
  }
  var yT = false;
  function C3(n2, r) {
    if (x1 = Om, n2 = pk(), ub(n2)) {
      if ("selectionStart" in n2)
        var o = { start: n2.selectionStart, end: n2.selectionEnd };
      else
        e: {
          o = (o = n2.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var c = u.anchorOffset, p = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var d = 0, b = -1, x = -1, T = 0, V = 0, U = n2, j2 = null;
            t:
              for (; ; ) {
                for (var H; U !== o || c !== 0 && U.nodeType !== 3 || (b = d + c), U !== p || u !== 0 && U.nodeType !== 3 || (x = d + u), U.nodeType === 3 && (d += U.nodeValue.length), (H = U.firstChild) !== null; )
                  j2 = U, U = H;
                for (; ; ) {
                  if (U === n2)
                    break t;
                  if (j2 === o && ++T === c && (b = d), j2 === p && ++V === u && (x = d), (H = U.nextSibling) !== null)
                    break;
                  U = j2, j2 = U.parentNode;
                }
                U = H;
              }
            o = b === -1 || x === -1 ? null : { start: b, end: x };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (D1 = { focusedElem: n2, selectionRange: o }, Om = false, ge = r; ge !== null; )
      if (r = ge, n2 = r.child, (r.subtreeFlags & 1028) !== 0 && n2 !== null)
        n2.return = r, ge = n2;
      else
        for (; ge !== null; ) {
          r = ge;
          try {
            var J = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (J !== null) {
                    var ie = J.memoizedProps, Ge = J.memoizedState, N = r.stateNode, C = N.getSnapshotBeforeUpdate(r.elementType === r.type ? ie : pi(r.type, ie), Ge);
                    N.__reactInternalSnapshotBeforeUpdate = C;
                  }
                  break;
                case 3:
                  var k2 = r.stateNode.containerInfo;
                  k2.nodeType === 1 ? k2.textContent = "" : k2.nodeType === 9 && k2.documentElement && k2.removeChild(k2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(ne(163));
              }
          } catch (Q) {
            an(r, r.return, Q);
          }
          if (n2 = r.sibling, n2 !== null) {
            n2.return = r.return, ge = n2;
            break;
          }
          ge = r.return;
        }
    return J = yT, yT = false, J;
  }
  function md(n2, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n2) === n2) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && j1(r, o, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function rh(n2, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n2) === n2) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function P1(n2) {
    var r = n2.ref;
    if (r !== null) {
      var o = n2.stateNode;
      switch (n2.tag) {
        case 5:
          n2 = o;
          break;
        default:
          n2 = o;
      }
      typeof r == "function" ? r(n2) : r.current = n2;
    }
  }
  function c_(n2) {
    var r = n2.alternate;
    r !== null && (n2.alternate = null, c_(r)), n2.child = null, n2.deletions = null, n2.sibling = null, n2.tag === 5 && (r = n2.stateNode, r !== null && (delete r[Yi], delete r[kd], delete r[E1], delete r[o3], delete r[l3])), n2.stateNode = null, n2.return = null, n2.dependencies = null, n2.memoizedProps = null, n2.memoizedState = null, n2.pendingProps = null, n2.stateNode = null, n2.updateQueue = null;
  }
  function f_(n2) {
    return n2.tag === 5 || n2.tag === 3 || n2.tag === 4;
  }
  function gT(n2) {
    e:
      for (; ; ) {
        for (; n2.sibling === null; ) {
          if (n2.return === null || f_(n2.return))
            return null;
          n2 = n2.return;
        }
        for (n2.sibling.return = n2.return, n2 = n2.sibling; n2.tag !== 5 && n2.tag !== 6 && n2.tag !== 18; ) {
          if (n2.flags & 2 || n2.child === null || n2.tag === 4)
            continue e;
          n2.child.return = n2, n2 = n2.child;
        }
        if (!(n2.flags & 2))
          return n2.stateNode;
      }
  }
  function H1(n2, r, o) {
    var u = n2.tag;
    if (u === 5 || u === 6)
      n2 = n2.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n2, r) : o.insertBefore(n2, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n2, o)) : (r = o, r.appendChild(n2)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Um));
    else if (u !== 4 && (n2 = n2.child, n2 !== null))
      for (H1(n2, r, o), n2 = n2.sibling; n2 !== null; )
        H1(n2, r, o), n2 = n2.sibling;
  }
  function F1(n2, r, o) {
    var u = n2.tag;
    if (u === 5 || u === 6)
      n2 = n2.stateNode, r ? o.insertBefore(n2, r) : o.appendChild(n2);
    else if (u !== 4 && (n2 = n2.child, n2 !== null))
      for (F1(n2, r, o), n2 = n2.sibling; n2 !== null; )
        F1(n2, r, o), n2 = n2.sibling;
  }
  var nr = null, vi = false;
  function ml(n2, r, o) {
    for (o = o.child; o !== null; )
      d_(n2, r, o), o = o.sibling;
  }
  function d_(n2, r, o) {
    if (Qi && typeof Qi.onCommitFiberUnmount == "function")
      try {
        Qi.onCommitFiberUnmount(Jm, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        yr || qs(o, r);
      case 6:
        var u = nr, c = vi;
        nr = null, ml(n2, r, o), nr = u, vi = c, nr !== null && (vi ? (n2 = nr, o = o.stateNode, n2.nodeType === 8 ? n2.parentNode.removeChild(o) : n2.removeChild(o)) : nr.removeChild(o.stateNode));
        break;
      case 18:
        nr !== null && (vi ? (n2 = nr, o = o.stateNode, n2.nodeType === 8 ? QS(n2.parentNode, o) : n2.nodeType === 1 && QS(n2, o), Dd(n2)) : QS(nr, o.stateNode));
        break;
      case 4:
        u = nr, c = vi, nr = o.stateNode.containerInfo, vi = true, ml(n2, r, o), nr = u, vi = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, d = p.destroy;
            p = p.tag, d !== void 0 && (p & 2 || p & 4) && j1(o, r, d), c = c.next;
          } while (c !== u);
        }
        ml(n2, r, o);
        break;
      case 1:
        if (!yr && (qs(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (b) {
            an(o, r, b);
          }
        ml(n2, r, o);
        break;
      case 21:
        ml(n2, r, o);
        break;
      case 22:
        o.mode & 1 ? (yr = (u = yr) || o.memoizedState !== null, ml(n2, r, o), yr = u) : ml(n2, r, o);
        break;
      default:
        ml(n2, r, o);
    }
  }
  function ST(n2) {
    var r = n2.updateQueue;
    if (r !== null) {
      n2.updateQueue = null;
      var o = n2.stateNode;
      o === null && (o = n2.stateNode = new D3()), r.forEach(function(u) {
        var c = U3.bind(null, n2, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function di(n2, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var c = o[u];
        try {
          var p = n2, d = r, b = d;
          e:
            for (; b !== null; ) {
              switch (b.tag) {
                case 5:
                  nr = b.stateNode, vi = false;
                  break e;
                case 3:
                  nr = b.stateNode.containerInfo, vi = true;
                  break e;
                case 4:
                  nr = b.stateNode.containerInfo, vi = true;
                  break e;
              }
              b = b.return;
            }
          if (nr === null)
            throw Error(ne(160));
          d_(p, d, c), nr = null, vi = false;
          var x = c.alternate;
          x !== null && (x.return = null), c.return = null;
        } catch (T) {
          an(c, r, T);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        p_(r, n2), r = r.sibling;
  }
  function p_(n2, r) {
    var o = n2.alternate, u = n2.flags;
    switch (n2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (di(r, n2), Fi(n2), u & 4) {
          try {
            md(3, n2, n2.return), rh(3, n2);
          } catch (ie) {
            an(n2, n2.return, ie);
          }
          try {
            md(5, n2, n2.return);
          } catch (ie) {
            an(n2, n2.return, ie);
          }
        }
        break;
      case 1:
        di(r, n2), Fi(n2), u & 512 && o !== null && qs(o, o.return);
        break;
      case 5:
        if (di(r, n2), Fi(n2), u & 512 && o !== null && qs(o, o.return), n2.flags & 32) {
          var c = n2.stateNode;
          try {
            Sd(c, "");
          } catch (ie) {
            an(n2, n2.return, ie);
          }
        }
        if (u & 4 && (c = n2.stateNode, c != null)) {
          var p = n2.memoizedProps, d = o !== null ? o.memoizedProps : p, b = n2.type, x = n2.updateQueue;
          if (n2.updateQueue = null, x !== null)
            try {
              b === "input" && p.type === "radio" && p.name != null && IT(c, p), d1(b, d);
              var T = d1(b, p);
              for (d = 0; d < x.length; d += 2) {
                var V = x[d], U = x[d + 1];
                V === "style" ? jT(c, U) : V === "dangerouslySetInnerHTML" ? AT(c, U) : V === "children" ? Sd(c, U) : J1(c, V, U, T);
              }
              switch (b) {
                case "input":
                  l1(c, p);
                  break;
                case "textarea":
                  $T(c, p);
                  break;
                case "select":
                  var j2 = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var H = p.value;
                  H != null ? Zs(c, !!p.multiple, H, false) : j2 !== !!p.multiple && (p.defaultValue != null ? Zs(c, !!p.multiple, p.defaultValue, true) : Zs(c, !!p.multiple, p.multiple ? [] : "", false));
              }
              c[kd] = p;
            } catch (ie) {
              an(n2, n2.return, ie);
            }
        }
        break;
      case 6:
        if (di(r, n2), Fi(n2), u & 4) {
          if (n2.stateNode === null)
            throw Error(ne(162));
          c = n2.stateNode, p = n2.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (ie) {
            an(n2, n2.return, ie);
          }
        }
        break;
      case 3:
        if (di(r, n2), Fi(n2), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Dd(r.containerInfo);
          } catch (ie) {
            an(n2, n2.return, ie);
          }
        break;
      case 4:
        di(r, n2), Fi(n2);
        break;
      case 13:
        di(r, n2), Fi(n2), c = n2.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (kb = cn())), u & 4 && ST(n2);
        break;
      case 22:
        if (V = o !== null && o.memoizedState !== null, n2.mode & 1 ? (yr = (T = yr) || V, di(r, n2), yr = T) : di(r, n2), Fi(n2), u & 8192) {
          if (T = n2.memoizedState !== null, (n2.stateNode.isHidden = T) && !V && n2.mode & 1)
            for (ge = n2, V = n2.child; V !== null; ) {
              for (U = ge = V; ge !== null; ) {
                switch (j2 = ge, H = j2.child, j2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    md(4, j2, j2.return);
                    break;
                  case 1:
                    qs(j2, j2.return);
                    var J = j2.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      u = j2, o = j2.return;
                      try {
                        r = u, J.props = r.memoizedProps, J.state = r.memoizedState, J.componentWillUnmount();
                      } catch (ie) {
                        an(u, o, ie);
                      }
                    }
                    break;
                  case 5:
                    qs(j2, j2.return);
                    break;
                  case 22:
                    if (j2.memoizedState !== null) {
                      wT(U);
                      continue;
                    }
                }
                H !== null ? (H.return = j2, ge = H) : wT(U);
              }
              V = V.sibling;
            }
          e:
            for (V = null, U = n2; ; ) {
              if (U.tag === 5) {
                if (V === null) {
                  V = U;
                  try {
                    c = U.stateNode, T ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (b = U.stateNode, x = U.memoizedProps.style, d = x != null && x.hasOwnProperty("display") ? x.display : null, b.style.display = zT("display", d));
                  } catch (ie) {
                    an(n2, n2.return, ie);
                  }
                }
              } else if (U.tag === 6) {
                if (V === null)
                  try {
                    U.stateNode.nodeValue = T ? "" : U.memoizedProps;
                  } catch (ie) {
                    an(n2, n2.return, ie);
                  }
              } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === n2) && U.child !== null) {
                U.child.return = U, U = U.child;
                continue;
              }
              if (U === n2)
                break e;
              for (; U.sibling === null; ) {
                if (U.return === null || U.return === n2)
                  break e;
                V === U && (V = null), U = U.return;
              }
              V === U && (V = null), U.sibling.return = U.return, U = U.sibling;
            }
        }
        break;
      case 19:
        di(r, n2), Fi(n2), u & 4 && ST(n2);
        break;
      case 21:
        break;
      default:
        di(r, n2), Fi(n2);
    }
  }
  function Fi(n2) {
    var r = n2.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n2.return; o !== null; ) {
            if (f_(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(ne(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Sd(c, ""), u.flags &= -33);
            var p = gT(n2);
            F1(n2, p, c);
            break;
          case 3:
          case 4:
            var d = u.stateNode.containerInfo, b = gT(n2);
            H1(n2, b, d);
            break;
          default:
            throw Error(ne(161));
        }
      } catch (x) {
        an(n2, n2.return, x);
      }
      n2.flags &= -3;
    }
    r & 4096 && (n2.flags &= -4097);
  }
  function R3(n2, r, o) {
    ge = n2, v_(n2, r, o);
  }
  function v_(n2, r, o) {
    for (var u = (n2.mode & 1) !== 0; ge !== null; ) {
      var c = ge, p = c.child;
      if (c.tag === 22 && u) {
        var d = c.memoizedState !== null || pm;
        if (!d) {
          var b = c.alternate, x = b !== null && b.memoizedState !== null || yr;
          b = pm;
          var T = yr;
          if (pm = d, (yr = x) && !T)
            for (ge = c; ge !== null; )
              d = ge, x = d.child, d.tag === 22 && d.memoizedState !== null ? xT(c) : x !== null ? (x.return = d, ge = x) : xT(c);
          for (; p !== null; )
            ge = p, v_(p, r, o), p = p.sibling;
          ge = c, pm = b, yr = T;
        }
        bT(n2, r, o);
      } else
        c.subtreeFlags & 8772 && p !== null ? (p.return = c, ge = p) : bT(n2, r, o);
    }
  }
  function bT(n2) {
    for (; ge !== null; ) {
      var r = ge;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                yr || rh(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !yr)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? o.memoizedProps : pi(r.type, o.memoizedProps);
                    u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && rT(r, p, u);
                break;
              case 3:
                var d = r.updateQueue;
                if (d !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  rT(r, d, o);
                }
                break;
              case 5:
                var b = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = b;
                  var x = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && o.focus();
                      break;
                    case "img":
                      x.src && (o.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var T = r.alternate;
                  if (T !== null) {
                    var V = T.memoizedState;
                    if (V !== null) {
                      var U = V.dehydrated;
                      U !== null && Dd(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(ne(163));
            }
          yr || r.flags & 512 && P1(r);
        } catch (j2) {
          an(r, r.return, j2);
        }
      }
      if (r === n2) {
        ge = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ge = o;
        break;
      }
      ge = r.return;
    }
  }
  function wT(n2) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n2) {
        ge = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ge = o;
        break;
      }
      ge = r.return;
    }
  }
  function xT(n2) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              rh(4, r);
            } catch (x) {
              an(r, o, x);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (x) {
                an(r, c, x);
              }
            }
            var p = r.return;
            try {
              P1(r);
            } catch (x) {
              an(r, p, x);
            }
            break;
          case 5:
            var d = r.return;
            try {
              P1(r);
            } catch (x) {
              an(r, d, x);
            }
        }
      } catch (x) {
        an(r, r.return, x);
      }
      if (r === n2) {
        ge = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, ge = b;
        break;
      }
      ge = r.return;
    }
  }
  var E3 = Math.ceil, Ym = Oo.ReactCurrentDispatcher, Eb = Oo.ReactCurrentOwner, Pa = Oo.ReactCurrentBatchConfig, St = 0, Vn = null, gn = null, rr = 0, ha = 0, Ks = Ul(0), In = 0, Id = null, Lu = 0, ah = 0, Tb = 0, hd = null, Br = null, kb = 0, fc = 1 / 0, wo = null, Qm = false, V1 = null, Tl = null, vm = false, wl = null, Wm = 0, yd = 0, Y1 = null, xm = -1, Dm = 0;
  function $r() {
    return St & 6 ? cn() : xm !== -1 ? xm : xm = cn();
  }
  function kl(n2) {
    return n2.mode & 1 ? St & 2 && rr !== 0 ? rr & -rr : s3.transition !== null ? (Dm === 0 && (Dm = qT()), Dm) : (n2 = _t, n2 !== 0 || (n2 = window.event, n2 = n2 === void 0 ? 16 : ak(n2.type)), n2) : 1;
  }
  function yi(n2, r, o, u) {
    if (50 < yd)
      throw yd = 0, Y1 = null, Error(ne(185));
    $d(n2, o, u), (!(St & 2) || n2 !== Vn) && (n2 === Vn && (!(St & 2) && (ah |= o), In === 4 && Sl(n2, rr)), qr(n2, u), o === 1 && St === 0 && !(r.mode & 1) && (fc = cn() + 500, eh && Il()));
  }
  function qr(n2, r) {
    var o = n2.callbackNode;
    fj(n2, r);
    var u = _m(n2, n2 === Vn ? rr : 0);
    if (u === 0)
      o !== null && OE(o), n2.callbackNode = null, n2.callbackPriority = 0;
    else if (r = u & -u, n2.callbackPriority !== r) {
      if (o != null && OE(o), r === 1)
        n2.tag === 0 ? u3(DT.bind(null, n2)) : Dk(DT.bind(null, n2)), a3(function() {
          !(St & 6) && Il();
        }), o = null;
      else {
        switch (KT(u)) {
          case 1:
            o = eb;
            break;
          case 4:
            o = JT;
            break;
          case 16:
            o = km;
            break;
          case 536870912:
            o = GT;
            break;
          default:
            o = km;
        }
        o = x_(o, m_.bind(null, n2));
      }
      n2.callbackPriority = r, n2.callbackNode = o;
    }
  }
  function m_(n2, r) {
    if (xm = -1, Dm = 0, St & 6)
      throw Error(ne(327));
    var o = n2.callbackNode;
    if (ac() && n2.callbackNode !== o)
      return null;
    var u = _m(n2, n2 === Vn ? rr : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n2.expiredLanes || r)
      r = Bm(n2, u);
    else {
      r = u;
      var c = St;
      St |= 2;
      var p = y_();
      (Vn !== n2 || rr !== r) && (wo = null, fc = cn() + 500, Tu(n2, r));
      do
        try {
          _3();
          break;
        } catch (b) {
          h_(n2, b);
        }
      while (true);
      pb(), Ym.current = p, St = c, gn !== null ? r = 0 : (Vn = null, rr = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (c = y1(n2), c !== 0 && (u = c, r = Q1(n2, c))), r === 1)
        throw o = Id, Tu(n2, 0), Sl(n2, u), qr(n2, cn()), o;
      if (r === 6)
        Sl(n2, u);
      else {
        if (c = n2.current.alternate, !(u & 30) && !T3(c) && (r = Bm(n2, u), r === 2 && (p = y1(n2), p !== 0 && (u = p, r = Q1(n2, p))), r === 1))
          throw o = Id, Tu(n2, 0), Sl(n2, u), qr(n2, cn()), o;
        switch (n2.finishedWork = c, n2.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(ne(345));
          case 2:
            Du(n2, Br, wo);
            break;
          case 3:
            if (Sl(n2, u), (u & 130023424) === u && (r = kb + 500 - cn(), 10 < r)) {
              if (_m(n2, 0) !== 0)
                break;
              if (c = n2.suspendedLanes, (c & u) !== u) {
                $r(), n2.pingedLanes |= n2.suspendedLanes & c;
                break;
              }
              n2.timeoutHandle = R1(Du.bind(null, n2, Br, wo), r);
              break;
            }
            Du(n2, Br, wo);
            break;
          case 4:
            if (Sl(n2, u), (u & 4194240) === u)
              break;
            for (r = n2.eventTimes, c = -1; 0 < u; ) {
              var d = 31 - hi(u);
              p = 1 << d, d = r[d], d > c && (c = d), u &= ~p;
            }
            if (u = c, u = cn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * E3(u / 1960)) - u, 10 < u) {
              n2.timeoutHandle = R1(Du.bind(null, n2, Br, wo), u);
              break;
            }
            Du(n2, Br, wo);
            break;
          case 5:
            Du(n2, Br, wo);
            break;
          default:
            throw Error(ne(329));
        }
      }
    }
    return qr(n2, cn()), n2.callbackNode === o ? m_.bind(null, n2) : null;
  }
  function Q1(n2, r) {
    var o = hd;
    return n2.current.memoizedState.isDehydrated && (Tu(n2, r).flags |= 256), n2 = Bm(n2, r), n2 !== 2 && (r = Br, Br = o, r !== null && W1(r)), n2;
  }
  function W1(n2) {
    Br === null ? Br = n2 : Br.push.apply(Br, n2);
  }
  function T3(n2) {
    for (var r = n2; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var c = o[u], p = c.getSnapshot;
            c = c.value;
            try {
              if (!gi(p(), c))
                return false;
            } catch {
              return false;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n2)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n2)
            return true;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return true;
  }
  function Sl(n2, r) {
    for (r &= ~Tb, r &= ~ah, n2.suspendedLanes |= r, n2.pingedLanes &= ~r, n2 = n2.expirationTimes; 0 < r; ) {
      var o = 31 - hi(r), u = 1 << o;
      n2[o] = -1, r &= ~u;
    }
  }
  function DT(n2) {
    if (St & 6)
      throw Error(ne(327));
    ac();
    var r = _m(n2, 0);
    if (!(r & 1))
      return qr(n2, cn()), null;
    var o = Bm(n2, r);
    if (n2.tag !== 0 && o === 2) {
      var u = y1(n2);
      u !== 0 && (r = u, o = Q1(n2, u));
    }
    if (o === 1)
      throw o = Id, Tu(n2, 0), Sl(n2, r), qr(n2, cn()), o;
    if (o === 6)
      throw Error(ne(345));
    return n2.finishedWork = n2.current.alternate, n2.finishedLanes = r, Du(n2, Br, wo), qr(n2, cn()), null;
  }
  function _b(n2, r) {
    var o = St;
    St |= 1;
    try {
      return n2(r);
    } finally {
      St = o, St === 0 && (fc = cn() + 500, eh && Il());
    }
  }
  function Uu(n2) {
    wl !== null && wl.tag === 0 && !(St & 6) && ac();
    var r = St;
    St |= 1;
    var o = Pa.transition, u = _t;
    try {
      if (Pa.transition = null, _t = 1, n2)
        return n2();
    } finally {
      _t = u, Pa.transition = o, St = r, !(St & 6) && Il();
    }
  }
  function Ob() {
    ha = Ks.current, Yt(Ks);
  }
  function Tu(n2, r) {
    n2.finishedWork = null, n2.finishedLanes = 0;
    var o = n2.timeoutHandle;
    if (o !== -1 && (n2.timeoutHandle = -1, r3(o)), gn !== null)
      for (o = gn.return; o !== null; ) {
        var u = o;
        switch (cb(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Im();
            break;
          case 3:
            sc(), Yt(Jr), Yt(gr), Sb();
            break;
          case 5:
            gb(u);
            break;
          case 4:
            sc();
            break;
          case 13:
            Yt(Gt);
            break;
          case 19:
            Yt(Gt);
            break;
          case 10:
            vb(u.type._context);
            break;
          case 22:
          case 23:
            Ob();
        }
        o = o.return;
      }
    if (Vn = n2, gn = n2 = _l(n2.current, null), rr = ha = r, In = 0, Id = null, Tb = ah = Lu = 0, Br = hd = null, Ru !== null) {
      for (r = 0; r < Ru.length; r++)
        if (o = Ru[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var c = u.next, p = o.pending;
          if (p !== null) {
            var d = p.next;
            p.next = c, u.next = d;
          }
          o.pending = u;
        }
      Ru = null;
    }
    return n2;
  }
  function h_(n2, r) {
    do {
      var o = gn;
      try {
        if (pb(), Sm.current = Vm, Fm) {
          for (var u = qt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Fm = false;
        }
        if (Nu = 0, Fn = Un = qt = null, vd = false, Nd = 0, Eb.current = null, o === null || o.return === null) {
          In = 1, Id = r, gn = null;
          break;
        }
        e: {
          var p = n2, d = o.return, b = o, x = r;
          if (r = rr, b.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var T = x, V = b, U = V.tag;
            if (!(V.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var j2 = V.alternate;
              j2 ? (V.updateQueue = j2.updateQueue, V.memoizedState = j2.memoizedState, V.lanes = j2.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var H = cT(d);
            if (H !== null) {
              H.flags &= -257, fT(H, d, b, p, r), H.mode & 1 && sT(p, T, r), r = H, x = T;
              var J = r.updateQueue;
              if (J === null) {
                var ie = /* @__PURE__ */ new Set();
                ie.add(x), r.updateQueue = ie;
              } else
                J.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                sT(p, T, r), Nb();
                break e;
              }
              x = Error(ne(426));
            }
          } else if (Wt && b.mode & 1) {
            var Ge = cT(d);
            if (Ge !== null) {
              !(Ge.flags & 65536) && (Ge.flags |= 256), fT(Ge, d, b, p, r), fb(cc(x, b));
              break e;
            }
          }
          p = x = cc(x, b), In !== 4 && (In = 2), hd === null ? hd = [p] : hd.push(p), p = d;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var N = Zk(p, x, r);
                nT(p, N);
                break e;
              case 1:
                b = x;
                var C = p.type, k2 = p.stateNode;
                if (!(p.flags & 128) && (typeof C.getDerivedStateFromError == "function" || k2 !== null && typeof k2.componentDidCatch == "function" && (Tl === null || !Tl.has(k2)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var Q = e_(p, b, r);
                  nT(p, Q);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        S_(o);
      } catch (X) {
        r = X, gn === o && o !== null && (gn = o = o.return);
        continue;
      }
      break;
    } while (true);
  }
  function y_() {
    var n2 = Ym.current;
    return Ym.current = Vm, n2 === null ? Vm : n2;
  }
  function Nb() {
    (In === 0 || In === 3 || In === 2) && (In = 4), Vn === null || !(Lu & 268435455) && !(ah & 268435455) || Sl(Vn, rr);
  }
  function Bm(n2, r) {
    var o = St;
    St |= 2;
    var u = y_();
    (Vn !== n2 || rr !== r) && (wo = null, Tu(n2, r));
    do
      try {
        k3();
        break;
      } catch (c) {
        h_(n2, c);
      }
    while (true);
    if (pb(), St = o, Ym.current = u, gn !== null)
      throw Error(ne(261));
    return Vn = null, rr = 0, In;
  }
  function k3() {
    for (; gn !== null; )
      g_(gn);
  }
  function _3() {
    for (; gn !== null && !nj(); )
      g_(gn);
  }
  function g_(n2) {
    var r = w_(n2.alternate, n2, ha);
    n2.memoizedProps = n2.pendingProps, r === null ? S_(n2) : gn = r, Eb.current = null;
  }
  function S_(n2) {
    var r = n2;
    do {
      var o = r.alternate;
      if (n2 = r.return, r.flags & 32768) {
        if (o = x3(o, r), o !== null) {
          o.flags &= 32767, gn = o;
          return;
        }
        if (n2 !== null)
          n2.flags |= 32768, n2.subtreeFlags = 0, n2.deletions = null;
        else {
          In = 6, gn = null;
          return;
        }
      } else if (o = w3(o, r, ha), o !== null) {
        gn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        gn = r;
        return;
      }
      gn = r = n2;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function Du(n2, r, o) {
    var u = _t, c = Pa.transition;
    try {
      Pa.transition = null, _t = 1, O3(n2, r, o, u);
    } finally {
      Pa.transition = c, _t = u;
    }
    return null;
  }
  function O3(n2, r, o, u) {
    do
      ac();
    while (wl !== null);
    if (St & 6)
      throw Error(ne(327));
    o = n2.finishedWork;
    var c = n2.finishedLanes;
    if (o === null)
      return null;
    if (n2.finishedWork = null, n2.finishedLanes = 0, o === n2.current)
      throw Error(ne(177));
    n2.callbackNode = null, n2.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    if (dj(n2, p), n2 === Vn && (gn = Vn = null, rr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || vm || (vm = true, x_(km, function() {
      return ac(), null;
    })), p = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || p) {
      p = Pa.transition, Pa.transition = null;
      var d = _t;
      _t = 1;
      var b = St;
      St |= 4, Eb.current = null, C3(n2, o), p_(o, n2), Kj(D1), Om = !!x1, D1 = x1 = null, n2.current = o, R3(o, n2, c), rj(), St = b, _t = d, Pa.transition = p;
    } else
      n2.current = o;
    if (vm && (vm = false, wl = n2, Wm = c), p = n2.pendingLanes, p === 0 && (Tl = null), oj(o.stateNode, u), qr(n2, cn()), r !== null)
      for (u = n2.onRecoverableError, o = 0; o < r.length; o++)
        c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Qm)
      throw Qm = false, n2 = V1, V1 = null, n2;
    return Wm & 1 && n2.tag !== 0 && ac(), p = n2.pendingLanes, p & 1 ? n2 === Y1 ? yd++ : (yd = 0, Y1 = n2) : yd = 0, Il(), null;
  }
  function ac() {
    if (wl !== null) {
      var n2 = KT(Wm), r = Pa.transition, o = _t;
      try {
        if (Pa.transition = null, _t = 16 > n2 ? 16 : n2, wl === null)
          var u = false;
        else {
          if (n2 = wl, wl = null, Wm = 0, St & 6)
            throw Error(ne(331));
          var c = St;
          for (St |= 4, ge = n2.current; ge !== null; ) {
            var p = ge, d = p.child;
            if (ge.flags & 16) {
              var b = p.deletions;
              if (b !== null) {
                for (var x = 0; x < b.length; x++) {
                  var T = b[x];
                  for (ge = T; ge !== null; ) {
                    var V = ge;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        md(8, V, p);
                    }
                    var U = V.child;
                    if (U !== null)
                      U.return = V, ge = U;
                    else
                      for (; ge !== null; ) {
                        V = ge;
                        var j2 = V.sibling, H = V.return;
                        if (c_(V), V === T) {
                          ge = null;
                          break;
                        }
                        if (j2 !== null) {
                          j2.return = H, ge = j2;
                          break;
                        }
                        ge = H;
                      }
                  }
                }
                var J = p.alternate;
                if (J !== null) {
                  var ie = J.child;
                  if (ie !== null) {
                    J.child = null;
                    do {
                      var Ge = ie.sibling;
                      ie.sibling = null, ie = Ge;
                    } while (ie !== null);
                  }
                }
                ge = p;
              }
            }
            if (p.subtreeFlags & 2064 && d !== null)
              d.return = p, ge = d;
            else
              e:
                for (; ge !== null; ) {
                  if (p = ge, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        md(9, p, p.return);
                    }
                  var N = p.sibling;
                  if (N !== null) {
                    N.return = p.return, ge = N;
                    break e;
                  }
                  ge = p.return;
                }
          }
          var C = n2.current;
          for (ge = C; ge !== null; ) {
            d = ge;
            var k2 = d.child;
            if (d.subtreeFlags & 2064 && k2 !== null)
              k2.return = d, ge = k2;
            else
              e:
                for (d = C; ge !== null; ) {
                  if (b = ge, b.flags & 2048)
                    try {
                      switch (b.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rh(9, b);
                      }
                    } catch (X) {
                      an(b, b.return, X);
                    }
                  if (b === d) {
                    ge = null;
                    break e;
                  }
                  var Q = b.sibling;
                  if (Q !== null) {
                    Q.return = b.return, ge = Q;
                    break e;
                  }
                  ge = b.return;
                }
          }
          if (St = c, Il(), Qi && typeof Qi.onPostCommitFiberRoot == "function")
            try {
              Qi.onPostCommitFiberRoot(Jm, n2);
            } catch {
            }
          u = true;
        }
        return u;
      } finally {
        _t = o, Pa.transition = r;
      }
    }
    return false;
  }
  function CT(n2, r, o) {
    r = cc(o, r), r = Zk(n2, r, 1), n2 = El(n2, r, 1), r = $r(), n2 !== null && ($d(n2, 1, r), qr(n2, r));
  }
  function an(n2, r, o) {
    if (n2.tag === 3)
      CT(n2, n2, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          CT(r, n2, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Tl === null || !Tl.has(u))) {
            n2 = cc(o, n2), n2 = e_(r, n2, 1), r = El(r, n2, 1), n2 = $r(), r !== null && ($d(r, 1, n2), qr(r, n2));
            break;
          }
        }
        r = r.return;
      }
  }
  function N3(n2, r, o) {
    var u = n2.pingCache;
    u !== null && u.delete(r), r = $r(), n2.pingedLanes |= n2.suspendedLanes & o, Vn === n2 && (rr & o) === o && (In === 4 || In === 3 && (rr & 130023424) === rr && 500 > cn() - kb ? Tu(n2, 0) : Tb |= o), qr(n2, r);
  }
  function b_(n2, r) {
    r === 0 && (n2.mode & 1 ? (r = em, em <<= 1, !(em & 130023424) && (em = 4194304)) : r = 1);
    var o = $r();
    n2 = ko(n2, r), n2 !== null && ($d(n2, r, o), qr(n2, o));
  }
  function L3(n2) {
    var r = n2.memoizedState, o = 0;
    r !== null && (o = r.retryLane), b_(n2, o);
  }
  function U3(n2, r) {
    var o = 0;
    switch (n2.tag) {
      case 13:
        var u = n2.stateNode, c = n2.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n2.stateNode;
        break;
      default:
        throw Error(ne(314));
    }
    u !== null && u.delete(r), b_(n2, o);
  }
  var w_;
  w_ = function(n2, r, o) {
    if (n2 !== null)
      if (n2.memoizedProps !== r.pendingProps || Jr.current)
        Xr = true;
      else {
        if (!(n2.lanes & o) && !(r.flags & 128))
          return Xr = false, b3(n2, r, o);
        Xr = !!(n2.flags & 131072);
      }
    else
      Xr = false, Wt && r.flags & 1048576 && Ck(r, Am, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        wm(n2, r), n2 = r.pendingProps;
        var c = oc(r, gr.current);
        rc(r, o), c = wb(null, r, u, n2, c, o);
        var p = xb();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Gr(u) ? (p = true, $m(r)) : p = false, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, hb(r), c.updater = th, r.stateNode = c, c._reactInternals = r, L1(r, u, n2, o), r = $1(null, r, u, true, p, o)) : (r.tag = 0, Wt && p && sb(r), Ir(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (wm(n2, r), n2 = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = $3(u), n2 = pi(u, n2), c) {
            case 0:
              r = I1(null, r, u, n2, o);
              break e;
            case 1:
              r = vT(null, r, u, n2, o);
              break e;
            case 11:
              r = dT(null, r, u, n2, o);
              break e;
            case 14:
              r = pT(null, r, u, pi(u.type, n2), o);
              break e;
          }
          throw Error(ne(306, u, ""));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), I1(n2, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), vT(n2, r, u, c, o);
      case 3:
        e: {
          if (a_(r), n2 === null)
            throw Error(ne(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, kk(n2, r), Pm(r, u, null, o);
          var d = r.memoizedState;
          if (u = d.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: false, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              c = cc(Error(ne(423)), r), r = mT(n2, r, u, o, c);
              break e;
            } else if (u !== c) {
              c = cc(Error(ne(424)), r), r = mT(n2, r, u, o, c);
              break e;
            } else
              for (ya = Rl(r.stateNode.containerInfo.firstChild), ga = r, Wt = true, mi = null, o = Lk(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (lc(), u === c) {
              r = _o(n2, r, o);
              break e;
            }
            Ir(n2, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uk(r), n2 === null && _1(r), u = r.type, c = r.pendingProps, p = n2 !== null ? n2.memoizedProps : null, d = c.children, C1(u, c) ? d = null : p !== null && C1(u, p) && (r.flags |= 32), r_(n2, r), Ir(n2, r, d, o), r.child;
      case 6:
        return n2 === null && _1(r), null;
      case 13:
        return i_(n2, r, o);
      case 4:
        return yb(r, r.stateNode.containerInfo), u = r.pendingProps, n2 === null ? r.child = uc(r, null, u, o) : Ir(n2, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), dT(n2, r, u, c, o);
      case 7:
        return Ir(n2, r, r.pendingProps, o), r.child;
      case 8:
        return Ir(n2, r, r.pendingProps.children, o), r.child;
      case 12:
        return Ir(n2, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, d = c.value, Ht(zm, u._currentValue), u._currentValue = d, p !== null)
            if (gi(p.value, d)) {
              if (p.children === c.children && !Jr.current) {
                r = _o(n2, r, o);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var b = p.dependencies;
                if (b !== null) {
                  d = p.child;
                  for (var x = b.firstContext; x !== null; ) {
                    if (x.context === u) {
                      if (p.tag === 1) {
                        x = Ro(-1, o & -o), x.tag = 2;
                        var T = p.updateQueue;
                        if (T !== null) {
                          T = T.shared;
                          var V = T.pending;
                          V === null ? x.next = x : (x.next = V.next, V.next = x), T.pending = x;
                        }
                      }
                      p.lanes |= o, x = p.alternate, x !== null && (x.lanes |= o), O1(p.return, o, r), b.lanes |= o;
                      break;
                    }
                    x = x.next;
                  }
                } else if (p.tag === 10)
                  d = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (d = p.return, d === null)
                    throw Error(ne(341));
                  d.lanes |= o, b = d.alternate, b !== null && (b.lanes |= o), O1(d, o, r), d = p.sibling;
                } else
                  d = p.child;
                if (d !== null)
                  d.return = p;
                else
                  for (d = p; d !== null; ) {
                    if (d === r) {
                      d = null;
                      break;
                    }
                    if (p = d.sibling, p !== null) {
                      p.return = d.return, d = p;
                      break;
                    }
                    d = d.return;
                  }
                p = d;
              }
          Ir(n2, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, rc(r, o), c = Ha(c), u = u(c), r.flags |= 1, Ir(n2, r, u, o), r.child;
      case 14:
        return u = r.type, c = pi(u, r.pendingProps), c = pi(u.type, c), pT(n2, r, u, c, o);
      case 15:
        return t_(n2, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), wm(n2, r), r.tag = 1, Gr(u) ? (n2 = true, $m(r)) : n2 = false, rc(r, o), Ok(r, u, c), L1(r, u, c, o), $1(null, r, u, true, n2, o);
      case 19:
        return o_(n2, r, o);
      case 22:
        return n_(n2, r, o);
    }
    throw Error(ne(156, r.tag));
  };
  function x_(n2, r) {
    return XT(n2, r);
  }
  function I3(n2, r, o, u) {
    this.tag = n2, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n2, r, o, u) {
    return new I3(n2, r, o, u);
  }
  function Lb(n2) {
    return n2 = n2.prototype, !(!n2 || !n2.isReactComponent);
  }
  function $3(n2) {
    if (typeof n2 == "function")
      return Lb(n2) ? 1 : 0;
    if (n2 != null) {
      if (n2 = n2.$$typeof, n2 === q1)
        return 11;
      if (n2 === K1)
        return 14;
    }
    return 2;
  }
  function _l(n2, r) {
    var o = n2.alternate;
    return o === null ? (o = ja(n2.tag, r, n2.key, n2.mode), o.elementType = n2.elementType, o.type = n2.type, o.stateNode = n2.stateNode, o.alternate = n2, n2.alternate = o) : (o.pendingProps = r, o.type = n2.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n2.flags & 14680064, o.childLanes = n2.childLanes, o.lanes = n2.lanes, o.child = n2.child, o.memoizedProps = n2.memoizedProps, o.memoizedState = n2.memoizedState, o.updateQueue = n2.updateQueue, r = n2.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n2.sibling, o.index = n2.index, o.ref = n2.ref, o;
  }
  function Cm(n2, r, o, u, c, p) {
    var d = 2;
    if (u = n2, typeof n2 == "function")
      Lb(n2) && (d = 1);
    else if (typeof n2 == "string")
      d = 5;
    else
      e:
        switch (n2) {
          case Fs:
            return ku(o.children, c, p, r);
          case G1:
            d = 8, c |= 8;
            break;
          case n1:
            return n2 = ja(12, o, r, c | 2), n2.elementType = n1, n2.lanes = p, n2;
          case r1:
            return n2 = ja(13, o, r, c), n2.elementType = r1, n2.lanes = p, n2;
          case a1:
            return n2 = ja(19, o, r, c), n2.elementType = a1, n2.lanes = p, n2;
          case NT:
            return ih(o, c, p, r);
          default:
            if (typeof n2 == "object" && n2 !== null)
              switch (n2.$$typeof) {
                case _T:
                  d = 10;
                  break e;
                case OT:
                  d = 9;
                  break e;
                case q1:
                  d = 11;
                  break e;
                case K1:
                  d = 14;
                  break e;
                case hl:
                  d = 16, u = null;
                  break e;
              }
            throw Error(ne(130, n2 == null ? n2 : typeof n2, ""));
        }
    return r = ja(d, o, r, c), r.elementType = n2, r.type = u, r.lanes = p, r;
  }
  function ku(n2, r, o, u) {
    return n2 = ja(7, n2, u, r), n2.lanes = o, n2;
  }
  function ih(n2, r, o, u) {
    return n2 = ja(22, n2, u, r), n2.elementType = NT, n2.lanes = o, n2.stateNode = { isHidden: false }, n2;
  }
  function ZS(n2, r, o) {
    return n2 = ja(6, n2, null, r), n2.lanes = o, n2;
  }
  function e1(n2, r, o) {
    return r = ja(4, n2.children !== null ? n2.children : [], n2.key, r), r.lanes = o, r.stateNode = { containerInfo: n2.containerInfo, pendingChildren: null, implementation: n2.implementation }, r;
  }
  function M3(n2, r, o, u, c) {
    this.tag = r, this.containerInfo = n2, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = AS(0), this.expirationTimes = AS(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = AS(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ub(n2, r, o, u, c, p, d, b, x) {
    return n2 = new M3(n2, r, o, b, x), r === 1 ? (r = 1, p === true && (r |= 8)) : r = 0, p = ja(3, null, null, r), n2.current = p, p.stateNode = n2, p.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hb(p), n2;
  }
  function A3(n2, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Hs, key: u == null ? null : "" + u, children: n2, containerInfo: r, implementation: o };
  }
  function D_(n2) {
    if (!n2)
      return Nl;
    n2 = n2._reactInternals;
    e: {
      if ($u(n2) !== n2 || n2.tag !== 1)
        throw Error(ne(170));
      var r = n2;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Gr(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(ne(171));
    }
    if (n2.tag === 1) {
      var o = n2.type;
      if (Gr(o))
        return xk(n2, o, r);
    }
    return r;
  }
  function C_(n2, r, o, u, c, p, d, b, x) {
    return n2 = Ub(o, u, true, n2, c, p, d, b, x), n2.context = D_(null), o = n2.current, u = $r(), c = kl(o), p = Ro(u, c), p.callback = r ?? null, El(o, p, c), n2.current.lanes = c, $d(n2, c, u), qr(n2, u), n2;
  }
  function oh(n2, r, o, u) {
    var c = r.current, p = $r(), d = kl(c);
    return o = D_(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ro(p, d), r.payload = { element: n2 }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n2 = El(c, r, d), n2 !== null && (yi(n2, c, d, p), gm(n2, c, d)), d;
  }
  function Xm(n2) {
    if (n2 = n2.current, !n2.child)
      return null;
    switch (n2.child.tag) {
      case 5:
        return n2.child.stateNode;
      default:
        return n2.child.stateNode;
    }
  }
  function RT(n2, r) {
    if (n2 = n2.memoizedState, n2 !== null && n2.dehydrated !== null) {
      var o = n2.retryLane;
      n2.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Ib(n2, r) {
    RT(n2, r), (n2 = n2.alternate) && RT(n2, r);
  }
  function z3() {
    return null;
  }
  var R_ = typeof reportError == "function" ? reportError : function(n2) {
    console.error(n2);
  };
  function $b(n2) {
    this._internalRoot = n2;
  }
  lh.prototype.render = $b.prototype.render = function(n2) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(ne(409));
    oh(n2, r, null, null);
  };
  lh.prototype.unmount = $b.prototype.unmount = function() {
    var n2 = this._internalRoot;
    if (n2 !== null) {
      this._internalRoot = null;
      var r = n2.containerInfo;
      Uu(function() {
        oh(null, n2, null, null);
      }), r[To] = null;
    }
  };
  function lh(n2) {
    this._internalRoot = n2;
  }
  lh.prototype.unstable_scheduleHydration = function(n2) {
    if (n2) {
      var r = tk();
      n2 = { blockedOn: null, target: n2, priority: r };
      for (var o = 0; o < gl.length && r !== 0 && r < gl[o].priority; o++)
        ;
      gl.splice(o, 0, n2), o === 0 && rk(n2);
    }
  };
  function Mb(n2) {
    return !(!n2 || n2.nodeType !== 1 && n2.nodeType !== 9 && n2.nodeType !== 11);
  }
  function uh(n2) {
    return !(!n2 || n2.nodeType !== 1 && n2.nodeType !== 9 && n2.nodeType !== 11 && (n2.nodeType !== 8 || n2.nodeValue !== " react-mount-point-unstable "));
  }
  function ET() {
  }
  function j3(n2, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var T = Xm(d);
          p.call(T);
        };
      }
      var d = C_(r, u, n2, 0, null, false, false, "", ET);
      return n2._reactRootContainer = d, n2[To] = d.current, Ed(n2.nodeType === 8 ? n2.parentNode : n2), Uu(), d;
    }
    for (; c = n2.lastChild; )
      n2.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var T = Xm(x);
        b.call(T);
      };
    }
    var x = Ub(n2, 0, false, null, null, false, false, "", ET);
    return n2._reactRootContainer = x, n2[To] = x.current, Ed(n2.nodeType === 8 ? n2.parentNode : n2), Uu(function() {
      oh(r, x, o, u);
    }), x;
  }
  function sh(n2, r, o, u, c) {
    var p = o._reactRootContainer;
    if (p) {
      var d = p;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var x = Xm(d);
          b.call(x);
        };
      }
      oh(r, d, n2, c);
    } else
      d = j3(o, r, n2, c, u);
    return Xm(d);
  }
  ZT = function(n2) {
    switch (n2.tag) {
      case 3:
        var r = n2.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ld(r.pendingLanes);
          o !== 0 && (tb(r, o | 1), qr(r, cn()), !(St & 6) && (fc = cn() + 500, Il()));
        }
        break;
      case 13:
        Uu(function() {
          var u = ko(n2, 1);
          if (u !== null) {
            var c = $r();
            yi(u, n2, 1, c);
          }
        }), Ib(n2, 1);
    }
  };
  nb = function(n2) {
    if (n2.tag === 13) {
      var r = ko(n2, 134217728);
      if (r !== null) {
        var o = $r();
        yi(r, n2, 134217728, o);
      }
      Ib(n2, 134217728);
    }
  };
  ek = function(n2) {
    if (n2.tag === 13) {
      var r = kl(n2), o = ko(n2, r);
      if (o !== null) {
        var u = $r();
        yi(o, n2, r, u);
      }
      Ib(n2, r);
    }
  };
  tk = function() {
    return _t;
  };
  nk = function(n2, r) {
    var o = _t;
    try {
      return _t = n2, r();
    } finally {
      _t = o;
    }
  };
  v1 = function(n2, r, o) {
    switch (r) {
      case "input":
        if (l1(n2, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n2; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n2 && u.form === n2.form) {
              var c = Zm(u);
              if (!c)
                throw Error(ne(90));
              UT(u), l1(u, c);
            }
          }
        }
        break;
      case "textarea":
        $T(n2, o);
        break;
      case "select":
        r = o.value, r != null && Zs(n2, !!o.multiple, r, false);
    }
  };
  FT = _b;
  VT = Uu;
  var P3 = { usingClientEntryPoint: false, Events: [Ad, Ws, Zm, PT, HT, _b] }, rd = { findFiberByHostInstance: Cu, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, H3 = { bundleType: rd.bundleType, version: rd.version, rendererPackageName: rd.rendererPackageName, rendererConfig: rd.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Oo.ReactCurrentDispatcher, findHostInstanceByFiber: function(n2) {
    return n2 = WT(n2), n2 === null ? null : n2.stateNode;
  }, findFiberByHostInstance: rd.findFiberByHostInstance || z3, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (ad = __REACT_DEVTOOLS_GLOBAL_HOOK__, !ad.isDisabled && ad.supportsFiber))
    try {
      Jm = ad.inject(H3), Qi = ad;
    } catch {
    }
  var ad;
  wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P3;
  wa.createPortal = function(n2, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mb(r))
      throw Error(ne(200));
    return A3(n2, r, null, o);
  };
  wa.createRoot = function(n2, r) {
    if (!Mb(n2))
      throw Error(ne(299));
    var o = false, u = "", c = R_;
    return r != null && (r.unstable_strictMode === true && (o = true), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Ub(n2, 1, false, null, null, o, false, u, c), n2[To] = r.current, Ed(n2.nodeType === 8 ? n2.parentNode : n2), new $b(r);
  };
  wa.findDOMNode = function(n2) {
    if (n2 == null)
      return null;
    if (n2.nodeType === 1)
      return n2;
    var r = n2._reactInternals;
    if (r === void 0)
      throw typeof n2.render == "function" ? Error(ne(188)) : (n2 = Object.keys(n2).join(","), Error(ne(268, n2)));
    return n2 = WT(r), n2 = n2 === null ? null : n2.stateNode, n2;
  };
  wa.flushSync = function(n2) {
    return Uu(n2);
  };
  wa.hydrate = function(n2, r, o) {
    if (!uh(r))
      throw Error(ne(200));
    return sh(null, n2, r, true, o);
  };
  wa.hydrateRoot = function(n2, r, o) {
    if (!Mb(n2))
      throw Error(ne(405));
    var u = o != null && o.hydratedSources || null, c = false, p = "", d = R_;
    if (o != null && (o.unstable_strictMode === true && (c = true), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (d = o.onRecoverableError)), r = C_(r, null, n2, 1, o ?? null, c, false, p, d), n2[To] = r.current, Ed(n2), u)
      for (n2 = 0; n2 < u.length; n2++)
        o = u[n2], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(o, c);
    return new lh(r);
  };
  wa.render = function(n2, r, o) {
    if (!uh(r))
      throw Error(ne(200));
    return sh(null, n2, r, false, o);
  };
  wa.unmountComponentAtNode = function(n2) {
    if (!uh(n2))
      throw Error(ne(40));
    return n2._reactRootContainer ? (Uu(function() {
      sh(null, null, n2, false, function() {
        n2._reactRootContainer = null, n2[To] = null;
      });
    }), true) : false;
  };
  wa.unstable_batchedUpdates = _b;
  wa.unstable_renderSubtreeIntoContainer = function(n2, r, o, u) {
    if (!uh(o))
      throw Error(ne(200));
    if (n2 == null || n2._reactInternals === void 0)
      throw Error(ne(38));
    return sh(n2, r, o, false, u);
  };
  wa.version = "18.2.0-next-9e3b772b8-20220608";
});
var T_ = m((xa) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n2 = Ur(), r = LS(), o = n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, u = false;
    function c(e) {
      u = e;
    }
    function p(e) {
      if (!u) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i3 = 1; i3 < t; i3++)
          a[i3 - 1] = arguments[i3];
        b("warn", e, a);
      }
    }
    function d(e) {
      if (!u) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i3 = 1; i3 < t; i3++)
          a[i3 - 1] = arguments[i3];
        b("error", e, a);
      }
    }
    function b(e, t, a) {
      {
        var i3 = o.ReactDebugCurrentFrame, l3 = i3.getStackAddendum();
        l3 !== "" && (t += "%s", a = a.concat([l3]));
        var s = a.map(function(f3) {
          return String(f3);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var x = 0, T = 1, V = 2, U = 3, j2 = 4, H = 5, J = 6, ie = 7, Ge = 8, N = 9, C = 10, k2 = 11, Q = 12, X = 13, re = 14, ee = 15, he = 16, Me = 17, Re = 18, dt = 19, yt = 21, Te = 22, bt = 23, be = 24, Lt = 25, Pe = true, at = false, bn = false, Zt = false, M = false, q = true, Le = false, Qe = false, We = true, ct = true, ft = true, et = /* @__PURE__ */ new Set(), Be = {}, Ot = {};
    function $n(e, t) {
      br(e, t), br(e + "Capture", t);
    }
    function br(e, t) {
      Be[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Be[e] = t;
      {
        var a = e.toLowerCase();
        Ot[a] = e, e === "onDoubleClick" && (Ot.ondblclick = e);
      }
      for (var i3 = 0; i3 < t.length; i3++)
        et.add(t[i3]);
    }
    var en = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wn = Object.prototype.hasOwnProperty;
    function Bt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function dn(e) {
      try {
        return tn(e), false;
      } catch {
        return true;
      }
    }
    function tn(e) {
      return "" + e;
    }
    function nn(e, t) {
      if (dn(e))
        return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bt(e)), tn(e);
    }
    function Mn(e) {
      if (dn(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bt(e)), tn(e);
    }
    function Yn(e, t) {
      if (dn(e))
        return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bt(e)), tn(e);
    }
    function zr(e, t) {
      if (dn(e))
        return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bt(e)), tn(e);
    }
    function wr(e) {
      if (dn(e))
        return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bt(e)), tn(e);
    }
    function xn(e) {
      if (dn(e))
        return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bt(e)), tn(e);
    }
    var xr = 0, Dn = 1, Dr = 2, Xt = 3, jr = 4, Zr = 5, Va = 6, oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ae = new RegExp("^[" + oe + "][" + xe + "]*$"), pt = {}, vt = {};
    function on(e) {
      return wn.call(vt, e) ? true : wn.call(pt, e) ? false : Ae.test(e) ? (vt[e] = true, true) : (pt[e] = true, d("Invalid attribute name: `%s`", e), false);
    }
    function Qt(e, t, a) {
      return t !== null ? t.type === xr : a ? false : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ir(e, t, a, i3) {
      if (a !== null && a.type === xr)
        return false;
      switch (typeof t) {
        case "function":
        case "symbol":
          return true;
        case "boolean": {
          if (i3)
            return false;
          if (a !== null)
            return !a.acceptsBooleans;
          var l3 = e.toLowerCase().slice(0, 5);
          return l3 !== "data-" && l3 !== "aria-";
        }
        default:
          return false;
      }
    }
    function Dt(e, t, a, i3) {
      if (t === null || typeof t > "u" || ir(e, t, a, i3))
        return true;
      if (i3)
        return false;
      if (a !== null)
        switch (a.type) {
          case Xt:
            return !t;
          case jr:
            return t === false;
          case Zr:
            return isNaN(t);
          case Va:
            return isNaN(t) || t < 1;
        }
      return false;
    }
    function Qn(e) {
      return Rt.hasOwnProperty(e) ? Rt[e] : null;
    }
    function Ct(e, t, a, i3, l3, s, f3) {
      this.acceptsBooleans = t === Dr || t === Xt || t === jr, this.attributeName = i3, this.attributeNamespace = l3, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f3;
    }
    var Rt = {}, Da = ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"];
    Da.forEach(function(e) {
      Rt[e] = new Ct(e, xr, false, e, null, false, false);
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Rt[t] = new Ct(t, Dn, false, a, null, false, false);
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Rt[e] = new Ct(e, Dr, false, e.toLowerCase(), null, false, false);
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Rt[e] = new Ct(e, Dr, false, e, null, false, false);
    }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(function(e) {
      Rt[e] = new Ct(e, Xt, false, e.toLowerCase(), null, false, false);
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      Rt[e] = new Ct(e, Xt, true, e, null, false, false);
    }), ["capture", "download"].forEach(function(e) {
      Rt[e] = new Ct(e, jr, false, e, null, false, false);
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
      Rt[e] = new Ct(e, Va, false, e, null, false, false);
    }), ["rowSpan", "start"].forEach(function(e) {
      Rt[e] = new Ct(e, Zr, false, e.toLowerCase(), null, false, false);
    });
    var ea = /[\-\:]([a-z])/g, Bi = function(e) {
      return e[1].toUpperCase();
    };
    ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function(e) {
      var t = e.replace(ea, Bi);
      Rt[t] = new Ct(t, Dn, false, e, null, false, false);
    }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function(e) {
      var t = e.replace(ea, Bi);
      Rt[t] = new Ct(t, Dn, false, e, "http://www.w3.org/1999/xlink", false, false);
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var t = e.replace(ea, Bi);
      Rt[t] = new Ct(t, Dn, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Rt[e] = new Ct(e, Dn, false, e.toLowerCase(), null, false, false);
    });
    var No = "xlinkHref";
    Rt[No] = new Ct("xlinkHref", Dn, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e) {
      Rt[e] = new Ct(e, Dn, false, e.toLowerCase(), null, true, true);
    });
    var $l = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ta = false;
    function Ya(e) {
      !ta && $l.test(e) && (ta = true, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ca(e, t, a, i3) {
      if (i3.mustUseProperty) {
        var l3 = i3.propertyName;
        return e[l3];
      } else {
        nn(a, t), i3.sanitizeURL && Ya("" + a);
        var s = i3.attributeName, f3 = null;
        if (i3.type === jr) {
          if (e.hasAttribute(s)) {
            var m3 = e.getAttribute(s);
            return m3 === "" ? true : Dt(t, a, i3, false) ? m3 : m3 === "" + a ? a : m3;
          }
        } else if (e.hasAttribute(s)) {
          if (Dt(t, a, i3, false))
            return e.getAttribute(s);
          if (i3.type === Xt)
            return a;
          f3 = e.getAttribute(s);
        }
        return Dt(t, a, i3, false) ? f3 === null ? a : f3 : f3 === "" + a ? a : f3;
      }
    }
    function Si(e, t, a, i3) {
      {
        if (!on(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l3 = e.getAttribute(t);
        return nn(a, t), l3 === "" + a ? a : l3;
      }
    }
    function Qa(e, t, a, i3) {
      var l3 = Qn(t);
      if (!Qt(t, l3, i3)) {
        if (Dt(t, a, l3, i3) && (a = null), i3 || l3 === null) {
          if (on(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (nn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f3 = l3.mustUseProperty;
        if (f3) {
          var m3 = l3.propertyName;
          if (a === null) {
            var h3 = l3.type;
            e[m3] = h3 === Xt ? false : "";
          } else
            e[m3] = a;
          return;
        }
        var S = l3.attributeName, w = l3.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var O = l3.type, _;
          O === Xt || O === jr && a === true ? _ = "" : (nn(a, S), _ = "" + a, l3.sanitizeURL && Ya(_.toString())), w ? e.setAttributeNS(w, S, _) : e.setAttribute(S, _);
        }
      }
    }
    var Ra = Symbol.for("react.element"), na = Symbol.for("react.portal"), ra = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), ae = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), He = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ln = Symbol.for("react.scope"), Ut = Symbol.for("react.debug_trace_mode"), It = Symbol.for("react.offscreen"), An = Symbol.for("react.legacy_hidden"), Ea = Symbol.for("react.cache"), Lo = Symbol.for("react.tracing_marker"), or = Symbol.iterator, hc = "@@iterator";
    function Wa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = or && e[or] || e[hc];
      return typeof t == "function" ? t : null;
    }
    var Fe = Object.assign, wi = 0, Ba, Uo, Io, $o, Mo, Ao, zo;
    function Ml() {
    }
    Ml.__reactDisabledLog = true;
    function zu() {
      {
        if (wi === 0) {
          Ba = console.log, Uo = console.info, Io = console.warn, $o = console.error, Mo = console.group, Ao = console.groupCollapsed, zo = console.groupEnd;
          var e = { configurable: true, enumerable: true, value: Ml, writable: true };
          Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
        }
        wi++;
      }
    }
    function Al() {
      {
        if (wi--, wi === 0) {
          var e = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, { log: Fe({}, e, { value: Ba }), info: Fe({}, e, { value: Uo }), warn: Fe({}, e, { value: Io }), error: Fe({}, e, { value: $o }), group: Fe({}, e, { value: Mo }), groupCollapsed: Fe({}, e, { value: Ao }), groupEnd: Fe({}, e, { value: zo }) });
        }
        wi < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xi = o.ReactCurrentDispatcher, Ta;
    function lr(e, t, a) {
      {
        if (Ta === void 0)
          try {
            throw Error();
          } catch (l3) {
            var i3 = l3.stack.trim().match(/\n( *(at )?)/);
            Ta = i3 && i3[1] || "";
          }
        return `
` + Ta + e;
      }
    }
    var aa = false, xi;
    {
      var Ji = typeof WeakMap == "function" ? WeakMap : Map;
      xi = new Ji();
    }
    function zl(e, t) {
      if (!e || aa)
        return "";
      {
        var a = xi.get(e);
        if (a !== void 0)
          return a;
      }
      var i3;
      aa = true;
      var l3 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xi.current, Xi.current = null, zu();
      try {
        if (t) {
          var f3 = function() {
            throw Error();
          };
          if (Object.defineProperty(f3.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f3, []);
            } catch (z) {
              i3 = z;
            }
            Reflect.construct(e, [], f3);
          } else {
            try {
              f3.call();
            } catch (z) {
              i3 = z;
            }
            e.call(f3.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i3 = z;
          }
          e();
        }
      } catch (z) {
        if (z && i3 && typeof z.stack == "string") {
          for (var m3 = z.stack.split(`
`), h3 = i3.stack.split(`
`), S = m3.length - 1, w = h3.length - 1; S >= 1 && w >= 0 && m3[S] !== h3[w]; )
            w--;
          for (; S >= 1 && w >= 0; S--, w--)
            if (m3[S] !== h3[w]) {
              if (S !== 1 || w !== 1)
                do
                  if (S--, w--, w < 0 || m3[S] !== h3[w]) {
                    var O = `
` + m3[S].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && xi.set(e, O), O;
                  }
                while (S >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        aa = false, Xi.current = s, Al(), Error.prepareStackTrace = l3;
      }
      var _ = e ? e.displayName || e.name : "", P = _ ? lr(_) : "";
      return typeof e == "function" && xi.set(e, P), P;
    }
    function ju(e, t, a) {
      return zl(e, true);
    }
    function Di(e, t, a) {
      return zl(e, false);
    }
    function Pu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xa(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return zl(e, Pu(e));
      if (typeof e == "string")
        return lr(e);
      switch (e) {
        case Xe:
          return lr("Suspense");
        case it:
          return lr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ve:
            return Di(e.render);
          case He:
            return Xa(e.type, t, a);
          case Ce: {
            var i3 = e, l3 = i3._payload, s = i3._init;
            try {
              return Xa(s(l3), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Gi(e) {
      var t = e._debugOwner ? e._debugOwner.type : null, a = e._debugSource;
      switch (e.tag) {
        case H:
          return lr(e.type);
        case he:
          return lr("Lazy");
        case X:
          return lr("Suspense");
        case dt:
          return lr("SuspenseList");
        case x:
        case V:
        case ee:
          return Di(e.type);
        case k2:
          return Di(e.type.render);
        case T:
          return ju(e.type);
        default:
          return "";
      }
    }
    function jl(e) {
      try {
        var t = "", a = e;
        do
          t += Gi(a), a = a.return;
        while (a);
        return t;
      } catch (i3) {
        return `
Error generating stack: ` + i3.message + `
` + i3.stack;
      }
    }
    function ia(e, t, a) {
      var i3 = e.displayName;
      if (i3)
        return i3;
      var l3 = t.displayName || t.name || "";
      return l3 !== "" ? a + "(" + l3 + ")" : a;
    }
    function jo(e) {
      return e.displayName || "Context";
    }
    function ot(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ra:
          return "Fragment";
        case na:
          return "Portal";
        case E:
          return "Profiler";
        case bi:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case it:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            var t = e;
            return jo(t) + ".Consumer";
          case W:
            var a = e;
            return jo(a._context) + ".Provider";
          case ve:
            return ia(e, e.render, "ForwardRef");
          case He:
            var i3 = e.displayName || null;
            return i3 !== null ? i3 : ot(e.type) || "Memo";
          case Ce: {
            var l3 = e, s = l3._payload, f3 = l3._init;
            try {
              return ot(f3(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Pl(e, t, a) {
      var i3 = t.displayName || t.name || "";
      return e.displayName || (i3 !== "" ? a + "(" + i3 + ")" : a);
    }
    function Hl(e) {
      return e.displayName || "Context";
    }
    function ze(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case be:
          return "Cache";
        case N:
          var i3 = a;
          return Hl(i3) + ".Consumer";
        case C:
          var l3 = a;
          return Hl(l3._context) + ".Provider";
        case Re:
          return "DehydratedFragment";
        case k2:
          return Pl(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case H:
          return a;
        case j2:
          return "Portal";
        case U:
          return "Root";
        case J:
          return "Text";
        case he:
          return ot(a);
        case Ge:
          return a === bi ? "StrictMode" : "Mode";
        case Te:
          return "Offscreen";
        case Q:
          return "Profiler";
        case yt:
          return "Scope";
        case X:
          return "Suspense";
        case dt:
          return "SuspenseList";
        case Lt:
          return "TracingMarker";
        case T:
        case x:
        case Me:
        case V:
        case re:
        case ee:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Hu = o.ReactDebugCurrentFrame, Cn = null, Ci = false;
    function Ja() {
      {
        if (Cn === null)
          return null;
        var e = Cn._debugOwner;
        if (e !== null && typeof e < "u")
          return ze(e);
      }
      return null;
    }
    function Fu() {
      return Cn === null ? "" : jl(Cn);
    }
    function un() {
      Hu.getCurrentStack = null, Cn = null, Ci = false;
    }
    function zt(e) {
      Hu.getCurrentStack = e === null ? null : Fu, Cn = e, Ci = false;
    }
    function Vu() {
      return Cn;
    }
    function Cr(e) {
      Ci = e;
    }
    function ur(e) {
      return "" + e;
    }
    function oa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return xn(e), e;
        default:
          return "";
      }
    }
    var Po = { button: true, checkbox: true, image: true, hidden: true, radio: true, reset: true, submit: true };
    function Ho(e, t) {
      Po[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Pr(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fl(e) {
      return e._valueTracker;
    }
    function Ri(e) {
      e._valueTracker = null;
    }
    function qi(e) {
      var t = "";
      return e && (Pr(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Vl(e) {
      var t = Pr(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      xn(e[t]);
      var i3 = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l3 = a.get, s = a.set;
        Object.defineProperty(e, t, { configurable: true, get: function() {
          return l3.call(this);
        }, set: function(m3) {
          xn(m3), i3 = "" + m3, s.call(this, m3);
        } }), Object.defineProperty(e, t, { enumerable: a.enumerable });
        var f3 = { getValue: function() {
          return i3;
        }, setValue: function(m3) {
          xn(m3), i3 = "" + m3;
        }, stopTracking: function() {
          Ri(e), delete e[t];
        } };
        return f3;
      }
    }
    function la(e) {
      Fl(e) || (e._valueTracker = Vl(e));
    }
    function Ei(e) {
      if (!e)
        return false;
      var t = Fl(e);
      if (!t)
        return true;
      var a = t.getValue(), i3 = qi(e);
      return i3 !== a ? (t.setValue(i3), true) : false;
    }
    function Ti(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Fo = false, Yu = false, Qu = false, y = false;
    function R(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function v(e, t) {
      var a = e, i3 = t.checked, l3 = Fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i3 ?? a._wrapperState.initialChecked });
      return l3;
    }
    function g2(e, t) {
      Ho("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Yu && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ja() || "A component", t.type), Yu = true), t.value !== void 0 && t.defaultValue !== void 0 && !Fo && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ja() || "A component", t.type), Fo = true);
      var a = e, i3 = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = { initialChecked: t.checked != null ? t.checked : t.defaultChecked, initialValue: oa(t.value != null ? t.value : i3), controlled: R(t) };
    }
    function D(e, t) {
      var a = e, i3 = t.checked;
      i3 != null && Qa(a, "checked", i3, false);
    }
    function L(e, t) {
      var a = e;
      {
        var i3 = R(t);
        !a._wrapperState.controlled && i3 && !y && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), y = true), a._wrapperState.controlled && !i3 && !Qu && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Qu = true);
      }
      D(e, t);
      var l3 = oa(t.value), s = t.type;
      if (l3 != null)
        s === "number" ? (l3 === 0 && a.value === "" || a.value != l3) && (a.value = ur(l3)) : a.value !== ur(l3) && (a.value = ur(l3));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? se(a, t.type, l3) : t.hasOwnProperty("defaultValue") && se(a, t.type, oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function A(e, t, a) {
      var i3 = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l3 = t.type, s = l3 === "submit" || l3 === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f3 = ur(i3._wrapperState.initialValue);
        a || f3 !== i3.value && (i3.value = f3), i3.defaultValue = f3;
      }
      var m3 = i3.name;
      m3 !== "" && (i3.name = ""), i3.defaultChecked = !i3.defaultChecked, i3.defaultChecked = !!i3._wrapperState.initialChecked, m3 !== "" && (i3.name = m3);
    }
    function te(e, t) {
      var a = e;
      L(a, t), K(a, t);
    }
    function K(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i3 = e; i3.parentNode; )
          i3 = i3.parentNode;
        nn(a, "name");
        for (var l3 = i3.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l3.length; s++) {
          var f3 = l3[s];
          if (!(f3 === e || f3.form !== e.form)) {
            var m3 = Tp(f3);
            if (!m3)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f3), L(f3, m3);
          }
        }
      }
    }
    function se(e, t, a) {
      (t !== "number" || Ti(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ur(e._wrapperState.initialValue) : e.defaultValue !== ur(a) && (e.defaultValue = ur(a)));
    }
    var we = false, Ee = false, Oe = false;
    function Ue(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? n2.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ee || (Ee = true, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Oe || (Oe = true, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !we && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), we = true);
    }
    function Ve(e, t) {
      t.value != null && e.setAttribute("value", ur(oa(t.value)));
    }
    var $t = Array.isArray;
    function tt(e) {
      return $t(e);
    }
    var Ga;
    Ga = false;
    function Vo() {
      var e = Ja();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Yo = ["value", "defaultValue"];
    function yc(e) {
      {
        Ho("select", e);
        for (var t = 0; t < Yo.length; t++) {
          var a = Yo[t];
          if (e[a] != null) {
            var i3 = tt(e[a]);
            e.multiple && !i3 ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Vo()) : !e.multiple && i3 && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Vo());
          }
        }
      }
    }
    function ka(e, t, a, i3) {
      var l3 = e.options;
      if (t) {
        for (var s = a, f3 = {}, m3 = 0; m3 < s.length; m3++)
          f3["$" + s[m3]] = true;
        for (var h3 = 0; h3 < l3.length; h3++) {
          var S = f3.hasOwnProperty("$" + l3[h3].value);
          l3[h3].selected !== S && (l3[h3].selected = S), S && i3 && (l3[h3].defaultSelected = true);
        }
      } else {
        for (var w = ur(oa(a)), O = null, _ = 0; _ < l3.length; _++) {
          if (l3[_].value === w) {
            l3[_].selected = true, i3 && (l3[_].defaultSelected = true);
            return;
          }
          O === null && !l3[_].disabled && (O = l3[_]);
        }
        O !== null && (O.selected = true);
      }
    }
    function Yl(e, t) {
      return Fe({}, t, { value: void 0 });
    }
    function gc(e, t) {
      var a = e;
      yc(t), a._wrapperState = { wasMultiple: !!t.multiple }, t.value !== void 0 && t.defaultValue !== void 0 && !Ga && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ga = true);
    }
    function vh(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i3 = t.value;
      i3 != null ? ka(a, !!t.multiple, i3, false) : t.defaultValue != null && ka(a, !!t.multiple, t.defaultValue, true);
    }
    function oO(e, t) {
      var a = e, i3 = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l3 = t.value;
      l3 != null ? ka(a, !!t.multiple, l3, false) : i3 !== !!t.multiple && (t.defaultValue != null ? ka(a, !!t.multiple, t.defaultValue, true) : ka(a, !!t.multiple, t.multiple ? [] : "", false));
    }
    function lO(e, t) {
      var a = e, i3 = t.value;
      i3 != null && ka(a, !!t.multiple, i3, false);
    }
    var Qb = false;
    function mh(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i3 = Fe({}, t, { value: void 0, defaultValue: void 0, children: ur(a._wrapperState.initialValue) });
      return i3;
    }
    function Wb(e, t) {
      var a = e;
      Ho("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Qb && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ja() || "A component"), Qb = true);
      var i3 = t.value;
      if (i3 == null) {
        var l3 = t.children, s = t.defaultValue;
        if (l3 != null) {
          d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (tt(l3)) {
              if (l3.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l3 = l3[0];
            }
            s = l3;
          }
        }
        s == null && (s = ""), i3 = s;
      }
      a._wrapperState = { initialValue: oa(i3) };
    }
    function Bb(e, t) {
      var a = e, i3 = oa(t.value), l3 = oa(t.defaultValue);
      if (i3 != null) {
        var s = ur(i3);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l3 != null && (a.defaultValue = ur(l3));
    }
    function Xb(e, t) {
      var a = e, i3 = a.textContent;
      i3 === a._wrapperState.initialValue && i3 !== "" && i3 !== null && (a.value = i3);
    }
    function uO(e, t) {
      Bb(e, t);
    }
    var Ki = "http://www.w3.org/1999/xhtml", sO = "http://www.w3.org/1998/Math/MathML", hh = "http://www.w3.org/2000/svg";
    function yh(e) {
      switch (e) {
        case "svg":
          return hh;
        case "math":
          return sO;
        default:
          return Ki;
      }
    }
    function gh(e, t) {
      return e == null || e === Ki ? yh(t) : e === hh && t === "foreignObject" ? Ki : e;
    }
    var cO = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i3, l3) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i3, l3);
        });
      } : e;
    }, Fd, Jb = cO(function(e, t) {
      if (e.namespaceURI === hh && !("innerHTML" in e)) {
        Fd = Fd || document.createElement("div"), Fd.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Fd.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Hr = 1, Zi = 3, pn = 8, eo = 9, Sh = 11, Vd = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Zi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, fO = { animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"], background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"], backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"], borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"], fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"], gap: ["columnGap", "rowGap"], grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"], maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, Sc = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true };
    function dO(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var pO = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Sc).forEach(function(e) {
      pO.forEach(function(t) {
        Sc[dO(t, e)] = Sc[e];
      });
    });
    function bh(e, t, a) {
      var i3 = t == null || typeof t == "boolean" || t === "";
      return i3 ? "" : !a && typeof t == "number" && t !== 0 && !(Sc.hasOwnProperty(e) && Sc[e]) ? t + "px" : (zr(t, e), ("" + t).trim());
    }
    var vO = /([A-Z])/g, mO = /^ms-/;
    function hO(e) {
      return e.replace(vO, "-$1").toLowerCase().replace(mO, "-ms-");
    }
    var Gb = function() {
    };
    {
      var yO = /^(?:webkit|moz|o)[A-Z]/, gO = /^-ms-/, SO = /-(.)/g, qb = /;\s*$/, Wu = {}, wh = {}, Kb = false, Zb = false, bO = function(e) {
        return e.replace(SO, function(t, a) {
          return a.toUpperCase();
        });
      }, wO = function(e) {
        Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = true, d("Unsupported style property %s. Did you mean %s?", e, bO(e.replace(gO, "ms-"))));
      }, xO = function(e) {
        Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = true, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, DO = function(e, t) {
        wh.hasOwnProperty(t) && wh[t] || (wh[t] = true, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qb, "")));
      }, CO = function(e, t) {
        Kb || (Kb = true, d("`NaN` is an invalid value for the `%s` css style property.", e));
      }, RO = function(e, t) {
        Zb || (Zb = true, d("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gb = function(e, t) {
        e.indexOf("-") > -1 ? wO(e) : yO.test(e) ? xO(e) : qb.test(t) && DO(e, t), typeof t == "number" && (isNaN(t) ? CO(e, t) : isFinite(t) || RO(e, t));
      };
    }
    var EO = Gb;
    function TO(e) {
      {
        var t = "", a = "";
        for (var i3 in e)
          if (e.hasOwnProperty(i3)) {
            var l3 = e[i3];
            if (l3 != null) {
              var s = i3.indexOf("--") === 0;
              t += a + (s ? i3 : hO(i3)) + ":", t += bh(i3, l3, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ew(e, t) {
      var a = e.style;
      for (var i3 in t)
        if (t.hasOwnProperty(i3)) {
          var l3 = i3.indexOf("--") === 0;
          l3 || EO(i3, t[i3]);
          var s = bh(i3, t[i3], l3);
          i3 === "float" && (i3 = "cssFloat"), l3 ? a.setProperty(i3, s) : a[i3] = s;
        }
    }
    function kO(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function tw(e) {
      var t = {};
      for (var a in e)
        for (var i3 = fO[a] || [a], l3 = 0; l3 < i3.length; l3++)
          t[i3[l3]] = a;
      return t;
    }
    function _O(e, t) {
      {
        if (!t)
          return;
        var a = tw(e), i3 = tw(t), l3 = {};
        for (var s in a) {
          var f3 = a[s], m3 = i3[s];
          if (m3 && f3 !== m3) {
            var h3 = f3 + "," + m3;
            if (l3[h3])
              continue;
            l3[h3] = true, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", kO(e[f3]) ? "Removing" : "Updating", f3, m3);
          }
        }
      }
    }
    var OO = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true }, NO = Fe({ menuitem: true }, OO), LO = "__html";
    function xh(e, t) {
      if (t) {
        if (NO[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(LO in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ql(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Yd = { accept: "accept", acceptcharset: "acceptCharset", "accept-charset": "acceptCharset", accesskey: "accessKey", action: "action", allowfullscreen: "allowFullScreen", alt: "alt", as: "as", async: "async", autocapitalize: "autoCapitalize", autocomplete: "autoComplete", autocorrect: "autoCorrect", autofocus: "autoFocus", autoplay: "autoPlay", autosave: "autoSave", capture: "capture", cellpadding: "cellPadding", cellspacing: "cellSpacing", challenge: "challenge", charset: "charSet", checked: "checked", children: "children", cite: "cite", class: "className", classid: "classID", classname: "className", cols: "cols", colspan: "colSpan", content: "content", contenteditable: "contentEditable", contextmenu: "contextMenu", controls: "controls", controlslist: "controlsList", coords: "coords", crossorigin: "crossOrigin", dangerouslysetinnerhtml: "dangerouslySetInnerHTML", data: "data", datetime: "dateTime", default: "default", defaultchecked: "defaultChecked", defaultvalue: "defaultValue", defer: "defer", dir: "dir", disabled: "disabled", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback", download: "download", draggable: "draggable", enctype: "encType", enterkeyhint: "enterKeyHint", for: "htmlFor", form: "form", formmethod: "formMethod", formaction: "formAction", formenctype: "formEncType", formnovalidate: "formNoValidate", formtarget: "formTarget", frameborder: "frameBorder", headers: "headers", height: "height", hidden: "hidden", high: "high", href: "href", hreflang: "hrefLang", htmlfor: "htmlFor", httpequiv: "httpEquiv", "http-equiv": "httpEquiv", icon: "icon", id: "id", imagesizes: "imageSizes", imagesrcset: "imageSrcSet", innerhtml: "innerHTML", inputmode: "inputMode", integrity: "integrity", is: "is", itemid: "itemID", itemprop: "itemProp", itemref: "itemRef", itemscope: "itemScope", itemtype: "itemType", keyparams: "keyParams", keytype: "keyType", kind: "kind", label: "label", lang: "lang", list: "list", loop: "loop", low: "low", manifest: "manifest", marginwidth: "marginWidth", marginheight: "marginHeight", max: "max", maxlength: "maxLength", media: "media", mediagroup: "mediaGroup", method: "method", min: "min", minlength: "minLength", multiple: "multiple", muted: "muted", name: "name", nomodule: "noModule", nonce: "nonce", novalidate: "noValidate", open: "open", optimum: "optimum", pattern: "pattern", placeholder: "placeholder", playsinline: "playsInline", poster: "poster", preload: "preload", profile: "profile", radiogroup: "radioGroup", readonly: "readOnly", referrerpolicy: "referrerPolicy", rel: "rel", required: "required", reversed: "reversed", role: "role", rows: "rows", rowspan: "rowSpan", sandbox: "sandbox", scope: "scope", scoped: "scoped", scrolling: "scrolling", seamless: "seamless", selected: "selected", shape: "shape", size: "size", sizes: "sizes", span: "span", spellcheck: "spellCheck", src: "src", srcdoc: "srcDoc", srclang: "srcLang", srcset: "srcSet", start: "start", step: "step", style: "style", summary: "summary", tabindex: "tabIndex", target: "target", title: "title", type: "type", usemap: "useMap", value: "value", width: "width", wmode: "wmode", wrap: "wrap", about: "about", accentheight: "accentHeight", "accent-height": "accentHeight", accumulate: "accumulate", additive: "additive", alignmentbaseline: "alignmentBaseline", "alignment-baseline": "alignmentBaseline", allowreorder: "allowReorder", alphabetic: "alphabetic", amplitude: "amplitude", arabicform: "arabicForm", "arabic-form": "arabicForm", ascent: "ascent", attributename: "attributeName", attributetype: "attributeType", autoreverse: "autoReverse", azimuth: "azimuth", basefrequency: "baseFrequency", baselineshift: "baselineShift", "baseline-shift": "baselineShift", baseprofile: "baseProfile", bbox: "bbox", begin: "begin", bias: "bias", by: "by", calcmode: "calcMode", capheight: "capHeight", "cap-height": "capHeight", clip: "clip", clippath: "clipPath", "clip-path": "clipPath", clippathunits: "clipPathUnits", cliprule: "clipRule", "clip-rule": "clipRule", color: "color", colorinterpolation: "colorInterpolation", "color-interpolation": "colorInterpolation", colorinterpolationfilters: "colorInterpolationFilters", "color-interpolation-filters": "colorInterpolationFilters", colorprofile: "colorProfile", "color-profile": "colorProfile", colorrendering: "colorRendering", "color-rendering": "colorRendering", contentscripttype: "contentScriptType", contentstyletype: "contentStyleType", cursor: "cursor", cx: "cx", cy: "cy", d: "d", datatype: "datatype", decelerate: "decelerate", descent: "descent", diffuseconstant: "diffuseConstant", direction: "direction", display: "display", divisor: "divisor", dominantbaseline: "dominantBaseline", "dominant-baseline": "dominantBaseline", dur: "dur", dx: "dx", dy: "dy", edgemode: "edgeMode", elevation: "elevation", enablebackground: "enableBackground", "enable-background": "enableBackground", end: "end", exponent: "exponent", externalresourcesrequired: "externalResourcesRequired", fill: "fill", fillopacity: "fillOpacity", "fill-opacity": "fillOpacity", fillrule: "fillRule", "fill-rule": "fillRule", filter: "filter", filterres: "filterRes", filterunits: "filterUnits", floodopacity: "floodOpacity", "flood-opacity": "floodOpacity", floodcolor: "floodColor", "flood-color": "floodColor", focusable: "focusable", fontfamily: "fontFamily", "font-family": "fontFamily", fontsize: "fontSize", "font-size": "fontSize", fontsizeadjust: "fontSizeAdjust", "font-size-adjust": "fontSizeAdjust", fontstretch: "fontStretch", "font-stretch": "fontStretch", fontstyle: "fontStyle", "font-style": "fontStyle", fontvariant: "fontVariant", "font-variant": "fontVariant", fontweight: "fontWeight", "font-weight": "fontWeight", format: "format", from: "from", fx: "fx", fy: "fy", g1: "g1", g2: "g2", glyphname: "glyphName", "glyph-name": "glyphName", glyphorientationhorizontal: "glyphOrientationHorizontal", "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphorientationvertical: "glyphOrientationVertical", "glyph-orientation-vertical": "glyphOrientationVertical", glyphref: "glyphRef", gradienttransform: "gradientTransform", gradientunits: "gradientUnits", hanging: "hanging", horizadvx: "horizAdvX", "horiz-adv-x": "horizAdvX", horizoriginx: "horizOriginX", "horiz-origin-x": "horizOriginX", ideographic: "ideographic", imagerendering: "imageRendering", "image-rendering": "imageRendering", in2: "in2", in: "in", inlist: "inlist", intercept: "intercept", k1: "k1", k2: "k2", k3: "k3", k4: "k4", k: "k", kernelmatrix: "kernelMatrix", kernelunitlength: "kernelUnitLength", kerning: "kerning", keypoints: "keyPoints", keysplines: "keySplines", keytimes: "keyTimes", lengthadjust: "lengthAdjust", letterspacing: "letterSpacing", "letter-spacing": "letterSpacing", lightingcolor: "lightingColor", "lighting-color": "lightingColor", limitingconeangle: "limitingConeAngle", local: "local", markerend: "markerEnd", "marker-end": "markerEnd", markerheight: "markerHeight", markermid: "markerMid", "marker-mid": "markerMid", markerstart: "markerStart", "marker-start": "markerStart", markerunits: "markerUnits", markerwidth: "markerWidth", mask: "mask", maskcontentunits: "maskContentUnits", maskunits: "maskUnits", mathematical: "mathematical", mode: "mode", numoctaves: "numOctaves", offset: "offset", opacity: "opacity", operator: "operator", order: "order", orient: "orient", orientation: "orientation", origin: "origin", overflow: "overflow", overlineposition: "overlinePosition", "overline-position": "overlinePosition", overlinethickness: "overlineThickness", "overline-thickness": "overlineThickness", paintorder: "paintOrder", "paint-order": "paintOrder", panose1: "panose1", "panose-1": "panose1", pathlength: "pathLength", patterncontentunits: "patternContentUnits", patterntransform: "patternTransform", patternunits: "patternUnits", pointerevents: "pointerEvents", "pointer-events": "pointerEvents", points: "points", pointsatx: "pointsAtX", pointsaty: "pointsAtY", pointsatz: "pointsAtZ", prefix: "prefix", preservealpha: "preserveAlpha", preserveaspectratio: "preserveAspectRatio", primitiveunits: "primitiveUnits", property: "property", r: "r", radius: "radius", refx: "refX", refy: "refY", renderingintent: "renderingIntent", "rendering-intent": "renderingIntent", repeatcount: "repeatCount", repeatdur: "repeatDur", requiredextensions: "requiredExtensions", requiredfeatures: "requiredFeatures", resource: "resource", restart: "restart", result: "result", results: "results", rotate: "rotate", rx: "rx", ry: "ry", scale: "scale", security: "security", seed: "seed", shaperendering: "shapeRendering", "shape-rendering": "shapeRendering", slope: "slope", spacing: "spacing", specularconstant: "specularConstant", specularexponent: "specularExponent", speed: "speed", spreadmethod: "spreadMethod", startoffset: "startOffset", stddeviation: "stdDeviation", stemh: "stemh", stemv: "stemv", stitchtiles: "stitchTiles", stopcolor: "stopColor", "stop-color": "stopColor", stopopacity: "stopOpacity", "stop-opacity": "stopOpacity", strikethroughposition: "strikethroughPosition", "strikethrough-position": "strikethroughPosition", strikethroughthickness: "strikethroughThickness", "strikethrough-thickness": "strikethroughThickness", string: "string", stroke: "stroke", strokedasharray: "strokeDasharray", "stroke-dasharray": "strokeDasharray", strokedashoffset: "strokeDashoffset", "stroke-dashoffset": "strokeDashoffset", strokelinecap: "strokeLinecap", "stroke-linecap": "strokeLinecap", strokelinejoin: "strokeLinejoin", "stroke-linejoin": "strokeLinejoin", strokemiterlimit: "strokeMiterlimit", "stroke-miterlimit": "strokeMiterlimit", strokewidth: "strokeWidth", "stroke-width": "strokeWidth", strokeopacity: "strokeOpacity", "stroke-opacity": "strokeOpacity", suppresscontenteditablewarning: "suppressContentEditableWarning", suppresshydrationwarning: "suppressHydrationWarning", surfacescale: "surfaceScale", systemlanguage: "systemLanguage", tablevalues: "tableValues", targetx: "targetX", targety: "targetY", textanchor: "textAnchor", "text-anchor": "textAnchor", textdecoration: "textDecoration", "text-decoration": "textDecoration", textlength: "textLength", textrendering: "textRendering", "text-rendering": "textRendering", to: "to", transform: "transform", typeof: "typeof", u1: "u1", u2: "u2", underlineposition: "underlinePosition", "underline-position": "underlinePosition", underlinethickness: "underlineThickness", "underline-thickness": "underlineThickness", unicode: "unicode", unicodebidi: "unicodeBidi", "unicode-bidi": "unicodeBidi", unicoderange: "unicodeRange", "unicode-range": "unicodeRange", unitsperem: "unitsPerEm", "units-per-em": "unitsPerEm", unselectable: "unselectable", valphabetic: "vAlphabetic", "v-alphabetic": "vAlphabetic", values: "values", vectoreffect: "vectorEffect", "vector-effect": "vectorEffect", version: "version", vertadvy: "vertAdvY", "vert-adv-y": "vertAdvY", vertoriginx: "vertOriginX", "vert-origin-x": "vertOriginX", vertoriginy: "vertOriginY", "vert-origin-y": "vertOriginY", vhanging: "vHanging", "v-hanging": "vHanging", videographic: "vIdeographic", "v-ideographic": "vIdeographic", viewbox: "viewBox", viewtarget: "viewTarget", visibility: "visibility", vmathematical: "vMathematical", "v-mathematical": "vMathematical", vocab: "vocab", widths: "widths", wordspacing: "wordSpacing", "word-spacing": "wordSpacing", writingmode: "writingMode", "writing-mode": "writingMode", x1: "x1", x2: "x2", x: "x", xchannelselector: "xChannelSelector", xheight: "xHeight", "x-height": "xHeight", xlinkactuate: "xlinkActuate", "xlink:actuate": "xlinkActuate", xlinkarcrole: "xlinkArcrole", "xlink:arcrole": "xlinkArcrole", xlinkhref: "xlinkHref", "xlink:href": "xlinkHref", xlinkrole: "xlinkRole", "xlink:role": "xlinkRole", xlinkshow: "xlinkShow", "xlink:show": "xlinkShow", xlinktitle: "xlinkTitle", "xlink:title": "xlinkTitle", xlinktype: "xlinkType", "xlink:type": "xlinkType", xmlbase: "xmlBase", "xml:base": "xmlBase", xmllang: "xmlLang", "xml:lang": "xmlLang", xmlns: "xmlns", "xml:space": "xmlSpace", xmlnsxlink: "xmlnsXlink", "xmlns:xlink": "xmlnsXlink", xmlspace: "xmlSpace", y1: "y1", y2: "y2", y: "y", ychannelselector: "yChannelSelector", z: "z", zoomandpan: "zoomAndPan" }, nw = { "aria-current": 0, "aria-description": 0, "aria-details": 0, "aria-disabled": 0, "aria-hidden": 0, "aria-invalid": 0, "aria-keyshortcuts": 0, "aria-label": 0, "aria-roledescription": 0, "aria-autocomplete": 0, "aria-checked": 0, "aria-expanded": 0, "aria-haspopup": 0, "aria-level": 0, "aria-modal": 0, "aria-multiline": 0, "aria-multiselectable": 0, "aria-orientation": 0, "aria-placeholder": 0, "aria-pressed": 0, "aria-readonly": 0, "aria-required": 0, "aria-selected": 0, "aria-sort": 0, "aria-valuemax": 0, "aria-valuemin": 0, "aria-valuenow": 0, "aria-valuetext": 0, "aria-atomic": 0, "aria-busy": 0, "aria-live": 0, "aria-relevant": 0, "aria-dropeffect": 0, "aria-grabbed": 0, "aria-activedescendant": 0, "aria-colcount": 0, "aria-colindex": 0, "aria-colspan": 0, "aria-controls": 0, "aria-describedby": 0, "aria-errormessage": 0, "aria-flowto": 0, "aria-labelledby": 0, "aria-owns": 0, "aria-posinset": 0, "aria-rowcount": 0, "aria-rowindex": 0, "aria-rowspan": 0, "aria-setsize": 0 }, Bu = {}, UO = new RegExp("^(aria)-[" + xe + "]*$"), IO = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function $O(e, t) {
      {
        if (wn.call(Bu, t) && Bu[t])
          return true;
        if (IO.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i3 = nw.hasOwnProperty(a) ? a : null;
          if (i3 == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Bu[t] = true, true;
          if (t !== i3)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i3), Bu[t] = true, true;
        }
        if (UO.test(t)) {
          var l3 = t.toLowerCase(), s = nw.hasOwnProperty(l3) ? l3 : null;
          if (s == null)
            return Bu[t] = true, false;
          if (t !== s)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Bu[t] = true, true;
        }
      }
      return true;
    }
    function MO(e, t) {
      {
        var a = [];
        for (var i3 in t) {
          var l3 = $O(e, i3);
          l3 || a.push(i3);
        }
        var s = a.map(function(f3) {
          return "`" + f3 + "`";
        }).join(", ");
        a.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function AO(e, t) {
      Ql(e, t) || MO(e, t);
    }
    var rw = false;
    function zO(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !rw && (rw = true, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var aw = function() {
    };
    {
      var Rr = {}, iw = /^on./, jO = /^on[^A-Z]/, PO = new RegExp("^(aria)-[" + xe + "]*$"), HO = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      aw = function(e, t, a, i3) {
        if (wn.call(Rr, t) && Rr[t])
          return true;
        var l3 = t.toLowerCase();
        if (l3 === "onfocusin" || l3 === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Rr[t] = true, true;
        if (i3 != null) {
          var s = i3.registrationNameDependencies, f3 = i3.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return true;
          var m3 = f3.hasOwnProperty(l3) ? f3[l3] : null;
          if (m3 != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", t, m3), Rr[t] = true, true;
          if (iw.test(t))
            return d("Unknown event handler property `%s`. It will be ignored.", t), Rr[t] = true, true;
        } else if (iw.test(t))
          return jO.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Rr[t] = true, true;
        if (PO.test(t) || HO.test(t))
          return true;
        if (l3 === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Rr[t] = true, true;
        if (l3 === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Rr[t] = true, true;
        if (l3 === "is" && a !== null && a !== void 0 && typeof a != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Rr[t] = true, true;
        if (typeof a == "number" && isNaN(a))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Rr[t] = true, true;
        var h3 = Qn(t), S = h3 !== null && h3.type === xr;
        if (Yd.hasOwnProperty(l3)) {
          var w = Yd[l3];
          if (w !== t)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", t, w), Rr[t] = true, true;
        } else if (!S && t !== l3)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l3), Rr[t] = true, true;
        return typeof a == "boolean" && ir(t, a, h3, false) ? (a ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Rr[t] = true, true) : S ? true : ir(t, a, h3, false) ? (Rr[t] = true, false) : ((a === "false" || a === "true") && h3 !== null && h3.type === Xt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Rr[t] = true), true);
      };
    }
    var FO = function(e, t, a) {
      {
        var i3 = [];
        for (var l3 in t) {
          var s = aw(e, l3, t[l3], a);
          s || i3.push(l3);
        }
        var f3 = i3.map(function(m3) {
          return "`" + m3 + "`";
        }).join(", ");
        i3.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f3, e) : i3.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f3, e);
      }
    };
    function VO(e, t, a) {
      Ql(e, t) || FO(e, t, a);
    }
    var ow = 1, Dh = 2, bc = 4, YO = ow | Dh | bc, wc = null;
    function QO(e) {
      wc !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), wc = e;
    }
    function WO() {
      wc === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), wc = null;
    }
    function BO(e) {
      return e === wc;
    }
    function Ch(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Zi ? t.parentNode : t;
    }
    var Rh = null, Xu = null, Ju = null;
    function lw(e) {
      var t = Ko(e);
      if (t) {
        if (typeof Rh != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i3 = Tp(a);
          Rh(t.stateNode, t.type, i3);
        }
      }
    }
    function XO(e) {
      Rh = e;
    }
    function uw(e) {
      Xu ? Ju ? Ju.push(e) : Ju = [e] : Xu = e;
    }
    function JO() {
      return Xu !== null || Ju !== null;
    }
    function sw() {
      if (Xu) {
        var e = Xu, t = Ju;
        if (Xu = null, Ju = null, lw(e), t)
          for (var a = 0; a < t.length; a++)
            lw(t[a]);
      }
    }
    var cw = function(e, t) {
      return e(t);
    }, fw = function() {
    }, Eh = false;
    function GO() {
      var e = JO();
      e && (fw(), sw());
    }
    function dw(e, t, a) {
      if (Eh)
        return e(t, a);
      Eh = true;
      try {
        return cw(e, t, a);
      } finally {
        Eh = false, GO();
      }
    }
    function qO(e, t, a) {
      cw = e, fw = a;
    }
    function KO(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ZO(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && KO(t));
        default:
          return false;
      }
    }
    function xc(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i3 = Tp(a);
      if (i3 === null)
        return null;
      var l3 = i3[t];
      if (ZO(t, e.type, i3))
        return null;
      if (l3 && typeof l3 != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l3 + "` type.");
      return l3;
    }
    var Th = false;
    if (en)
      try {
        var Dc = {};
        Object.defineProperty(Dc, "passive", { get: function() {
          Th = true;
        } }), window.addEventListener("test", Dc, Dc), window.removeEventListener("test", Dc, Dc);
      } catch {
        Th = false;
      }
    function pw(e, t, a, i3, l3, s, f3, m3, h3) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (w) {
        this.onError(w);
      }
    }
    var vw = pw;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var kh = document.createElement("react");
      vw = function(t, a, i3, l3, s, f3, m3, h3, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), O = false, _ = true, P = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          kh.removeEventListener(Y, De, false), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function De() {
          O = true, F(), a.apply(i3, de), _ = false;
        }
        var Se, qe = false, Ke = false;
        function I($) {
          if (Se = $.error, qe = true, Se === null && $.colno === 0 && $.lineno === 0 && (Ke = true), $.defaultPrevented && Se != null && typeof Se == "object")
            try {
              Se._suppressLogging = true;
            } catch {
            }
        }
        var Y = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), kh.addEventListener(Y, De, false), w.initEvent(Y, false, false), kh.dispatchEvent(w), z && Object.defineProperty(window, "event", z), O && _ && (qe ? Ke && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", I), !O)
          return F(), pw.apply(this, arguments);
      };
    }
    var eN = vw, Gu = false, Qd = null, Wd = false, _h = null, tN = { onError: function(e) {
      Gu = true, Qd = e;
    } };
    function Oh(e, t, a, i3, l3, s, f3, m3, h3) {
      Gu = false, Qd = null, eN.apply(tN, arguments);
    }
    function nN(e, t, a, i3, l3, s, f3, m3, h3) {
      if (Oh.apply(this, arguments), Gu) {
        var S = Nh();
        Wd || (Wd = true, _h = S);
      }
    }
    function rN() {
      if (Wd) {
        var e = _h;
        throw Wd = false, _h = null, e;
      }
    }
    function aN() {
      return Gu;
    }
    function Nh() {
      if (Gu) {
        var e = Qd;
        return Gu = false, Qd = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qu(e) {
      return e._reactInternals;
    }
    function iN(e) {
      return e._reactInternals !== void 0;
    }
    function oN(e, t) {
      e._reactInternals = t;
    }
    var ke = 0, Ku = 1, vn = 2, lt = 4, Wl = 16, Cc = 32, Lh = 64, gt = 128, to = 256, Qo = 512, Bl = 1024, qa = 2048, no = 4096, Xl = 8192, Bd = 16384, lN = qa | lt | Lh | Qo | Bl | Bd, uN = 32767, Rc = 32768, Er = 65536, Uh = 131072, mw = 1048576, Ih = 2097152, Jl = 4194304, $h = 8388608, ro = 16777216, Xd = 33554432, Mh = lt | Bl | 0, Ah = vn | lt | Wl | Cc | Qo | no | Xl, Ec = lt | Lh | Qo | Xl, Zu = qa | Wl, ao = Jl | $h | Ih, sN = o.ReactCurrentOwner;
    function Gl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i3 = t;
        do
          t = i3, (t.flags & (vn | no)) !== ke && (a = t.return), i3 = t.return;
        while (i3);
      }
      return t.tag === U ? a : null;
    }
    function hw(e) {
      if (e.tag === X) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function yw(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function cN(e) {
      return Gl(e) === e;
    }
    function fN(e) {
      {
        var t = sN.current;
        if (t !== null && t.tag === T) {
          var a = t, i3 = a.stateNode;
          i3._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ze(a) || "A component"), i3._warnedAboutRefsInRender = true;
        }
      }
      var l3 = qu(e);
      return l3 ? Gl(l3) === l3 : false;
    }
    function gw(e) {
      if (Gl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Sw(e) {
      var t = e.alternate;
      if (!t) {
        var a = Gl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i3 = e, l3 = t; ; ) {
        var s = i3.return;
        if (s === null)
          break;
        var f3 = s.alternate;
        if (f3 === null) {
          var m3 = s.return;
          if (m3 !== null) {
            i3 = l3 = m3;
            continue;
          }
          break;
        }
        if (s.child === f3.child) {
          for (var h3 = s.child; h3; ) {
            if (h3 === i3)
              return gw(s), e;
            if (h3 === l3)
              return gw(s), t;
            h3 = h3.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i3.return !== l3.return)
          i3 = s, l3 = f3;
        else {
          for (var S = false, w = s.child; w; ) {
            if (w === i3) {
              S = true, i3 = s, l3 = f3;
              break;
            }
            if (w === l3) {
              S = true, l3 = s, i3 = f3;
              break;
            }
            w = w.sibling;
          }
          if (!S) {
            for (w = f3.child; w; ) {
              if (w === i3) {
                S = true, i3 = f3, l3 = s;
                break;
              }
              if (w === l3) {
                S = true, l3 = f3, i3 = s;
                break;
              }
              w = w.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i3.alternate !== l3)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i3.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return i3.stateNode.current === i3 ? e : t;
    }
    function bw(e) {
      var t = Sw(e);
      return t !== null ? ww(t) : null;
    }
    function ww(e) {
      if (e.tag === H || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ww(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dN(e) {
      var t = Sw(e);
      return t !== null ? xw(t) : null;
    }
    function xw(e) {
      if (e.tag === H || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j2) {
          var a = xw(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Dw = r.unstable_scheduleCallback, pN = r.unstable_cancelCallback, vN = r.unstable_shouldYield, mN = r.unstable_requestPaint, zn = r.unstable_now, hN = r.unstable_getCurrentPriorityLevel, Jd = r.unstable_ImmediatePriority, zh = r.unstable_UserBlockingPriority, ql = r.unstable_NormalPriority, yN = r.unstable_LowPriority, jh = r.unstable_IdlePriority, gN = r.unstable_yieldValue, SN = r.unstable_setDisableYieldValue, Kl = null, Wn = null, fe = null, ki = false, Ka = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function bN(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return false;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return true;
      if (!t.supportsFiber)
        return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), true;
      try {
        We && (e = Fe({}, e, { getLaneLabelMap: EN, injectProfilingHooks: RN })), Kl = t.inject(e), Wn = t;
      } catch (a) {
        d("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wN(e, t) {
      if (Wn && typeof Wn.onScheduleFiberRoot == "function")
        try {
          Wn.onScheduleFiberRoot(Kl, e, t);
        } catch (a) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", a));
        }
    }
    function xN(e, t) {
      if (Wn && typeof Wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & gt) === gt;
          if (ct) {
            var i3;
            switch (t) {
              case ca:
                i3 = Jd;
                break;
              case oo:
                i3 = zh;
                break;
              case lo:
                i3 = ql;
                break;
              case np:
                i3 = jh;
                break;
              default:
                i3 = ql;
                break;
            }
            Wn.onCommitFiberRoot(Kl, e, i3, a);
          } else
            Wn.onCommitFiberRoot(Kl, e, void 0, a);
        } catch (l3) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", l3));
        }
    }
    function DN(e) {
      if (Wn && typeof Wn.onPostCommitFiberRoot == "function")
        try {
          Wn.onPostCommitFiberRoot(Kl, e);
        } catch (t) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", t));
        }
    }
    function CN(e) {
      if (Wn && typeof Wn.onCommitFiberUnmount == "function")
        try {
          Wn.onCommitFiberUnmount(Kl, e);
        } catch (t) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof gN == "function" && (SN(e), c(e)), Wn && typeof Wn.setStrictMode == "function")
        try {
          Wn.setStrictMode(Kl, e);
        } catch (t) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", t));
        }
    }
    function RN(e) {
      fe = e;
    }
    function EN() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hh; a++) {
          var i3 = WN(t);
          e.set(t, i3), t *= 2;
        }
        return e;
      }
    }
    function TN(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function Cw() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function Tc(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function es() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function kN(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function _N() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function ON(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function NN() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function LN(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function UN() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function Rw(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ew() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function IN(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function $N(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function MN(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function AN() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function zN(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function jN() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function Tw(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function PN() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function kw() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function HN(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function FN(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function Ph(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var _e = 0, nt = 1, Et = 2, mn = 8, _i = 16, _w = Math.clz32 ? Math.clz32 : QN, VN = Math.log, YN = Math.LN2;
    function QN(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (VN(t) / YN | 0) | 0;
    }
    var Hh = 31, G = 0, Pn = 0, Ie = 1, ts = 2, io = 4, Zl = 8, Oi = 16, kc = 32, ns = 4194240, _c = 64, Fh = 128, Vh = 256, Yh = 512, Qh = 1024, Wh = 2048, Bh = 4096, Xh = 8192, Jh = 16384, Gh = 32768, qh = 65536, Kh = 131072, Zh = 262144, ey = 524288, ty = 1048576, ny = 2097152, Gd = 130023424, rs = 4194304, ry = 8388608, ay = 16777216, iy = 33554432, oy = 67108864, Ow = rs, Oc = 134217728, Nw = 268435455, Nc = 268435456, eu = 536870912, ua = 1073741824;
    function WN(e) {
      {
        if (e & Ie)
          return "Sync";
        if (e & ts)
          return "InputContinuousHydration";
        if (e & io)
          return "InputContinuous";
        if (e & Zl)
          return "DefaultHydration";
        if (e & Oi)
          return "Default";
        if (e & kc)
          return "TransitionHydration";
        if (e & ns)
          return "Transition";
        if (e & Gd)
          return "Retry";
        if (e & Oc)
          return "SelectiveHydration";
        if (e & Nc)
          return "IdleHydration";
        if (e & eu)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var jt = -1, qd = _c, Kd = rs;
    function Lc(e) {
      switch (tu(e)) {
        case Ie:
          return Ie;
        case ts:
          return ts;
        case io:
          return io;
        case Zl:
          return Zl;
        case Oi:
          return Oi;
        case kc:
          return kc;
        case _c:
        case Fh:
        case Vh:
        case Yh:
        case Qh:
        case Wh:
        case Bh:
        case Xh:
        case Jh:
        case Gh:
        case qh:
        case Kh:
        case Zh:
        case ey:
        case ty:
        case ny:
          return e & ns;
        case rs:
        case ry:
        case ay:
        case iy:
        case oy:
          return e & Gd;
        case Oc:
          return Oc;
        case Nc:
          return Nc;
        case eu:
          return eu;
        case ua:
          return ua;
        default:
          return d("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Zd(e, t) {
      var a = e.pendingLanes;
      if (a === G)
        return G;
      var i3 = G, l3 = e.suspendedLanes, s = e.pingedLanes, f3 = a & Nw;
      if (f3 !== G) {
        var m3 = f3 & ~l3;
        if (m3 !== G)
          i3 = Lc(m3);
        else {
          var h3 = f3 & s;
          h3 !== G && (i3 = Lc(h3));
        }
      } else {
        var S = a & ~l3;
        S !== G ? i3 = Lc(S) : s !== G && (i3 = Lc(s));
      }
      if (i3 === G)
        return G;
      if (t !== G && t !== i3 && (t & l3) === G) {
        var w = tu(i3), O = tu(t);
        if (w >= O || w === Oi && (O & ns) !== G)
          return t;
      }
      (i3 & io) !== G && (i3 |= a & Oi);
      var _ = e.entangledLanes;
      if (_ !== G)
        for (var P = e.entanglements, z = i3 & _; z > 0; ) {
          var F = nu(z), de = 1 << F;
          i3 |= P[F], z &= ~de;
        }
      return i3;
    }
    function BN(e, t) {
      for (var a = e.eventTimes, i3 = jt; t > 0; ) {
        var l3 = nu(t), s = 1 << l3, f3 = a[l3];
        f3 > i3 && (i3 = f3), t &= ~s;
      }
      return i3;
    }
    function XN(e, t) {
      switch (e) {
        case Ie:
        case ts:
        case io:
          return t + 250;
        case Zl:
        case Oi:
        case kc:
        case _c:
        case Fh:
        case Vh:
        case Yh:
        case Qh:
        case Wh:
        case Bh:
        case Xh:
        case Jh:
        case Gh:
        case qh:
        case Kh:
        case Zh:
        case ey:
        case ty:
        case ny:
          return t + 5e3;
        case rs:
        case ry:
        case ay:
        case iy:
        case oy:
          return jt;
        case Oc:
        case Nc:
        case eu:
        case ua:
          return jt;
        default:
          return d("Should have found matching lanes. This is a bug in React."), jt;
      }
    }
    function JN(e, t) {
      for (var a = e.pendingLanes, i3 = e.suspendedLanes, l3 = e.pingedLanes, s = e.expirationTimes, f3 = a; f3 > 0; ) {
        var m3 = nu(f3), h3 = 1 << m3, S = s[m3];
        S === jt ? ((h3 & i3) === G || (h3 & l3) !== G) && (s[m3] = XN(h3, t)) : S <= t && (e.expiredLanes |= h3), f3 &= ~h3;
      }
    }
    function GN(e) {
      return Lc(e.pendingLanes);
    }
    function ly(e) {
      var t = e.pendingLanes & ~ua;
      return t !== G ? t : t & ua ? ua : G;
    }
    function qN(e) {
      return (e & Ie) !== G;
    }
    function uy(e) {
      return (e & Nw) !== G;
    }
    function Lw(e) {
      return (e & Gd) === e;
    }
    function KN(e) {
      var t = Ie | io | Oi;
      return (e & t) === G;
    }
    function ZN(e) {
      return (e & ns) === e;
    }
    function ep(e, t) {
      var a = ts | io | Zl | Oi;
      return (t & a) !== G;
    }
    function eL(e, t) {
      return (t & e.expiredLanes) !== G;
    }
    function Uw(e) {
      return (e & ns) !== G;
    }
    function Iw() {
      var e = qd;
      return qd <<= 1, (qd & ns) === G && (qd = _c), e;
    }
    function tL() {
      var e = Kd;
      return Kd <<= 1, (Kd & Gd) === G && (Kd = rs), e;
    }
    function tu(e) {
      return e & -e;
    }
    function Uc(e) {
      return tu(e);
    }
    function nu(e) {
      return 31 - _w(e);
    }
    function sy(e) {
      return nu(e);
    }
    function sa(e, t) {
      return (e & t) !== G;
    }
    function as(e, t) {
      return (e & t) === t;
    }
    function Ye(e, t) {
      return e | t;
    }
    function tp(e, t) {
      return e & ~t;
    }
    function $w(e, t) {
      return e & t;
    }
    function W4(e) {
      return e;
    }
    function nL(e, t) {
      return e !== Pn && e < t ? e : t;
    }
    function cy(e) {
      for (var t = [], a = 0; a < Hh; a++)
        t.push(e);
      return t;
    }
    function Ic(e, t, a) {
      e.pendingLanes |= t, t !== eu && (e.suspendedLanes = G, e.pingedLanes = G);
      var i3 = e.eventTimes, l3 = sy(t);
      i3[l3] = a;
    }
    function rL(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i3 = t; i3 > 0; ) {
        var l3 = nu(i3), s = 1 << l3;
        a[l3] = jt, i3 &= ~s;
      }
    }
    function Mw(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function aL(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = G, e.pingedLanes = G, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i3 = e.entanglements, l3 = e.eventTimes, s = e.expirationTimes, f3 = a; f3 > 0; ) {
        var m3 = nu(f3), h3 = 1 << m3;
        i3[m3] = G, l3[m3] = jt, s[m3] = jt, f3 &= ~h3;
      }
    }
    function fy(e, t) {
      for (var a = e.entangledLanes |= t, i3 = e.entanglements, l3 = a; l3; ) {
        var s = nu(l3), f3 = 1 << s;
        f3 & t | i3[s] & t && (i3[s] |= t), l3 &= ~f3;
      }
    }
    function iL(e, t) {
      var a = tu(t), i3;
      switch (a) {
        case io:
          i3 = ts;
          break;
        case Oi:
          i3 = Zl;
          break;
        case _c:
        case Fh:
        case Vh:
        case Yh:
        case Qh:
        case Wh:
        case Bh:
        case Xh:
        case Jh:
        case Gh:
        case qh:
        case Kh:
        case Zh:
        case ey:
        case ty:
        case ny:
        case rs:
        case ry:
        case ay:
        case iy:
        case oy:
          i3 = kc;
          break;
        case eu:
          i3 = Nc;
          break;
        default:
          i3 = Pn;
          break;
      }
      return (i3 & (e.suspendedLanes | t)) !== Pn ? Pn : i3;
    }
    function Aw(e, t, a) {
      if (Ka)
        for (var i3 = e.pendingUpdatersLaneMap; a > 0; ) {
          var l3 = sy(a), s = 1 << l3, f3 = i3[l3];
          f3.add(t), a &= ~s;
        }
    }
    function zw(e, t) {
      if (Ka)
        for (var a = e.pendingUpdatersLaneMap, i3 = e.memoizedUpdaters; t > 0; ) {
          var l3 = sy(t), s = 1 << l3, f3 = a[l3];
          f3.size > 0 && (f3.forEach(function(m3) {
            var h3 = m3.alternate;
            (h3 === null || !i3.has(h3)) && i3.add(m3);
          }), f3.clear()), t &= ~s;
        }
    }
    function jw(e, t) {
      return null;
    }
    var ca = Ie, oo = io, lo = Oi, np = eu, $c = Pn;
    function Za() {
      return $c;
    }
    function Hn(e) {
      $c = e;
    }
    function oL(e, t) {
      var a = $c;
      try {
        return $c = e, t();
      } finally {
        $c = a;
      }
    }
    function lL(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uL(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function dy(e, t) {
      return e !== 0 && e < t;
    }
    function Pw(e) {
      var t = tu(e);
      return dy(ca, t) ? dy(oo, t) ? uy(t) ? lo : np : oo : ca;
    }
    function rp(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Hw;
    function sL(e) {
      Hw = e;
    }
    function cL(e) {
      Hw(e);
    }
    var py;
    function fL(e) {
      py = e;
    }
    var Fw;
    function dL(e) {
      Fw = e;
    }
    var Vw;
    function pL(e) {
      Vw = e;
    }
    var Yw;
    function vL(e) {
      Yw = e;
    }
    var vy = false, ap = [], Wo = null, Bo = null, Xo = null, Mc = /* @__PURE__ */ new Map(), Ac = /* @__PURE__ */ new Map(), Jo = [], mL = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset", "submit"];
    function hL(e) {
      return mL.indexOf(e) > -1;
    }
    function yL(e, t, a, i3, l3) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: a, nativeEvent: l3, targetContainers: [i3] };
    }
    function Qw(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wo = null;
          break;
        case "dragenter":
        case "dragleave":
          Bo = null;
          break;
        case "mouseover":
        case "mouseout":
          Xo = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Mc.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i3 = t.pointerId;
          Ac.delete(i3);
          break;
        }
      }
    }
    function zc(e, t, a, i3, l3, s) {
      if (e === null || e.nativeEvent !== s) {
        var f3 = yL(t, a, i3, l3, s);
        if (t !== null) {
          var m3 = Ko(t);
          m3 !== null && py(m3);
        }
        return f3;
      }
      e.eventSystemFlags |= i3;
      var h3 = e.targetContainers;
      return l3 !== null && h3.indexOf(l3) === -1 && h3.push(l3), e;
    }
    function gL(e, t, a, i3, l3) {
      switch (t) {
        case "focusin": {
          var s = l3;
          return Wo = zc(Wo, e, t, a, i3, s), true;
        }
        case "dragenter": {
          var f3 = l3;
          return Bo = zc(Bo, e, t, a, i3, f3), true;
        }
        case "mouseover": {
          var m3 = l3;
          return Xo = zc(Xo, e, t, a, i3, m3), true;
        }
        case "pointerover": {
          var h3 = l3, S = h3.pointerId;
          return Mc.set(S, zc(Mc.get(S) || null, e, t, a, i3, h3)), true;
        }
        case "gotpointercapture": {
          var w = l3, O = w.pointerId;
          return Ac.set(O, zc(Ac.get(O) || null, e, t, a, i3, w)), true;
        }
      }
      return false;
    }
    function Ww(e) {
      var t = iu(e.target);
      if (t !== null) {
        var a = Gl(t);
        if (a !== null) {
          var i3 = a.tag;
          if (i3 === X) {
            var l3 = hw(a);
            if (l3 !== null) {
              e.blockedOn = l3, Yw(e.priority, function() {
                Fw(a);
              });
              return;
            }
          } else if (i3 === U) {
            var s = a.stateNode;
            if (rp(s)) {
              e.blockedOn = yw(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function SL(e) {
      for (var t = Vw(), a = { blockedOn: null, target: e, priority: t }, i3 = 0; i3 < Jo.length && dy(t, Jo[i3].priority); i3++)
        ;
      Jo.splice(i3, 0, a), i3 === 0 && Ww(a);
    }
    function ip(e) {
      if (e.blockedOn !== null)
        return false;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i3 = yy(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i3 === null) {
          var l3 = e.nativeEvent, s = new l3.constructor(l3.type, l3);
          QO(s), l3.target.dispatchEvent(s), WO();
        } else {
          var f3 = Ko(i3);
          return f3 !== null && py(f3), e.blockedOn = i3, false;
        }
        t.shift();
      }
      return true;
    }
    function Bw(e, t, a) {
      ip(e) && a.delete(t);
    }
    function bL() {
      vy = false, Wo !== null && ip(Wo) && (Wo = null), Bo !== null && ip(Bo) && (Bo = null), Xo !== null && ip(Xo) && (Xo = null), Mc.forEach(Bw), Ac.forEach(Bw);
    }
    function jc(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vy || (vy = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, bL)));
    }
    function Pc(e) {
      if (ap.length > 0) {
        jc(ap[0], e);
        for (var t = 1; t < ap.length; t++) {
          var a = ap[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wo !== null && jc(Wo, e), Bo !== null && jc(Bo, e), Xo !== null && jc(Xo, e);
      var i3 = function(m3) {
        return jc(m3, e);
      };
      Mc.forEach(i3), Ac.forEach(i3);
      for (var l3 = 0; l3 < Jo.length; l3++) {
        var s = Jo[l3];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Jo.length > 0; ) {
        var f3 = Jo[0];
        if (f3.blockedOn !== null)
          break;
        Ww(f3), f3.blockedOn === null && Jo.shift();
      }
    }
    var is = o.ReactCurrentBatchConfig, my = true;
    function Xw(e) {
      my = !!e;
    }
    function wL() {
      return my;
    }
    function xL(e, t, a) {
      var i3 = Jw(t), l3;
      switch (i3) {
        case ca:
          l3 = DL;
          break;
        case oo:
          l3 = CL;
          break;
        case lo:
        default:
          l3 = hy;
          break;
      }
      return l3.bind(null, t, a, e);
    }
    function DL(e, t, a, i3) {
      var l3 = Za(), s = is.transition;
      is.transition = null;
      try {
        Hn(ca), hy(e, t, a, i3);
      } finally {
        Hn(l3), is.transition = s;
      }
    }
    function CL(e, t, a, i3) {
      var l3 = Za(), s = is.transition;
      is.transition = null;
      try {
        Hn(oo), hy(e, t, a, i3);
      } finally {
        Hn(l3), is.transition = s;
      }
    }
    function hy(e, t, a, i3) {
      my && RL(e, t, a, i3);
    }
    function RL(e, t, a, i3) {
      var l3 = yy(e, t, a, i3);
      if (l3 === null) {
        Ny(e, t, i3, op, a), Qw(e, i3);
        return;
      }
      if (gL(l3, e, t, a, i3)) {
        i3.stopPropagation();
        return;
      }
      if (Qw(e, i3), t & bc && hL(e)) {
        for (; l3 !== null; ) {
          var s = Ko(l3);
          s !== null && cL(s);
          var f3 = yy(e, t, a, i3);
          if (f3 === null && Ny(e, t, i3, op, a), f3 === l3)
            break;
          l3 = f3;
        }
        l3 !== null && i3.stopPropagation();
        return;
      }
      Ny(e, t, i3, null, a);
    }
    var op = null;
    function yy(e, t, a, i3) {
      op = null;
      var l3 = Ch(i3), s = iu(l3);
      if (s !== null) {
        var f3 = Gl(s);
        if (f3 === null)
          s = null;
        else {
          var m3 = f3.tag;
          if (m3 === X) {
            var h3 = hw(f3);
            if (h3 !== null)
              return h3;
            s = null;
          } else if (m3 === U) {
            var S = f3.stateNode;
            if (rp(S))
              return yw(f3);
            s = null;
          } else
            f3 !== s && (s = null);
        }
      }
      return op = s, null;
    }
    function Jw(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ca;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return oo;
        case "message": {
          var t = hN();
          switch (t) {
            case Jd:
              return ca;
            case zh:
              return oo;
            case ql:
            case yN:
              return lo;
            case jh:
              return np;
            default:
              return lo;
          }
        }
        default:
          return lo;
      }
    }
    function EL(e, t, a) {
      return e.addEventListener(t, a, false), a;
    }
    function TL(e, t, a) {
      return e.addEventListener(t, a, true), a;
    }
    function kL(e, t, a, i3) {
      return e.addEventListener(t, a, { capture: true, passive: i3 }), a;
    }
    function _L(e, t, a, i3) {
      return e.addEventListener(t, a, { passive: i3 }), a;
    }
    var Hc = null, gy = null, Fc = null;
    function OL(e) {
      return Hc = e, gy = qw(), true;
    }
    function NL() {
      Hc = null, gy = null, Fc = null;
    }
    function Gw() {
      if (Fc)
        return Fc;
      var e, t = gy, a = t.length, i3, l3 = qw(), s = l3.length;
      for (e = 0; e < a && t[e] === l3[e]; e++)
        ;
      var f3 = a - e;
      for (i3 = 1; i3 <= f3 && t[a - i3] === l3[s - i3]; i3++)
        ;
      var m3 = i3 > 1 ? 1 - i3 : void 0;
      return Fc = l3.slice(e, m3), Fc;
    }
    function qw() {
      return "value" in Hc ? Hc.value : Hc.textContent;
    }
    function lp(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function up() {
      return true;
    }
    function Kw() {
      return false;
    }
    function fa(e) {
      function t(a, i3, l3, s, f3) {
        this._reactName = a, this._targetInst = l3, this.type = i3, this.nativeEvent = s, this.target = f3, this.currentTarget = null;
        for (var m3 in e)
          if (e.hasOwnProperty(m3)) {
            var h3 = e[m3];
            h3 ? this[m3] = h3(s) : this[m3] = s[m3];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false;
        return S ? this.isDefaultPrevented = up : this.isDefaultPrevented = Kw, this.isPropagationStopped = Kw, this;
      }
      return Fe(t.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = up);
      }, stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = up);
      }, persist: function() {
      }, isPersistent: up }), t;
    }
    var os = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Sy = fa(os), Vc = Fe({}, os, { view: 0, detail: 0 }), LL = fa(Vc), by, wy, Yc;
    function UL(e) {
      e !== Yc && (Yc && e.type === "mousemove" ? (by = e.screenX - Yc.screenX, wy = e.screenY - Yc.screenY) : (by = 0, wy = 0), Yc = e);
    }
    var sp = Fe({}, Vc, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dy, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (UL(e), by);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : wy;
    } }), Zw = fa(sp), IL = Fe({}, sp, { dataTransfer: 0 }), $L = fa(IL), ML = Fe({}, Vc, { relatedTarget: 0 }), xy = fa(ML), AL = Fe({}, os, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zL = fa(AL), jL = Fe({}, os, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), PL = fa(jL), HL = Fe({}, os, { data: 0 }), ex = fa(HL), FL = ex, VL = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, YL = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
    function QL(e) {
      if (e.key) {
        var t = VL[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = lp(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? YL[e.keyCode] || "Unidentified" : "";
    }
    var WL = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function BL(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i3 = WL[e];
      return i3 ? !!a[i3] : false;
    }
    function Dy(e) {
      return BL;
    }
    var XL = Fe({}, Vc, { key: QL, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dy, charCode: function(e) {
      return e.type === "keypress" ? lp(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? lp(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), JL = fa(XL), GL = Fe({}, sp, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tx = fa(GL), qL = Fe({}, Vc, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dy }), KL = fa(qL), ZL = Fe({}, os, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), eU = fa(ZL), tU = Fe({}, sp, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), nU = fa(tU), rU = [9, 13, 27, 32], nx = 229, Cy = en && "CompositionEvent" in window, Qc = null;
    en && "documentMode" in document && (Qc = document.documentMode);
    var aU = en && "TextEvent" in window && !Qc, rx = en && (!Cy || Qc && Qc > 8 && Qc <= 11), ax = 32, ix = String.fromCharCode(ax);
    function iU() {
      $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $n("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ox = false;
    function oU(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function lU(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function uU(e, t) {
      return e === "keydown" && t.keyCode === nx;
    }
    function lx(e, t) {
      switch (e) {
        case "keyup":
          return rU.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== nx;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function ux(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function sx(e) {
      return e.locale === "ko";
    }
    var ls = false;
    function sU(e, t, a, i3, l3) {
      var s, f3;
      if (Cy ? s = lU(t) : ls ? lx(t, i3) && (s = "onCompositionEnd") : uU(t, i3) && (s = "onCompositionStart"), !s)
        return null;
      rx && !sx(i3) && (!ls && s === "onCompositionStart" ? ls = OL(l3) : s === "onCompositionEnd" && ls && (f3 = Gw()));
      var m3 = vp(a, s);
      if (m3.length > 0) {
        var h3 = new ex(s, t, null, i3, l3);
        if (e.push({ event: h3, listeners: m3 }), f3)
          h3.data = f3;
        else {
          var S = ux(i3);
          S !== null && (h3.data = S);
        }
      }
    }
    function cU(e, t) {
      switch (e) {
        case "compositionend":
          return ux(t);
        case "keypress":
          var a = t.which;
          return a !== ax ? null : (ox = true, ix);
        case "textInput":
          var i3 = t.data;
          return i3 === ix && ox ? null : i3;
        default:
          return null;
      }
    }
    function fU(e, t) {
      if (ls) {
        if (e === "compositionend" || !Cy && lx(e, t)) {
          var a = Gw();
          return NL(), ls = false, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!oU(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return rx && !sx(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dU(e, t, a, i3, l3) {
      var s;
      if (aU ? s = cU(t, i3) : s = fU(t, i3), !s)
        return null;
      var f3 = vp(a, "onBeforeInput");
      if (f3.length > 0) {
        var m3 = new FL("onBeforeInput", "beforeinput", null, i3, l3);
        e.push({ event: m3, listeners: f3 }), m3.data = s;
      }
    }
    function pU(e, t, a, i3, l3, s, f3) {
      sU(e, t, a, i3, l3), dU(e, t, a, i3, l3);
    }
    var vU = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function cx(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!vU[e.type] : t === "textarea";
    }
    function mU(e) {
      if (!en)
        return false;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i3 = document.createElement("div");
        i3.setAttribute(t, "return;"), a = typeof i3[t] == "function";
      }
      return a;
    }
    function hU() {
      $n("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function fx(e, t, a, i3) {
      uw(i3);
      var l3 = vp(t, "onChange");
      if (l3.length > 0) {
        var s = new Sy("onChange", "change", null, a, i3);
        e.push({ event: s, listeners: l3 });
      }
    }
    var Wc = null, Bc = null;
    function yU(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function gU(e) {
      var t = [];
      fx(t, Bc, e, Ch(e)), dw(SU, t);
    }
    function SU(e) {
      _x(e, 0);
    }
    function cp(e) {
      var t = ps(e);
      if (Ei(t))
        return e;
    }
    function bU(e, t) {
      if (e === "change")
        return t;
    }
    var dx = false;
    en && (dx = mU("input") && (!document.documentMode || document.documentMode > 9));
    function wU(e, t) {
      Wc = e, Bc = t, Wc.attachEvent("onpropertychange", vx);
    }
    function px() {
      Wc && (Wc.detachEvent("onpropertychange", vx), Wc = null, Bc = null);
    }
    function vx(e) {
      e.propertyName === "value" && cp(Bc) && gU(e);
    }
    function xU(e, t, a) {
      e === "focusin" ? (px(), wU(t, a)) : e === "focusout" && px();
    }
    function DU(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return cp(Bc);
    }
    function CU(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function RU(e, t) {
      if (e === "click")
        return cp(t);
    }
    function EU(e, t) {
      if (e === "input" || e === "change")
        return cp(t);
    }
    function TU(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || se(e, "number", e.value);
    }
    function kU(e, t, a, i3, l3, s, f3) {
      var m3 = a ? ps(a) : window, h3, S;
      if (yU(m3) ? h3 = bU : cx(m3) ? dx ? h3 = EU : (h3 = DU, S = xU) : CU(m3) && (h3 = RU), h3) {
        var w = h3(t, a);
        if (w) {
          fx(e, w, i3, l3);
          return;
        }
      }
      S && S(t, m3, a), t === "focusout" && TU(m3);
    }
    function _U() {
      br("onMouseEnter", ["mouseout", "mouseover"]), br("onMouseLeave", ["mouseout", "mouseover"]), br("onPointerEnter", ["pointerout", "pointerover"]), br("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function OU(e, t, a, i3, l3, s, f3) {
      var m3 = t === "mouseover" || t === "pointerover", h3 = t === "mouseout" || t === "pointerout";
      if (m3 && !BO(i3)) {
        var S = i3.relatedTarget || i3.fromElement;
        if (S && (iu(S) || sf(S)))
          return;
      }
      if (!(!h3 && !m3)) {
        var w;
        if (l3.window === l3)
          w = l3;
        else {
          var O = l3.ownerDocument;
          O ? w = O.defaultView || O.parentWindow : w = window;
        }
        var _, P;
        if (h3) {
          var z = i3.relatedTarget || i3.toElement;
          if (_ = a, P = z ? iu(z) : null, P !== null) {
            var F = Gl(P);
            (P !== F || P.tag !== H && P.tag !== J) && (P = null);
          }
        } else
          _ = null, P = a;
        if (_ !== P) {
          var de = Zw, De = "onMouseLeave", Se = "onMouseEnter", qe = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = tx, De = "onPointerLeave", Se = "onPointerEnter", qe = "pointer");
          var Ke = _ == null ? w : ps(_), I = P == null ? w : ps(P), Y = new de(De, qe + "leave", _, i3, l3);
          Y.target = Ke, Y.relatedTarget = I;
          var $ = null, Z = iu(l3);
          if (Z === a) {
            var me = new de(Se, qe + "enter", P, i3, l3);
            me.target = I, me.relatedTarget = Ke, $ = me;
          }
          eI(e, Y, $, _, P);
        }
      }
    }
    function NU(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var da = typeof Object.is == "function" ? Object.is : NU;
    function Xc(e, t) {
      if (da(e, t))
        return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return false;
      var a = Object.keys(e), i3 = Object.keys(t);
      if (a.length !== i3.length)
        return false;
      for (var l3 = 0; l3 < a.length; l3++) {
        var s = a[l3];
        if (!wn.call(t, s) || !da(e[s], t[s]))
          return false;
      }
      return true;
    }
    function mx(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function LU(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function hx(e, t) {
      for (var a = mx(e), i3 = 0, l3 = 0; a; ) {
        if (a.nodeType === Zi) {
          if (l3 = i3 + a.textContent.length, i3 <= t && l3 >= t)
            return { node: a, offset: t - i3 };
          i3 = l3;
        }
        a = mx(LU(a));
      }
    }
    function UU(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i3 = a.getSelection && a.getSelection();
      if (!i3 || i3.rangeCount === 0)
        return null;
      var l3 = i3.anchorNode, s = i3.anchorOffset, f3 = i3.focusNode, m3 = i3.focusOffset;
      try {
        l3.nodeType, f3.nodeType;
      } catch {
        return null;
      }
      return IU(e, l3, s, f3, m3);
    }
    function IU(e, t, a, i3, l3) {
      var s = 0, f3 = -1, m3 = -1, h3 = 0, S = 0, w = e, O = null;
      e:
        for (; ; ) {
          for (var _ = null; w === t && (a === 0 || w.nodeType === Zi) && (f3 = s + a), w === i3 && (l3 === 0 || w.nodeType === Zi) && (m3 = s + l3), w.nodeType === Zi && (s += w.nodeValue.length), (_ = w.firstChild) !== null; )
            O = w, w = _;
          for (; ; ) {
            if (w === e)
              break e;
            if (O === t && ++h3 === a && (f3 = s), O === i3 && ++S === l3 && (m3 = s), (_ = w.nextSibling) !== null)
              break;
            w = O, O = w.parentNode;
          }
          w = _;
        }
      return f3 === -1 || m3 === -1 ? null : { start: f3, end: m3 };
    }
    function $U(e, t) {
      var a = e.ownerDocument || document, i3 = a && a.defaultView || window;
      if (i3.getSelection) {
        var l3 = i3.getSelection(), s = e.textContent.length, f3 = Math.min(t.start, s), m3 = t.end === void 0 ? f3 : Math.min(t.end, s);
        if (!l3.extend && f3 > m3) {
          var h3 = m3;
          m3 = f3, f3 = h3;
        }
        var S = hx(e, f3), w = hx(e, m3);
        if (S && w) {
          if (l3.rangeCount === 1 && l3.anchorNode === S.node && l3.anchorOffset === S.offset && l3.focusNode === w.node && l3.focusOffset === w.offset)
            return;
          var O = a.createRange();
          O.setStart(S.node, S.offset), l3.removeAllRanges(), f3 > m3 ? (l3.addRange(O), l3.extend(w.node, w.offset)) : (O.setEnd(w.node, w.offset), l3.addRange(O));
        }
      }
    }
    function yx(e) {
      return e && e.nodeType === Zi;
    }
    function gx(e, t) {
      return !e || !t ? false : e === t ? true : yx(e) ? false : yx(t) ? gx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false;
    }
    function MU(e) {
      return e && e.ownerDocument && gx(e.ownerDocument.documentElement, e);
    }
    function AU(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return false;
      }
    }
    function Sx() {
      for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
        if (AU(t))
          e = t.contentWindow;
        else
          return t;
        t = Ti(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function zU() {
      var e = Sx();
      return { focusedElem: e, selectionRange: Ry(e) ? PU(e) : null };
    }
    function jU(e) {
      var t = Sx(), a = e.focusedElem, i3 = e.selectionRange;
      if (t !== a && MU(a)) {
        i3 !== null && Ry(a) && HU(a, i3);
        for (var l3 = [], s = a; s = s.parentNode; )
          s.nodeType === Hr && l3.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
        typeof a.focus == "function" && a.focus();
        for (var f3 = 0; f3 < l3.length; f3++) {
          var m3 = l3[f3];
          m3.element.scrollLeft = m3.left, m3.element.scrollTop = m3.top;
        }
      }
    }
    function PU(e) {
      var t;
      return "selectionStart" in e ? t = { start: e.selectionStart, end: e.selectionEnd } : t = UU(e), t || { start: 0, end: 0 };
    }
    function HU(e, t) {
      var a = t.start, i3 = t.end;
      i3 === void 0 && (i3 = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i3, e.value.length)) : $U(e, t);
    }
    var FU = en && "documentMode" in document && document.documentMode <= 11;
    function VU() {
      $n("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var us = null, Ey = null, Jc = null, Ty = false;
    function YU(e) {
      if ("selectionStart" in e && Ry(e))
        return { start: e.selectionStart, end: e.selectionEnd };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset };
    }
    function QU(e) {
      return e.window === e ? e.document : e.nodeType === eo ? e : e.ownerDocument;
    }
    function bx(e, t, a) {
      var i3 = QU(a);
      if (!(Ty || us == null || us !== Ti(i3))) {
        var l3 = YU(us);
        if (!Jc || !Xc(Jc, l3)) {
          Jc = l3;
          var s = vp(Ey, "onSelect");
          if (s.length > 0) {
            var f3 = new Sy("onSelect", "select", null, t, a);
            e.push({ event: f3, listeners: s }), f3.target = us;
          }
        }
      }
    }
    function WU(e, t, a, i3, l3, s, f3) {
      var m3 = a ? ps(a) : window;
      switch (t) {
        case "focusin":
          (cx(m3) || m3.contentEditable === "true") && (us = m3, Ey = a, Jc = null);
          break;
        case "focusout":
          us = null, Ey = null, Jc = null;
          break;
        case "mousedown":
          Ty = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = false, bx(e, i3, l3);
          break;
        case "selectionchange":
          if (FU)
            break;
        case "keydown":
        case "keyup":
          bx(e, i3, l3);
      }
    }
    function fp(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ss = { animationend: fp("Animation", "AnimationEnd"), animationiteration: fp("Animation", "AnimationIteration"), animationstart: fp("Animation", "AnimationStart"), transitionend: fp("Transition", "TransitionEnd") }, ky = {}, wx = {};
    en && (wx = document.createElement("div").style, "AnimationEvent" in window || (delete ss.animationend.animation, delete ss.animationiteration.animation, delete ss.animationstart.animation), "TransitionEvent" in window || delete ss.transitionend.transition);
    function dp(e) {
      if (ky[e])
        return ky[e];
      if (!ss[e])
        return e;
      var t = ss[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in wx)
          return ky[e] = t[a];
      return e;
    }
    var xx = dp("animationend"), Dx = dp("animationiteration"), Cx = dp("animationstart"), Rx = dp("transitionend"), Ex = /* @__PURE__ */ new Map(), Tx = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Go(e, t) {
      Ex.set(e, t), $n(t, [e]);
    }
    function BU() {
      for (var e = 0; e < Tx.length; e++) {
        var t = Tx[e], a = t.toLowerCase(), i3 = t[0].toUpperCase() + t.slice(1);
        Go(a, "on" + i3);
      }
      Go(xx, "onAnimationEnd"), Go(Dx, "onAnimationIteration"), Go(Cx, "onAnimationStart"), Go("dblclick", "onDoubleClick"), Go("focusin", "onFocus"), Go("focusout", "onBlur"), Go(Rx, "onTransitionEnd");
    }
    function XU(e, t, a, i3, l3, s, f3) {
      var m3 = Ex.get(t);
      if (m3 !== void 0) {
        var h3 = Sy, S = t;
        switch (t) {
          case "keypress":
            if (lp(i3) === 0)
              return;
          case "keydown":
          case "keyup":
            h3 = JL;
            break;
          case "focusin":
            S = "focus", h3 = xy;
            break;
          case "focusout":
            S = "blur", h3 = xy;
            break;
          case "beforeblur":
          case "afterblur":
            h3 = xy;
            break;
          case "click":
            if (i3.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h3 = Zw;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h3 = $L;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h3 = KL;
            break;
          case xx:
          case Dx:
          case Cx:
            h3 = zL;
            break;
          case Rx:
            h3 = eU;
            break;
          case "scroll":
            h3 = LL;
            break;
          case "wheel":
            h3 = nU;
            break;
          case "copy":
          case "cut":
          case "paste":
            h3 = PL;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h3 = tx;
            break;
        }
        var w = (s & bc) !== 0;
        {
          var O = !w && t === "scroll", _ = KU(a, m3, i3.type, w, O);
          if (_.length > 0) {
            var P = new h3(m3, S, null, i3, l3);
            e.push({ event: P, listeners: _ });
          }
        }
      }
    }
    BU(), _U(), hU(), VU(), iU();
    function JU(e, t, a, i3, l3, s, f3) {
      XU(e, t, a, i3, l3, s);
      var m3 = (s & YO) === 0;
      m3 && (OU(e, t, a, i3, l3), kU(e, t, a, i3, l3), WU(e, t, a, i3, l3), pU(e, t, a, i3, l3));
    }
    var Gc = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Gc));
    function kx(e, t, a) {
      var i3 = e.type || "unknown-event";
      e.currentTarget = a, nN(i3, t, void 0, e), e.currentTarget = null;
    }
    function GU(e, t, a) {
      var i3;
      if (a)
        for (var l3 = t.length - 1; l3 >= 0; l3--) {
          var s = t[l3], f3 = s.instance, m3 = s.currentTarget, h3 = s.listener;
          if (f3 !== i3 && e.isPropagationStopped())
            return;
          kx(e, h3, m3), i3 = f3;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var w = t[S], O = w.instance, _ = w.currentTarget, P = w.listener;
          if (O !== i3 && e.isPropagationStopped())
            return;
          kx(e, P, _), i3 = O;
        }
    }
    function _x(e, t) {
      for (var a = (t & bc) !== 0, i3 = 0; i3 < e.length; i3++) {
        var l3 = e[i3], s = l3.event, f3 = l3.listeners;
        GU(s, f3, a);
      }
      rN();
    }
    function qU(e, t, a, i3, l3) {
      var s = Ch(a), f3 = [];
      JU(f3, e, i3, a, s, t), _x(f3, t);
    }
    function Ft(e, t) {
      _y.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = false, i3 = T$(t), l3 = tI(e, a);
      i3.has(l3) || (Ox(t, e, Dh, a), i3.add(l3));
    }
    function Oy(e, t, a) {
      _y.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i3 = 0;
      t && (i3 |= bc), Ox(a, e, i3, t);
    }
    var pp = "_reactListening" + Math.random().toString(36).slice(2);
    function qc(e) {
      if (!e[pp]) {
        e[pp] = true, et.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || Oy(a, false, e), Oy(a, true, e));
        });
        var t = e.nodeType === eo ? e : e.ownerDocument;
        t !== null && (t[pp] || (t[pp] = true, Oy("selectionchange", false, t)));
      }
    }
    function Ox(e, t, a, i3, l3) {
      var s = xL(e, t, a), f3 = void 0;
      Th && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f3 = true), e = e;
      var m3;
      i3 ? f3 !== void 0 ? m3 = kL(e, t, s, f3) : m3 = TL(e, t, s) : f3 !== void 0 ? m3 = _L(e, t, s, f3) : m3 = EL(e, t, s);
    }
    function Nx(e, t) {
      return e === t || e.nodeType === pn && e.parentNode === t;
    }
    function Ny(e, t, a, i3, l3) {
      var s = i3;
      if (!(t & ow) && !(t & Dh)) {
        var f3 = l3;
        if (i3 !== null) {
          var m3 = i3;
          e:
            for (; ; ) {
              if (m3 === null)
                return;
              var h3 = m3.tag;
              if (h3 === U || h3 === j2) {
                var S = m3.stateNode.containerInfo;
                if (Nx(S, f3))
                  break;
                if (h3 === j2)
                  for (var w = m3.return; w !== null; ) {
                    var O = w.tag;
                    if (O === U || O === j2) {
                      var _ = w.stateNode.containerInfo;
                      if (Nx(_, f3))
                        return;
                    }
                    w = w.return;
                  }
                for (; S !== null; ) {
                  var P = iu(S);
                  if (P === null)
                    return;
                  var z = P.tag;
                  if (z === H || z === J) {
                    m3 = s = P;
                    continue e;
                  }
                  S = S.parentNode;
                }
              }
              m3 = m3.return;
            }
        }
      }
      dw(function() {
        return qU(e, t, a, s);
      });
    }
    function Kc(e, t, a) {
      return { instance: e, listener: t, currentTarget: a };
    }
    function KU(e, t, a, i3, l3, s) {
      for (var f3 = t !== null ? t + "Capture" : null, m3 = i3 ? f3 : t, h3 = [], S = e, w = null; S !== null; ) {
        var O = S, _ = O.stateNode, P = O.tag;
        if (P === H && _ !== null && (w = _, m3 !== null)) {
          var z = xc(S, m3);
          z != null && h3.push(Kc(S, z, w));
        }
        if (l3)
          break;
        S = S.return;
      }
      return h3;
    }
    function vp(e, t) {
      for (var a = t + "Capture", i3 = [], l3 = e; l3 !== null; ) {
        var s = l3, f3 = s.stateNode, m3 = s.tag;
        if (m3 === H && f3 !== null) {
          var h3 = f3, S = xc(l3, a);
          S != null && i3.unshift(Kc(l3, S, h3));
          var w = xc(l3, t);
          w != null && i3.push(Kc(l3, w, h3));
        }
        l3 = l3.return;
      }
      return i3;
    }
    function cs(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== H);
      return e || null;
    }
    function ZU(e, t) {
      for (var a = e, i3 = t, l3 = 0, s = a; s; s = cs(s))
        l3++;
      for (var f3 = 0, m3 = i3; m3; m3 = cs(m3))
        f3++;
      for (; l3 - f3 > 0; )
        a = cs(a), l3--;
      for (; f3 - l3 > 0; )
        i3 = cs(i3), f3--;
      for (var h3 = l3; h3--; ) {
        if (a === i3 || i3 !== null && a === i3.alternate)
          return a;
        a = cs(a), i3 = cs(i3);
      }
      return null;
    }
    function Lx(e, t, a, i3, l3) {
      for (var s = t._reactName, f3 = [], m3 = a; m3 !== null && m3 !== i3; ) {
        var h3 = m3, S = h3.alternate, w = h3.stateNode, O = h3.tag;
        if (S !== null && S === i3)
          break;
        if (O === H && w !== null) {
          var _ = w;
          if (l3) {
            var P = xc(m3, s);
            P != null && f3.unshift(Kc(m3, P, _));
          } else if (!l3) {
            var z = xc(m3, s);
            z != null && f3.push(Kc(m3, z, _));
          }
        }
        m3 = m3.return;
      }
      f3.length !== 0 && e.push({ event: t, listeners: f3 });
    }
    function eI(e, t, a, i3, l3) {
      var s = i3 && l3 ? ZU(i3, l3) : null;
      i3 !== null && Lx(e, t, i3, s, false), l3 !== null && a !== null && Lx(e, a, l3, s, true);
    }
    function tI(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Fr = false, Zc = "dangerouslySetInnerHTML", mp = "suppressContentEditableWarning", qo = "suppressHydrationWarning", Ux = "autoFocus", ru = "children", au = "style", hp = "__html", Ly, yp, ef, Ix, gp, $x, Mx;
    Ly = { dialog: true, webview: true }, yp = function(e, t) {
      AO(e, t), zO(e, t), VO(e, t, { registrationNameDependencies: Be, possibleRegistrationNames: Ot });
    }, $x = en && !document.documentMode, ef = function(e, t, a) {
      if (!Fr) {
        var i3 = Sp(a), l3 = Sp(t);
        l3 !== i3 && (Fr = true, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l3), JSON.stringify(i3)));
      }
    }, Ix = function(e) {
      if (!Fr) {
        Fr = true;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), d("Extra attributes from the server: %s", t);
      }
    }, gp = function(e, t) {
      t === false ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Mx = function(e, t) {
      var a = e.namespaceURI === Ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nI = /\r\n?/g, rI = /\u0000|\uFFFD/g;
    function Sp(e) {
      wr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nI, `
`).replace(rI, "");
    }
    function bp(e, t, a, i3) {
      var l3 = Sp(t), s = Sp(e);
      if (s !== l3 && (i3 && (Fr || (Fr = true, d('Text content did not match. Server: "%s" Client: "%s"', s, l3))), a && Pe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Ax(e) {
      return e.nodeType === eo ? e : e.ownerDocument;
    }
    function aI() {
    }
    function wp(e) {
      e.onclick = aI;
    }
    function iI(e, t, a, i3, l3) {
      for (var s in i3)
        if (i3.hasOwnProperty(s)) {
          var f3 = i3[s];
          if (s === au)
            f3 && Object.freeze(f3), ew(t, f3);
          else if (s === Zc) {
            var m3 = f3 ? f3[hp] : void 0;
            m3 != null && Jb(t, m3);
          } else if (s === ru)
            if (typeof f3 == "string") {
              var h3 = e !== "textarea" || f3 !== "";
              h3 && Vd(t, f3);
            } else
              typeof f3 == "number" && Vd(t, "" + f3);
          else
            s === mp || s === qo || s === Ux || (Be.hasOwnProperty(s) ? f3 != null && (typeof f3 != "function" && gp(s, f3), s === "onScroll" && Ft("scroll", t)) : f3 != null && Qa(t, s, f3, l3));
        }
    }
    function oI(e, t, a, i3) {
      for (var l3 = 0; l3 < t.length; l3 += 2) {
        var s = t[l3], f3 = t[l3 + 1];
        s === au ? ew(e, f3) : s === Zc ? Jb(e, f3) : s === ru ? Vd(e, f3) : Qa(e, s, f3, i3);
      }
    }
    function lI(e, t, a, i3) {
      var l3, s = Ax(a), f3, m3 = i3;
      if (m3 === Ki && (m3 = yh(e)), m3 === Ki) {
        if (l3 = Ql(e, t), !l3 && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h3 = s.createElement("div");
          h3.innerHTML = "<script></script>";
          var S = h3.firstChild;
          f3 = h3.removeChild(S);
        } else if (typeof t.is == "string")
          f3 = s.createElement(e, { is: t.is });
        else if (f3 = s.createElement(e), e === "select") {
          var w = f3;
          t.multiple ? w.multiple = true : t.size && (w.size = t.size);
        }
      } else
        f3 = s.createElementNS(m3, e);
      return m3 === Ki && !l3 && Object.prototype.toString.call(f3) === "[object HTMLUnknownElement]" && !wn.call(Ly, e) && (Ly[e] = true, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f3;
    }
    function uI(e, t) {
      return Ax(t).createTextNode(e);
    }
    function sI(e, t, a, i3) {
      var l3 = Ql(t, a);
      yp(t, a);
      var s;
      switch (t) {
        case "dialog":
          Ft("cancel", e), Ft("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Ft("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f3 = 0; f3 < Gc.length; f3++)
            Ft(Gc[f3], e);
          s = a;
          break;
        case "source":
          Ft("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Ft("error", e), Ft("load", e), s = a;
          break;
        case "details":
          Ft("toggle", e), s = a;
          break;
        case "input":
          g2(e, a), s = v(e, a), Ft("invalid", e);
          break;
        case "option":
          Ue(e, a), s = a;
          break;
        case "select":
          gc(e, a), s = Yl(e, a), Ft("invalid", e);
          break;
        case "textarea":
          Wb(e, a), s = mh(e, a), Ft("invalid", e);
          break;
        default:
          s = a;
      }
      switch (xh(t, s), iI(t, e, i3, s, l3), t) {
        case "input":
          la(e), A(e, a, false);
          break;
        case "textarea":
          la(e), Xb(e);
          break;
        case "option":
          Ve(e, a);
          break;
        case "select":
          vh(e, a);
          break;
        default:
          typeof s.onClick == "function" && wp(e);
          break;
      }
    }
    function cI(e, t, a, i3, l3) {
      yp(t, i3);
      var s = null, f3, m3;
      switch (t) {
        case "input":
          f3 = v(e, a), m3 = v(e, i3), s = [];
          break;
        case "select":
          f3 = Yl(e, a), m3 = Yl(e, i3), s = [];
          break;
        case "textarea":
          f3 = mh(e, a), m3 = mh(e, i3), s = [];
          break;
        default:
          f3 = a, m3 = i3, typeof f3.onClick != "function" && typeof m3.onClick == "function" && wp(e);
          break;
      }
      xh(t, m3);
      var h3, S, w = null;
      for (h3 in f3)
        if (!(m3.hasOwnProperty(h3) || !f3.hasOwnProperty(h3) || f3[h3] == null))
          if (h3 === au) {
            var O = f3[h3];
            for (S in O)
              O.hasOwnProperty(S) && (w || (w = {}), w[S] = "");
          } else
            h3 === Zc || h3 === ru || h3 === mp || h3 === qo || h3 === Ux || (Be.hasOwnProperty(h3) ? s || (s = []) : (s = s || []).push(h3, null));
      for (h3 in m3) {
        var _ = m3[h3], P = f3?.[h3];
        if (!(!m3.hasOwnProperty(h3) || _ === P || _ == null && P == null))
          if (h3 === au)
            if (_ && Object.freeze(_), P) {
              for (S in P)
                P.hasOwnProperty(S) && (!_ || !_.hasOwnProperty(S)) && (w || (w = {}), w[S] = "");
              for (S in _)
                _.hasOwnProperty(S) && P[S] !== _[S] && (w || (w = {}), w[S] = _[S]);
            } else
              w || (s || (s = []), s.push(h3, w)), w = _;
          else if (h3 === Zc) {
            var z = _ ? _[hp] : void 0, F = P ? P[hp] : void 0;
            z != null && F !== z && (s = s || []).push(h3, z);
          } else
            h3 === ru ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(h3, "" + _) : h3 === mp || h3 === qo || (Be.hasOwnProperty(h3) ? (_ != null && (typeof _ != "function" && gp(h3, _), h3 === "onScroll" && Ft("scroll", e)), !s && P !== _ && (s = [])) : (s = s || []).push(h3, _));
      }
      return w && (_O(w, m3[au]), (s = s || []).push(au, w)), s;
    }
    function fI(e, t, a, i3, l3) {
      a === "input" && l3.type === "radio" && l3.name != null && D(e, l3);
      var s = Ql(a, i3), f3 = Ql(a, l3);
      switch (oI(e, t, s, f3), a) {
        case "input":
          L(e, l3);
          break;
        case "textarea":
          Bb(e, l3);
          break;
        case "select":
          oO(e, l3);
          break;
      }
    }
    function dI(e) {
      {
        var t = e.toLowerCase();
        return Yd.hasOwnProperty(t) && Yd[t] || null;
      }
    }
    function pI(e, t, a, i3, l3, s, f3) {
      var m3, h3;
      switch (m3 = Ql(t, a), yp(t, a), t) {
        case "dialog":
          Ft("cancel", e), Ft("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ft("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < Gc.length; S++)
            Ft(Gc[S], e);
          break;
        case "source":
          Ft("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Ft("error", e), Ft("load", e);
          break;
        case "details":
          Ft("toggle", e);
          break;
        case "input":
          g2(e, a), Ft("invalid", e);
          break;
        case "option":
          Ue(e, a);
          break;
        case "select":
          gc(e, a), Ft("invalid", e);
          break;
        case "textarea":
          Wb(e, a), Ft("invalid", e);
          break;
      }
      xh(t, a);
      {
        h3 = /* @__PURE__ */ new Set();
        for (var w = e.attributes, O = 0; O < w.length; O++) {
          var _ = w[O].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h3.add(w[O].name);
          }
        }
      }
      var P = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var F = a[z];
          if (z === ru)
            typeof F == "string" ? e.textContent !== F && (a[qo] !== true && bp(e.textContent, F, s, f3), P = [ru, F]) : typeof F == "number" && e.textContent !== "" + F && (a[qo] !== true && bp(e.textContent, F, s, f3), P = [ru, "" + F]);
          else if (Be.hasOwnProperty(z))
            F != null && (typeof F != "function" && gp(z, F), z === "onScroll" && Ft("scroll", e));
          else if (f3 && typeof m3 == "boolean") {
            var de = void 0, De = m3 && Le ? null : Qn(z);
            if (a[qo] !== true) {
              if (!(z === mp || z === qo || z === "value" || z === "checked" || z === "selected")) {
                if (z === Zc) {
                  var Se = e.innerHTML, qe = F ? F[hp] : void 0;
                  if (qe != null) {
                    var Ke = Mx(e, qe);
                    Ke !== Se && ef(z, Se, Ke);
                  }
                } else if (z === au) {
                  if (h3.delete(z), $x) {
                    var I = TO(F);
                    de = e.getAttribute("style"), I !== de && ef(z, de, I);
                  }
                } else if (m3 && !Le)
                  h3.delete(z.toLowerCase()), de = Si(e, z, F), F !== de && ef(z, de, F);
                else if (!Qt(z, De, m3) && !Dt(z, F, De, m3)) {
                  var Y = false;
                  if (De !== null)
                    h3.delete(De.attributeName), de = Ca(e, z, F, De);
                  else {
                    var $ = i3;
                    if ($ === Ki && ($ = yh(t)), $ === Ki)
                      h3.delete(z.toLowerCase());
                    else {
                      var Z = dI(z);
                      Z !== null && Z !== z && (Y = true, h3.delete(Z)), h3.delete(z);
                    }
                    de = Si(e, z, F);
                  }
                  var me = Le;
                  !me && F !== de && !Y && ef(z, de, F);
                }
              }
            }
          }
        }
      switch (f3 && h3.size > 0 && a[qo] !== true && Ix(h3), t) {
        case "input":
          la(e), A(e, a, true);
          break;
        case "textarea":
          la(e), Xb(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && wp(e);
          break;
      }
      return P;
    }
    function vI(e, t, a) {
      var i3 = e.nodeValue !== t;
      return i3;
    }
    function Uy(e, t) {
      {
        if (Fr)
          return;
        Fr = true, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t) {
      {
        if (Fr)
          return;
        Fr = true, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function $y(e, t, a) {
      {
        if (Fr)
          return;
        Fr = true, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Fr)
          return;
        Fr = true, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mI(e, t, a) {
      switch (t) {
        case "input":
          te(e, a);
          return;
        case "textarea":
          uO(e, a);
          return;
        case "select":
          lO(e, a);
          return;
      }
    }
    var tf = function() {
    }, nf = function() {
    };
    {
      var hI = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], zx = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"], yI = zx.concat(["button"]), gI = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], jx = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
      nf = function(e, t) {
        var a = Fe({}, e || jx), i3 = { tag: t };
        return zx.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yI.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hI.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i3, t === "form" && (a.formTag = i3), t === "a" && (a.aTagInScope = i3), t === "button" && (a.buttonTagInScope = i3), t === "nobr" && (a.nobrTagInScope = i3), t === "p" && (a.pTagInButtonScope = i3), t === "li" && (a.listItemTagAutoclosing = i3), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i3), a;
      };
      var SI = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return gI.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return true;
      }, bI = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, Px = {};
      tf = function(e, t, a) {
        a = a || jx;
        var i3 = a.current, l3 = i3 && i3.tag;
        t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = SI(e, l3) ? null : i3, f3 = s ? null : bI(e, a), m3 = s || f3;
        if (m3) {
          var h3 = m3.tag, S = !!s + "|" + e + "|" + h3;
          if (!Px[S]) {
            Px[S] = true;
            var w = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var _ = "";
              h3 === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, h3, O, _);
            } else
              d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, h3);
          }
        }
      };
    }
    var xp = "suppressHydrationWarning", Dp = "$", Cp = "/$", rf = "$?", af = "$!", wI = "style", Ay = null, zy = null;
    function xI(e) {
      var t, a, i3 = e.nodeType;
      switch (i3) {
        case eo:
        case Sh: {
          t = i3 === eo ? "#document" : "#fragment";
          var l3 = e.documentElement;
          a = l3 ? l3.namespaceURI : gh(null, "");
          break;
        }
        default: {
          var s = i3 === pn ? e.parentNode : e, f3 = s.namespaceURI || null;
          t = s.tagName, a = gh(f3, t);
          break;
        }
      }
      {
        var m3 = t.toLowerCase(), h3 = nf(null, m3);
        return { namespace: a, ancestorInfo: h3 };
      }
    }
    function DI(e, t, a) {
      {
        var i3 = e, l3 = gh(i3.namespace, t), s = nf(i3.ancestorInfo, t);
        return { namespace: l3, ancestorInfo: s };
      }
    }
    function B4(e) {
      return e;
    }
    function CI(e) {
      Ay = wL(), zy = zU();
      var t = null;
      return Xw(false), t;
    }
    function RI(e) {
      jU(zy), Xw(Ay), Ay = null, zy = null;
    }
    function EI(e, t, a, i3, l3) {
      var s;
      {
        var f3 = i3;
        if (tf(e, null, f3.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m3 = "" + t.children, h3 = nf(f3.ancestorInfo, e);
          tf(null, m3, h3);
        }
        s = f3.namespace;
      }
      var S = lI(e, t, a, s);
      return uf(l3, S), Wy(S, t), S;
    }
    function TI(e, t) {
      e.appendChild(t);
    }
    function kI(e, t, a, i3, l3) {
      switch (sI(e, t, a, i3), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return true;
        default:
          return false;
      }
    }
    function _I(e, t, a, i3, l3, s) {
      {
        var f3 = s;
        if (typeof i3.children != typeof a.children && (typeof i3.children == "string" || typeof i3.children == "number")) {
          var m3 = "" + i3.children, h3 = nf(f3.ancestorInfo, t);
          tf(null, m3, h3);
        }
      }
      return cI(e, t, a, i3);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function OI(e, t, a, i3) {
      {
        var l3 = a;
        tf(null, e, l3.ancestorInfo);
      }
      var s = uI(e, t);
      return uf(i3, s), s;
    }
    function NI() {
      var e = window.event;
      return e === void 0 ? lo : Jw(e.type);
    }
    var Py = typeof setTimeout == "function" ? setTimeout : void 0, LI = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, Hx = typeof Promise == "function" ? Promise : void 0, UI = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hx < "u" ? function(e) {
      return Hx.resolve(null).then(e).catch(II);
    } : Py;
    function II(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function $I(e, t, a, i3) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function MI(e, t, a, i3, l3, s) {
      fI(e, t, a, i3, l3), Wy(e, l3);
    }
    function Fx(e) {
      Vd(e, "");
    }
    function AI(e, t, a) {
      e.nodeValue = a;
    }
    function zI(e, t) {
      e.appendChild(t);
    }
    function jI(e, t) {
      var a;
      e.nodeType === pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i3 = e._reactRootContainer;
      i3 == null && a.onclick === null && wp(a);
    }
    function PI(e, t, a) {
      e.insertBefore(t, a);
    }
    function HI(e, t, a) {
      e.nodeType === pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function FI(e, t) {
      e.removeChild(t);
    }
    function VI(e, t) {
      e.nodeType === pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i3 = 0;
      do {
        var l3 = a.nextSibling;
        if (e.removeChild(a), l3 && l3.nodeType === pn) {
          var s = l3.data;
          if (s === Cp)
            if (i3 === 0) {
              e.removeChild(l3), Pc(t);
              return;
            } else
              i3--;
          else
            (s === Dp || s === rf || s === af) && i3++;
        }
        a = l3;
      } while (a);
      Pc(t);
    }
    function YI(e, t) {
      e.nodeType === pn ? Fy(e.parentNode, t) : e.nodeType === Hr && Fy(e, t), Pc(e);
    }
    function QI(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function WI(e) {
      e.nodeValue = "";
    }
    function BI(e, t) {
      e = e;
      var a = t[wI], i3 = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bh("display", i3);
    }
    function XI(e, t) {
      e.nodeValue = t;
    }
    function JI(e) {
      e.nodeType === Hr ? e.textContent = "" : e.nodeType === eo && e.documentElement && e.removeChild(e.documentElement);
    }
    function GI(e, t, a) {
      return e.nodeType !== Hr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function qI(e, t) {
      return t === "" || e.nodeType !== Zi ? null : e;
    }
    function KI(e) {
      return e.nodeType !== pn ? null : e;
    }
    function Vx(e) {
      return e.data === rf;
    }
    function Vy(e) {
      return e.data === af;
    }
    function ZI(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i3, l3;
      return t && (a = t.dgst, i3 = t.msg, l3 = t.stck), { message: i3, digest: a, stack: l3 };
    }
    function e$(e, t) {
      e._reactRetry = t;
    }
    function Rp(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Hr || t === Zi)
          break;
        if (t === pn) {
          var a = e.data;
          if (a === Dp || a === af || a === rf)
            break;
          if (a === Cp)
            return null;
        }
      }
      return e;
    }
    function of(e) {
      return Rp(e.nextSibling);
    }
    function t$(e) {
      return Rp(e.firstChild);
    }
    function n$(e) {
      return Rp(e.firstChild);
    }
    function r$(e) {
      return Rp(e.nextSibling);
    }
    function a$(e, t, a, i3, l3, s, f3) {
      uf(s, e), Wy(e, a);
      var m3;
      {
        var h3 = l3;
        m3 = h3.namespace;
      }
      var S = (s.mode & nt) !== _e;
      return pI(e, t, a, m3, i3, S, f3);
    }
    function i$(e, t, a, i3) {
      uf(a, e);
      var l3 = (a.mode & nt) !== _e;
      return vI(e, t);
    }
    function o$(e, t) {
      uf(t, e);
    }
    function l$(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === pn) {
          var i3 = t.data;
          if (i3 === Cp) {
            if (a === 0)
              return of(t);
            a--;
          } else
            (i3 === Dp || i3 === af || i3 === rf) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Yx(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === pn) {
          var i3 = t.data;
          if (i3 === Dp || i3 === af || i3 === rf) {
            if (a === 0)
              return t;
            a--;
          } else
            i3 === Cp && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function u$(e) {
      Pc(e);
    }
    function s$(e) {
      Pc(e);
    }
    function c$(e) {
      return e !== "head" && e !== "body";
    }
    function f$(e, t, a, i3) {
      var l3 = true;
      bp(t.nodeValue, a, i3, l3);
    }
    function d$(e, t, a, i3, l3, s) {
      if (t[xp] !== true) {
        var f3 = true;
        bp(i3.nodeValue, l3, s, f3);
      }
    }
    function p$(e, t) {
      t.nodeType === Hr ? Uy(e, t) : t.nodeType === pn || Iy(e, t);
    }
    function v$(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Hr ? Uy(a, t) : t.nodeType === pn || Iy(a, t));
      }
    }
    function m$(e, t, a, i3, l3) {
      (l3 || t[xp] !== true) && (i3.nodeType === Hr ? Uy(a, i3) : i3.nodeType === pn || Iy(a, i3));
    }
    function h$(e, t, a) {
      $y(e, t);
    }
    function y$(e, t) {
      My(e, t);
    }
    function g$(e, t, a) {
      {
        var i3 = e.parentNode;
        i3 !== null && $y(i3, t);
      }
    }
    function S$(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function b$(e, t, a, i3, l3, s) {
      (s || t[xp] !== true) && $y(a, i3);
    }
    function w$(e, t, a, i3, l3) {
      (l3 || t[xp] !== true) && My(a, i3);
    }
    function x$(e) {
      d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function D$(e) {
      qc(e);
    }
    var fs = Math.random().toString(36).slice(2), ds = "__reactFiber$" + fs, Yy = "__reactProps$" + fs, lf = "__reactContainer$" + fs, Qy = "__reactEvents$" + fs, C$ = "__reactListeners$" + fs, R$ = "__reactHandles$" + fs;
    function E$(e) {
      delete e[ds], delete e[Yy], delete e[Qy], delete e[C$], delete e[R$];
    }
    function uf(e, t) {
      t[ds] = e;
    }
    function Ep(e, t) {
      t[lf] = e;
    }
    function Qx(e) {
      e[lf] = null;
    }
    function sf(e) {
      return !!e[lf];
    }
    function iu(e) {
      var t = e[ds];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lf] || a[ds], t) {
          var i3 = t.alternate;
          if (t.child !== null || i3 !== null && i3.child !== null)
            for (var l3 = Yx(e); l3 !== null; ) {
              var s = l3[ds];
              if (s)
                return s;
              l3 = Yx(l3);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ko(e) {
      var t = e[ds] || e[lf];
      return t && (t.tag === H || t.tag === J || t.tag === X || t.tag === U) ? t : null;
    }
    function ps(e) {
      if (e.tag === H || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Tp(e) {
      return e[Yy] || null;
    }
    function Wy(e, t) {
      e[Yy] = t;
    }
    function T$(e) {
      var t = e[Qy];
      return t === void 0 && (t = e[Qy] = /* @__PURE__ */ new Set()), t;
    }
    var Wx = {}, Bx = o.ReactDebugCurrentFrame;
    function kp(e) {
      if (e) {
        var t = e._owner, a = Xa(e.type, e._source, t ? t.type : null);
        Bx.setExtraStackFrame(a);
      } else
        Bx.setExtraStackFrame(null);
    }
    function ei(e, t, a, i3, l3) {
      {
        var s = Function.call.bind(wn);
        for (var f3 in e)
          if (s(e, f3)) {
            var m3 = void 0;
            try {
              if (typeof e[f3] != "function") {
                var h3 = Error((i3 || "React class") + ": " + a + " type `" + f3 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f3] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h3.name = "Invariant Violation", h3;
              }
              m3 = e[f3](t, f3, i3, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m3 = S;
            }
            m3 && !(m3 instanceof Error) && (kp(l3), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i3 || "React class", a, f3, typeof m3), kp(null)), m3 instanceof Error && !(m3.message in Wx) && (Wx[m3.message] = true, kp(l3), d("Failed %s type: %s", a, m3.message), kp(null));
          }
      }
    }
    var By = [], _p;
    _p = [];
    var uo = -1;
    function Zo(e) {
      return { current: e };
    }
    function sr(e, t) {
      if (uo < 0) {
        d("Unexpected pop.");
        return;
      }
      t !== _p[uo] && d("Unexpected Fiber popped."), e.current = By[uo], By[uo] = null, _p[uo] = null, uo--;
    }
    function cr(e, t, a) {
      uo++, By[uo] = e.current, _p[uo] = a, e.current = t;
    }
    var Xy;
    Xy = {};
    var pa = {};
    Object.freeze(pa);
    var so = Zo(pa), Ni = Zo(false), Jy = pa;
    function vs(e, t, a) {
      return a && Li(t) ? Jy : so.current;
    }
    function Xx(e, t, a) {
      {
        var i3 = e.stateNode;
        i3.__reactInternalMemoizedUnmaskedChildContext = t, i3.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function ms(e, t) {
      {
        var a = e.type, i3 = a.contextTypes;
        if (!i3)
          return pa;
        var l3 = e.stateNode;
        if (l3 && l3.__reactInternalMemoizedUnmaskedChildContext === t)
          return l3.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f3 in i3)
          s[f3] = t[f3];
        {
          var m3 = ze(e) || "Unknown";
          ei(i3, s, "context", m3);
        }
        return l3 && Xx(e, t, s), s;
      }
    }
    function Op() {
      return Ni.current;
    }
    function Li(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Np(e) {
      sr(Ni, e), sr(so, e);
    }
    function Gy(e) {
      sr(Ni, e), sr(so, e);
    }
    function Jx(e, t, a) {
      {
        if (so.current !== pa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        cr(so, t, e), cr(Ni, a, e);
      }
    }
    function Gx(e, t, a) {
      {
        var i3 = e.stateNode, l3 = t.childContextTypes;
        if (typeof i3.getChildContext != "function") {
          {
            var s = ze(e) || "Unknown";
            Xy[s] || (Xy[s] = true, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f3 = i3.getChildContext();
        for (var m3 in f3)
          if (!(m3 in l3))
            throw new Error((ze(e) || "Unknown") + '.getChildContext(): key "' + m3 + '" is not defined in childContextTypes.');
        {
          var h3 = ze(e) || "Unknown";
          ei(l3, f3, "child context", h3);
        }
        return Fe({}, a, f3);
      }
    }
    function Lp(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pa;
        return Jy = so.current, cr(so, a, e), cr(Ni, Ni.current, e), true;
      }
    }
    function qx(e, t, a) {
      {
        var i3 = e.stateNode;
        if (!i3)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l3 = Gx(e, t, Jy);
          i3.__reactInternalMemoizedMergedChildContext = l3, sr(Ni, e), sr(so, e), cr(so, l3, e), cr(Ni, a, e);
        } else
          sr(Ni, e), cr(Ni, a, e);
      }
    }
    function k$(e) {
      {
        if (!cN(e) || e.tag !== T)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case U:
              return t.stateNode.context;
            case T: {
              var a = t.type;
              if (Li(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var el = 0, Up = 1, co = null, qy = false, Ky = false;
    function Kx(e) {
      co === null ? co = [e] : co.push(e);
    }
    function _$(e) {
      qy = true, Kx(e);
    }
    function Zx() {
      qy && tl();
    }
    function tl() {
      if (!Ky && co !== null) {
        Ky = true;
        var e = 0, t = Za();
        try {
          var a = true, i3 = co;
          for (Hn(ca); e < i3.length; e++) {
            var l3 = i3[e];
            do
              l3 = l3(a);
            while (l3 !== null);
          }
          co = null, qy = false;
        } catch (s) {
          throw co !== null && (co = co.slice(e + 1)), Dw(Jd, tl), s;
        } finally {
          Hn(t), Ky = false;
        }
      }
      return null;
    }
    var hs = [], ys = 0, Ip = null, $p = 0, _a = [], Oa = 0, ou = null, fo = 1, po = "";
    function O$(e) {
      return uu(), (e.flags & mw) !== ke;
    }
    function N$(e) {
      return uu(), $p;
    }
    function L$() {
      var e = po, t = fo, a = t & ~U$(t);
      return a.toString(32) + e;
    }
    function lu(e, t) {
      uu(), hs[ys++] = $p, hs[ys++] = Ip, Ip = e, $p = t;
    }
    function eD(e, t, a) {
      uu(), _a[Oa++] = fo, _a[Oa++] = po, _a[Oa++] = ou, ou = e;
      var i3 = fo, l3 = po, s = Mp(i3) - 1, f3 = i3 & ~(1 << s), m3 = a + 1, h3 = Mp(t) + s;
      if (h3 > 30) {
        var S = s - s % 5, w = (1 << S) - 1, O = (f3 & w).toString(32), _ = f3 >> S, P = s - S, z = Mp(t) + P, F = m3 << P, de = F | _, De = O + l3;
        fo = 1 << z | de, po = De;
      } else {
        var Se = m3 << s, qe = Se | f3, Ke = l3;
        fo = 1 << h3 | qe, po = Ke;
      }
    }
    function Zy(e) {
      uu();
      var t = e.return;
      if (t !== null) {
        var a = 1, i3 = 0;
        lu(e, a), eD(e, a, i3);
      }
    }
    function Mp(e) {
      return 32 - _w(e);
    }
    function U$(e) {
      return 1 << Mp(e) - 1;
    }
    function eg(e) {
      for (; e === Ip; )
        Ip = hs[--ys], hs[ys] = null, $p = hs[--ys], hs[ys] = null;
      for (; e === ou; )
        ou = _a[--Oa], _a[Oa] = null, po = _a[--Oa], _a[Oa] = null, fo = _a[--Oa], _a[Oa] = null;
    }
    function I$() {
      return uu(), ou !== null ? { id: fo, overflow: po } : null;
    }
    function $$(e, t) {
      uu(), _a[Oa++] = fo, _a[Oa++] = po, _a[Oa++] = ou, fo = t.id, po = t.overflow, ou = e;
    }
    function uu() {
      Xn() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Bn = null, Na = null, ti = false, su = false, nl = null;
    function M$() {
      ti && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tD() {
      su = true;
    }
    function A$() {
      return su;
    }
    function z$(e) {
      var t = e.stateNode.containerInfo;
      return Na = n$(t), Bn = e, ti = true, nl = null, su = false, true;
    }
    function j$(e, t, a) {
      return Na = r$(t), Bn = e, ti = true, nl = null, su = false, a !== null && $$(e, a), true;
    }
    function nD(e, t) {
      switch (e.tag) {
        case U: {
          p$(e.stateNode.containerInfo, t);
          break;
        }
        case H: {
          var a = (e.mode & nt) !== _e;
          m$(e.type, e.memoizedProps, e.stateNode, t, a);
          break;
        }
        case X: {
          var i3 = e.memoizedState;
          i3.dehydrated !== null && v$(i3.dehydrated, t);
          break;
        }
      }
    }
    function rD(e, t) {
      nD(e, t);
      var a = BA();
      a.stateNode = t, a.return = e;
      var i3 = e.deletions;
      i3 === null ? (e.deletions = [a], e.flags |= Wl) : i3.push(a);
    }
    function tg(e, t) {
      {
        if (su)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case H:
                var i3 = t.type, l3 = t.pendingProps;
                h$(a, i3);
                break;
              case J:
                var s = t.pendingProps;
                y$(a, s);
                break;
            }
            break;
          }
          case H: {
            var f3 = e.type, m3 = e.memoizedProps, h3 = e.stateNode;
            switch (t.tag) {
              case H: {
                var S = t.type, w = t.pendingProps, O = (e.mode & nt) !== _e;
                b$(f3, m3, h3, S, w, O);
                break;
              }
              case J: {
                var _ = t.pendingProps, P = (e.mode & nt) !== _e;
                w$(f3, m3, h3, _, P);
                break;
              }
            }
            break;
          }
          case X: {
            var z = e.memoizedState, F = z.dehydrated;
            if (F !== null)
              switch (t.tag) {
                case H:
                  var de = t.type, De = t.pendingProps;
                  g$(F, de);
                  break;
                case J:
                  var Se = t.pendingProps;
                  S$(F, Se);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function aD(e, t) {
      t.flags = t.flags & ~no | vn, tg(e, t);
    }
    function iD(e, t) {
      switch (e.tag) {
        case H: {
          var a = e.type, i3 = e.pendingProps, l3 = GI(t, a);
          return l3 !== null ? (e.stateNode = l3, Bn = e, Na = t$(l3), true) : false;
        }
        case J: {
          var s = e.pendingProps, f3 = qI(t, s);
          return f3 !== null ? (e.stateNode = f3, Bn = e, Na = null, true) : false;
        }
        case X: {
          var m3 = KI(t);
          if (m3 !== null) {
            var h3 = { dehydrated: m3, treeContext: I$(), retryLane: ua };
            e.memoizedState = h3;
            var S = XA(m3);
            return S.return = e, e.child = S, Bn = e, Na = null, true;
          }
          return false;
        }
        default:
          return false;
      }
    }
    function ng(e) {
      return (e.mode & nt) !== _e && (e.flags & gt) === ke;
    }
    function rg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ag(e) {
      if (ti) {
        var t = Na;
        if (!t) {
          ng(e) && (tg(Bn, e), rg()), aD(Bn, e), ti = false, Bn = e;
          return;
        }
        var a = t;
        if (!iD(e, t)) {
          ng(e) && (tg(Bn, e), rg()), t = of(a);
          var i3 = Bn;
          if (!t || !iD(e, t)) {
            aD(Bn, e), ti = false, Bn = e;
            return;
          }
          rD(i3, a);
        }
      }
    }
    function P$(e, t, a) {
      var i3 = e.stateNode, l3 = !su, s = a$(i3, e.type, e.memoizedProps, t, a, e, l3);
      return e.updateQueue = s, s !== null;
    }
    function H$(e) {
      var t = e.stateNode, a = e.memoizedProps, i3 = i$(t, a, e);
      if (i3) {
        var l3 = Bn;
        if (l3 !== null)
          switch (l3.tag) {
            case U: {
              var s = l3.stateNode.containerInfo, f3 = (l3.mode & nt) !== _e;
              f$(s, t, a, f3);
              break;
            }
            case H: {
              var m3 = l3.type, h3 = l3.memoizedProps, S = l3.stateNode, w = (l3.mode & nt) !== _e;
              d$(m3, h3, S, t, a, w);
              break;
            }
          }
      }
      return i3;
    }
    function F$(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      o$(a, e);
    }
    function V$(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return l$(a);
    }
    function oD(e) {
      for (var t = e.return; t !== null && t.tag !== H && t.tag !== U && t.tag !== X; )
        t = t.return;
      Bn = t;
    }
    function Ap(e) {
      if (e !== Bn)
        return false;
      if (!ti)
        return oD(e), ti = true, false;
      if (e.tag !== U && (e.tag !== H || c$(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = Na;
        if (t)
          if (ng(e))
            lD(e), rg();
          else
            for (; t; )
              rD(e, t), t = of(t);
      }
      return oD(e), e.tag === X ? Na = V$(e) : Na = Bn ? of(e.stateNode) : null, true;
    }
    function Y$() {
      return ti && Na !== null;
    }
    function lD(e) {
      for (var t = Na; t; )
        nD(e, t), t = of(t);
    }
    function gs() {
      Bn = null, Na = null, ti = false, su = false;
    }
    function uD() {
      nl !== null && (rR(nl), nl = null);
    }
    function Xn() {
      return ti;
    }
    function ig(e) {
      nl === null ? nl = [e] : nl.push(e);
    }
    var Q$ = o.ReactCurrentBatchConfig, W$ = null;
    function B$() {
      return Q$.transition;
    }
    var ni = { recordUnsafeLifecycleWarnings: function(e, t) {
    }, flushPendingUnsafeLifecycleWarnings: function() {
    }, recordLegacyContextWarning: function(e, t) {
    }, flushLegacyContextWarning: function() {
    }, discardPendingWarnings: function() {
    } };
    {
      var X$ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & mn && (t = a), a = a.return;
        return t;
      }, cu = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cf = [], ff = [], df = [], pf = [], vf = [], mf = [], fu = /* @__PURE__ */ new Set();
      ni.recordUnsafeLifecycleWarnings = function(e, t) {
        fu.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== true && cf.push(e), e.mode & mn && typeof t.UNSAFE_componentWillMount == "function" && ff.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== true && df.push(e), e.mode & mn && typeof t.UNSAFE_componentWillReceiveProps == "function" && pf.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== true && vf.push(e), e.mode & mn && typeof t.UNSAFE_componentWillUpdate == "function" && mf.push(e));
      }, ni.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cf.length > 0 && (cf.forEach(function(_) {
          e.add(ze(_) || "Component"), fu.add(_.type);
        }), cf = []);
        var t = /* @__PURE__ */ new Set();
        ff.length > 0 && (ff.forEach(function(_) {
          t.add(ze(_) || "Component"), fu.add(_.type);
        }), ff = []);
        var a = /* @__PURE__ */ new Set();
        df.length > 0 && (df.forEach(function(_) {
          a.add(ze(_) || "Component"), fu.add(_.type);
        }), df = []);
        var i3 = /* @__PURE__ */ new Set();
        pf.length > 0 && (pf.forEach(function(_) {
          i3.add(ze(_) || "Component"), fu.add(_.type);
        }), pf = []);
        var l3 = /* @__PURE__ */ new Set();
        vf.length > 0 && (vf.forEach(function(_) {
          l3.add(ze(_) || "Component"), fu.add(_.type);
        }), vf = []);
        var s = /* @__PURE__ */ new Set();
        if (mf.length > 0 && (mf.forEach(function(_) {
          s.add(ze(_) || "Component"), fu.add(_.type);
        }), mf = []), t.size > 0) {
          var f3 = cu(t);
          d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f3);
        }
        if (i3.size > 0) {
          var m3 = cu(i3);
          d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m3);
        }
        if (s.size > 0) {
          var h3 = cu(s);
          d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h3);
        }
        if (e.size > 0) {
          var S = cu(e);
          p(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var w = cu(a);
          p(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (l3.size > 0) {
          var O = cu(l3);
          p(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var zp = /* @__PURE__ */ new Map(), sD = /* @__PURE__ */ new Set();
      ni.recordLegacyContextWarning = function(e, t) {
        var a = X$(e);
        if (a === null) {
          d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sD.has(e.type)) {
          var i3 = zp.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i3 === void 0 && (i3 = [], zp.set(a, i3)), i3.push(e));
        }
      }, ni.flushLegacyContextWarning = function() {
        zp.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i3 = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i3.add(ze(s) || "Component"), sD.add(s.type);
            });
            var l3 = cu(i3);
            try {
              zt(a), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l3);
            } finally {
              un();
            }
          }
        });
      }, ni.discardPendingWarnings = function() {
        cf = [], ff = [], df = [], pf = [], vf = [], mf = [], zp = /* @__PURE__ */ new Map();
      };
    }
    function ri(e, t) {
      if (e && e.defaultProps) {
        var a = Fe({}, t), i3 = e.defaultProps;
        for (var l3 in i3)
          a[l3] === void 0 && (a[l3] = i3[l3]);
        return a;
      }
      return t;
    }
    var og = Zo(null), lg;
    lg = {};
    var jp = null, Ss = null, ug = null, Pp = false;
    function Hp() {
      jp = null, Ss = null, ug = null, Pp = false;
    }
    function cD() {
      Pp = true;
    }
    function fD() {
      Pp = false;
    }
    function dD(e, t, a) {
      cr(og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== lg && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = lg;
    }
    function sg(e, t) {
      var a = og.current;
      sr(og, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i3 = e; i3 !== null; ) {
        var l3 = i3.alternate;
        if (as(i3.childLanes, t) ? l3 !== null && !as(l3.childLanes, t) && (l3.childLanes = Ye(l3.childLanes, t)) : (i3.childLanes = Ye(i3.childLanes, t), l3 !== null && (l3.childLanes = Ye(l3.childLanes, t))), i3 === a)
          break;
        i3 = i3.return;
      }
      i3 !== a && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function J$(e, t, a) {
      G$(e, t, a);
    }
    function G$(e, t, a) {
      var i3 = e.child;
      for (i3 !== null && (i3.return = e); i3 !== null; ) {
        var l3 = void 0, s = i3.dependencies;
        if (s !== null) {
          l3 = i3.child;
          for (var f3 = s.firstContext; f3 !== null; ) {
            if (f3.context === t) {
              if (i3.tag === T) {
                var m3 = Uc(a), h3 = vo(jt, m3);
                h3.tag = Vp;
                var S = i3.updateQueue;
                if (S !== null) {
                  var w = S.shared, O = w.pending;
                  O === null ? h3.next = h3 : (h3.next = O.next, O.next = h3), w.pending = h3;
                }
              }
              i3.lanes = Ye(i3.lanes, a);
              var _ = i3.alternate;
              _ !== null && (_.lanes = Ye(_.lanes, a)), cg(i3.return, a, e), s.lanes = Ye(s.lanes, a);
              break;
            }
            f3 = f3.next;
          }
        } else if (i3.tag === C)
          l3 = i3.type === e.type ? null : i3.child;
        else if (i3.tag === Re) {
          var P = i3.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = Ye(P.lanes, a);
          var z = P.alternate;
          z !== null && (z.lanes = Ye(z.lanes, a)), cg(P, a, e), l3 = i3.sibling;
        } else
          l3 = i3.child;
        if (l3 !== null)
          l3.return = i3;
        else
          for (l3 = i3; l3 !== null; ) {
            if (l3 === e) {
              l3 = null;
              break;
            }
            var F = l3.sibling;
            if (F !== null) {
              F.return = l3.return, l3 = F;
              break;
            }
            l3 = l3.return;
          }
        i3 = l3;
      }
    }
    function bs(e, t) {
      jp = e, Ss = null, ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i3 = a.firstContext;
        i3 !== null && (sa(a.lanes, t) && _f(), a.firstContext = null);
      }
    }
    function hn(e) {
      Pp && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ug !== e) {
        var a = { context: e, memoizedValue: t, next: null };
        if (Ss === null) {
          if (jp === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ss = a, jp.dependencies = { lanes: G, firstContext: a };
        } else
          Ss = Ss.next = a;
      }
      return t;
    }
    var du = null;
    function fg(e) {
      du === null ? du = [e] : du.push(e);
    }
    function q$() {
      if (du !== null) {
        for (var e = 0; e < du.length; e++) {
          var t = du[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i3 = a.next, l3 = t.pending;
            if (l3 !== null) {
              var s = l3.next;
              l3.next = i3, a.next = s;
            }
            t.pending = a;
          }
        }
        du = null;
      }
    }
    function pD(e, t, a, i3) {
      var l3 = t.interleaved;
      return l3 === null ? (a.next = a, fg(t)) : (a.next = l3.next, l3.next = a), t.interleaved = a, Fp(e, i3);
    }
    function K$(e, t, a, i3) {
      var l3 = t.interleaved;
      l3 === null ? (a.next = a, fg(t)) : (a.next = l3.next, l3.next = a), t.interleaved = a;
    }
    function Z$(e, t, a, i3) {
      var l3 = t.interleaved;
      return l3 === null ? (a.next = a, fg(t)) : (a.next = l3.next, l3.next = a), t.interleaved = a, Fp(e, i3);
    }
    function Vr(e, t) {
      return Fp(e, t);
    }
    var e2 = Fp;
    function Fp(e, t) {
      e.lanes = Ye(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ye(a.lanes, t)), a === null && (e.flags & (vn | no)) !== ke && mR(e);
      for (var i3 = e, l3 = e.return; l3 !== null; )
        l3.childLanes = Ye(l3.childLanes, t), a = l3.alternate, a !== null ? a.childLanes = Ye(a.childLanes, t) : (l3.flags & (vn | no)) !== ke && mR(e), i3 = l3, l3 = l3.return;
      if (i3.tag === U) {
        var s = i3.stateNode;
        return s;
      } else
        return null;
    }
    var vD = 0, mD = 1, Vp = 2, dg = 3, Yp = false, pg, Qp;
    pg = false, Qp = null;
    function vg(e) {
      var t = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: G }, effects: null };
      e.updateQueue = t;
    }
    function hD(e, t) {
      var a = t.updateQueue, i3 = e.updateQueue;
      if (a === i3) {
        var l3 = { baseState: i3.baseState, firstBaseUpdate: i3.firstBaseUpdate, lastBaseUpdate: i3.lastBaseUpdate, shared: i3.shared, effects: i3.effects };
        t.updateQueue = l3;
      }
    }
    function vo(e, t) {
      var a = { eventTime: e, lane: t, tag: vD, payload: null, callback: null, next: null };
      return a;
    }
    function rl(e, t, a) {
      var i3 = e.updateQueue;
      if (i3 === null)
        return null;
      var l3 = i3.shared;
      if (Qp === l3 && !pg && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = true), iA()) {
        var s = l3.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l3.pending = t, e2(e, a);
      } else
        return Z$(e, l3, t, a);
    }
    function Wp(e, t, a) {
      var i3 = t.updateQueue;
      if (i3 !== null) {
        var l3 = i3.shared;
        if (Uw(a)) {
          var s = l3.lanes;
          s = $w(s, e.pendingLanes);
          var f3 = Ye(s, a);
          l3.lanes = f3, fy(e, f3);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i3 = e.alternate;
      if (i3 !== null) {
        var l3 = i3.updateQueue;
        if (a === l3) {
          var s = null, f3 = null, m3 = a.firstBaseUpdate;
          if (m3 !== null) {
            var h3 = m3;
            do {
              var S = { eventTime: h3.eventTime, lane: h3.lane, tag: h3.tag, payload: h3.payload, callback: h3.callback, next: null };
              f3 === null ? s = f3 = S : (f3.next = S, f3 = S), h3 = h3.next;
            } while (h3 !== null);
            f3 === null ? s = f3 = t : (f3.next = t, f3 = t);
          } else
            s = f3 = t;
          a = { baseState: l3.baseState, firstBaseUpdate: s, lastBaseUpdate: f3, shared: l3.shared, effects: l3.effects }, e.updateQueue = a;
          return;
        }
      }
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function t2(e, t, a, i3, l3, s) {
      switch (a.tag) {
        case mD: {
          var f3 = a.payload;
          if (typeof f3 == "function") {
            cD();
            var m3 = f3.call(s, i3, l3);
            {
              if (e.mode & mn) {
                jn(true);
                try {
                  f3.call(s, i3, l3);
                } finally {
                  jn(false);
                }
              }
              fD();
            }
            return m3;
          }
          return f3;
        }
        case dg:
          e.flags = e.flags & ~Er | gt;
        case vD: {
          var h3 = a.payload, S;
          if (typeof h3 == "function") {
            cD(), S = h3.call(s, i3, l3);
            {
              if (e.mode & mn) {
                jn(true);
                try {
                  h3.call(s, i3, l3);
                } finally {
                  jn(false);
                }
              }
              fD();
            }
          } else
            S = h3;
          return S == null ? i3 : Fe({}, i3, S);
        }
        case Vp:
          return Yp = true, i3;
      }
      return i3;
    }
    function Bp(e, t, a, i3) {
      var l3 = e.updateQueue;
      Yp = false, Qp = l3.shared;
      var s = l3.firstBaseUpdate, f3 = l3.lastBaseUpdate, m3 = l3.shared.pending;
      if (m3 !== null) {
        l3.shared.pending = null;
        var h3 = m3, S = h3.next;
        h3.next = null, f3 === null ? s = S : f3.next = S, f3 = h3;
        var w = e.alternate;
        if (w !== null) {
          var O = w.updateQueue, _ = O.lastBaseUpdate;
          _ !== f3 && (_ === null ? O.firstBaseUpdate = S : _.next = S, O.lastBaseUpdate = h3);
        }
      }
      if (s !== null) {
        var P = l3.baseState, z = G, F = null, de = null, De = null, Se = s;
        do {
          var qe = Se.lane, Ke = Se.eventTime;
          if (as(i3, qe)) {
            if (De !== null) {
              var Y = { eventTime: Ke, lane: Pn, tag: Se.tag, payload: Se.payload, callback: Se.callback, next: null };
              De = De.next = Y;
            }
            P = t2(e, l3, Se, P, t, a);
            var $ = Se.callback;
            if ($ !== null && Se.lane !== Pn) {
              e.flags |= Lh;
              var Z = l3.effects;
              Z === null ? l3.effects = [Se] : Z.push(Se);
            }
          } else {
            var I = { eventTime: Ke, lane: qe, tag: Se.tag, payload: Se.payload, callback: Se.callback, next: null };
            De === null ? (de = De = I, F = P) : De = De.next = I, z = Ye(z, qe);
          }
          if (Se = Se.next, Se === null) {
            if (m3 = l3.shared.pending, m3 === null)
              break;
            var me = m3, ce = me.next;
            me.next = null, Se = ce, l3.lastBaseUpdate = me, l3.shared.pending = null;
          }
        } while (true);
        De === null && (F = P), l3.baseState = F, l3.firstBaseUpdate = de, l3.lastBaseUpdate = De;
        var Ne = l3.shared.interleaved;
        if (Ne !== null) {
          var je = Ne;
          do
            z = Ye(z, je.lane), je = je.next;
          while (je !== Ne);
        } else
          s === null && (l3.shared.lanes = G);
        Hf(z), e.lanes = z, e.memoizedState = P;
      }
      Qp = null;
    }
    function n22(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function yD() {
      Yp = false;
    }
    function Xp() {
      return Yp;
    }
    function gD(e, t, a) {
      var i3 = t.effects;
      if (t.effects = null, i3 !== null)
        for (var l3 = 0; l3 < i3.length; l3++) {
          var s = i3[l3], f3 = s.callback;
          f3 !== null && (s.callback = null, n22(f3, a));
        }
    }
    var hg = {}, SD = new n2.Component().refs, yg, gg, Sg, bg, wg, bD, Jp, xg, Dg, Cg;
    {
      yg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), bg = /* @__PURE__ */ new Set(), xg = /* @__PURE__ */ new Set(), wg = /* @__PURE__ */ new Set(), Dg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set();
      var wD = /* @__PURE__ */ new Set();
      Jp = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          wD.has(a) || (wD.add(a), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, bD = function(e, t) {
        if (t === void 0) {
          var a = ot(e) || "Component";
          wg.has(a) || (wg.add(a), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(hg, "_processChildContext", { enumerable: false, value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      } }), Object.freeze(hg);
    }
    function Rg(e, t, a, i3) {
      var l3 = e.memoizedState, s = a(i3, l3);
      {
        if (e.mode & mn) {
          jn(true);
          try {
            s = a(i3, l3);
          } finally {
            jn(false);
          }
        }
        bD(t, s);
      }
      var f3 = s == null ? l3 : Fe({}, l3, s);
      if (e.memoizedState = f3, e.lanes === G) {
        var m3 = e.updateQueue;
        m3.baseState = f3;
      }
    }
    var Eg = { isMounted: fN, enqueueSetState: function(e, t, a) {
      var i3 = qu(e), l3 = _r(), s = fl(i3), f3 = vo(l3, s);
      f3.payload = t, a != null && (Jp(a, "setState"), f3.callback = a);
      var m3 = rl(i3, f3, s);
      m3 !== null && (Ln(m3, i3, s, l3), Wp(m3, i3, s)), Ph(i3, s);
    }, enqueueReplaceState: function(e, t, a) {
      var i3 = qu(e), l3 = _r(), s = fl(i3), f3 = vo(l3, s);
      f3.tag = mD, f3.payload = t, a != null && (Jp(a, "replaceState"), f3.callback = a);
      var m3 = rl(i3, f3, s);
      m3 !== null && (Ln(m3, i3, s, l3), Wp(m3, i3, s)), Ph(i3, s);
    }, enqueueForceUpdate: function(e, t) {
      var a = qu(e), i3 = _r(), l3 = fl(a), s = vo(i3, l3);
      s.tag = Vp, t != null && (Jp(t, "forceUpdate"), s.callback = t);
      var f3 = rl(a, s, l3);
      f3 !== null && (Ln(f3, a, l3, i3), Wp(f3, a, l3)), FN(a, l3);
    } };
    function xD(e, t, a, i3, l3, s, f3) {
      var m3 = e.stateNode;
      if (typeof m3.shouldComponentUpdate == "function") {
        var h3 = m3.shouldComponentUpdate(i3, s, f3);
        {
          if (e.mode & mn) {
            jn(true);
            try {
              h3 = m3.shouldComponentUpdate(i3, s, f3);
            } finally {
              jn(false);
            }
          }
          h3 === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ot(t) || "Component");
        }
        return h3;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xc(a, i3) || !Xc(l3, s) : true;
    }
    function r2(e, t, a) {
      var i3 = e.stateNode;
      {
        var l3 = ot(t) || "Component", s = i3.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l3) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l3)), i3.getInitialState && !i3.getInitialState.isReactClassApproved && !i3.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l3), i3.getDefaultProps && !i3.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l3), i3.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l3), i3.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l3), i3.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l3), t.contextType && t.contextTypes && !Dg.has(t) && (Dg.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l3)), typeof i3.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l3), t.prototype && t.prototype.isPureReactComponent && typeof i3.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ot(t) || "A pure component"), typeof i3.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l3), typeof i3.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l3), typeof i3.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l3), typeof i3.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l3);
        var f3 = i3.props !== a;
        i3.props !== void 0 && f3 && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l3, l3), i3.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l3, l3), typeof i3.getSnapshotBeforeUpdate == "function" && typeof i3.componentDidUpdate != "function" && !Sg.has(t) && (Sg.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ot(t))), typeof i3.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l3), typeof i3.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l3), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l3);
        var m3 = i3.state;
        m3 && (typeof m3 != "object" || tt(m3)) && d("%s.state: must be set to an object or null", l3), typeof i3.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l3);
      }
    }
    function DD(e, t) {
      t.updater = Eg, e.stateNode = t, oN(t, e), t._reactInternalInstance = hg;
    }
    function CD(e, t, a) {
      var i3 = false, l3 = pa, s = pa, f3 = t.contextType;
      if ("contextType" in t) {
        var m3 = f3 === null || f3 !== void 0 && f3.$$typeof === ae && f3._context === void 0;
        if (!m3 && !Cg.has(t)) {
          Cg.add(t);
          var h3 = "";
          f3 === void 0 ? h3 = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f3 != "object" ? h3 = " However, it is set to a " + typeof f3 + "." : f3.$$typeof === W ? h3 = " Did you accidentally pass the Context.Provider instead?" : f3._context !== void 0 ? h3 = " Did you accidentally pass the Context.Consumer instead?" : h3 = " However, it is set to an object with keys {" + Object.keys(f3).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ot(t) || "Component", h3);
        }
      }
      if (typeof f3 == "object" && f3 !== null)
        s = hn(f3);
      else {
        l3 = vs(e, t, true);
        var S = t.contextTypes;
        i3 = S != null, s = i3 ? ms(e, l3) : pa;
      }
      var w = new t(a, s);
      if (e.mode & mn) {
        jn(true);
        try {
          w = new t(a, s);
        } finally {
          jn(false);
        }
      }
      var O = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      DD(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var _ = ot(t) || "Component";
          gg.has(_) || (gg.add(_), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, w.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var P = null, z = null, F = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== true ? P = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== true ? z = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== true ? F = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), P !== null || z !== null || F !== null) {
            var de = ot(t) || "Component", De = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            bg.has(de) || (bg.add(de), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, De, P !== null ? `
  ` + P : "", z !== null ? `
  ` + z : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i3 && Xx(e, l3, s), w;
    }
    function a2(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ze(e) || "Component"), Eg.enqueueReplaceState(t, t.state, null));
    }
    function RD(e, t, a, i3) {
      var l3 = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i3), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i3), t.state !== l3) {
        {
          var s = ze(e) || "Component";
          yg.has(s) || (yg.add(s), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Eg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Tg(e, t, a, i3) {
      r2(e, t, a);
      var l3 = e.stateNode;
      l3.props = a, l3.state = e.memoizedState, l3.refs = SD, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l3.context = hn(s);
      else {
        var f3 = vs(e, t, true);
        l3.context = ms(e, f3);
      }
      {
        if (l3.state === a) {
          var m3 = ot(t) || "Component";
          xg.has(m3) || (xg.add(m3), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m3));
        }
        e.mode & mn && ni.recordLegacyContextWarning(e, l3), ni.recordUnsafeLifecycleWarnings(e, l3);
      }
      l3.state = e.memoizedState;
      var h3 = t.getDerivedStateFromProps;
      if (typeof h3 == "function" && (Rg(e, t, h3, a), l3.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l3.getSnapshotBeforeUpdate != "function" && (typeof l3.UNSAFE_componentWillMount == "function" || typeof l3.componentWillMount == "function") && (a2(e, l3), Bp(e, a, l3, i3), l3.state = e.memoizedState), typeof l3.componentDidMount == "function") {
        var S = lt;
        S |= Jl, (e.mode & _i) !== _e && (S |= ro), e.flags |= S;
      }
    }
    function i2(e, t, a, i3) {
      var l3 = e.stateNode, s = e.memoizedProps;
      l3.props = s;
      var f3 = l3.context, m3 = t.contextType, h3 = pa;
      if (typeof m3 == "object" && m3 !== null)
        h3 = hn(m3);
      else {
        var S = vs(e, t, true);
        h3 = ms(e, S);
      }
      var w = t.getDerivedStateFromProps, O = typeof w == "function" || typeof l3.getSnapshotBeforeUpdate == "function";
      !O && (typeof l3.UNSAFE_componentWillReceiveProps == "function" || typeof l3.componentWillReceiveProps == "function") && (s !== a || f3 !== h3) && RD(e, l3, a, h3), yD();
      var _ = e.memoizedState, P = l3.state = _;
      if (Bp(e, a, l3, i3), P = e.memoizedState, s === a && _ === P && !Op() && !Xp()) {
        if (typeof l3.componentDidMount == "function") {
          var z = lt;
          z |= Jl, (e.mode & _i) !== _e && (z |= ro), e.flags |= z;
        }
        return false;
      }
      typeof w == "function" && (Rg(e, t, w, a), P = e.memoizedState);
      var F = Xp() || xD(e, t, s, a, _, P, h3);
      if (F) {
        if (!O && (typeof l3.UNSAFE_componentWillMount == "function" || typeof l3.componentWillMount == "function") && (typeof l3.componentWillMount == "function" && l3.componentWillMount(), typeof l3.UNSAFE_componentWillMount == "function" && l3.UNSAFE_componentWillMount()), typeof l3.componentDidMount == "function") {
          var de = lt;
          de |= Jl, (e.mode & _i) !== _e && (de |= ro), e.flags |= de;
        }
      } else {
        if (typeof l3.componentDidMount == "function") {
          var De = lt;
          De |= Jl, (e.mode & _i) !== _e && (De |= ro), e.flags |= De;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return l3.props = a, l3.state = P, l3.context = h3, F;
    }
    function o2(e, t, a, i3, l3) {
      var s = t.stateNode;
      hD(e, t);
      var f3 = t.memoizedProps, m3 = t.type === t.elementType ? f3 : ri(t.type, f3);
      s.props = m3;
      var h3 = t.pendingProps, S = s.context, w = a.contextType, O = pa;
      if (typeof w == "object" && w !== null)
        O = hn(w);
      else {
        var _ = vs(t, a, true);
        O = ms(t, _);
      }
      var P = a.getDerivedStateFromProps, z = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f3 !== h3 || S !== O) && RD(t, s, i3, O), yD();
      var F = t.memoizedState, de = s.state = F;
      if (Bp(t, i3, s, l3), de = t.memoizedState, f3 === h3 && F === de && !Op() && !Xp() && !bn)
        return typeof s.componentDidUpdate == "function" && (f3 !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f3 !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Bl), false;
      typeof P == "function" && (Rg(t, a, P, i3), de = t.memoizedState);
      var De = Xp() || xD(t, a, m3, i3, F, de, O) || bn;
      return De ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i3, de, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i3, de, O)), typeof s.componentDidUpdate == "function" && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Bl)) : (typeof s.componentDidUpdate == "function" && (f3 !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f3 !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Bl), t.memoizedProps = i3, t.memoizedState = de), s.props = i3, s.state = de, s.context = O, De;
    }
    var kg, _g, Og, Ng, Lg, ED = function(e, t) {
    };
    kg = false, _g = false, Og = {}, Ng = {}, Lg = {}, ED = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = true;
        var a = ze(t) || "Component";
        Ng[a] || (Ng[a] = true, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function hf(e, t, a) {
      var i3 = a.ref;
      if (i3 !== null && typeof i3 != "function" && typeof i3 != "object") {
        if ((e.mode & mn || Qe) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l3 = ze(e) || "Component";
          Og[l3] || (d('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i3), Og[l3] = true);
        }
        if (a._owner) {
          var s = a._owner, f3;
          if (s) {
            var m3 = s;
            if (m3.tag !== T)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f3 = m3.stateNode;
          }
          if (!f3)
            throw new Error("Missing owner for string ref " + i3 + ". This error is likely caused by a bug in React. Please file an issue.");
          var h3 = f3;
          Yn(i3, "ref");
          var S = "" + i3;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var w = function(O) {
            var _ = h3.refs;
            _ === SD && (_ = h3.refs = {}), O === null ? delete _[S] : _[S] = O;
          };
          return w._stringRef = S, w;
        } else {
          if (typeof i3 != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i3 + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i3;
    }
    function Gp(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function qp(e) {
      {
        var t = ze(e) || "Component";
        if (Lg[t])
          return;
        Lg[t] = true, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TD(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kD(e) {
      function t(I, Y) {
        if (e) {
          var $ = I.deletions;
          $ === null ? (I.deletions = [Y], I.flags |= Wl) : $.push(Y);
        }
      }
      function a(I, Y) {
        if (!e)
          return null;
        for (var $ = Y; $ !== null; )
          t(I, $), $ = $.sibling;
        return null;
      }
      function i3(I, Y) {
        for (var $ = /* @__PURE__ */ new Map(), Z = Y; Z !== null; )
          Z.key !== null ? $.set(Z.key, Z) : $.set(Z.index, Z), Z = Z.sibling;
        return $;
      }
      function l3(I, Y) {
        var $ = bu(I, Y);
        return $.index = 0, $.sibling = null, $;
      }
      function s(I, Y, $) {
        if (I.index = $, !e)
          return I.flags |= mw, Y;
        var Z = I.alternate;
        if (Z !== null) {
          var me = Z.index;
          return me < Y ? (I.flags |= vn, Y) : me;
        } else
          return I.flags |= vn, Y;
      }
      function f3(I) {
        return e && I.alternate === null && (I.flags |= vn), I;
      }
      function m3(I, Y, $, Z) {
        if (Y === null || Y.tag !== J) {
          var me = oS($, I.mode, Z);
          return me.return = I, me;
        } else {
          var ce = l3(Y, $);
          return ce.return = I, ce;
        }
      }
      function h3(I, Y, $, Z) {
        var me = $.type;
        if (me === ra)
          return w(I, Y, $.props.children, Z, $.key);
        if (Y !== null && (Y.elementType === me || SR(Y, $) || typeof me == "object" && me !== null && me.$$typeof === Ce && TD(me) === Y.type)) {
          var ce = l3(Y, $.props);
          return ce.ref = hf(I, Y, $), ce.return = I, ce._debugSource = $._source, ce._debugOwner = $._owner, ce;
        }
        var Ne = iS($, I.mode, Z);
        return Ne.ref = hf(I, Y, $), Ne.return = I, Ne;
      }
      function S(I, Y, $, Z) {
        if (Y === null || Y.tag !== j2 || Y.stateNode.containerInfo !== $.containerInfo || Y.stateNode.implementation !== $.implementation) {
          var me = lS($, I.mode, Z);
          return me.return = I, me;
        } else {
          var ce = l3(Y, $.children || []);
          return ce.return = I, ce;
        }
      }
      function w(I, Y, $, Z, me) {
        if (Y === null || Y.tag !== ie) {
          var ce = pl($, I.mode, Z, me);
          return ce.return = I, ce;
        } else {
          var Ne = l3(Y, $);
          return Ne.return = I, Ne;
        }
      }
      function O(I, Y, $) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var Z = oS("" + Y, I.mode, $);
          return Z.return = I, Z;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Ra: {
              var me = iS(Y, I.mode, $);
              return me.ref = hf(I, null, Y), me.return = I, me;
            }
            case na: {
              var ce = lS(Y, I.mode, $);
              return ce.return = I, ce;
            }
            case Ce: {
              var Ne = Y._payload, je = Y._init;
              return O(I, je(Ne), $);
            }
          }
          if (tt(Y) || Wa(Y)) {
            var kt = pl(Y, I.mode, $, null);
            return kt.return = I, kt;
          }
          Gp(I, Y);
        }
        return typeof Y == "function" && qp(I), null;
      }
      function _(I, Y, $, Z) {
        var me = Y !== null ? Y.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return me !== null ? null : m3(I, Y, "" + $, Z);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Ra:
              return $.key === me ? h3(I, Y, $, Z) : null;
            case na:
              return $.key === me ? S(I, Y, $, Z) : null;
            case Ce: {
              var ce = $._payload, Ne = $._init;
              return _(I, Y, Ne(ce), Z);
            }
          }
          if (tt($) || Wa($))
            return me !== null ? null : w(I, Y, $, Z, null);
          Gp(I, $);
        }
        return typeof $ == "function" && qp(I), null;
      }
      function P(I, Y, $, Z, me) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ce = I.get($) || null;
          return m3(Y, ce, "" + Z, me);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Ra: {
              var Ne = I.get(Z.key === null ? $ : Z.key) || null;
              return h3(Y, Ne, Z, me);
            }
            case na: {
              var je = I.get(Z.key === null ? $ : Z.key) || null;
              return S(Y, je, Z, me);
            }
            case Ce:
              var kt = Z._payload, mt = Z._init;
              return P(I, Y, $, mt(kt), me);
          }
          if (tt(Z) || Wa(Z)) {
            var sn = I.get($) || null;
            return w(Y, sn, Z, me, null);
          }
          Gp(Y, Z);
        }
        return typeof Z == "function" && qp(Y), null;
      }
      function z(I, Y, $) {
        {
          if (typeof I != "object" || I === null)
            return Y;
          switch (I.$$typeof) {
            case Ra:
            case na:
              ED(I, $);
              var Z = I.key;
              if (typeof Z != "string")
                break;
              if (Y === null) {
                Y = /* @__PURE__ */ new Set(), Y.add(Z);
                break;
              }
              if (!Y.has(Z)) {
                Y.add(Z);
                break;
              }
              d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", Z);
              break;
            case Ce:
              var me = I._payload, ce = I._init;
              z(ce(me), Y, $);
              break;
          }
        }
        return Y;
      }
      function F(I, Y, $, Z) {
        for (var me = null, ce = 0; ce < $.length; ce++) {
          var Ne = $[ce];
          me = z(Ne, me, I);
        }
        for (var je = null, kt = null, mt = Y, sn = 0, ht = 0, rn = null; mt !== null && ht < $.length; ht++) {
          mt.index > ht ? (rn = mt, mt = null) : rn = mt.sibling;
          var dr = _(I, mt, $[ht], Z);
          if (dr === null) {
            mt === null && (mt = rn);
            break;
          }
          e && mt && dr.alternate === null && t(I, mt), sn = s(dr, sn, ht), kt === null ? je = dr : kt.sibling = dr, kt = dr, mt = rn;
        }
        if (ht === $.length) {
          if (a(I, mt), Xn()) {
            var tr = ht;
            lu(I, tr);
          }
          return je;
        }
        if (mt === null) {
          for (; ht < $.length; ht++) {
            var ma = O(I, $[ht], Z);
            ma !== null && (sn = s(ma, sn, ht), kt === null ? je = ma : kt.sibling = ma, kt = ma);
          }
          if (Xn()) {
            var Or = ht;
            lu(I, Or);
          }
          return je;
        }
        for (var Nr = i3(I, mt); ht < $.length; ht++) {
          var pr = P(Nr, I, ht, $[ht], Z);
          pr !== null && (e && pr.alternate !== null && Nr.delete(pr.key === null ? ht : pr.key), sn = s(pr, sn, ht), kt === null ? je = pr : kt.sibling = pr, kt = pr);
        }
        if (e && Nr.forEach(function(As) {
          return t(I, As);
        }), Xn()) {
          var bo = ht;
          lu(I, bo);
        }
        return je;
      }
      function de(I, Y, $, Z) {
        var me = Wa($);
        if (typeof me != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && $[Symbol.toStringTag] === "Generator" && (_g || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _g = true), $.entries === me && (kg || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), kg = true);
          var ce = me.call($);
          if (ce)
            for (var Ne = null, je = ce.next(); !je.done; je = ce.next()) {
              var kt = je.value;
              Ne = z(kt, Ne, I);
            }
        }
        var mt = me.call($);
        if (mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var sn = null, ht = null, rn = Y, dr = 0, tr = 0, ma = null, Or = mt.next(); rn !== null && !Or.done; tr++, Or = mt.next()) {
          rn.index > tr ? (ma = rn, rn = null) : ma = rn.sibling;
          var Nr = _(I, rn, Or.value, Z);
          if (Nr === null) {
            rn === null && (rn = ma);
            break;
          }
          e && rn && Nr.alternate === null && t(I, rn), dr = s(Nr, dr, tr), ht === null ? sn = Nr : ht.sibling = Nr, ht = Nr, rn = ma;
        }
        if (Or.done) {
          if (a(I, rn), Xn()) {
            var pr = tr;
            lu(I, pr);
          }
          return sn;
        }
        if (rn === null) {
          for (; !Or.done; tr++, Or = mt.next()) {
            var bo = O(I, Or.value, Z);
            bo !== null && (dr = s(bo, dr, tr), ht === null ? sn = bo : ht.sibling = bo, ht = bo);
          }
          if (Xn()) {
            var As = tr;
            lu(I, As);
          }
          return sn;
        }
        for (var Wf = i3(I, rn); !Or.done; tr++, Or = mt.next()) {
          var Pi = P(Wf, I, tr, Or.value, Z);
          Pi !== null && (e && Pi.alternate !== null && Wf.delete(Pi.key === null ? tr : Pi.key), dr = s(Pi, dr, tr), ht === null ? sn = Pi : ht.sibling = Pi, ht = Pi);
        }
        if (e && Wf.forEach(function(Rz) {
          return t(I, Rz);
        }), Xn()) {
          var Cz = tr;
          lu(I, Cz);
        }
        return sn;
      }
      function De(I, Y, $, Z) {
        if (Y !== null && Y.tag === J) {
          a(I, Y.sibling);
          var me = l3(Y, $);
          return me.return = I, me;
        }
        a(I, Y);
        var ce = oS($, I.mode, Z);
        return ce.return = I, ce;
      }
      function Se(I, Y, $, Z) {
        for (var me = $.key, ce = Y; ce !== null; ) {
          if (ce.key === me) {
            var Ne = $.type;
            if (Ne === ra) {
              if (ce.tag === ie) {
                a(I, ce.sibling);
                var je = l3(ce, $.props.children);
                return je.return = I, je._debugSource = $._source, je._debugOwner = $._owner, je;
              }
            } else if (ce.elementType === Ne || SR(ce, $) || typeof Ne == "object" && Ne !== null && Ne.$$typeof === Ce && TD(Ne) === ce.type) {
              a(I, ce.sibling);
              var kt = l3(ce, $.props);
              return kt.ref = hf(I, ce, $), kt.return = I, kt._debugSource = $._source, kt._debugOwner = $._owner, kt;
            }
            a(I, ce);
            break;
          } else
            t(I, ce);
          ce = ce.sibling;
        }
        if ($.type === ra) {
          var mt = pl($.props.children, I.mode, Z, $.key);
          return mt.return = I, mt;
        } else {
          var sn = iS($, I.mode, Z);
          return sn.ref = hf(I, Y, $), sn.return = I, sn;
        }
      }
      function qe(I, Y, $, Z) {
        for (var me = $.key, ce = Y; ce !== null; ) {
          if (ce.key === me)
            if (ce.tag === j2 && ce.stateNode.containerInfo === $.containerInfo && ce.stateNode.implementation === $.implementation) {
              a(I, ce.sibling);
              var Ne = l3(ce, $.children || []);
              return Ne.return = I, Ne;
            } else {
              a(I, ce);
              break;
            }
          else
            t(I, ce);
          ce = ce.sibling;
        }
        var je = lS($, I.mode, Z);
        return je.return = I, je;
      }
      function Ke(I, Y, $, Z) {
        var me = typeof $ == "object" && $ !== null && $.type === ra && $.key === null;
        if (me && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Ra:
              return f3(Se(I, Y, $, Z));
            case na:
              return f3(qe(I, Y, $, Z));
            case Ce:
              var ce = $._payload, Ne = $._init;
              return Ke(I, Y, Ne(ce), Z);
          }
          if (tt($))
            return F(I, Y, $, Z);
          if (Wa($))
            return de(I, Y, $, Z);
          Gp(I, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? f3(De(I, Y, "" + $, Z)) : (typeof $ == "function" && qp(I), a(I, Y));
      }
      return Ke;
    }
    var ws = kD(true), _D = kD(false);
    function l2(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i3 = bu(a, a.pendingProps);
        for (t.child = i3, i3.return = t; a.sibling !== null; )
          a = a.sibling, i3 = i3.sibling = bu(a, a.pendingProps), i3.return = t;
        i3.sibling = null;
      }
    }
    function u2(e, t) {
      for (var a = e.child; a !== null; )
        FA(a, t), a = a.sibling;
    }
    var yf = {}, al = Zo(yf), gf = Zo(yf), Kp = Zo(yf);
    function Zp(e) {
      if (e === yf)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OD() {
      var e = Zp(Kp.current);
      return e;
    }
    function Ug(e, t) {
      cr(Kp, t, e), cr(gf, e, e), cr(al, yf, e);
      var a = xI(t);
      sr(al, e), cr(al, a, e);
    }
    function xs(e) {
      sr(al, e), sr(gf, e), sr(Kp, e);
    }
    function Ig() {
      var e = Zp(al.current);
      return e;
    }
    function ND(e) {
      var t = Zp(Kp.current), a = Zp(al.current), i3 = DI(a, e.type);
      a !== i3 && (cr(gf, e, e), cr(al, i3, e));
    }
    function $g(e) {
      gf.current === e && (sr(al, e), sr(gf, e));
    }
    var s2 = 0, LD = 1, UD = 1, Sf = 2, ai = Zo(s2);
    function Mg(e, t) {
      return (e & t) !== 0;
    }
    function Ds(e) {
      return e & LD;
    }
    function Ag(e, t) {
      return e & LD | t;
    }
    function c2(e, t) {
      return e | t;
    }
    function il(e, t) {
      cr(ai, t, e);
    }
    function Cs(e) {
      sr(ai, e);
    }
    function f2(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var i3 = e.memoizedProps;
      return true;
    }
    function ev(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === X) {
          var a = t.memoizedState;
          if (a !== null) {
            var i3 = a.dehydrated;
            if (i3 === null || Vx(i3) || Vy(i3))
              return t;
          }
        } else if (t.tag === dt && t.memoizedProps.revealOrder !== void 0) {
          var l3 = (t.flags & gt) !== ke;
          if (l3)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Yr = 0, Rn = 1, Ui = 2, En = 4, Jn = 8, zg = [];
    function jg() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function d2(e, t) {
      var a = t._getVersion, i3 = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i3] : e.mutableSourceEagerHydrationData.push(t, i3);
    }
    var pe = o.ReactCurrentDispatcher, bf = o.ReactCurrentBatchConfig, Pg, Rs;
    Pg = /* @__PURE__ */ new Set();
    var pu = G, Tt = null, Tn = null, kn = null, tv = false, wf = false, xf = 0, p2 = 0, v2 = 25, B = null, La = null, ol = -1, Hg = false;
    function wt() {
      {
        var e = B;
        La === null ? La = [e] : La.push(e);
      }
    }
    function le() {
      {
        var e = B;
        La !== null && (ol++, La[ol] !== e && m2(e));
      }
    }
    function Es(e) {
      e != null && !tt(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function m2(e) {
      {
        var t = ze(Tt);
        if (!Pg.has(t) && (Pg.add(t), La !== null)) {
          for (var a = "", i3 = 30, l3 = 0; l3 <= ol; l3++) {
            for (var s = La[l3], f3 = l3 === ol ? e : s, m3 = l3 + 1 + ". " + s; m3.length < i3; )
              m3 += " ";
            m3 += f3 + `
`, a += m3;
          }
          d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Fg(e, t) {
      if (Hg)
        return false;
      if (t === null)
        return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), false;
      e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!da(e[a], t[a]))
          return false;
      return true;
    }
    function Ts(e, t, a, i3, l3, s) {
      pu = s, Tt = t, La = e !== null ? e._debugHookTypes : null, ol = -1, Hg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = G, e !== null && e.memoizedState !== null ? pe.current = tC : La !== null ? pe.current = eC : pe.current = ZD;
      var f3 = a(i3, l3);
      if (wf) {
        var m3 = 0;
        do {
          if (wf = false, xf = 0, m3 >= v2)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m3 += 1, Hg = false, Tn = null, kn = null, t.updateQueue = null, ol = -1, pe.current = nC, f3 = a(i3, l3);
        } while (wf);
      }
      pe.current = vv, t._debugHookTypes = La;
      var h3 = Tn !== null && Tn.next !== null;
      if (pu = G, Tt = null, Tn = null, kn = null, B = null, La = null, ol = -1, e !== null && (e.flags & ao) !== (t.flags & ao) && (e.mode & nt) !== _e && d("Internal React error: Expected static flag was missing. Please notify the React team."), tv = false, h3)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f3;
    }
    function ks() {
      var e = xf !== 0;
      return xf = 0, e;
    }
    function ID(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & _i) !== _e ? t.flags &= ~(Xd | ro | qa | lt) : t.flags &= ~(qa | lt), e.lanes = tp(e.lanes, a);
    }
    function $D() {
      if (pe.current = vv, tv) {
        for (var e = Tt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tv = false;
      }
      pu = G, Tt = null, Tn = null, kn = null, La = null, ol = -1, B = null, XD = false, wf = false, xf = 0;
    }
    function Ii() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return kn === null ? Tt.memoizedState = kn = e : kn = kn.next = e, kn;
    }
    function Ua() {
      var e;
      if (Tn === null) {
        var t = Tt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Tn.next;
      var a;
      if (kn === null ? a = Tt.memoizedState : a = kn.next, a !== null)
        kn = a, a = kn.next, Tn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Tn = e;
        var i3 = { memoizedState: Tn.memoizedState, baseState: Tn.baseState, baseQueue: Tn.baseQueue, queue: Tn.queue, next: null };
        kn === null ? Tt.memoizedState = kn = i3 : kn = kn.next = i3;
      }
      return kn;
    }
    function MD() {
      return { lastEffect: null, stores: null };
    }
    function Vg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Yg(e, t, a) {
      var i3 = Ii(), l3;
      a !== void 0 ? l3 = a(t) : l3 = t, i3.memoizedState = i3.baseState = l3;
      var s = { pending: null, interleaved: null, lanes: G, dispatch: null, lastRenderedReducer: e, lastRenderedState: l3 };
      i3.queue = s;
      var f3 = s.dispatch = S2.bind(null, Tt, s);
      return [i3.memoizedState, f3];
    }
    function Qg(e, t, a) {
      var i3 = Ua(), l3 = i3.queue;
      if (l3 === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l3.lastRenderedReducer = e;
      var s = Tn, f3 = s.baseQueue, m3 = l3.pending;
      if (m3 !== null) {
        if (f3 !== null) {
          var h3 = f3.next, S = m3.next;
          f3.next = S, m3.next = h3;
        }
        s.baseQueue !== f3 && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f3 = m3, l3.pending = null;
      }
      if (f3 !== null) {
        var w = f3.next, O = s.baseState, _ = null, P = null, z = null, F = w;
        do {
          var de = F.lane;
          if (as(pu, de)) {
            if (z !== null) {
              var Se = { lane: Pn, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null };
              z = z.next = Se;
            }
            if (F.hasEagerState)
              O = F.eagerState;
            else {
              var qe = F.action;
              O = e(O, qe);
            }
          } else {
            var De = { lane: de, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null };
            z === null ? (P = z = De, _ = O) : z = z.next = De, Tt.lanes = Ye(Tt.lanes, de), Hf(de);
          }
          F = F.next;
        } while (F !== null && F !== w);
        z === null ? _ = O : z.next = P, da(O, i3.memoizedState) || _f(), i3.memoizedState = O, i3.baseState = _, i3.baseQueue = z, l3.lastRenderedState = O;
      }
      var Ke = l3.interleaved;
      if (Ke !== null) {
        var I = Ke;
        do {
          var Y = I.lane;
          Tt.lanes = Ye(Tt.lanes, Y), Hf(Y), I = I.next;
        } while (I !== Ke);
      } else
        f3 === null && (l3.lanes = G);
      var $ = l3.dispatch;
      return [i3.memoizedState, $];
    }
    function Wg(e, t, a) {
      var i3 = Ua(), l3 = i3.queue;
      if (l3 === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l3.lastRenderedReducer = e;
      var s = l3.dispatch, f3 = l3.pending, m3 = i3.memoizedState;
      if (f3 !== null) {
        l3.pending = null;
        var h3 = f3.next, S = h3;
        do {
          var w = S.action;
          m3 = e(m3, w), S = S.next;
        } while (S !== h3);
        da(m3, i3.memoizedState) || _f(), i3.memoizedState = m3, i3.baseQueue === null && (i3.baseState = m3), l3.lastRenderedState = m3;
      }
      return [m3, s];
    }
    function X4(e, t, a) {
    }
    function J4(e, t, a) {
    }
    function Bg(e, t, a) {
      var i3 = Tt, l3 = Ii(), s, f3 = Xn();
      if (f3) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Rs || s !== a() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Rs = true);
      } else {
        if (s = t(), !Rs) {
          var m3 = t();
          da(s, m3) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Rs = true);
        }
        var h3 = Lv();
        if (h3 === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ep(h3, pu) || AD(i3, t, s);
      }
      l3.memoizedState = s;
      var S = { value: s, getSnapshot: t };
      return l3.queue = S, ov(jD.bind(null, i3, S, e), [e]), i3.flags |= qa, Df(Rn | Jn, zD.bind(null, i3, S, s, t), void 0, null), s;
    }
    function nv(e, t, a) {
      var i3 = Tt, l3 = Ua(), s = t();
      if (!Rs) {
        var f3 = t();
        da(s, f3) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Rs = true);
      }
      var m3 = l3.memoizedState, h3 = !da(m3, s);
      h3 && (l3.memoizedState = s, _f());
      var S = l3.queue;
      if (Rf(jD.bind(null, i3, S, e), [e]), S.getSnapshot !== t || h3 || kn !== null && kn.memoizedState.tag & Rn) {
        i3.flags |= qa, Df(Rn | Jn, zD.bind(null, i3, S, s, t), void 0, null);
        var w = Lv();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ep(w, pu) || AD(i3, t, s);
      }
      return s;
    }
    function AD(e, t, a) {
      e.flags |= Bd;
      var i3 = { getSnapshot: t, value: a }, l3 = Tt.updateQueue;
      if (l3 === null)
        l3 = MD(), Tt.updateQueue = l3, l3.stores = [i3];
      else {
        var s = l3.stores;
        s === null ? l3.stores = [i3] : s.push(i3);
      }
    }
    function zD(e, t, a, i3) {
      t.value = a, t.getSnapshot = i3, PD(t) && HD(e);
    }
    function jD(e, t, a) {
      var i3 = function() {
        PD(t) && HD(e);
      };
      return a(i3);
    }
    function PD(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i3 = t();
        return !da(a, i3);
      } catch {
        return true;
      }
    }
    function HD(e) {
      var t = Vr(e, Ie);
      t !== null && Ln(t, e, Ie, jt);
    }
    function rv(e) {
      var t = Ii();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = { pending: null, interleaved: null, lanes: G, dispatch: null, lastRenderedReducer: Vg, lastRenderedState: e };
      t.queue = a;
      var i3 = a.dispatch = b2.bind(null, Tt, a);
      return [t.memoizedState, i3];
    }
    function Xg(e) {
      return Qg(Vg);
    }
    function Jg(e) {
      return Wg(Vg);
    }
    function Df(e, t, a, i3) {
      var l3 = { tag: e, create: t, destroy: a, deps: i3, next: null }, s = Tt.updateQueue;
      if (s === null)
        s = MD(), Tt.updateQueue = s, s.lastEffect = l3.next = l3;
      else {
        var f3 = s.lastEffect;
        if (f3 === null)
          s.lastEffect = l3.next = l3;
        else {
          var m3 = f3.next;
          f3.next = l3, l3.next = m3, s.lastEffect = l3;
        }
      }
      return l3;
    }
    function Gg(e) {
      var t = Ii();
      {
        var a = { current: e };
        return t.memoizedState = a, a;
      }
    }
    function av(e) {
      var t = Ua();
      return t.memoizedState;
    }
    function Cf(e, t, a, i3) {
      var l3 = Ii(), s = i3 === void 0 ? null : i3;
      Tt.flags |= e, l3.memoizedState = Df(Rn | t, a, void 0, s);
    }
    function iv(e, t, a, i3) {
      var l3 = Ua(), s = i3 === void 0 ? null : i3, f3 = void 0;
      if (Tn !== null) {
        var m3 = Tn.memoizedState;
        if (f3 = m3.destroy, s !== null) {
          var h3 = m3.deps;
          if (Fg(s, h3)) {
            l3.memoizedState = Df(t, a, f3, s);
            return;
          }
        }
      }
      Tt.flags |= e, l3.memoizedState = Df(Rn | t, a, f3, s);
    }
    function ov(e, t) {
      return (Tt.mode & _i) !== _e ? Cf(Xd | qa | $h, Jn, e, t) : Cf(qa | $h, Jn, e, t);
    }
    function Rf(e, t) {
      return iv(qa, Jn, e, t);
    }
    function qg(e, t) {
      return Cf(lt, Ui, e, t);
    }
    function lv(e, t) {
      return iv(lt, Ui, e, t);
    }
    function Kg(e, t) {
      var a = lt;
      return a |= Jl, (Tt.mode & _i) !== _e && (a |= ro), Cf(a, En, e, t);
    }
    function uv(e, t) {
      return iv(lt, En, e, t);
    }
    function FD(e, t) {
      if (typeof t == "function") {
        var a = t, i3 = e();
        return a(i3), function() {
          a(null);
        };
      } else if (t != null) {
        var l3 = t;
        l3.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l3).join(", ") + "}");
        var s = e();
        return l3.current = s, function() {
          l3.current = null;
        };
      }
    }
    function Zg(e, t, a) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i3 = a != null ? a.concat([e]) : null, l3 = lt;
      return l3 |= Jl, (Tt.mode & _i) !== _e && (l3 |= ro), Cf(l3, En, FD.bind(null, t, e), i3);
    }
    function sv(e, t, a) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i3 = a != null ? a.concat([e]) : null;
      return iv(lt, En, FD.bind(null, t, e), i3);
    }
    function h2(e, t) {
    }
    var cv = h2;
    function e0(e, t) {
      var a = Ii(), i3 = t === void 0 ? null : t;
      return a.memoizedState = [e, i3], e;
    }
    function fv(e, t) {
      var a = Ua(), i3 = t === void 0 ? null : t, l3 = a.memoizedState;
      if (l3 !== null && i3 !== null) {
        var s = l3[1];
        if (Fg(i3, s))
          return l3[0];
      }
      return a.memoizedState = [e, i3], e;
    }
    function t0(e, t) {
      var a = Ii(), i3 = t === void 0 ? null : t, l3 = e();
      return a.memoizedState = [l3, i3], l3;
    }
    function dv(e, t) {
      var a = Ua(), i3 = t === void 0 ? null : t, l3 = a.memoizedState;
      if (l3 !== null && i3 !== null) {
        var s = l3[1];
        if (Fg(i3, s))
          return l3[0];
      }
      var f3 = e();
      return a.memoizedState = [f3, i3], f3;
    }
    function n0(e) {
      var t = Ii();
      return t.memoizedState = e, e;
    }
    function VD(e) {
      var t = Ua(), a = Tn, i3 = a.memoizedState;
      return QD(t, i3, e);
    }
    function YD(e) {
      var t = Ua();
      if (Tn === null)
        return t.memoizedState = e, e;
      var a = Tn.memoizedState;
      return QD(t, a, e);
    }
    function QD(e, t, a) {
      var i3 = !KN(pu);
      if (i3) {
        if (!da(a, t)) {
          var l3 = Iw();
          Tt.lanes = Ye(Tt.lanes, l3), Hf(l3), e.baseState = true;
        }
        return t;
      } else
        return e.baseState && (e.baseState = false, _f()), e.memoizedState = a, a;
    }
    function y2(e, t, a) {
      var i3 = Za();
      Hn(lL(i3, oo)), e(true);
      var l3 = bf.transition;
      bf.transition = {};
      var s = bf.transition;
      bf.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(false), t();
      } finally {
        if (Hn(i3), bf.transition = l3, l3 === null && s._updatedFibers) {
          var f3 = s._updatedFibers.size;
          f3 > 10 && p("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function r0() {
      var e = rv(false), t = e[0], a = e[1], i3 = y2.bind(null, a), l3 = Ii();
      return l3.memoizedState = i3, [t, i3];
    }
    function WD() {
      var e = Xg(), t = e[0], a = Ua(), i3 = a.memoizedState;
      return [t, i3];
    }
    function BD() {
      var e = Jg(), t = e[0], a = Ua(), i3 = a.memoizedState;
      return [t, i3];
    }
    var XD = false;
    function g22() {
      return XD;
    }
    function a0() {
      var e = Ii(), t = Lv(), a = t.identifierPrefix, i3;
      if (Xn()) {
        var l3 = L$();
        i3 = ":" + a + "R" + l3;
        var s = xf++;
        s > 0 && (i3 += "H" + s.toString(32)), i3 += ":";
      } else {
        var f3 = p2++;
        i3 = ":" + a + "r" + f3.toString(32) + ":";
      }
      return e.memoizedState = i3, i3;
    }
    function pv() {
      var e = Ua(), t = e.memoizedState;
      return t;
    }
    function S2(e, t, a) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i3 = fl(e), l3 = { lane: i3, action: a, hasEagerState: false, eagerState: null, next: null };
      if (JD(e))
        GD(t, l3);
      else {
        var s = pD(e, t, l3, i3);
        if (s !== null) {
          var f3 = _r();
          Ln(s, e, i3, f3), qD(s, t, i3);
        }
      }
      KD(e, i3);
    }
    function b2(e, t, a) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i3 = fl(e), l3 = { lane: i3, action: a, hasEagerState: false, eagerState: null, next: null };
      if (JD(e))
        GD(t, l3);
      else {
        var s = e.alternate;
        if (e.lanes === G && (s === null || s.lanes === G)) {
          var f3 = t.lastRenderedReducer;
          if (f3 !== null) {
            var m3;
            m3 = pe.current, pe.current = ii;
            try {
              var h3 = t.lastRenderedState, S = f3(h3, a);
              if (l3.hasEagerState = true, l3.eagerState = S, da(S, h3)) {
                K$(e, t, l3, i3);
                return;
              }
            } catch {
            } finally {
              pe.current = m3;
            }
          }
        }
        var w = pD(e, t, l3, i3);
        if (w !== null) {
          var O = _r();
          Ln(w, e, i3, O), qD(w, t, i3);
        }
      }
      KD(e, i3);
    }
    function JD(e) {
      var t = e.alternate;
      return e === Tt || t !== null && t === Tt;
    }
    function GD(e, t) {
      wf = tv = true;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function qD(e, t, a) {
      if (Uw(a)) {
        var i3 = t.lanes;
        i3 = $w(i3, e.pendingLanes);
        var l3 = Ye(i3, a);
        t.lanes = l3, fy(e, l3);
      }
    }
    function KD(e, t, a) {
      Ph(e, t);
    }
    var vv = { readContext: hn, useCallback: fr, useContext: fr, useEffect: fr, useImperativeHandle: fr, useInsertionEffect: fr, useLayoutEffect: fr, useMemo: fr, useReducer: fr, useRef: fr, useState: fr, useDebugValue: fr, useDeferredValue: fr, useTransition: fr, useMutableSource: fr, useSyncExternalStore: fr, useId: fr, unstable_isNewReconciler: at }, ZD = null, eC = null, tC = null, nC = null, $i = null, ii = null, mv = null;
    {
      var i0 = function() {
        d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, $e = function() {
        d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      ZD = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", wt(), Es(t), e0(e, t);
      }, useContext: function(e) {
        return B = "useContext", wt(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", wt(), Es(t), ov(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", wt(), Es(a), Zg(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", wt(), Es(t), qg(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", wt(), Es(t), Kg(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", wt(), Es(t);
        var a = pe.current;
        pe.current = $i;
        try {
          return t0(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", wt();
        var i3 = pe.current;
        pe.current = $i;
        try {
          return Yg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", wt(), Gg(e);
      }, useState: function(e) {
        B = "useState", wt();
        var t = pe.current;
        pe.current = $i;
        try {
          return rv(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", wt(), void 0;
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", wt(), n0(e);
      }, useTransition: function() {
        return B = "useTransition", wt(), r0();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", wt(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", wt(), Bg(e, t, a);
      }, useId: function() {
        return B = "useId", wt(), a0();
      }, unstable_isNewReconciler: at }, eC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", le(), e0(e, t);
      }, useContext: function(e) {
        return B = "useContext", le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", le(), ov(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", le(), Zg(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", le(), qg(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", le(), Kg(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", le();
        var a = pe.current;
        pe.current = $i;
        try {
          return t0(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", le();
        var i3 = pe.current;
        pe.current = $i;
        try {
          return Yg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", le(), Gg(e);
      }, useState: function(e) {
        B = "useState", le();
        var t = pe.current;
        pe.current = $i;
        try {
          return rv(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", le(), void 0;
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", le(), n0(e);
      }, useTransition: function() {
        return B = "useTransition", le(), r0();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", le(), Bg(e, t, a);
      }, useId: function() {
        return B = "useId", le(), a0();
      }, unstable_isNewReconciler: at }, tC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", le(), fv(e, t);
      }, useContext: function(e) {
        return B = "useContext", le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", le(), Rf(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", le(), sv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", le(), lv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", le(), uv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", le();
        var a = pe.current;
        pe.current = ii;
        try {
          return dv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", le();
        var i3 = pe.current;
        pe.current = ii;
        try {
          return Qg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", le(), av();
      }, useState: function(e) {
        B = "useState", le();
        var t = pe.current;
        pe.current = ii;
        try {
          return Xg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", le(), cv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", le(), VD(e);
      }, useTransition: function() {
        return B = "useTransition", le(), WD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", le(), nv(e, t);
      }, useId: function() {
        return B = "useId", le(), pv();
      }, unstable_isNewReconciler: at }, nC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", le(), fv(e, t);
      }, useContext: function(e) {
        return B = "useContext", le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", le(), Rf(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", le(), sv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", le(), lv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", le(), uv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", le();
        var a = pe.current;
        pe.current = mv;
        try {
          return dv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", le();
        var i3 = pe.current;
        pe.current = mv;
        try {
          return Wg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", le(), av();
      }, useState: function(e) {
        B = "useState", le();
        var t = pe.current;
        pe.current = mv;
        try {
          return Jg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", le(), cv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", le(), YD(e);
      }, useTransition: function() {
        return B = "useTransition", le(), BD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", le(), nv(e, t);
      }, useId: function() {
        return B = "useId", le(), pv();
      }, unstable_isNewReconciler: at }, $i = { readContext: function(e) {
        return i0(), hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", $e(), wt(), e0(e, t);
      }, useContext: function(e) {
        return B = "useContext", $e(), wt(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", $e(), wt(), ov(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", $e(), wt(), Zg(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", $e(), wt(), qg(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", $e(), wt(), Kg(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", $e(), wt();
        var a = pe.current;
        pe.current = $i;
        try {
          return t0(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", $e(), wt();
        var i3 = pe.current;
        pe.current = $i;
        try {
          return Yg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", $e(), wt(), Gg(e);
      }, useState: function(e) {
        B = "useState", $e(), wt();
        var t = pe.current;
        pe.current = $i;
        try {
          return rv(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", $e(), wt(), void 0;
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", $e(), wt(), n0(e);
      }, useTransition: function() {
        return B = "useTransition", $e(), wt(), r0();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", $e(), wt(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", $e(), wt(), Bg(e, t, a);
      }, useId: function() {
        return B = "useId", $e(), wt(), a0();
      }, unstable_isNewReconciler: at }, ii = { readContext: function(e) {
        return i0(), hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", $e(), le(), fv(e, t);
      }, useContext: function(e) {
        return B = "useContext", $e(), le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", $e(), le(), Rf(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", $e(), le(), sv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", $e(), le(), lv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", $e(), le(), uv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", $e(), le();
        var a = pe.current;
        pe.current = ii;
        try {
          return dv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", $e(), le();
        var i3 = pe.current;
        pe.current = ii;
        try {
          return Qg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", $e(), le(), av();
      }, useState: function(e) {
        B = "useState", $e(), le();
        var t = pe.current;
        pe.current = ii;
        try {
          return Xg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", $e(), le(), cv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", $e(), le(), VD(e);
      }, useTransition: function() {
        return B = "useTransition", $e(), le(), WD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", $e(), le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", $e(), le(), nv(e, t);
      }, useId: function() {
        return B = "useId", $e(), le(), pv();
      }, unstable_isNewReconciler: at }, mv = { readContext: function(e) {
        return i0(), hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", $e(), le(), fv(e, t);
      }, useContext: function(e) {
        return B = "useContext", $e(), le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", $e(), le(), Rf(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", $e(), le(), sv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", $e(), le(), lv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", $e(), le(), uv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", $e(), le();
        var a = pe.current;
        pe.current = ii;
        try {
          return dv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", $e(), le();
        var i3 = pe.current;
        pe.current = ii;
        try {
          return Wg(e, t, a);
        } finally {
          pe.current = i3;
        }
      }, useRef: function(e) {
        return B = "useRef", $e(), le(), av();
      }, useState: function(e) {
        B = "useState", $e(), le();
        var t = pe.current;
        pe.current = ii;
        try {
          return Jg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", $e(), le(), cv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", $e(), le(), YD(e);
      }, useTransition: function() {
        return B = "useTransition", $e(), le(), BD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", $e(), le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", $e(), le(), nv(e, t);
      }, useId: function() {
        return B = "useId", $e(), le(), pv();
      }, unstable_isNewReconciler: at };
    }
    var ll = r.unstable_now, rC = 0, hv = -1, Ef = -1, yv = -1, o0 = false, gv = false;
    function aC() {
      return o0;
    }
    function w2() {
      gv = true;
    }
    function x2() {
      o0 = false, gv = false;
    }
    function D2() {
      o0 = gv, gv = false;
    }
    function iC() {
      return rC;
    }
    function oC() {
      rC = ll();
    }
    function l0(e) {
      Ef = ll(), e.actualStartTime < 0 && (e.actualStartTime = ll());
    }
    function lC(e) {
      Ef = -1;
    }
    function Sv(e, t) {
      if (Ef >= 0) {
        var a = ll() - Ef;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ef = -1;
      }
    }
    function Mi(e) {
      if (hv >= 0) {
        var t = ll() - hv;
        hv = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i3 = a.stateNode;
              i3.effectDuration += t;
              return;
            case Q:
              var l3 = a.stateNode;
              l3.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function u0(e) {
      if (yv >= 0) {
        var t = ll() - yv;
        yv = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i3 = a.stateNode;
              i3 !== null && (i3.passiveEffectDuration += t);
              return;
            case Q:
              var l3 = a.stateNode;
              l3 !== null && (l3.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ai() {
      hv = ll();
    }
    function s0() {
      yv = ll();
    }
    function c0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vu(e, t) {
      return { value: e, source: t, stack: jl(t), digest: null };
    }
    function f0(e, t, a) {
      return { value: e, source: null, stack: a ?? null, digest: t ?? null };
    }
    function C2(e, t) {
      return true;
    }
    function d0(e, t) {
      try {
        var a = C2(e, t);
        if (a === false)
          return;
        var i3 = t.value, l3 = t.source, s = t.stack, f3 = s !== null ? s : "";
        if (i3 != null && i3._suppressLogging) {
          if (e.tag === T)
            return;
          console.error(i3);
        }
        var m3 = l3 ? ze(l3) : null, h3 = m3 ? "The above error occurred in the <" + m3 + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === U)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = ze(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var O = h3 + `
` + f3 + `

` + ("" + S);
        console.error(O);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var R2 = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i3 = vo(jt, a);
      i3.tag = dg, i3.payload = { element: null };
      var l3 = t.value;
      return i3.callback = function() {
        xA(l3), d0(e, t);
      }, i3;
    }
    function p0(e, t, a) {
      var i3 = vo(jt, a);
      i3.tag = dg;
      var l3 = e.type.getDerivedStateFromError;
      if (typeof l3 == "function") {
        var s = t.value;
        i3.payload = function() {
          return l3(s);
        }, i3.callback = function() {
          bR(e), d0(e, t);
        };
      }
      var f3 = e.stateNode;
      return f3 !== null && typeof f3.componentDidCatch == "function" && (i3.callback = function() {
        bR(e), d0(e, t), typeof l3 != "function" && bA(this);
        var h3 = t.value, S = t.stack;
        this.componentDidCatch(h3, { componentStack: S !== null ? S : "" }), typeof l3 != "function" && (sa(e.lanes, Ie) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ze(e) || "Unknown"));
      }), i3;
    }
    function sC(e, t, a) {
      var i3 = e.pingCache, l3;
      if (i3 === null ? (i3 = e.pingCache = new R2(), l3 = /* @__PURE__ */ new Set(), i3.set(t, l3)) : (l3 = i3.get(t), l3 === void 0 && (l3 = /* @__PURE__ */ new Set(), i3.set(t, l3))), !l3.has(a)) {
        l3.add(a);
        var s = DA.bind(null, e, t, a);
        Ka && Ff(e, a), t.then(s, s);
      }
    }
    function E2(e, t, a, i3) {
      var l3 = e.updateQueue;
      if (l3 === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l3.add(a);
    }
    function T2(e, t) {
      var a = e.tag;
      if ((e.mode & nt) === _e && (a === x || a === k2 || a === ee)) {
        var i3 = e.alternate;
        i3 ? (e.updateQueue = i3.updateQueue, e.memoizedState = i3.memoizedState, e.lanes = i3.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cC(e) {
      var t = e;
      do {
        if (t.tag === X && f2(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fC(e, t, a, i3, l3) {
      if ((e.mode & nt) === _e) {
        if (e === t)
          e.flags |= Er;
        else {
          if (e.flags |= gt, a.flags |= Uh, a.flags &= ~(lN | Rc), a.tag === T) {
            var s = a.alternate;
            if (s === null)
              a.tag = Me;
            else {
              var f3 = vo(jt, Ie);
              f3.tag = Vp, rl(a, f3, Ie);
            }
          }
          a.lanes = Ye(a.lanes, Ie);
        }
        return e;
      }
      return e.flags |= Er, e.lanes = l3, e;
    }
    function k22(e, t, a, i3, l3) {
      if (a.flags |= Rc, Ka && Ff(e, l3), i3 !== null && typeof i3 == "object" && typeof i3.then == "function") {
        var s = i3;
        T2(a), Xn() && a.mode & nt && tD();
        var f3 = cC(t);
        if (f3 !== null) {
          f3.flags &= ~to, fC(f3, t, a, e, l3), f3.mode & nt && sC(e, s, l3), E2(f3, e, s);
          return;
        } else {
          if (!qN(l3)) {
            sC(e, s, l3), B0();
            return;
          }
          var m3 = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i3 = m3;
        }
      } else if (Xn() && a.mode & nt) {
        tD();
        var h3 = cC(t);
        if (h3 !== null) {
          (h3.flags & Er) === ke && (h3.flags |= to), fC(h3, t, a, e, l3), ig(vu(i3, a));
          return;
        }
      }
      i3 = vu(i3, a), dA(i3);
      var S = t;
      do {
        switch (S.tag) {
          case U: {
            var w = i3;
            S.flags |= Er;
            var O = Uc(l3);
            S.lanes = Ye(S.lanes, O);
            var _ = uC(S, w, O);
            mg(S, _);
            return;
          }
          case T:
            var P = i3, z = S.type, F = S.stateNode;
            if ((S.flags & gt) === ke && (typeof z.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !fR(F))) {
              S.flags |= Er;
              var de = Uc(l3);
              S.lanes = Ye(S.lanes, de);
              var De = p0(S, P, de);
              mg(S, De);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function _2() {
      return null;
    }
    var Tf = o.ReactCurrentOwner, oi = false, v0, kf, m0, h0, y0, mu, g0, bv;
    v0 = {}, kf = {}, m0 = {}, h0 = {}, y0 = {}, mu = false, g0 = {}, bv = {};
    function Tr(e, t, a, i3) {
      e === null ? t.child = _D(t, null, a, i3) : t.child = ws(t, e.child, a, i3);
    }
    function O2(e, t, a, i3) {
      t.child = ws(t, e.child, null, i3), t.child = ws(t, null, a, i3);
    }
    function dC(e, t, a, i3, l3) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ei(s, i3, "prop", ot(a));
      }
      var f3 = a.render, m3 = t.ref, h3, S;
      bs(t, l3), Tc(t);
      {
        if (Tf.current = t, Cr(true), h3 = Ts(e, t, f3, i3, m3, l3), S = ks(), t.mode & mn) {
          jn(true);
          try {
            h3 = Ts(e, t, f3, i3, m3, l3), S = ks();
          } finally {
            jn(false);
          }
        }
        Cr(false);
      }
      return es(), e !== null && !oi ? (ID(e, t, l3), mo(e, t, l3)) : (Xn() && S && Zy(t), t.flags |= Ku, Tr(e, t, h3, l3), t.child);
    }
    function pC(e, t, a, i3, l3) {
      if (e === null) {
        var s = a.type;
        if (PA(s) && a.compare === null && a.defaultProps === void 0) {
          var f3 = s;
          return f3 = Ms(s), t.tag = ee, t.type = f3, w0(t, s), vC(e, t, f3, i3, l3);
        }
        {
          var m3 = s.propTypes;
          m3 && ei(m3, i3, "prop", ot(s));
        }
        var h3 = aS(a.type, null, i3, t, t.mode, l3);
        return h3.ref = t.ref, h3.return = t, t.child = h3, h3;
      }
      {
        var S = a.type, w = S.propTypes;
        w && ei(w, i3, "prop", ot(S));
      }
      var O = e.child, _ = T0(e, l3);
      if (!_) {
        var P = O.memoizedProps, z = a.compare;
        if (z = z !== null ? z : Xc, z(P, i3) && e.ref === t.ref)
          return mo(e, t, l3);
      }
      t.flags |= Ku;
      var F = bu(O, i3);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function vC(e, t, a, i3, l3) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ce) {
          var f3 = s, m3 = f3._payload, h3 = f3._init;
          try {
            s = h3(m3);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && ei(S, i3, "prop", ot(s));
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Xc(w, i3) && e.ref === t.ref && t.type === e.type)
          if (oi = false, t.pendingProps = i3 = w, T0(e, l3))
            (e.flags & Uh) !== ke && (oi = true);
          else
            return t.lanes = e.lanes, mo(e, t, l3);
      }
      return S0(e, t, a, i3, l3);
    }
    function mC(e, t, a) {
      var i3 = t.pendingProps, l3 = i3.children, s = e !== null ? e.memoizedState : null;
      if (i3.mode === "hidden" || Zt)
        if ((t.mode & nt) === _e) {
          var f3 = { baseLanes: G, cachePool: null, transitions: null };
          t.memoizedState = f3, Uv(t, a);
        } else if (sa(a, ua)) {
          var O = { baseLanes: G, cachePool: null, transitions: null };
          t.memoizedState = O;
          var _ = s !== null ? s.baseLanes : a;
          Uv(t, _);
        } else {
          var m3 = null, h3;
          if (s !== null) {
            var S = s.baseLanes;
            h3 = Ye(S, a);
          } else
            h3 = a;
          t.lanes = t.childLanes = ua;
          var w = { baseLanes: h3, cachePool: m3, transitions: null };
          return t.memoizedState = w, t.updateQueue = null, Uv(t, h3), null;
        }
      else {
        var P;
        s !== null ? (P = Ye(s.baseLanes, a), t.memoizedState = null) : P = a, Uv(t, P);
      }
      return Tr(e, t, l3, a), t.child;
    }
    function N2(e, t, a) {
      var i3 = t.pendingProps;
      return Tr(e, t, i3, a), t.child;
    }
    function L2(e, t, a) {
      var i3 = t.pendingProps.children;
      return Tr(e, t, i3, a), t.child;
    }
    function U2(e, t, a) {
      {
        t.flags |= lt;
        {
          var i3 = t.stateNode;
          i3.effectDuration = 0, i3.passiveEffectDuration = 0;
        }
      }
      var l3 = t.pendingProps, s = l3.children;
      return Tr(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Qo, t.flags |= Ih);
    }
    function S0(e, t, a, i3, l3) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ei(s, i3, "prop", ot(a));
      }
      var f3;
      {
        var m3 = vs(t, a, true);
        f3 = ms(t, m3);
      }
      var h3, S;
      bs(t, l3), Tc(t);
      {
        if (Tf.current = t, Cr(true), h3 = Ts(e, t, a, i3, f3, l3), S = ks(), t.mode & mn) {
          jn(true);
          try {
            h3 = Ts(e, t, a, i3, f3, l3), S = ks();
          } finally {
            jn(false);
          }
        }
        Cr(false);
      }
      return es(), e !== null && !oi ? (ID(e, t, l3), mo(e, t, l3)) : (Xn() && S && Zy(t), t.flags |= Ku, Tr(e, t, h3, l3), t.child);
    }
    function yC(e, t, a, i3, l3) {
      {
        switch (tz(t)) {
          case false: {
            var s = t.stateNode, f3 = t.type, m3 = new f3(t.memoizedProps, s.context), h3 = m3.state;
            s.updater.enqueueSetState(s, h3, null);
            break;
          }
          case true: {
            t.flags |= gt, t.flags |= Er;
            var S = new Error("Simulated error coming from DevTools"), w = Uc(l3);
            t.lanes = Ye(t.lanes, w);
            var O = p0(t, vu(S, t), w);
            mg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && ei(_, i3, "prop", ot(a));
        }
      }
      var P;
      Li(a) ? (P = true, Lp(t)) : P = false, bs(t, l3);
      var z = t.stateNode, F;
      z === null ? (xv(e, t), CD(t, a, i3), Tg(t, a, i3, l3), F = true) : e === null ? F = i2(t, a, i3, l3) : F = o2(e, t, a, i3, l3);
      var de = b0(e, t, a, F, P, l3);
      {
        var De = t.stateNode;
        F && De.props !== i3 && (mu || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ze(t) || "a component"), mu = true);
      }
      return de;
    }
    function b0(e, t, a, i3, l3, s) {
      hC(e, t);
      var f3 = (t.flags & gt) !== ke;
      if (!i3 && !f3)
        return l3 && qx(t, a, false), mo(e, t, s);
      var m3 = t.stateNode;
      Tf.current = t;
      var h3;
      if (f3 && typeof a.getDerivedStateFromError != "function")
        h3 = null, lC();
      else {
        Tc(t);
        {
          if (Cr(true), h3 = m3.render(), t.mode & mn) {
            jn(true);
            try {
              m3.render();
            } finally {
              jn(false);
            }
          }
          Cr(false);
        }
        es();
      }
      return t.flags |= Ku, e !== null && f3 ? O2(e, t, h3, s) : Tr(e, t, h3, s), t.memoizedState = m3.state, l3 && qx(t, a, true), t.child;
    }
    function gC(e) {
      var t = e.stateNode;
      t.pendingContext ? Jx(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jx(e, t.context, false), Ug(e, t.containerInfo);
    }
    function I2(e, t, a) {
      if (gC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i3 = t.pendingProps, l3 = t.memoizedState, s = l3.element;
      hD(e, t), Bp(t, i3, null, a);
      var f3 = t.memoizedState, m3 = t.stateNode, h3 = f3.element;
      if (l3.isDehydrated) {
        var S = { element: h3, isDehydrated: false, cache: f3.cache, pendingSuspenseBoundaries: f3.pendingSuspenseBoundaries, transitions: f3.transitions }, w = t.updateQueue;
        if (w.baseState = S, t.memoizedState = S, t.flags & to) {
          var O = vu(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return SC(e, t, h3, a, O);
        } else if (h3 !== s) {
          var _ = vu(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return SC(e, t, h3, a, _);
        } else {
          z$(t);
          var P = _D(t, null, h3, a);
          t.child = P;
          for (var z = P; z; )
            z.flags = z.flags & ~vn | no, z = z.sibling;
        }
      } else {
        if (gs(), h3 === s)
          return mo(e, t, a);
        Tr(e, t, h3, a);
      }
      return t.child;
    }
    function SC(e, t, a, i3, l3) {
      return gs(), ig(l3), t.flags |= to, Tr(e, t, a, i3), t.child;
    }
    function $2(e, t, a) {
      ND(t), e === null && ag(t);
      var i3 = t.type, l3 = t.pendingProps, s = e !== null ? e.memoizedProps : null, f3 = l3.children, m3 = jy(i3, l3);
      return m3 ? f3 = null : s !== null && jy(i3, s) && (t.flags |= Cc), hC(e, t), Tr(e, t, f3, a), t.child;
    }
    function M2(e, t) {
      return e === null && ag(t), null;
    }
    function A2(e, t, a, i3) {
      xv(e, t);
      var l3 = t.pendingProps, s = a, f3 = s._payload, m3 = s._init, h3 = m3(f3);
      t.type = h3;
      var S = t.tag = HA(h3), w = ri(h3, l3), O;
      switch (S) {
        case x:
          return w0(t, h3), t.type = h3 = Ms(h3), O = S0(null, t, h3, w, i3), O;
        case T:
          return t.type = h3 = K0(h3), O = yC(null, t, h3, w, i3), O;
        case k2:
          return t.type = h3 = Z0(h3), O = dC(null, t, h3, w, i3), O;
        case re: {
          if (t.type !== t.elementType) {
            var _ = h3.propTypes;
            _ && ei(_, w, "prop", ot(h3));
          }
          return O = pC(null, t, h3, ri(h3.type, w), i3), O;
        }
      }
      var P = "";
      throw h3 !== null && typeof h3 == "object" && h3.$$typeof === Ce && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h3 + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function z2(e, t, a, i3, l3) {
      xv(e, t), t.tag = T;
      var s;
      return Li(a) ? (s = true, Lp(t)) : s = false, bs(t, l3), CD(t, a, i3), Tg(t, a, i3, l3), b0(null, t, a, true, s, l3);
    }
    function j22(e, t, a, i3) {
      xv(e, t);
      var l3 = t.pendingProps, s;
      {
        var f3 = vs(t, a, false);
        s = ms(t, f3);
      }
      bs(t, i3);
      var m3, h3;
      Tc(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = ot(a) || "Unknown";
          v0[S] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), v0[S] = true);
        }
        t.mode & mn && ni.recordLegacyContextWarning(t, null), Cr(true), Tf.current = t, m3 = Ts(null, t, a, l3, s, i3), h3 = ks(), Cr(false);
      }
      if (es(), t.flags |= Ku, typeof m3 == "object" && m3 !== null && typeof m3.render == "function" && m3.$$typeof === void 0) {
        var w = ot(a) || "Unknown";
        kf[w] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), kf[w] = true);
      }
      if (typeof m3 == "object" && m3 !== null && typeof m3.render == "function" && m3.$$typeof === void 0) {
        {
          var O = ot(a) || "Unknown";
          kf[O] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), kf[O] = true);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var _ = false;
        return Li(a) ? (_ = true, Lp(t)) : _ = false, t.memoizedState = m3.state !== null && m3.state !== void 0 ? m3.state : null, vg(t), DD(t, m3), Tg(t, a, l3, i3), b0(null, t, a, true, _, i3);
      } else {
        if (t.tag = x, t.mode & mn) {
          jn(true);
          try {
            m3 = Ts(null, t, a, l3, s, i3), h3 = ks();
          } finally {
            jn(false);
          }
        }
        return Xn() && h3 && Zy(t), Tr(null, t, m3, i3), w0(t, a), t.child;
      }
    }
    function w0(e, t) {
      {
        if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i3 = Ja();
          i3 && (a += `

Check the render method of \`` + i3 + "`.");
          var l3 = i3 || "", s = e._debugSource;
          s && (l3 = s.fileName + ":" + s.lineNumber), y0[l3] || (y0[l3] = true, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f3 = ot(t) || "Unknown";
          h0[f3] || (d("%s: Function components do not support getDerivedStateFromProps.", f3), h0[f3] = true);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m3 = ot(t) || "Unknown";
          m0[m3] || (d("%s: Function components do not support contextType.", m3), m0[m3] = true);
        }
      }
    }
    var x0 = { dehydrated: null, treeContext: null, retryLane: Pn };
    function D0(e) {
      return { baseLanes: e, cachePool: _2(), transitions: null };
    }
    function P2(e, t) {
      var a = null;
      return { baseLanes: Ye(e.baseLanes, t), cachePool: a, transitions: e.transitions };
    }
    function H2(e, t, a, i3) {
      if (t !== null) {
        var l3 = t.memoizedState;
        if (l3 === null)
          return false;
      }
      return Mg(e, Sf);
    }
    function F2(e, t) {
      return tp(e.childLanes, t);
    }
    function bC(e, t, a) {
      var i3 = t.pendingProps;
      nz(t) && (t.flags |= gt);
      var l3 = ai.current, s = false, f3 = (t.flags & gt) !== ke;
      if (f3 || H2(l3, e) ? (s = true, t.flags &= ~gt) : (e === null || e.memoizedState !== null) && (l3 = c2(l3, UD)), l3 = Ds(l3), il(t, l3), e === null) {
        ag(t);
        var m3 = t.memoizedState;
        if (m3 !== null) {
          var h3 = m3.dehydrated;
          if (h3 !== null)
            return B2(t, h3);
        }
        var S = i3.children, w = i3.fallback;
        if (s) {
          var O = V2(t, S, w, a), _ = t.child;
          return _.memoizedState = D0(a), t.memoizedState = x0, O;
        } else
          return C0(t, S);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var z = P.dehydrated;
          if (z !== null)
            return X2(e, t, f3, i3, z, P, a);
        }
        if (s) {
          var F = i3.fallback, de = i3.children, De = Q2(e, t, de, F, a), Se = t.child, qe = e.child.memoizedState;
          return Se.memoizedState = qe === null ? D0(a) : P2(qe, a), Se.childLanes = F2(e, a), t.memoizedState = x0, De;
        } else {
          var Ke = i3.children, I = Y2(e, t, Ke, a);
          return t.memoizedState = null, I;
        }
      }
    }
    function C0(e, t, a) {
      var i3 = e.mode, l3 = { mode: "visible", children: t }, s = R0(l3, i3);
      return s.return = e, e.child = s, s;
    }
    function V2(e, t, a, i3) {
      var l3 = e.mode, s = e.child, f3 = { mode: "hidden", children: t }, m3, h3;
      return (l3 & nt) === _e && s !== null ? (m3 = s, m3.childLanes = G, m3.pendingProps = f3, e.mode & Et && (m3.actualDuration = 0, m3.actualStartTime = -1, m3.selfBaseDuration = 0, m3.treeBaseDuration = 0), h3 = pl(a, l3, i3, null)) : (m3 = R0(f3, l3), h3 = pl(a, l3, i3, null)), m3.return = e, h3.return = e, m3.sibling = h3, e.child = m3, h3;
    }
    function R0(e, t, a) {
      return xR(e, t, G, null);
    }
    function wC(e, t) {
      return bu(e, t);
    }
    function Y2(e, t, a, i3) {
      var l3 = e.child, s = l3.sibling, f3 = wC(l3, { mode: "visible", children: a });
      if ((t.mode & nt) === _e && (f3.lanes = i3), f3.return = t, f3.sibling = null, s !== null) {
        var m3 = t.deletions;
        m3 === null ? (t.deletions = [s], t.flags |= Wl) : m3.push(s);
      }
      return t.child = f3, f3;
    }
    function Q2(e, t, a, i3, l3) {
      var s = t.mode, f3 = e.child, m3 = f3.sibling, h3 = { mode: "hidden", children: a }, S;
      if ((s & nt) === _e && t.child !== f3) {
        var w = t.child;
        S = w, S.childLanes = G, S.pendingProps = h3, t.mode & Et && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f3.selfBaseDuration, S.treeBaseDuration = f3.treeBaseDuration), t.deletions = null;
      } else
        S = wC(f3, h3), S.subtreeFlags = f3.subtreeFlags & ao;
      var O;
      return m3 !== null ? O = bu(m3, i3) : (O = pl(i3, s, l3, null), O.flags |= vn), O.return = t, S.return = t, S.sibling = O, t.child = S, O;
    }
    function wv(e, t, a, i3) {
      i3 !== null && ig(i3), ws(t, e.child, null, a);
      var l3 = t.pendingProps, s = l3.children, f3 = C0(t, s);
      return f3.flags |= vn, t.memoizedState = null, f3;
    }
    function W2(e, t, a, i3, l3) {
      var s = t.mode, f3 = { mode: "visible", children: a }, m3 = R0(f3, s), h3 = pl(i3, s, l3, null);
      return h3.flags |= vn, m3.return = t, h3.return = t, m3.sibling = h3, t.child = m3, (t.mode & nt) !== _e && ws(t, e.child, null, l3), h3;
    }
    function B2(e, t, a) {
      return (e.mode & nt) === _e ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ie) : Vy(t) ? e.lanes = Zl : e.lanes = ua, null;
    }
    function X2(e, t, a, i3, l3, s, f3) {
      if (a)
        if (t.flags & to) {
          t.flags &= ~to;
          var I = f0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return wv(e, t, f3, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var Y = i3.children, $ = i3.fallback, Z = W2(e, t, Y, $, f3), me = t.child;
          return me.memoizedState = D0(f3), t.memoizedState = x0, Z;
        }
      else {
        if (M$(), (t.mode & nt) === _e)
          return wv(e, t, f3, null);
        if (Vy(l3)) {
          var m3, h3, S;
          {
            var w = ZI(l3);
            m3 = w.digest, h3 = w.message, S = w.stack;
          }
          var O;
          h3 ? O = new Error(h3) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = f0(O, m3, S);
          return wv(e, t, f3, _);
        }
        var P = sa(f3, e.childLanes);
        if (oi || P) {
          var z = Lv();
          if (z !== null) {
            var F = iL(z, f3);
            if (F !== Pn && F !== s.retryLane) {
              s.retryLane = F;
              var de = jt;
              Vr(e, F), Ln(z, e, F, de);
            }
          }
          B0();
          var De = f0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return wv(e, t, f3, De);
        } else if (Vx(l3)) {
          t.flags |= gt, t.child = e.child;
          var Se = CA.bind(null, e);
          return e$(l3, Se), null;
        } else {
          j$(t, l3, s.treeContext);
          var qe = i3.children, Ke = C0(t, qe);
          return Ke.flags |= no, Ke;
        }
      }
    }
    function xC(e, t, a) {
      e.lanes = Ye(e.lanes, t);
      var i3 = e.alternate;
      i3 !== null && (i3.lanes = Ye(i3.lanes, t)), cg(e.return, t, a);
    }
    function J2(e, t, a) {
      for (var i3 = t; i3 !== null; ) {
        if (i3.tag === X) {
          var l3 = i3.memoizedState;
          l3 !== null && xC(i3, a, e);
        } else if (i3.tag === dt)
          xC(i3, a, e);
        else if (i3.child !== null) {
          i3.child.return = i3, i3 = i3.child;
          continue;
        }
        if (i3 === e)
          return;
        for (; i3.sibling === null; ) {
          if (i3.return === null || i3.return === e)
            return;
          i3 = i3.return;
        }
        i3.sibling.return = i3.return, i3 = i3.sibling;
      }
    }
    function G2(e) {
      for (var t = e, a = null; t !== null; ) {
        var i3 = t.alternate;
        i3 !== null && ev(i3) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function q2(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !g0[e])
        if (g0[e] = true, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function K2(e, t) {
      e !== void 0 && !bv[e] && (e !== "collapsed" && e !== "hidden" ? (bv[e] = true, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (bv[e] = true, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function DC(e, t) {
      {
        var a = tt(e), i3 = !a && typeof Wa(e) == "function";
        if (a || i3) {
          var l3 = a ? "array" : "iterable";
          return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l3, t, l3), false;
        }
      }
      return true;
    }
    function Z2(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== false)
        if (tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!DC(e[a], a))
              return;
        } else {
          var i3 = Wa(e);
          if (typeof i3 == "function") {
            var l3 = i3.call(e);
            if (l3)
              for (var s = l3.next(), f3 = 0; !s.done; s = l3.next()) {
                if (!DC(s.value, f3))
                  return;
                f3++;
              }
          } else
            d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function E0(e, t, a, i3, l3) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i3, tail: a, tailMode: l3 } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i3, s.tail = a, s.tailMode = l3);
    }
    function CC(e, t, a) {
      var i3 = t.pendingProps, l3 = i3.revealOrder, s = i3.tail, f3 = i3.children;
      q2(l3), K2(s, l3), Z2(f3, l3), Tr(e, t, f3, a);
      var m3 = ai.current, h3 = Mg(m3, Sf);
      if (h3)
        m3 = Ag(m3, Sf), t.flags |= gt;
      else {
        var S = e !== null && (e.flags & gt) !== ke;
        S && J2(t, t.child, a), m3 = Ds(m3);
      }
      if (il(t, m3), (t.mode & nt) === _e)
        t.memoizedState = null;
      else
        switch (l3) {
          case "forwards": {
            var w = G2(t.child), O;
            w === null ? (O = t.child, t.child = null) : (O = w.sibling, w.sibling = null), E0(t, false, O, w, s);
            break;
          }
          case "backwards": {
            var _ = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var z = P.alternate;
              if (z !== null && ev(z) === null) {
                t.child = P;
                break;
              }
              var F = P.sibling;
              P.sibling = _, _ = P, P = F;
            }
            E0(t, true, _, null, s);
            break;
          }
          case "together": {
            E0(t, false, null, null, void 0);
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function eM(e, t, a) {
      Ug(t, t.stateNode.containerInfo);
      var i3 = t.pendingProps;
      return e === null ? t.child = ws(t, null, i3, a) : Tr(e, t, i3, a), t.child;
    }
    var RC = false;
    function tM(e, t, a) {
      var i3 = t.type, l3 = i3._context, s = t.pendingProps, f3 = t.memoizedProps, m3 = s.value;
      {
        "value" in s || RC || (RC = true, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h3 = t.type.propTypes;
        h3 && ei(h3, s, "prop", "Context.Provider");
      }
      if (dD(t, l3, m3), f3 !== null) {
        var S = f3.value;
        if (da(S, m3)) {
          if (f3.children === s.children && !Op())
            return mo(e, t, a);
        } else
          J$(t, l3, a);
      }
      var w = s.children;
      return Tr(e, t, w, a), t.child;
    }
    var EC = false;
    function nM(e, t, a) {
      var i3 = t.type;
      i3._context === void 0 ? i3 !== i3.Consumer && (EC || (EC = true, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i3 = i3._context;
      var l3 = t.pendingProps, s = l3.children;
      typeof s != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), bs(t, a);
      var f3 = hn(i3);
      Tc(t);
      var m3;
      return Tf.current = t, Cr(true), m3 = s(f3), Cr(false), es(), t.flags |= Ku, Tr(e, t, m3, a), t.child;
    }
    function _f() {
      oi = true;
    }
    function xv(e, t) {
      (t.mode & nt) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= vn);
    }
    function mo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), lC(), Hf(t.lanes), sa(a, t.childLanes) ? (l2(e, t), t.child) : null;
    }
    function rM(e, t, a) {
      {
        var i3 = t.return;
        if (i3 === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i3.child)
          i3.child = a;
        else {
          var l3 = i3.child;
          if (l3 === null)
            throw new Error("Expected parent to have a child.");
          for (; l3.sibling !== t; )
            if (l3 = l3.sibling, l3 === null)
              throw new Error("Expected to find the previous sibling.");
          l3.sibling = a;
        }
        var s = i3.deletions;
        return s === null ? (i3.deletions = [e], i3.flags |= Wl) : s.push(e), a.flags |= vn, a;
      }
    }
    function T0(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function aM(e, t, a) {
      switch (t.tag) {
        case U:
          gC(t);
          var i3 = t.stateNode;
          gs();
          break;
        case H:
          ND(t);
          break;
        case T: {
          var l3 = t.type;
          Li(l3) && Lp(t);
          break;
        }
        case j2:
          Ug(t, t.stateNode.containerInfo);
          break;
        case C: {
          var s = t.memoizedProps.value, f3 = t.type._context;
          dD(t, f3, s);
          break;
        }
        case Q:
          {
            var m3 = sa(a, t.childLanes);
            m3 && (t.flags |= lt);
            {
              var h3 = t.stateNode;
              h3.effectDuration = 0, h3.passiveEffectDuration = 0;
            }
          }
          break;
        case X: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return il(t, Ds(ai.current)), t.flags |= gt, null;
            var w = t.child, O = w.childLanes;
            if (sa(a, O))
              return bC(e, t, a);
            il(t, Ds(ai.current));
            var _ = mo(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            il(t, Ds(ai.current));
          break;
        }
        case dt: {
          var P = (e.flags & gt) !== ke, z = sa(a, t.childLanes);
          if (P) {
            if (z)
              return CC(e, t, a);
            t.flags |= gt;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), il(t, ai.current), z)
            break;
          return null;
        }
        case Te:
        case bt:
          return t.lanes = G, mC(e, t, a);
      }
      return mo(e, t, a);
    }
    function TC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return rM(e, t, aS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i3 = e.memoizedProps, l3 = t.pendingProps;
        if (i3 !== l3 || Op() || t.type !== e.type)
          oi = true;
        else {
          var s = T0(e, a);
          if (!s && (t.flags & gt) === ke)
            return oi = false, aM(e, t, a);
          (e.flags & Uh) !== ke ? oi = true : oi = false;
        }
      } else if (oi = false, Xn() && O$(t)) {
        var f3 = t.index, m3 = N$();
        eD(t, m3, f3);
      }
      switch (t.lanes = G, t.tag) {
        case V:
          return j22(e, t, t.type, a);
        case he: {
          var h3 = t.elementType;
          return A2(e, t, h3, a);
        }
        case x: {
          var S = t.type, w = t.pendingProps, O = t.elementType === S ? w : ri(S, w);
          return S0(e, t, S, O, a);
        }
        case T: {
          var _ = t.type, P = t.pendingProps, z = t.elementType === _ ? P : ri(_, P);
          return yC(e, t, _, z, a);
        }
        case U:
          return I2(e, t, a);
        case H:
          return $2(e, t, a);
        case J:
          return M2(e, t);
        case X:
          return bC(e, t, a);
        case j2:
          return eM(e, t, a);
        case k2: {
          var F = t.type, de = t.pendingProps, De = t.elementType === F ? de : ri(F, de);
          return dC(e, t, F, De, a);
        }
        case ie:
          return N2(e, t, a);
        case Ge:
          return L2(e, t, a);
        case Q:
          return U2(e, t, a);
        case C:
          return tM(e, t, a);
        case N:
          return nM(e, t, a);
        case re: {
          var Se = t.type, qe = t.pendingProps, Ke = ri(Se, qe);
          if (t.type !== t.elementType) {
            var I = Se.propTypes;
            I && ei(I, Ke, "prop", ot(Se));
          }
          return Ke = ri(Se.type, Ke), pC(e, t, Se, Ke, a);
        }
        case ee:
          return vC(e, t, t.type, t.pendingProps, a);
        case Me: {
          var Y = t.type, $ = t.pendingProps, Z = t.elementType === Y ? $ : ri(Y, $);
          return z2(e, t, Y, Z, a);
        }
        case dt:
          return CC(e, t, a);
        case yt:
          break;
        case Te:
          return mC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _s(e) {
      e.flags |= lt;
    }
    function kC(e) {
      e.flags |= Qo, e.flags |= Ih;
    }
    var _C, k0, OC, NC;
    _C = function(e, t, a, i3) {
      for (var l3 = t.child; l3 !== null; ) {
        if (l3.tag === H || l3.tag === J)
          TI(e, l3.stateNode);
        else if (l3.tag !== j2) {
          if (l3.child !== null) {
            l3.child.return = l3, l3 = l3.child;
            continue;
          }
        }
        if (l3 === t)
          return;
        for (; l3.sibling === null; ) {
          if (l3.return === null || l3.return === t)
            return;
          l3 = l3.return;
        }
        l3.sibling.return = l3.return, l3 = l3.sibling;
      }
    }, k0 = function(e, t) {
    }, OC = function(e, t, a, i3, l3) {
      var s = e.memoizedProps;
      if (s !== i3) {
        var f3 = t.stateNode, m3 = Ig(), h3 = _I(f3, a, s, i3, l3, m3);
        t.updateQueue = h3, h3 && _s(t);
      }
    }, NC = function(e, t, a, i3) {
      a !== i3 && _s(t);
    };
    function Of(e, t) {
      if (!Xn())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i3 = null; a !== null; )
              a.alternate !== null && (i3 = a), a = a.sibling;
            i3 === null ? e.tail = null : i3.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l3 = e.tail, s = null; l3 !== null; )
              l3.alternate !== null && (s = l3), l3 = l3.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Gn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = G, i3 = ke;
      if (t) {
        if ((e.mode & Et) !== _e) {
          for (var h3 = e.selfBaseDuration, S = e.child; S !== null; )
            a = Ye(a, Ye(S.lanes, S.childLanes)), i3 |= S.subtreeFlags & ao, i3 |= S.flags & ao, h3 += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = h3;
        } else
          for (var w = e.child; w !== null; )
            a = Ye(a, Ye(w.lanes, w.childLanes)), i3 |= w.subtreeFlags & ao, i3 |= w.flags & ao, w.return = e, w = w.sibling;
        e.subtreeFlags |= i3;
      } else {
        if ((e.mode & Et) !== _e) {
          for (var l3 = e.actualDuration, s = e.selfBaseDuration, f3 = e.child; f3 !== null; )
            a = Ye(a, Ye(f3.lanes, f3.childLanes)), i3 |= f3.subtreeFlags, i3 |= f3.flags, l3 += f3.actualDuration, s += f3.treeBaseDuration, f3 = f3.sibling;
          e.actualDuration = l3, e.treeBaseDuration = s;
        } else
          for (var m3 = e.child; m3 !== null; )
            a = Ye(a, Ye(m3.lanes, m3.childLanes)), i3 |= m3.subtreeFlags, i3 |= m3.flags, m3.return = e, m3 = m3.sibling;
        e.subtreeFlags |= i3;
      }
      return e.childLanes = a, t;
    }
    function iM(e, t, a) {
      if (Y$() && (t.mode & nt) !== _e && (t.flags & gt) === ke)
        return lD(t), gs(), t.flags |= to | Rc | Er, false;
      var i3 = Ap(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i3)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (F$(t), Gn(t), (t.mode & Et) !== _e) {
            var l3 = a !== null;
            if (l3) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return false;
        } else {
          if (gs(), (t.flags & gt) === ke && (t.memoizedState = null), t.flags |= lt, Gn(t), (t.mode & Et) !== _e) {
            var f3 = a !== null;
            if (f3) {
              var m3 = t.child;
              m3 !== null && (t.treeBaseDuration -= m3.treeBaseDuration);
            }
          }
          return false;
        }
      else
        return uD(), true;
    }
    function LC(e, t, a) {
      var i3 = t.pendingProps;
      switch (eg(t), t.tag) {
        case V:
        case he:
        case ee:
        case x:
        case k2:
        case ie:
        case Ge:
        case Q:
        case N:
        case re:
          return Gn(t), null;
        case T: {
          var l3 = t.type;
          return Li(l3) && Np(t), Gn(t), null;
        }
        case U: {
          var s = t.stateNode;
          if (xs(t), Gy(t), jg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f3 = Ap(t);
            if (f3)
              _s(t);
            else if (e !== null) {
              var m3 = e.memoizedState;
              (!m3.isDehydrated || (t.flags & to) !== ke) && (t.flags |= Bl, uD());
            }
          }
          return k0(e, t), Gn(t), null;
        }
        case H: {
          $g(t);
          var h3 = OD(), S = t.type;
          if (e !== null && t.stateNode != null)
            OC(e, t, S, i3, h3), e.ref !== t.ref && kC(t);
          else {
            if (!i3) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Gn(t), null;
            }
            var w = Ig(), O = Ap(t);
            if (O)
              P$(t, h3, w) && _s(t);
            else {
              var _ = EI(S, i3, h3, w, t);
              _C(_, t, false, false), t.stateNode = _, kI(_, S, i3, h3) && _s(t);
            }
            t.ref !== null && kC(t);
          }
          return Gn(t), null;
        }
        case J: {
          var P = i3;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            NC(e, t, z, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = OD(), de = Ig(), De = Ap(t);
            De ? H$(t) && _s(t) : t.stateNode = OI(P, F, de, t);
          }
          return Gn(t), null;
        }
        case X: {
          Cs(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var qe = iM(e, t, Se);
            if (!qe)
              return t.flags & Er ? t : null;
          }
          if ((t.flags & gt) !== ke)
            return t.lanes = a, (t.mode & Et) !== _e && c0(t), t;
          var Ke = Se !== null, I = e !== null && e.memoizedState !== null;
          if (Ke !== I && Ke) {
            var Y = t.child;
            if (Y.flags |= Xl, (t.mode & nt) !== _e) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== true || !M);
              $ || Mg(ai.current, UD) ? fA() : B0();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= lt), Gn(t), (t.mode & Et) !== _e && Ke) {
            var me = t.child;
            me !== null && (t.treeBaseDuration -= me.treeBaseDuration);
          }
          return null;
        }
        case j2:
          return xs(t), k0(e, t), e === null && D$(t.stateNode.containerInfo), Gn(t), null;
        case C:
          var ce = t.type._context;
          return sg(ce, t), Gn(t), null;
        case Me: {
          var Ne = t.type;
          return Li(Ne) && Np(t), Gn(t), null;
        }
        case dt: {
          Cs(t);
          var je = t.memoizedState;
          if (je === null)
            return Gn(t), null;
          var kt = (t.flags & gt) !== ke, mt = je.rendering;
          if (mt === null)
            if (kt)
              Of(je, false);
            else {
              var sn = pA() && (e === null || (e.flags & gt) === ke);
              if (!sn)
                for (var ht = t.child; ht !== null; ) {
                  var rn = ev(ht);
                  if (rn !== null) {
                    kt = true, t.flags |= gt, Of(je, false);
                    var dr = rn.updateQueue;
                    return dr !== null && (t.updateQueue = dr, t.flags |= lt), t.subtreeFlags = ke, u2(t, a), il(t, Ag(ai.current, Sf)), t.child;
                  }
                  ht = ht.sibling;
                }
              je.tail !== null && zn() > eR() && (t.flags |= gt, kt = true, Of(je, false), t.lanes = Ow);
            }
          else {
            if (!kt) {
              var tr = ev(mt);
              if (tr !== null) {
                t.flags |= gt, kt = true;
                var ma = tr.updateQueue;
                if (ma !== null && (t.updateQueue = ma, t.flags |= lt), Of(je, true), je.tail === null && je.tailMode === "hidden" && !mt.alternate && !Xn())
                  return Gn(t), null;
              } else
                zn() * 2 - je.renderingStartTime > eR() && a !== ua && (t.flags |= gt, kt = true, Of(je, false), t.lanes = Ow);
            }
            if (je.isBackwards)
              mt.sibling = t.child, t.child = mt;
            else {
              var Or = je.last;
              Or !== null ? Or.sibling = mt : t.child = mt, je.last = mt;
            }
          }
          if (je.tail !== null) {
            var Nr = je.tail;
            je.rendering = Nr, je.tail = Nr.sibling, je.renderingStartTime = zn(), Nr.sibling = null;
            var pr = ai.current;
            return kt ? pr = Ag(pr, Sf) : pr = Ds(pr), il(t, pr), Nr;
          }
          return Gn(t), null;
        }
        case yt:
          break;
        case Te:
        case bt: {
          W0(t);
          var bo = t.memoizedState, As = bo !== null;
          if (e !== null) {
            var Wf = e.memoizedState, Pi = Wf !== null;
            Pi !== As && !Zt && (t.flags |= Xl);
          }
          return !As || (t.mode & nt) === _e ? Gn(t) : sa(ji, ua) && (Gn(t), t.subtreeFlags & (vn | lt) && (t.flags |= Xl)), null;
        }
        case be:
          return null;
        case Lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function oM(e, t, a) {
      switch (eg(t), t.tag) {
        case T: {
          var i3 = t.type;
          Li(i3) && Np(t);
          var l3 = t.flags;
          return l3 & Er ? (t.flags = l3 & ~Er | gt, (t.mode & Et) !== _e && c0(t), t) : null;
        }
        case U: {
          var s = t.stateNode;
          xs(t), Gy(t), jg();
          var f3 = t.flags;
          return (f3 & Er) !== ke && (f3 & gt) === ke ? (t.flags = f3 & ~Er | gt, t) : null;
        }
        case H:
          return $g(t), null;
        case X: {
          Cs(t);
          var m3 = t.memoizedState;
          if (m3 !== null && m3.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            gs();
          }
          var h3 = t.flags;
          return h3 & Er ? (t.flags = h3 & ~Er | gt, (t.mode & Et) !== _e && c0(t), t) : null;
        }
        case dt:
          return Cs(t), null;
        case j2:
          return xs(t), null;
        case C:
          var S = t.type._context;
          return sg(S, t), null;
        case Te:
        case bt:
          return W0(t), null;
        case be:
          return null;
        default:
          return null;
      }
    }
    function UC(e, t, a) {
      switch (eg(t), t.tag) {
        case T: {
          var i3 = t.type.childContextTypes;
          i3 != null && Np(t);
          break;
        }
        case U: {
          var l3 = t.stateNode;
          xs(t), Gy(t), jg();
          break;
        }
        case H: {
          $g(t);
          break;
        }
        case j2:
          xs(t);
          break;
        case X:
          Cs(t);
          break;
        case dt:
          Cs(t);
          break;
        case C:
          var s = t.type._context;
          sg(s, t);
          break;
        case Te:
        case bt:
          W0(t);
          break;
      }
    }
    var IC = null;
    IC = /* @__PURE__ */ new Set();
    var Dv = false, qn = false, lM = typeof WeakSet == "function" ? WeakSet : Set, ye = null, Os = null, Ns = null;
    function uM(e) {
      Oh(null, function() {
        throw e;
      }), Nh();
    }
    var sM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Et)
        try {
          Ai(), t.componentWillUnmount();
        } finally {
          Mi(e);
        }
      else
        t.componentWillUnmount();
    };
    function $C(e, t) {
      try {
        ul(En, e);
      } catch (a) {
        Mt(e, t, a);
      }
    }
    function _0(e, t, a) {
      try {
        sM(e, a);
      } catch (i3) {
        Mt(e, t, i3);
      }
    }
    function cM(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i3) {
        Mt(e, t, i3);
      }
    }
    function MC(e, t) {
      try {
        jC(e);
      } catch (a) {
        Mt(e, t, a);
      }
    }
    function Ls(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i3;
          try {
            if (ct && ft && e.mode & Et)
              try {
                Ai(), i3 = a(null);
              } finally {
                Mi(e);
              }
            else
              i3 = a(null);
          } catch (l3) {
            Mt(e, t, l3);
          }
          typeof i3 == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ze(e));
        } else
          a.current = null;
    }
    function Cv(e, t, a) {
      try {
        a();
      } catch (i3) {
        Mt(e, t, i3);
      }
    }
    var AC = null, zC = false;
    function fM(e, t) {
      AC = CI(e.containerInfo), ye = t, dM();
      var a = zC;
      return zC = false, AC = null, a;
    }
    function dM() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        (e.subtreeFlags & Mh) !== ke && t !== null ? (t.return = e, ye = t) : pM();
      }
    }
    function pM() {
      for (; ye !== null; ) {
        var e = ye;
        zt(e);
        try {
          vM(e);
        } catch (a) {
          Mt(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function vM(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Bl) !== ke) {
        switch (zt(e), e.tag) {
          case x:
          case k2:
          case ee:
            break;
          case T: {
            if (t !== null) {
              var i3 = t.memoizedProps, l3 = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !mu && (s.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(e) || "instance"), s.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(e) || "instance"));
              var f3 = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i3 : ri(e.type, i3), l3);
              {
                var m3 = IC;
                f3 === void 0 && !m3.has(e.type) && (m3.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ze(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f3;
            }
            break;
          }
          case U: {
            {
              var h3 = e.stateNode;
              JI(h3.containerInfo);
            }
            break;
          }
          case H:
          case J:
          case j2:
          case Me:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function li(e, t, a) {
      var i3 = t.updateQueue, l3 = i3 !== null ? i3.lastEffect : null;
      if (l3 !== null) {
        var s = l3.next, f3 = s;
        do {
          if ((f3.tag & e) === e) {
            var m3 = f3.destroy;
            f3.destroy = void 0, m3 !== void 0 && ((e & Jn) !== Yr ? ON(t) : (e & En) !== Yr && Rw(t), (e & Ui) !== Yr && Vf(true), Cv(t, a, m3), (e & Ui) !== Yr && Vf(false), (e & Jn) !== Yr ? NN() : (e & En) !== Yr && Ew());
          }
          f3 = f3.next;
        } while (f3 !== s);
      }
    }
    function ul(e, t) {
      var a = t.updateQueue, i3 = a !== null ? a.lastEffect : null;
      if (i3 !== null) {
        var l3 = i3.next, s = l3;
        do {
          if ((s.tag & e) === e) {
            (e & Jn) !== Yr ? kN(t) : (e & En) !== Yr && LN(t);
            var f3 = s.create;
            (e & Ui) !== Yr && Vf(true), s.destroy = f3(), (e & Ui) !== Yr && Vf(false), (e & Jn) !== Yr ? _N() : (e & En) !== Yr && UN();
            {
              var m3 = s.destroy;
              if (m3 !== void 0 && typeof m3 != "function") {
                var h3 = void 0;
                (s.tag & En) !== ke ? h3 = "useLayoutEffect" : (s.tag & Ui) !== ke ? h3 = "useInsertionEffect" : h3 = "useEffect";
                var S = void 0;
                m3 === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m3.then == "function" ? S = `

It looks like you wrote ` + h3 + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h3 + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + m3, d("%s must not return anything besides a function, which is used for clean-up.%s", h3, S);
              }
            }
          }
          s = s.next;
        } while (s !== l3);
      }
    }
    function mM(e, t) {
      if ((t.flags & lt) !== ke)
        switch (t.tag) {
          case Q: {
            var a = t.stateNode.passiveEffectDuration, i3 = t.memoizedProps, l3 = i3.id, s = i3.onPostCommit, f3 = iC(), m3 = t.alternate === null ? "mount" : "update";
            aC() && (m3 = "nested-update"), typeof s == "function" && s(l3, m3, a, f3);
            var h3 = t.return;
            e:
              for (; h3 !== null; ) {
                switch (h3.tag) {
                  case U:
                    var S = h3.stateNode;
                    S.passiveEffectDuration += a;
                    break e;
                  case Q:
                    var w = h3.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                }
                h3 = h3.return;
              }
            break;
          }
        }
    }
    function hM(e, t, a, i3) {
      if ((a.flags & Ec) !== ke)
        switch (a.tag) {
          case x:
          case k2:
          case ee: {
            if (!qn)
              if (a.mode & Et)
                try {
                  Ai(), ul(En | Rn, a);
                } finally {
                  Mi(a);
                }
              else
                ul(En | Rn, a);
            break;
          }
          case T: {
            var l3 = a.stateNode;
            if (a.flags & lt && !qn)
              if (t === null)
                if (a.type === a.elementType && !mu && (l3.props !== a.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(a) || "instance"), l3.state !== a.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(a) || "instance")), a.mode & Et)
                  try {
                    Ai(), l3.componentDidMount();
                  } finally {
                    Mi(a);
                  }
                else
                  l3.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ri(a.type, t.memoizedProps), f3 = t.memoizedState;
                if (a.type === a.elementType && !mu && (l3.props !== a.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(a) || "instance"), l3.state !== a.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(a) || "instance")), a.mode & Et)
                  try {
                    Ai(), l3.componentDidUpdate(s, f3, l3.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Mi(a);
                  }
                else
                  l3.componentDidUpdate(s, f3, l3.__reactInternalSnapshotBeforeUpdate);
              }
            var m3 = a.updateQueue;
            m3 !== null && (a.type === a.elementType && !mu && (l3.props !== a.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(a) || "instance"), l3.state !== a.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(a) || "instance")), gD(a, m3, l3));
            break;
          }
          case U: {
            var h3 = a.updateQueue;
            if (h3 !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case H:
                    S = a.child.stateNode;
                    break;
                  case T:
                    S = a.child.stateNode;
                    break;
                }
              gD(a, h3, S);
            }
            break;
          }
          case H: {
            var w = a.stateNode;
            if (t === null && a.flags & lt) {
              var O = a.type, _ = a.memoizedProps;
              $I(w, O, _);
            }
            break;
          }
          case J:
            break;
          case j2:
            break;
          case Q: {
            {
              var P = a.memoizedProps, z = P.onCommit, F = P.onRender, de = a.stateNode.effectDuration, De = iC(), Se = t === null ? "mount" : "update";
              aC() && (Se = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, De);
              {
                typeof z == "function" && z(a.memoizedProps.id, Se, de, De), gA(a);
                var qe = a.return;
                e:
                  for (; qe !== null; ) {
                    switch (qe.tag) {
                      case U:
                        var Ke = qe.stateNode;
                        Ke.effectDuration += de;
                        break e;
                      case Q:
                        var I = qe.stateNode;
                        I.effectDuration += de;
                        break e;
                    }
                    qe = qe.return;
                  }
              }
            }
            break;
          }
          case X: {
            CM(e, a);
            break;
          }
          case dt:
          case Me:
          case yt:
          case Te:
          case bt:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qn || a.flags & Qo && jC(a);
    }
    function yM(e) {
      switch (e.tag) {
        case x:
        case k2:
        case ee: {
          if (e.mode & Et)
            try {
              Ai(), $C(e, e.return);
            } finally {
              Mi(e);
            }
          else
            $C(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && cM(e, e.return, t), MC(e, e.return);
          break;
        }
        case H: {
          MC(e, e.return);
          break;
        }
      }
    }
    function gM(e, t) {
      for (var a = null, i3 = e; ; ) {
        if (i3.tag === H) {
          if (a === null) {
            a = i3;
            try {
              var l3 = i3.stateNode;
              t ? QI(l3) : BI(i3.stateNode, i3.memoizedProps);
            } catch (f3) {
              Mt(e, e.return, f3);
            }
          }
        } else if (i3.tag === J) {
          if (a === null)
            try {
              var s = i3.stateNode;
              t ? WI(s) : XI(s, i3.memoizedProps);
            } catch (f3) {
              Mt(e, e.return, f3);
            }
        } else if (!((i3.tag === Te || i3.tag === bt) && i3.memoizedState !== null && i3 !== e)) {
          if (i3.child !== null) {
            i3.child.return = i3, i3 = i3.child;
            continue;
          }
        }
        if (i3 === e)
          return;
        for (; i3.sibling === null; ) {
          if (i3.return === null || i3.return === e)
            return;
          a === i3 && (a = null), i3 = i3.return;
        }
        a === i3 && (a = null), i3.sibling.return = i3.return, i3 = i3.sibling;
      }
    }
    function jC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i3;
        switch (e.tag) {
          case H:
            i3 = a;
            break;
          default:
            i3 = a;
        }
        if (typeof t == "function") {
          var l3;
          if (e.mode & Et)
            try {
              Ai(), l3 = t(i3);
            } finally {
              Mi(e);
            }
          else
            l3 = t(i3);
          typeof l3 == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ze(e));
        } else
          t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ze(e)), t.current = i3;
      }
    }
    function SM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === H) {
          var a = e.stateNode;
          a !== null && E$(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function bM(e) {
      for (var t = e.return; t !== null; ) {
        if (HC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HC(e) {
      return e.tag === H || e.tag === U || e.tag === j2;
    }
    function FC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || HC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== H && t.tag !== J && t.tag !== Re; ) {
            if (t.flags & vn || t.child === null || t.tag === j2)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & vn))
            return t.stateNode;
        }
    }
    function wM(e) {
      var t = bM(e);
      switch (t.tag) {
        case H: {
          var a = t.stateNode;
          t.flags & Cc && (Fx(a), t.flags &= ~Cc);
          var i3 = FC(e);
          N0(e, i3, a);
          break;
        }
        case U:
        case j2: {
          var l3 = t.stateNode.containerInfo, s = FC(e);
          O0(e, s, l3);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function O0(e, t, a) {
      var i3 = e.tag, l3 = i3 === H || i3 === J;
      if (l3) {
        var s = e.stateNode;
        t ? HI(a, s, t) : jI(a, s);
      } else if (i3 !== j2) {
        var f3 = e.child;
        if (f3 !== null) {
          O0(f3, t, a);
          for (var m3 = f3.sibling; m3 !== null; )
            O0(m3, t, a), m3 = m3.sibling;
        }
      }
    }
    function N0(e, t, a) {
      var i3 = e.tag, l3 = i3 === H || i3 === J;
      if (l3) {
        var s = e.stateNode;
        t ? PI(a, s, t) : zI(a, s);
      } else if (i3 !== j2) {
        var f3 = e.child;
        if (f3 !== null) {
          N0(f3, t, a);
          for (var m3 = f3.sibling; m3 !== null; )
            N0(m3, t, a), m3 = m3.sibling;
        }
      }
    }
    var Kn = null, ui = false;
    function xM(e, t, a) {
      {
        var i3 = t;
        e:
          for (; i3 !== null; ) {
            switch (i3.tag) {
              case H: {
                Kn = i3.stateNode, ui = false;
                break e;
              }
              case U: {
                Kn = i3.stateNode.containerInfo, ui = true;
                break e;
              }
              case j2: {
                Kn = i3.stateNode.containerInfo, ui = true;
                break e;
              }
            }
            i3 = i3.return;
          }
        if (Kn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VC(e, t, a), Kn = null, ui = false;
      }
      SM(a);
    }
    function sl(e, t, a) {
      for (var i3 = a.child; i3 !== null; )
        VC(e, t, i3), i3 = i3.sibling;
    }
    function VC(e, t, a) {
      switch (CN(a), a.tag) {
        case H:
          qn || Ls(a, t);
        case J: {
          {
            var i3 = Kn, l3 = ui;
            Kn = null, sl(e, t, a), Kn = i3, ui = l3, Kn !== null && (ui ? VI(Kn, a.stateNode) : FI(Kn, a.stateNode));
          }
          return;
        }
        case Re: {
          Kn !== null && (ui ? YI(Kn, a.stateNode) : Fy(Kn, a.stateNode));
          return;
        }
        case j2: {
          {
            var s = Kn, f3 = ui;
            Kn = a.stateNode.containerInfo, ui = true, sl(e, t, a), Kn = s, ui = f3;
          }
          return;
        }
        case x:
        case k2:
        case re:
        case ee: {
          if (!qn) {
            var m3 = a.updateQueue;
            if (m3 !== null) {
              var h3 = m3.lastEffect;
              if (h3 !== null) {
                var S = h3.next, w = S;
                do {
                  var O = w, _ = O.destroy, P = O.tag;
                  _ !== void 0 && ((P & Ui) !== Yr ? Cv(a, t, _) : (P & En) !== Yr && (Rw(a), a.mode & Et ? (Ai(), Cv(a, t, _), Mi(a)) : Cv(a, t, _), Ew())), w = w.next;
                } while (w !== S);
              }
            }
          }
          sl(e, t, a);
          return;
        }
        case T: {
          if (!qn) {
            Ls(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && _0(a, t, z);
          }
          sl(e, t, a);
          return;
        }
        case yt: {
          sl(e, t, a);
          return;
        }
        case Te: {
          if (a.mode & nt) {
            var F = qn;
            qn = F || a.memoizedState !== null, sl(e, t, a), qn = F;
          } else
            sl(e, t, a);
          break;
        }
        default: {
          sl(e, t, a);
          return;
        }
      }
    }
    function DM(e) {
      var t = e.memoizedState;
    }
    function CM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i3 = t.alternate;
        if (i3 !== null) {
          var l3 = i3.memoizedState;
          if (l3 !== null) {
            var s = l3.dehydrated;
            s !== null && s$(s);
          }
        }
      }
    }
    function YC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new lM()), t.forEach(function(i3) {
          var l3 = RA.bind(null, e, i3);
          if (!a.has(i3)) {
            if (a.add(i3), Ka)
              if (Os !== null && Ns !== null)
                Ff(Ns, Os);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i3.then(l3, l3);
          }
        });
      }
    }
    function RM(e, t, a) {
      Os = a, Ns = e, zt(t), QC(t, e), zt(t), Os = null, Ns = null;
    }
    function si(e, t, a) {
      var i3 = t.deletions;
      if (i3 !== null)
        for (var l3 = 0; l3 < i3.length; l3++) {
          var s = i3[l3];
          try {
            xM(e, t, s);
          } catch (h3) {
            Mt(s, t, h3);
          }
        }
      var f3 = Vu();
      if (t.subtreeFlags & Ah)
        for (var m3 = t.child; m3 !== null; )
          zt(m3), QC(m3, e), m3 = m3.sibling;
      zt(f3);
    }
    function QC(e, t, a) {
      var i3 = e.alternate, l3 = e.flags;
      switch (e.tag) {
        case x:
        case k2:
        case re:
        case ee: {
          if (si(t, e), zi(e), l3 & lt) {
            try {
              li(Ui | Rn, e, e.return), ul(Ui | Rn, e);
            } catch (Ne) {
              Mt(e, e.return, Ne);
            }
            if (e.mode & Et) {
              try {
                Ai(), li(En | Rn, e, e.return);
              } catch (Ne) {
                Mt(e, e.return, Ne);
              }
              Mi(e);
            } else
              try {
                li(En | Rn, e, e.return);
              } catch (Ne) {
                Mt(e, e.return, Ne);
              }
          }
          return;
        }
        case T: {
          si(t, e), zi(e), l3 & Qo && i3 !== null && Ls(i3, i3.return);
          return;
        }
        case H: {
          si(t, e), zi(e), l3 & Qo && i3 !== null && Ls(i3, i3.return);
          {
            if (e.flags & Cc) {
              var s = e.stateNode;
              try {
                Fx(s);
              } catch (Ne) {
                Mt(e, e.return, Ne);
              }
            }
            if (l3 & lt) {
              var f3 = e.stateNode;
              if (f3 != null) {
                var m3 = e.memoizedProps, h3 = i3 !== null ? i3.memoizedProps : m3, S = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    MI(f3, w, S, h3, m3, e);
                  } catch (Ne) {
                    Mt(e, e.return, Ne);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (si(t, e), zi(e), l3 & lt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, _ = e.memoizedProps, P = i3 !== null ? i3.memoizedProps : _;
            try {
              AI(O, P, _);
            } catch (Ne) {
              Mt(e, e.return, Ne);
            }
          }
          return;
        }
        case U: {
          if (si(t, e), zi(e), l3 & lt && i3 !== null) {
            var z = i3.memoizedState;
            if (z.isDehydrated)
              try {
                u$(t.containerInfo);
              } catch (Ne) {
                Mt(e, e.return, Ne);
              }
          }
          return;
        }
        case j2: {
          si(t, e), zi(e);
          return;
        }
        case X: {
          si(t, e), zi(e);
          var F = e.child;
          if (F.flags & Xl) {
            var de = F.stateNode, De = F.memoizedState, Se = De !== null;
            if (de.isHidden = Se, Se) {
              var qe = F.alternate !== null && F.alternate.memoizedState !== null;
              qe || cA();
            }
          }
          if (l3 & lt) {
            try {
              DM(e);
            } catch (Ne) {
              Mt(e, e.return, Ne);
            }
            YC(e);
          }
          return;
        }
        case Te: {
          var Ke = i3 !== null && i3.memoizedState !== null;
          if (e.mode & nt) {
            var I = qn;
            qn = I || Ke, si(t, e), qn = I;
          } else
            si(t, e);
          if (zi(e), l3 & Xl) {
            var Y = e.stateNode, $ = e.memoizedState, Z = $ !== null, me = e;
            if (Y.isHidden = Z, Z && !Ke && (me.mode & nt) !== _e) {
              ye = me;
              for (var ce = me.child; ce !== null; )
                ye = ce, TM(ce), ce = ce.sibling;
            }
            gM(me, Z);
          }
          return;
        }
        case dt: {
          si(t, e), zi(e), l3 & lt && YC(e);
          return;
        }
        case yt:
          return;
        default: {
          si(t, e), zi(e);
          return;
        }
      }
    }
    function zi(e) {
      var t = e.flags;
      if (t & vn) {
        try {
          wM(e);
        } catch (a) {
          Mt(e, e.return, a);
        }
        e.flags &= ~vn;
      }
      t & no && (e.flags &= ~no);
    }
    function EM(e, t, a) {
      Os = a, Ns = t, ye = e, WC(e, t, a), Os = null, Ns = null;
    }
    function WC(e, t, a) {
      for (var i3 = (e.mode & nt) !== _e; ye !== null; ) {
        var l3 = ye, s = l3.child;
        if (l3.tag === Te && i3) {
          var f3 = l3.memoizedState !== null, m3 = f3 || Dv;
          if (m3) {
            L0(e, t, a);
            continue;
          } else {
            var h3 = l3.alternate, S = h3 !== null && h3.memoizedState !== null, w = S || qn, O = Dv, _ = qn;
            Dv = m3, qn = w, qn && !_ && (ye = l3, kM(l3));
            for (var P = s; P !== null; )
              ye = P, WC(P, t, a), P = P.sibling;
            ye = l3, Dv = O, qn = _, L0(e, t, a);
            continue;
          }
        }
        (l3.subtreeFlags & Ec) !== ke && s !== null ? (s.return = l3, ye = s) : L0(e, t, a);
      }
    }
    function L0(e, t, a) {
      for (; ye !== null; ) {
        var i3 = ye;
        if ((i3.flags & Ec) !== ke) {
          var l3 = i3.alternate;
          zt(i3);
          try {
            hM(t, l3, i3, a);
          } catch (f3) {
            Mt(i3, i3.return, f3);
          }
          un();
        }
        if (i3 === e) {
          ye = null;
          return;
        }
        var s = i3.sibling;
        if (s !== null) {
          s.return = i3.return, ye = s;
          return;
        }
        ye = i3.return;
      }
    }
    function TM(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        switch (t.tag) {
          case x:
          case k2:
          case re:
          case ee: {
            if (t.mode & Et)
              try {
                Ai(), li(En, t, t.return);
              } finally {
                Mi(t);
              }
            else
              li(En, t, t.return);
            break;
          }
          case T: {
            Ls(t, t.return);
            var i3 = t.stateNode;
            typeof i3.componentWillUnmount == "function" && _0(t, t.return, i3);
            break;
          }
          case H: {
            Ls(t, t.return);
            break;
          }
          case Te: {
            var l3 = t.memoizedState !== null;
            if (l3) {
              BC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ye = a) : BC(e);
      }
    }
    function BC(e) {
      for (; ye !== null; ) {
        var t = ye;
        if (t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function kM(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        if (t.tag === Te) {
          var i3 = t.memoizedState !== null;
          if (i3) {
            XC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ye = a) : XC(e);
      }
    }
    function XC(e) {
      for (; ye !== null; ) {
        var t = ye;
        zt(t);
        try {
          yM(t);
        } catch (i3) {
          Mt(t, t.return, i3);
        }
        if (un(), t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function _M(e, t, a, i3) {
      ye = t, OM(t, e, a, i3);
    }
    function OM(e, t, a, i3) {
      for (; ye !== null; ) {
        var l3 = ye, s = l3.child;
        (l3.subtreeFlags & Zu) !== ke && s !== null ? (s.return = l3, ye = s) : NM(e, t, a, i3);
      }
    }
    function NM(e, t, a, i3) {
      for (; ye !== null; ) {
        var l3 = ye;
        if ((l3.flags & qa) !== ke) {
          zt(l3);
          try {
            LM(t, l3, a, i3);
          } catch (f3) {
            Mt(l3, l3.return, f3);
          }
          un();
        }
        if (l3 === e) {
          ye = null;
          return;
        }
        var s = l3.sibling;
        if (s !== null) {
          s.return = l3.return, ye = s;
          return;
        }
        ye = l3.return;
      }
    }
    function LM(e, t, a, i3) {
      switch (t.tag) {
        case x:
        case k2:
        case ee: {
          if (t.mode & Et) {
            s0();
            try {
              ul(Jn | Rn, t);
            } finally {
              u0(t);
            }
          } else
            ul(Jn | Rn, t);
          break;
        }
      }
    }
    function UM(e) {
      ye = e, IM();
    }
    function IM() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        if ((ye.flags & Wl) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i3 = 0; i3 < a.length; i3++) {
              var l3 = a[i3];
              ye = l3, AM(l3, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f3 = s.child;
                if (f3 !== null) {
                  s.child = null;
                  do {
                    var m3 = f3.sibling;
                    f3.sibling = null, f3 = m3;
                  } while (f3 !== null);
                }
              }
            }
            ye = e;
          }
        }
        (e.subtreeFlags & Zu) !== ke && t !== null ? (t.return = e, ye = t) : $M();
      }
    }
    function $M() {
      for (; ye !== null; ) {
        var e = ye;
        (e.flags & qa) !== ke && (zt(e), MM(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function MM(e) {
      switch (e.tag) {
        case x:
        case k2:
        case ee: {
          e.mode & Et ? (s0(), li(Jn | Rn, e, e.return), u0(e)) : li(Jn | Rn, e, e.return);
          break;
        }
      }
    }
    function AM(e, t) {
      for (; ye !== null; ) {
        var a = ye;
        zt(a), jM(a, t), un();
        var i3 = a.child;
        i3 !== null ? (i3.return = a, ye = i3) : zM(e);
      }
    }
    function zM(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.sibling, i3 = t.return;
        if (PC(t), t === e) {
          ye = null;
          return;
        }
        if (a !== null) {
          a.return = i3, ye = a;
          return;
        }
        ye = i3;
      }
    }
    function jM(e, t) {
      switch (e.tag) {
        case x:
        case k2:
        case ee: {
          e.mode & Et ? (s0(), li(Jn, e, t), u0(e)) : li(Jn, e, t);
          break;
        }
      }
    }
    function PM(e) {
      switch (e.tag) {
        case x:
        case k2:
        case ee: {
          try {
            ul(En | Rn, e);
          } catch (a) {
            Mt(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Mt(e, e.return, a);
          }
          break;
        }
      }
    }
    function HM(e) {
      switch (e.tag) {
        case x:
        case k2:
        case ee: {
          try {
            ul(Jn | Rn, e);
          } catch (t) {
            Mt(e, e.return, t);
          }
          break;
        }
      }
    }
    function FM(e) {
      switch (e.tag) {
        case x:
        case k2:
        case ee: {
          try {
            li(En | Rn, e, e.return);
          } catch (a) {
            Mt(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _0(e, e.return, t);
          break;
        }
      }
    }
    function VM(e) {
      switch (e.tag) {
        case x:
        case k2:
        case ee:
          try {
            li(Jn | Rn, e, e.return);
          } catch (t) {
            Mt(e, e.return, t);
          }
      }
    }
    var YM = 0, QM = 1, WM = 2, BM = 3, XM = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Nf = Symbol.for;
      YM = Nf("selector.component"), QM = Nf("selector.has_pseudo_class"), WM = Nf("selector.role"), BM = Nf("selector.test_id"), XM = Nf("selector.text");
    }
    var JM = [];
    function GM() {
      JM.forEach(function(e) {
        return e();
      });
    }
    var qM = o.ReactCurrentActQueue;
    function KM(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== false;
      }
    }
    function JC() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && qM.current !== null && d("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ZM = Math.ceil, U0 = o.ReactCurrentDispatcher, I0 = o.ReactCurrentOwner, Zn = o.ReactCurrentBatchConfig, ci = o.ReactCurrentActQueue, _n = 0, GC = 1, er = 2, Ia = 4, ho = 0, Lf = 1, hu = 2, Rv = 3, Uf = 4, qC = 5, $0 = 6, rt = _n, kr = null, Jt = null, On = G, ji = G, M0 = Zo(G), Nn = ho, If = null, A0 = G, Ev = G, $f = G, Tv = G, Mf = null, Qr = null, z0 = 0, KC = 500, ZC = 1 / 0, eA = 500, yo = null;
    function Af() {
      ZC = zn() + eA;
    }
    function eR() {
      return ZC;
    }
    var kv = false, j0 = null, Us = null, yu = false, cl = null, zf = G, P0 = [], H0 = null, tA = 50, jf = 0, F0 = null, V0 = false, _v = false, nA = 50, Is = 0, Ov = null, Pf = jt, Nv = G, tR = false;
    function Lv() {
      return kr;
    }
    function _r() {
      return (rt & (er | Ia)) !== _n ? zn() : (Pf !== jt || (Pf = zn()), Pf);
    }
    function fl(e) {
      var t = e.mode;
      if ((t & nt) === _e)
        return Ie;
      if ((rt & er) !== _n && On !== G)
        return Uc(On);
      var a = B$() !== W$;
      if (a) {
        if (Zn.transition !== null) {
          var i3 = Zn.transition;
          i3._updatedFibers || (i3._updatedFibers = /* @__PURE__ */ new Set()), i3._updatedFibers.add(e);
        }
        return Nv === Pn && (Nv = Iw()), Nv;
      }
      var l3 = Za();
      if (l3 !== Pn)
        return l3;
      var s = NI();
      return s;
    }
    function rA(e) {
      var t = e.mode;
      return (t & nt) === _e ? Ie : tL();
    }
    function Ln(e, t, a, i3) {
      TA(), tR && d("useInsertionEffect must not schedule updates."), V0 && (_v = true), Ic(e, a, i3), (rt & er) !== G && e === kr ? OA(t) : (Ka && Aw(e, t, a), NA(t), e === kr && ((rt & er) === _n && ($f = Ye($f, a)), Nn === Uf && dl(e, On)), Wr(e, i3), a === Ie && rt === _n && (t.mode & nt) === _e && !ci.isBatchingLegacy && (Af(), Zx()));
    }
    function aA(e, t, a) {
      var i3 = e.current;
      i3.lanes = t, Ic(e, t, a), Wr(e, a);
    }
    function iA(e) {
      return (rt & er) !== _n;
    }
    function Wr(e, t) {
      var a = e.callbackNode;
      JN(e, t);
      var i3 = Zd(e, e === kr ? On : G);
      if (i3 === G) {
        a !== null && yR(a), e.callbackNode = null, e.callbackPriority = Pn;
        return;
      }
      var l3 = tu(i3), s = e.callbackPriority;
      if (s === l3 && !(ci.current !== null && a !== G0)) {
        a == null && s !== Ie && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && yR(a);
      var f3;
      if (l3 === Ie)
        e.tag === el ? (ci.isBatchingLegacy !== null && (ci.didScheduleLegacyUpdate = true), _$(aR.bind(null, e))) : Kx(aR.bind(null, e)), ci.current !== null ? ci.current.push(tl) : UI(function() {
          (rt & (er | Ia)) === _n && tl();
        }), f3 = null;
      else {
        var m3;
        switch (Pw(i3)) {
          case ca:
            m3 = Jd;
            break;
          case oo:
            m3 = zh;
            break;
          case lo:
            m3 = ql;
            break;
          case np:
            m3 = jh;
            break;
          default:
            m3 = ql;
            break;
        }
        f3 = q0(m3, nR.bind(null, e));
      }
      e.callbackPriority = l3, e.callbackNode = f3;
    }
    function nR(e, t) {
      if (x2(), Pf = jt, Nv = G, (rt & (er | Ia)) !== _n)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i3 = So();
      if (i3 && e.callbackNode !== a)
        return null;
      var l3 = Zd(e, e === kr ? On : G);
      if (l3 === G)
        return null;
      var s = !ep(e, l3) && !eL(e, l3) && !t, f3 = s ? mA(e, l3) : Iv(e, l3);
      if (f3 !== ho) {
        if (f3 === hu) {
          var m3 = ly(e);
          m3 !== G && (l3 = m3, f3 = Y0(e, m3));
        }
        if (f3 === Lf) {
          var h3 = If;
          throw gu(e, G), dl(e, l3), Wr(e, zn()), h3;
        }
        if (f3 === $0)
          dl(e, l3);
        else {
          var S = !ep(e, l3), w = e.current.alternate;
          if (S && !lA(w)) {
            if (f3 = Iv(e, l3), f3 === hu) {
              var O = ly(e);
              O !== G && (l3 = O, f3 = Y0(e, O));
            }
            if (f3 === Lf) {
              var _ = If;
              throw gu(e, G), dl(e, l3), Wr(e, zn()), _;
            }
          }
          e.finishedWork = w, e.finishedLanes = l3, oA(e, f3, l3);
        }
      }
      return Wr(e, zn()), e.callbackNode === a ? nR.bind(null, e) : null;
    }
    function Y0(e, t) {
      var a = Mf;
      if (rp(e)) {
        var i3 = gu(e, t);
        i3.flags |= to, x$(e.containerInfo);
      }
      var l3 = Iv(e, t);
      if (l3 !== hu) {
        var s = Qr;
        Qr = a, s !== null && rR(s);
      }
      return l3;
    }
    function rR(e) {
      Qr === null ? Qr = e : Qr.push.apply(Qr, e);
    }
    function oA(e, t, a) {
      switch (t) {
        case ho:
        case Lf:
          throw new Error("Root did not complete. This is a bug in React.");
        case hu: {
          Su(e, Qr, yo);
          break;
        }
        case Rv: {
          if (dl(e, a), Lw(a) && !gR()) {
            var i3 = z0 + KC - zn();
            if (i3 > 10) {
              var l3 = Zd(e, G);
              if (l3 !== G)
                break;
              var s = e.suspendedLanes;
              if (!as(s, a)) {
                var f3 = _r();
                Mw(e, s);
                break;
              }
              e.timeoutHandle = Py(Su.bind(null, e, Qr, yo), i3);
              break;
            }
          }
          Su(e, Qr, yo);
          break;
        }
        case Uf: {
          if (dl(e, a), ZN(a))
            break;
          if (!gR()) {
            var m3 = BN(e, a), h3 = m3, S = zn() - h3, w = EA(S) - S;
            if (w > 10) {
              e.timeoutHandle = Py(Su.bind(null, e, Qr, yo), w);
              break;
            }
          }
          Su(e, Qr, yo);
          break;
        }
        case qC: {
          Su(e, Qr, yo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function lA(e) {
      for (var t = e; ; ) {
        if (t.flags & Bd) {
          var a = t.updateQueue;
          if (a !== null) {
            var i3 = a.stores;
            if (i3 !== null)
              for (var l3 = 0; l3 < i3.length; l3++) {
                var s = i3[l3], f3 = s.getSnapshot, m3 = s.value;
                try {
                  if (!da(f3(), m3))
                    return false;
                } catch {
                  return false;
                }
              }
          }
        }
        var h3 = t.child;
        if (t.subtreeFlags & Bd && h3 !== null) {
          h3.return = t, t = h3;
          continue;
        }
        if (t === e)
          return true;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return true;
    }
    function dl(e, t) {
      t = tp(t, Tv), t = tp(t, $f), rL(e, t);
    }
    function aR(e) {
      if (D2(), (rt & (er | Ia)) !== _n)
        throw new Error("Should not already be working.");
      So();
      var t = Zd(e, G);
      if (!sa(t, Ie))
        return Wr(e, zn()), null;
      var a = Iv(e, t);
      if (e.tag !== el && a === hu) {
        var i3 = ly(e);
        i3 !== G && (t = i3, a = Y0(e, i3));
      }
      if (a === Lf) {
        var l3 = If;
        throw gu(e, G), dl(e, t), Wr(e, zn()), l3;
      }
      if (a === $0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Su(e, Qr, yo), Wr(e, zn()), null;
    }
    function uA(e, t) {
      t !== G && (fy(e, Ye(t, Ie)), Wr(e, zn()), (rt & (er | Ia)) === _n && (Af(), tl()));
    }
    function Q0(e, t) {
      var a = rt;
      rt |= GC;
      try {
        return e(t);
      } finally {
        rt = a, rt === _n && !ci.isBatchingLegacy && (Af(), Zx());
      }
    }
    function sA(e, t, a, i3, l3) {
      var s = Za(), f3 = Zn.transition;
      try {
        return Zn.transition = null, Hn(ca), e(t, a, i3, l3);
      } finally {
        Hn(s), Zn.transition = f3, rt === _n && Af();
      }
    }
    function go(e) {
      cl !== null && cl.tag === el && (rt & (er | Ia)) === _n && So();
      var t = rt;
      rt |= GC;
      var a = Zn.transition, i3 = Za();
      try {
        return Zn.transition = null, Hn(ca), e ? e() : void 0;
      } finally {
        Hn(i3), Zn.transition = a, rt = t, (rt & (er | Ia)) === _n && tl();
      }
    }
    function iR() {
      return (rt & (er | Ia)) !== _n;
    }
    function Uv(e, t) {
      cr(M0, ji, e), ji = Ye(ji, t), A0 = Ye(A0, t);
    }
    function W0(e) {
      ji = M0.current, sr(M0, e);
    }
    function gu(e, t) {
      e.finishedWork = null, e.finishedLanes = G;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, LI(a)), Jt !== null)
        for (var i3 = Jt.return; i3 !== null; ) {
          var l3 = i3.alternate;
          UC(l3, i3), i3 = i3.return;
        }
      kr = e;
      var s = bu(e.current, null);
      return Jt = s, On = ji = A0 = t, Nn = ho, If = null, Ev = G, $f = G, Tv = G, Mf = null, Qr = null, q$(), ni.discardPendingWarnings(), s;
    }
    function oR(e, t) {
      do {
        var a = Jt;
        try {
          if (Hp(), $D(), un(), I0.current = null, a === null || a.return === null) {
            Nn = Lf, If = t, Jt = null;
            return;
          }
          if (ct && a.mode & Et && Sv(a, true), We)
            if (es(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i3 = t;
              $N(a, i3, On);
            } else
              IN(a, t, On);
          k22(e, a.return, a, t, On), cR(a);
        } catch (l3) {
          t = l3, Jt === a && a !== null ? (a = a.return, Jt = a) : a = Jt;
          continue;
        }
        return;
      } while (true);
    }
    function lR() {
      var e = U0.current;
      return U0.current = vv, e === null ? vv : e;
    }
    function uR(e) {
      U0.current = e;
    }
    function cA() {
      z0 = zn();
    }
    function Hf(e) {
      Ev = Ye(e, Ev);
    }
    function fA() {
      Nn === ho && (Nn = Rv);
    }
    function B0() {
      (Nn === ho || Nn === Rv || Nn === hu) && (Nn = Uf), kr !== null && (uy(Ev) || uy($f)) && dl(kr, On);
    }
    function dA(e) {
      Nn !== Uf && (Nn = hu), Mf === null ? Mf = [e] : Mf.push(e);
    }
    function pA() {
      return Nn === ho;
    }
    function Iv(e, t) {
      var a = rt;
      rt |= er;
      var i3 = lR();
      if (kr !== e || On !== t) {
        if (Ka) {
          var l3 = e.memoizedUpdaters;
          l3.size > 0 && (Ff(e, On), l3.clear()), zw(e, t);
        }
        yo = jw(), gu(e, t);
      }
      Tw(t);
      do
        try {
          vA();
          break;
        } catch (s) {
          oR(e, s);
        }
      while (true);
      if (Hp(), rt = a, uR(i3), Jt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return kw(), kr = null, On = G, Nn;
    }
    function vA() {
      for (; Jt !== null; )
        sR(Jt);
    }
    function mA(e, t) {
      var a = rt;
      rt |= er;
      var i3 = lR();
      if (kr !== e || On !== t) {
        if (Ka) {
          var l3 = e.memoizedUpdaters;
          l3.size > 0 && (Ff(e, On), l3.clear()), zw(e, t);
        }
        yo = jw(), Af(), gu(e, t);
      }
      Tw(t);
      do
        try {
          hA();
          break;
        } catch (s) {
          oR(e, s);
        }
      while (true);
      return Hp(), uR(i3), rt = a, Jt !== null ? (PN(), ho) : (kw(), kr = null, On = G, Nn);
    }
    function hA() {
      for (; Jt !== null && !vN(); )
        sR(Jt);
    }
    function sR(e) {
      var t = e.alternate;
      zt(e);
      var a;
      (e.mode & Et) !== _e ? (l0(e), a = X0(t, e, ji), Sv(e, true)) : a = X0(t, e, ji), un(), e.memoizedProps = e.pendingProps, a === null ? cR(e) : Jt = a, I0.current = null;
    }
    function cR(e) {
      var t = e;
      do {
        var a = t.alternate, i3 = t.return;
        if ((t.flags & Rc) === ke) {
          zt(t);
          var l3 = void 0;
          if ((t.mode & Et) === _e ? l3 = LC(a, t, ji) : (l0(t), l3 = LC(a, t, ji), Sv(t, false)), un(), l3 !== null) {
            Jt = l3;
            return;
          }
        } else {
          var s = oM(a, t);
          if (s !== null) {
            s.flags &= uN, Jt = s;
            return;
          }
          if ((t.mode & Et) !== _e) {
            Sv(t, false);
            for (var f3 = t.actualDuration, m3 = t.child; m3 !== null; )
              f3 += m3.actualDuration, m3 = m3.sibling;
            t.actualDuration = f3;
          }
          if (i3 !== null)
            i3.flags |= Rc, i3.subtreeFlags = ke, i3.deletions = null;
          else {
            Nn = $0, Jt = null;
            return;
          }
        }
        var h3 = t.sibling;
        if (h3 !== null) {
          Jt = h3;
          return;
        }
        t = i3, Jt = t;
      } while (t !== null);
      Nn === ho && (Nn = qC);
    }
    function Su(e, t, a) {
      var i3 = Za(), l3 = Zn.transition;
      try {
        Zn.transition = null, Hn(ca), yA(e, t, a, i3);
      } finally {
        Zn.transition = l3, Hn(i3);
      }
      return null;
    }
    function yA(e, t, a, i3) {
      do
        So();
      while (cl !== null);
      if (kA(), (rt & (er | Ia)) !== _n)
        throw new Error("Should not already be working.");
      var l3 = e.finishedWork, s = e.finishedLanes;
      if (TN(s), l3 === null)
        return Cw(), null;
      if (s === G && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = G, l3 === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pn;
      var f3 = Ye(l3.lanes, l3.childLanes);
      aL(e, f3), e === kr && (kr = null, Jt = null, On = G), ((l3.subtreeFlags & Zu) !== ke || (l3.flags & Zu) !== ke) && (yu || (yu = true, H0 = a, q0(ql, function() {
        return So(), null;
      })));
      var m3 = (l3.subtreeFlags & (Mh | Ah | Ec | Zu)) !== ke, h3 = (l3.flags & (Mh | Ah | Ec | Zu)) !== ke;
      if (m3 || h3) {
        var S = Zn.transition;
        Zn.transition = null;
        var w = Za();
        Hn(ca);
        var O = rt;
        rt |= Ia, I0.current = null;
        var _ = fM(e, l3);
        oC(), RM(e, l3, s), RI(e.containerInfo), e.current = l3, MN(s), EM(l3, e, s), AN(), mN(), rt = O, Hn(w), Zn.transition = S;
      } else
        e.current = l3, oC();
      var P = yu;
      if (yu ? (yu = false, cl = e, zf = s) : (Is = 0, Ov = null), f3 = e.pendingLanes, f3 === G && (Us = null), P || vR(e.current, false), xN(l3.stateNode, i3), Ka && e.memoizedUpdaters.clear(), GM(), Wr(e, zn()), t !== null)
        for (var z = e.onRecoverableError, F = 0; F < t.length; F++) {
          var de = t[F], De = de.stack, Se = de.digest;
          z(de.value, { componentStack: De, digest: Se });
        }
      if (kv) {
        kv = false;
        var qe = j0;
        throw j0 = null, qe;
      }
      return sa(zf, Ie) && e.tag !== el && So(), f3 = e.pendingLanes, sa(f3, Ie) ? (w2(), e === F0 ? jf++ : (jf = 0, F0 = e)) : jf = 0, tl(), Cw(), null;
    }
    function So() {
      if (cl !== null) {
        var e = Pw(zf), t = uL(lo, e), a = Zn.transition, i3 = Za();
        try {
          return Zn.transition = null, Hn(t), SA();
        } finally {
          Hn(i3), Zn.transition = a;
        }
      }
      return false;
    }
    function gA(e) {
      P0.push(e), yu || (yu = true, q0(ql, function() {
        return So(), null;
      }));
    }
    function SA() {
      if (cl === null)
        return false;
      var e = H0;
      H0 = null;
      var t = cl, a = zf;
      if (cl = null, zf = G, (rt & (er | Ia)) !== _n)
        throw new Error("Cannot flush passive effects while already rendering.");
      V0 = true, _v = false, zN(a);
      var i3 = rt;
      rt |= Ia, UM(t.current), _M(t, t.current, a, e);
      {
        var l3 = P0;
        P0 = [];
        for (var s = 0; s < l3.length; s++) {
          var f3 = l3[s];
          mM(t, f3);
        }
      }
      jN(), vR(t.current, true), rt = i3, tl(), _v ? t === Ov ? Is++ : (Is = 0, Ov = t) : Is = 0, V0 = false, _v = false, DN(t);
      {
        var m3 = t.current.stateNode;
        m3.effectDuration = 0, m3.passiveEffectDuration = 0;
      }
      return true;
    }
    function fR(e) {
      return Us !== null && Us.has(e);
    }
    function bA(e) {
      Us === null ? Us = /* @__PURE__ */ new Set([e]) : Us.add(e);
    }
    function wA(e) {
      kv || (kv = true, j0 = e);
    }
    var xA = wA;
    function dR(e, t, a) {
      var i3 = vu(a, t), l3 = uC(e, i3, Ie), s = rl(e, l3, Ie), f3 = _r();
      s !== null && (Ic(s, Ie, f3), Wr(s, f3));
    }
    function Mt(e, t, a) {
      if (uM(a), Vf(false), e.tag === U) {
        dR(e, e, a);
        return;
      }
      var i3 = null;
      for (i3 = t; i3 !== null; ) {
        if (i3.tag === U) {
          dR(i3, e, a);
          return;
        } else if (i3.tag === T) {
          var l3 = i3.type, s = i3.stateNode;
          if (typeof l3.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !fR(s)) {
            var f3 = vu(a, e), m3 = p0(i3, f3, Ie), h3 = rl(i3, m3, Ie), S = _r();
            h3 !== null && (Ic(h3, Ie, S), Wr(h3, S));
            return;
          }
        }
        i3 = i3.return;
      }
      d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function DA(e, t, a) {
      var i3 = e.pingCache;
      i3 !== null && i3.delete(t);
      var l3 = _r();
      Mw(e, a), LA(e), kr === e && as(On, a) && (Nn === Uf || Nn === Rv && Lw(On) && zn() - z0 < KC ? gu(e, G) : Tv = Ye(Tv, a)), Wr(e, l3);
    }
    function pR(e, t) {
      t === Pn && (t = rA(e));
      var a = _r(), i3 = Vr(e, t);
      i3 !== null && (Ic(i3, t, a), Wr(i3, a));
    }
    function CA(e) {
      var t = e.memoizedState, a = Pn;
      t !== null && (a = t.retryLane), pR(e, a);
    }
    function RA(e, t) {
      var a = Pn, i3;
      switch (e.tag) {
        case X:
          i3 = e.stateNode;
          var l3 = e.memoizedState;
          l3 !== null && (a = l3.retryLane);
          break;
        case dt:
          i3 = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i3 !== null && i3.delete(t), pR(e, a);
    }
    function EA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ZM(e / 1960) * 1960;
    }
    function TA() {
      if (jf > tA)
        throw jf = 0, F0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Is > nA && (Is = 0, Ov = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function kA() {
      ni.flushLegacyContextWarning(), ni.flushPendingUnsafeLifecycleWarnings();
    }
    function vR(e, t) {
      zt(e), $v(e, ro, FM), t && $v(e, Xd, VM), $v(e, ro, PM), t && $v(e, Xd, HM), un();
    }
    function $v(e, t, a) {
      for (var i3 = e, l3 = null; i3 !== null; ) {
        var s = i3.subtreeFlags & t;
        i3 !== l3 && i3.child !== null && s !== ke ? i3 = i3.child : ((i3.flags & t) !== ke && a(i3), i3.sibling !== null ? i3 = i3.sibling : i3 = l3 = i3.return);
      }
    }
    var Mv = null;
    function mR(e) {
      {
        if ((rt & er) !== _n || !(e.mode & nt))
          return;
        var t = e.tag;
        if (t !== V && t !== U && t !== T && t !== x && t !== k2 && t !== re && t !== ee)
          return;
        var a = ze(e) || "ReactComponent";
        if (Mv !== null) {
          if (Mv.has(a))
            return;
          Mv.add(a);
        } else
          Mv = /* @__PURE__ */ new Set([a]);
        var i3 = Cn;
        try {
          zt(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i3 ? zt(e) : un();
        }
      }
    }
    var X0;
    {
      var _A = null;
      X0 = function(e, t, a) {
        var i3 = DR(_A, t);
        try {
          return TC(e, t, a);
        } catch (s) {
          if (A$() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Hp(), $D(), UC(e, t), DR(t, i3), t.mode & Et && l0(t), Oh(null, TC, null, e, t, a), aN()) {
            var l3 = Nh();
            typeof l3 == "object" && l3 !== null && l3._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = true);
          }
          throw s;
        }
      };
    }
    var hR = false, J0;
    J0 = /* @__PURE__ */ new Set();
    function OA(e) {
      if (Ci && !g22())
        switch (e.tag) {
          case x:
          case k2:
          case ee: {
            var t = Jt && ze(Jt) || "Unknown", a = t;
            if (!J0.has(a)) {
              J0.add(a);
              var i3 = ze(e) || "Unknown";
              d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i3, t, t);
            }
            break;
          }
          case T: {
            hR || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hR = true);
            break;
          }
        }
    }
    function Ff(e, t) {
      if (Ka) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i3) {
          Aw(e, i3, t);
        });
      }
    }
    var G0 = {};
    function q0(e, t) {
      {
        var a = ci.current;
        return a !== null ? (a.push(t), G0) : Dw(e, t);
      }
    }
    function yR(e) {
      if (e !== G0)
        return pN(e);
    }
    function gR() {
      return ci.current !== null;
    }
    function NA(e) {
      {
        if (e.mode & nt) {
          if (!JC())
            return;
        } else if (!KM() || rt !== _n || e.tag !== x && e.tag !== k2 && e.tag !== ee)
          return;
        if (ci.current === null) {
          var t = Cn;
          try {
            zt(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ze(e));
          } finally {
            t ? zt(e) : un();
          }
        }
      }
    }
    function LA(e) {
      e.tag !== el && JC() && ci.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Vf(e) {
      tR = e;
    }
    var $a = null, $s = null, UA = function(e) {
      $a = e;
    };
    function Ms(e) {
      {
        if ($a === null)
          return e;
        var t = $a(e);
        return t === void 0 ? e : t.current;
      }
    }
    function K0(e) {
      return Ms(e);
    }
    function Z0(e) {
      {
        if ($a === null)
          return e;
        var t = $a(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Ms(e.render);
            if (e.render !== a) {
              var i3 = { $$typeof: ve, render: a };
              return e.displayName !== void 0 && (i3.displayName = e.displayName), i3;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function SR(e, t) {
      {
        if ($a === null)
          return false;
        var a = e.elementType, i3 = t.type, l3 = false, s = typeof i3 == "object" && i3 !== null ? i3.$$typeof : null;
        switch (e.tag) {
          case T: {
            typeof i3 == "function" && (l3 = true);
            break;
          }
          case x: {
            (typeof i3 == "function" || s === Ce) && (l3 = true);
            break;
          }
          case k2: {
            (s === ve || s === Ce) && (l3 = true);
            break;
          }
          case re:
          case ee: {
            (s === He || s === Ce) && (l3 = true);
            break;
          }
          default:
            return false;
        }
        if (l3) {
          var f3 = $a(a);
          if (f3 !== void 0 && f3 === $a(i3))
            return true;
        }
        return false;
      }
    }
    function bR(e) {
      {
        if ($a === null || typeof WeakSet != "function")
          return;
        $s === null && ($s = /* @__PURE__ */ new WeakSet()), $s.add(e);
      }
    }
    var IA = function(e, t) {
      {
        if ($a === null)
          return;
        var a = t.staleFamilies, i3 = t.updatedFamilies;
        So(), go(function() {
          eS(e.current, i3, a);
        });
      }
    }, $A = function(e, t) {
      {
        if (e.context !== pa)
          return;
        So(), go(function() {
          Yf(t, e, null, null);
        });
      }
    };
    function eS(e, t, a) {
      {
        var i3 = e.alternate, l3 = e.child, s = e.sibling, f3 = e.tag, m3 = e.type, h3 = null;
        switch (f3) {
          case x:
          case ee:
          case T:
            h3 = m3;
            break;
          case k2:
            h3 = m3.render;
            break;
        }
        if ($a === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = false, w = false;
        if (h3 !== null) {
          var O = $a(h3);
          O !== void 0 && (a.has(O) ? w = true : t.has(O) && (f3 === T ? w = true : S = true));
        }
        if ($s !== null && ($s.has(e) || i3 !== null && $s.has(i3)) && (w = true), w && (e._debugNeedsRemount = true), w || S) {
          var _ = Vr(e, Ie);
          _ !== null && Ln(_, e, Ie, jt);
        }
        l3 !== null && !w && eS(l3, t, a), s !== null && eS(s, t, a);
      }
    }
    var MA = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i3 = new Set(t.map(function(l3) {
          return l3.current;
        }));
        return tS(e.current, i3, a), a;
      }
    };
    function tS(e, t, a) {
      {
        var i3 = e.child, l3 = e.sibling, s = e.tag, f3 = e.type, m3 = null;
        switch (s) {
          case x:
          case ee:
          case T:
            m3 = f3;
            break;
          case k2:
            m3 = f3.render;
            break;
        }
        var h3 = false;
        m3 !== null && t.has(m3) && (h3 = true), h3 ? AA(e, a) : i3 !== null && tS(i3, t, a), l3 !== null && tS(l3, t, a);
      }
    }
    function AA(e, t) {
      {
        var a = zA(e, t);
        if (a)
          return;
        for (var i3 = e; ; ) {
          switch (i3.tag) {
            case H:
              t.add(i3.stateNode);
              return;
            case j2:
              t.add(i3.stateNode.containerInfo);
              return;
            case U:
              t.add(i3.stateNode.containerInfo);
              return;
          }
          if (i3.return === null)
            throw new Error("Expected to reach root first.");
          i3 = i3.return;
        }
      }
    }
    function zA(e, t) {
      for (var a = e, i3 = false; ; ) {
        if (a.tag === H)
          i3 = true, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i3;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i3;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return false;
    }
    var nS;
    {
      nS = false;
      try {
        var wR = Object.preventExtensions({});
      } catch {
        nS = true;
      }
    }
    function jA(e, t, a, i3) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i3, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = G, this.childLanes = G, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = false, this._debugHookTypes = null, !nS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var va = function(e, t, a, i3) {
      return new jA(e, t, a, i3);
    };
    function rS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function PA(e) {
      return typeof e == "function" && !rS(e) && e.defaultProps === void 0;
    }
    function HA(e) {
      if (typeof e == "function")
        return rS(e) ? T : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ve)
          return k2;
        if (t === He)
          return re;
      }
      return V;
    }
    function bu(e, t) {
      var a = e.alternate;
      a === null ? (a = va(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ao, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i3 = e.dependencies;
      switch (a.dependencies = i3 === null ? null : { lanes: i3.lanes, firstContext: i3.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case V:
        case x:
        case ee:
          a.type = Ms(e.type);
          break;
        case T:
          a.type = K0(e.type);
          break;
        case k2:
          a.type = Z0(e.type);
          break;
      }
      return a;
    }
    function FA(e, t) {
      e.flags &= ao | vn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = G, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i3 = a.dependencies;
        e.dependencies = i3 === null ? null : { lanes: i3.lanes, firstContext: i3.firstContext }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function VA(e, t, a) {
      var i3;
      return e === Up ? (i3 = nt, t === true && (i3 |= mn, i3 |= _i)) : i3 = _e, Ka && (i3 |= Et), va(U, null, null, i3);
    }
    function aS(e, t, a, i3, l3, s) {
      var f3 = V, m3 = e;
      if (typeof e == "function")
        rS(e) ? (f3 = T, m3 = K0(m3)) : m3 = Ms(m3);
      else if (typeof e == "string")
        f3 = H;
      else
        e:
          switch (e) {
            case ra:
              return pl(a.children, l3, s, t);
            case bi:
              f3 = Ge, l3 |= mn, (l3 & nt) !== _e && (l3 |= _i);
              break;
            case E:
              return YA(a, l3, s, t);
            case Xe:
              return QA(a, l3, s, t);
            case it:
              return WA(a, l3, s, t);
            case It:
              return xR(a, l3, s, t);
            case An:
            case ln:
            case Ea:
            case Lo:
            case Ut:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case W:
                    f3 = C;
                    break e;
                  case ae:
                    f3 = N;
                    break e;
                  case ve:
                    f3 = k2, m3 = Z0(m3);
                    break e;
                  case He:
                    f3 = re;
                    break e;
                  case Ce:
                    f3 = he, m3 = null;
                    break e;
                }
              var h3 = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h3 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var S = i3 ? ze(i3) : null;
                S && (h3 += `

Check the render method of \`` + S + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h3));
            }
          }
      var w = va(f3, a, t, l3);
      return w.elementType = e, w.type = m3, w.lanes = s, w._debugOwner = i3, w;
    }
    function iS(e, t, a) {
      var i3 = null;
      i3 = e._owner;
      var l3 = e.type, s = e.key, f3 = e.props, m3 = aS(l3, s, f3, i3, t, a);
      return m3._debugSource = e._source, m3._debugOwner = e._owner, m3;
    }
    function pl(e, t, a, i3) {
      var l3 = va(ie, e, i3, t);
      return l3.lanes = a, l3;
    }
    function YA(e, t, a, i3) {
      typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l3 = va(Q, e, i3, t | Et);
      return l3.elementType = E, l3.lanes = a, l3.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, l3;
    }
    function QA(e, t, a, i3) {
      var l3 = va(X, e, i3, t);
      return l3.elementType = Xe, l3.lanes = a, l3;
    }
    function WA(e, t, a, i3) {
      var l3 = va(dt, e, i3, t);
      return l3.elementType = it, l3.lanes = a, l3;
    }
    function xR(e, t, a, i3) {
      var l3 = va(Te, e, i3, t);
      l3.elementType = It, l3.lanes = a;
      var s = { isHidden: false };
      return l3.stateNode = s, l3;
    }
    function oS(e, t, a) {
      var i3 = va(J, e, null, t);
      return i3.lanes = a, i3;
    }
    function BA() {
      var e = va(H, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function XA(e) {
      var t = va(Re, null, null, _e);
      return t.stateNode = e, t;
    }
    function lS(e, t, a) {
      var i3 = e.children !== null ? e.children : [], l3 = va(j2, i3, e.key, t);
      return l3.lanes = a, l3.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, l3;
    }
    function DR(e, t) {
      return e === null && (e = va(V, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function JA(e, t, a, i3, l3) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pn, this.eventTimes = cy(G), this.expirationTimes = cy(jt), this.pendingLanes = G, this.suspendedLanes = G, this.pingedLanes = G, this.expiredLanes = G, this.mutableReadLanes = G, this.finishedLanes = G, this.entangledLanes = G, this.entanglements = cy(G), this.identifierPrefix = i3, this.onRecoverableError = l3, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f3 = 0; f3 < Hh; f3++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Up:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case el:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i3, l3, s, f3, m3, h3, S) {
      var w = new JA(e, t, a, m3, h3), O = VA(t, s);
      w.current = O, O.stateNode = w;
      {
        var _ = { element: i3, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        O.memoizedState = _;
      }
      return vg(O), w;
    }
    var uS = "18.2.0";
    function GA(e, t, a) {
      var i3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Mn(i3), { $$typeof: na, key: i3 == null ? null : "" + i3, children: e, containerInfo: t, implementation: a };
    }
    var sS, cS;
    sS = false, cS = {};
    function RR(e) {
      if (!e)
        return pa;
      var t = qu(e), a = k$(t);
      if (t.tag === T) {
        var i3 = t.type;
        if (Li(i3))
          return Gx(t, i3, a);
      }
      return a;
    }
    function qA(e, t) {
      {
        var a = qu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i3 = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i3);
        }
        var l3 = bw(a);
        if (l3 === null)
          return null;
        if (l3.mode & mn) {
          var s = ze(a) || "Component";
          if (!cS[s]) {
            cS[s] = true;
            var f3 = Cn;
            try {
              zt(l3), a.mode & mn ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f3 ? zt(f3) : un();
            }
          }
        }
        return l3.stateNode;
      }
    }
    function ER(e, t, a, i3, l3, s, f3, m3) {
      var h3 = false, S = null;
      return CR(e, t, h3, S, a, i3, l3, s, f3);
    }
    function TR(e, t, a, i3, l3, s, f3, m3, h3, S) {
      var w = true, O = CR(a, i3, w, e, l3, s, f3, m3, h3);
      O.context = RR(null);
      var _ = O.current, P = _r(), z = fl(_), F = vo(P, z);
      return F.callback = t ?? null, rl(_, F, z), aA(O, z, P), O;
    }
    function Yf(e, t, a, i3) {
      wN(t, e);
      var l3 = t.current, s = _r(), f3 = fl(l3);
      HN(f3);
      var m3 = RR(a);
      t.context === null ? t.context = m3 : t.pendingContext = m3, Ci && Cn !== null && !sS && (sS = true, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ze(Cn) || "Unknown"));
      var h3 = vo(s, f3);
      h3.payload = { element: e }, i3 = i3 === void 0 ? null : i3, i3 !== null && (typeof i3 != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i3), h3.callback = i3);
      var S = rl(l3, h3, f3);
      return S !== null && (Ln(S, l3, f3, s), Wp(S, l3, f3)), f3;
    }
    function Av(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case H:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function KA(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (rp(t)) {
            var a = GN(t);
            uA(t, a);
          }
          break;
        }
        case X: {
          go(function() {
            var l3 = Vr(e, Ie);
            if (l3 !== null) {
              var s = _r();
              Ln(l3, e, Ie, s);
            }
          });
          var i3 = Ie;
          fS(e, i3);
          break;
        }
      }
    }
    function kR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nL(a.retryLane, t));
    }
    function fS(e, t) {
      kR(e, t);
      var a = e.alternate;
      a && kR(a, t);
    }
    function ZA(e) {
      if (e.tag === X) {
        var t = Oc, a = Vr(e, t);
        if (a !== null) {
          var i3 = _r();
          Ln(a, e, t, i3);
        }
        fS(e, t);
      }
    }
    function ez(e) {
      if (e.tag === X) {
        var t = fl(e), a = Vr(e, t);
        if (a !== null) {
          var i3 = _r();
          Ln(a, e, t, i3);
        }
        fS(e, t);
      }
    }
    function _R(e) {
      var t = dN(e);
      return t === null ? null : t.stateNode;
    }
    var OR = function(e) {
      return null;
    };
    function tz(e) {
      return OR(e);
    }
    var NR = function(e) {
      return false;
    };
    function nz(e) {
      return NR(e);
    }
    var LR = null, UR = null, IR = null, $R = null, MR = null, AR = null, zR = null, jR = null, PR = null;
    {
      var HR = function(e, t, a) {
        var i3 = t[a], l3 = tt(e) ? e.slice() : Fe({}, e);
        return a + 1 === t.length ? (tt(l3) ? l3.splice(i3, 1) : delete l3[i3], l3) : (l3[i3] = HR(e[i3], t, a + 1), l3);
      }, FR = function(e, t) {
        return HR(e, t, 0);
      }, VR = function(e, t, a, i3) {
        var l3 = t[i3], s = tt(e) ? e.slice() : Fe({}, e);
        if (i3 + 1 === t.length) {
          var f3 = a[i3];
          s[f3] = s[l3], tt(s) ? s.splice(l3, 1) : delete s[l3];
        } else
          s[l3] = VR(e[l3], t, a, i3 + 1);
        return s;
      }, YR = function(e, t, a) {
        if (t.length !== a.length) {
          p("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i3 = 0; i3 < a.length - 1; i3++)
            if (t[i3] !== a[i3]) {
              p("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return VR(e, t, a, 0);
      }, QR = function(e, t, a, i3) {
        if (a >= t.length)
          return i3;
        var l3 = t[a], s = tt(e) ? e.slice() : Fe({}, e);
        return s[l3] = QR(e[l3], t, a + 1, i3), s;
      }, WR = function(e, t, a) {
        return QR(e, t, 0, a);
      }, dS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i3) {
        var l3 = dS(e, t);
        if (l3 !== null) {
          var s = WR(l3.memoizedState, a, i3);
          l3.memoizedState = s, l3.baseState = s, e.memoizedProps = Fe({}, e.memoizedProps);
          var f3 = Vr(e, Ie);
          f3 !== null && Ln(f3, e, Ie, jt);
        }
      }, UR = function(e, t, a) {
        var i3 = dS(e, t);
        if (i3 !== null) {
          var l3 = FR(i3.memoizedState, a);
          i3.memoizedState = l3, i3.baseState = l3, e.memoizedProps = Fe({}, e.memoizedProps);
          var s = Vr(e, Ie);
          s !== null && Ln(s, e, Ie, jt);
        }
      }, IR = function(e, t, a, i3) {
        var l3 = dS(e, t);
        if (l3 !== null) {
          var s = YR(l3.memoizedState, a, i3);
          l3.memoizedState = s, l3.baseState = s, e.memoizedProps = Fe({}, e.memoizedProps);
          var f3 = Vr(e, Ie);
          f3 !== null && Ln(f3, e, Ie, jt);
        }
      }, $R = function(e, t, a) {
        e.pendingProps = WR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i3 = Vr(e, Ie);
        i3 !== null && Ln(i3, e, Ie, jt);
      }, MR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Vr(e, Ie);
        a !== null && Ln(a, e, Ie, jt);
      }, AR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i3 = Vr(e, Ie);
        i3 !== null && Ln(i3, e, Ie, jt);
      }, zR = function(e) {
        var t = Vr(e, Ie);
        t !== null && Ln(t, e, Ie, jt);
      }, jR = function(e) {
        OR = e;
      }, PR = function(e) {
        NR = e;
      };
    }
    function rz(e) {
      var t = bw(e);
      return t === null ? null : t.stateNode;
    }
    function az(e) {
      return null;
    }
    function iz() {
      return Cn;
    }
    function oz(e) {
      var t = e.findFiberByHostInstance, a = o.ReactCurrentDispatcher;
      return bN({ bundleType: e.bundleType, version: e.version, rendererPackageName: e.rendererPackageName, rendererConfig: e.rendererConfig, overrideHookState: LR, overrideHookStateDeletePath: UR, overrideHookStateRenamePath: IR, overrideProps: $R, overridePropsDeletePath: MR, overridePropsRenamePath: AR, setErrorHandler: jR, setSuspenseHandler: PR, scheduleUpdate: zR, currentDispatcherRef: a, findHostInstanceByFiber: rz, findFiberByHostInstance: t || az, findHostInstancesForRefresh: MA, scheduleRefresh: IA, scheduleRoot: $A, setRefreshHandler: UA, getCurrentFiber: iz, reconcilerVersion: uS });
    }
    var BR = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function pS(e) {
      this._internalRoot = e;
    }
    zv.prototype.render = pS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : jv(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== pn) {
          var i3 = _R(t.current);
          i3 && i3.parentNode !== a && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yf(e, t, null, null);
    }, zv.prototype.unmount = pS.prototype.unmount = function() {
      typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iR() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), go(function() {
          Yf(null, e, null, null);
        }), Qx(t);
      }
    };
    function lz(e, t) {
      if (!jv(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      XR(e);
      var a = false, i3 = false, l3 = "", s = BR, f3 = null;
      t != null && (t.hydrate ? p("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ra && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (l3 = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && (f3 = t.transitionCallbacks));
      var m3 = ER(e, Up, null, a, i3, l3, s);
      Ep(m3.current, e);
      var h3 = e.nodeType === pn ? e.parentNode : e;
      return qc(h3), new pS(m3);
    }
    function zv(e) {
      this._internalRoot = e;
    }
    function uz(e) {
      e && SL(e);
    }
    zv.prototype.unstable_scheduleHydration = uz;
    function sz(e, t, a) {
      if (!jv(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      XR(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i3 = a ?? null, l3 = a != null && a.hydratedSources || null, s = false, f3 = false, m3 = "", h3 = BR;
      a != null && (a.unstable_strictMode === true && (s = true), a.identifierPrefix !== void 0 && (m3 = a.identifierPrefix), a.onRecoverableError !== void 0 && (h3 = a.onRecoverableError));
      var S = TR(t, null, e, Up, i3, s, f3, m3, h3);
      if (Ep(S.current, e), qc(e), l3)
        for (var w = 0; w < l3.length; w++) {
          var O = l3[w];
          d2(S, O);
        }
      return new zv(S);
    }
    function jv(e) {
      return !!(e && (e.nodeType === Hr || e.nodeType === eo || e.nodeType === Sh || !q));
    }
    function Qf(e) {
      return !!(e && (e.nodeType === Hr || e.nodeType === eo || e.nodeType === Sh || e.nodeType === pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function XR(e) {
      e.nodeType === Hr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sf(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var cz = o.ReactCurrentOwner, JR;
    JR = function(e) {
      if (e._reactRootContainer && e.nodeType !== pn) {
        var t = _R(e._reactRootContainer.current);
        t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i3 = vS(e), l3 = !!(i3 && Ko(i3));
      l3 && !a && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Hr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function vS(e) {
      return e ? e.nodeType === eo ? e.documentElement : e.firstChild : null;
    }
    function GR() {
    }
    function fz(e, t, a, i3, l3) {
      if (l3) {
        if (typeof i3 == "function") {
          var s = i3;
          i3 = function() {
            var _ = Av(f3);
            s.call(_);
          };
        }
        var f3 = TR(t, i3, e, el, null, false, false, "", GR);
        e._reactRootContainer = f3, Ep(f3.current, e);
        var m3 = e.nodeType === pn ? e.parentNode : e;
        return qc(m3), go(), f3;
      } else {
        for (var h3; h3 = e.lastChild; )
          e.removeChild(h3);
        if (typeof i3 == "function") {
          var S = i3;
          i3 = function() {
            var _ = Av(w);
            S.call(_);
          };
        }
        var w = ER(e, el, null, false, false, "", GR);
        e._reactRootContainer = w, Ep(w.current, e);
        var O = e.nodeType === pn ? e.parentNode : e;
        return qc(O), go(function() {
          Yf(t, w, a, i3);
        }), w;
      }
    }
    function dz(e, t) {
      e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Pv(e, t, a, i3, l3) {
      JR(a), dz(l3 === void 0 ? null : l3, "render");
      var s = a._reactRootContainer, f3;
      if (!s)
        f3 = fz(a, t, e, l3, i3);
      else {
        if (f3 = s, typeof l3 == "function") {
          var m3 = l3;
          l3 = function() {
            var h3 = Av(f3);
            m3.call(h3);
          };
        }
        Yf(t, f3, e, l3);
      }
      return Av(f3);
    }
    function pz(e) {
      {
        var t = cz.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ot(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = true;
        }
      }
      return e == null ? null : e.nodeType === Hr ? e : qA(e, "findDOMNode");
    }
    function vz(e, t, a) {
      if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qf(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i3 = sf(t) && t._reactRootContainer === void 0;
        i3 && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Pv(null, e, t, true, a);
    }
    function mz(e, t, a) {
      if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qf(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i3 = sf(t) && t._reactRootContainer === void 0;
        i3 && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Pv(null, e, t, false, a);
    }
    function hz(e, t, a, i3) {
      if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qf(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iN(e))
        throw new Error("parentComponent must be a valid React Component");
      return Pv(e, t, a, false, i3);
    }
    function yz(e) {
      if (!Qf(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sf(e) && e._reactRootContainer === void 0;
        t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = vS(e), i3 = a && !Ko(a);
          i3 && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return go(function() {
          Pv(null, null, e, false, function() {
            e._reactRootContainer = null, Qx(e);
          });
        }), true;
      } else {
        {
          var l3 = vS(e), s = !!(l3 && Ko(l3)), f3 = e.nodeType === Hr && Qf(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f3 ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return false;
      }
    }
    sL(KA), fL(ZA), dL(ez), pL(Za), vL(oL), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), XO(mI), qO(Q0, sA, go);
    function gz(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jv(t))
        throw new Error("Target container is not a DOM element.");
      return GA(e, t, null, a);
    }
    function Sz(e, t, a, i3) {
      return hz(e, t, a, i3);
    }
    var mS = { usingClientEntryPoint: false, Events: [Ko, ps, Tp, uw, sw, Q0] };
    function bz(e, t) {
      return mS.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lz(e, t);
    }
    function wz(e, t, a) {
      return mS.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sz(e, t, a);
    }
    function xz(e) {
      return iR() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), go(e);
    }
    var Dz = oz({ findFiberByHostInstance: iu, bundleType: 1, version: uS, rendererPackageName: "react-dom" });
    if (!Dz && en && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qR = window.location.protocol;
      /^(https?|file):$/.test(qR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mS, xa.createPortal = gz, xa.createRoot = bz, xa.findDOMNode = pz, xa.flushSync = xz, xa.hydrate = vz, xa.hydrateRoot = wz, xa.render = mz, xa.unmountComponentAtNode = yz, xa.unstable_batchedUpdates = Q0, xa.unstable_renderSubtreeIntoContainer = Sz, xa.version = uS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var __ = m((rP, Ab) => {
  "use strict";
  function k_() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k_);
      } catch (n2) {
        console.error(n2);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (k_(), Ab.exports = E_()) : Ab.exports = T_();
});
var O_ = m((Hd) => {
  "use strict";
  var jd = __();
  process.env.NODE_ENV === "production" ? (Hd.createRoot = jd.createRoot, Hd.hydrateRoot = jd.hydrateRoot) : (Pd = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Hd.createRoot = function(n2, r) {
    Pd.usingClientEntryPoint = true;
    try {
      return jd.createRoot(n2, r);
    } finally {
      Pd.usingClientEntryPoint = false;
    }
  }, Hd.hydrateRoot = function(n2, r, o) {
    Pd.usingClientEntryPoint = true;
    try {
      return jd.hydrateRoot(n2, r, o);
    } finally {
      Pd.usingClientEntryPoint = false;
    }
  });
  var Pd;
});
var I_ = m((ch) => {
  "use strict";
  var e4 = Ur(), t4 = Symbol.for("react.element"), n4 = Symbol.for("react.fragment"), r4 = Object.prototype.hasOwnProperty, a4 = e4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i4 = { key: true, ref: true, __self: true, __source: true };
  function U_(n2, r, o) {
    var u, c = {}, p = null, d = null;
    o !== void 0 && (p = "" + o), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (d = r.ref);
    for (u in r)
      r4.call(r, u) && !i4.hasOwnProperty(u) && (c[u] = r[u]);
    if (n2 && n2.defaultProps)
      for (u in r = n2.defaultProps, r)
        c[u] === void 0 && (c[u] = r[u]);
    return { $$typeof: t4, type: n2, key: p, ref: d, props: c, _owner: a4.current };
  }
  ch.Fragment = n4;
  ch.jsx = U_;
  ch.jsxs = U_;
});
var $_ = m((fh) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    var n2 = Ur(), r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), j2 = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), J = Symbol.iterator, ie = "@@iterator";
    function Ge(E) {
      if (E === null || typeof E != "object")
        return null;
      var W = J && E[J] || E[ie];
      return typeof W == "function" ? W : null;
    }
    var N = n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(E) {
      {
        for (var W = arguments.length, ae = new Array(W > 1 ? W - 1 : 0), ve = 1; ve < W; ve++)
          ae[ve - 1] = arguments[ve];
        k2("error", E, ae);
      }
    }
    function k2(E, W, ae) {
      {
        var ve = N.ReactDebugCurrentFrame, Xe = ve.getStackAddendum();
        Xe !== "" && (W += "%s", ae = ae.concat([Xe]));
        var it = ae.map(function(He) {
          return String(He);
        });
        it.unshift("Warning: " + W), Function.prototype.apply.call(console[E], console, it);
      }
    }
    var Q = false, X = false, re = false, ee = false, he = false, Me;
    Me = Symbol.for("react.module.reference");
    function Re(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === u || E === p || he || E === c || E === T || E === V || ee || E === H || Q || X || re || typeof E == "object" && E !== null && (E.$$typeof === j2 || E.$$typeof === U || E.$$typeof === d || E.$$typeof === b || E.$$typeof === x || E.$$typeof === Me || E.getModuleId !== void 0));
    }
    function dt(E, W, ae) {
      var ve = E.displayName;
      if (ve)
        return ve;
      var Xe = W.displayName || W.name || "";
      return Xe !== "" ? ae + "(" + Xe + ")" : ae;
    }
    function yt(E) {
      return E.displayName || "Context";
    }
    function Te(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case p:
          return "Profiler";
        case c:
          return "StrictMode";
        case T:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case b:
            var W = E;
            return yt(W) + ".Consumer";
          case d:
            var ae = E;
            return yt(ae._context) + ".Provider";
          case x:
            return dt(E, E.render, "ForwardRef");
          case U:
            var ve = E.displayName || null;
            return ve !== null ? ve : Te(E.type) || "Memo";
          case j2: {
            var Xe = E, it = Xe._payload, He = Xe._init;
            try {
              return Te(He(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var bt = Object.assign, be = 0, Lt, Pe, at, bn, Zt, M, q;
    function Le() {
    }
    Le.__reactDisabledLog = true;
    function Qe() {
      {
        if (be === 0) {
          Lt = console.log, Pe = console.info, at = console.warn, bn = console.error, Zt = console.group, M = console.groupCollapsed, q = console.groupEnd;
          var E = { configurable: true, enumerable: true, value: Le, writable: true };
          Object.defineProperties(console, { info: E, log: E, warn: E, error: E, group: E, groupCollapsed: E, groupEnd: E });
        }
        be++;
      }
    }
    function We() {
      {
        if (be--, be === 0) {
          var E = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, { log: bt({}, E, { value: Lt }), info: bt({}, E, { value: Pe }), warn: bt({}, E, { value: at }), error: bt({}, E, { value: bn }), group: bt({}, E, { value: Zt }), groupCollapsed: bt({}, E, { value: M }), groupEnd: bt({}, E, { value: q }) });
        }
        be < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ct = N.ReactCurrentDispatcher, ft;
    function et(E, W, ae) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (Xe) {
            var ve = Xe.stack.trim().match(/\n( *(at )?)/);
            ft = ve && ve[1] || "";
          }
        return `
` + ft + E;
      }
    }
    var Be = false, Ot;
    {
      var $n = typeof WeakMap == "function" ? WeakMap : Map;
      Ot = new $n();
    }
    function br(E, W) {
      if (!E || Be)
        return "";
      {
        var ae = Ot.get(E);
        if (ae !== void 0)
          return ae;
      }
      var ve;
      Be = true;
      var Xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = ct.current, ct.current = null, Qe();
      try {
        if (W) {
          var He = function() {
            throw Error();
          };
          if (Object.defineProperty(He.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(He, []);
            } catch (or) {
              ve = or;
            }
            Reflect.construct(E, [], He);
          } else {
            try {
              He.call();
            } catch (or) {
              ve = or;
            }
            E.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (or) {
            ve = or;
          }
          E();
        }
      } catch (or) {
        if (or && ve && typeof or.stack == "string") {
          for (var Ce = or.stack.split(`
`), ln = ve.stack.split(`
`), Ut = Ce.length - 1, It = ln.length - 1; Ut >= 1 && It >= 0 && Ce[Ut] !== ln[It]; )
            It--;
          for (; Ut >= 1 && It >= 0; Ut--, It--)
            if (Ce[Ut] !== ln[It]) {
              if (Ut !== 1 || It !== 1)
                do
                  if (Ut--, It--, It < 0 || Ce[Ut] !== ln[It]) {
                    var An = `
` + Ce[Ut].replace(" at new ", " at ");
                    return E.displayName && An.includes("<anonymous>") && (An = An.replace("<anonymous>", E.displayName)), typeof E == "function" && Ot.set(E, An), An;
                  }
                while (Ut >= 1 && It >= 0);
              break;
            }
        }
      } finally {
        Be = false, ct.current = it, We(), Error.prepareStackTrace = Xe;
      }
      var Ea = E ? E.displayName || E.name : "", Lo = Ea ? et(Ea) : "";
      return typeof E == "function" && Ot.set(E, Lo), Lo;
    }
    function en(E, W, ae) {
      return br(E, false);
    }
    function wn(E) {
      var W = E.prototype;
      return !!(W && W.isReactComponent);
    }
    function Bt(E, W, ae) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return br(E, wn(E));
      if (typeof E == "string")
        return et(E);
      switch (E) {
        case T:
          return et("Suspense");
        case V:
          return et("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case x:
            return en(E.render);
          case U:
            return Bt(E.type, W, ae);
          case j2: {
            var ve = E, Xe = ve._payload, it = ve._init;
            try {
              return Bt(it(Xe), W, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var dn = Object.prototype.hasOwnProperty, tn = {}, nn = N.ReactDebugCurrentFrame;
    function Mn(E) {
      if (E) {
        var W = E._owner, ae = Bt(E.type, E._source, W ? W.type : null);
        nn.setExtraStackFrame(ae);
      } else
        nn.setExtraStackFrame(null);
    }
    function Yn(E, W, ae, ve, Xe) {
      {
        var it = Function.call.bind(dn);
        for (var He in E)
          if (it(E, He)) {
            var Ce = void 0;
            try {
              if (typeof E[He] != "function") {
                var ln = Error((ve || "React class") + ": " + ae + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ln.name = "Invariant Violation", ln;
              }
              Ce = E[He](W, He, ve, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ut) {
              Ce = Ut;
            }
            Ce && !(Ce instanceof Error) && (Mn(Xe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", ae, He, typeof Ce), Mn(null)), Ce instanceof Error && !(Ce.message in tn) && (tn[Ce.message] = true, Mn(Xe), C("Failed %s type: %s", ae, Ce.message), Mn(null));
          }
      }
    }
    var zr = Array.isArray;
    function wr(E) {
      return zr(E);
    }
    function xn(E) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, ae = W && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ae;
      }
    }
    function xr(E) {
      try {
        return Dn(E), false;
      } catch {
        return true;
      }
    }
    function Dn(E) {
      return "" + E;
    }
    function Dr(E) {
      if (xr(E))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(E)), Dn(E);
    }
    var Xt = N.ReactCurrentOwner, jr = { key: true, ref: true, __self: true, __source: true }, Zr, Va, oe;
    oe = {};
    function xe(E) {
      if (dn.call(E, "ref")) {
        var W = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (W && W.isReactWarning)
          return false;
      }
      return E.ref !== void 0;
    }
    function Ae(E) {
      if (dn.call(E, "key")) {
        var W = Object.getOwnPropertyDescriptor(E, "key").get;
        if (W && W.isReactWarning)
          return false;
      }
      return E.key !== void 0;
    }
    function pt(E, W) {
      if (typeof E.ref == "string" && Xt.current && W && Xt.current.stateNode !== W) {
        var ae = Te(Xt.current.type);
        oe[ae] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(Xt.current.type), E.ref), oe[ae] = true);
      }
    }
    function vt(E, W) {
      {
        var ae = function() {
          Zr || (Zr = true, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ae.isReactWarning = true, Object.defineProperty(E, "key", { get: ae, configurable: true });
      }
    }
    function on(E, W) {
      {
        var ae = function() {
          Va || (Va = true, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        ae.isReactWarning = true, Object.defineProperty(E, "ref", { get: ae, configurable: true });
      }
    }
    var Qt = function(E, W, ae, ve, Xe, it, He) {
      var Ce = { $$typeof: r, type: E, key: W, ref: ae, props: He, _owner: it };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(Ce, "_self", { configurable: false, enumerable: false, writable: false, value: ve }), Object.defineProperty(Ce, "_source", { configurable: false, enumerable: false, writable: false, value: Xe }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function ir(E, W, ae, ve, Xe) {
      {
        var it, He = {}, Ce = null, ln = null;
        ae !== void 0 && (Dr(ae), Ce = "" + ae), Ae(W) && (Dr(W.key), Ce = "" + W.key), xe(W) && (ln = W.ref, pt(W, Xe));
        for (it in W)
          dn.call(W, it) && !jr.hasOwnProperty(it) && (He[it] = W[it]);
        if (E && E.defaultProps) {
          var Ut = E.defaultProps;
          for (it in Ut)
            He[it] === void 0 && (He[it] = Ut[it]);
        }
        if (Ce || ln) {
          var It = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Ce && vt(He, It), ln && on(He, It);
        }
        return Qt(E, Ce, ln, Xe, ve, Xt.current, He);
      }
    }
    var Dt = N.ReactCurrentOwner, Qn = N.ReactDebugCurrentFrame;
    function Ct(E) {
      if (E) {
        var W = E._owner, ae = Bt(E.type, E._source, W ? W.type : null);
        Qn.setExtraStackFrame(ae);
      } else
        Qn.setExtraStackFrame(null);
    }
    var Rt;
    Rt = false;
    function Da(E) {
      return typeof E == "object" && E !== null && E.$$typeof === r;
    }
    function ea() {
      {
        if (Dt.current) {
          var E = Te(Dt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Bi(E) {
      {
        if (E !== void 0) {
          var W = E.fileName.replace(/^.*[\\\/]/, ""), ae = E.lineNumber;
          return `

Check your code at ` + W + ":" + ae + ".";
        }
        return "";
      }
    }
    var No = {};
    function $l(E) {
      {
        var W = ea();
        if (!W) {
          var ae = typeof E == "string" ? E : E.displayName || E.name;
          ae && (W = `

Check the top-level render call using <` + ae + ">.");
        }
        return W;
      }
    }
    function ta(E, W) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = true;
        var ae = $l(W);
        if (No[ae])
          return;
        No[ae] = true;
        var ve = "";
        E && E._owner && E._owner !== Dt.current && (ve = " It was passed a child from " + Te(E._owner.type) + "."), Ct(E), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ve), Ct(null);
      }
    }
    function Ya(E, W) {
      {
        if (typeof E != "object")
          return;
        if (wr(E))
          for (var ae = 0; ae < E.length; ae++) {
            var ve = E[ae];
            Da(ve) && ta(ve, W);
          }
        else if (Da(E))
          E._store && (E._store.validated = true);
        else if (E) {
          var Xe = Ge(E);
          if (typeof Xe == "function" && Xe !== E.entries)
            for (var it = Xe.call(E), He; !(He = it.next()).done; )
              Da(He.value) && ta(He.value, W);
        }
      }
    }
    function Ca(E) {
      {
        var W = E.type;
        if (W == null || typeof W == "string")
          return;
        var ae;
        if (typeof W == "function")
          ae = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === x || W.$$typeof === U))
          ae = W.propTypes;
        else
          return;
        if (ae) {
          var ve = Te(W);
          Yn(ae, E.props, "prop", ve, E);
        } else if (W.PropTypes !== void 0 && !Rt) {
          Rt = true;
          var Xe = Te(W);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Xe || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(E) {
      {
        for (var W = Object.keys(E.props), ae = 0; ae < W.length; ae++) {
          var ve = W[ae];
          if (ve !== "children" && ve !== "key") {
            Ct(E), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), Ct(null);
            break;
          }
        }
        E.ref !== null && (Ct(E), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ct(null));
      }
    }
    function Qa(E, W, ae, ve, Xe, it) {
      {
        var He = Re(E);
        if (!He) {
          var Ce = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ln = Bi(Xe);
          ln ? Ce += ln : Ce += ea();
          var Ut;
          E === null ? Ut = "null" : wr(E) ? Ut = "array" : E !== void 0 && E.$$typeof === r ? (Ut = "<" + (Te(E.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : Ut = typeof E, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ut, Ce);
        }
        var It = ir(E, W, ae, Xe, it);
        if (It == null)
          return It;
        if (He) {
          var An = W.children;
          if (An !== void 0)
            if (ve)
              if (wr(An)) {
                for (var Ea = 0; Ea < An.length; Ea++)
                  Ya(An[Ea], E);
                Object.freeze && Object.freeze(An);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ya(An, E);
        }
        return E === u ? Si(It) : Ca(It), It;
      }
    }
    function Ra(E, W, ae) {
      return Qa(E, W, ae, true);
    }
    function na(E, W, ae) {
      return Qa(E, W, ae, false);
    }
    var ra = na, bi = Ra;
    fh.Fragment = u, fh.jsx = ra, fh.jsxs = bi;
  }();
});
var fn = m((xP, Hb) => {
  "use strict";
  process.env.NODE_ENV === "production" ? Hb.exports = I_() : Hb.exports = $_();
});
var V_ = m((QP, g4) => {
  g4.exports = "./gradebook-HGMMK3GT.png";
});
var Y_ = m((WP, S4) => {
  S4.exports = "./learnerDashboard-5VWYSIWY.png";
});
var Q_ = m((BP, b4) => {
  b4.exports = "./ora-5FMS4A5D.png";
});
var W_ = m((XP, w4) => {
  w4.exports = "./strictDict-XCWHRALP.png";
});
var B_ = m((JP, x4) => {
  x4.exports = "./shallowSnapshot-J77CBTZB.png";
});
var X_ = m((GP, D4) => {
  D4.exports = "./useKeyedState-SMKD7XCK.png";
});
var J_ = m((qP, C4) => {
  C4.exports = "./oraGrading-IBITA2CL.png";
});
var aO = n(Ur());
var iO = n(O_());
var Yb = n(Ur());
var M_ = n(Ur());
var F3 = Object.create;
var N_ = Object.defineProperty;
var V3 = Object.getOwnPropertyDescriptor;
var Y3 = Object.getOwnPropertyNames;
var Q3 = Object.getPrototypeOf;
var W3 = Object.prototype.hasOwnProperty;
var zb = (n2, r) => () => (r || n2((r = { exports: {} }).exports, r), r.exports);
var B3 = (n2, r, o, u) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let c of Y3(r))
      !W3.call(n2, c) && c !== o && N_(n2, c, { get: () => r[c], enumerable: !(u = V3(r, c)) || u.enumerable });
  return n2;
};
var jb = (n2, r, o) => (o = n2 != null ? F3(Q3(n2)) : {}, B3(r || !n2 || !n2.__esModule ? N_(o, "default", { value: n2, enumerable: true }) : o, n2));
var X3 = zb((n2) => {
  "use strict";
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), V = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), j2 = Symbol.iterator;
  function H(M) {
    return M === null || typeof M != "object" ? null : (M = j2 && M[j2] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var J = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, Ge = {};
  function N(M, q, Le) {
    this.props = M, this.context = q, this.refs = Ge, this.updater = Le || J;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(M, q) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, q, "setState");
  }, N.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function C() {
  }
  C.prototype = N.prototype;
  function k2(M, q, Le) {
    this.props = M, this.context = q, this.refs = Ge, this.updater = Le || J;
  }
  var Q = k2.prototype = new C();
  Q.constructor = k2, ie(Q, N.prototype), Q.isPureReactComponent = true;
  var X = Array.isArray, re = Object.prototype.hasOwnProperty, ee = { current: null }, he = { key: true, ref: true, __self: true, __source: true };
  function Me(M, q, Le) {
    var Qe, We = {}, ct = null, ft = null;
    if (q != null)
      for (Qe in q.ref !== void 0 && (ft = q.ref), q.key !== void 0 && (ct = "" + q.key), q)
        re.call(q, Qe) && !he.hasOwnProperty(Qe) && (We[Qe] = q[Qe]);
    var et = arguments.length - 2;
    if (et === 1)
      We.children = Le;
    else if (1 < et) {
      for (var Be = Array(et), Ot = 0; Ot < et; Ot++)
        Be[Ot] = arguments[Ot + 2];
      We.children = Be;
    }
    if (M && M.defaultProps)
      for (Qe in et = M.defaultProps, et)
        We[Qe] === void 0 && (We[Qe] = et[Qe]);
    return { $$typeof: r, type: M, key: ct, ref: ft, props: We, _owner: ee.current };
  }
  function Re(M, q) {
    return { $$typeof: r, type: M.type, key: q, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function dt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === r;
  }
  function yt(M) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(Le) {
      return q[Le];
    });
  }
  var Te = /\/+/g;
  function bt(M, q) {
    return typeof M == "object" && M !== null && M.key != null ? yt("" + M.key) : q.toString(36);
  }
  function be(M, q, Le, Qe, We) {
    var ct = typeof M;
    (ct === "undefined" || ct === "boolean") && (M = null);
    var ft = false;
    if (M === null)
      ft = true;
    else
      switch (ct) {
        case "string":
        case "number":
          ft = true;
          break;
        case "object":
          switch (M.$$typeof) {
            case r:
            case o:
              ft = true;
          }
      }
    if (ft)
      return ft = M, We = We(ft), M = Qe === "" ? "." + bt(ft, 0) : Qe, X(We) ? (Le = "", M != null && (Le = M.replace(Te, "$&/") + "/"), be(We, q, Le, "", function(Ot) {
        return Ot;
      })) : We != null && (dt(We) && (We = Re(We, Le + (!We.key || ft && ft.key === We.key ? "" : ("" + We.key).replace(Te, "$&/") + "/") + M)), q.push(We)), 1;
    if (ft = 0, Qe = Qe === "" ? "." : Qe + ":", X(M))
      for (var et = 0; et < M.length; et++) {
        ct = M[et];
        var Be = Qe + bt(ct, et);
        ft += be(ct, q, Le, Be, We);
      }
    else if (Be = H(M), typeof Be == "function")
      for (M = Be.call(M), et = 0; !(ct = M.next()).done; )
        ct = ct.value, Be = Qe + bt(ct, et++), ft += be(ct, q, Le, Be, We);
    else if (ct === "object")
      throw q = String(M), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function Lt(M, q, Le) {
    if (M == null)
      return M;
    var Qe = [], We = 0;
    return be(M, Qe, "", "", function(ct) {
      return q.call(Le, ct, We++);
    }), Qe;
  }
  function Pe(M) {
    if (M._status === -1) {
      var q = M._result;
      q = q(), q.then(function(Le) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = Le);
      }, function(Le) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = Le);
      }), M._status === -1 && (M._status = 0, M._result = q);
    }
    if (M._status === 1)
      return M._result.default;
    throw M._result;
  }
  var at = { current: null }, bn = { transition: null }, Zt = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: bn, ReactCurrentOwner: ee };
  n2.Children = { map: Lt, forEach: function(M, q, Le) {
    Lt(M, function() {
      q.apply(this, arguments);
    }, Le);
  }, count: function(M) {
    var q = 0;
    return Lt(M, function() {
      q++;
    }), q;
  }, toArray: function(M) {
    return Lt(M, function(q) {
      return q;
    }) || [];
  }, only: function(M) {
    if (!dt(M))
      throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, n2.Component = N, n2.Fragment = u, n2.Profiler = p, n2.PureComponent = k2, n2.StrictMode = c, n2.Suspense = T, n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zt, n2.cloneElement = function(M, q, Le) {
    if (M == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var Qe = ie({}, M.props), We = M.key, ct = M.ref, ft = M._owner;
    if (q != null) {
      if (q.ref !== void 0 && (ct = q.ref, ft = ee.current), q.key !== void 0 && (We = "" + q.key), M.type && M.type.defaultProps)
        var et = M.type.defaultProps;
      for (Be in q)
        re.call(q, Be) && !he.hasOwnProperty(Be) && (Qe[Be] = q[Be] === void 0 && et !== void 0 ? et[Be] : q[Be]);
    }
    var Be = arguments.length - 2;
    if (Be === 1)
      Qe.children = Le;
    else if (1 < Be) {
      et = Array(Be);
      for (var Ot = 0; Ot < Be; Ot++)
        et[Ot] = arguments[Ot + 2];
      Qe.children = et;
    }
    return { $$typeof: r, type: M.type, key: We, ref: ct, props: Qe, _owner: ft };
  }, n2.createContext = function(M) {
    return M = { $$typeof: b, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: d, _context: M }, M.Consumer = M;
  }, n2.createElement = Me, n2.createFactory = function(M) {
    var q = Me.bind(null, M);
    return q.type = M, q;
  }, n2.createRef = function() {
    return { current: null };
  }, n2.forwardRef = function(M) {
    return { $$typeof: x, render: M };
  }, n2.isValidElement = dt, n2.lazy = function(M) {
    return { $$typeof: U, _payload: { _status: -1, _result: M }, _init: Pe };
  }, n2.memo = function(M, q) {
    return { $$typeof: V, type: M, compare: q === void 0 ? null : q };
  }, n2.startTransition = function(M) {
    var q = bn.transition;
    bn.transition = {};
    try {
      M();
    } finally {
      bn.transition = q;
    }
  }, n2.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, n2.useCallback = function(M, q) {
    return at.current.useCallback(M, q);
  }, n2.useContext = function(M) {
    return at.current.useContext(M);
  }, n2.useDebugValue = function() {
  }, n2.useDeferredValue = function(M) {
    return at.current.useDeferredValue(M);
  }, n2.useEffect = function(M, q) {
    return at.current.useEffect(M, q);
  }, n2.useId = function() {
    return at.current.useId();
  }, n2.useImperativeHandle = function(M, q, Le) {
    return at.current.useImperativeHandle(M, q, Le);
  }, n2.useInsertionEffect = function(M, q) {
    return at.current.useInsertionEffect(M, q);
  }, n2.useLayoutEffect = function(M, q) {
    return at.current.useLayoutEffect(M, q);
  }, n2.useMemo = function(M, q) {
    return at.current.useMemo(M, q);
  }, n2.useReducer = function(M, q, Le) {
    return at.current.useReducer(M, q, Le);
  }, n2.useRef = function(M) {
    return at.current.useRef(M);
  }, n2.useState = function(M) {
    return at.current.useState(M);
  }, n2.useSyncExternalStore = function(M, q, Le) {
    return at.current.useSyncExternalStore(M, q, Le);
  }, n2.useTransition = function() {
    return at.current.useTransition();
  }, n2.version = "18.2.0";
});
var J3 = zb((n2, r) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = "18.2.0", u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), T = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), j2 = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Ge = Symbol.iterator, N = "@@iterator";
    function C(v) {
      if (v === null || typeof v != "object")
        return null;
      var g2 = Ge && v[Ge] || v[N];
      return typeof g2 == "function" ? g2 : null;
    }
    var k2 = { current: null }, Q = { transition: null }, X = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false }, re = { current: null }, ee = {}, he = null;
    function Me(v) {
      he = v;
    }
    ee.setExtraStackFrame = function(v) {
      he = v;
    }, ee.getCurrentStack = null, ee.getStackAddendum = function() {
      var v = "";
      he && (v += he);
      var g2 = ee.getCurrentStack;
      return g2 && (v += g2() || ""), v;
    };
    var Re = false, dt = false, yt = false, Te = false, bt = false, be = { ReactCurrentDispatcher: k2, ReactCurrentBatchConfig: Q, ReactCurrentOwner: re };
    be.ReactDebugCurrentFrame = ee, be.ReactCurrentActQueue = X;
    function Lt(v) {
      {
        for (var g2 = arguments.length, D = new Array(g2 > 1 ? g2 - 1 : 0), L = 1; L < g2; L++)
          D[L - 1] = arguments[L];
        at("warn", v, D);
      }
    }
    function Pe(v) {
      {
        for (var g2 = arguments.length, D = new Array(g2 > 1 ? g2 - 1 : 0), L = 1; L < g2; L++)
          D[L - 1] = arguments[L];
        at("error", v, D);
      }
    }
    function at(v, g2, D) {
      {
        var L = be.ReactDebugCurrentFrame, A = L.getStackAddendum();
        A !== "" && (g2 += "%s", D = D.concat([A]));
        var te = D.map(function(K) {
          return String(K);
        });
        te.unshift("Warning: " + g2), Function.prototype.apply.call(console[v], console, te);
      }
    }
    var bn = {};
    function Zt(v, g2) {
      {
        var D = v.constructor, L = D && (D.displayName || D.name) || "ReactClass", A = L + "." + g2;
        if (bn[A])
          return;
        Pe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", g2, L), bn[A] = true;
      }
    }
    var M = { isMounted: function(v) {
      return false;
    }, enqueueForceUpdate: function(v, g2, D) {
      Zt(v, "forceUpdate");
    }, enqueueReplaceState: function(v, g2, D, L) {
      Zt(v, "replaceState");
    }, enqueueSetState: function(v, g2, D, L) {
      Zt(v, "setState");
    } }, q = Object.assign, Le = {};
    Object.freeze(Le);
    function Qe(v, g2, D) {
      this.props = v, this.context = g2, this.refs = Le, this.updater = D || M;
    }
    Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(v, g2) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, v, g2, "setState");
    }, Qe.prototype.forceUpdate = function(v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    };
    {
      var We = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] }, ct = function(v, g2) {
        Object.defineProperty(Qe.prototype, v, { get: function() {
          Lt("%s(...) is deprecated in plain JavaScript React classes. %s", g2[0], g2[1]);
        } });
      };
      for (var ft in We)
        We.hasOwnProperty(ft) && ct(ft, We[ft]);
    }
    function et() {
    }
    et.prototype = Qe.prototype;
    function Be(v, g2, D) {
      this.props = v, this.context = g2, this.refs = Le, this.updater = D || M;
    }
    var Ot = Be.prototype = new et();
    Ot.constructor = Be, q(Ot, Qe.prototype), Ot.isPureReactComponent = true;
    function $n() {
      var v = { current: null };
      return Object.seal(v), v;
    }
    var br = Array.isArray;
    function en(v) {
      return br(v);
    }
    function wn(v) {
      {
        var g2 = typeof Symbol == "function" && Symbol.toStringTag, D = g2 && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return D;
      }
    }
    function Bt(v) {
      try {
        return dn(v), false;
      } catch {
        return true;
      }
    }
    function dn(v) {
      return "" + v;
    }
    function tn(v) {
      if (Bt(v))
        return Pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(v)), dn(v);
    }
    function nn(v, g2, D) {
      var L = v.displayName;
      if (L)
        return L;
      var A = g2.displayName || g2.name || "";
      return A !== "" ? D + "(" + A + ")" : D;
    }
    function Mn(v) {
      return v.displayName || "Context";
    }
    function Yn(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && Pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case b:
          return "Profiler";
        case d:
          return "StrictMode";
        case U:
          return "Suspense";
        case j2:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case T:
            var g2 = v;
            return Mn(g2) + ".Consumer";
          case x:
            var D = v;
            return Mn(D._context) + ".Provider";
          case V:
            return nn(v, v.render, "ForwardRef");
          case H:
            var L = v.displayName || null;
            return L !== null ? L : Yn(v.type) || "Memo";
          case J: {
            var A = v, te = A._payload, K = A._init;
            try {
              return Yn(K(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var zr = Object.prototype.hasOwnProperty, wr = { key: true, ref: true, __self: true, __source: true }, xn, xr, Dn;
    Dn = {};
    function Dr(v) {
      if (zr.call(v, "ref")) {
        var g2 = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (g2 && g2.isReactWarning)
          return false;
      }
      return v.ref !== void 0;
    }
    function Xt(v) {
      if (zr.call(v, "key")) {
        var g2 = Object.getOwnPropertyDescriptor(v, "key").get;
        if (g2 && g2.isReactWarning)
          return false;
      }
      return v.key !== void 0;
    }
    function jr(v, g2) {
      var D = function() {
        xn || (xn = true, Pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g2));
      };
      D.isReactWarning = true, Object.defineProperty(v, "key", { get: D, configurable: true });
    }
    function Zr(v, g2) {
      var D = function() {
        xr || (xr = true, Pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g2));
      };
      D.isReactWarning = true, Object.defineProperty(v, "ref", { get: D, configurable: true });
    }
    function Va(v) {
      if (typeof v.ref == "string" && re.current && v.__self && re.current.stateNode !== v.__self) {
        var g2 = Yn(re.current.type);
        Dn[g2] || (Pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g2, v.ref), Dn[g2] = true);
      }
    }
    var oe = function(v, g2, D, L, A, te, K) {
      var se = { $$typeof: u, type: v, key: g2, ref: D, props: K, _owner: te };
      return se._store = {}, Object.defineProperty(se._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(se, "_self", { configurable: false, enumerable: false, writable: false, value: L }), Object.defineProperty(se, "_source", { configurable: false, enumerable: false, writable: false, value: A }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function xe(v, g2, D) {
      var L, A = {}, te = null, K = null, se = null, we = null;
      if (g2 != null) {
        Dr(g2) && (K = g2.ref, Va(g2)), Xt(g2) && (tn(g2.key), te = "" + g2.key), se = g2.__self === void 0 ? null : g2.__self, we = g2.__source === void 0 ? null : g2.__source;
        for (L in g2)
          zr.call(g2, L) && !wr.hasOwnProperty(L) && (A[L] = g2[L]);
      }
      var Ee = arguments.length - 2;
      if (Ee === 1)
        A.children = D;
      else if (Ee > 1) {
        for (var Oe = Array(Ee), Ue = 0; Ue < Ee; Ue++)
          Oe[Ue] = arguments[Ue + 2];
        Object.freeze && Object.freeze(Oe), A.children = Oe;
      }
      if (v && v.defaultProps) {
        var Ve = v.defaultProps;
        for (L in Ve)
          A[L] === void 0 && (A[L] = Ve[L]);
      }
      if (te || K) {
        var $t = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
        te && jr(A, $t), K && Zr(A, $t);
      }
      return oe(v, te, K, se, we, re.current, A);
    }
    function Ae(v, g2) {
      var D = oe(v.type, g2, v.ref, v._self, v._source, v._owner, v.props);
      return D;
    }
    function pt(v, g2, D) {
      if (v == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + v + ".");
      var L, A = q({}, v.props), te = v.key, K = v.ref, se = v._self, we = v._source, Ee = v._owner;
      if (g2 != null) {
        Dr(g2) && (K = g2.ref, Ee = re.current), Xt(g2) && (tn(g2.key), te = "" + g2.key);
        var Oe;
        v.type && v.type.defaultProps && (Oe = v.type.defaultProps);
        for (L in g2)
          zr.call(g2, L) && !wr.hasOwnProperty(L) && (g2[L] === void 0 && Oe !== void 0 ? A[L] = Oe[L] : A[L] = g2[L]);
      }
      var Ue = arguments.length - 2;
      if (Ue === 1)
        A.children = D;
      else if (Ue > 1) {
        for (var Ve = Array(Ue), $t = 0; $t < Ue; $t++)
          Ve[$t] = arguments[$t + 2];
        A.children = Ve;
      }
      return oe(v.type, te, K, se, we, Ee, A);
    }
    function vt(v) {
      return typeof v == "object" && v !== null && v.$$typeof === u;
    }
    var on = ".", Qt = ":";
    function ir(v) {
      var g2 = /[=:]/g, D = { "=": "=0", ":": "=2" }, L = v.replace(g2, function(A) {
        return D[A];
      });
      return "$" + L;
    }
    var Dt = false, Qn = /\/+/g;
    function Ct(v) {
      return v.replace(Qn, "$&/");
    }
    function Rt(v, g2) {
      return typeof v == "object" && v !== null && v.key != null ? (tn(v.key), ir("" + v.key)) : g2.toString(36);
    }
    function Da(v, g2, D, L, A) {
      var te = typeof v;
      (te === "undefined" || te === "boolean") && (v = null);
      var K = false;
      if (v === null)
        K = true;
      else
        switch (te) {
          case "string":
          case "number":
            K = true;
            break;
          case "object":
            switch (v.$$typeof) {
              case u:
              case c:
                K = true;
            }
        }
      if (K) {
        var se = v, we = A(se), Ee = L === "" ? on + Rt(se, 0) : L;
        if (en(we)) {
          var Oe = "";
          Ee != null && (Oe = Ct(Ee) + "/"), Da(we, g2, Oe, "", function(vh) {
            return vh;
          });
        } else
          we != null && (vt(we) && (we.key && (!se || se.key !== we.key) && tn(we.key), we = Ae(we, D + (we.key && (!se || se.key !== we.key) ? Ct("" + we.key) + "/" : "") + Ee)), g2.push(we));
        return 1;
      }
      var Ue, Ve, $t = 0, tt = L === "" ? on : L + Qt;
      if (en(v))
        for (var Ga = 0; Ga < v.length; Ga++)
          Ue = v[Ga], Ve = tt + Rt(Ue, Ga), $t += Da(Ue, g2, D, Ve, A);
      else {
        var Vo = C(v);
        if (typeof Vo == "function") {
          var Yo = v;
          Vo === Yo.entries && (Dt || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Dt = true);
          for (var yc = Vo.call(Yo), ka, Yl = 0; !(ka = yc.next()).done; )
            Ue = ka.value, Ve = tt + Rt(Ue, Yl++), $t += Da(Ue, g2, D, Ve, A);
        } else if (te === "object") {
          var gc = String(v);
          throw new Error("Objects are not valid as a React child (found: " + (gc === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : gc) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return $t;
    }
    function ea(v, g2, D) {
      if (v == null)
        return v;
      var L = [], A = 0;
      return Da(v, L, "", "", function(te) {
        return g2.call(D, te, A++);
      }), L;
    }
    function Bi(v) {
      var g2 = 0;
      return ea(v, function() {
        g2++;
      }), g2;
    }
    function No(v, g2, D) {
      ea(v, function() {
        g2.apply(this, arguments);
      }, D);
    }
    function $l(v) {
      return ea(v, function(g2) {
        return g2;
      }) || [];
    }
    function ta(v) {
      if (!vt(v))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return v;
    }
    function Ya(v) {
      var g2 = { $$typeof: T, _currentValue: v, _currentValue2: v, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      g2.Provider = { $$typeof: x, _context: g2 };
      var D = false, L = false, A = false;
      {
        var te = { $$typeof: T, _context: g2 };
        Object.defineProperties(te, { Provider: { get: function() {
          return L || (L = true, Pe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), g2.Provider;
        }, set: function(K) {
          g2.Provider = K;
        } }, _currentValue: { get: function() {
          return g2._currentValue;
        }, set: function(K) {
          g2._currentValue = K;
        } }, _currentValue2: { get: function() {
          return g2._currentValue2;
        }, set: function(K) {
          g2._currentValue2 = K;
        } }, _threadCount: { get: function() {
          return g2._threadCount;
        }, set: function(K) {
          g2._threadCount = K;
        } }, Consumer: { get: function() {
          return D || (D = true, Pe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), g2.Consumer;
        } }, displayName: { get: function() {
          return g2.displayName;
        }, set: function(K) {
          A || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", K), A = true);
        } } }), g2.Consumer = te;
      }
      return g2._currentRenderer = null, g2._currentRenderer2 = null, g2;
    }
    var Ca = -1, Si = 0, Qa = 1, Ra = 2;
    function na(v) {
      if (v._status === Ca) {
        var g2 = v._result, D = g2();
        if (D.then(function(te) {
          if (v._status === Si || v._status === Ca) {
            var K = v;
            K._status = Qa, K._result = te;
          }
        }, function(te) {
          if (v._status === Si || v._status === Ca) {
            var K = v;
            K._status = Ra, K._result = te;
          }
        }), v._status === Ca) {
          var L = v;
          L._status = Si, L._result = D;
        }
      }
      if (v._status === Qa) {
        var A = v._result;
        return A === void 0 && Pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, A), "default" in A || Pe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, A), A.default;
      } else
        throw v._result;
    }
    function ra(v) {
      var g2 = { _status: Ca, _result: v }, D = { $$typeof: J, _payload: g2, _init: na };
      {
        var L, A;
        Object.defineProperties(D, { defaultProps: { configurable: true, get: function() {
          return L;
        }, set: function(te) {
          Pe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), L = te, Object.defineProperty(D, "defaultProps", { enumerable: true });
        } }, propTypes: { configurable: true, get: function() {
          return A;
        }, set: function(te) {
          Pe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = te, Object.defineProperty(D, "propTypes", { enumerable: true });
        } } });
      }
      return D;
    }
    function bi(v) {
      v != null && v.$$typeof === H ? Pe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof v != "function" ? Pe("forwardRef requires a render function but was given %s.", v === null ? "null" : typeof v) : v.length !== 0 && v.length !== 2 && Pe("forwardRef render functions accept exactly two parameters: props and ref. %s", v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), v != null && (v.defaultProps != null || v.propTypes != null) && Pe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var g2 = { $$typeof: V, render: v };
      {
        var D;
        Object.defineProperty(g2, "displayName", { enumerable: false, configurable: true, get: function() {
          return D;
        }, set: function(L) {
          D = L, !v.name && !v.displayName && (v.displayName = L);
        } });
      }
      return g2;
    }
    var E;
    E = Symbol.for("react.module.reference");
    function W(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === p || v === b || bt || v === d || v === U || v === j2 || Te || v === ie || Re || dt || yt || typeof v == "object" && v !== null && (v.$$typeof === J || v.$$typeof === H || v.$$typeof === x || v.$$typeof === T || v.$$typeof === V || v.$$typeof === E || v.getModuleId !== void 0));
    }
    function ae(v, g2) {
      W(v) || Pe("memo: The first argument must be a component. Instead received: %s", v === null ? "null" : typeof v);
      var D = { $$typeof: H, type: v, compare: g2 === void 0 ? null : g2 };
      {
        var L;
        Object.defineProperty(D, "displayName", { enumerable: false, configurable: true, get: function() {
          return L;
        }, set: function(A) {
          L = A, !v.name && !v.displayName && (v.displayName = A);
        } });
      }
      return D;
    }
    function ve() {
      var v = k2.current;
      return v === null && Pe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), v;
    }
    function Xe(v) {
      var g2 = ve();
      if (v._context !== void 0) {
        var D = v._context;
        D.Consumer === v ? Pe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : D.Provider === v && Pe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return g2.useContext(v);
    }
    function it(v) {
      var g2 = ve();
      return g2.useState(v);
    }
    function He(v, g2, D) {
      var L = ve();
      return L.useReducer(v, g2, D);
    }
    function Ce(v) {
      var g2 = ve();
      return g2.useRef(v);
    }
    function ln(v, g2) {
      var D = ve();
      return D.useEffect(v, g2);
    }
    function Ut(v, g2) {
      var D = ve();
      return D.useInsertionEffect(v, g2);
    }
    function It(v, g2) {
      var D = ve();
      return D.useLayoutEffect(v, g2);
    }
    function An(v, g2) {
      var D = ve();
      return D.useCallback(v, g2);
    }
    function Ea(v, g2) {
      var D = ve();
      return D.useMemo(v, g2);
    }
    function Lo(v, g2, D) {
      var L = ve();
      return L.useImperativeHandle(v, g2, D);
    }
    function or(v, g2) {
      {
        var D = ve();
        return D.useDebugValue(v, g2);
      }
    }
    function hc() {
      var v = ve();
      return v.useTransition();
    }
    function Wa(v) {
      var g2 = ve();
      return g2.useDeferredValue(v);
    }
    function Fe() {
      var v = ve();
      return v.useId();
    }
    function wi(v, g2, D) {
      var L = ve();
      return L.useSyncExternalStore(v, g2, D);
    }
    var Ba = 0, Uo, Io, $o, Mo, Ao, zo, Ml;
    function zu() {
    }
    zu.__reactDisabledLog = true;
    function Al() {
      {
        if (Ba === 0) {
          Uo = console.log, Io = console.info, $o = console.warn, Mo = console.error, Ao = console.group, zo = console.groupCollapsed, Ml = console.groupEnd;
          var v = { configurable: true, enumerable: true, value: zu, writable: true };
          Object.defineProperties(console, { info: v, log: v, warn: v, error: v, group: v, groupCollapsed: v, groupEnd: v });
        }
        Ba++;
      }
    }
    function Xi() {
      {
        if (Ba--, Ba === 0) {
          var v = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, { log: q({}, v, { value: Uo }), info: q({}, v, { value: Io }), warn: q({}, v, { value: $o }), error: q({}, v, { value: Mo }), group: q({}, v, { value: Ao }), groupCollapsed: q({}, v, { value: zo }), groupEnd: q({}, v, { value: Ml }) });
        }
        Ba < 0 && Pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ta = be.ReactCurrentDispatcher, lr;
    function aa(v, g2, D) {
      {
        if (lr === void 0)
          try {
            throw Error();
          } catch (A) {
            var L = A.stack.trim().match(/\n( *(at )?)/);
            lr = L && L[1] || "";
          }
        return `
` + lr + v;
      }
    }
    var xi = false, Ji;
    {
      var zl = typeof WeakMap == "function" ? WeakMap : Map;
      Ji = new zl();
    }
    function ju(v, g2) {
      if (!v || xi)
        return "";
      {
        var D = Ji.get(v);
        if (D !== void 0)
          return D;
      }
      var L;
      xi = true;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = Ta.current, Ta.current = null, Al();
      try {
        if (g2) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (tt) {
              L = tt;
            }
            Reflect.construct(v, [], K);
          } else {
            try {
              K.call();
            } catch (tt) {
              L = tt;
            }
            v.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            L = tt;
          }
          v();
        }
      } catch (tt) {
        if (tt && L && typeof tt.stack == "string") {
          for (var se = tt.stack.split(`
`), we = L.stack.split(`
`), Ee = se.length - 1, Oe = we.length - 1; Ee >= 1 && Oe >= 0 && se[Ee] !== we[Oe]; )
            Oe--;
          for (; Ee >= 1 && Oe >= 0; Ee--, Oe--)
            if (se[Ee] !== we[Oe]) {
              if (Ee !== 1 || Oe !== 1)
                do
                  if (Ee--, Oe--, Oe < 0 || se[Ee] !== we[Oe]) {
                    var Ue = `
` + se[Ee].replace(" at new ", " at ");
                    return v.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", v.displayName)), typeof v == "function" && Ji.set(v, Ue), Ue;
                  }
                while (Ee >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        xi = false, Ta.current = te, Xi(), Error.prepareStackTrace = A;
      }
      var Ve = v ? v.displayName || v.name : "", $t = Ve ? aa(Ve) : "";
      return typeof v == "function" && Ji.set(v, $t), $t;
    }
    function Di(v, g2, D) {
      return ju(v, false);
    }
    function Pu(v) {
      var g2 = v.prototype;
      return !!(g2 && g2.isReactComponent);
    }
    function Xa(v, g2, D) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return ju(v, Pu(v));
      if (typeof v == "string")
        return aa(v);
      switch (v) {
        case U:
          return aa("Suspense");
        case j2:
          return aa("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case V:
            return Di(v.render);
          case H:
            return Xa(v.type, g2, D);
          case J: {
            var L = v, A = L._payload, te = L._init;
            try {
              return Xa(te(A), g2, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Gi = {}, jl = be.ReactDebugCurrentFrame;
    function ia(v) {
      if (v) {
        var g2 = v._owner, D = Xa(v.type, v._source, g2 ? g2.type : null);
        jl.setExtraStackFrame(D);
      } else
        jl.setExtraStackFrame(null);
    }
    function jo(v, g2, D, L, A) {
      {
        var te = Function.call.bind(zr);
        for (var K in v)
          if (te(v, K)) {
            var se = void 0;
            try {
              if (typeof v[K] != "function") {
                var we = Error((L || "React class") + ": " + D + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              se = v[K](g2, K, L, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (ia(A), Pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", D, K, typeof se), ia(null)), se instanceof Error && !(se.message in Gi) && (Gi[se.message] = true, ia(A), Pe("Failed %s type: %s", D, se.message), ia(null));
          }
      }
    }
    function ot(v) {
      if (v) {
        var g2 = v._owner, D = Xa(v.type, v._source, g2 ? g2.type : null);
        Me(D);
      } else
        Me(null);
    }
    var Pl;
    Pl = false;
    function Hl() {
      if (re.current) {
        var v = Yn(re.current.type);
        if (v)
          return `

Check the render method of \`` + v + "`.";
      }
      return "";
    }
    function ze(v) {
      if (v !== void 0) {
        var g2 = v.fileName.replace(/^.*[\\\/]/, ""), D = v.lineNumber;
        return `

Check your code at ` + g2 + ":" + D + ".";
      }
      return "";
    }
    function Hu(v) {
      return v != null ? ze(v.__source) : "";
    }
    var Cn = {};
    function Ci(v) {
      var g2 = Hl();
      if (!g2) {
        var D = typeof v == "string" ? v : v.displayName || v.name;
        D && (g2 = `

Check the top-level render call using <` + D + ">.");
      }
      return g2;
    }
    function Ja(v, g2) {
      if (!(!v._store || v._store.validated || v.key != null)) {
        v._store.validated = true;
        var D = Ci(g2);
        if (!Cn[D]) {
          Cn[D] = true;
          var L = "";
          v && v._owner && v._owner !== re.current && (L = " It was passed a child from " + Yn(v._owner.type) + "."), ot(v), Pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, L), ot(null);
        }
      }
    }
    function Fu(v, g2) {
      if (typeof v == "object") {
        if (en(v))
          for (var D = 0; D < v.length; D++) {
            var L = v[D];
            vt(L) && Ja(L, g2);
          }
        else if (vt(v))
          v._store && (v._store.validated = true);
        else if (v) {
          var A = C(v);
          if (typeof A == "function" && A !== v.entries)
            for (var te = A.call(v), K; !(K = te.next()).done; )
              vt(K.value) && Ja(K.value, g2);
        }
      }
    }
    function un(v) {
      {
        var g2 = v.type;
        if (g2 == null || typeof g2 == "string")
          return;
        var D;
        if (typeof g2 == "function")
          D = g2.propTypes;
        else if (typeof g2 == "object" && (g2.$$typeof === V || g2.$$typeof === H))
          D = g2.propTypes;
        else
          return;
        if (D) {
          var L = Yn(g2);
          jo(D, v.props, "prop", L, v);
        } else if (g2.PropTypes !== void 0 && !Pl) {
          Pl = true;
          var A = Yn(g2);
          Pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof g2.getDefaultProps == "function" && !g2.getDefaultProps.isReactClassApproved && Pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zt(v) {
      {
        for (var g2 = Object.keys(v.props), D = 0; D < g2.length; D++) {
          var L = g2[D];
          if (L !== "children" && L !== "key") {
            ot(v), Pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), ot(null);
            break;
          }
        }
        v.ref !== null && (ot(v), Pe("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function Vu(v, g2, D) {
      var L = W(v);
      if (!L) {
        var A = "";
        (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var te = Hu(g2);
        te ? A += te : A += Hl();
        var K;
        v === null ? K = "null" : en(v) ? K = "array" : v !== void 0 && v.$$typeof === u ? (K = "<" + (Yn(v.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : K = typeof v, Pe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, A);
      }
      var se = xe.apply(this, arguments);
      if (se == null)
        return se;
      if (L)
        for (var we = 2; we < arguments.length; we++)
          Fu(arguments[we], v);
      return v === p ? zt(se) : un(se), se;
    }
    var Cr = false;
    function ur(v) {
      var g2 = Vu.bind(null, v);
      return g2.type = v, Cr || (Cr = true, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(g2, "type", { enumerable: false, get: function() {
        return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: v }), v;
      } }), g2;
    }
    function oa(v, g2, D) {
      for (var L = pt.apply(this, arguments), A = 2; A < arguments.length; A++)
        Fu(arguments[A], L.type);
      return un(L), L;
    }
    function Po(v, g2) {
      var D = Q.transition;
      Q.transition = {};
      var L = Q.transition;
      Q.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        v();
      } finally {
        if (Q.transition = D, D === null && L._updatedFibers) {
          var A = L._updatedFibers.size;
          A > 10 && Lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), L._updatedFibers.clear();
        }
      }
    }
    var Ho = false, Pr = null;
    function Fl(v) {
      if (Pr === null)
        try {
          var g2 = ("require" + Math.random()).slice(0, 7), D = r && r[g2];
          Pr = D.call(r, "timers").setImmediate;
        } catch {
          Pr = function(L) {
            Ho === false && (Ho = true, typeof MessageChannel > "u" && Pe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var A = new MessageChannel();
            A.port1.onmessage = L, A.port2.postMessage(void 0);
          };
        }
      return Pr(v);
    }
    var Ri = 0, qi = false;
    function Vl(v) {
      {
        var g2 = Ri;
        Ri++, X.current === null && (X.current = []);
        var D = X.isBatchingLegacy, L;
        try {
          if (X.isBatchingLegacy = true, L = v(), !D && X.didScheduleLegacyUpdate) {
            var A = X.current;
            A !== null && (X.didScheduleLegacyUpdate = false, Fo(A));
          }
        } catch (Ve) {
          throw la(g2), Ve;
        } finally {
          X.isBatchingLegacy = D;
        }
        if (L !== null && typeof L == "object" && typeof L.then == "function") {
          var te = L, K = false, se = { then: function(Ve, $t) {
            K = true, te.then(function(tt) {
              la(g2), Ri === 0 ? Ei(tt, Ve, $t) : Ve(tt);
            }, function(tt) {
              la(g2), $t(tt);
            });
          } };
          return !qi && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            K || (qi = true, Pe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), se;
        } else {
          var we = L;
          if (la(g2), Ri === 0) {
            var Ee = X.current;
            Ee !== null && (Fo(Ee), X.current = null);
            var Oe = { then: function(Ve, $t) {
              X.current === null ? (X.current = [], Ei(we, Ve, $t)) : Ve(we);
            } };
            return Oe;
          } else {
            var Ue = { then: function(Ve, $t) {
              Ve(we);
            } };
            return Ue;
          }
        }
      }
    }
    function la(v) {
      v !== Ri - 1 && Pe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ri = v;
    }
    function Ei(v, g2, D) {
      {
        var L = X.current;
        if (L !== null)
          try {
            Fo(L), Fl(function() {
              L.length === 0 ? (X.current = null, g2(v)) : Ei(v, g2, D);
            });
          } catch (A) {
            D(A);
          }
        else
          g2(v);
      }
    }
    var Ti = false;
    function Fo(v) {
      if (!Ti) {
        Ti = true;
        var g2 = 0;
        try {
          for (; g2 < v.length; g2++) {
            var D = v[g2];
            do
              D = D(true);
            while (D !== null);
          }
          v.length = 0;
        } catch (L) {
          throw v = v.slice(g2 + 1), L;
        } finally {
          Ti = false;
        }
      }
    }
    var Yu = Vu, Qu = oa, y = ur, R = { map: ea, forEach: No, count: Bi, toArray: $l, only: ta };
    n2.Children = R, n2.Component = Qe, n2.Fragment = p, n2.Profiler = b, n2.PureComponent = Be, n2.StrictMode = d, n2.Suspense = U, n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, n2.cloneElement = Qu, n2.createContext = Ya, n2.createElement = Yu, n2.createFactory = y, n2.createRef = $n, n2.forwardRef = bi, n2.isValidElement = vt, n2.lazy = ra, n2.memo = ae, n2.startTransition = Po, n2.unstable_act = Vl, n2.useCallback = An, n2.useContext = Xe, n2.useDebugValue = or, n2.useDeferredValue = Wa, n2.useEffect = ln, n2.useId = Fe, n2.useImperativeHandle = Lo, n2.useInsertionEffect = Ut, n2.useLayoutEffect = It, n2.useMemo = Ea, n2.useReducer = He, n2.useRef = Ce, n2.useState = it, n2.useSyncExternalStore = wi, n2.useTransition = hc, n2.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var Pb = zb((n2, r) => {
  "use strict";
  process.env.NODE_ENV === "production" ? r.exports = X3() : r.exports = J3();
});
var G3 = jb(Pb(), 1);
var fP = G3.default.createContext({});
var q3 = (n2, r, o = {}) => {
  if (r === Symbol.toStringTag)
    return n2;
  if (r === "$$typeof")
    return typeof n2;
  if (r in n2 || r === "_reactFragment")
    return n2[r];
  let u = process.env.NODE_ENV;
  if (Object.keys(o).includes(u))
    o[u]({ target: n2, key: r });
  else {
    console.log(r.toString()), console.error({ target: n2, key: r });
    let c = Error(`invalid property "${r.toString()}"`);
    console.error(c.stack);
  }
};
var Mu = (n2, r = {}) => {
  let o = (u, c) => q3(u, c, r);
  return Array.isArray(n2) ? new Proxy(n2.reduce((u, c) => ({ ...u, [c]: c }), {}), { get: o }) : new Proxy(n2, { get: o });
};
var dP = jb(Pb(), 1);
var pP = jb(Pb(), 1);
var L_ = "./ampersand-KER2ENTU.png";
var Z3 = { name: "Ben Warzeski", email: "bwarzeski@gmail.com", title: "Full-Stack Software Engineer", phone: "+1 (941) 387-5092", phoneRaw: "19413875092", github: "https://www.github.com/muselesscreator", linkedIn: "https://www.linkedin.com/in/benjamin-warzeski-69111518/", avatar: L_ };
var Kr = Z3;
var Ze = n(fn());
var f4 = () => {
  let [n2, r] = M_.default.useState(false), o = () => r(!n2);
  return (0, Ze.jsxs)("aside", { className: (0, import_classnames.default)("sidebar", { active: n2 }), children: [(0, Ze.jsxs)("div", { className: "sidebar-info", children: [(0, Ze.jsx)("figure", { className: "avatar-box", children: (0, Ze.jsx)("img", { src: Kr.avatar, alt: Kr.name, width: "80" }) }), (0, Ze.jsxs)("div", { className: "info-content", children: [(0, Ze.jsx)("h1", { className: "name", title: Kr.name, children: Kr.name }), (0, Ze.jsx)("p", { className: "title", children: Kr.title })] }), (0, Ze.jsx)("button", { onClick: o, className: "info_more-btn", children: (0, Ze.jsx)("span", { children: "Show Contacts" }) })] }), (0, Ze.jsxs)("div", { className: "sidebar-info_more", children: [(0, Ze.jsx)("div", { className: "separator" }), (0, Ze.jsxs)("ul", { className: "contacts-list", children: [(0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(import_fa.FaEnvelope, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "Email" }), (0, Ze.jsx)("a", { href: `mailto:${Kr.email}`, className: "contact-link", children: Kr.email })] })] }), (0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(import_fa6.FaPhone, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "Phone" }), (0, Ze.jsx)("a", { href: `tel:${Kr.phoneRaw}`, className: "contact-link", children: Kr.phone })] })] }), (0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(import_fa.FaGithub, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "Github" }), (0, Ze.jsx)("a", { href: Kr.github, className: "contact-link", children: Kr.github })] })] }), (0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(import_fa.FaLinkedin, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "LinkedIn" }), (0, Ze.jsx)("a", { href: Kr.linkedIn, className: "contact-link", children: Kr.linkedIn })] })] })] })] })] });
};
var A_ = f4;
var LP = n(Ur());
var Sn = Mu({ about: "about", contact: "contact", resume: "resume", portfolio: "portfolio", blog: "blog" });
var z_ = Mu({ [Sn.about]: "About", [Sn.contact]: "Contact", [Sn.resume]: "Resume", [Sn.portfolio]: "Portfolio", [Sn.blog]: "Blog" });
var vc = n(fn());
var v4 = ({ activePage: n2 }) => {
  let r = (o) => (0, vc.jsx)("li", { className: "navbar-item", children: (0, vc.jsx)(import_react_router_dom3.NavLink, { className: (0, import_classnames2.default)("navbar-link", { active: n2 === o }), to: `/${o}`, onClick: () => setActivePage(o), children: z_[o] }) }, o);
  return (0, vc.jsx)("nav", { className: "navbar", children: (0, vc.jsxs)("ul", { className: "navbar-list", children: [r(Sn.about), r(Sn.resume), r(Sn.portfolio), r(Sn.contact)] }) });
};
var j_ = v4;
var sH = n(Ur());
var AP = n(Ur());
var Sr = n(fn());
var m4 = () => (0, Sr.jsxs)("article", { className: "about active", children: [(0, Sr.jsx)("header", { children: (0, Sr.jsx)("h2", { className: "h2 article-title", children: "About me" }) }), (0, Sr.jsxs)("div", { className: "about-text", children: [(0, Sr.jsx)("p", { children: "With over a decade of software engineering, I specialize in helping teams produce solid, testable frontend-code and maintainable agile frontend development processes, as well as experience in building and managing communities devoted to frontend communication, coordination, and training." }), (0, Sr.jsx)("p", { children: "I have experience guiding large projects from conception, through ideation and refinement, implementation, validation, release, and maintenance, as well as coming into existing projects and codebases and updating them to a consistent level of quality." }), (0, Sr.jsx)("p", { children: "My background in SQA and the odd variety of engineering tech my career has exposed me to give me a mindset and focus on maintainability of code and practices above all else.  I like to spend a bit of thoughtful effort now to make less work for everyone later." }), (0, Sr.jsx)("p", { children: "My core goal in any code-base is not only to achieve excellent code, but specifically to make achieving excellence as easy as possible.  I have high standards for my code and the projects I own, but I also endeavor to provide tools, workflows, and utilities to allow developers to quickly build well-designed, easily-maintained, and highly/deeply tested code." }), (0, Sr.jsx)("p", { children: "It has also been my experience that Agile workflows and processes are very effective for managing the engineering process, and have been pleased to be able to lead and teach multiple teams in development and refinement of effective Agile practices, with a focus on iteration, clarity of ceremonies, and focus/efficacy of meetings." }), (0, Sr.jsxs)("ul", { children: [(0, Sr.jsx)("li", { children: "Senior Frontend/Full-Stack Software Engineer with 8+ years of experience with Python and Full-Stack Python/JavaScript Web development, with a focus on user interfaces, APIs, and testing methodologies." }), (0, Sr.jsx)("li", { children: "Experience developing in a variety of architectures, including web, mobile, asynchronous server applications, and  2D/3D gaming." }), (0, Sr.jsx)("li", { children: "Experience self-managing and leading on projects with complex requirements across departments and generating well defined, fully-featured, well-tested code." }), (0, Sr.jsx)("li", { children: "Experience with test automation, database design, and API design." })] })] })] });
var P_ = m4;
var jP = n(Ur());
var dh = n(fn());
var h4 = () => (0, dh.jsxs)("article", { className: "about active", children: [(0, dh.jsx)("h1", { children: "About" }), "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies."] });
var H_ = h4;
var HP = n(Ur());
var Ar = n(fn());
var Vb = Mu({ fullname: "fullname", email: "email", message: "message" });
var y4 = () => {
  let [n2, r] = (0, import_use_keyed_state.useKeyedState)(Vb.fullname, ""), [o, u] = (0, import_use_keyed_state.useKeyedState)(Vb.email, ""), [c, p] = (0, import_use_keyed_state.useKeyedState)(Vb.message, "");
  return (0, Ar.jsxs)("article", { className: "contact active", children: [(0, Ar.jsx)("header", { children: (0, Ar.jsx)("h2", { className: "h2 article-title", children: "Contact" }) }), (0, Ar.jsxs)("section", { className: "contact-form", children: [(0, Ar.jsx)("h3", { className: "h3 form-title", children: "Contact Form" }), (0, Ar.jsxs)("form", { method: "POST", action: "https://formspree.io/f/mkndboev", className: "form", "data-form": true, children: [(0, Ar.jsxs)("div", { className: "input-wrapper", children: [(0, Ar.jsx)("input", { type: "text", name: "fullname", className: "form-input", placeholder: "Full name", required: true, value: n2, onChange: (b) => r(b.target.value) }), (0, Ar.jsx)("input", { type: "email", name: "email", className: "form-input", placeholder: "Email address", required: true, value: o, onChange: (b) => u(b.target.value) })] }), (0, Ar.jsx)("textarea", { name: "message", className: "form-input", placeholder: "Your Message", required: true, value: c, onChange: (b) => p(b.target.value) }), (0, Ar.jsxs)("button", { className: "form-btn", type: "submit", disabled: !(n2 && o && c), children: [(0, Ar.jsx)("ion-icon", { name: "paper-plane" }), (0, Ar.jsx)("span", { children: "Send Message" })] })] })] })] });
};
var F_ = y4;
var q_ = n(Ur());
var R4 = V_();
var E4 = Y_();
var T4 = Q_();
var k4 = W_();
var _4 = B_();
var O4 = X_();
var N4 = J_();
var Nt = Mu({ openSource: "Open Source Contributions", public: "Public Packages", all: "All" });
var L4 = [{ title: "@muselesscreator/react-shallow-snapshot", description: "A shallow snapshot testing utility for React", category: Nt.public, githubUrl: "https://www.github.com/muselesscreator/react-shallow-snapshot", githubRepo: "muselesscreator/react-shallow-snapshot", packageName: "@muselesscreator/react-shallow-snapshot", packageUrl: "https://www.npmjs.com/package/@muselesscreator/react-shallow-snapshot", image: _4, projectUrl: "https://www.npmjs.com/package/@muselesscreator/react-shallow-snapshot" }, { title: "@muselesscreator/strict-dict", description: "A key-safe object wrapper for JS", category: Nt.public, githubUrl: "https://www.github.com/muselesscreator/strict-dict", githubRepo: "muselesscreator/strict-dict", packageName: "@muselesscreator/strict-dict", packageUrl: "https://www.npmjs.com/package/@muselesscreator/strict-dict", details: "A key-safe dictionary for JavaScript.  This package is used in all of my projects and is available for anyone to use.", image: k4, projectUrl: "https://www.npmjs.com/package/@muselesscreator/strict-dict" }, { title: "@muselesscreator/use-keyed-state", description: "A more testable React hook for keyed state management", category: Nt.public, githubUrl: "https://www.github.com/muselesscreator/use-keyed-state", githubRepo: "muselesscreator/use-keyed-state", packageName: "@muselesscreator/use-keyed-state", packageUrl: "https://www.npmjs.com/package/@muselesscreator/use-keyed-state", projectUrl: "https://www.npmjs.com/package/@muselesscreator/use-keyed-state", image: O4 }, { title: "EdX Gradebook App Re-Architecture", description: "Grade management app for EdX Course Staff", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-gradebook", githubRepo: "openedx/frontend-app-gradebook", packageName: "@edx/frontend-app-gradebook", packageUrl: "npmjs.com/package/@edx/frontend-app-gradebook", details: "I led a team effort to update and fully re-architect the old Gradebook app with modern React practices and added theme-ability and test coverage.", image: R4, projectUrl: "https://www.github.com/openedx/frontend-app-gradebook" }, { title: "EdX Open Response Assessment Staff Grader", description: "Staff-Grading tool for EdX short-answer and file-submission questions", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-ora-grading", githubRepo: "openedx/frontend-app-ora-grading", packageName: "@edx/frontend-app-ora-grading", packageUrl: "npmjs.com/package/@edx/frontend-app-ora-grading", details: "Served as Technical Lead for the development of a new grading interface which drastically reduced the time, effort, and frustration involved in grading of one of the most-used problem types in the system.  Ensured a bug-free release of code with 100% test coverage.", image: N4, projectUrl: "https://www.github.com/openedx/frontend-app-ora-grading" }, { title: "EdX Learner Home Redesign", description: "Landing page for learner course listings", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-learner-dashboard", githubRepo: "openedx/frontend-app-learner-dashboard", packageName: "@edx/frontend-app-learner-dashboard", packageUrl: "npmjs.com/package/@edx/frontend-app-learner-dashboard", details: "Served as Technical Lead and Project Manager for redesign of the Learner Home web interface (logged-in learner\u2019s course listing page).  The new experience is faster to load, more configurable, more theme-able, and fully internationalized, while providing a much easier interface for adding revenue-significant upsell interfaces (suggested courses, upsell links, \u201Cwhere to go from here?\u201D)", image: E4, projectUrl: "https://www.github.com/openedx/frontend-app-learner-dashboard" }, { title: "EdX Open Response Assessment Learning Block Redesign", description: "Learning block for all short-answer and file-submission questions", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-ora", githubRepo: "openedx/frontend-app-ora", packageName: "@edx/frontend-app-ora", packageUrl: "npmjs.com/package/@edx/frontend-app-ora", details: "Served as Technical Lead and Project Manager for the full redesign of theOpen Response Assessment learning block, migrating legacy (backboneJS/jquery) experience to a modern experience using React and theme-able componentry.", image: T4, projectUrl: "https://www.github.com/openedx/frontend-app-ora" }];
var G_ = L4;
var Je = n(fn());
var A4 = ({ project: n2 }) => {
  let { title: r, description: o, category: u, githubUrl: c, githubRepo: p, packageName: d, packageUrl: b, image: x, projectUrl: T } = n2;
  return (0, Je.jsxs)("li", { className: "project-item active", children: [(0, Je.jsxs)("a", { href: T, target: "_blank", rel: "noopener noreferrer", children: [(0, Je.jsxs)("figure", { className: "project-img", children: [(0, Je.jsxs)("div", { className: "project-item-icon-box", children: [(0, Je.jsx)("p", { children: o }), (0, Je.jsx)(import_fa2.FaEye, {})] }), (0, Je.jsx)("img", { src: x, alt: r, loading: "lazy" })] }), (0, Je.jsx)("h4", { className: "project-title", children: r }), (0, Je.jsx)("p", { className: "project-category", children: u })] }), (0, Je.jsxs)("div", { className: "project-links", children: [(0, Je.jsxs)("p", { children: [(0, Je.jsx)(import_ri.RiGithubFill, { style: { transform: "translate(0, 2px)" } }), ": ", (0, Je.jsx)("a", { href: c, className: "project-link", target: "_blank", rel: "noopener noreferrer", children: p })] }), (0, Je.jsxs)("p", { children: [(0, Je.jsx)(import_ri.RiNpmjsFill, { style: { transform: "translate(0, 2px)" } }), ": ", (0, Je.jsx)("a", { href: b, className: "project-link", target: "_blank", rel: "noopener noreferrer", children: d })] })] })] });
};
var z4 = () => {
  let [n2, r] = q_.default.useState(Nt.all), o = (u) => () => r(u);
  return (0, Je.jsxs)("article", { className: "portfolio active", children: [(0, Je.jsx)("header", { children: (0, Je.jsx)("h2", { className: "h2 article-title", children: "Portfolio" }) }), (0, Je.jsxs)("section", { className: "projects", children: [(0, Je.jsxs)("ul", { className: "filter-list", children: [(0, Je.jsx)("li", { className: "filter-item", children: (0, Je.jsx)("button", { className: (0, import_classnames3.default)({ active: n2 === Nt.all }), onClick: o(Nt.all), children: Nt.all }) }), (0, Je.jsx)("li", { className: "filter-item", children: (0, Je.jsx)("button", { className: (0, import_classnames3.default)({ active: n2 === Nt.public }), onClick: o(Nt.public), children: Nt.public }) }), (0, Je.jsx)("li", { className: "filter-item", children: (0, Je.jsx)("button", { className: (0, import_classnames3.default)({ active: n2 === Nt.openSource }), onClick: o(Nt.openSource), children: Nt.openSource }) })] }), (0, Je.jsxs)("div", { className: "filter-select-box", children: [(0, Je.jsxs)("button", { className: "filter-select", children: [(0, Je.jsx)("div", { className: "select-value", children: "Select category" }), (0, Je.jsx)("div", { className: "select-icon", children: (0, Je.jsx)(import_fa2.FaChevronDown, {}) })] }), (0, Je.jsxs)("ul", { children: [(0, Je.jsx)("li", { className: (0, import_classnames3.default)("select-item", { active: n2 === Nt.all }), onClick: o(Nt.all), children: Nt.all }), (0, Je.jsx)("li", { className: (0, import_classnames3.default)("select-item", { active: n2 === Nt.public }), onClick: o(Nt.public), children: Nt.public }), (0, Je.jsx)("li", { className: (0, import_classnames3.default)("select-item", { active: n2 === Nt.openSource }), onClick: o(Nt.openSource), children: Nt.openSource })] })] }), (0, Je.jsx)("ul", { className: "project-list", children: G_.filter((u) => u.category === n2 || n2 === Nt.all).map((u) => (0, Je.jsx)(A4, { project: u }, u.title)) })] })] });
};
var K_ = z4;
var oH = n(Ur());
var ue = n(fn());
var j4 = () => (0, ue.jsxs)("article", { className: "resume active", children: [(0, ue.jsx)("header", { children: (0, ue.jsx)("h2", { className: "h2 article-title", children: "Resume" }) }), (0, ue.jsxs)("section", { className: "timeline", children: [(0, ue.jsxs)("div", { className: "title-wrapper", children: [(0, ue.jsx)("div", { className: "icon-box", children: (0, ue.jsx)(import_gi.GiOpenBook, {}) }), (0, ue.jsx)("h3", { className: "h3", children: "Education" })] }), (0, ue.jsx)("ol", { className: "timeline-list", children: (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Tulane University" }), (0, ue.jsx)("span", { children: "2007 \u2014 2011" }), (0, ue.jsx)("p", { className: "timeline-text", children: 'Bachelor of Science in Mathematics with minors in Music and "Music, Science and Technology".' })] }) })] }), (0, ue.jsxs)("section", { className: "timeline", children: [(0, ue.jsxs)("div", { className: "title-wrapper", children: [(0, ue.jsx)("div", { className: "icon-box", children: (0, ue.jsx)(import_gi.GiOpenBook, {}) }), (0, ue.jsx)("h3", { className: "h3", children: "Experience" })] }), (0, ue.jsxs)("ol", { className: "timeline-list", children: [(0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Senior Software Engineer II, UI-Lead - EdX/2U Inc, Boston, MA" }), (0, ue.jsx)("span", { children: "2020 - 2024" }), (0, ue.jsx)("p", { className: "timeline-text", children: "I served as the Frontend technical leadership for my squad across formation and delivery of multiple projects, as well as serving as the Project Manager for later projects, including the Learner Home and ORA redesign projects." }), (0, ue.jsx)("p", { className: "timeline-text", children: "My core priorities and contributions outside of project delivery came in the form of testing, community, and training." }), (0, ue.jsx)("b", { className: "timeline-text", children: "Community-Building" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "Organized and managed the Fedx (frontend-at-edx) community, integrating rotating leadership, a manage-able charter, engineering leadership support/sponsorship, and well-defined responsibilities." }), (0, ue.jsx)("li", { children: "This community serves as the hub for frontend development across teams at a company with no formal frontend organization.  This provided us a place and avenue for discussing/resolving tricky \u201Cglue\u201D type problems that affected many teams, but none specifically enough to get funding otherwise (dependency upgrades, pattern updates, adoption of new technology, definition and consolidation of coding standards)." })] }), (0, ue.jsx)("b", { className: "timeline-text", children: "Training" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "In addition to training up a junior frontend dev on my team as well as training my backend devs to be comfortable working quickly and effectively in our React code, I spent a great deal of time training up developers on other teams on frontend development and testing techniques." }), (0, ue.jsx)("li", { children: "Organized and managed the frontend study group, and integrated it with the fedx community.  I wrote and ran a variety of training sessions on testing, hooks, react development, internal tools, typescript, and more." })] }), (0, ue.jsx)("b", { className: "timeline-text", children: "Testing" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "I maintain a high standard of testing in my projects, with a tendency to release with close to 100% test coverage.  I have a focus on accurate/easy unit tests that provide maximum value for minimum creation/maintenance time." }), (0, ue.jsx)("li", { children: "As part of my testing pattern, I have developed a testing library to serve as a replacement for Enzyme, which is getting deprecated in future versions of React, which has begun being used by members of the community to mass-overhaul testing patterns." })] })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Senior Software Engineer - ReadCoor Inc, Boston, MA" }), (0, ue.jsx)("span", { children: "2018 - 2020" }), (0, ue.jsx)("p", { className: "timeline-text", children: (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Facilitated technology comparison process across teams to determine in which new UI technology the disparate  User Interfaces at the company should work towards being re-written, managing to acquire broad buy-in  across multiple development teams with very different focuses and existing JS workflows.  \u2022 Succeeded in pushing to implement a stable Javascript development workflow, with documented coding  guidelines, UI-generation scripts, reusable plug-in JS components and modules, and a shared theming." }), (0, ue.jsx)("li", { children: " Lead re-write of multiple existing user interfaces into React/Redux." }), (0, ue.jsx)("li", { children: "Lead the requirements generation and implementation of the Customer Device Interface, providing control  over all the parts of the genetic sequencing scan setup and run procedure, with input from and co-ordination  with UX designer. As part of this process, I helped lead the generation of initial design and requirements,  provided 90% of JS implementation, facilitated/lead backend API updates/integration, and generated a full  set of requirements in Testlink along with a development manual test plan for engineer testers." })] }) })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Software Engineer, UI Lead - Optimus Ride, Boston, MA" }), (0, ue.jsx)("span", { children: "2017 \u2014 2018" }), (0, ue.jsx)("p", { className: "timeline-text", children: (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "As Lead UI Developer, implemented web-based customer-facing User Interfaces in React/Redux, targeted at  many levels of customer, including rider, dispatchers, vehicle operators, and fleet managers." }), (0, ue.jsx)("li", { children: "As Scrum Master for Fleet Software team: designed and enforced an agile system to bring structure to a  disorganized team. Implemented 2-week sprints, with regular agile meetings, resulting in improved output,  and vastly improved targeting of priorities by enforcing a structure around requirements-gathering and  problem definition from stakeholders." }), (0, ue.jsx)("li", { children: "As SW Engineer, built python backend services in support of web user interfaces, allowing tracking of a  meta-contextual state across system components and tracking/controlling the data driving the user  experience workflow throughout and across all user levels/types." })] }) })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Software Engineer, Software Engineer II - Bio-Rad, Boston MA" }), (0, ue.jsx)("span", { children: "2014 \u2014 2017" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "As Project Manager for the Customer User Interface: managed coordination between manufacturing,  marketing, biology, and software departments, along with an external UX contracting firm, to produce a  touch-screen user interface for the MonoRAyL system." }), (0, ue.jsx)("li", { children: "As Lead Developer for the Customer User Interface: produced a touch-screen web app based around a  Python web server, responsible for guiding the user through the steps of an experiment, while also managing  the hardware interaction, data access, user management, and software/firmware updates." }), (0, ue.jsx)("li", { children: "As Lead Developer for the Internal Development User Interface: produced a complex, robust one-page app  providing control over all aspects of the complex biomedical microfluidic device." }), (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Provided controls and status readouts for over 40 physical sensors and interfaces, including: electrodes,  cameras, stepper motors, thermal plates, pressure pumps/valves, lasers, and LEDs" }), (0, ue.jsx)("li", { children: "Provided sub-tools for manufacturing and software teams allowed management of all running sub processes and internal flags for the system as well as interactive tools for running end-of-line testing and  managing machine configurations." }), (0, ue.jsx)("li", { children: "Developed and maintained tools and APIs for inter-process communication, database management and interaction, unit testing, asynchronous process coordination, and hardware interactions." })] })] })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Co-Founder/Lead Developer - Nerd Pile Gaming, Boston, MA" }), (0, ue.jsx)("span", { children: "2013 \u2014 2016" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsxs)("li", { children: ["For the studio\u2019s first iOS/Android release, ", (0, ue.jsx)("em", { children: "Farmageddon" })] }), (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Lead Developer, implementing core gameplay APIs in Lua using CoronaSDK." }), (0, ue.jsx)("li", { children: "Lead Sound Engineer, producing sound effects, voice overs and seven music compositions." })] }), (0, ue.jsxs)("li", { children: ["Post-", (0, ue.jsx)("em", { children: "Farmageddon" })] }), (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Lead Developer for further projects in Unity" }), (0, ue.jsx)("li", { children: "Developed 2D and 3D interfaces for a variety of puzzle games" }), (0, ue.jsx)("li", { children: "Lead Sound Engineer, four music compositions for PuzzlePlanets" })] })] })] })] })] })] });
var eO = j4;
var nO = n(fn());
var P4 = { [Sn.about]: P_, [Sn.blog]: H_, [Sn.contact]: F_, [Sn.portfolio]: K_, [Sn.resume]: eO };
var H4 = ({ activePage: n2 }) => {
  let r = P4[n2];
  return (0, nO.jsx)(r, {});
};
var tO = H4;
var Au = n(fn());
function V4() {
  let n2 = (0, import_react_router_dom2.useLocation)().pathname.slice(1), [r, o] = Yb.default.useState(n2 ? Sn[n2] : Sn.about);
  return Yb.default.useEffect(() => {
    o(Sn[n2]);
  }, [n2, o]), (0, Au.jsxs)("main", { children: [(0, Au.jsx)(A_, {}), (0, Au.jsxs)("div", { className: "main-content", children: [(0, Au.jsx)(j_, { activePage: r, setActivePage: o }), (0, Au.jsx)(tO, { activePage: r })] })] });
}
var rO = V4;
var ph = n(fn());
var Q4 = iO.default.createRoot(document.getElementById("root"));
Q4.render((0, ph.jsx)(aO.default.StrictMode, { children: (0, ph.jsx)(import_react_router_dom.BrowserRouter, { children: (0, ph.jsx)(rO, {}) }) }));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@muselesscreator/strict-dict/dist/esm/index.js:
  (*! Bundled license information:
  
  react/cjs/react.production.min.js:
    (**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)
  
  react/cjs/react.development.js:
    (**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)
  *)
*/
