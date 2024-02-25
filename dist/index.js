"use strict";

// dist/index.js
var Mz = Object.create;
var nE = Object.defineProperty;
var Az = Object.getOwnPropertyDescriptor;
var zz = Object.getOwnPropertyNames;
var jz = Object.getPrototypeOf;
var Pz = Object.prototype.hasOwnProperty;
var yn = (n, r) => () => (r || n((r = { exports: {} }).exports, r), r.exports);
var Hz = (n, r, o, u) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let c of zz(r))
      !Pz.call(n, c) && c !== o && nE(n, c, { get: () => r[c], enumerable: !(u = Az(r, c)) || u.enumerable });
  return n;
};
var yt = (n, r, o) => (o = n != null ? Mz(jz(n)) : {}, Hz(r || !n || !n.__esModule ? nE(o, "default", { value: n, enumerable: true }) : o, n));
var pE = yn((ut) => {
  "use strict";
  var Xf = Symbol.for("react.element"), Fz = Symbol.for("react.portal"), Vz = Symbol.for("react.fragment"), Yz = Symbol.for("react.strict_mode"), Qz = Symbol.for("react.profiler"), Wz = Symbol.for("react.provider"), Bz = Symbol.for("react.context"), Xz = Symbol.for("react.forward_ref"), Jz = Symbol.for("react.suspense"), Gz = Symbol.for("react.memo"), qz = Symbol.for("react.lazy"), rE = Symbol.iterator;
  function Kz(n) {
    return n === null || typeof n != "object" ? null : (n = rE && n[rE] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oE = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, lE = Object.assign, uE = {};
  function js(n, r, o) {
    this.props = n, this.context = r, this.refs = uE, this.updater = o || oE;
  }
  js.prototype.isReactComponent = {};
  js.prototype.setState = function(n, r) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, r, "setState");
  };
  js.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function sE() {
  }
  sE.prototype = js.prototype;
  function wS(n, r, o) {
    this.props = n, this.context = r, this.refs = uE, this.updater = o || oE;
  }
  var xS = wS.prototype = new sE();
  xS.constructor = wS;
  lE(xS, js.prototype);
  xS.isPureReactComponent = true;
  var aE = Array.isArray, cE = Object.prototype.hasOwnProperty, DS = { current: null }, fE = { key: true, ref: true, __self: true, __source: true };
  function dE(n, r, o) {
    var u, c = {}, p = null, d = null;
    if (r != null)
      for (u in r.ref !== void 0 && (d = r.ref), r.key !== void 0 && (p = "" + r.key), r)
        cE.call(r, u) && !fE.hasOwnProperty(u) && (c[u] = r[u]);
    var b = arguments.length - 2;
    if (b === 1)
      c.children = o;
    else if (1 < b) {
      for (var x = Array(b), T = 0; T < b; T++)
        x[T] = arguments[T + 2];
      c.children = x;
    }
    if (n && n.defaultProps)
      for (u in b = n.defaultProps, b)
        c[u] === void 0 && (c[u] = b[u]);
    return { $$typeof: Xf, type: n, key: p, ref: d, props: c, _owner: DS.current };
  }
  function Zz(n, r) {
    return { $$typeof: Xf, type: n.type, key: r, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function CS(n) {
    return typeof n == "object" && n !== null && n.$$typeof === Xf;
  }
  function ej(n) {
    var r = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(o) {
      return r[o];
    });
  }
  var iE = /\/+/g;
  function bS(n, r) {
    return typeof n == "object" && n !== null && n.key != null ? ej("" + n.key) : r.toString(36);
  }
  function Vv(n, r, o, u, c) {
    var p = typeof n;
    (p === "undefined" || p === "boolean") && (n = null);
    var d = false;
    if (n === null)
      d = true;
    else
      switch (p) {
        case "string":
        case "number":
          d = true;
          break;
        case "object":
          switch (n.$$typeof) {
            case Xf:
            case Fz:
              d = true;
          }
      }
    if (d)
      return d = n, c = c(d), n = u === "" ? "." + bS(d, 0) : u, aE(c) ? (o = "", n != null && (o = n.replace(iE, "$&/") + "/"), Vv(c, r, o, "", function(T) {
        return T;
      })) : c != null && (CS(c) && (c = Zz(c, o + (!c.key || d && d.key === c.key ? "" : ("" + c.key).replace(iE, "$&/") + "/") + n)), r.push(c)), 1;
    if (d = 0, u = u === "" ? "." : u + ":", aE(n))
      for (var b = 0; b < n.length; b++) {
        p = n[b];
        var x = u + bS(p, b);
        d += Vv(p, r, o, x, c);
      }
    else if (x = Kz(n), typeof x == "function")
      for (n = x.call(n), b = 0; !(p = n.next()).done; )
        p = p.value, x = u + bS(p, b++), d += Vv(p, r, o, x, c);
    else if (p === "object")
      throw r = String(n), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
    return d;
  }
  function Fv(n, r, o) {
    if (n == null)
      return n;
    var u = [], c = 0;
    return Vv(n, u, "", "", function(p) {
      return r.call(o, p, c++);
    }), u;
  }
  function tj(n) {
    if (n._status === -1) {
      var r = n._result;
      r = r(), r.then(function(o) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = o);
      }, function(o) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = o);
      }), n._status === -1 && (n._status = 0, n._result = r);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var Lr = { current: null }, Yv = { transition: null }, nj = { ReactCurrentDispatcher: Lr, ReactCurrentBatchConfig: Yv, ReactCurrentOwner: DS };
  ut.Children = { map: Fv, forEach: function(n, r, o) {
    Fv(n, function() {
      r.apply(this, arguments);
    }, o);
  }, count: function(n) {
    var r = 0;
    return Fv(n, function() {
      r++;
    }), r;
  }, toArray: function(n) {
    return Fv(n, function(r) {
      return r;
    }) || [];
  }, only: function(n) {
    if (!CS(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } };
  ut.Component = js;
  ut.Fragment = Vz;
  ut.Profiler = Qz;
  ut.PureComponent = wS;
  ut.StrictMode = Yz;
  ut.Suspense = Jz;
  ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nj;
  ut.cloneElement = function(n, r, o) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var u = lE({}, n.props), c = n.key, p = n.ref, d = n._owner;
    if (r != null) {
      if (r.ref !== void 0 && (p = r.ref, d = DS.current), r.key !== void 0 && (c = "" + r.key), n.type && n.type.defaultProps)
        var b = n.type.defaultProps;
      for (x in r)
        cE.call(r, x) && !fE.hasOwnProperty(x) && (u[x] = r[x] === void 0 && b !== void 0 ? b[x] : r[x]);
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
    return { $$typeof: Xf, type: n.type, key: c, ref: p, props: u, _owner: d };
  };
  ut.createContext = function(n) {
    return n = { $$typeof: Bz, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: Wz, _context: n }, n.Consumer = n;
  };
  ut.createElement = dE;
  ut.createFactory = function(n) {
    var r = dE.bind(null, n);
    return r.type = n, r;
  };
  ut.createRef = function() {
    return { current: null };
  };
  ut.forwardRef = function(n) {
    return { $$typeof: Xz, render: n };
  };
  ut.isValidElement = CS;
  ut.lazy = function(n) {
    return { $$typeof: qz, _payload: { _status: -1, _result: n }, _init: tj };
  };
  ut.memo = function(n, r) {
    return { $$typeof: Gz, type: n, compare: r === void 0 ? null : r };
  };
  ut.startTransition = function(n) {
    var r = Yv.transition;
    Yv.transition = {};
    try {
      n();
    } finally {
      Yv.transition = r;
    }
  };
  ut.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  ut.useCallback = function(n, r) {
    return Lr.current.useCallback(n, r);
  };
  ut.useContext = function(n) {
    return Lr.current.useContext(n);
  };
  ut.useDebugValue = function() {
  };
  ut.useDeferredValue = function(n) {
    return Lr.current.useDeferredValue(n);
  };
  ut.useEffect = function(n, r) {
    return Lr.current.useEffect(n, r);
  };
  ut.useId = function() {
    return Lr.current.useId();
  };
  ut.useImperativeHandle = function(n, r, o) {
    return Lr.current.useImperativeHandle(n, r, o);
  };
  ut.useInsertionEffect = function(n, r) {
    return Lr.current.useInsertionEffect(n, r);
  };
  ut.useLayoutEffect = function(n, r) {
    return Lr.current.useLayoutEffect(n, r);
  };
  ut.useMemo = function(n, r) {
    return Lr.current.useMemo(n, r);
  };
  ut.useReducer = function(n, r, o) {
    return Lr.current.useReducer(n, r, o);
  };
  ut.useRef = function(n) {
    return Lr.current.useRef(n);
  };
  ut.useState = function(n) {
    return Lr.current.useState(n);
  };
  ut.useSyncExternalStore = function(n, r, o) {
    return Lr.current.useSyncExternalStore(n, r, o);
  };
  ut.useTransition = function() {
    return Lr.current.useTransition();
  };
  ut.version = "18.2.0";
});
var vE = yn((st, Qv) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = "18.2.0", r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), J = Symbol.iterator, ie = "@@iterator";
    function Ge(y) {
      if (y === null || typeof y != "object")
        return null;
      var R = J && y[J] || y[ie];
      return typeof R == "function" ? R : null;
    }
    var N = { current: null }, C = { transition: null }, k = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false }, Q = { current: null }, X = {}, re = null;
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
    var he = false, Me = false, Re = false, dt = false, gt = false, Te = { ReactCurrentDispatcher: N, ReactCurrentBatchConfig: C, ReactCurrentOwner: Q };
    Te.ReactDebugCurrentFrame = X, Te.ReactCurrentActQueue = k;
    function wt(y) {
      {
        for (var R = arguments.length, v = new Array(R > 1 ? R - 1 : 0), g = 1; g < R; g++)
          v[g - 1] = arguments[g];
        Lt("warn", y, v);
      }
    }
    function be(y) {
      {
        for (var R = arguments.length, v = new Array(R > 1 ? R - 1 : 0), g = 1; g < R; g++)
          v[g - 1] = arguments[g];
        Lt("error", y, v);
      }
    }
    function Lt(y, R, v) {
      {
        var g = Te.ReactDebugCurrentFrame, D = g.getStackAddendum();
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
        var v = y.constructor, g = v && (v.displayName || v.name) || "ReactClass", D = g + "." + R;
        if (Pe[D])
          return;
        be("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, g), Pe[D] = true;
      }
    }
    var bn = { isMounted: function(y) {
      return false;
    }, enqueueForceUpdate: function(y, R, v) {
      at(y, "forceUpdate");
    }, enqueueReplaceState: function(y, R, v, g) {
      at(y, "replaceState");
    }, enqueueSetState: function(y, R, v, g) {
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
          wt("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
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
      var g = y.displayName;
      if (g)
        return g;
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
            var g = y.displayName || null;
            return g !== null ? g : nn(y.type) || "Memo";
          case j: {
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
    var Zr = function(y, R, v, g, D, L, A) {
      var te = { $$typeof: r, type: y, key: R, ref: v, props: A, _owner: L };
      return te._store = {}, Object.defineProperty(te._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(te, "_self", { configurable: false, enumerable: false, writable: false, value: g }), Object.defineProperty(te, "_source", { configurable: false, enumerable: false, writable: false, value: D }), Object.freeze && (Object.freeze(te.props), Object.freeze(te)), te;
    };
    function Va(y, R, v) {
      var g, D = {}, L = null, A = null, te = null, K = null;
      if (R != null) {
        xr(R) && (A = R.ref, jr(R)), Dn(R) && (Bt(R.key), L = "" + R.key), te = R.__self === void 0 ? null : R.__self, K = R.__source === void 0 ? null : R.__source;
        for (g in R)
          Mn.call(R, g) && !Yn.hasOwnProperty(g) && (D[g] = R[g]);
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
        for (g in Oe)
          D[g] === void 0 && (D[g] = Oe[g]);
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
      var g, D = Zt({}, y.props), L = y.key, A = y.ref, te = y._self, K = y._source, se = y._owner;
      if (R != null) {
        xr(R) && (A = R.ref, se = Q.current), Dn(R) && (Bt(R.key), L = "" + R.key);
        var we;
        y.type && y.type.defaultProps && (we = y.type.defaultProps);
        for (g in R)
          Mn.call(R, g) && !Yn.hasOwnProperty(g) && (R[g] === void 0 && we !== void 0 ? D[g] = we[g] : D[g] = R[g]);
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
      var R = /[=:]/g, v = { "=": "=0", ":": "=2" }, g = y.replace(R, function(D) {
        return v[D];
      });
      return "$" + g;
    }
    var Qt = false, ir = /\/+/g;
    function Dt(y) {
      return y.replace(ir, "$&/");
    }
    function Qn(y, R) {
      return typeof y == "object" && y !== null && y.key != null ? (Bt(y.key), on("" + y.key)) : R.toString(36);
    }
    function Ct(y, R, v, g, D) {
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
        var te = y, K = D(te), se = g === "" ? pt + Qn(te, 0) : g;
        if ($n(K)) {
          var we = "";
          se != null && (we = Dt(se) + "/"), Ct(K, R, we, "", function(Yl) {
            return Yl;
          });
        } else
          K != null && (Ae(K) && (K.key && (!te || te.key !== K.key) && Bt(K.key), K = oe(K, v + (K.key && (!te || te.key !== K.key) ? Dt("" + K.key) + "/" : "") + se)), R.push(K));
        return 1;
      }
      var Ee, Oe, Ue = 0, Ve = g === "" ? pt : g + vt;
      if ($n(y))
        for (var $t = 0; $t < y.length; $t++)
          Ee = y[$t], Oe = Ve + Qn(Ee, $t), Ue += Ct(Ee, R, v, Oe, D);
      else {
        var tt = Ge(y);
        if (typeof tt == "function") {
          var Ga = y;
          tt === Ga.entries && (Qt || wt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = true);
          for (var Vo = tt.call(Ga), Yo, gc = 0; !(Yo = Vo.next()).done; )
            Ee = Yo.value, Oe = Ve + Qn(Ee, gc++), Ue += Ct(Ee, R, v, Oe, D);
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
      var g = [], D = 0;
      return Ct(y, g, "", "", function(L) {
        return R.call(v, L, D++);
      }), g;
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
      var v = false, g = false, D = false;
      {
        var L = { $$typeof: b, _context: R };
        Object.defineProperties(L, { Provider: { get: function() {
          return g || (g = true, be("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
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
          D || (wt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", A), D = true);
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
          var g = y;
          g._status = Ya, g._result = v;
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
      var R = { _status: ta, _result: y }, v = { $$typeof: j, _payload: R, _init: Qa };
      {
        var g, D;
        Object.defineProperties(v, { defaultProps: { configurable: true, get: function() {
          return g;
        }, set: function(L) {
          be("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), g = L, Object.defineProperty(v, "defaultProps", { enumerable: true });
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
        }, set: function(g) {
          v = g, !y.name && !y.displayName && (y.displayName = g);
        } });
      }
      return R;
    }
    var ra;
    ra = Symbol.for("react.module.reference");
    function bi(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === u || y === p || gt || y === c || y === T || y === V || dt || y === H || he || Me || Re || typeof y == "object" && y !== null && (y.$$typeof === j || y.$$typeof === U || y.$$typeof === d || y.$$typeof === b || y.$$typeof === x || y.$$typeof === ra || y.getModuleId !== void 0));
    }
    function E(y, R) {
      bi(y) || be("memo: The first argument must be a component. Instead received: %s", y === null ? "null" : typeof y);
      var v = { $$typeof: U, type: y, compare: R === void 0 ? null : R };
      {
        var g;
        Object.defineProperty(v, "displayName", { enumerable: false, configurable: true, get: function() {
          return g;
        }, set: function(D) {
          g = D, !y.name && !y.displayName && (y.displayName = D);
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
      var g = W();
      return g.useReducer(y, R, v);
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
      var g = W();
      return g.useImperativeHandle(y, R, v);
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
    function yc() {
      var y = W();
      return y.useId();
    }
    function Wa(y, R, v) {
      var g = W();
      return g.useSyncExternalStore(y, R, v);
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
    function ju() {
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
            var g = D.stack.trim().match(/\n( *(at )?)/);
            Xi = g && g[1] || "";
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
      var g;
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
              g = Ve;
            }
            Reflect.construct(y, [], A);
          } else {
            try {
              A.call();
            } catch (Ve) {
              g = Ve;
            }
            y.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            g = Ve;
          }
          y();
        }
      } catch (Ve) {
        if (Ve && g && typeof Ve.stack == "string") {
          for (var te = Ve.stack.split(`
`), K = g.stack.split(`
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
        lr = false, Al.current = L, ju(), Error.prepareStackTrace = D;
      }
      var Oe = y ? y.displayName || y.name : "", Ue = Oe ? Ta(Oe) : "";
      return typeof y == "function" && aa.set(y, Ue), Ue;
    }
    function zl(y, R, v) {
      return Ji(y, false);
    }
    function Pu(y) {
      var R = y.prototype;
      return !!(R && R.isReactComponent);
    }
    function Di(y, R, v) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return Ji(y, Pu(y));
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
          case j: {
            var g = y, D = g._payload, L = g._init;
            try {
              return Di(L(D), R, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Hu = {}, Xa = Te.ReactDebugCurrentFrame;
    function Gi(y) {
      if (y) {
        var R = y._owner, v = Di(y.type, y._source, R ? R.type : null);
        Xa.setExtraStackFrame(v);
      } else
        Xa.setExtraStackFrame(null);
    }
    function jl(y, R, v, g, D) {
      {
        var L = Function.call.bind(Mn);
        for (var A in y)
          if (L(y, A)) {
            var te = void 0;
            try {
              if (typeof y[A] != "function") {
                var K = Error((g || "React class") + ": " + v + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              te = y[A](R, A, g, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              te = se;
            }
            te && !(te instanceof Error) && (Gi(D), be("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", v, A, typeof te), Gi(null)), te instanceof Error && !(te.message in Hu) && (Hu[te.message] = true, Gi(D), be("Failed %s type: %s", v, te.message), Gi(null));
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
    function Fu(y) {
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
        var v = Fu(R);
        if (!ze[v]) {
          ze[v] = true;
          var g = "";
          y && y._owner && y._owner !== Q.current && (g = " It was passed a child from " + nn(y._owner.type) + "."), ia(y), be('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, g), ia(null);
        }
      }
    }
    function Ci(y, R) {
      if (typeof y == "object") {
        if ($n(y))
          for (var v = 0; v < y.length; v++) {
            var g = y[v];
            Ae(g) && Cn(g, R);
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
          var g = nn(R);
          jl(v, y.props, "prop", g, y);
        } else if (R.PropTypes !== void 0 && !jo) {
          jo = true;
          var D = nn(R);
          be("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && be("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vu(y) {
      {
        for (var R = Object.keys(y.props), v = 0; v < R.length; v++) {
          var g = R[v];
          if (g !== "children" && g !== "key") {
            ia(y), be("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ia(null);
            break;
          }
        }
        y.ref !== null && (ia(y), be("Invalid attribute `ref` supplied to `React.Fragment`."), ia(null));
      }
    }
    function un(y, R, v) {
      var g = bi(y);
      if (!g) {
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
      if (g)
        for (var K = 2; K < arguments.length; K++)
          Ci(arguments[K], y);
      return y === u ? Vu(te) : Ja(te), te;
    }
    var zt = false;
    function Yu(y) {
      var R = un.bind(null, y);
      return R.type = y, zt || (zt = true, wt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", { enumerable: false, get: function() {
        return wt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: y }), y;
      } }), R;
    }
    function Cr(y, R, v) {
      for (var g = xe.apply(this, arguments), D = 2; D < arguments.length; D++)
        Ci(arguments[D], g.type);
      return Ja(g), g;
    }
    function ur(y, R) {
      var v = C.transition;
      C.transition = {};
      var g = C.transition;
      C.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        y();
      } finally {
        if (C.transition = v, v === null && g._updatedFibers) {
          var D = g._updatedFibers.size;
          D > 10 && wt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g._updatedFibers.clear();
        }
      }
    }
    var oa = false, Po = null;
    function Ho(y) {
      if (Po === null)
        try {
          var R = ("require" + Math.random()).slice(0, 7), v = Qv && Qv[R];
          Po = v.call(Qv, "timers").setImmediate;
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
        Pr++, k.current === null && (k.current = []);
        var v = k.isBatchingLegacy, g;
        try {
          if (k.isBatchingLegacy = true, g = y(), !v && k.didScheduleLegacyUpdate) {
            var D = k.current;
            D !== null && (k.didScheduleLegacyUpdate = false, Ei(D));
          }
        } catch (Oe) {
          throw qi(R), Oe;
        } finally {
          k.isBatchingLegacy = v;
        }
        if (g !== null && typeof g == "object" && typeof g.then == "function") {
          var L = g, A = false, te = { then: function(Oe, Ue) {
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
          var K = g;
          if (qi(R), Pr === 0) {
            var se = k.current;
            se !== null && (Ei(se), k.current = null);
            var we = { then: function(Oe, Ue) {
              k.current === null ? (k.current = [], Vl(K, Oe, Ue)) : Oe(K);
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
        var g = k.current;
        if (g !== null)
          try {
            Ei(g), Ho(function() {
              g.length === 0 ? (k.current = null, R(y)) : Vl(y, R, v);
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
        } catch (g) {
          throw y = y.slice(R + 1), g;
        } finally {
          la = false;
        }
      }
    }
    var Ti = un, Fo = Cr, Qu = Yu, Wu = { map: Rt, forEach: ea, count: Da, toArray: Bi, only: No };
    st.Children = Wu, st.Component = q, st.Fragment = u, st.Profiler = p, st.PureComponent = ft, st.StrictMode = c, st.Suspense = T, st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, st.cloneElement = Fo, st.createContext = $l, st.createElement = Ti, st.createFactory = Qu, st.createRef = Be, st.forwardRef = na, st.isValidElement = Ae, st.lazy = Ra, st.memo = E, st.startTransition = ur, st.unstable_act = Ri, st.useCallback = Ut, st.useContext = ae, st.useDebugValue = Ea, st.useDeferredValue = or, st.useEffect = He, st.useId = yc, st.useImperativeHandle = An, st.useInsertionEffect = Ce, st.useLayoutEffect = ln, st.useMemo = It, st.useReducer = Xe, st.useRef = it, st.useState = ve, st.useSyncExternalStore = Wa, st.useTransition = Lo, st.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var Ur = yn((tP, RS) => {
  "use strict";
  process.env.NODE_ENV === "production" ? RS.exports = pE() : RS.exports = vE();
});
var CE = yn((Pt) => {
  "use strict";
  function _S(n, r) {
    var o = n.length;
    n.push(r);
    e:
      for (; 0 < o; ) {
        var u = o - 1 >>> 1, c = n[u];
        if (0 < Wv(c, r))
          n[u] = r, n[o] = c, o = u;
        else
          break e;
      }
  }
  function fi(n) {
    return n.length === 0 ? null : n[0];
  }
  function Xv(n) {
    if (n.length === 0)
      return null;
    var r = n[0], o = n.pop();
    if (o !== r) {
      n[0] = o;
      e:
        for (var u = 0, c = n.length, p = c >>> 1; u < p; ) {
          var d = 2 * (u + 1) - 1, b = n[d], x = d + 1, T = n[x];
          if (0 > Wv(b, o))
            x < c && 0 > Wv(T, b) ? (n[u] = T, n[x] = o, u = x) : (n[u] = b, n[d] = o, u = d);
          else if (x < c && 0 > Wv(T, o))
            n[u] = T, n[x] = o, u = x;
          else
            break e;
        }
    }
    return r;
  }
  function Wv(n, r) {
    var o = n.sortIndex - r.sortIndex;
    return o !== 0 ? o : n.id - r.id;
  }
  typeof performance == "object" && typeof performance.now == "function" ? (mE = performance, Pt.unstable_now = function() {
    return mE.now();
  }) : (ES = Date, hE = ES.now(), Pt.unstable_now = function() {
    return ES.now() - hE;
  });
  var mE, ES, hE, Hi = [], vl = [], rj = 1, Ma = null, vr = 3, Jv = false, wu = false, Gf = false, SE = typeof setTimeout == "function" ? setTimeout : null, bE = typeof clearTimeout == "function" ? clearTimeout : null, yE = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function OS(n) {
    for (var r = fi(vl); r !== null; ) {
      if (r.callback === null)
        Xv(vl);
      else if (r.startTime <= n)
        Xv(vl), r.sortIndex = r.expirationTime, _S(Hi, r);
      else
        break;
      r = fi(vl);
    }
  }
  function NS(n) {
    if (Gf = false, OS(n), !wu)
      if (fi(Hi) !== null)
        wu = true, US(LS);
      else {
        var r = fi(vl);
        r !== null && IS(NS, r.startTime - n);
      }
  }
  function LS(n, r) {
    wu = false, Gf && (Gf = false, bE(qf), qf = -1), Jv = true;
    var o = vr;
    try {
      for (OS(r), Ma = fi(Hi); Ma !== null && (!(Ma.expirationTime > r) || n && !DE()); ) {
        var u = Ma.callback;
        if (typeof u == "function") {
          Ma.callback = null, vr = Ma.priorityLevel;
          var c = u(Ma.expirationTime <= r);
          r = Pt.unstable_now(), typeof c == "function" ? Ma.callback = c : Ma === fi(Hi) && Xv(Hi), OS(r);
        } else
          Xv(Hi);
        Ma = fi(Hi);
      }
      if (Ma !== null)
        var p = true;
      else {
        var d = fi(vl);
        d !== null && IS(NS, d.startTime - r), p = false;
      }
      return p;
    } finally {
      Ma = null, vr = o, Jv = false;
    }
  }
  var Gv = false, Bv = null, qf = -1, wE = 5, xE = -1;
  function DE() {
    return !(Pt.unstable_now() - xE < wE);
  }
  function TS() {
    if (Bv !== null) {
      var n = Pt.unstable_now();
      xE = n;
      var r = true;
      try {
        r = Bv(true, n);
      } finally {
        r ? Jf() : (Gv = false, Bv = null);
      }
    } else
      Gv = false;
  }
  var Jf;
  typeof yE == "function" ? Jf = function() {
    yE(TS);
  } : typeof MessageChannel < "u" ? (kS = new MessageChannel(), gE = kS.port2, kS.port1.onmessage = TS, Jf = function() {
    gE.postMessage(null);
  }) : Jf = function() {
    SE(TS, 0);
  };
  var kS, gE;
  function US(n) {
    Bv = n, Gv || (Gv = true, Jf());
  }
  function IS(n, r) {
    qf = SE(function() {
      n(Pt.unstable_now());
    }, r);
  }
  Pt.unstable_IdlePriority = 5;
  Pt.unstable_ImmediatePriority = 1;
  Pt.unstable_LowPriority = 4;
  Pt.unstable_NormalPriority = 3;
  Pt.unstable_Profiling = null;
  Pt.unstable_UserBlockingPriority = 2;
  Pt.unstable_cancelCallback = function(n) {
    n.callback = null;
  };
  Pt.unstable_continueExecution = function() {
    wu || Jv || (wu = true, US(LS));
  };
  Pt.unstable_forceFrameRate = function(n) {
    0 > n || 125 < n ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wE = 0 < n ? Math.floor(1e3 / n) : 5;
  };
  Pt.unstable_getCurrentPriorityLevel = function() {
    return vr;
  };
  Pt.unstable_getFirstCallbackNode = function() {
    return fi(Hi);
  };
  Pt.unstable_next = function(n) {
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
      return n();
    } finally {
      vr = o;
    }
  };
  Pt.unstable_pauseExecution = function() {
  };
  Pt.unstable_requestPaint = function() {
  };
  Pt.unstable_runWithPriority = function(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        n = 3;
    }
    var o = vr;
    vr = n;
    try {
      return r();
    } finally {
      vr = o;
    }
  };
  Pt.unstable_scheduleCallback = function(n, r, o) {
    var u = Pt.unstable_now();
    switch (typeof o == "object" && o !== null ? (o = o.delay, o = typeof o == "number" && 0 < o ? u + o : u) : o = u, n) {
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
    return c = o + c, n = { id: rj++, callback: r, priorityLevel: n, startTime: o, expirationTime: c, sortIndex: -1 }, o > u ? (n.sortIndex = o, _S(vl, n), fi(Hi) === null && n === fi(vl) && (Gf ? (bE(qf), qf = -1) : Gf = true, IS(NS, o - u))) : (n.sortIndex = c, _S(Hi, n), wu || Jv || (wu = true, US(LS))), n;
  };
  Pt.unstable_shouldYield = DE;
  Pt.unstable_wrapCallback = function(n) {
    var r = vr;
    return function() {
      var o = vr;
      vr = r;
      try {
        return n.apply(this, arguments);
      } finally {
        vr = o;
      }
    };
  };
});
var RE = yn((At) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = false, r = false, o = 5;
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
    var T = 1, V = 2, U = 3, j = 4, H = 5;
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
    var k = 1073741823, Q = -1, X = 250, re = 5e3, ee = 1e4, he = k, Me = [], Re = [], dt = 1, gt = null, Te = U, wt = false, be = false, Lt = false, Pe = typeof setTimeout == "function" ? setTimeout : null, at = typeof clearTimeout == "function" ? clearTimeout : null, bn = typeof setImmediate < "u" ? setImmediate : null, Zt = typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
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
      be = false, Lt && (Lt = false, jr()), wt = true;
      var Ae = Te;
      try {
        if (r)
          try {
            return Qe(oe, xe);
          } catch (vt) {
            if (gt !== null) {
              var pt = At.unstable_now();
              gt.isQueued = false;
            }
            throw vt;
          }
        else
          return Qe(oe, xe);
      } finally {
        gt = null, Te = Ae, wt = false;
      }
    }
    function Qe(oe, xe) {
      var Ae = xe;
      for (M(Ae), gt = c(Me); gt !== null && !n && !(gt.expirationTime > Ae && (!oe || Mn())); ) {
        var pt = gt.callback;
        if (typeof pt == "function") {
          gt.callback = null, Te = gt.priorityLevel;
          var vt = gt.expirationTime <= Ae, on = pt(vt);
          Ae = At.unstable_now(), typeof on == "function" ? gt.callback = on : gt === c(Me) && p(Me), M(Ae);
        } else
          p(Me);
        gt = c(Me);
      }
      if (gt !== null)
        return true;
      var Qt = c(Re);
      return Qt !== null && Xt(q, Qt.startTime - Ae), false;
    }
    function We(oe, xe) {
      switch (oe) {
        case T:
        case V:
        case U:
        case j:
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
        case j:
          Qt = ee;
          break;
        case U:
        default:
          Qt = re;
          break;
      }
      var ir = vt + Qt, Dt = { id: dt++, callback: xe, priorityLevel: oe, startTime: vt, expirationTime: ir, sortIndex: -1 };
      return vt > pt ? (Dt.sortIndex = vt, u(Re, Dt), c(Me) === null && Dt === c(Re) && (Lt ? jr() : Lt = true, Xt(q, vt - pt))) : (Dt.sortIndex = ir, u(Me, Dt), !be && !wt && (be = true, Dr(Le))), Dt;
    }
    function Be() {
    }
    function Ot() {
      !be && !wt && (be = true, Dr(Le));
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
    At.unstable_IdlePriority = H, At.unstable_ImmediatePriority = T, At.unstable_LowPriority = j, At.unstable_NormalPriority = U, At.unstable_Profiling = Va, At.unstable_UserBlockingPriority = V, At.unstable_cancelCallback = br, At.unstable_continueExecution = Ot, At.unstable_forceFrameRate = zr, At.unstable_getCurrentPriorityLevel = en, At.unstable_getFirstCallbackNode = $n, At.unstable_next = ct, At.unstable_pauseExecution = Be, At.unstable_requestPaint = Zr, At.unstable_runWithPriority = We, At.unstable_scheduleCallback = et, At.unstable_shouldYield = Mn, At.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var MS = yn((aP, $S) => {
  "use strict";
  process.env.NODE_ENV === "production" ? $S.exports = CE() : $S.exports = RE();
});
var N_ = yn((wa) => {
  "use strict";
  var LT = Ur(), Sa = MS();
  function ne(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var UT = /* @__PURE__ */ new Set(), Sd = {};
  function Iu(n, r) {
    oc(n, r), oc(n + "Capture", r);
  }
  function oc(n, r) {
    for (Sd[n] = r, n = 0; n < r.length; n++)
      UT.add(r[n]);
  }
  var Eo = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), i1 = Object.prototype.hasOwnProperty, aj = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, EE = {}, TE = {};
  function ij(n) {
    return i1.call(TE, n) ? true : i1.call(EE, n) ? false : aj.test(n) ? TE[n] = true : (EE[n] = true, false);
  }
  function oj(n, r, o, u) {
    if (o !== null && o.type === 0)
      return false;
    switch (typeof r) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return u ? false : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return false;
    }
  }
  function lj(n, r, o, u) {
    if (r === null || typeof r > "u" || oj(n, r, o, u))
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
  function Mr(n, r, o, u, c, p, d) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = d;
  }
  var ar = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ar[n] = new Mr(n, 0, false, n, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ar[r] = new Mr(r, 1, false, n[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ar[n] = new Mr(n, 2, false, n.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ar[n] = new Mr(n, 2, false, n, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ar[n] = new Mr(n, 3, false, n.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ar[n] = new Mr(n, 3, true, n, null, false, false);
  });
  ["capture", "download"].forEach(function(n) {
    ar[n] = new Mr(n, 4, false, n, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(n) {
    ar[n] = new Mr(n, 6, false, n, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(n) {
    ar[n] = new Mr(n, 5, false, n.toLowerCase(), null, false, false);
  });
  var q1 = /[\-:]([a-z])/g;
  function K1(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(q1, K1);
    ar[r] = new Mr(r, 1, false, n, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(q1, K1);
    ar[r] = new Mr(r, 1, false, n, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(q1, K1);
    ar[r] = new Mr(r, 1, false, n, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(n) {
    ar[n] = new Mr(n, 1, false, n.toLowerCase(), null, false, false);
  });
  ar.xlinkHref = new Mr("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(n) {
    ar[n] = new Mr(n, 1, false, n.toLowerCase(), null, true, true);
  });
  function Z1(n, r, o, u) {
    var c = ar.hasOwnProperty(r) ? ar[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (lj(r, o, c, u) && (o = null), u || c === null ? ij(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? false : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === true ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var Oo = LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qv = Symbol.for("react.element"), Fs = Symbol.for("react.portal"), Vs = Symbol.for("react.fragment"), eb = Symbol.for("react.strict_mode"), o1 = Symbol.for("react.profiler"), IT = Symbol.for("react.provider"), $T = Symbol.for("react.context"), tb = Symbol.for("react.forward_ref"), l1 = Symbol.for("react.suspense"), u1 = Symbol.for("react.suspense_list"), nb = Symbol.for("react.memo"), hl = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var MT = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var kE = Symbol.iterator;
  function Kf(n) {
    return n === null || typeof n != "object" ? null : (n = kE && n[kE] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Kt = Object.assign, AS;
  function od(n) {
    if (AS === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        AS = r && r[1] || "";
      }
    return `
` + AS + n;
  }
  var zS = false;
  function jS(n, r) {
    if (!n || zS)
      return "";
    zS = true;
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
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (T) {
            u = T;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          u = T;
        }
        n();
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
                  return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
                }
              while (1 <= d && 0 <= b);
            break;
          }
      }
    } finally {
      zS = false, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? od(n) : "";
  }
  function uj(n) {
    switch (n.tag) {
      case 5:
        return od(n.type);
      case 16:
        return od("Lazy");
      case 13:
        return od("Suspense");
      case 19:
        return od("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = jS(n.type, false), n;
      case 11:
        return n = jS(n.type.render, false), n;
      case 1:
        return n = jS(n.type, true), n;
      default:
        return "";
    }
  }
  function s1(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Vs:
        return "Fragment";
      case Fs:
        return "Portal";
      case o1:
        return "Profiler";
      case eb:
        return "StrictMode";
      case l1:
        return "Suspense";
      case u1:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case $T:
          return (n.displayName || "Context") + ".Consumer";
        case IT:
          return (n._context.displayName || "Context") + ".Provider";
        case tb:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case nb:
          return r = n.displayName || null, r !== null ? r : s1(n.type) || "Memo";
        case hl:
          r = n._payload, n = n._init;
          try {
            return s1(n(r));
          } catch {
          }
      }
    return null;
  }
  function sj(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
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
        return s1(r);
      case 8:
        return r === eb ? "StrictMode" : "Mode";
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
  function Ol(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function AT(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function cj(n) {
    var r = AT(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, p = o.set;
      return Object.defineProperty(n, r, { configurable: true, get: function() {
        return c.call(this);
      }, set: function(d) {
        u = "" + d, p.call(this, d);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(d) {
        u = "" + d;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Kv(n) {
    n._valueTracker || (n._valueTracker = cj(n));
  }
  function zT(n) {
    if (!n)
      return false;
    var r = n._valueTracker;
    if (!r)
      return true;
    var o = r.getValue(), u = "";
    return n && (u = AT(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), true) : false;
  }
  function Em(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function c1(n, r) {
    var o = r.checked;
    return Kt({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function _E(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Ol(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function jT(n, r) {
    r = r.checked, r != null && Z1(n, "checked", r, false);
  }
  function f1(n, r) {
    jT(n, r);
    var o = Ol(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? d1(n, r.type, o) : r.hasOwnProperty("defaultValue") && d1(n, r.type, Ol(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function OE(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function d1(n, r, o) {
    (r !== "number" || Em(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var ld = Array.isArray;
  function ec(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++)
        r["$" + o[c]] = true;
      for (o = 0; o < n.length; o++)
        c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = true);
    } else {
      for (o = "" + Ol(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = true, u && (n[c].defaultSelected = true);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = true);
    }
  }
  function p1(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(ne(91));
    return Kt({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function NE(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(ne(92));
        if (ld(o)) {
          if (1 < o.length)
            throw Error(ne(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Ol(o) };
  }
  function PT(n, r) {
    var o = Ol(r.value), u = Ol(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function LE(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function HT(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function v1(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? HT(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Zv, FT = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Zv = Zv || document.createElement("div"), Zv.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Zv.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function bd(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var cd = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, fj = ["Webkit", "ms", "Moz", "O"];
  Object.keys(cd).forEach(function(n) {
    fj.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), cd[r] = cd[n];
    });
  });
  function VT(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || cd.hasOwnProperty(n) && cd[n] ? ("" + r).trim() : r + "px";
  }
  function YT(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, c = VT(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
      }
  }
  var dj = Kt({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function m1(n, r) {
    if (r) {
      if (dj[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(ne(137, n));
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
  function h1(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var y1 = null;
  function rb(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var g1 = null, tc = null, nc = null;
  function UE(n) {
    if (n = zd(n)) {
      if (typeof g1 != "function")
        throw Error(ne(280));
      var r = n.stateNode;
      r && (r = eh(r), g1(n.stateNode, n.type, r));
    }
  }
  function QT(n) {
    tc ? nc ? nc.push(n) : nc = [n] : tc = n;
  }
  function WT() {
    if (tc) {
      var n = tc, r = nc;
      if (nc = tc = null, UE(n), r)
        for (n = 0; n < r.length; n++)
          UE(r[n]);
    }
  }
  function BT(n, r) {
    return n(r);
  }
  function XT() {
  }
  var PS = false;
  function JT(n, r, o) {
    if (PS)
      return n(r, o);
    PS = true;
    try {
      return BT(n, r, o);
    } finally {
      PS = false, (tc !== null || nc !== null) && (XT(), WT());
    }
  }
  function wd(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = eh(o);
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
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = false;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(ne(231, r, typeof o));
    return o;
  }
  var S1 = false;
  if (Eo)
    try {
      Ps = {}, Object.defineProperty(Ps, "passive", { get: function() {
        S1 = true;
      } }), window.addEventListener("test", Ps, Ps), window.removeEventListener("test", Ps, Ps);
    } catch {
      S1 = false;
    }
  var Ps;
  function pj(n, r, o, u, c, p, d, b, x) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, T);
    } catch (V) {
      this.onError(V);
    }
  }
  var fd = false, Tm = null, km = false, b1 = null, vj = { onError: function(n) {
    fd = true, Tm = n;
  } };
  function mj(n, r, o, u, c, p, d, b, x) {
    fd = false, Tm = null, pj.apply(vj, arguments);
  }
  function hj(n, r, o, u, c, p, d, b, x) {
    if (mj.apply(this, arguments), fd) {
      if (fd) {
        var T = Tm;
        fd = false, Tm = null;
      } else
        throw Error(ne(198));
      km || (km = true, b1 = T);
    }
  }
  function $u(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function GT(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function IE(n) {
    if ($u(n) !== n)
      throw Error(ne(188));
  }
  function yj(n) {
    var r = n.alternate;
    if (!r) {
      if (r = $u(n), r === null)
        throw Error(ne(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
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
            return IE(c), n;
          if (p === u)
            return IE(c), r;
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
    return o.stateNode.current === o ? n : r;
  }
  function qT(n) {
    return n = yj(n), n !== null ? KT(n) : null;
  }
  function KT(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = KT(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var ZT = Sa.unstable_scheduleCallback, $E = Sa.unstable_cancelCallback, gj = Sa.unstable_shouldYield, Sj = Sa.unstable_requestPaint, cn = Sa.unstable_now, bj = Sa.unstable_getCurrentPriorityLevel, ab = Sa.unstable_ImmediatePriority, ek = Sa.unstable_UserBlockingPriority, _m = Sa.unstable_NormalPriority, wj = Sa.unstable_LowPriority, tk = Sa.unstable_IdlePriority, Gm = null, Qi = null;
  function xj(n) {
    if (Qi && typeof Qi.onCommitFiberRoot == "function")
      try {
        Qi.onCommitFiberRoot(Gm, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var hi = Math.clz32 ? Math.clz32 : Rj, Dj = Math.log, Cj = Math.LN2;
  function Rj(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Dj(n) / Cj | 0) | 0;
  }
  var em = 64, tm = 4194304;
  function ud(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Om(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, d = o & 268435455;
    if (d !== 0) {
      var b = d & ~c;
      b !== 0 ? u = ud(b) : (p &= d, p !== 0 && (u = ud(p)));
    } else
      d = o & ~c, d !== 0 ? u = ud(d) : p !== 0 && (u = ud(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - hi(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function Ej(n, r) {
    switch (n) {
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
  function Tj(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var d = 31 - hi(p), b = 1 << d, x = c[d];
      x === -1 ? (!(b & o) || b & u) && (c[d] = Ej(b, r)) : x <= r && (n.expiredLanes |= b), p &= ~b;
    }
  }
  function w1(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function nk() {
    var n = em;
    return em <<= 1, !(em & 4194240) && (em = 64), n;
  }
  function HS(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Md(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - hi(r), n[r] = o;
  }
  function kj(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - hi(o), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~p;
    }
  }
  function ib(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - hi(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var _t = 0;
  function rk(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ak, ob, ik, ok, lk, x1 = false, nm = [], xl = null, Dl = null, Cl = null, xd = /* @__PURE__ */ new Map(), Dd = /* @__PURE__ */ new Map(), gl = [], _j = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ME(n, r) {
    switch (n) {
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
        xd.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dd.delete(r.pointerId);
    }
  }
  function Zf(n, r, o, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = zd(r), r !== null && ob(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Oj(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return xl = Zf(xl, n, r, o, u, c), true;
      case "dragenter":
        return Dl = Zf(Dl, n, r, o, u, c), true;
      case "mouseover":
        return Cl = Zf(Cl, n, r, o, u, c), true;
      case "pointerover":
        var p = c.pointerId;
        return xd.set(p, Zf(xd.get(p) || null, n, r, o, u, c)), true;
      case "gotpointercapture":
        return p = c.pointerId, Dd.set(p, Zf(Dd.get(p) || null, n, r, o, u, c)), true;
    }
    return false;
  }
  function uk(n) {
    var r = Cu(n.target);
    if (r !== null) {
      var o = $u(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = GT(o), r !== null) {
            n.blockedOn = r, lk(n.priority, function() {
              ik(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function hm(n) {
    if (n.blockedOn !== null)
      return false;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = D1(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        y1 = u, o.target.dispatchEvent(u), y1 = null;
      } else
        return r = zd(o), r !== null && ob(r), n.blockedOn = o, false;
      r.shift();
    }
    return true;
  }
  function AE(n, r, o) {
    hm(n) && o.delete(r);
  }
  function Nj() {
    x1 = false, xl !== null && hm(xl) && (xl = null), Dl !== null && hm(Dl) && (Dl = null), Cl !== null && hm(Cl) && (Cl = null), xd.forEach(AE), Dd.forEach(AE);
  }
  function ed(n, r) {
    n.blockedOn === r && (n.blockedOn = null, x1 || (x1 = true, Sa.unstable_scheduleCallback(Sa.unstable_NormalPriority, Nj)));
  }
  function Cd(n) {
    function r(c) {
      return ed(c, n);
    }
    if (0 < nm.length) {
      ed(nm[0], n);
      for (var o = 1; o < nm.length; o++) {
        var u = nm[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (xl !== null && ed(xl, n), Dl !== null && ed(Dl, n), Cl !== null && ed(Cl, n), xd.forEach(r), Dd.forEach(r), o = 0; o < gl.length; o++)
      u = gl[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < gl.length && (o = gl[0], o.blockedOn === null); )
      uk(o), o.blockedOn === null && gl.shift();
  }
  var rc = Oo.ReactCurrentBatchConfig, Nm = true;
  function Lj(n, r, o, u) {
    var c = _t, p = rc.transition;
    rc.transition = null;
    try {
      _t = 1, lb(n, r, o, u);
    } finally {
      _t = c, rc.transition = p;
    }
  }
  function Uj(n, r, o, u) {
    var c = _t, p = rc.transition;
    rc.transition = null;
    try {
      _t = 4, lb(n, r, o, u);
    } finally {
      _t = c, rc.transition = p;
    }
  }
  function lb(n, r, o, u) {
    if (Nm) {
      var c = D1(n, r, o, u);
      if (c === null)
        XS(n, r, u, Lm, o), ME(n, u);
      else if (Oj(c, n, r, o, u))
        u.stopPropagation();
      else if (ME(n, u), r & 4 && -1 < _j.indexOf(n)) {
        for (; c !== null; ) {
          var p = zd(c);
          if (p !== null && ak(p), p = D1(n, r, o, u), p === null && XS(n, r, u, Lm, o), p === c)
            break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else
        XS(n, r, u, null, o);
    }
  }
  var Lm = null;
  function D1(n, r, o, u) {
    if (Lm = null, n = rb(u), n = Cu(n), n !== null)
      if (r = $u(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = GT(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Lm = n, null;
  }
  function sk(n) {
    switch (n) {
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
        switch (bj()) {
          case ab:
            return 1;
          case ek:
            return 4;
          case _m:
          case wj:
            return 16;
          case tk:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var bl = null, ub = null, ym = null;
  function ck() {
    if (ym)
      return ym;
    var n, r = ub, o = r.length, u, c = "value" in bl ? bl.value : bl.textContent, p = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++)
      ;
    var d = o - n;
    for (u = 1; u <= d && r[o - u] === c[p - u]; u++)
      ;
    return ym = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function gm(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function rm() {
    return true;
  }
  function zE() {
    return false;
  }
  function ba(n) {
    function r(o, u, c, p, d) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = d, this.currentTarget = null;
      for (var b in n)
        n.hasOwnProperty(b) && (o = n[b], this[b] = o ? o(p) : p[b]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? rm : zE, this.isPropagationStopped = zE, this;
    }
    return Kt(r.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = false), this.isDefaultPrevented = rm);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = true), this.isPropagationStopped = rm);
    }, persist: function() {
    }, isPersistent: rm }), r;
  }
  var pc = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, sb = ba(pc), Ad = Kt({}, pc, { view: 0, detail: 0 }), Ij = ba(Ad), FS, VS, td, qm = Kt({}, Ad, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cb, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== td && (td && n.type === "mousemove" ? (FS = n.screenX - td.screenX, VS = n.screenY - td.screenY) : VS = FS = 0, td = n), FS);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : VS;
  } }), jE = ba(qm), $j = Kt({}, qm, { dataTransfer: 0 }), Mj = ba($j), Aj = Kt({}, Ad, { relatedTarget: 0 }), YS = ba(Aj), zj = Kt({}, pc, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jj = ba(zj), Pj = Kt({}, pc, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Hj = ba(Pj), Fj = Kt({}, pc, { data: 0 }), PE = ba(Fj), Vj = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Yj = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Qj = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wj(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Qj[n]) ? !!r[n] : false;
  }
  function cb() {
    return Wj;
  }
  var Bj = Kt({}, Ad, { key: function(n) {
    if (n.key) {
      var r = Vj[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = gm(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Yj[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cb, charCode: function(n) {
    return n.type === "keypress" ? gm(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? gm(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Xj = ba(Bj), Jj = Kt({}, qm, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), HE = ba(Jj), Gj = Kt({}, Ad, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cb }), qj = ba(Gj), Kj = Kt({}, pc, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zj = ba(Kj), e3 = Kt({}, qm, { deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  }, deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), t3 = ba(e3), n3 = [9, 13, 27, 32], fb = Eo && "CompositionEvent" in window, dd = null;
  Eo && "documentMode" in document && (dd = document.documentMode);
  var r3 = Eo && "TextEvent" in window && !dd, fk = Eo && (!fb || dd && 8 < dd && 11 >= dd), FE = " ", VE = false;
  function dk(n, r) {
    switch (n) {
      case "keyup":
        return n3.indexOf(r.keyCode) !== -1;
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
  function pk(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ys = false;
  function a3(n, r) {
    switch (n) {
      case "compositionend":
        return pk(r);
      case "keypress":
        return r.which !== 32 ? null : (VE = true, FE);
      case "textInput":
        return n = r.data, n === FE && VE ? null : n;
      default:
        return null;
    }
  }
  function i3(n, r) {
    if (Ys)
      return n === "compositionend" || !fb && dk(n, r) ? (n = ck(), ym = ub = bl = null, Ys = false, n) : null;
    switch (n) {
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
        return fk && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var o3 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function YE(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!o3[n.type] : r === "textarea";
  }
  function vk(n, r, o, u) {
    QT(u), r = Um(r, "onChange"), 0 < r.length && (o = new sb("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var pd = null, Rd = null;
  function l3(n) {
    Rk(n, 0);
  }
  function Km(n) {
    var r = Bs(n);
    if (zT(r))
      return n;
  }
  function u3(n, r) {
    if (n === "change")
      return r;
  }
  var mk = false;
  Eo && (Eo ? (im = "oninput" in document, im || (QS = document.createElement("div"), QS.setAttribute("oninput", "return;"), im = typeof QS.oninput == "function"), am = im) : am = false, mk = am && (!document.documentMode || 9 < document.documentMode));
  var am, im, QS;
  function QE() {
    pd && (pd.detachEvent("onpropertychange", hk), Rd = pd = null);
  }
  function hk(n) {
    if (n.propertyName === "value" && Km(Rd)) {
      var r = [];
      vk(r, Rd, n, rb(n)), JT(l3, r);
    }
  }
  function s3(n, r, o) {
    n === "focusin" ? (QE(), pd = r, Rd = o, pd.attachEvent("onpropertychange", hk)) : n === "focusout" && QE();
  }
  function c3(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Km(Rd);
  }
  function f3(n, r) {
    if (n === "click")
      return Km(r);
  }
  function d3(n, r) {
    if (n === "input" || n === "change")
      return Km(r);
  }
  function p3(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var gi = typeof Object.is == "function" ? Object.is : p3;
  function Ed(n, r) {
    if (gi(n, r))
      return true;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return false;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return false;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!i1.call(r, c) || !gi(n[c], r[c]))
        return false;
    }
    return true;
  }
  function WE(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function BE(n, r) {
    var o = WE(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return { node: o, offset: r - n };
        n = u;
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
      o = WE(o);
    }
  }
  function yk(n, r) {
    return n && r ? n === r ? true : n && n.nodeType === 3 ? false : r && r.nodeType === 3 ? yk(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : false : false;
  }
  function gk() {
    for (var n = window, r = Em(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = false;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Em(n.document);
    }
    return r;
  }
  function db(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function v3(n) {
    var r = gk(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && yk(o.ownerDocument.documentElement, o)) {
      if (u !== null && db(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = BE(o, p);
          var d = BE(o, u);
          c && d && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== d.node || n.focusOffset !== d.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(d.node, d.offset)) : (r.setEnd(d.node, d.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var m3 = Eo && "documentMode" in document && 11 >= document.documentMode, Qs = null, C1 = null, vd = null, R1 = false;
  function XE(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    R1 || Qs == null || Qs !== Em(u) || (u = Qs, "selectionStart" in u && db(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), vd && Ed(vd, u) || (vd = u, u = Um(C1, "onSelect"), 0 < u.length && (r = new sb("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Qs)));
  }
  function om(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Ws = { animationend: om("Animation", "AnimationEnd"), animationiteration: om("Animation", "AnimationIteration"), animationstart: om("Animation", "AnimationStart"), transitionend: om("Transition", "TransitionEnd") }, WS = {}, Sk = {};
  Eo && (Sk = document.createElement("div").style, "AnimationEvent" in window || (delete Ws.animationend.animation, delete Ws.animationiteration.animation, delete Ws.animationstart.animation), "TransitionEvent" in window || delete Ws.transitionend.transition);
  function Zm(n) {
    if (WS[n])
      return WS[n];
    if (!Ws[n])
      return n;
    var r = Ws[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Sk)
        return WS[n] = r[o];
    return n;
  }
  var bk = Zm("animationend"), wk = Zm("animationiteration"), xk = Zm("animationstart"), Dk = Zm("transitionend"), Ck = /* @__PURE__ */ new Map(), JE = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ll(n, r) {
    Ck.set(n, r), Iu(r, [n]);
  }
  for (lm = 0; lm < JE.length; lm++)
    um = JE[lm], GE = um.toLowerCase(), qE = um[0].toUpperCase() + um.slice(1), Ll(GE, "on" + qE);
  var um, GE, qE, lm;
  Ll(bk, "onAnimationEnd");
  Ll(wk, "onAnimationIteration");
  Ll(xk, "onAnimationStart");
  Ll("dblclick", "onDoubleClick");
  Ll("focusin", "onFocus");
  Ll("focusout", "onBlur");
  Ll(Dk, "onTransitionEnd");
  oc("onMouseEnter", ["mouseout", "mouseover"]);
  oc("onMouseLeave", ["mouseout", "mouseover"]);
  oc("onPointerEnter", ["pointerout", "pointerover"]);
  oc("onPointerLeave", ["pointerout", "pointerover"]);
  Iu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Iu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Iu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Iu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Iu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Iu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var sd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), h3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(sd));
  function KE(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, hj(u, r, void 0, n), n.currentTarget = null;
  }
  function Rk(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var d = u.length - 1; 0 <= d; d--) {
            var b = u[d], x = b.instance, T = b.currentTarget;
            if (b = b.listener, x !== p && c.isPropagationStopped())
              break e;
            KE(c, b, T), p = x;
          }
        else
          for (d = 0; d < u.length; d++) {
            if (b = u[d], x = b.instance, T = b.currentTarget, b = b.listener, x !== p && c.isPropagationStopped())
              break e;
            KE(c, b, T), p = x;
          }
      }
    }
    if (km)
      throw n = b1, km = false, b1 = null, n;
  }
  function Vt(n, r) {
    var o = r[O1];
    o === void 0 && (o = r[O1] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Ek(r, n, 2, false), o.add(u));
  }
  function BS(n, r, o) {
    var u = 0;
    r && (u |= 4), Ek(o, n, u, r);
  }
  var sm = "_reactListening" + Math.random().toString(36).slice(2);
  function Td(n) {
    if (!n[sm]) {
      n[sm] = true, UT.forEach(function(o) {
        o !== "selectionchange" && (h3.has(o) || BS(o, false, n), BS(o, true, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[sm] || (r[sm] = true, BS("selectionchange", false, r));
    }
  }
  function Ek(n, r, o, u) {
    switch (sk(r)) {
      case 1:
        var c = Lj;
        break;
      case 4:
        c = Uj;
        break;
      default:
        c = lb;
    }
    o = c.bind(null, r, o, n), c = void 0, !S1 || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = true), u ? c !== void 0 ? n.addEventListener(r, o, { capture: true, passive: c }) : n.addEventListener(r, o, true) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, false);
  }
  function XS(n, r, o, u, c) {
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
    JT(function() {
      var T = p, V = rb(o), U = [];
      e: {
        var j = Ck.get(n);
        if (j !== void 0) {
          var H = sb, J = n;
          switch (n) {
            case "keypress":
              if (gm(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              H = Xj;
              break;
            case "focusin":
              J = "focus", H = YS;
              break;
            case "focusout":
              J = "blur", H = YS;
              break;
            case "beforeblur":
            case "afterblur":
              H = YS;
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
              H = jE;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Mj;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = qj;
              break;
            case bk:
            case wk:
            case xk:
              H = jj;
              break;
            case Dk:
              H = Zj;
              break;
            case "scroll":
              H = Ij;
              break;
            case "wheel":
              H = t3;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Hj;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = HE;
          }
          var ie = (r & 4) !== 0, Ge = !ie && n === "scroll", N = ie ? j !== null ? j + "Capture" : null : j;
          ie = [];
          for (var C = T, k; C !== null; ) {
            k = C;
            var Q = k.stateNode;
            if (k.tag === 5 && Q !== null && (k = Q, N !== null && (Q = wd(C, N), Q != null && ie.push(kd(C, Q, k)))), Ge)
              break;
            C = C.return;
          }
          0 < ie.length && (j = new H(j, J, null, o, V), U.push({ event: j, listeners: ie }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (j = n === "mouseover" || n === "pointerover", H = n === "mouseout" || n === "pointerout", j && o !== y1 && (J = o.relatedTarget || o.fromElement) && (Cu(J) || J[To]))
            break e;
          if ((H || j) && (j = V.window === V ? V : (j = V.ownerDocument) ? j.defaultView || j.parentWindow : window, H ? (J = o.relatedTarget || o.toElement, H = T, J = J ? Cu(J) : null, J !== null && (Ge = $u(J), J !== Ge || J.tag !== 5 && J.tag !== 6) && (J = null)) : (H = null, J = T), H !== J)) {
            if (ie = jE, Q = "onMouseLeave", N = "onMouseEnter", C = "mouse", (n === "pointerout" || n === "pointerover") && (ie = HE, Q = "onPointerLeave", N = "onPointerEnter", C = "pointer"), Ge = H == null ? j : Bs(H), k = J == null ? j : Bs(J), j = new ie(Q, C + "leave", H, o, V), j.target = Ge, j.relatedTarget = k, Q = null, Cu(V) === T && (ie = new ie(N, C + "enter", J, o, V), ie.target = k, ie.relatedTarget = Ge, Q = ie), Ge = Q, H && J)
              t: {
                for (ie = H, N = J, C = 0, k = ie; k; k = Hs(k))
                  C++;
                for (k = 0, Q = N; Q; Q = Hs(Q))
                  k++;
                for (; 0 < C - k; )
                  ie = Hs(ie), C--;
                for (; 0 < k - C; )
                  N = Hs(N), k--;
                for (; C--; ) {
                  if (ie === N || N !== null && ie === N.alternate)
                    break t;
                  ie = Hs(ie), N = Hs(N);
                }
                ie = null;
              }
            else
              ie = null;
            H !== null && ZE(U, j, H, ie, false), J !== null && Ge !== null && ZE(U, Ge, J, ie, true);
          }
        }
        e: {
          if (j = T ? Bs(T) : window, H = j.nodeName && j.nodeName.toLowerCase(), H === "select" || H === "input" && j.type === "file")
            var X = u3;
          else if (YE(j))
            if (mk)
              X = d3;
            else {
              X = c3;
              var re = s3;
            }
          else
            (H = j.nodeName) && H.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (X = f3);
          if (X && (X = X(n, T))) {
            vk(U, X, o, V);
            break e;
          }
          re && re(n, j, T), n === "focusout" && (re = j._wrapperState) && re.controlled && j.type === "number" && d1(j, "number", j.value);
        }
        switch (re = T ? Bs(T) : window, n) {
          case "focusin":
            (YE(re) || re.contentEditable === "true") && (Qs = re, C1 = T, vd = null);
            break;
          case "focusout":
            vd = C1 = Qs = null;
            break;
          case "mousedown":
            R1 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            R1 = false, XE(U, o, V);
            break;
          case "selectionchange":
            if (m3)
              break;
          case "keydown":
          case "keyup":
            XE(U, o, V);
        }
        var ee;
        if (fb)
          e: {
            switch (n) {
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
          Ys ? dk(n, o) && (he = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (he = "onCompositionStart");
        he && (fk && o.locale !== "ko" && (Ys || he !== "onCompositionStart" ? he === "onCompositionEnd" && Ys && (ee = ck()) : (bl = V, ub = "value" in bl ? bl.value : bl.textContent, Ys = true)), re = Um(T, he), 0 < re.length && (he = new PE(he, n, null, o, V), U.push({ event: he, listeners: re }), ee ? he.data = ee : (ee = pk(o), ee !== null && (he.data = ee)))), (ee = r3 ? a3(n, o) : i3(n, o)) && (T = Um(T, "onBeforeInput"), 0 < T.length && (V = new PE("onBeforeInput", "beforeinput", null, o, V), U.push({ event: V, listeners: T }), V.data = ee));
      }
      Rk(U, r);
    });
  }
  function kd(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Um(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = wd(n, o), p != null && u.unshift(kd(n, p, c)), p = wd(n, r), p != null && u.push(kd(n, p, c))), n = n.return;
    }
    return u;
  }
  function Hs(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ZE(n, r, o, u, c) {
    for (var p = r._reactName, d = []; o !== null && o !== u; ) {
      var b = o, x = b.alternate, T = b.stateNode;
      if (x !== null && x === u)
        break;
      b.tag === 5 && T !== null && (b = T, c ? (x = wd(o, p), x != null && d.unshift(kd(o, x, b))) : c || (x = wd(o, p), x != null && d.push(kd(o, x, b)))), o = o.return;
    }
    d.length !== 0 && n.push({ event: r, listeners: d });
  }
  var y3 = /\r\n?/g, g3 = /\u0000|\uFFFD/g;
  function eT(n) {
    return (typeof n == "string" ? n : "" + n).replace(y3, `
`).replace(g3, "");
  }
  function cm(n, r, o) {
    if (r = eT(r), eT(n) !== r && o)
      throw Error(ne(425));
  }
  function Im() {
  }
  var E1 = null, T1 = null;
  function k1(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var _1 = typeof setTimeout == "function" ? setTimeout : void 0, S3 = typeof clearTimeout == "function" ? clearTimeout : void 0, tT = typeof Promise == "function" ? Promise : void 0, b3 = typeof queueMicrotask == "function" ? queueMicrotask : typeof tT < "u" ? function(n) {
    return tT.resolve(null).then(n).catch(w3);
  } : _1;
  function w3(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function JS(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (u === 0) {
            n.removeChild(c), Cd(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    Cd(r);
  }
  function Rl(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function nT(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var vc = Math.random().toString(36).slice(2), Yi = "__reactFiber$" + vc, _d = "__reactProps$" + vc, To = "__reactContainer$" + vc, O1 = "__reactEvents$" + vc, x3 = "__reactListeners$" + vc, D3 = "__reactHandles$" + vc;
  function Cu(n) {
    var r = n[Yi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[To] || o[Yi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = nT(n); n !== null; ) {
            if (o = n[Yi])
              return o;
            n = nT(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function zd(n) {
    return n = n[Yi] || n[To], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Bs(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(ne(33));
  }
  function eh(n) {
    return n[_d] || null;
  }
  var N1 = [], Xs = -1;
  function Ul(n) {
    return { current: n };
  }
  function Yt(n) {
    0 > Xs || (n.current = N1[Xs], N1[Xs] = null, Xs--);
  }
  function Ht(n, r) {
    Xs++, N1[Xs] = n.current, n.current = r;
  }
  var Nl = {}, gr = Ul(Nl), Jr = Ul(false), _u = Nl;
  function lc(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Nl;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in o)
      c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Gr(n) {
    return n = n.childContextTypes, n != null;
  }
  function $m() {
    Yt(Jr), Yt(gr);
  }
  function rT(n, r, o) {
    if (gr.current !== Nl)
      throw Error(ne(168));
    Ht(gr, r), Ht(Jr, o);
  }
  function Tk(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(ne(108, sj(n) || "Unknown", c));
    return Kt({}, o, u);
  }
  function Mm(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Nl, _u = gr.current, Ht(gr, n), Ht(Jr, Jr.current), true;
  }
  function aT(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(ne(169));
    o ? (n = Tk(n, r, _u), u.__reactInternalMemoizedMergedChildContext = n, Yt(Jr), Yt(gr), Ht(gr, n)) : Yt(Jr), Ht(Jr, o);
  }
  var xo = null, th = false, GS = false;
  function kk(n) {
    xo === null ? xo = [n] : xo.push(n);
  }
  function C3(n) {
    th = true, kk(n);
  }
  function Il() {
    if (!GS && xo !== null) {
      GS = true;
      var n = 0, r = _t;
      try {
        var o = xo;
        for (_t = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(true);
          while (u !== null);
        }
        xo = null, th = false;
      } catch (c) {
        throw xo !== null && (xo = xo.slice(n + 1)), ZT(ab, Il), c;
      } finally {
        _t = r, GS = false;
      }
    }
    return null;
  }
  var Js = [], Gs = 0, Am = null, zm = 0, Aa = [], za = 0, Ou = null, Do = 1, Co = "";
  function xu(n, r) {
    Js[Gs++] = zm, Js[Gs++] = Am, Am = n, zm = r;
  }
  function _k(n, r, o) {
    Aa[za++] = Do, Aa[za++] = Co, Aa[za++] = Ou, Ou = n;
    var u = Do;
    n = Co;
    var c = 32 - hi(u) - 1;
    u &= ~(1 << c), o += 1;
    var p = 32 - hi(r) + c;
    if (30 < p) {
      var d = c - c % 5;
      p = (u & (1 << d) - 1).toString(32), u >>= d, c -= d, Do = 1 << 32 - hi(r) + c | o << c | u, Co = p + n;
    } else
      Do = 1 << p | o << c | u, Co = n;
  }
  function pb(n) {
    n.return !== null && (xu(n, 1), _k(n, 1, 0));
  }
  function vb(n) {
    for (; n === Am; )
      Am = Js[--Gs], Js[Gs] = null, zm = Js[--Gs], Js[Gs] = null;
    for (; n === Ou; )
      Ou = Aa[--za], Aa[za] = null, Co = Aa[--za], Aa[za] = null, Do = Aa[--za], Aa[za] = null;
  }
  var ga = null, ya = null, Wt = false, mi = null;
  function Ok(n, r) {
    var o = ja(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function iT(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, ya = Rl(r.firstChild), true) : false;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, ya = null, true) : false;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ou !== null ? { id: Do, overflow: Co } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ja(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ga = n, ya = null, true) : false;
      default:
        return false;
    }
  }
  function L1(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function U1(n) {
    if (Wt) {
      var r = ya;
      if (r) {
        var o = r;
        if (!iT(n, r)) {
          if (L1(n))
            throw Error(ne(418));
          r = Rl(o.nextSibling);
          var u = ga;
          r && iT(n, r) ? Ok(u, o) : (n.flags = n.flags & -4097 | 2, Wt = false, ga = n);
        }
      } else {
        if (L1(n))
          throw Error(ne(418));
        n.flags = n.flags & -4097 | 2, Wt = false, ga = n;
      }
    }
  }
  function oT(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ga = n;
  }
  function fm(n) {
    if (n !== ga)
      return false;
    if (!Wt)
      return oT(n), Wt = true, false;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !k1(n.type, n.memoizedProps)), r && (r = ya)) {
      if (L1(n))
        throw Nk(), Error(ne(418));
      for (; r; )
        Ok(n, r), r = Rl(r.nextSibling);
    }
    if (oT(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(ne(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ya = Rl(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ya = null;
      }
    } else
      ya = ga ? Rl(n.stateNode.nextSibling) : null;
    return true;
  }
  function Nk() {
    for (var n = ya; n; )
      n = Rl(n.nextSibling);
  }
  function uc() {
    ya = ga = null, Wt = false;
  }
  function mb(n) {
    mi === null ? mi = [n] : mi.push(n);
  }
  var R3 = Oo.ReactCurrentBatchConfig;
  function pi(n, r) {
    if (n && n.defaultProps) {
      r = Kt({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var jm = Ul(null), Pm = null, qs = null, hb = null;
  function yb() {
    hb = qs = Pm = null;
  }
  function gb(n) {
    var r = jm.current;
    Yt(jm), n._currentValue = r;
  }
  function I1(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function ac(n, r) {
    Pm = n, hb = qs = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Xr = true), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (hb !== n)
      if (n = { context: n, memoizedValue: r, next: null }, qs === null) {
        if (Pm === null)
          throw Error(ne(308));
        qs = n, Pm.dependencies = { lanes: 0, firstContext: n };
      } else
        qs = qs.next = n;
    return r;
  }
  var Ru = null;
  function Sb(n) {
    Ru === null ? Ru = [n] : Ru.push(n);
  }
  function Lk(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Sb(r)) : (o.next = c.next, c.next = o), r.interleaved = o, ko(n, u);
  }
  function ko(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var yl = false;
  function bb(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uk(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ro(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function El(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, bt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, ko(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Sb(u)) : (r.next = c.next, c.next = r), u.interleaved = r, ko(n, o);
  }
  function Sm(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, ib(n, o);
    }
  }
  function lT(n, r) {
    var o = n.updateQueue, u = n.alternate;
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
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Hm(n, r, o, u) {
    var c = n.updateQueue;
    yl = false;
    var p = c.firstBaseUpdate, d = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var x = b, T = x.next;
      x.next = null, d === null ? p = T : d.next = T, d = x;
      var V = n.alternate;
      V !== null && (V = V.updateQueue, b = V.lastBaseUpdate, b !== d && (b === null ? V.firstBaseUpdate = T : b.next = T, V.lastBaseUpdate = x));
    }
    if (p !== null) {
      var U = c.baseState;
      d = 0, V = T = x = null, b = p;
      do {
        var j = b.lane, H = b.eventTime;
        if ((u & j) === j) {
          V !== null && (V = V.next = { eventTime: H, lane: 0, tag: b.tag, payload: b.payload, callback: b.callback, next: null });
          e: {
            var J = n, ie = b;
            switch (j = r, H = o, ie.tag) {
              case 1:
                if (J = ie.payload, typeof J == "function") {
                  U = J.call(H, U, j);
                  break e;
                }
                U = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ie.payload, j = typeof J == "function" ? J.call(H, U, j) : J, j == null)
                  break e;
                U = Kt({}, U, j);
                break e;
              case 2:
                yl = true;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, j = c.effects, j === null ? c.effects = [b] : j.push(b));
        } else
          H = { eventTime: H, lane: j, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, V === null ? (T = V = H, x = U) : V = V.next = H, d |= j;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null)
            break;
          j = b, b = j.next, j.next = null, c.lastBaseUpdate = j, c.shared.pending = null;
        }
      } while (true);
      if (V === null && (x = U), c.baseState = x, c.firstBaseUpdate = T, c.lastBaseUpdate = V, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          d |= c.lane, c = c.next;
        while (c !== r);
      } else
        p === null && (c.shared.lanes = 0);
      Lu |= d, n.lanes = d, n.memoizedState = U;
    }
  }
  function uT(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = o, typeof c != "function")
            throw Error(ne(191, c));
          c.call(u);
        }
      }
  }
  var Ik = new LT.Component().refs;
  function $1(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : Kt({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var nh = { isMounted: function(n) {
    return (n = n._reactInternals) ? $u(n) === n : false;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = $r(), c = kl(n), p = Ro(u, c);
    p.payload = r, o != null && (p.callback = o), r = El(n, p, c), r !== null && (yi(r, n, c, u), Sm(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = $r(), c = kl(n), p = Ro(u, c);
    p.tag = 1, p.payload = r, o != null && (p.callback = o), r = El(n, p, c), r !== null && (yi(r, n, c, u), Sm(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = $r(), u = kl(n), c = Ro(o, u);
    c.tag = 2, r != null && (c.callback = r), r = El(n, c, u), r !== null && (yi(r, n, u, o), Sm(r, n, u));
  } };
  function sT(n, r, o, u, c, p, d) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, d) : r.prototype && r.prototype.isPureReactComponent ? !Ed(o, u) || !Ed(c, p) : true;
  }
  function $k(n, r, o) {
    var u = false, c = Nl, p = r.contextType;
    return typeof p == "object" && p !== null ? p = Ha(p) : (c = Gr(r) ? _u : gr.current, u = r.contextTypes, p = (u = u != null) ? lc(n, c) : Nl), r = new r(o, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = nh, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function cT(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && nh.enqueueReplaceState(r, r.state, null);
  }
  function M1(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = Ik, bb(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = Ha(p) : (p = Gr(r) ? _u : gr.current, c.context = lc(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && ($1(n, r, p, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && nh.enqueueReplaceState(c, c.state, null), Hm(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function nd(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(ne(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(ne(147, n));
        var c = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(d) {
          var b = c.refs;
          b === Ik && (b = c.refs = {}), d === null ? delete b[p] : b[p] = d;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(ne(284));
      if (!o._owner)
        throw Error(ne(290, n));
    }
    return n;
  }
  function dm(n, r) {
    throw n = Object.prototype.toString.call(r), Error(ne(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function fT(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Mk(n) {
    function r(N, C) {
      if (n) {
        var k = N.deletions;
        k === null ? (N.deletions = [C], N.flags |= 16) : k.push(C);
      }
    }
    function o(N, C) {
      if (!n)
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
    function p(N, C, k) {
      return N.index = k, n ? (k = N.alternate, k !== null ? (k = k.index, k < C ? (N.flags |= 2, C) : k) : (N.flags |= 2, C)) : (N.flags |= 1048576, C);
    }
    function d(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function b(N, C, k, Q) {
      return C === null || C.tag !== 6 ? (C = r1(k, N.mode, Q), C.return = N, C) : (C = c(C, k), C.return = N, C);
    }
    function x(N, C, k, Q) {
      var X = k.type;
      return X === Vs ? V(N, C, k.props.children, Q, k.key) : C !== null && (C.elementType === X || typeof X == "object" && X !== null && X.$$typeof === hl && fT(X) === C.type) ? (Q = c(C, k.props), Q.ref = nd(N, C, k), Q.return = N, Q) : (Q = Rm(k.type, k.key, k.props, null, N.mode, Q), Q.ref = nd(N, C, k), Q.return = N, Q);
    }
    function T(N, C, k, Q) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== k.containerInfo || C.stateNode.implementation !== k.implementation ? (C = a1(k, N.mode, Q), C.return = N, C) : (C = c(C, k.children || []), C.return = N, C);
    }
    function V(N, C, k, Q, X) {
      return C === null || C.tag !== 7 ? (C = ku(k, N.mode, Q, X), C.return = N, C) : (C = c(C, k), C.return = N, C);
    }
    function U(N, C, k) {
      if (typeof C == "string" && C !== "" || typeof C == "number")
        return C = r1("" + C, N.mode, k), C.return = N, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case qv:
            return k = Rm(C.type, C.key, C.props, null, N.mode, k), k.ref = nd(N, null, C), k.return = N, k;
          case Fs:
            return C = a1(C, N.mode, k), C.return = N, C;
          case hl:
            var Q = C._init;
            return U(N, Q(C._payload), k);
        }
        if (ld(C) || Kf(C))
          return C = ku(C, N.mode, k, null), C.return = N, C;
        dm(N, C);
      }
      return null;
    }
    function j(N, C, k, Q) {
      var X = C !== null ? C.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return X !== null ? null : b(N, C, "" + k, Q);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case qv:
            return k.key === X ? x(N, C, k, Q) : null;
          case Fs:
            return k.key === X ? T(N, C, k, Q) : null;
          case hl:
            return X = k._init, j(N, C, X(k._payload), Q);
        }
        if (ld(k) || Kf(k))
          return X !== null ? null : V(N, C, k, Q, null);
        dm(N, k);
      }
      return null;
    }
    function H(N, C, k, Q, X) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number")
        return N = N.get(k) || null, b(C, N, "" + Q, X);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case qv:
            return N = N.get(Q.key === null ? k : Q.key) || null, x(C, N, Q, X);
          case Fs:
            return N = N.get(Q.key === null ? k : Q.key) || null, T(C, N, Q, X);
          case hl:
            var re = Q._init;
            return H(N, C, k, re(Q._payload), X);
        }
        if (ld(Q) || Kf(Q))
          return N = N.get(k) || null, V(C, N, Q, X, null);
        dm(C, Q);
      }
      return null;
    }
    function J(N, C, k, Q) {
      for (var X = null, re = null, ee = C, he = C = 0, Me = null; ee !== null && he < k.length; he++) {
        ee.index > he ? (Me = ee, ee = null) : Me = ee.sibling;
        var Re = j(N, ee, k[he], Q);
        if (Re === null) {
          ee === null && (ee = Me);
          break;
        }
        n && ee && Re.alternate === null && r(N, ee), C = p(Re, C, he), re === null ? X = Re : re.sibling = Re, re = Re, ee = Me;
      }
      if (he === k.length)
        return o(N, ee), Wt && xu(N, he), X;
      if (ee === null) {
        for (; he < k.length; he++)
          ee = U(N, k[he], Q), ee !== null && (C = p(ee, C, he), re === null ? X = ee : re.sibling = ee, re = ee);
        return Wt && xu(N, he), X;
      }
      for (ee = u(N, ee); he < k.length; he++)
        Me = H(ee, N, he, k[he], Q), Me !== null && (n && Me.alternate !== null && ee.delete(Me.key === null ? he : Me.key), C = p(Me, C, he), re === null ? X = Me : re.sibling = Me, re = Me);
      return n && ee.forEach(function(dt) {
        return r(N, dt);
      }), Wt && xu(N, he), X;
    }
    function ie(N, C, k, Q) {
      var X = Kf(k);
      if (typeof X != "function")
        throw Error(ne(150));
      if (k = X.call(k), k == null)
        throw Error(ne(151));
      for (var re = X = null, ee = C, he = C = 0, Me = null, Re = k.next(); ee !== null && !Re.done; he++, Re = k.next()) {
        ee.index > he ? (Me = ee, ee = null) : Me = ee.sibling;
        var dt = j(N, ee, Re.value, Q);
        if (dt === null) {
          ee === null && (ee = Me);
          break;
        }
        n && ee && dt.alternate === null && r(N, ee), C = p(dt, C, he), re === null ? X = dt : re.sibling = dt, re = dt, ee = Me;
      }
      if (Re.done)
        return o(N, ee), Wt && xu(N, he), X;
      if (ee === null) {
        for (; !Re.done; he++, Re = k.next())
          Re = U(N, Re.value, Q), Re !== null && (C = p(Re, C, he), re === null ? X = Re : re.sibling = Re, re = Re);
        return Wt && xu(N, he), X;
      }
      for (ee = u(N, ee); !Re.done; he++, Re = k.next())
        Re = H(ee, N, he, Re.value, Q), Re !== null && (n && Re.alternate !== null && ee.delete(Re.key === null ? he : Re.key), C = p(Re, C, he), re === null ? X = Re : re.sibling = Re, re = Re);
      return n && ee.forEach(function(gt) {
        return r(N, gt);
      }), Wt && xu(N, he), X;
    }
    function Ge(N, C, k, Q) {
      if (typeof k == "object" && k !== null && k.type === Vs && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case qv:
            e: {
              for (var X = k.key, re = C; re !== null; ) {
                if (re.key === X) {
                  if (X = k.type, X === Vs) {
                    if (re.tag === 7) {
                      o(N, re.sibling), C = c(re, k.props.children), C.return = N, N = C;
                      break e;
                    }
                  } else if (re.elementType === X || typeof X == "object" && X !== null && X.$$typeof === hl && fT(X) === re.type) {
                    o(N, re.sibling), C = c(re, k.props), C.ref = nd(N, re, k), C.return = N, N = C;
                    break e;
                  }
                  o(N, re);
                  break;
                } else
                  r(N, re);
                re = re.sibling;
              }
              k.type === Vs ? (C = ku(k.props.children, N.mode, Q, k.key), C.return = N, N = C) : (Q = Rm(k.type, k.key, k.props, null, N.mode, Q), Q.ref = nd(N, C, k), Q.return = N, N = Q);
            }
            return d(N);
          case Fs:
            e: {
              for (re = k.key; C !== null; ) {
                if (C.key === re)
                  if (C.tag === 4 && C.stateNode.containerInfo === k.containerInfo && C.stateNode.implementation === k.implementation) {
                    o(N, C.sibling), C = c(C, k.children || []), C.return = N, N = C;
                    break e;
                  } else {
                    o(N, C);
                    break;
                  }
                else
                  r(N, C);
                C = C.sibling;
              }
              C = a1(k, N.mode, Q), C.return = N, N = C;
            }
            return d(N);
          case hl:
            return re = k._init, Ge(N, C, re(k._payload), Q);
        }
        if (ld(k))
          return J(N, C, k, Q);
        if (Kf(k))
          return ie(N, C, k, Q);
        dm(N, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, C !== null && C.tag === 6 ? (o(N, C.sibling), C = c(C, k), C.return = N, N = C) : (o(N, C), C = r1(k, N.mode, Q), C.return = N, N = C), d(N)) : o(N, C);
    }
    return Ge;
  }
  var sc = Mk(true), Ak = Mk(false), jd = {}, Wi = Ul(jd), Od = Ul(jd), Nd = Ul(jd);
  function Eu(n) {
    if (n === jd)
      throw Error(ne(174));
    return n;
  }
  function wb(n, r) {
    switch (Ht(Nd, r), Ht(Od, n), Ht(Wi, jd), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : v1(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = v1(r, n);
    }
    Yt(Wi), Ht(Wi, r);
  }
  function cc() {
    Yt(Wi), Yt(Od), Yt(Nd);
  }
  function zk(n) {
    Eu(Nd.current);
    var r = Eu(Wi.current), o = v1(r, n.type);
    r !== o && (Ht(Od, n), Ht(Wi, o));
  }
  function xb(n) {
    Od.current === n && (Yt(Wi), Yt(Od));
  }
  var Gt = Ul(0);
  function Fm(n) {
    for (var r = n; r !== null; ) {
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
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var qS = [];
  function Db() {
    for (var n = 0; n < qS.length; n++)
      qS[n]._workInProgressVersionPrimary = null;
    qS.length = 0;
  }
  var bm = Oo.ReactCurrentDispatcher, KS = Oo.ReactCurrentBatchConfig, Nu = 0, qt = null, Un = null, Fn = null, Vm = false, md = false, Ld = 0, E3 = 0;
  function mr() {
    throw Error(ne(321));
  }
  function Cb(n, r) {
    if (r === null)
      return false;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!gi(n[o], r[o]))
        return false;
    return true;
  }
  function Rb(n, r, o, u, c, p) {
    if (Nu = p, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bm.current = n === null || n.memoizedState === null ? O3 : N3, n = o(u, c), md) {
      p = 0;
      do {
        if (md = false, Ld = 0, 25 <= p)
          throw Error(ne(301));
        p += 1, Fn = Un = null, r.updateQueue = null, bm.current = L3, n = o(u, c);
      } while (md);
    }
    if (bm.current = Ym, r = Un !== null && Un.next !== null, Nu = 0, Fn = Un = qt = null, Vm = false, r)
      throw Error(ne(300));
    return n;
  }
  function Eb() {
    var n = Ld !== 0;
    return Ld = 0, n;
  }
  function Vi() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fn === null ? qt.memoizedState = Fn = n : Fn = Fn.next = n, Fn;
  }
  function Fa() {
    if (Un === null) {
      var n = qt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Un.next;
    var r = Fn === null ? qt.memoizedState : Fn.next;
    if (r !== null)
      Fn = r, Un = n;
    else {
      if (n === null)
        throw Error(ne(310));
      Un = n, n = { memoizedState: Un.memoizedState, baseState: Un.baseState, baseQueue: Un.baseQueue, queue: Un.queue, next: null }, Fn === null ? qt.memoizedState = Fn = n : Fn = Fn.next = n;
    }
    return Fn;
  }
  function Ud(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ZS(n) {
    var r = Fa(), o = r.queue;
    if (o === null)
      throw Error(ne(311));
    o.lastRenderedReducer = n;
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
          x !== null && (x = x.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), u = T.hasEagerState ? T.eagerState : n(u, T.action);
        else {
          var U = { lane: V, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null };
          x === null ? (b = x = U, d = u) : x = x.next = U, qt.lanes |= V, Lu |= V;
        }
        T = T.next;
      } while (T !== null && T !== p);
      x === null ? d = u : x.next = b, gi(u, r.memoizedState) || (Xr = true), r.memoizedState = u, r.baseState = d, r.baseQueue = x, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, qt.lanes |= p, Lu |= p, c = c.next;
      while (c !== n);
    } else
      c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function e1(n) {
    var r = Fa(), o = r.queue;
    if (o === null)
      throw Error(ne(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, p = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var d = c = c.next;
      do
        p = n(p, d.action), d = d.next;
      while (d !== c);
      gi(p, r.memoizedState) || (Xr = true), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), o.lastRenderedState = p;
    }
    return [p, u];
  }
  function jk() {
  }
  function Pk(n, r) {
    var o = qt, u = Fa(), c = r(), p = !gi(u.memoizedState, c);
    if (p && (u.memoizedState = c, Xr = true), u = u.queue, Tb(Vk.bind(null, o, u, n), [n]), u.getSnapshot !== r || p || Fn !== null && Fn.memoizedState.tag & 1) {
      if (o.flags |= 2048, Id(9, Fk.bind(null, o, u, c, r), void 0, null), Vn === null)
        throw Error(ne(349));
      Nu & 30 || Hk(o, r, c);
    }
    return c;
  }
  function Hk(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Fk(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Yk(r) && Qk(n);
  }
  function Vk(n, r, o) {
    return o(function() {
      Yk(r) && Qk(n);
    });
  }
  function Yk(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !gi(n, o);
    } catch {
      return true;
    }
  }
  function Qk(n) {
    var r = ko(n, 1);
    r !== null && yi(r, n, 1, -1);
  }
  function dT(n) {
    var r = Vi();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ud, lastRenderedState: n }, r.queue = n, n = n.dispatch = _3.bind(null, qt, n), [r.memoizedState, n];
  }
  function Id(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Wk() {
    return Fa().memoizedState;
  }
  function wm(n, r, o, u) {
    var c = Vi();
    qt.flags |= n, c.memoizedState = Id(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function rh(n, r, o, u) {
    var c = Fa();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (Un !== null) {
      var d = Un.memoizedState;
      if (p = d.destroy, u !== null && Cb(u, d.deps)) {
        c.memoizedState = Id(r, o, p, u);
        return;
      }
    }
    qt.flags |= n, c.memoizedState = Id(1 | r, o, p, u);
  }
  function pT(n, r) {
    return wm(8390656, 8, n, r);
  }
  function Tb(n, r) {
    return rh(2048, 8, n, r);
  }
  function Bk(n, r) {
    return rh(4, 2, n, r);
  }
  function Xk(n, r) {
    return rh(4, 4, n, r);
  }
  function Jk(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Gk(n, r, o) {
    return o = o != null ? o.concat([n]) : null, rh(4, 4, Jk.bind(null, r, n), o);
  }
  function kb() {
  }
  function qk(n, r) {
    var o = Fa();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Cb(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Kk(n, r) {
    var o = Fa();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Cb(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Zk(n, r, o) {
    return Nu & 21 ? (gi(o, r) || (o = nk(), qt.lanes |= o, Lu |= o, n.baseState = true), r) : (n.baseState && (n.baseState = false, Xr = true), n.memoizedState = o);
  }
  function T3(n, r) {
    var o = _t;
    _t = o !== 0 && 4 > o ? o : 4, n(true);
    var u = KS.transition;
    KS.transition = {};
    try {
      n(false), r();
    } finally {
      _t = o, KS.transition = u;
    }
  }
  function e_() {
    return Fa().memoizedState;
  }
  function k3(n, r, o) {
    var u = kl(n);
    if (o = { lane: u, action: o, hasEagerState: false, eagerState: null, next: null }, t_(n))
      n_(r, o);
    else if (o = Lk(n, r, o, u), o !== null) {
      var c = $r();
      yi(o, n, u, c), r_(o, r, u);
    }
  }
  function _3(n, r, o) {
    var u = kl(n), c = { lane: u, action: o, hasEagerState: false, eagerState: null, next: null };
    if (t_(n))
      n_(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var d = r.lastRenderedState, b = p(d, o);
          if (c.hasEagerState = true, c.eagerState = b, gi(b, d)) {
            var x = r.interleaved;
            x === null ? (c.next = c, Sb(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = Lk(n, r, c, u), o !== null && (c = $r(), yi(o, n, u, c), r_(o, r, u));
    }
  }
  function t_(n) {
    var r = n.alternate;
    return n === qt || r !== null && r === qt;
  }
  function n_(n, r) {
    md = Vm = true;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function r_(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, ib(n, o);
    }
  }
  var Ym = { readContext: Ha, useCallback: mr, useContext: mr, useEffect: mr, useImperativeHandle: mr, useInsertionEffect: mr, useLayoutEffect: mr, useMemo: mr, useReducer: mr, useRef: mr, useState: mr, useDebugValue: mr, useDeferredValue: mr, useTransition: mr, useMutableSource: mr, useSyncExternalStore: mr, useId: mr, unstable_isNewReconciler: false }, O3 = { readContext: Ha, useCallback: function(n, r) {
    return Vi().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: pT, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, wm(4194308, 4, Jk.bind(null, r, n), o);
  }, useLayoutEffect: function(n, r) {
    return wm(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return wm(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Vi();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Vi();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = k3.bind(null, qt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Vi();
    return n = { current: n }, r.memoizedState = n;
  }, useState: dT, useDebugValue: kb, useDeferredValue: function(n) {
    return Vi().memoizedState = n;
  }, useTransition: function() {
    var n = dT(false), r = n[0];
    return n = T3.bind(null, n[1]), Vi().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = qt, c = Vi();
    if (Wt) {
      if (o === void 0)
        throw Error(ne(407));
      o = o();
    } else {
      if (o = r(), Vn === null)
        throw Error(ne(349));
      Nu & 30 || Hk(u, r, o);
    }
    c.memoizedState = o;
    var p = { value: o, getSnapshot: r };
    return c.queue = p, pT(Vk.bind(null, u, p, n), [n]), u.flags |= 2048, Id(9, Fk.bind(null, u, p, o, r), void 0, null), o;
  }, useId: function() {
    var n = Vi(), r = Vn.identifierPrefix;
    if (Wt) {
      var o = Co, u = Do;
      o = (u & ~(1 << 32 - hi(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ld++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = E3++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: false }, N3 = { readContext: Ha, useCallback: qk, useContext: Ha, useEffect: Tb, useImperativeHandle: Gk, useInsertionEffect: Bk, useLayoutEffect: Xk, useMemo: Kk, useReducer: ZS, useRef: Wk, useState: function() {
    return ZS(Ud);
  }, useDebugValue: kb, useDeferredValue: function(n) {
    var r = Fa();
    return Zk(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = ZS(Ud)[0], r = Fa().memoizedState;
    return [n, r];
  }, useMutableSource: jk, useSyncExternalStore: Pk, useId: e_, unstable_isNewReconciler: false }, L3 = { readContext: Ha, useCallback: qk, useContext: Ha, useEffect: Tb, useImperativeHandle: Gk, useInsertionEffect: Bk, useLayoutEffect: Xk, useMemo: Kk, useReducer: e1, useRef: Wk, useState: function() {
    return e1(Ud);
  }, useDebugValue: kb, useDeferredValue: function(n) {
    var r = Fa();
    return Un === null ? r.memoizedState = n : Zk(r, Un.memoizedState, n);
  }, useTransition: function() {
    var n = e1(Ud)[0], r = Fa().memoizedState;
    return [n, r];
  }, useMutableSource: jk, useSyncExternalStore: Pk, useId: e_, unstable_isNewReconciler: false };
  function fc(n, r) {
    try {
      var o = "", u = r;
      do
        o += uj(u), u = u.return;
      while (u);
      var c = o;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function t1(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function A1(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var U3 = typeof WeakMap == "function" ? WeakMap : Map;
  function a_(n, r, o) {
    o = Ro(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Wm || (Wm = true, B1 = u), A1(n, r);
    }, o;
  }
  function i_(n, r, o) {
    o = Ro(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        A1(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
      A1(n, r), typeof u != "function" && (Tl === null ? Tl = /* @__PURE__ */ new Set([this]) : Tl.add(this));
      var d = r.stack;
      this.componentDidCatch(r.value, { componentStack: d !== null ? d : "" });
    }), o;
  }
  function vT(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new U3();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = B3.bind(null, n, r, o), r.then(n, n));
  }
  function mT(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : true), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function hT(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ro(-1, 1), r.tag = 2, El(o, r, 1))), o.lanes |= 1), n);
  }
  var I3 = Oo.ReactCurrentOwner, Xr = false;
  function Ir(n, r, o, u) {
    r.child = n === null ? Ak(r, null, o, u) : sc(r, n.child, o, u);
  }
  function yT(n, r, o, u, c) {
    o = o.render;
    var p = r.ref;
    return ac(r, c), u = Rb(n, r, o, u, p, c), o = Eb(), n !== null && !Xr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, _o(n, r, c)) : (Wt && o && pb(r), r.flags |= 1, Ir(n, r, u, c), r.child);
  }
  function gT(n, r, o, u, c) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" && !Mb(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = p, o_(n, r, p, u, c)) : (n = Rm(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var d = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Ed, o(d, u) && n.ref === r.ref)
        return _o(n, r, c);
    }
    return r.flags |= 1, n = _l(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function o_(n, r, o, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (Ed(p, u) && n.ref === r.ref)
        if (Xr = false, r.pendingProps = u = p, (n.lanes & c) !== 0)
          n.flags & 131072 && (Xr = true);
        else
          return r.lanes = n.lanes, _o(n, r, c);
    }
    return z1(n, r, o, u, c);
  }
  function l_(n, r, o) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ht(Zs, ha), ha |= o;
      else {
        if (!(o & 1073741824))
          return n = p !== null ? p.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ht(Zs, ha), ha |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : o, Ht(Zs, ha), ha |= u;
      }
    else
      p !== null ? (u = p.baseLanes | o, r.memoizedState = null) : u = o, Ht(Zs, ha), ha |= u;
    return Ir(n, r, c, o), r.child;
  }
  function u_(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function z1(n, r, o, u, c) {
    var p = Gr(o) ? _u : gr.current;
    return p = lc(r, p), ac(r, c), o = Rb(n, r, o, u, p, c), u = Eb(), n !== null && !Xr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, _o(n, r, c)) : (Wt && u && pb(r), r.flags |= 1, Ir(n, r, o, c), r.child);
  }
  function ST(n, r, o, u, c) {
    if (Gr(o)) {
      var p = true;
      Mm(r);
    } else
      p = false;
    if (ac(r, c), r.stateNode === null)
      xm(n, r), $k(r, o, u), M1(r, o, u, c), u = true;
    else if (n === null) {
      var d = r.stateNode, b = r.memoizedProps;
      d.props = b;
      var x = d.context, T = o.contextType;
      typeof T == "object" && T !== null ? T = Ha(T) : (T = Gr(o) ? _u : gr.current, T = lc(r, T));
      var V = o.getDerivedStateFromProps, U = typeof V == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      U || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b !== u || x !== T) && cT(r, d, u, T), yl = false;
      var j = r.memoizedState;
      d.state = j, Hm(r, u, d, c), x = r.memoizedState, b !== u || j !== x || Jr.current || yl ? (typeof V == "function" && ($1(r, o, V, u), x = r.memoizedState), (b = yl || sT(r, o, b, u, j, x, T)) ? (U || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = x), d.props = u, d.state = x, d.context = T, u = b) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), u = false);
    } else {
      d = r.stateNode, Uk(n, r), b = r.memoizedProps, T = r.type === r.elementType ? b : pi(r.type, b), d.props = T, U = r.pendingProps, j = d.context, x = o.contextType, typeof x == "object" && x !== null ? x = Ha(x) : (x = Gr(o) ? _u : gr.current, x = lc(r, x));
      var H = o.getDerivedStateFromProps;
      (V = typeof H == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b !== U || j !== x) && cT(r, d, u, x), yl = false, j = r.memoizedState, d.state = j, Hm(r, u, d, c);
      var J = r.memoizedState;
      b !== U || j !== J || Jr.current || yl ? (typeof H == "function" && ($1(r, o, H, u), J = r.memoizedState), (T = yl || sT(r, o, T, u, j, J, x) || false) ? (V || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(u, J, x), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(u, J, x)), typeof d.componentDidUpdate == "function" && (r.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || b === n.memoizedProps && j === n.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && j === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = J), d.props = u, d.state = J, d.context = x, u = T) : (typeof d.componentDidUpdate != "function" || b === n.memoizedProps && j === n.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && j === n.memoizedState || (r.flags |= 1024), u = false);
    }
    return j1(n, r, o, u, p, c);
  }
  function j1(n, r, o, u, c, p) {
    u_(n, r);
    var d = (r.flags & 128) !== 0;
    if (!u && !d)
      return c && aT(r, o, false), _o(n, r, p);
    u = r.stateNode, I3.current = r;
    var b = d && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && d ? (r.child = sc(r, n.child, null, p), r.child = sc(r, null, b, p)) : Ir(n, r, b, p), r.memoizedState = u.state, c && aT(r, o, true), r.child;
  }
  function s_(n) {
    var r = n.stateNode;
    r.pendingContext ? rT(n, r.pendingContext, r.pendingContext !== r.context) : r.context && rT(n, r.context, false), wb(n, r.containerInfo);
  }
  function bT(n, r, o, u, c) {
    return uc(), mb(c), r.flags |= 256, Ir(n, r, o, u), r.child;
  }
  var P1 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function H1(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function c_(n, r, o) {
    var u = r.pendingProps, c = Gt.current, p = false, d = (r.flags & 128) !== 0, b;
    if ((b = d) || (b = n !== null && n.memoizedState === null ? false : (c & 2) !== 0), b ? (p = true, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ht(Gt, c & 1), n === null)
      return U1(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (d = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, d = { mode: "hidden", children: d }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = d) : p = oh(d, u, 0, null), n = ku(n, u, o, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = H1(o), r.memoizedState = P1, n) : _b(r, d));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null))
      return $3(n, r, d, u, b, c, o);
    if (p) {
      p = u.fallback, d = r.mode, c = n.child, b = c.sibling;
      var x = { mode: "hidden", children: u.children };
      return !(d & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = x, r.deletions = null) : (u = _l(c, x), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? p = _l(b, p) : (p = ku(p, d, o, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, d = n.child.memoizedState, d = d === null ? H1(o) : { baseLanes: d.baseLanes | o, cachePool: null, transitions: d.transitions }, p.memoizedState = d, p.childLanes = n.childLanes & ~o, r.memoizedState = P1, u;
    }
    return p = n.child, n = p.sibling, u = _l(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function _b(n, r) {
    return r = oh({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function pm(n, r, o, u) {
    return u !== null && mb(u), sc(r, n.child, null, o), n = _b(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function $3(n, r, o, u, c, p, d) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = t1(Error(ne(422))), pm(n, r, d, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = oh({ mode: "visible", children: u.children }, c, 0, null), p = ku(p, c, d, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && sc(r, n.child, null, d), r.child.memoizedState = H1(d), r.memoizedState = P1, p);
    if (!(r.mode & 1))
      return pm(n, r, d, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var b = u.dgst;
      return u = b, p = Error(ne(419)), u = t1(p, u, void 0), pm(n, r, d, u);
    }
    if (b = (d & n.childLanes) !== 0, Xr || b) {
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
        c = c & (u.suspendedLanes | d) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, ko(n, c), yi(u, n, c, -1));
      }
      return $b(), u = t1(Error(ne(421))), pm(n, r, d, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = X3.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, ya = Rl(c.nextSibling), ga = r, Wt = true, mi = null, n !== null && (Aa[za++] = Do, Aa[za++] = Co, Aa[za++] = Ou, Do = n.id, Co = n.overflow, Ou = r), r = _b(r, u.children), r.flags |= 4096, r);
  }
  function wT(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), I1(n.return, r, o);
  }
  function n1(n, r, o, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = c);
  }
  function f_(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (Ir(n, r, u.children, o), u = Gt.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && wT(n, o, r);
            else if (n.tag === 19)
              wT(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Ht(Gt, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; )
            n = o.alternate, n !== null && Fm(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), n1(r, false, c, o, p);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Fm(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          n1(r, true, o, null, p);
          break;
        case "together":
          n1(r, false, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xm(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function _o(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Lu |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(ne(153));
    if (r.child !== null) {
      for (n = r.child, o = _l(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = _l(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function M3(n, r, o) {
    switch (r.tag) {
      case 3:
        s_(r), uc();
        break;
      case 5:
        zk(r);
        break;
      case 1:
        Gr(r.type) && Mm(r);
        break;
      case 4:
        wb(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Ht(jm, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ht(Gt, Gt.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? c_(n, r, o) : (Ht(Gt, Gt.current & 1), n = _o(n, r, o), n !== null ? n.sibling : null);
        Ht(Gt, Gt.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return f_(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ht(Gt, Gt.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, l_(n, r, o);
    }
    return _o(n, r, o);
  }
  var d_, F1, p_, v_;
  d_ = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
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
  F1 = function() {
  };
  p_ = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Eu(Wi.current);
      var p = null;
      switch (o) {
        case "input":
          c = c1(n, c), u = c1(n, u), p = [];
          break;
        case "select":
          c = Kt({}, c, { value: void 0 }), u = Kt({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = p1(n, c), u = p1(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Im);
      }
      m1(o, u);
      var d;
      o = null;
      for (T in c)
        if (!u.hasOwnProperty(T) && c.hasOwnProperty(T) && c[T] != null)
          if (T === "style") {
            var b = c[T];
            for (d in b)
              b.hasOwnProperty(d) && (o || (o = {}), o[d] = "");
          } else
            T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (Sd.hasOwnProperty(T) ? p || (p = []) : (p = p || []).push(T, null));
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
            T === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, b = b ? b.__html : void 0, x != null && b !== x && (p = p || []).push(T, x)) : T === "children" ? typeof x != "string" && typeof x != "number" || (p = p || []).push(T, "" + x) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (Sd.hasOwnProperty(T) ? (x != null && T === "onScroll" && Vt("scroll", n), p || b === x || (p = [])) : (p = p || []).push(T, x));
      }
      o && (p = p || []).push("style", o);
      var T = p;
      (r.updateQueue = T) && (r.flags |= 4);
    }
  };
  v_ = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function rd(n, r) {
    if (!Wt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function hr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function A3(n, r, o) {
    var u = r.pendingProps;
    switch (vb(r), r.tag) {
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
        return Gr(r.type) && $m(), hr(r), null;
      case 3:
        return u = r.stateNode, cc(), Yt(Jr), Yt(gr), Db(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (fm(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, mi !== null && (G1(mi), mi = null))), F1(n, r), hr(r), null;
      case 5:
        xb(r);
        var c = Eu(Nd.current);
        if (o = r.type, n !== null && r.stateNode != null)
          p_(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(ne(166));
            return hr(r), null;
          }
          if (n = Eu(Wi.current), fm(r)) {
            u = r.stateNode, o = r.type;
            var p = r.memoizedProps;
            switch (u[Yi] = r, u[_d] = p, n = (r.mode & 1) !== 0, o) {
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
                for (c = 0; c < sd.length; c++)
                  Vt(sd[c], u);
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
                _E(u, p), Vt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Vt("invalid", u);
                break;
              case "textarea":
                NE(u, p), Vt("invalid", u);
            }
            m1(o, p), c = null;
            for (var d in p)
              if (p.hasOwnProperty(d)) {
                var b = p[d];
                d === "children" ? typeof b == "string" ? u.textContent !== b && (p.suppressHydrationWarning !== true && cm(u.textContent, b, n), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (p.suppressHydrationWarning !== true && cm(u.textContent, b, n), c = ["children", "" + b]) : Sd.hasOwnProperty(d) && b != null && d === "onScroll" && Vt("scroll", u);
              }
            switch (o) {
              case "input":
                Kv(u), OE(u, p, true);
                break;
              case "textarea":
                Kv(u), LE(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Im);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            d = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = HT(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = d.createElement("div"), n.innerHTML = "<script></script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = d.createElement(o, { is: u.is }) : (n = d.createElement(o), o === "select" && (d = n, u.multiple ? d.multiple = true : u.size && (d.size = u.size))) : n = d.createElementNS(n, o), n[Yi] = r, n[_d] = u, d_(n, r, false, false), r.stateNode = n;
            e: {
              switch (d = h1(o, u), o) {
                case "dialog":
                  Vt("cancel", n), Vt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Vt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < sd.length; c++)
                    Vt(sd[c], n);
                  c = u;
                  break;
                case "source":
                  Vt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Vt("error", n), Vt("load", n), c = u;
                  break;
                case "details":
                  Vt("toggle", n), c = u;
                  break;
                case "input":
                  _E(n, u), c = c1(n, u), Vt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = Kt({}, u, { value: void 0 }), Vt("invalid", n);
                  break;
                case "textarea":
                  NE(n, u), c = p1(n, u), Vt("invalid", n);
                  break;
                default:
                  c = u;
              }
              m1(o, c), b = c;
              for (p in b)
                if (b.hasOwnProperty(p)) {
                  var x = b[p];
                  p === "style" ? YT(n, x) : p === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && FT(n, x)) : p === "children" ? typeof x == "string" ? (o !== "textarea" || x !== "") && bd(n, x) : typeof x == "number" && bd(n, "" + x) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Sd.hasOwnProperty(p) ? x != null && p === "onScroll" && Vt("scroll", n) : x != null && Z1(n, p, x, d));
                }
              switch (o) {
                case "input":
                  Kv(n), OE(n, u, false);
                  break;
                case "textarea":
                  Kv(n), LE(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Ol(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? ec(n, !!u.multiple, p, false) : u.defaultValue != null && ec(n, !!u.multiple, u.defaultValue, true);
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Im);
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
        if (n && r.stateNode != null)
          v_(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(ne(166));
          if (o = Eu(Nd.current), Eu(Wi.current), fm(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Yi] = r, (p = u.nodeValue !== o) && (n = ga, n !== null))
              switch (n.tag) {
                case 3:
                  cm(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== true && cm(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Yi] = r, r.stateNode = u;
        }
        return hr(r), null;
      case 13:
        if (Yt(Gt), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Wt && ya !== null && r.mode & 1 && !(r.flags & 128))
            Nk(), uc(), r.flags |= 98560, p = false;
          else if (p = fm(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(ne(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(ne(317));
              p[Yi] = r;
            } else
              uc(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            hr(r), p = false;
          } else
            mi !== null && (G1(mi), mi = null), p = true;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Gt.current & 1 ? In === 0 && (In = 3) : $b())), r.updateQueue !== null && (r.flags |= 4), hr(r), null);
      case 4:
        return cc(), F1(n, r), n === null && Td(r.stateNode.containerInfo), hr(r), null;
      case 10:
        return gb(r.type._context), hr(r), null;
      case 17:
        return Gr(r.type) && $m(), hr(r), null;
      case 19:
        if (Yt(Gt), p = r.memoizedState, p === null)
          return hr(r), null;
        if (u = (r.flags & 128) !== 0, d = p.rendering, d === null)
          if (u)
            rd(p, false);
          else {
            if (In !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (d = Fm(n), d !== null) {
                  for (r.flags |= 128, rd(p, false), u = d.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    p = o, n = u, p.flags &= 14680066, d = p.alternate, d === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = d.childLanes, p.lanes = d.lanes, p.child = d.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = d.memoizedProps, p.memoizedState = d.memoizedState, p.updateQueue = d.updateQueue, p.type = d.type, n = d.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Ht(Gt, Gt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && cn() > dc && (r.flags |= 128, u = true, rd(p, false), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Fm(d), n !== null) {
              if (r.flags |= 128, u = true, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), rd(p, true), p.tail === null && p.tailMode === "hidden" && !d.alternate && !Wt)
                return hr(r), null;
            } else
              2 * cn() - p.renderingStartTime > dc && o !== 1073741824 && (r.flags |= 128, u = true, rd(p, false), r.lanes = 4194304);
          p.isBackwards ? (d.sibling = r.child, r.child = d) : (o = p.last, o !== null ? o.sibling = d : r.child = d, p.last = d);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = cn(), r.sibling = null, o = Gt.current, Ht(Gt, u ? o & 1 | 2 : o & 1), r) : (hr(r), null);
      case 22:
      case 23:
        return Ib(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ha & 1073741824 && (hr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : hr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(ne(156, r.tag));
  }
  function z3(n, r) {
    switch (vb(r), r.tag) {
      case 1:
        return Gr(r.type) && $m(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return cc(), Yt(Jr), Yt(gr), Db(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xb(r), null;
      case 13:
        if (Yt(Gt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(ne(340));
          uc();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Yt(Gt), null;
      case 4:
        return cc(), null;
      case 10:
        return gb(r.type._context), null;
      case 22:
      case 23:
        return Ib(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vm = false, yr = false, j3 = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Ks(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          an(n, r, u);
        }
      else
        o.current = null;
  }
  function V1(n, r, o) {
    try {
      o();
    } catch (u) {
      an(n, r, u);
    }
  }
  var xT = false;
  function P3(n, r) {
    if (E1 = Nm, n = gk(), db(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
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
            var d = 0, b = -1, x = -1, T = 0, V = 0, U = n, j = null;
            t:
              for (; ; ) {
                for (var H; U !== o || c !== 0 && U.nodeType !== 3 || (b = d + c), U !== p || u !== 0 && U.nodeType !== 3 || (x = d + u), U.nodeType === 3 && (d += U.nodeValue.length), (H = U.firstChild) !== null; )
                  j = U, U = H;
                for (; ; ) {
                  if (U === n)
                    break t;
                  if (j === o && ++T === c && (b = d), j === p && ++V === u && (x = d), (H = U.nextSibling) !== null)
                    break;
                  U = j, j = U.parentNode;
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
    for (T1 = { focusedElem: n, selectionRange: o }, Nm = false, ge = r; ge !== null; )
      if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ge = n;
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
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
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
          if (n = r.sibling, n !== null) {
            n.return = r.return, ge = n;
            break;
          }
          ge = r.return;
        }
    return J = xT, xT = false, J;
  }
  function hd(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && V1(r, o, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function ah(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Y1(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function m_(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, m_(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Yi], delete r[_d], delete r[O1], delete r[x3], delete r[D3])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function h_(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function DT(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || h_(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Q1(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Im));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Q1(n, r, o), n = n.sibling; n !== null; )
        Q1(n, r, o), n = n.sibling;
  }
  function W1(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (W1(n, r, o), n = n.sibling; n !== null; )
        W1(n, r, o), n = n.sibling;
  }
  var nr = null, vi = false;
  function ml(n, r, o) {
    for (o = o.child; o !== null; )
      y_(n, r, o), o = o.sibling;
  }
  function y_(n, r, o) {
    if (Qi && typeof Qi.onCommitFiberUnmount == "function")
      try {
        Qi.onCommitFiberUnmount(Gm, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        yr || Ks(o, r);
      case 6:
        var u = nr, c = vi;
        nr = null, ml(n, r, o), nr = u, vi = c, nr !== null && (vi ? (n = nr, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : nr.removeChild(o.stateNode));
        break;
      case 18:
        nr !== null && (vi ? (n = nr, o = o.stateNode, n.nodeType === 8 ? JS(n.parentNode, o) : n.nodeType === 1 && JS(n, o), Cd(n)) : JS(nr, o.stateNode));
        break;
      case 4:
        u = nr, c = vi, nr = o.stateNode.containerInfo, vi = true, ml(n, r, o), nr = u, vi = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, d = p.destroy;
            p = p.tag, d !== void 0 && (p & 2 || p & 4) && V1(o, r, d), c = c.next;
          } while (c !== u);
        }
        ml(n, r, o);
        break;
      case 1:
        if (!yr && (Ks(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (b) {
            an(o, r, b);
          }
        ml(n, r, o);
        break;
      case 21:
        ml(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (yr = (u = yr) || o.memoizedState !== null, ml(n, r, o), yr = u) : ml(n, r, o);
        break;
      default:
        ml(n, r, o);
    }
  }
  function CT(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new j3()), r.forEach(function(u) {
        var c = J3.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function di(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var c = o[u];
        try {
          var p = n, d = r, b = d;
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
          y_(p, d, c), nr = null, vi = false;
          var x = c.alternate;
          x !== null && (x.return = null), c.return = null;
        } catch (T) {
          an(c, r, T);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        g_(r, n), r = r.sibling;
  }
  function g_(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (di(r, n), Fi(n), u & 4) {
          try {
            hd(3, n, n.return), ah(3, n);
          } catch (ie) {
            an(n, n.return, ie);
          }
          try {
            hd(5, n, n.return);
          } catch (ie) {
            an(n, n.return, ie);
          }
        }
        break;
      case 1:
        di(r, n), Fi(n), u & 512 && o !== null && Ks(o, o.return);
        break;
      case 5:
        if (di(r, n), Fi(n), u & 512 && o !== null && Ks(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            bd(c, "");
          } catch (ie) {
            an(n, n.return, ie);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, d = o !== null ? o.memoizedProps : p, b = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null)
            try {
              b === "input" && p.type === "radio" && p.name != null && jT(c, p), h1(b, d);
              var T = h1(b, p);
              for (d = 0; d < x.length; d += 2) {
                var V = x[d], U = x[d + 1];
                V === "style" ? YT(c, U) : V === "dangerouslySetInnerHTML" ? FT(c, U) : V === "children" ? bd(c, U) : Z1(c, V, U, T);
              }
              switch (b) {
                case "input":
                  f1(c, p);
                  break;
                case "textarea":
                  PT(c, p);
                  break;
                case "select":
                  var j = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var H = p.value;
                  H != null ? ec(c, !!p.multiple, H, false) : j !== !!p.multiple && (p.defaultValue != null ? ec(c, !!p.multiple, p.defaultValue, true) : ec(c, !!p.multiple, p.multiple ? [] : "", false));
              }
              c[_d] = p;
            } catch (ie) {
              an(n, n.return, ie);
            }
        }
        break;
      case 6:
        if (di(r, n), Fi(n), u & 4) {
          if (n.stateNode === null)
            throw Error(ne(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (ie) {
            an(n, n.return, ie);
          }
        }
        break;
      case 3:
        if (di(r, n), Fi(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Cd(r.containerInfo);
          } catch (ie) {
            an(n, n.return, ie);
          }
        break;
      case 4:
        di(r, n), Fi(n);
        break;
      case 13:
        di(r, n), Fi(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (Lb = cn())), u & 4 && CT(n);
        break;
      case 22:
        if (V = o !== null && o.memoizedState !== null, n.mode & 1 ? (yr = (T = yr) || V, di(r, n), yr = T) : di(r, n), Fi(n), u & 8192) {
          if (T = n.memoizedState !== null, (n.stateNode.isHidden = T) && !V && n.mode & 1)
            for (ge = n, V = n.child; V !== null; ) {
              for (U = ge = V; ge !== null; ) {
                switch (j = ge, H = j.child, j.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hd(4, j, j.return);
                    break;
                  case 1:
                    Ks(j, j.return);
                    var J = j.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      u = j, o = j.return;
                      try {
                        r = u, J.props = r.memoizedProps, J.state = r.memoizedState, J.componentWillUnmount();
                      } catch (ie) {
                        an(u, o, ie);
                      }
                    }
                    break;
                  case 5:
                    Ks(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      ET(U);
                      continue;
                    }
                }
                H !== null ? (H.return = j, ge = H) : ET(U);
              }
              V = V.sibling;
            }
          e:
            for (V = null, U = n; ; ) {
              if (U.tag === 5) {
                if (V === null) {
                  V = U;
                  try {
                    c = U.stateNode, T ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (b = U.stateNode, x = U.memoizedProps.style, d = x != null && x.hasOwnProperty("display") ? x.display : null, b.style.display = VT("display", d));
                  } catch (ie) {
                    an(n, n.return, ie);
                  }
                }
              } else if (U.tag === 6) {
                if (V === null)
                  try {
                    U.stateNode.nodeValue = T ? "" : U.memoizedProps;
                  } catch (ie) {
                    an(n, n.return, ie);
                  }
              } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === n) && U.child !== null) {
                U.child.return = U, U = U.child;
                continue;
              }
              if (U === n)
                break e;
              for (; U.sibling === null; ) {
                if (U.return === null || U.return === n)
                  break e;
                V === U && (V = null), U = U.return;
              }
              V === U && (V = null), U.sibling.return = U.return, U = U.sibling;
            }
        }
        break;
      case 19:
        di(r, n), Fi(n), u & 4 && CT(n);
        break;
      case 21:
        break;
      default:
        di(r, n), Fi(n);
    }
  }
  function Fi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (h_(o)) {
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
            u.flags & 32 && (bd(c, ""), u.flags &= -33);
            var p = DT(n);
            W1(n, p, c);
            break;
          case 3:
          case 4:
            var d = u.stateNode.containerInfo, b = DT(n);
            Q1(n, b, d);
            break;
          default:
            throw Error(ne(161));
        }
      } catch (x) {
        an(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function H3(n, r, o) {
    ge = n, S_(n, r, o);
  }
  function S_(n, r, o) {
    for (var u = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, p = c.child;
      if (c.tag === 22 && u) {
        var d = c.memoizedState !== null || vm;
        if (!d) {
          var b = c.alternate, x = b !== null && b.memoizedState !== null || yr;
          b = vm;
          var T = yr;
          if (vm = d, (yr = x) && !T)
            for (ge = c; ge !== null; )
              d = ge, x = d.child, d.tag === 22 && d.memoizedState !== null ? TT(c) : x !== null ? (x.return = d, ge = x) : TT(c);
          for (; p !== null; )
            ge = p, S_(p, r, o), p = p.sibling;
          ge = c, vm = b, yr = T;
        }
        RT(n, r, o);
      } else
        c.subtreeFlags & 8772 && p !== null ? (p.return = c, ge = p) : RT(n, r, o);
    }
  }
  function RT(n) {
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
                yr || ah(5, r);
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
                p !== null && uT(r, p, u);
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
                  uT(r, d, o);
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
                      U !== null && Cd(U);
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
          yr || r.flags & 512 && Y1(r);
        } catch (j) {
          an(r, r.return, j);
        }
      }
      if (r === n) {
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
  function ET(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
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
  function TT(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              ah(4, r);
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
              Y1(r);
            } catch (x) {
              an(r, p, x);
            }
            break;
          case 5:
            var d = r.return;
            try {
              Y1(r);
            } catch (x) {
              an(r, d, x);
            }
        }
      } catch (x) {
        an(r, r.return, x);
      }
      if (r === n) {
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
  var F3 = Math.ceil, Qm = Oo.ReactCurrentDispatcher, Ob = Oo.ReactCurrentOwner, Pa = Oo.ReactCurrentBatchConfig, bt = 0, Vn = null, gn = null, rr = 0, ha = 0, Zs = Ul(0), In = 0, $d = null, Lu = 0, ih = 0, Nb = 0, yd = null, Br = null, Lb = 0, dc = 1 / 0, wo = null, Wm = false, B1 = null, Tl = null, mm = false, wl = null, Bm = 0, gd = 0, X1 = null, Dm = -1, Cm = 0;
  function $r() {
    return bt & 6 ? cn() : Dm !== -1 ? Dm : Dm = cn();
  }
  function kl(n) {
    return n.mode & 1 ? bt & 2 && rr !== 0 ? rr & -rr : R3.transition !== null ? (Cm === 0 && (Cm = nk()), Cm) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : sk(n.type)), n) : 1;
  }
  function yi(n, r, o, u) {
    if (50 < gd)
      throw gd = 0, X1 = null, Error(ne(185));
    Md(n, o, u), (!(bt & 2) || n !== Vn) && (n === Vn && (!(bt & 2) && (ih |= o), In === 4 && Sl(n, rr)), qr(n, u), o === 1 && bt === 0 && !(r.mode & 1) && (dc = cn() + 500, th && Il()));
  }
  function qr(n, r) {
    var o = n.callbackNode;
    Tj(n, r);
    var u = Om(n, n === Vn ? rr : 0);
    if (u === 0)
      o !== null && $E(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && $E(o), r === 1)
        n.tag === 0 ? C3(kT.bind(null, n)) : kk(kT.bind(null, n)), b3(function() {
          !(bt & 6) && Il();
        }), o = null;
      else {
        switch (rk(u)) {
          case 1:
            o = ab;
            break;
          case 4:
            o = ek;
            break;
          case 16:
            o = _m;
            break;
          case 536870912:
            o = tk;
            break;
          default:
            o = _m;
        }
        o = T_(o, b_.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function b_(n, r) {
    if (Dm = -1, Cm = 0, bt & 6)
      throw Error(ne(327));
    var o = n.callbackNode;
    if (ic() && n.callbackNode !== o)
      return null;
    var u = Om(n, n === Vn ? rr : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Xm(n, u);
    else {
      r = u;
      var c = bt;
      bt |= 2;
      var p = x_();
      (Vn !== n || rr !== r) && (wo = null, dc = cn() + 500, Tu(n, r));
      do
        try {
          Q3();
          break;
        } catch (b) {
          w_(n, b);
        }
      while (true);
      yb(), Qm.current = p, bt = c, gn !== null ? r = 0 : (Vn = null, rr = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (c = w1(n), c !== 0 && (u = c, r = J1(n, c))), r === 1)
        throw o = $d, Tu(n, 0), Sl(n, u), qr(n, cn()), o;
      if (r === 6)
        Sl(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !V3(c) && (r = Xm(n, u), r === 2 && (p = w1(n), p !== 0 && (u = p, r = J1(n, p))), r === 1))
          throw o = $d, Tu(n, 0), Sl(n, u), qr(n, cn()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(ne(345));
          case 2:
            Du(n, Br, wo);
            break;
          case 3:
            if (Sl(n, u), (u & 130023424) === u && (r = Lb + 500 - cn(), 10 < r)) {
              if (Om(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                $r(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = _1(Du.bind(null, n, Br, wo), r);
              break;
            }
            Du(n, Br, wo);
            break;
          case 4:
            if (Sl(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var d = 31 - hi(u);
              p = 1 << d, d = r[d], d > c && (c = d), u &= ~p;
            }
            if (u = c, u = cn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * F3(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = _1(Du.bind(null, n, Br, wo), u);
              break;
            }
            Du(n, Br, wo);
            break;
          case 5:
            Du(n, Br, wo);
            break;
          default:
            throw Error(ne(329));
        }
      }
    }
    return qr(n, cn()), n.callbackNode === o ? b_.bind(null, n) : null;
  }
  function J1(n, r) {
    var o = yd;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = Xm(n, r), n !== 2 && (r = Br, Br = o, r !== null && G1(r)), n;
  }
  function G1(n) {
    Br === null ? Br = n : Br.push.apply(Br, n);
  }
  function V3(n) {
    for (var r = n; ; ) {
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
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return true;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return true;
  }
  function Sl(n, r) {
    for (r &= ~Nb, r &= ~ih, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - hi(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function kT(n) {
    if (bt & 6)
      throw Error(ne(327));
    ic();
    var r = Om(n, 0);
    if (!(r & 1))
      return qr(n, cn()), null;
    var o = Xm(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = w1(n);
      u !== 0 && (r = u, o = J1(n, u));
    }
    if (o === 1)
      throw o = $d, Tu(n, 0), Sl(n, r), qr(n, cn()), o;
    if (o === 6)
      throw Error(ne(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Du(n, Br, wo), qr(n, cn()), null;
  }
  function Ub(n, r) {
    var o = bt;
    bt |= 1;
    try {
      return n(r);
    } finally {
      bt = o, bt === 0 && (dc = cn() + 500, th && Il());
    }
  }
  function Uu(n) {
    wl !== null && wl.tag === 0 && !(bt & 6) && ic();
    var r = bt;
    bt |= 1;
    var o = Pa.transition, u = _t;
    try {
      if (Pa.transition = null, _t = 1, n)
        return n();
    } finally {
      _t = u, Pa.transition = o, bt = r, !(bt & 6) && Il();
    }
  }
  function Ib() {
    ha = Zs.current, Yt(Zs);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, S3(o)), gn !== null)
      for (o = gn.return; o !== null; ) {
        var u = o;
        switch (vb(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && $m();
            break;
          case 3:
            cc(), Yt(Jr), Yt(gr), Db();
            break;
          case 5:
            xb(u);
            break;
          case 4:
            cc();
            break;
          case 13:
            Yt(Gt);
            break;
          case 19:
            Yt(Gt);
            break;
          case 10:
            gb(u.type._context);
            break;
          case 22:
          case 23:
            Ib();
        }
        o = o.return;
      }
    if (Vn = n, gn = n = _l(n.current, null), rr = ha = r, In = 0, $d = null, Nb = ih = Lu = 0, Br = yd = null, Ru !== null) {
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
    return n;
  }
  function w_(n, r) {
    do {
      var o = gn;
      try {
        if (yb(), bm.current = Ym, Vm) {
          for (var u = qt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Vm = false;
        }
        if (Nu = 0, Fn = Un = qt = null, md = false, Ld = 0, Ob.current = null, o === null || o.return === null) {
          In = 1, $d = r, gn = null;
          break;
        }
        e: {
          var p = n, d = o.return, b = o, x = r;
          if (r = rr, b.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var T = x, V = b, U = V.tag;
            if (!(V.mode & 1) && (U === 0 || U === 11 || U === 15)) {
              var j = V.alternate;
              j ? (V.updateQueue = j.updateQueue, V.memoizedState = j.memoizedState, V.lanes = j.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var H = mT(d);
            if (H !== null) {
              H.flags &= -257, hT(H, d, b, p, r), H.mode & 1 && vT(p, T, r), r = H, x = T;
              var J = r.updateQueue;
              if (J === null) {
                var ie = /* @__PURE__ */ new Set();
                ie.add(x), r.updateQueue = ie;
              } else
                J.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                vT(p, T, r), $b();
                break e;
              }
              x = Error(ne(426));
            }
          } else if (Wt && b.mode & 1) {
            var Ge = mT(d);
            if (Ge !== null) {
              !(Ge.flags & 65536) && (Ge.flags |= 256), hT(Ge, d, b, p, r), mb(fc(x, b));
              break e;
            }
          }
          p = x = fc(x, b), In !== 4 && (In = 2), yd === null ? yd = [p] : yd.push(p), p = d;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var N = a_(p, x, r);
                lT(p, N);
                break e;
              case 1:
                b = x;
                var C = p.type, k = p.stateNode;
                if (!(p.flags & 128) && (typeof C.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Tl === null || !Tl.has(k)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var Q = i_(p, b, r);
                  lT(p, Q);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        C_(o);
      } catch (X) {
        r = X, gn === o && o !== null && (gn = o = o.return);
        continue;
      }
      break;
    } while (true);
  }
  function x_() {
    var n = Qm.current;
    return Qm.current = Ym, n === null ? Ym : n;
  }
  function $b() {
    (In === 0 || In === 3 || In === 2) && (In = 4), Vn === null || !(Lu & 268435455) && !(ih & 268435455) || Sl(Vn, rr);
  }
  function Xm(n, r) {
    var o = bt;
    bt |= 2;
    var u = x_();
    (Vn !== n || rr !== r) && (wo = null, Tu(n, r));
    do
      try {
        Y3();
        break;
      } catch (c) {
        w_(n, c);
      }
    while (true);
    if (yb(), bt = o, Qm.current = u, gn !== null)
      throw Error(ne(261));
    return Vn = null, rr = 0, In;
  }
  function Y3() {
    for (; gn !== null; )
      D_(gn);
  }
  function Q3() {
    for (; gn !== null && !gj(); )
      D_(gn);
  }
  function D_(n) {
    var r = E_(n.alternate, n, ha);
    n.memoizedProps = n.pendingProps, r === null ? C_(n) : gn = r, Ob.current = null;
  }
  function C_(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = z3(o, r), o !== null) {
          o.flags &= 32767, gn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, gn = null;
          return;
        }
      } else if (o = A3(o, r, ha), o !== null) {
        gn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        gn = r;
        return;
      }
      gn = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function Du(n, r, o) {
    var u = _t, c = Pa.transition;
    try {
      Pa.transition = null, _t = 1, W3(n, r, o, u);
    } finally {
      Pa.transition = c, _t = u;
    }
    return null;
  }
  function W3(n, r, o, u) {
    do
      ic();
    while (wl !== null);
    if (bt & 6)
      throw Error(ne(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(ne(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    if (kj(n, p), n === Vn && (gn = Vn = null, rr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || mm || (mm = true, T_(_m, function() {
      return ic(), null;
    })), p = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || p) {
      p = Pa.transition, Pa.transition = null;
      var d = _t;
      _t = 1;
      var b = bt;
      bt |= 4, Ob.current = null, P3(n, o), g_(o, n), v3(T1), Nm = !!E1, T1 = E1 = null, n.current = o, H3(o, n, c), Sj(), bt = b, _t = d, Pa.transition = p;
    } else
      n.current = o;
    if (mm && (mm = false, wl = n, Bm = c), p = n.pendingLanes, p === 0 && (Tl = null), xj(o.stateNode, u), qr(n, cn()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wm)
      throw Wm = false, n = B1, B1 = null, n;
    return Bm & 1 && n.tag !== 0 && ic(), p = n.pendingLanes, p & 1 ? n === X1 ? gd++ : (gd = 0, X1 = n) : gd = 0, Il(), null;
  }
  function ic() {
    if (wl !== null) {
      var n = rk(Bm), r = Pa.transition, o = _t;
      try {
        if (Pa.transition = null, _t = 16 > n ? 16 : n, wl === null)
          var u = false;
        else {
          if (n = wl, wl = null, Bm = 0, bt & 6)
            throw Error(ne(331));
          var c = bt;
          for (bt |= 4, ge = n.current; ge !== null; ) {
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
                        hd(8, V, p);
                    }
                    var U = V.child;
                    if (U !== null)
                      U.return = V, ge = U;
                    else
                      for (; ge !== null; ) {
                        V = ge;
                        var j = V.sibling, H = V.return;
                        if (m_(V), V === T) {
                          ge = null;
                          break;
                        }
                        if (j !== null) {
                          j.return = H, ge = j;
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
                        hd(9, p, p.return);
                    }
                  var N = p.sibling;
                  if (N !== null) {
                    N.return = p.return, ge = N;
                    break e;
                  }
                  ge = p.return;
                }
          }
          var C = n.current;
          for (ge = C; ge !== null; ) {
            d = ge;
            var k = d.child;
            if (d.subtreeFlags & 2064 && k !== null)
              k.return = d, ge = k;
            else
              e:
                for (d = C; ge !== null; ) {
                  if (b = ge, b.flags & 2048)
                    try {
                      switch (b.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ah(9, b);
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
          if (bt = c, Il(), Qi && typeof Qi.onPostCommitFiberRoot == "function")
            try {
              Qi.onPostCommitFiberRoot(Gm, n);
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
  function _T(n, r, o) {
    r = fc(o, r), r = a_(n, r, 1), n = El(n, r, 1), r = $r(), n !== null && (Md(n, 1, r), qr(n, r));
  }
  function an(n, r, o) {
    if (n.tag === 3)
      _T(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          _T(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Tl === null || !Tl.has(u))) {
            n = fc(o, n), n = i_(r, n, 1), r = El(r, n, 1), n = $r(), r !== null && (Md(r, 1, n), qr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function B3(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = $r(), n.pingedLanes |= n.suspendedLanes & o, Vn === n && (rr & o) === o && (In === 4 || In === 3 && (rr & 130023424) === rr && 500 > cn() - Lb ? Tu(n, 0) : Nb |= o), qr(n, r);
  }
  function R_(n, r) {
    r === 0 && (n.mode & 1 ? (r = tm, tm <<= 1, !(tm & 130023424) && (tm = 4194304)) : r = 1);
    var o = $r();
    n = ko(n, r), n !== null && (Md(n, r, o), qr(n, o));
  }
  function X3(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), R_(n, o);
  }
  function J3(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(ne(314));
    }
    u !== null && u.delete(r), R_(n, o);
  }
  var E_;
  E_ = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Jr.current)
        Xr = true;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Xr = false, M3(n, r, o);
        Xr = !!(n.flags & 131072);
      }
    else
      Xr = false, Wt && r.flags & 1048576 && _k(r, zm, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        xm(n, r), n = r.pendingProps;
        var c = lc(r, gr.current);
        ac(r, o), c = Rb(null, r, u, n, c, o);
        var p = Eb();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Gr(u) ? (p = true, Mm(r)) : p = false, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, bb(r), c.updater = nh, r.stateNode = c, c._reactInternals = r, M1(r, u, n, o), r = j1(null, r, u, true, p, o)) : (r.tag = 0, Wt && p && pb(r), Ir(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (xm(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = q3(u), n = pi(u, n), c) {
            case 0:
              r = z1(null, r, u, n, o);
              break e;
            case 1:
              r = ST(null, r, u, n, o);
              break e;
            case 11:
              r = yT(null, r, u, n, o);
              break e;
            case 14:
              r = gT(null, r, u, pi(u.type, n), o);
              break e;
          }
          throw Error(ne(306, u, ""));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), z1(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), ST(n, r, u, c, o);
      case 3:
        e: {
          if (s_(r), n === null)
            throw Error(ne(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, Uk(n, r), Hm(r, u, null, o);
          var d = r.memoizedState;
          if (u = d.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: false, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              c = fc(Error(ne(423)), r), r = bT(n, r, u, o, c);
              break e;
            } else if (u !== c) {
              c = fc(Error(ne(424)), r), r = bT(n, r, u, o, c);
              break e;
            } else
              for (ya = Rl(r.stateNode.containerInfo.firstChild), ga = r, Wt = true, mi = null, o = Ak(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (uc(), u === c) {
              r = _o(n, r, o);
              break e;
            }
            Ir(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return zk(r), n === null && U1(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, d = c.children, k1(u, c) ? d = null : p !== null && k1(u, p) && (r.flags |= 32), u_(n, r), Ir(n, r, d, o), r.child;
      case 6:
        return n === null && U1(r), null;
      case 13:
        return c_(n, r, o);
      case 4:
        return wb(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = sc(r, null, u, o) : Ir(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), yT(n, r, u, c, o);
      case 7:
        return Ir(n, r, r.pendingProps, o), r.child;
      case 8:
        return Ir(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Ir(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, d = c.value, Ht(jm, u._currentValue), u._currentValue = d, p !== null)
            if (gi(p.value, d)) {
              if (p.children === c.children && !Jr.current) {
                r = _o(n, r, o);
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
                      p.lanes |= o, x = p.alternate, x !== null && (x.lanes |= o), I1(p.return, o, r), b.lanes |= o;
                      break;
                    }
                    x = x.next;
                  }
                } else if (p.tag === 10)
                  d = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (d = p.return, d === null)
                    throw Error(ne(341));
                  d.lanes |= o, b = d.alternate, b !== null && (b.lanes |= o), I1(d, o, r), d = p.sibling;
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
          Ir(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, ac(r, o), c = Ha(c), u = u(c), r.flags |= 1, Ir(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = pi(u, r.pendingProps), c = pi(u.type, c), gT(n, r, u, c, o);
      case 15:
        return o_(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), xm(n, r), r.tag = 1, Gr(u) ? (n = true, Mm(r)) : n = false, ac(r, o), $k(r, u, c), M1(r, u, c, o), j1(null, r, u, true, n, o);
      case 19:
        return f_(n, r, o);
      case 22:
        return l_(n, r, o);
    }
    throw Error(ne(156, r.tag));
  };
  function T_(n, r) {
    return ZT(n, r);
  }
  function G3(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, o, u) {
    return new G3(n, r, o, u);
  }
  function Mb(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function q3(n) {
    if (typeof n == "function")
      return Mb(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === tb)
        return 11;
      if (n === nb)
        return 14;
    }
    return 2;
  }
  function _l(n, r) {
    var o = n.alternate;
    return o === null ? (o = ja(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Rm(n, r, o, u, c, p) {
    var d = 2;
    if (u = n, typeof n == "function")
      Mb(n) && (d = 1);
    else if (typeof n == "string")
      d = 5;
    else
      e:
        switch (n) {
          case Vs:
            return ku(o.children, c, p, r);
          case eb:
            d = 8, c |= 8;
            break;
          case o1:
            return n = ja(12, o, r, c | 2), n.elementType = o1, n.lanes = p, n;
          case l1:
            return n = ja(13, o, r, c), n.elementType = l1, n.lanes = p, n;
          case u1:
            return n = ja(19, o, r, c), n.elementType = u1, n.lanes = p, n;
          case MT:
            return oh(o, c, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case IT:
                  d = 10;
                  break e;
                case $T:
                  d = 9;
                  break e;
                case tb:
                  d = 11;
                  break e;
                case nb:
                  d = 14;
                  break e;
                case hl:
                  d = 16, u = null;
                  break e;
              }
            throw Error(ne(130, n == null ? n : typeof n, ""));
        }
    return r = ja(d, o, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function ku(n, r, o, u) {
    return n = ja(7, n, u, r), n.lanes = o, n;
  }
  function oh(n, r, o, u) {
    return n = ja(22, n, u, r), n.elementType = MT, n.lanes = o, n.stateNode = { isHidden: false }, n;
  }
  function r1(n, r, o) {
    return n = ja(6, n, null, r), n.lanes = o, n;
  }
  function a1(n, r, o) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function K3(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = HS(0), this.expirationTimes = HS(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = HS(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ab(n, r, o, u, c, p, d, b, x) {
    return n = new K3(n, r, o, b, x), r === 1 ? (r = 1, p === true && (r |= 8)) : r = 0, p = ja(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bb(p), n;
  }
  function Z3(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Fs, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function k_(n) {
    if (!n)
      return Nl;
    n = n._reactInternals;
    e: {
      if ($u(n) !== n || n.tag !== 1)
        throw Error(ne(170));
      var r = n;
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
    if (n.tag === 1) {
      var o = n.type;
      if (Gr(o))
        return Tk(n, o, r);
    }
    return r;
  }
  function __(n, r, o, u, c, p, d, b, x) {
    return n = Ab(o, u, true, n, c, p, d, b, x), n.context = k_(null), o = n.current, u = $r(), c = kl(o), p = Ro(u, c), p.callback = r ?? null, El(o, p, c), n.current.lanes = c, Md(n, c, u), qr(n, u), n;
  }
  function lh(n, r, o, u) {
    var c = r.current, p = $r(), d = kl(c);
    return o = k_(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ro(p, d), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = El(c, r, d), n !== null && (yi(n, c, d, p), Sm(n, c, d)), d;
  }
  function Jm(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function OT(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function zb(n, r) {
    OT(n, r), (n = n.alternate) && OT(n, r);
  }
  function e4() {
    return null;
  }
  var O_ = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function jb(n) {
    this._internalRoot = n;
  }
  uh.prototype.render = jb.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(ne(409));
    lh(n, r, null, null);
  };
  uh.prototype.unmount = jb.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Uu(function() {
        lh(null, n, null, null);
      }), r[To] = null;
    }
  };
  function uh(n) {
    this._internalRoot = n;
  }
  uh.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ok();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < gl.length && r !== 0 && r < gl[o].priority; o++)
        ;
      gl.splice(o, 0, n), o === 0 && uk(n);
    }
  };
  function Pb(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function sh(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function NT() {
  }
  function t4(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var T = Jm(d);
          p.call(T);
        };
      }
      var d = __(r, u, n, 0, null, false, false, "", NT);
      return n._reactRootContainer = d, n[To] = d.current, Td(n.nodeType === 8 ? n.parentNode : n), Uu(), d;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var T = Jm(x);
        b.call(T);
      };
    }
    var x = Ab(n, 0, false, null, null, false, false, "", NT);
    return n._reactRootContainer = x, n[To] = x.current, Td(n.nodeType === 8 ? n.parentNode : n), Uu(function() {
      lh(r, x, o, u);
    }), x;
  }
  function ch(n, r, o, u, c) {
    var p = o._reactRootContainer;
    if (p) {
      var d = p;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var x = Jm(d);
          b.call(x);
        };
      }
      lh(r, d, n, c);
    } else
      d = t4(o, r, n, c, u);
    return Jm(d);
  }
  ak = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ud(r.pendingLanes);
          o !== 0 && (ib(r, o | 1), qr(r, cn()), !(bt & 6) && (dc = cn() + 500, Il()));
        }
        break;
      case 13:
        Uu(function() {
          var u = ko(n, 1);
          if (u !== null) {
            var c = $r();
            yi(u, n, 1, c);
          }
        }), zb(n, 1);
    }
  };
  ob = function(n) {
    if (n.tag === 13) {
      var r = ko(n, 134217728);
      if (r !== null) {
        var o = $r();
        yi(r, n, 134217728, o);
      }
      zb(n, 134217728);
    }
  };
  ik = function(n) {
    if (n.tag === 13) {
      var r = kl(n), o = ko(n, r);
      if (o !== null) {
        var u = $r();
        yi(o, n, r, u);
      }
      zb(n, r);
    }
  };
  ok = function() {
    return _t;
  };
  lk = function(n, r) {
    var o = _t;
    try {
      return _t = n, r();
    } finally {
      _t = o;
    }
  };
  g1 = function(n, r, o) {
    switch (r) {
      case "input":
        if (f1(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = eh(u);
              if (!c)
                throw Error(ne(90));
              zT(u), f1(u, c);
            }
          }
        }
        break;
      case "textarea":
        PT(n, o);
        break;
      case "select":
        r = o.value, r != null && ec(n, !!o.multiple, r, false);
    }
  };
  BT = Ub;
  XT = Uu;
  var n4 = { usingClientEntryPoint: false, Events: [zd, Bs, eh, QT, WT, Ub] }, ad = { findFiberByHostInstance: Cu, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, r4 = { bundleType: ad.bundleType, version: ad.version, rendererPackageName: ad.rendererPackageName, rendererConfig: ad.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Oo.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = qT(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ad.findFiberByHostInstance || e4, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (id = __REACT_DEVTOOLS_GLOBAL_HOOK__, !id.isDisabled && id.supportsFiber))
    try {
      Gm = id.inject(r4), Qi = id;
    } catch {
    }
  var id;
  wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n4;
  wa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pb(r))
      throw Error(ne(200));
    return Z3(n, r, null, o);
  };
  wa.createRoot = function(n, r) {
    if (!Pb(n))
      throw Error(ne(299));
    var o = false, u = "", c = O_;
    return r != null && (r.unstable_strictMode === true && (o = true), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Ab(n, 1, false, null, null, o, false, u, c), n[To] = r.current, Td(n.nodeType === 8 ? n.parentNode : n), new jb(r);
  };
  wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(ne(188)) : (n = Object.keys(n).join(","), Error(ne(268, n)));
    return n = qT(r), n = n === null ? null : n.stateNode, n;
  };
  wa.flushSync = function(n) {
    return Uu(n);
  };
  wa.hydrate = function(n, r, o) {
    if (!sh(r))
      throw Error(ne(200));
    return ch(null, n, r, true, o);
  };
  wa.hydrateRoot = function(n, r, o) {
    if (!Pb(n))
      throw Error(ne(405));
    var u = o != null && o.hydratedSources || null, c = false, p = "", d = O_;
    if (o != null && (o.unstable_strictMode === true && (c = true), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (d = o.onRecoverableError)), r = __(r, null, n, 1, o ?? null, c, false, p, d), n[To] = r.current, Td(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(o, c);
    return new uh(r);
  };
  wa.render = function(n, r, o) {
    if (!sh(r))
      throw Error(ne(200));
    return ch(null, n, r, false, o);
  };
  wa.unmountComponentAtNode = function(n) {
    if (!sh(n))
      throw Error(ne(40));
    return n._reactRootContainer ? (Uu(function() {
      ch(null, null, n, false, function() {
        n._reactRootContainer = null, n[To] = null;
      });
    }), true) : false;
  };
  wa.unstable_batchedUpdates = Ub;
  wa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!sh(o))
      throw Error(ne(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(ne(38));
    return ch(n, r, o, false, u);
  };
  wa.version = "18.2.0-next-9e3b772b8-20220608";
});
var L_ = yn((xa) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = Ur(), r = MS(), o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, u = false;
    function c(e) {
      u = e;
    }
    function p(e) {
      if (!u) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        b("warn", e, a);
      }
    }
    function d(e) {
      if (!u) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        b("error", e, a);
      }
    }
    function b(e, t, a) {
      {
        var i = o.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var x = 0, T = 1, V = 2, U = 3, j = 4, H = 5, J = 6, ie = 7, Ge = 8, N = 9, C = 10, k = 11, Q = 12, X = 13, re = 14, ee = 15, he = 16, Me = 17, Re = 18, dt = 19, gt = 21, Te = 22, wt = 23, be = 24, Lt = 25, Pe = true, at = false, bn = false, Zt = false, M = false, q = true, Le = false, Qe = false, We = true, ct = true, ft = true, et = /* @__PURE__ */ new Set(), Be = {}, Ot = {};
    function $n(e, t) {
      br(e, t), br(e + "Capture", t);
    }
    function br(e, t) {
      Be[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Be[e] = t;
      {
        var a = e.toLowerCase();
        Ot[a] = e, e === "onDoubleClick" && (Ot.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
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
    function ir(e, t, a, i) {
      if (a !== null && a.type === xr)
        return false;
      switch (typeof t) {
        case "function":
        case "symbol":
          return true;
        case "boolean": {
          if (i)
            return false;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return false;
      }
    }
    function Dt(e, t, a, i) {
      if (t === null || typeof t > "u" || ir(e, t, a, i))
        return true;
      if (i)
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
    function Ct(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Dr || t === Xt || t === jr, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
    function Ca(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        nn(a, t), i.sanitizeURL && Ya("" + a);
        var s = i.attributeName, f = null;
        if (i.type === jr) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? true : Dt(t, a, i, false) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (Dt(t, a, i, false))
            return e.getAttribute(s);
          if (i.type === Xt)
            return a;
          f = e.getAttribute(s);
        }
        return Dt(t, a, i, false) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Si(e, t, a, i) {
      {
        if (!on(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return nn(a, t), l === "" + a ? a : l;
      }
    }
    function Qa(e, t, a, i) {
      var l = Qn(t);
      if (!Qt(t, l, i)) {
        if (Dt(t, a, l, i) && (a = null), i || l === null) {
          if (on(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (nn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var m = l.propertyName;
          if (a === null) {
            var h = l.type;
            e[m] = h === Xt ? false : "";
          } else
            e[m] = a;
          return;
        }
        var S = l.attributeName, w = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var O = l.type, _;
          O === Xt || O === jr && a === true ? _ = "" : (nn(a, S), _ = "" + a, l.sanitizeURL && Ya(_.toString())), w ? e.setAttributeNS(w, S, _) : e.setAttribute(S, _);
        }
      }
    }
    var Ra = Symbol.for("react.element"), na = Symbol.for("react.portal"), ra = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), ae = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), He = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ln = Symbol.for("react.scope"), Ut = Symbol.for("react.debug_trace_mode"), It = Symbol.for("react.offscreen"), An = Symbol.for("react.legacy_hidden"), Ea = Symbol.for("react.cache"), Lo = Symbol.for("react.tracing_marker"), or = Symbol.iterator, yc = "@@iterator";
    function Wa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = or && e[or] || e[yc];
      return typeof t == "function" ? t : null;
    }
    var Fe = Object.assign, wi = 0, Ba, Uo, Io, $o, Mo, Ao, zo;
    function Ml() {
    }
    Ml.__reactDisabledLog = true;
    function ju() {
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
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Ta = i && i[1] || "";
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
      var i;
      aa = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xi.current, Xi.current = null, ju();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var m = z.stack.split(`
`), h = i.stack.split(`
`), S = m.length - 1, w = h.length - 1; S >= 1 && w >= 0 && m[S] !== h[w]; )
            w--;
          for (; S >= 1 && w >= 0; S--, w--)
            if (m[S] !== h[w]) {
              if (S !== 1 || w !== 1)
                do
                  if (S--, w--, w < 0 || m[S] !== h[w]) {
                    var O = `
` + m[S].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && xi.set(e, O), O;
                  }
                while (S >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        aa = false, Xi.current = s, Al(), Error.prepareStackTrace = l;
      }
      var _ = e ? e.displayName || e.name : "", P = _ ? lr(_) : "";
      return typeof e == "function" && xi.set(e, P), P;
    }
    function Pu(e, t, a) {
      return zl(e, true);
    }
    function Di(e, t, a) {
      return zl(e, false);
    }
    function Hu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Xa(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return zl(e, Hu(e));
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
            var i = e, l = i._payload, s = i._init;
            try {
              return Xa(s(l), t, a);
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
        case k:
          return Di(e.type.render);
        case T:
          return Pu(e.type);
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
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ia(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
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
            var i = e.displayName || null;
            return i !== null ? i : ot(e.type) || "Memo";
          case Ce: {
            var l = e, s = l._payload, f = l._init;
            try {
              return ot(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Pl(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
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
          var i = a;
          return Hl(i) + ".Consumer";
        case C:
          var l = a;
          return Hl(l._context) + ".Provider";
        case Re:
          return "DehydratedFragment";
        case k:
          return Pl(a, a.render, "ForwardRef");
        case ie:
          return "Fragment";
        case H:
          return a;
        case j:
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
        case gt:
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
    var Fu = o.ReactDebugCurrentFrame, Cn = null, Ci = false;
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
    function Vu() {
      return Cn === null ? "" : jl(Cn);
    }
    function un() {
      Fu.getCurrentStack = null, Cn = null, Ci = false;
    }
    function zt(e) {
      Fu.getCurrentStack = e === null ? null : Vu, Cn = e, Ci = false;
    }
    function Yu() {
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
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, { configurable: true, get: function() {
          return l.call(this);
        }, set: function(m) {
          xn(m), i = "" + m, s.call(this, m);
        } }), Object.defineProperty(e, t, { enumerable: a.enumerable });
        var f = { getValue: function() {
          return i;
        }, setValue: function(m) {
          xn(m), i = "" + m;
        }, stopTracking: function() {
          Ri(e), delete e[t];
        } };
        return f;
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
      var a = t.getValue(), i = qi(e);
      return i !== a ? (t.setValue(i), true) : false;
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
    var Fo = false, Qu = false, Wu = false, y = false;
    function R(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function v(e, t) {
      var a = e, i = t.checked, l = Fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? a._wrapperState.initialChecked });
      return l;
    }
    function g(e, t) {
      Ho("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Qu && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ja() || "A component", t.type), Qu = true), t.value !== void 0 && t.defaultValue !== void 0 && !Fo && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ja() || "A component", t.type), Fo = true);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = { initialChecked: t.checked != null ? t.checked : t.defaultChecked, initialValue: oa(t.value != null ? t.value : i), controlled: R(t) };
    }
    function D(e, t) {
      var a = e, i = t.checked;
      i != null && Qa(a, "checked", i, false);
    }
    function L(e, t) {
      var a = e;
      {
        var i = R(t);
        !a._wrapperState.controlled && i && !y && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), y = true), a._wrapperState.controlled && !i && !Wu && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Wu = true);
      }
      D(e, t);
      var l = oa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || a.value != l) && (a.value = ur(l)) : a.value !== ur(l) && (a.value = ur(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? se(a, t.type, l) : t.hasOwnProperty("defaultValue") && se(a, t.type, oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function A(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = ur(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function te(e, t) {
      var a = e;
      L(a, t), K(a, t);
    }
    function K(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        nn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var m = kp(f);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f), L(f, m);
          }
        }
      }
    }
    function se(e, t, a) {
      (t !== "number" || Ti(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ur(e._wrapperState.initialValue) : e.defaultValue !== ur(a) && (e.defaultValue = ur(a)));
    }
    var we = false, Ee = false, Oe = false;
    function Ue(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? n.Children.forEach(t.children, function(a) {
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
    function gc(e) {
      {
        Ho("select", e);
        for (var t = 0; t < Yo.length; t++) {
          var a = Yo[t];
          if (e[a] != null) {
            var i = tt(e[a]);
            e.multiple && !i ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Vo()) : !e.multiple && i && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Vo());
          }
        }
      }
    }
    function ka(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, m = 0; m < s.length; m++)
          f["$" + s[m]] = true;
        for (var h = 0; h < l.length; h++) {
          var S = f.hasOwnProperty("$" + l[h].value);
          l[h].selected !== S && (l[h].selected = S), S && i && (l[h].defaultSelected = true);
        }
      } else {
        for (var w = ur(oa(a)), O = null, _ = 0; _ < l.length; _++) {
          if (l[_].value === w) {
            l[_].selected = true, i && (l[_].defaultSelected = true);
            return;
          }
          O === null && !l[_].disabled && (O = l[_]);
        }
        O !== null && (O.selected = true);
      }
    }
    function Yl(e, t) {
      return Fe({}, t, { value: void 0 });
    }
    function Sc(e, t) {
      var a = e;
      gc(t), a._wrapperState = { wasMultiple: !!t.multiple }, t.value !== void 0 && t.defaultValue !== void 0 && !Ga && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ga = true);
    }
    function gh(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ka(a, !!t.multiple, i, false) : t.defaultValue != null && ka(a, !!t.multiple, t.defaultValue, true);
    }
    function hO(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ka(a, !!t.multiple, l, false) : i !== !!t.multiple && (t.defaultValue != null ? ka(a, !!t.multiple, t.defaultValue, true) : ka(a, !!t.multiple, t.multiple ? [] : "", false));
    }
    function yO(e, t) {
      var a = e, i = t.value;
      i != null && ka(a, !!t.multiple, i, false);
    }
    var Jb = false;
    function Sh(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Fe({}, t, { value: void 0, defaultValue: void 0, children: ur(a._wrapperState.initialValue) });
      return i;
    }
    function Gb(e, t) {
      var a = e;
      Ho("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Jb && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ja() || "A component"), Jb = true);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (tt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = { initialValue: oa(i) };
    }
    function qb(e, t) {
      var a = e, i = oa(t.value), l = oa(t.defaultValue);
      if (i != null) {
        var s = ur(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = ur(l));
    }
    function Kb(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function gO(e, t) {
      qb(e, t);
    }
    var Ki = "http://www.w3.org/1999/xhtml", SO = "http://www.w3.org/1998/Math/MathML", bh = "http://www.w3.org/2000/svg";
    function wh(e) {
      switch (e) {
        case "svg":
          return bh;
        case "math":
          return SO;
        default:
          return Ki;
      }
    }
    function xh(e, t) {
      return e == null || e === Ki ? wh(t) : e === bh && t === "foreignObject" ? Ki : e;
    }
    var bO = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Vd, Zb = bO(function(e, t) {
      if (e.namespaceURI === bh && !("innerHTML" in e)) {
        Vd = Vd || document.createElement("div"), Vd.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Vd.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Hr = 1, Zi = 3, pn = 8, eo = 9, Dh = 11, Yd = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Zi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, wO = { animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"], background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"], backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"], borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"], fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"], gap: ["columnGap", "rowGap"], grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"], maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, bc = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true };
    function xO(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var DO = ["Webkit", "ms", "Moz", "O"];
    Object.keys(bc).forEach(function(e) {
      DO.forEach(function(t) {
        bc[xO(t, e)] = bc[e];
      });
    });
    function Ch(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(bc.hasOwnProperty(e) && bc[e]) ? t + "px" : (zr(t, e), ("" + t).trim());
    }
    var CO = /([A-Z])/g, RO = /^ms-/;
    function EO(e) {
      return e.replace(CO, "-$1").toLowerCase().replace(RO, "-ms-");
    }
    var ew = function() {
    };
    {
      var TO = /^(?:webkit|moz|o)[A-Z]/, kO = /^-ms-/, _O = /-(.)/g, tw = /;\s*$/, Bu = {}, Rh = {}, nw = false, rw = false, OO = function(e) {
        return e.replace(_O, function(t, a) {
          return a.toUpperCase();
        });
      }, NO = function(e) {
        Bu.hasOwnProperty(e) && Bu[e] || (Bu[e] = true, d("Unsupported style property %s. Did you mean %s?", e, OO(e.replace(kO, "ms-"))));
      }, LO = function(e) {
        Bu.hasOwnProperty(e) && Bu[e] || (Bu[e] = true, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, UO = function(e, t) {
        Rh.hasOwnProperty(t) && Rh[t] || (Rh[t] = true, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(tw, "")));
      }, IO = function(e, t) {
        nw || (nw = true, d("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $O = function(e, t) {
        rw || (rw = true, d("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ew = function(e, t) {
        e.indexOf("-") > -1 ? NO(e) : TO.test(e) ? LO(e) : tw.test(t) && UO(e, t), typeof t == "number" && (isNaN(t) ? IO(e, t) : isFinite(t) || $O(e, t));
      };
    }
    var MO = ew;
    function AO(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : EO(i)) + ":", t += Ch(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function aw(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || MO(i, t[i]);
          var s = Ch(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function zO(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function iw(e) {
      var t = {};
      for (var a in e)
        for (var i = wO[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function jO(e, t) {
      {
        if (!t)
          return;
        var a = iw(e), i = iw(t), l = {};
        for (var s in a) {
          var f = a[s], m = i[s];
          if (m && f !== m) {
            var h = f + "," + m;
            if (l[h])
              continue;
            l[h] = true, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", zO(e[f]) ? "Removing" : "Updating", f, m);
          }
        }
      }
    }
    var PO = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true }, HO = Fe({ menuitem: true }, PO), FO = "__html";
    function Eh(e, t) {
      if (t) {
        if (HO[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(FO in t.dangerouslySetInnerHTML))
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
    var Qd = { accept: "accept", acceptcharset: "acceptCharset", "accept-charset": "acceptCharset", accesskey: "accessKey", action: "action", allowfullscreen: "allowFullScreen", alt: "alt", as: "as", async: "async", autocapitalize: "autoCapitalize", autocomplete: "autoComplete", autocorrect: "autoCorrect", autofocus: "autoFocus", autoplay: "autoPlay", autosave: "autoSave", capture: "capture", cellpadding: "cellPadding", cellspacing: "cellSpacing", challenge: "challenge", charset: "charSet", checked: "checked", children: "children", cite: "cite", class: "className", classid: "classID", classname: "className", cols: "cols", colspan: "colSpan", content: "content", contenteditable: "contentEditable", contextmenu: "contextMenu", controls: "controls", controlslist: "controlsList", coords: "coords", crossorigin: "crossOrigin", dangerouslysetinnerhtml: "dangerouslySetInnerHTML", data: "data", datetime: "dateTime", default: "default", defaultchecked: "defaultChecked", defaultvalue: "defaultValue", defer: "defer", dir: "dir", disabled: "disabled", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback", download: "download", draggable: "draggable", enctype: "encType", enterkeyhint: "enterKeyHint", for: "htmlFor", form: "form", formmethod: "formMethod", formaction: "formAction", formenctype: "formEncType", formnovalidate: "formNoValidate", formtarget: "formTarget", frameborder: "frameBorder", headers: "headers", height: "height", hidden: "hidden", high: "high", href: "href", hreflang: "hrefLang", htmlfor: "htmlFor", httpequiv: "httpEquiv", "http-equiv": "httpEquiv", icon: "icon", id: "id", imagesizes: "imageSizes", imagesrcset: "imageSrcSet", innerhtml: "innerHTML", inputmode: "inputMode", integrity: "integrity", is: "is", itemid: "itemID", itemprop: "itemProp", itemref: "itemRef", itemscope: "itemScope", itemtype: "itemType", keyparams: "keyParams", keytype: "keyType", kind: "kind", label: "label", lang: "lang", list: "list", loop: "loop", low: "low", manifest: "manifest", marginwidth: "marginWidth", marginheight: "marginHeight", max: "max", maxlength: "maxLength", media: "media", mediagroup: "mediaGroup", method: "method", min: "min", minlength: "minLength", multiple: "multiple", muted: "muted", name: "name", nomodule: "noModule", nonce: "nonce", novalidate: "noValidate", open: "open", optimum: "optimum", pattern: "pattern", placeholder: "placeholder", playsinline: "playsInline", poster: "poster", preload: "preload", profile: "profile", radiogroup: "radioGroup", readonly: "readOnly", referrerpolicy: "referrerPolicy", rel: "rel", required: "required", reversed: "reversed", role: "role", rows: "rows", rowspan: "rowSpan", sandbox: "sandbox", scope: "scope", scoped: "scoped", scrolling: "scrolling", seamless: "seamless", selected: "selected", shape: "shape", size: "size", sizes: "sizes", span: "span", spellcheck: "spellCheck", src: "src", srcdoc: "srcDoc", srclang: "srcLang", srcset: "srcSet", start: "start", step: "step", style: "style", summary: "summary", tabindex: "tabIndex", target: "target", title: "title", type: "type", usemap: "useMap", value: "value", width: "width", wmode: "wmode", wrap: "wrap", about: "about", accentheight: "accentHeight", "accent-height": "accentHeight", accumulate: "accumulate", additive: "additive", alignmentbaseline: "alignmentBaseline", "alignment-baseline": "alignmentBaseline", allowreorder: "allowReorder", alphabetic: "alphabetic", amplitude: "amplitude", arabicform: "arabicForm", "arabic-form": "arabicForm", ascent: "ascent", attributename: "attributeName", attributetype: "attributeType", autoreverse: "autoReverse", azimuth: "azimuth", basefrequency: "baseFrequency", baselineshift: "baselineShift", "baseline-shift": "baselineShift", baseprofile: "baseProfile", bbox: "bbox", begin: "begin", bias: "bias", by: "by", calcmode: "calcMode", capheight: "capHeight", "cap-height": "capHeight", clip: "clip", clippath: "clipPath", "clip-path": "clipPath", clippathunits: "clipPathUnits", cliprule: "clipRule", "clip-rule": "clipRule", color: "color", colorinterpolation: "colorInterpolation", "color-interpolation": "colorInterpolation", colorinterpolationfilters: "colorInterpolationFilters", "color-interpolation-filters": "colorInterpolationFilters", colorprofile: "colorProfile", "color-profile": "colorProfile", colorrendering: "colorRendering", "color-rendering": "colorRendering", contentscripttype: "contentScriptType", contentstyletype: "contentStyleType", cursor: "cursor", cx: "cx", cy: "cy", d: "d", datatype: "datatype", decelerate: "decelerate", descent: "descent", diffuseconstant: "diffuseConstant", direction: "direction", display: "display", divisor: "divisor", dominantbaseline: "dominantBaseline", "dominant-baseline": "dominantBaseline", dur: "dur", dx: "dx", dy: "dy", edgemode: "edgeMode", elevation: "elevation", enablebackground: "enableBackground", "enable-background": "enableBackground", end: "end", exponent: "exponent", externalresourcesrequired: "externalResourcesRequired", fill: "fill", fillopacity: "fillOpacity", "fill-opacity": "fillOpacity", fillrule: "fillRule", "fill-rule": "fillRule", filter: "filter", filterres: "filterRes", filterunits: "filterUnits", floodopacity: "floodOpacity", "flood-opacity": "floodOpacity", floodcolor: "floodColor", "flood-color": "floodColor", focusable: "focusable", fontfamily: "fontFamily", "font-family": "fontFamily", fontsize: "fontSize", "font-size": "fontSize", fontsizeadjust: "fontSizeAdjust", "font-size-adjust": "fontSizeAdjust", fontstretch: "fontStretch", "font-stretch": "fontStretch", fontstyle: "fontStyle", "font-style": "fontStyle", fontvariant: "fontVariant", "font-variant": "fontVariant", fontweight: "fontWeight", "font-weight": "fontWeight", format: "format", from: "from", fx: "fx", fy: "fy", g1: "g1", g2: "g2", glyphname: "glyphName", "glyph-name": "glyphName", glyphorientationhorizontal: "glyphOrientationHorizontal", "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphorientationvertical: "glyphOrientationVertical", "glyph-orientation-vertical": "glyphOrientationVertical", glyphref: "glyphRef", gradienttransform: "gradientTransform", gradientunits: "gradientUnits", hanging: "hanging", horizadvx: "horizAdvX", "horiz-adv-x": "horizAdvX", horizoriginx: "horizOriginX", "horiz-origin-x": "horizOriginX", ideographic: "ideographic", imagerendering: "imageRendering", "image-rendering": "imageRendering", in2: "in2", in: "in", inlist: "inlist", intercept: "intercept", k1: "k1", k2: "k2", k3: "k3", k4: "k4", k: "k", kernelmatrix: "kernelMatrix", kernelunitlength: "kernelUnitLength", kerning: "kerning", keypoints: "keyPoints", keysplines: "keySplines", keytimes: "keyTimes", lengthadjust: "lengthAdjust", letterspacing: "letterSpacing", "letter-spacing": "letterSpacing", lightingcolor: "lightingColor", "lighting-color": "lightingColor", limitingconeangle: "limitingConeAngle", local: "local", markerend: "markerEnd", "marker-end": "markerEnd", markerheight: "markerHeight", markermid: "markerMid", "marker-mid": "markerMid", markerstart: "markerStart", "marker-start": "markerStart", markerunits: "markerUnits", markerwidth: "markerWidth", mask: "mask", maskcontentunits: "maskContentUnits", maskunits: "maskUnits", mathematical: "mathematical", mode: "mode", numoctaves: "numOctaves", offset: "offset", opacity: "opacity", operator: "operator", order: "order", orient: "orient", orientation: "orientation", origin: "origin", overflow: "overflow", overlineposition: "overlinePosition", "overline-position": "overlinePosition", overlinethickness: "overlineThickness", "overline-thickness": "overlineThickness", paintorder: "paintOrder", "paint-order": "paintOrder", panose1: "panose1", "panose-1": "panose1", pathlength: "pathLength", patterncontentunits: "patternContentUnits", patterntransform: "patternTransform", patternunits: "patternUnits", pointerevents: "pointerEvents", "pointer-events": "pointerEvents", points: "points", pointsatx: "pointsAtX", pointsaty: "pointsAtY", pointsatz: "pointsAtZ", prefix: "prefix", preservealpha: "preserveAlpha", preserveaspectratio: "preserveAspectRatio", primitiveunits: "primitiveUnits", property: "property", r: "r", radius: "radius", refx: "refX", refy: "refY", renderingintent: "renderingIntent", "rendering-intent": "renderingIntent", repeatcount: "repeatCount", repeatdur: "repeatDur", requiredextensions: "requiredExtensions", requiredfeatures: "requiredFeatures", resource: "resource", restart: "restart", result: "result", results: "results", rotate: "rotate", rx: "rx", ry: "ry", scale: "scale", security: "security", seed: "seed", shaperendering: "shapeRendering", "shape-rendering": "shapeRendering", slope: "slope", spacing: "spacing", specularconstant: "specularConstant", specularexponent: "specularExponent", speed: "speed", spreadmethod: "spreadMethod", startoffset: "startOffset", stddeviation: "stdDeviation", stemh: "stemh", stemv: "stemv", stitchtiles: "stitchTiles", stopcolor: "stopColor", "stop-color": "stopColor", stopopacity: "stopOpacity", "stop-opacity": "stopOpacity", strikethroughposition: "strikethroughPosition", "strikethrough-position": "strikethroughPosition", strikethroughthickness: "strikethroughThickness", "strikethrough-thickness": "strikethroughThickness", string: "string", stroke: "stroke", strokedasharray: "strokeDasharray", "stroke-dasharray": "strokeDasharray", strokedashoffset: "strokeDashoffset", "stroke-dashoffset": "strokeDashoffset", strokelinecap: "strokeLinecap", "stroke-linecap": "strokeLinecap", strokelinejoin: "strokeLinejoin", "stroke-linejoin": "strokeLinejoin", strokemiterlimit: "strokeMiterlimit", "stroke-miterlimit": "strokeMiterlimit", strokewidth: "strokeWidth", "stroke-width": "strokeWidth", strokeopacity: "strokeOpacity", "stroke-opacity": "strokeOpacity", suppresscontenteditablewarning: "suppressContentEditableWarning", suppresshydrationwarning: "suppressHydrationWarning", surfacescale: "surfaceScale", systemlanguage: "systemLanguage", tablevalues: "tableValues", targetx: "targetX", targety: "targetY", textanchor: "textAnchor", "text-anchor": "textAnchor", textdecoration: "textDecoration", "text-decoration": "textDecoration", textlength: "textLength", textrendering: "textRendering", "text-rendering": "textRendering", to: "to", transform: "transform", typeof: "typeof", u1: "u1", u2: "u2", underlineposition: "underlinePosition", "underline-position": "underlinePosition", underlinethickness: "underlineThickness", "underline-thickness": "underlineThickness", unicode: "unicode", unicodebidi: "unicodeBidi", "unicode-bidi": "unicodeBidi", unicoderange: "unicodeRange", "unicode-range": "unicodeRange", unitsperem: "unitsPerEm", "units-per-em": "unitsPerEm", unselectable: "unselectable", valphabetic: "vAlphabetic", "v-alphabetic": "vAlphabetic", values: "values", vectoreffect: "vectorEffect", "vector-effect": "vectorEffect", version: "version", vertadvy: "vertAdvY", "vert-adv-y": "vertAdvY", vertoriginx: "vertOriginX", "vert-origin-x": "vertOriginX", vertoriginy: "vertOriginY", "vert-origin-y": "vertOriginY", vhanging: "vHanging", "v-hanging": "vHanging", videographic: "vIdeographic", "v-ideographic": "vIdeographic", viewbox: "viewBox", viewtarget: "viewTarget", visibility: "visibility", vmathematical: "vMathematical", "v-mathematical": "vMathematical", vocab: "vocab", widths: "widths", wordspacing: "wordSpacing", "word-spacing": "wordSpacing", writingmode: "writingMode", "writing-mode": "writingMode", x1: "x1", x2: "x2", x: "x", xchannelselector: "xChannelSelector", xheight: "xHeight", "x-height": "xHeight", xlinkactuate: "xlinkActuate", "xlink:actuate": "xlinkActuate", xlinkarcrole: "xlinkArcrole", "xlink:arcrole": "xlinkArcrole", xlinkhref: "xlinkHref", "xlink:href": "xlinkHref", xlinkrole: "xlinkRole", "xlink:role": "xlinkRole", xlinkshow: "xlinkShow", "xlink:show": "xlinkShow", xlinktitle: "xlinkTitle", "xlink:title": "xlinkTitle", xlinktype: "xlinkType", "xlink:type": "xlinkType", xmlbase: "xmlBase", "xml:base": "xmlBase", xmllang: "xmlLang", "xml:lang": "xmlLang", xmlns: "xmlns", "xml:space": "xmlSpace", xmlnsxlink: "xmlnsXlink", "xmlns:xlink": "xmlnsXlink", xmlspace: "xmlSpace", y1: "y1", y2: "y2", y: "y", ychannelselector: "yChannelSelector", z: "z", zoomandpan: "zoomAndPan" }, ow = { "aria-current": 0, "aria-description": 0, "aria-details": 0, "aria-disabled": 0, "aria-hidden": 0, "aria-invalid": 0, "aria-keyshortcuts": 0, "aria-label": 0, "aria-roledescription": 0, "aria-autocomplete": 0, "aria-checked": 0, "aria-expanded": 0, "aria-haspopup": 0, "aria-level": 0, "aria-modal": 0, "aria-multiline": 0, "aria-multiselectable": 0, "aria-orientation": 0, "aria-placeholder": 0, "aria-pressed": 0, "aria-readonly": 0, "aria-required": 0, "aria-selected": 0, "aria-sort": 0, "aria-valuemax": 0, "aria-valuemin": 0, "aria-valuenow": 0, "aria-valuetext": 0, "aria-atomic": 0, "aria-busy": 0, "aria-live": 0, "aria-relevant": 0, "aria-dropeffect": 0, "aria-grabbed": 0, "aria-activedescendant": 0, "aria-colcount": 0, "aria-colindex": 0, "aria-colspan": 0, "aria-controls": 0, "aria-describedby": 0, "aria-errormessage": 0, "aria-flowto": 0, "aria-labelledby": 0, "aria-owns": 0, "aria-posinset": 0, "aria-rowcount": 0, "aria-rowindex": 0, "aria-rowspan": 0, "aria-setsize": 0 }, Xu = {}, VO = new RegExp("^(aria)-[" + xe + "]*$"), YO = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function QO(e, t) {
      {
        if (wn.call(Xu, t) && Xu[t])
          return true;
        if (YO.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = ow.hasOwnProperty(a) ? a : null;
          if (i == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = true, true;
          if (t !== i)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = true, true;
        }
        if (VO.test(t)) {
          var l = t.toLowerCase(), s = ow.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Xu[t] = true, false;
          if (t !== s)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = true, true;
        }
      }
      return true;
    }
    function WO(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = QO(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function BO(e, t) {
      Ql(e, t) || WO(e, t);
    }
    var lw = false;
    function XO(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !lw && (lw = true, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var uw = function() {
    };
    {
      var Rr = {}, sw = /^on./, JO = /^on[^A-Z]/, GO = new RegExp("^(aria)-[" + xe + "]*$"), qO = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      uw = function(e, t, a, i) {
        if (wn.call(Rr, t) && Rr[t])
          return true;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Rr[t] = true, true;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return true;
          var m = f.hasOwnProperty(l) ? f[l] : null;
          if (m != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", t, m), Rr[t] = true, true;
          if (sw.test(t))
            return d("Unknown event handler property `%s`. It will be ignored.", t), Rr[t] = true, true;
        } else if (sw.test(t))
          return JO.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Rr[t] = true, true;
        if (GO.test(t) || qO.test(t))
          return true;
        if (l === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Rr[t] = true, true;
        if (l === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Rr[t] = true, true;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Rr[t] = true, true;
        if (typeof a == "number" && isNaN(a))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Rr[t] = true, true;
        var h = Qn(t), S = h !== null && h.type === xr;
        if (Qd.hasOwnProperty(l)) {
          var w = Qd[l];
          if (w !== t)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", t, w), Rr[t] = true, true;
        } else if (!S && t !== l)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Rr[t] = true, true;
        return typeof a == "boolean" && ir(t, a, h, false) ? (a ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Rr[t] = true, true) : S ? true : ir(t, a, h, false) ? (Rr[t] = true, false) : ((a === "false" || a === "true") && h !== null && h.type === Xt && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Rr[t] = true), true);
      };
    }
    var KO = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = uw(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function ZO(e, t, a) {
      Ql(e, t) || KO(e, t, a);
    }
    var cw = 1, Th = 2, wc = 4, eN = cw | Th | wc, xc = null;
    function tN(e) {
      xc !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), xc = e;
    }
    function nN() {
      xc === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), xc = null;
    }
    function rN(e) {
      return e === xc;
    }
    function kh(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Zi ? t.parentNode : t;
    }
    var _h = null, Ju = null, Gu = null;
    function fw(e) {
      var t = Ko(e);
      if (t) {
        if (typeof _h != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = kp(a);
          _h(t.stateNode, t.type, i);
        }
      }
    }
    function aN(e) {
      _h = e;
    }
    function dw(e) {
      Ju ? Gu ? Gu.push(e) : Gu = [e] : Ju = e;
    }
    function iN() {
      return Ju !== null || Gu !== null;
    }
    function pw() {
      if (Ju) {
        var e = Ju, t = Gu;
        if (Ju = null, Gu = null, fw(e), t)
          for (var a = 0; a < t.length; a++)
            fw(t[a]);
      }
    }
    var vw = function(e, t) {
      return e(t);
    }, mw = function() {
    }, Oh = false;
    function oN() {
      var e = iN();
      e && (mw(), pw());
    }
    function hw(e, t, a) {
      if (Oh)
        return e(t, a);
      Oh = true;
      try {
        return vw(e, t, a);
      } finally {
        Oh = false, oN();
      }
    }
    function lN(e, t, a) {
      vw = e, mw = a;
    }
    function uN(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function sN(e, t, a) {
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
          return !!(a.disabled && uN(t));
        default:
          return false;
      }
    }
    function Dc(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = kp(a);
      if (i === null)
        return null;
      var l = i[t];
      if (sN(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Nh = false;
    if (en)
      try {
        var Cc = {};
        Object.defineProperty(Cc, "passive", { get: function() {
          Nh = true;
        } }), window.addEventListener("test", Cc, Cc), window.removeEventListener("test", Cc, Cc);
      } catch {
        Nh = false;
      }
    function yw(e, t, a, i, l, s, f, m, h) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (w) {
        this.onError(w);
      }
    }
    var gw = yw;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Lh = document.createElement("react");
      gw = function(t, a, i, l, s, f, m, h, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), O = false, _ = true, P = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          Lh.removeEventListener(Y, De, false), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function De() {
          O = true, F(), a.apply(i, de), _ = false;
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
        if (window.addEventListener("error", I), Lh.addEventListener(Y, De, false), w.initEvent(Y, false, false), Lh.dispatchEvent(w), z && Object.defineProperty(window, "event", z), O && _ && (qe ? Ke && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", I), !O)
          return F(), yw.apply(this, arguments);
      };
    }
    var cN = gw, qu = false, Wd = null, Bd = false, Uh = null, fN = { onError: function(e) {
      qu = true, Wd = e;
    } };
    function Ih(e, t, a, i, l, s, f, m, h) {
      qu = false, Wd = null, cN.apply(fN, arguments);
    }
    function dN(e, t, a, i, l, s, f, m, h) {
      if (Ih.apply(this, arguments), qu) {
        var S = $h();
        Bd || (Bd = true, Uh = S);
      }
    }
    function pN() {
      if (Bd) {
        var e = Uh;
        throw Bd = false, Uh = null, e;
      }
    }
    function vN() {
      return qu;
    }
    function $h() {
      if (qu) {
        var e = Wd;
        return qu = false, Wd = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ku(e) {
      return e._reactInternals;
    }
    function mN(e) {
      return e._reactInternals !== void 0;
    }
    function hN(e, t) {
      e._reactInternals = t;
    }
    var ke = 0, Zu = 1, vn = 2, lt = 4, Wl = 16, Rc = 32, Mh = 64, St = 128, to = 256, Qo = 512, Bl = 1024, qa = 2048, no = 4096, Xl = 8192, Xd = 16384, yN = qa | lt | Mh | Qo | Bl | Xd, gN = 32767, Ec = 32768, Er = 65536, Ah = 131072, Sw = 1048576, zh = 2097152, Jl = 4194304, jh = 8388608, ro = 16777216, Jd = 33554432, Ph = lt | Bl | 0, Hh = vn | lt | Wl | Rc | Qo | no | Xl, Tc = lt | Mh | Qo | Xl, es = qa | Wl, ao = Jl | jh | zh, SN = o.ReactCurrentOwner;
    function Gl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (vn | no)) !== ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === U ? a : null;
    }
    function bw(e) {
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
    function ww(e) {
      return e.tag === U ? e.stateNode.containerInfo : null;
    }
    function bN(e) {
      return Gl(e) === e;
    }
    function wN(e) {
      {
        var t = SN.current;
        if (t !== null && t.tag === T) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ze(a) || "A component"), i._warnedAboutRefsInRender = true;
        }
      }
      var l = Ku(e);
      return l ? Gl(l) === l : false;
    }
    function xw(e) {
      if (Gl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Dw(e) {
      var t = e.alternate;
      if (!t) {
        var a = Gl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var m = s.return;
          if (m !== null) {
            i = l = m;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return xw(s), e;
            if (h === l)
              return xw(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var S = false, w = s.child; w; ) {
            if (w === i) {
              S = true, i = s, l = f;
              break;
            }
            if (w === l) {
              S = true, l = s, i = f;
              break;
            }
            w = w.sibling;
          }
          if (!S) {
            for (w = f.child; w; ) {
              if (w === i) {
                S = true, i = f, l = s;
                break;
              }
              if (w === l) {
                S = true, l = f, i = s;
                break;
              }
              w = w.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== U)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Cw(e) {
      var t = Dw(e);
      return t !== null ? Rw(t) : null;
    }
    function Rw(e) {
      if (e.tag === H || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Rw(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xN(e) {
      var t = Dw(e);
      return t !== null ? Ew(t) : null;
    }
    function Ew(e) {
      if (e.tag === H || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== j) {
          var a = Ew(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Tw = r.unstable_scheduleCallback, DN = r.unstable_cancelCallback, CN = r.unstable_shouldYield, RN = r.unstable_requestPaint, zn = r.unstable_now, EN = r.unstable_getCurrentPriorityLevel, Gd = r.unstable_ImmediatePriority, Fh = r.unstable_UserBlockingPriority, ql = r.unstable_NormalPriority, TN = r.unstable_LowPriority, Vh = r.unstable_IdlePriority, kN = r.unstable_yieldValue, _N = r.unstable_setDisableYieldValue, Kl = null, Wn = null, fe = null, ki = false, Ka = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ON(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return false;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return true;
      if (!t.supportsFiber)
        return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), true;
      try {
        We && (e = Fe({}, e, { getLaneLabelMap: MN, injectProfilingHooks: $N })), Kl = t.inject(e), Wn = t;
      } catch (a) {
        d("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function NN(e, t) {
      if (Wn && typeof Wn.onScheduleFiberRoot == "function")
        try {
          Wn.onScheduleFiberRoot(Kl, e, t);
        } catch (a) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", a));
        }
    }
    function LN(e, t) {
      if (Wn && typeof Wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & St) === St;
          if (ct) {
            var i;
            switch (t) {
              case ca:
                i = Gd;
                break;
              case oo:
                i = Fh;
                break;
              case lo:
                i = ql;
                break;
              case rp:
                i = Vh;
                break;
              default:
                i = ql;
                break;
            }
            Wn.onCommitFiberRoot(Kl, e, i, a);
          } else
            Wn.onCommitFiberRoot(Kl, e, void 0, a);
        } catch (l) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", l));
        }
    }
    function UN(e) {
      if (Wn && typeof Wn.onPostCommitFiberRoot == "function")
        try {
          Wn.onPostCommitFiberRoot(Kl, e);
        } catch (t) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", t));
        }
    }
    function IN(e) {
      if (Wn && typeof Wn.onCommitFiberUnmount == "function")
        try {
          Wn.onCommitFiberUnmount(Kl, e);
        } catch (t) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof kN == "function" && (_N(e), c(e)), Wn && typeof Wn.setStrictMode == "function")
        try {
          Wn.setStrictMode(Kl, e);
        } catch (t) {
          ki || (ki = true, d("React instrumentation encountered an error: %s", t));
        }
    }
    function $N(e) {
      fe = e;
    }
    function MN() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Qh; a++) {
          var i = nL(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function AN(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function kw() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function kc(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function ts() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function zN(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function jN() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function PN(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function HN() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function FN(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function VN() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function _w(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ow() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function YN(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function QN(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function WN(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function BN() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function XN(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function JN() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function Nw(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function GN() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function Lw() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function qN(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function KN(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function Yh(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var _e = 0, nt = 1, Et = 2, mn = 8, _i = 16, Uw = Math.clz32 ? Math.clz32 : tL, ZN = Math.log, eL = Math.LN2;
    function tL(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ZN(t) / eL | 0) | 0;
    }
    var Qh = 31, G = 0, Pn = 0, Ie = 1, ns = 2, io = 4, Zl = 8, Oi = 16, _c = 32, rs = 4194240, Oc = 64, Wh = 128, Bh = 256, Xh = 512, Jh = 1024, Gh = 2048, qh = 4096, Kh = 8192, Zh = 16384, ey = 32768, ty = 65536, ny = 131072, ry = 262144, ay = 524288, iy = 1048576, oy = 2097152, qd = 130023424, as = 4194304, ly = 8388608, uy = 16777216, sy = 33554432, cy = 67108864, Iw = as, Nc = 134217728, $w = 268435455, Lc = 268435456, eu = 536870912, ua = 1073741824;
    function nL(e) {
      {
        if (e & Ie)
          return "Sync";
        if (e & ns)
          return "InputContinuousHydration";
        if (e & io)
          return "InputContinuous";
        if (e & Zl)
          return "DefaultHydration";
        if (e & Oi)
          return "Default";
        if (e & _c)
          return "TransitionHydration";
        if (e & rs)
          return "Transition";
        if (e & qd)
          return "Retry";
        if (e & Nc)
          return "SelectiveHydration";
        if (e & Lc)
          return "IdleHydration";
        if (e & eu)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var jt = -1, Kd = Oc, Zd = as;
    function Uc(e) {
      switch (tu(e)) {
        case Ie:
          return Ie;
        case ns:
          return ns;
        case io:
          return io;
        case Zl:
          return Zl;
        case Oi:
          return Oi;
        case _c:
          return _c;
        case Oc:
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
        case ry:
        case ay:
        case iy:
        case oy:
          return e & rs;
        case as:
        case ly:
        case uy:
        case sy:
        case cy:
          return e & qd;
        case Nc:
          return Nc;
        case Lc:
          return Lc;
        case eu:
          return eu;
        case ua:
          return ua;
        default:
          return d("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ep(e, t) {
      var a = e.pendingLanes;
      if (a === G)
        return G;
      var i = G, l = e.suspendedLanes, s = e.pingedLanes, f = a & $w;
      if (f !== G) {
        var m = f & ~l;
        if (m !== G)
          i = Uc(m);
        else {
          var h = f & s;
          h !== G && (i = Uc(h));
        }
      } else {
        var S = a & ~l;
        S !== G ? i = Uc(S) : s !== G && (i = Uc(s));
      }
      if (i === G)
        return G;
      if (t !== G && t !== i && (t & l) === G) {
        var w = tu(i), O = tu(t);
        if (w >= O || w === Oi && (O & rs) !== G)
          return t;
      }
      (i & io) !== G && (i |= a & Oi);
      var _ = e.entangledLanes;
      if (_ !== G)
        for (var P = e.entanglements, z = i & _; z > 0; ) {
          var F = nu(z), de = 1 << F;
          i |= P[F], z &= ~de;
        }
      return i;
    }
    function rL(e, t) {
      for (var a = e.eventTimes, i = jt; t > 0; ) {
        var l = nu(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function aL(e, t) {
      switch (e) {
        case Ie:
        case ns:
        case io:
          return t + 250;
        case Zl:
        case Oi:
        case _c:
        case Oc:
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
        case ry:
        case ay:
        case iy:
        case oy:
          return t + 5e3;
        case as:
        case ly:
        case uy:
        case sy:
        case cy:
          return jt;
        case Nc:
        case Lc:
        case eu:
        case ua:
          return jt;
        default:
          return d("Should have found matching lanes. This is a bug in React."), jt;
      }
    }
    function iL(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var m = nu(f), h = 1 << m, S = s[m];
        S === jt ? ((h & i) === G || (h & l) !== G) && (s[m] = aL(h, t)) : S <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function oL(e) {
      return Uc(e.pendingLanes);
    }
    function fy(e) {
      var t = e.pendingLanes & ~ua;
      return t !== G ? t : t & ua ? ua : G;
    }
    function lL(e) {
      return (e & Ie) !== G;
    }
    function dy(e) {
      return (e & $w) !== G;
    }
    function Mw(e) {
      return (e & qd) === e;
    }
    function uL(e) {
      var t = Ie | io | Oi;
      return (e & t) === G;
    }
    function sL(e) {
      return (e & rs) === e;
    }
    function tp(e, t) {
      var a = ns | io | Zl | Oi;
      return (t & a) !== G;
    }
    function cL(e, t) {
      return (t & e.expiredLanes) !== G;
    }
    function Aw(e) {
      return (e & rs) !== G;
    }
    function zw() {
      var e = Kd;
      return Kd <<= 1, (Kd & rs) === G && (Kd = Oc), e;
    }
    function fL() {
      var e = Zd;
      return Zd <<= 1, (Zd & qd) === G && (Zd = as), e;
    }
    function tu(e) {
      return e & -e;
    }
    function Ic(e) {
      return tu(e);
    }
    function nu(e) {
      return 31 - Uw(e);
    }
    function py(e) {
      return nu(e);
    }
    function sa(e, t) {
      return (e & t) !== G;
    }
    function is(e, t) {
      return (e & t) === t;
    }
    function Ye(e, t) {
      return e | t;
    }
    function np(e, t) {
      return e & ~t;
    }
    function jw(e, t) {
      return e & t;
    }
    function J4(e) {
      return e;
    }
    function dL(e, t) {
      return e !== Pn && e < t ? e : t;
    }
    function vy(e) {
      for (var t = [], a = 0; a < Qh; a++)
        t.push(e);
      return t;
    }
    function $c(e, t, a) {
      e.pendingLanes |= t, t !== eu && (e.suspendedLanes = G, e.pingedLanes = G);
      var i = e.eventTimes, l = py(t);
      i[l] = a;
    }
    function pL(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = nu(i), s = 1 << l;
        a[l] = jt, i &= ~s;
      }
    }
    function Pw(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function vL(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = G, e.pingedLanes = G, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var m = nu(f), h = 1 << m;
        i[m] = G, l[m] = jt, s[m] = jt, f &= ~h;
      }
    }
    function my(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = nu(l), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function mL(e, t) {
      var a = tu(t), i;
      switch (a) {
        case io:
          i = ns;
          break;
        case Oi:
          i = Zl;
          break;
        case Oc:
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
        case ry:
        case ay:
        case iy:
        case oy:
        case as:
        case ly:
        case uy:
        case sy:
        case cy:
          i = _c;
          break;
        case eu:
          i = Lc;
          break;
        default:
          i = Pn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Pn ? Pn : i;
    }
    function Hw(e, t, a) {
      if (Ka)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = py(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function Fw(e, t) {
      if (Ka)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = py(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(m) {
            var h = m.alternate;
            (h === null || !i.has(h)) && i.add(m);
          }), f.clear()), t &= ~s;
        }
    }
    function Vw(e, t) {
      return null;
    }
    var ca = Ie, oo = io, lo = Oi, rp = eu, Mc = Pn;
    function Za() {
      return Mc;
    }
    function Hn(e) {
      Mc = e;
    }
    function hL(e, t) {
      var a = Mc;
      try {
        return Mc = e, t();
      } finally {
        Mc = a;
      }
    }
    function yL(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function gL(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function hy(e, t) {
      return e !== 0 && e < t;
    }
    function Yw(e) {
      var t = tu(e);
      return hy(ca, t) ? hy(oo, t) ? dy(t) ? lo : rp : oo : ca;
    }
    function ap(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Qw;
    function SL(e) {
      Qw = e;
    }
    function bL(e) {
      Qw(e);
    }
    var yy;
    function wL(e) {
      yy = e;
    }
    var Ww;
    function xL(e) {
      Ww = e;
    }
    var Bw;
    function DL(e) {
      Bw = e;
    }
    var Xw;
    function CL(e) {
      Xw = e;
    }
    var gy = false, ip = [], Wo = null, Bo = null, Xo = null, Ac = /* @__PURE__ */ new Map(), zc = /* @__PURE__ */ new Map(), Jo = [], RL = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset", "submit"];
    function EL(e) {
      return RL.indexOf(e) > -1;
    }
    function TL(e, t, a, i, l) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: a, nativeEvent: l, targetContainers: [i] };
    }
    function Jw(e, t) {
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
          Ac.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zc.delete(i);
          break;
        }
      }
    }
    function jc(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = TL(t, a, i, l, s);
        if (t !== null) {
          var m = Ko(t);
          m !== null && yy(m);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return l !== null && h.indexOf(l) === -1 && h.push(l), e;
    }
    function kL(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Wo = jc(Wo, e, t, a, i, s), true;
        }
        case "dragenter": {
          var f = l;
          return Bo = jc(Bo, e, t, a, i, f), true;
        }
        case "mouseover": {
          var m = l;
          return Xo = jc(Xo, e, t, a, i, m), true;
        }
        case "pointerover": {
          var h = l, S = h.pointerId;
          return Ac.set(S, jc(Ac.get(S) || null, e, t, a, i, h)), true;
        }
        case "gotpointercapture": {
          var w = l, O = w.pointerId;
          return zc.set(O, jc(zc.get(O) || null, e, t, a, i, w)), true;
        }
      }
      return false;
    }
    function Gw(e) {
      var t = iu(e.target);
      if (t !== null) {
        var a = Gl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === X) {
            var l = bw(a);
            if (l !== null) {
              e.blockedOn = l, Xw(e.priority, function() {
                Ww(a);
              });
              return;
            }
          } else if (i === U) {
            var s = a.stateNode;
            if (ap(s)) {
              e.blockedOn = ww(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function _L(e) {
      for (var t = Bw(), a = { blockedOn: null, target: e, priority: t }, i = 0; i < Jo.length && hy(t, Jo[i].priority); i++)
        ;
      Jo.splice(i, 0, a), i === 0 && Gw(a);
    }
    function op(e) {
      if (e.blockedOn !== null)
        return false;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wy(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          tN(s), l.target.dispatchEvent(s), nN();
        } else {
          var f = Ko(i);
          return f !== null && yy(f), e.blockedOn = i, false;
        }
        t.shift();
      }
      return true;
    }
    function qw(e, t, a) {
      op(e) && a.delete(t);
    }
    function OL() {
      gy = false, Wo !== null && op(Wo) && (Wo = null), Bo !== null && op(Bo) && (Bo = null), Xo !== null && op(Xo) && (Xo = null), Ac.forEach(qw), zc.forEach(qw);
    }
    function Pc(e, t) {
      e.blockedOn === t && (e.blockedOn = null, gy || (gy = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, OL)));
    }
    function Hc(e) {
      if (ip.length > 0) {
        Pc(ip[0], e);
        for (var t = 1; t < ip.length; t++) {
          var a = ip[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Wo !== null && Pc(Wo, e), Bo !== null && Pc(Bo, e), Xo !== null && Pc(Xo, e);
      var i = function(m) {
        return Pc(m, e);
      };
      Ac.forEach(i), zc.forEach(i);
      for (var l = 0; l < Jo.length; l++) {
        var s = Jo[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Jo.length > 0; ) {
        var f = Jo[0];
        if (f.blockedOn !== null)
          break;
        Gw(f), f.blockedOn === null && Jo.shift();
      }
    }
    var os = o.ReactCurrentBatchConfig, Sy = true;
    function Kw(e) {
      Sy = !!e;
    }
    function NL() {
      return Sy;
    }
    function LL(e, t, a) {
      var i = Zw(t), l;
      switch (i) {
        case ca:
          l = UL;
          break;
        case oo:
          l = IL;
          break;
        case lo:
        default:
          l = by;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function UL(e, t, a, i) {
      var l = Za(), s = os.transition;
      os.transition = null;
      try {
        Hn(ca), by(e, t, a, i);
      } finally {
        Hn(l), os.transition = s;
      }
    }
    function IL(e, t, a, i) {
      var l = Za(), s = os.transition;
      os.transition = null;
      try {
        Hn(oo), by(e, t, a, i);
      } finally {
        Hn(l), os.transition = s;
      }
    }
    function by(e, t, a, i) {
      Sy && $L(e, t, a, i);
    }
    function $L(e, t, a, i) {
      var l = wy(e, t, a, i);
      if (l === null) {
        $y(e, t, i, lp, a), Jw(e, i);
        return;
      }
      if (kL(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Jw(e, i), t & wc && EL(e)) {
        for (; l !== null; ) {
          var s = Ko(l);
          s !== null && bL(s);
          var f = wy(e, t, a, i);
          if (f === null && $y(e, t, i, lp, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      $y(e, t, i, null, a);
    }
    var lp = null;
    function wy(e, t, a, i) {
      lp = null;
      var l = kh(i), s = iu(l);
      if (s !== null) {
        var f = Gl(s);
        if (f === null)
          s = null;
        else {
          var m = f.tag;
          if (m === X) {
            var h = bw(f);
            if (h !== null)
              return h;
            s = null;
          } else if (m === U) {
            var S = f.stateNode;
            if (ap(S))
              return ww(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return lp = s, null;
    }
    function Zw(e) {
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
          var t = EN();
          switch (t) {
            case Gd:
              return ca;
            case Fh:
              return oo;
            case ql:
            case TN:
              return lo;
            case Vh:
              return rp;
            default:
              return lo;
          }
        }
        default:
          return lo;
      }
    }
    function ML(e, t, a) {
      return e.addEventListener(t, a, false), a;
    }
    function AL(e, t, a) {
      return e.addEventListener(t, a, true), a;
    }
    function zL(e, t, a, i) {
      return e.addEventListener(t, a, { capture: true, passive: i }), a;
    }
    function jL(e, t, a, i) {
      return e.addEventListener(t, a, { passive: i }), a;
    }
    var Fc = null, xy = null, Vc = null;
    function PL(e) {
      return Fc = e, xy = tx(), true;
    }
    function HL() {
      Fc = null, xy = null, Vc = null;
    }
    function ex() {
      if (Vc)
        return Vc;
      var e, t = xy, a = t.length, i, l = tx(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Vc = l.slice(e, m), Vc;
    }
    function tx() {
      return "value" in Fc ? Fc.value : Fc.textContent;
    }
    function up(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function sp() {
      return true;
    }
    function nx() {
      return false;
    }
    function fa(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var h = e[m];
            h ? this[m] = h(s) : this[m] = s[m];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false;
        return S ? this.isDefaultPrevented = sp : this.isDefaultPrevented = nx, this.isPropagationStopped = nx, this;
      }
      return Fe(t.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = sp);
      }, stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = sp);
      }, persist: function() {
      }, isPersistent: sp }), t;
    }
    var ls = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Dy = fa(ls), Yc = Fe({}, ls, { view: 0, detail: 0 }), FL = fa(Yc), Cy, Ry, Qc;
    function VL(e) {
      e !== Qc && (Qc && e.type === "mousemove" ? (Cy = e.screenX - Qc.screenX, Ry = e.screenY - Qc.screenY) : (Cy = 0, Ry = 0), Qc = e);
    }
    var cp = Fe({}, Yc, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ty, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (VL(e), Cy);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : Ry;
    } }), rx = fa(cp), YL = Fe({}, cp, { dataTransfer: 0 }), QL = fa(YL), WL = Fe({}, Yc, { relatedTarget: 0 }), Ey = fa(WL), BL = Fe({}, ls, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), XL = fa(BL), JL = Fe({}, ls, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), GL = fa(JL), qL = Fe({}, ls, { data: 0 }), ax = fa(qL), KL = ax, ZL = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, eU = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
    function tU(e) {
      if (e.key) {
        var t = ZL[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = up(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? eU[e.keyCode] || "Unidentified" : "";
    }
    var nU = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function rU(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = nU[e];
      return i ? !!a[i] : false;
    }
    function Ty(e) {
      return rU;
    }
    var aU = Fe({}, Yc, { key: tU, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ty, charCode: function(e) {
      return e.type === "keypress" ? up(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? up(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), iU = fa(aU), oU = Fe({}, cp, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ix = fa(oU), lU = Fe({}, Yc, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ty }), uU = fa(lU), sU = Fe({}, ls, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cU = fa(sU), fU = Fe({}, cp, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), dU = fa(fU), pU = [9, 13, 27, 32], ox = 229, ky = en && "CompositionEvent" in window, Wc = null;
    en && "documentMode" in document && (Wc = document.documentMode);
    var vU = en && "TextEvent" in window && !Wc, lx = en && (!ky || Wc && Wc > 8 && Wc <= 11), ux = 32, sx = String.fromCharCode(ux);
    function mU() {
      $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $n("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $n("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var cx = false;
    function hU(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function yU(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function gU(e, t) {
      return e === "keydown" && t.keyCode === ox;
    }
    function fx(e, t) {
      switch (e) {
        case "keyup":
          return pU.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ox;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function dx(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function px(e) {
      return e.locale === "ko";
    }
    var us = false;
    function SU(e, t, a, i, l) {
      var s, f;
      if (ky ? s = yU(t) : us ? fx(t, i) && (s = "onCompositionEnd") : gU(t, i) && (s = "onCompositionStart"), !s)
        return null;
      lx && !px(i) && (!us && s === "onCompositionStart" ? us = PL(l) : s === "onCompositionEnd" && us && (f = ex()));
      var m = mp(a, s);
      if (m.length > 0) {
        var h = new ax(s, t, null, i, l);
        if (e.push({ event: h, listeners: m }), f)
          h.data = f;
        else {
          var S = dx(i);
          S !== null && (h.data = S);
        }
      }
    }
    function bU(e, t) {
      switch (e) {
        case "compositionend":
          return dx(t);
        case "keypress":
          var a = t.which;
          return a !== ux ? null : (cx = true, sx);
        case "textInput":
          var i = t.data;
          return i === sx && cx ? null : i;
        default:
          return null;
      }
    }
    function wU(e, t) {
      if (us) {
        if (e === "compositionend" || !ky && fx(e, t)) {
          var a = ex();
          return HL(), us = false, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!hU(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return lx && !px(t) ? null : t.data;
        default:
          return null;
      }
    }
    function xU(e, t, a, i, l) {
      var s;
      if (vU ? s = bU(t, i) : s = wU(t, i), !s)
        return null;
      var f = mp(a, "onBeforeInput");
      if (f.length > 0) {
        var m = new KL("onBeforeInput", "beforeinput", null, i, l);
        e.push({ event: m, listeners: f }), m.data = s;
      }
    }
    function DU(e, t, a, i, l, s, f) {
      SU(e, t, a, i, l), xU(e, t, a, i, l);
    }
    var CU = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function vx(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!CU[e.type] : t === "textarea";
    }
    function RU(e) {
      if (!en)
        return false;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function EU() {
      $n("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function mx(e, t, a, i) {
      dw(i);
      var l = mp(t, "onChange");
      if (l.length > 0) {
        var s = new Dy("onChange", "change", null, a, i);
        e.push({ event: s, listeners: l });
      }
    }
    var Bc = null, Xc = null;
    function TU(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function kU(e) {
      var t = [];
      mx(t, Xc, e, kh(e)), hw(_U, t);
    }
    function _U(e) {
      Ux(e, 0);
    }
    function fp(e) {
      var t = vs(e);
      if (Ei(t))
        return e;
    }
    function OU(e, t) {
      if (e === "change")
        return t;
    }
    var hx = false;
    en && (hx = RU("input") && (!document.documentMode || document.documentMode > 9));
    function NU(e, t) {
      Bc = e, Xc = t, Bc.attachEvent("onpropertychange", gx);
    }
    function yx() {
      Bc && (Bc.detachEvent("onpropertychange", gx), Bc = null, Xc = null);
    }
    function gx(e) {
      e.propertyName === "value" && fp(Xc) && kU(e);
    }
    function LU(e, t, a) {
      e === "focusin" ? (yx(), NU(t, a)) : e === "focusout" && yx();
    }
    function UU(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fp(Xc);
    }
    function IU(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $U(e, t) {
      if (e === "click")
        return fp(t);
    }
    function MU(e, t) {
      if (e === "input" || e === "change")
        return fp(t);
    }
    function AU(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || se(e, "number", e.value);
    }
    function zU(e, t, a, i, l, s, f) {
      var m = a ? vs(a) : window, h, S;
      if (TU(m) ? h = OU : vx(m) ? hx ? h = MU : (h = UU, S = LU) : IU(m) && (h = $U), h) {
        var w = h(t, a);
        if (w) {
          mx(e, w, i, l);
          return;
        }
      }
      S && S(t, m, a), t === "focusout" && AU(m);
    }
    function jU() {
      br("onMouseEnter", ["mouseout", "mouseover"]), br("onMouseLeave", ["mouseout", "mouseover"]), br("onPointerEnter", ["pointerout", "pointerover"]), br("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function PU(e, t, a, i, l, s, f) {
      var m = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (m && !rN(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (iu(S) || cf(S)))
          return;
      }
      if (!(!h && !m)) {
        var w;
        if (l.window === l)
          w = l;
        else {
          var O = l.ownerDocument;
          O ? w = O.defaultView || O.parentWindow : w = window;
        }
        var _, P;
        if (h) {
          var z = i.relatedTarget || i.toElement;
          if (_ = a, P = z ? iu(z) : null, P !== null) {
            var F = Gl(P);
            (P !== F || P.tag !== H && P.tag !== J) && (P = null);
          }
        } else
          _ = null, P = a;
        if (_ !== P) {
          var de = rx, De = "onMouseLeave", Se = "onMouseEnter", qe = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = ix, De = "onPointerLeave", Se = "onPointerEnter", qe = "pointer");
          var Ke = _ == null ? w : vs(_), I = P == null ? w : vs(P), Y = new de(De, qe + "leave", _, i, l);
          Y.target = Ke, Y.relatedTarget = I;
          var $ = null, Z = iu(l);
          if (Z === a) {
            var me = new de(Se, qe + "enter", P, i, l);
            me.target = I, me.relatedTarget = Ke, $ = me;
          }
          cI(e, Y, $, _, P);
        }
      }
    }
    function HU(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var da = typeof Object.is == "function" ? Object.is : HU;
    function Jc(e, t) {
      if (da(e, t))
        return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return false;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return false;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!wn.call(t, s) || !da(e[s], t[s]))
          return false;
      }
      return true;
    }
    function Sx(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function FU(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function bx(e, t) {
      for (var a = Sx(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Zi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return { node: a, offset: t - i };
          i = l;
        }
        a = Sx(FU(a));
      }
    }
    function VU(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, m = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return YU(e, l, s, f, m);
    }
    function YU(e, t, a, i, l) {
      var s = 0, f = -1, m = -1, h = 0, S = 0, w = e, O = null;
      e:
        for (; ; ) {
          for (var _ = null; w === t && (a === 0 || w.nodeType === Zi) && (f = s + a), w === i && (l === 0 || w.nodeType === Zi) && (m = s + l), w.nodeType === Zi && (s += w.nodeValue.length), (_ = w.firstChild) !== null; )
            O = w, w = _;
          for (; ; ) {
            if (w === e)
              break e;
            if (O === t && ++h === a && (f = s), O === i && ++S === l && (m = s), (_ = w.nextSibling) !== null)
              break;
            w = O, O = w.parentNode;
          }
          w = _;
        }
      return f === -1 || m === -1 ? null : { start: f, end: m };
    }
    function QU(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), m = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > m) {
          var h = m;
          m = f, f = h;
        }
        var S = bx(e, f), w = bx(e, m);
        if (S && w) {
          if (l.rangeCount === 1 && l.anchorNode === S.node && l.anchorOffset === S.offset && l.focusNode === w.node && l.focusOffset === w.offset)
            return;
          var O = a.createRange();
          O.setStart(S.node, S.offset), l.removeAllRanges(), f > m ? (l.addRange(O), l.extend(w.node, w.offset)) : (O.setEnd(w.node, w.offset), l.addRange(O));
        }
      }
    }
    function wx(e) {
      return e && e.nodeType === Zi;
    }
    function xx(e, t) {
      return !e || !t ? false : e === t ? true : wx(e) ? false : wx(t) ? xx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false;
    }
    function WU(e) {
      return e && e.ownerDocument && xx(e.ownerDocument.documentElement, e);
    }
    function BU(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return false;
      }
    }
    function Dx() {
      for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
        if (BU(t))
          e = t.contentWindow;
        else
          return t;
        t = Ti(e.document);
      }
      return t;
    }
    function _y(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function XU() {
      var e = Dx();
      return { focusedElem: e, selectionRange: _y(e) ? GU(e) : null };
    }
    function JU(e) {
      var t = Dx(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && WU(a)) {
        i !== null && _y(a) && qU(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === Hr && l.push({ element: s, left: s.scrollLeft, top: s.scrollTop });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var m = l[f];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function GU(e) {
      var t;
      return "selectionStart" in e ? t = { start: e.selectionStart, end: e.selectionEnd } : t = VU(e), t || { start: 0, end: 0 };
    }
    function qU(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : QU(e, t);
    }
    var KU = en && "documentMode" in document && document.documentMode <= 11;
    function ZU() {
      $n("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ss = null, Oy = null, Gc = null, Ny = false;
    function eI(e) {
      if ("selectionStart" in e && _y(e))
        return { start: e.selectionStart, end: e.selectionEnd };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset };
    }
    function tI(e) {
      return e.window === e ? e.document : e.nodeType === eo ? e : e.ownerDocument;
    }
    function Cx(e, t, a) {
      var i = tI(a);
      if (!(Ny || ss == null || ss !== Ti(i))) {
        var l = eI(ss);
        if (!Gc || !Jc(Gc, l)) {
          Gc = l;
          var s = mp(Oy, "onSelect");
          if (s.length > 0) {
            var f = new Dy("onSelect", "select", null, t, a);
            e.push({ event: f, listeners: s }), f.target = ss;
          }
        }
      }
    }
    function nI(e, t, a, i, l, s, f) {
      var m = a ? vs(a) : window;
      switch (t) {
        case "focusin":
          (vx(m) || m.contentEditable === "true") && (ss = m, Oy = a, Gc = null);
          break;
        case "focusout":
          ss = null, Oy = null, Gc = null;
          break;
        case "mousedown":
          Ny = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ny = false, Cx(e, i, l);
          break;
        case "selectionchange":
          if (KU)
            break;
        case "keydown":
        case "keyup":
          Cx(e, i, l);
      }
    }
    function dp(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var cs = { animationend: dp("Animation", "AnimationEnd"), animationiteration: dp("Animation", "AnimationIteration"), animationstart: dp("Animation", "AnimationStart"), transitionend: dp("Transition", "TransitionEnd") }, Ly = {}, Rx = {};
    en && (Rx = document.createElement("div").style, "AnimationEvent" in window || (delete cs.animationend.animation, delete cs.animationiteration.animation, delete cs.animationstart.animation), "TransitionEvent" in window || delete cs.transitionend.transition);
    function pp(e) {
      if (Ly[e])
        return Ly[e];
      if (!cs[e])
        return e;
      var t = cs[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in Rx)
          return Ly[e] = t[a];
      return e;
    }
    var Ex = pp("animationend"), Tx = pp("animationiteration"), kx = pp("animationstart"), _x = pp("transitionend"), Ox = /* @__PURE__ */ new Map(), Nx = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Go(e, t) {
      Ox.set(e, t), $n(t, [e]);
    }
    function rI() {
      for (var e = 0; e < Nx.length; e++) {
        var t = Nx[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Go(a, "on" + i);
      }
      Go(Ex, "onAnimationEnd"), Go(Tx, "onAnimationIteration"), Go(kx, "onAnimationStart"), Go("dblclick", "onDoubleClick"), Go("focusin", "onFocus"), Go("focusout", "onBlur"), Go(_x, "onTransitionEnd");
    }
    function aI(e, t, a, i, l, s, f) {
      var m = Ox.get(t);
      if (m !== void 0) {
        var h = Dy, S = t;
        switch (t) {
          case "keypress":
            if (up(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = iU;
            break;
          case "focusin":
            S = "focus", h = Ey;
            break;
          case "focusout":
            S = "blur", h = Ey;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ey;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = rx;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = QL;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = uU;
            break;
          case Ex:
          case Tx:
          case kx:
            h = XL;
            break;
          case _x:
            h = cU;
            break;
          case "scroll":
            h = FL;
            break;
          case "wheel":
            h = dU;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = GL;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ix;
            break;
        }
        var w = (s & wc) !== 0;
        {
          var O = !w && t === "scroll", _ = uI(a, m, i.type, w, O);
          if (_.length > 0) {
            var P = new h(m, S, null, i, l);
            e.push({ event: P, listeners: _ });
          }
        }
      }
    }
    rI(), jU(), EU(), ZU(), mU();
    function iI(e, t, a, i, l, s, f) {
      aI(e, t, a, i, l, s);
      var m = (s & eN) === 0;
      m && (PU(e, t, a, i, l), zU(e, t, a, i, l), nI(e, t, a, i, l), DU(e, t, a, i, l));
    }
    var qc = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Uy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(qc));
    function Lx(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, dN(i, t, void 0, e), e.currentTarget = null;
    }
    function oI(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, m = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          Lx(e, h, m), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var w = t[S], O = w.instance, _ = w.currentTarget, P = w.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          Lx(e, P, _), i = O;
        }
    }
    function Ux(e, t) {
      for (var a = (t & wc) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        oI(s, f, a);
      }
      pN();
    }
    function lI(e, t, a, i, l) {
      var s = kh(a), f = [];
      iI(f, e, i, a, s, t), Ux(f, t);
    }
    function Ft(e, t) {
      Uy.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = false, i = A$(t), l = fI(e, a);
      i.has(l) || (Ix(t, e, Th, a), i.add(l));
    }
    function Iy(e, t, a) {
      Uy.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= wc), Ix(a, e, i, t);
    }
    var vp = "_reactListening" + Math.random().toString(36).slice(2);
    function Kc(e) {
      if (!e[vp]) {
        e[vp] = true, et.forEach(function(a) {
          a !== "selectionchange" && (Uy.has(a) || Iy(a, false, e), Iy(a, true, e));
        });
        var t = e.nodeType === eo ? e : e.ownerDocument;
        t !== null && (t[vp] || (t[vp] = true, Iy("selectionchange", false, t)));
      }
    }
    function Ix(e, t, a, i, l) {
      var s = LL(e, t, a), f = void 0;
      Nh && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = true), e = e;
      var m;
      i ? f !== void 0 ? m = zL(e, t, s, f) : m = AL(e, t, s) : f !== void 0 ? m = jL(e, t, s, f) : m = ML(e, t, s);
    }
    function $x(e, t) {
      return e === t || e.nodeType === pn && e.parentNode === t;
    }
    function $y(e, t, a, i, l) {
      var s = i;
      if (!(t & cw) && !(t & Th)) {
        var f = l;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var h = m.tag;
              if (h === U || h === j) {
                var S = m.stateNode.containerInfo;
                if ($x(S, f))
                  break;
                if (h === j)
                  for (var w = m.return; w !== null; ) {
                    var O = w.tag;
                    if (O === U || O === j) {
                      var _ = w.stateNode.containerInfo;
                      if ($x(_, f))
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
                    m = s = P;
                    continue e;
                  }
                  S = S.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      hw(function() {
        return lI(e, t, a, s);
      });
    }
    function Zc(e, t, a) {
      return { instance: e, listener: t, currentTarget: a };
    }
    function uI(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, m = i ? f : t, h = [], S = e, w = null; S !== null; ) {
        var O = S, _ = O.stateNode, P = O.tag;
        if (P === H && _ !== null && (w = _, m !== null)) {
          var z = Dc(S, m);
          z != null && h.push(Zc(S, z, w));
        }
        if (l)
          break;
        S = S.return;
      }
      return h;
    }
    function mp(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, m = s.tag;
        if (m === H && f !== null) {
          var h = f, S = Dc(l, a);
          S != null && i.unshift(Zc(l, S, h));
          var w = Dc(l, t);
          w != null && i.push(Zc(l, w, h));
        }
        l = l.return;
      }
      return i;
    }
    function fs(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== H);
      return e || null;
    }
    function sI(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = fs(s))
        l++;
      for (var f = 0, m = i; m; m = fs(m))
        f++;
      for (; l - f > 0; )
        a = fs(a), l--;
      for (; f - l > 0; )
        i = fs(i), f--;
      for (var h = l; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = fs(a), i = fs(i);
      }
      return null;
    }
    function Mx(e, t, a, i, l) {
      for (var s = t._reactName, f = [], m = a; m !== null && m !== i; ) {
        var h = m, S = h.alternate, w = h.stateNode, O = h.tag;
        if (S !== null && S === i)
          break;
        if (O === H && w !== null) {
          var _ = w;
          if (l) {
            var P = Dc(m, s);
            P != null && f.unshift(Zc(m, P, _));
          } else if (!l) {
            var z = Dc(m, s);
            z != null && f.push(Zc(m, z, _));
          }
        }
        m = m.return;
      }
      f.length !== 0 && e.push({ event: t, listeners: f });
    }
    function cI(e, t, a, i, l) {
      var s = i && l ? sI(i, l) : null;
      i !== null && Mx(e, t, i, s, false), l !== null && a !== null && Mx(e, a, l, s, true);
    }
    function fI(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Fr = false, ef = "dangerouslySetInnerHTML", hp = "suppressContentEditableWarning", qo = "suppressHydrationWarning", Ax = "autoFocus", ru = "children", au = "style", yp = "__html", My, gp, tf, zx, Sp, jx, Px;
    My = { dialog: true, webview: true }, gp = function(e, t) {
      BO(e, t), XO(e, t), ZO(e, t, { registrationNameDependencies: Be, possibleRegistrationNames: Ot });
    }, jx = en && !document.documentMode, tf = function(e, t, a) {
      if (!Fr) {
        var i = bp(a), l = bp(t);
        l !== i && (Fr = true, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, zx = function(e) {
      if (!Fr) {
        Fr = true;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), d("Extra attributes from the server: %s", t);
      }
    }, Sp = function(e, t) {
      t === false ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Px = function(e, t) {
      var a = e.namespaceURI === Ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var dI = /\r\n?/g, pI = /\u0000|\uFFFD/g;
    function bp(e) {
      wr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(dI, `
`).replace(pI, "");
    }
    function wp(e, t, a, i) {
      var l = bp(t), s = bp(e);
      if (s !== l && (i && (Fr || (Fr = true, d('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Pe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Hx(e) {
      return e.nodeType === eo ? e : e.ownerDocument;
    }
    function vI() {
    }
    function xp(e) {
      e.onclick = vI;
    }
    function mI(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === au)
            f && Object.freeze(f), aw(t, f);
          else if (s === ef) {
            var m = f ? f[yp] : void 0;
            m != null && Zb(t, m);
          } else if (s === ru)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && Yd(t, f);
            } else
              typeof f == "number" && Yd(t, "" + f);
          else
            s === hp || s === qo || s === Ax || (Be.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sp(s, f), s === "onScroll" && Ft("scroll", t)) : f != null && Qa(t, s, f, l));
        }
    }
    function hI(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === au ? aw(e, f) : s === ef ? Zb(e, f) : s === ru ? Yd(e, f) : Qa(e, s, f, i);
      }
    }
    function yI(e, t, a, i) {
      var l, s = Hx(a), f, m = i;
      if (m === Ki && (m = wh(e)), m === Ki) {
        if (l = Ql(e, t), !l && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script></script>";
          var S = h.firstChild;
          f = h.removeChild(S);
        } else if (typeof t.is == "string")
          f = s.createElement(e, { is: t.is });
        else if (f = s.createElement(e), e === "select") {
          var w = f;
          t.multiple ? w.multiple = true : t.size && (w.size = t.size);
        }
      } else
        f = s.createElementNS(m, e);
      return m === Ki && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wn.call(My, e) && (My[e] = true, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function gI(e, t) {
      return Hx(t).createTextNode(e);
    }
    function SI(e, t, a, i) {
      var l = Ql(t, a);
      gp(t, a);
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
          for (var f = 0; f < qc.length; f++)
            Ft(qc[f], e);
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
          g(e, a), s = v(e, a), Ft("invalid", e);
          break;
        case "option":
          Ue(e, a), s = a;
          break;
        case "select":
          Sc(e, a), s = Yl(e, a), Ft("invalid", e);
          break;
        case "textarea":
          Gb(e, a), s = Sh(e, a), Ft("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Eh(t, s), mI(t, e, i, s, l), t) {
        case "input":
          la(e), A(e, a, false);
          break;
        case "textarea":
          la(e), Kb(e);
          break;
        case "option":
          Ve(e, a);
          break;
        case "select":
          gh(e, a);
          break;
        default:
          typeof s.onClick == "function" && xp(e);
          break;
      }
    }
    function bI(e, t, a, i, l) {
      gp(t, i);
      var s = null, f, m;
      switch (t) {
        case "input":
          f = v(e, a), m = v(e, i), s = [];
          break;
        case "select":
          f = Yl(e, a), m = Yl(e, i), s = [];
          break;
        case "textarea":
          f = Sh(e, a), m = Sh(e, i), s = [];
          break;
        default:
          f = a, m = i, typeof f.onClick != "function" && typeof m.onClick == "function" && xp(e);
          break;
      }
      Eh(t, m);
      var h, S, w = null;
      for (h in f)
        if (!(m.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === au) {
            var O = f[h];
            for (S in O)
              O.hasOwnProperty(S) && (w || (w = {}), w[S] = "");
          } else
            h === ef || h === ru || h === hp || h === qo || h === Ax || (Be.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in m) {
        var _ = m[h], P = f?.[h];
        if (!(!m.hasOwnProperty(h) || _ === P || _ == null && P == null))
          if (h === au)
            if (_ && Object.freeze(_), P) {
              for (S in P)
                P.hasOwnProperty(S) && (!_ || !_.hasOwnProperty(S)) && (w || (w = {}), w[S] = "");
              for (S in _)
                _.hasOwnProperty(S) && P[S] !== _[S] && (w || (w = {}), w[S] = _[S]);
            } else
              w || (s || (s = []), s.push(h, w)), w = _;
          else if (h === ef) {
            var z = _ ? _[yp] : void 0, F = P ? P[yp] : void 0;
            z != null && F !== z && (s = s || []).push(h, z);
          } else
            h === ru ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(h, "" + _) : h === hp || h === qo || (Be.hasOwnProperty(h) ? (_ != null && (typeof _ != "function" && Sp(h, _), h === "onScroll" && Ft("scroll", e)), !s && P !== _ && (s = [])) : (s = s || []).push(h, _));
      }
      return w && (jO(w, m[au]), (s = s || []).push(au, w)), s;
    }
    function wI(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && D(e, l);
      var s = Ql(a, i), f = Ql(a, l);
      switch (hI(e, t, s, f), a) {
        case "input":
          L(e, l);
          break;
        case "textarea":
          qb(e, l);
          break;
        case "select":
          hO(e, l);
          break;
      }
    }
    function xI(e) {
      {
        var t = e.toLowerCase();
        return Qd.hasOwnProperty(t) && Qd[t] || null;
      }
    }
    function DI(e, t, a, i, l, s, f) {
      var m, h;
      switch (m = Ql(t, a), gp(t, a), t) {
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
          for (var S = 0; S < qc.length; S++)
            Ft(qc[S], e);
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
          g(e, a), Ft("invalid", e);
          break;
        case "option":
          Ue(e, a);
          break;
        case "select":
          Sc(e, a), Ft("invalid", e);
          break;
        case "textarea":
          Gb(e, a), Ft("invalid", e);
          break;
      }
      Eh(t, a);
      {
        h = /* @__PURE__ */ new Set();
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
              h.add(w[O].name);
          }
        }
      }
      var P = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var F = a[z];
          if (z === ru)
            typeof F == "string" ? e.textContent !== F && (a[qo] !== true && wp(e.textContent, F, s, f), P = [ru, F]) : typeof F == "number" && e.textContent !== "" + F && (a[qo] !== true && wp(e.textContent, F, s, f), P = [ru, "" + F]);
          else if (Be.hasOwnProperty(z))
            F != null && (typeof F != "function" && Sp(z, F), z === "onScroll" && Ft("scroll", e));
          else if (f && typeof m == "boolean") {
            var de = void 0, De = m && Le ? null : Qn(z);
            if (a[qo] !== true) {
              if (!(z === hp || z === qo || z === "value" || z === "checked" || z === "selected")) {
                if (z === ef) {
                  var Se = e.innerHTML, qe = F ? F[yp] : void 0;
                  if (qe != null) {
                    var Ke = Px(e, qe);
                    Ke !== Se && tf(z, Se, Ke);
                  }
                } else if (z === au) {
                  if (h.delete(z), jx) {
                    var I = AO(F);
                    de = e.getAttribute("style"), I !== de && tf(z, de, I);
                  }
                } else if (m && !Le)
                  h.delete(z.toLowerCase()), de = Si(e, z, F), F !== de && tf(z, de, F);
                else if (!Qt(z, De, m) && !Dt(z, F, De, m)) {
                  var Y = false;
                  if (De !== null)
                    h.delete(De.attributeName), de = Ca(e, z, F, De);
                  else {
                    var $ = i;
                    if ($ === Ki && ($ = wh(t)), $ === Ki)
                      h.delete(z.toLowerCase());
                    else {
                      var Z = xI(z);
                      Z !== null && Z !== z && (Y = true, h.delete(Z)), h.delete(z);
                    }
                    de = Si(e, z, F);
                  }
                  var me = Le;
                  !me && F !== de && !Y && tf(z, de, F);
                }
              }
            }
          }
        }
      switch (f && h.size > 0 && a[qo] !== true && zx(h), t) {
        case "input":
          la(e), A(e, a, true);
          break;
        case "textarea":
          la(e), Kb(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && xp(e);
          break;
      }
      return P;
    }
    function CI(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ay(e, t) {
      {
        if (Fr)
          return;
        Fr = true, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (Fr)
          return;
        Fr = true, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function jy(e, t, a) {
      {
        if (Fr)
          return;
        Fr = true, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Py(e, t) {
      {
        if (t === "" || Fr)
          return;
        Fr = true, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function RI(e, t, a) {
      switch (t) {
        case "input":
          te(e, a);
          return;
        case "textarea":
          gO(e, a);
          return;
        case "select":
          yO(e, a);
          return;
      }
    }
    var nf = function() {
    }, rf = function() {
    };
    {
      var EI = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Fx = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"], TI = Fx.concat(["button"]), kI = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Vx = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
      rf = function(e, t) {
        var a = Fe({}, e || Vx), i = { tag: t };
        return Fx.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), TI.indexOf(t) !== -1 && (a.pTagInButtonScope = null), EI.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var _I = function(e, t) {
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
            return kI.indexOf(t) === -1;
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
      }, OI = function(e, t) {
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
      }, Yx = {};
      nf = function(e, t, a) {
        a = a || Vx;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = _I(e, l) ? null : i, f = s ? null : OI(e, a), m = s || f;
        if (m) {
          var h = m.tag, S = !!s + "|" + e + "|" + h;
          if (!Yx[S]) {
            Yx[S] = true;
            var w = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var _ = "";
              h === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, h, O, _);
            } else
              d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, h);
          }
        }
      };
    }
    var Dp = "suppressHydrationWarning", Cp = "$", Rp = "/$", af = "$?", of = "$!", NI = "style", Hy = null, Fy = null;
    function LI(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case eo:
        case Dh: {
          t = i === eo ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : xh(null, "");
          break;
        }
        default: {
          var s = i === pn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = xh(f, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), h = rf(null, m);
        return { namespace: a, ancestorInfo: h };
      }
    }
    function UI(e, t, a) {
      {
        var i = e, l = xh(i.namespace, t), s = rf(i.ancestorInfo, t);
        return { namespace: l, ancestorInfo: s };
      }
    }
    function G4(e) {
      return e;
    }
    function II(e) {
      Hy = NL(), Fy = XU();
      var t = null;
      return Kw(false), t;
    }
    function $I(e) {
      JU(Fy), Kw(Hy), Hy = null, Fy = null;
    }
    function MI(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (nf(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, h = rf(f.ancestorInfo, e);
          nf(null, m, h);
        }
        s = f.namespace;
      }
      var S = yI(e, t, a, s);
      return sf(l, S), Gy(S, t), S;
    }
    function AI(e, t) {
      e.appendChild(t);
    }
    function zI(e, t, a, i, l) {
      switch (SI(e, t, a, i), t) {
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
    function jI(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, h = rf(f.ancestorInfo, t);
          nf(null, m, h);
        }
      }
      return bI(e, t, a, i);
    }
    function Vy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function PI(e, t, a, i) {
      {
        var l = a;
        nf(null, e, l.ancestorInfo);
      }
      var s = gI(e, t);
      return sf(i, s), s;
    }
    function HI() {
      var e = window.event;
      return e === void 0 ? lo : Zw(e.type);
    }
    var Yy = typeof setTimeout == "function" ? setTimeout : void 0, FI = typeof clearTimeout == "function" ? clearTimeout : void 0, Qy = -1, Qx = typeof Promise == "function" ? Promise : void 0, VI = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qx < "u" ? function(e) {
      return Qx.resolve(null).then(e).catch(YI);
    } : Yy;
    function YI(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function QI(e, t, a, i) {
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
    function WI(e, t, a, i, l, s) {
      wI(e, t, a, i, l), Gy(e, l);
    }
    function Wx(e) {
      Yd(e, "");
    }
    function BI(e, t, a) {
      e.nodeValue = a;
    }
    function XI(e, t) {
      e.appendChild(t);
    }
    function JI(e, t) {
      var a;
      e.nodeType === pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && xp(a);
    }
    function GI(e, t, a) {
      e.insertBefore(t, a);
    }
    function qI(e, t, a) {
      e.nodeType === pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function KI(e, t) {
      e.removeChild(t);
    }
    function ZI(e, t) {
      e.nodeType === pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Wy(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === pn) {
          var s = l.data;
          if (s === Rp)
            if (i === 0) {
              e.removeChild(l), Hc(t);
              return;
            } else
              i--;
          else
            (s === Cp || s === af || s === of) && i++;
        }
        a = l;
      } while (a);
      Hc(t);
    }
    function e$(e, t) {
      e.nodeType === pn ? Wy(e.parentNode, t) : e.nodeType === Hr && Wy(e, t), Hc(e);
    }
    function t$(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function n$(e) {
      e.nodeValue = "";
    }
    function r$(e, t) {
      e = e;
      var a = t[NI], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ch("display", i);
    }
    function a$(e, t) {
      e.nodeValue = t;
    }
    function i$(e) {
      e.nodeType === Hr ? e.textContent = "" : e.nodeType === eo && e.documentElement && e.removeChild(e.documentElement);
    }
    function o$(e, t, a) {
      return e.nodeType !== Hr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function l$(e, t) {
      return t === "" || e.nodeType !== Zi ? null : e;
    }
    function u$(e) {
      return e.nodeType !== pn ? null : e;
    }
    function Bx(e) {
      return e.data === af;
    }
    function By(e) {
      return e.data === of;
    }
    function s$(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), { message: i, digest: a, stack: l };
    }
    function c$(e, t) {
      e._reactRetry = t;
    }
    function Ep(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Hr || t === Zi)
          break;
        if (t === pn) {
          var a = e.data;
          if (a === Cp || a === of || a === af)
            break;
          if (a === Rp)
            return null;
        }
      }
      return e;
    }
    function lf(e) {
      return Ep(e.nextSibling);
    }
    function f$(e) {
      return Ep(e.firstChild);
    }
    function d$(e) {
      return Ep(e.firstChild);
    }
    function p$(e) {
      return Ep(e.nextSibling);
    }
    function v$(e, t, a, i, l, s, f) {
      sf(s, e), Gy(e, a);
      var m;
      {
        var h = l;
        m = h.namespace;
      }
      var S = (s.mode & nt) !== _e;
      return DI(e, t, a, m, i, S, f);
    }
    function m$(e, t, a, i) {
      sf(a, e);
      var l = (a.mode & nt) !== _e;
      return CI(e, t);
    }
    function h$(e, t) {
      sf(t, e);
    }
    function y$(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === pn) {
          var i = t.data;
          if (i === Rp) {
            if (a === 0)
              return lf(t);
            a--;
          } else
            (i === Cp || i === of || i === af) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Xx(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === pn) {
          var i = t.data;
          if (i === Cp || i === of || i === af) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Rp && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function g$(e) {
      Hc(e);
    }
    function S$(e) {
      Hc(e);
    }
    function b$(e) {
      return e !== "head" && e !== "body";
    }
    function w$(e, t, a, i) {
      var l = true;
      wp(t.nodeValue, a, i, l);
    }
    function x$(e, t, a, i, l, s) {
      if (t[Dp] !== true) {
        var f = true;
        wp(i.nodeValue, l, s, f);
      }
    }
    function D$(e, t) {
      t.nodeType === Hr ? Ay(e, t) : t.nodeType === pn || zy(e, t);
    }
    function C$(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Hr ? Ay(a, t) : t.nodeType === pn || zy(a, t));
      }
    }
    function R$(e, t, a, i, l) {
      (l || t[Dp] !== true) && (i.nodeType === Hr ? Ay(a, i) : i.nodeType === pn || zy(a, i));
    }
    function E$(e, t, a) {
      jy(e, t);
    }
    function T$(e, t) {
      Py(e, t);
    }
    function k$(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && jy(i, t);
      }
    }
    function _$(e, t) {
      {
        var a = e.parentNode;
        a !== null && Py(a, t);
      }
    }
    function O$(e, t, a, i, l, s) {
      (s || t[Dp] !== true) && jy(a, i);
    }
    function N$(e, t, a, i, l) {
      (l || t[Dp] !== true) && Py(a, i);
    }
    function L$(e) {
      d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function U$(e) {
      Kc(e);
    }
    var ds = Math.random().toString(36).slice(2), ps = "__reactFiber$" + ds, Xy = "__reactProps$" + ds, uf = "__reactContainer$" + ds, Jy = "__reactEvents$" + ds, I$ = "__reactListeners$" + ds, $$ = "__reactHandles$" + ds;
    function M$(e) {
      delete e[ps], delete e[Xy], delete e[Jy], delete e[I$], delete e[$$];
    }
    function sf(e, t) {
      t[ps] = e;
    }
    function Tp(e, t) {
      t[uf] = e;
    }
    function Jx(e) {
      e[uf] = null;
    }
    function cf(e) {
      return !!e[uf];
    }
    function iu(e) {
      var t = e[ps];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[uf] || a[ps], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = Xx(e); l !== null; ) {
              var s = l[ps];
              if (s)
                return s;
              l = Xx(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ko(e) {
      var t = e[ps] || e[uf];
      return t && (t.tag === H || t.tag === J || t.tag === X || t.tag === U) ? t : null;
    }
    function vs(e) {
      if (e.tag === H || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function kp(e) {
      return e[Xy] || null;
    }
    function Gy(e, t) {
      e[Xy] = t;
    }
    function A$(e) {
      var t = e[Jy];
      return t === void 0 && (t = e[Jy] = /* @__PURE__ */ new Set()), t;
    }
    var Gx = {}, qx = o.ReactDebugCurrentFrame;
    function _p(e) {
      if (e) {
        var t = e._owner, a = Xa(e.type, e._source, t ? t.type : null);
        qx.setExtraStackFrame(a);
      } else
        qx.setExtraStackFrame(null);
    }
    function ei(e, t, a, i, l) {
      {
        var s = Function.call.bind(wn);
        for (var f in e)
          if (s(e, f)) {
            var m = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              m = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              m = S;
            }
            m && !(m instanceof Error) && (_p(l), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof m), _p(null)), m instanceof Error && !(m.message in Gx) && (Gx[m.message] = true, _p(l), d("Failed %s type: %s", a, m.message), _p(null));
          }
      }
    }
    var qy = [], Op;
    Op = [];
    var uo = -1;
    function Zo(e) {
      return { current: e };
    }
    function sr(e, t) {
      if (uo < 0) {
        d("Unexpected pop.");
        return;
      }
      t !== Op[uo] && d("Unexpected Fiber popped."), e.current = qy[uo], qy[uo] = null, Op[uo] = null, uo--;
    }
    function cr(e, t, a) {
      uo++, qy[uo] = e.current, Op[uo] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var pa = {};
    Object.freeze(pa);
    var so = Zo(pa), Ni = Zo(false), Zy = pa;
    function ms(e, t, a) {
      return a && Li(t) ? Zy : so.current;
    }
    function Kx(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function hs(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pa;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var m = ze(e) || "Unknown";
          ei(i, s, "context", m);
        }
        return l && Kx(e, t, s), s;
      }
    }
    function Np() {
      return Ni.current;
    }
    function Li(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lp(e) {
      sr(Ni, e), sr(so, e);
    }
    function eg(e) {
      sr(Ni, e), sr(so, e);
    }
    function Zx(e, t, a) {
      {
        if (so.current !== pa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        cr(so, t, e), cr(Ni, a, e);
      }
    }
    function eD(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ze(e) || "Unknown";
            Ky[s] || (Ky[s] = true, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var m in f)
          if (!(m in l))
            throw new Error((ze(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var h = ze(e) || "Unknown";
          ei(l, f, "child context", h);
        }
        return Fe({}, a, f);
      }
    }
    function Up(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pa;
        return Zy = so.current, cr(so, a, e), cr(Ni, Ni.current, e), true;
      }
    }
    function tD(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = eD(e, t, Zy);
          i.__reactInternalMemoizedMergedChildContext = l, sr(Ni, e), sr(so, e), cr(so, l, e), cr(Ni, a, e);
        } else
          sr(Ni, e), cr(Ni, a, e);
      }
    }
    function z$(e) {
      {
        if (!bN(e) || e.tag !== T)
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
    var el = 0, Ip = 1, co = null, tg = false, ng = false;
    function nD(e) {
      co === null ? co = [e] : co.push(e);
    }
    function j$(e) {
      tg = true, nD(e);
    }
    function rD() {
      tg && tl();
    }
    function tl() {
      if (!ng && co !== null) {
        ng = true;
        var e = 0, t = Za();
        try {
          var a = true, i = co;
          for (Hn(ca); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          co = null, tg = false;
        } catch (s) {
          throw co !== null && (co = co.slice(e + 1)), Tw(Gd, tl), s;
        } finally {
          Hn(t), ng = false;
        }
      }
      return null;
    }
    var ys = [], gs = 0, $p = null, Mp = 0, _a = [], Oa = 0, ou = null, fo = 1, po = "";
    function P$(e) {
      return uu(), (e.flags & Sw) !== ke;
    }
    function H$(e) {
      return uu(), Mp;
    }
    function F$() {
      var e = po, t = fo, a = t & ~V$(t);
      return a.toString(32) + e;
    }
    function lu(e, t) {
      uu(), ys[gs++] = Mp, ys[gs++] = $p, $p = e, Mp = t;
    }
    function aD(e, t, a) {
      uu(), _a[Oa++] = fo, _a[Oa++] = po, _a[Oa++] = ou, ou = e;
      var i = fo, l = po, s = Ap(i) - 1, f = i & ~(1 << s), m = a + 1, h = Ap(t) + s;
      if (h > 30) {
        var S = s - s % 5, w = (1 << S) - 1, O = (f & w).toString(32), _ = f >> S, P = s - S, z = Ap(t) + P, F = m << P, de = F | _, De = O + l;
        fo = 1 << z | de, po = De;
      } else {
        var Se = m << s, qe = Se | f, Ke = l;
        fo = 1 << h | qe, po = Ke;
      }
    }
    function rg(e) {
      uu();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lu(e, a), aD(e, a, i);
      }
    }
    function Ap(e) {
      return 32 - Uw(e);
    }
    function V$(e) {
      return 1 << Ap(e) - 1;
    }
    function ag(e) {
      for (; e === $p; )
        $p = ys[--gs], ys[gs] = null, Mp = ys[--gs], ys[gs] = null;
      for (; e === ou; )
        ou = _a[--Oa], _a[Oa] = null, po = _a[--Oa], _a[Oa] = null, fo = _a[--Oa], _a[Oa] = null;
    }
    function Y$() {
      return uu(), ou !== null ? { id: fo, overflow: po } : null;
    }
    function Q$(e, t) {
      uu(), _a[Oa++] = fo, _a[Oa++] = po, _a[Oa++] = ou, fo = t.id, po = t.overflow, ou = e;
    }
    function uu() {
      Xn() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Bn = null, Na = null, ti = false, su = false, nl = null;
    function W$() {
      ti && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function iD() {
      su = true;
    }
    function B$() {
      return su;
    }
    function X$(e) {
      var t = e.stateNode.containerInfo;
      return Na = d$(t), Bn = e, ti = true, nl = null, su = false, true;
    }
    function J$(e, t, a) {
      return Na = p$(t), Bn = e, ti = true, nl = null, su = false, a !== null && Q$(e, a), true;
    }
    function oD(e, t) {
      switch (e.tag) {
        case U: {
          D$(e.stateNode.containerInfo, t);
          break;
        }
        case H: {
          var a = (e.mode & nt) !== _e;
          R$(e.type, e.memoizedProps, e.stateNode, t, a);
          break;
        }
        case X: {
          var i = e.memoizedState;
          i.dehydrated !== null && C$(i.dehydrated, t);
          break;
        }
      }
    }
    function lD(e, t) {
      oD(e, t);
      var a = rz();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Wl) : i.push(a);
    }
    function ig(e, t) {
      {
        if (su)
          return;
        switch (e.tag) {
          case U: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case H:
                var i = t.type, l = t.pendingProps;
                E$(a, i);
                break;
              case J:
                var s = t.pendingProps;
                T$(a, s);
                break;
            }
            break;
          }
          case H: {
            var f = e.type, m = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case H: {
                var S = t.type, w = t.pendingProps, O = (e.mode & nt) !== _e;
                O$(f, m, h, S, w, O);
                break;
              }
              case J: {
                var _ = t.pendingProps, P = (e.mode & nt) !== _e;
                N$(f, m, h, _, P);
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
                  k$(F, de);
                  break;
                case J:
                  var Se = t.pendingProps;
                  _$(F, Se);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function uD(e, t) {
      t.flags = t.flags & ~no | vn, ig(e, t);
    }
    function sD(e, t) {
      switch (e.tag) {
        case H: {
          var a = e.type, i = e.pendingProps, l = o$(t, a);
          return l !== null ? (e.stateNode = l, Bn = e, Na = f$(l), true) : false;
        }
        case J: {
          var s = e.pendingProps, f = l$(t, s);
          return f !== null ? (e.stateNode = f, Bn = e, Na = null, true) : false;
        }
        case X: {
          var m = u$(t);
          if (m !== null) {
            var h = { dehydrated: m, treeContext: Y$(), retryLane: ua };
            e.memoizedState = h;
            var S = az(m);
            return S.return = e, e.child = S, Bn = e, Na = null, true;
          }
          return false;
        }
        default:
          return false;
      }
    }
    function og(e) {
      return (e.mode & nt) !== _e && (e.flags & St) === ke;
    }
    function lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ug(e) {
      if (ti) {
        var t = Na;
        if (!t) {
          og(e) && (ig(Bn, e), lg()), uD(Bn, e), ti = false, Bn = e;
          return;
        }
        var a = t;
        if (!sD(e, t)) {
          og(e) && (ig(Bn, e), lg()), t = lf(a);
          var i = Bn;
          if (!t || !sD(e, t)) {
            uD(Bn, e), ti = false, Bn = e;
            return;
          }
          lD(i, a);
        }
      }
    }
    function G$(e, t, a) {
      var i = e.stateNode, l = !su, s = v$(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function q$(e) {
      var t = e.stateNode, a = e.memoizedProps, i = m$(t, a, e);
      if (i) {
        var l = Bn;
        if (l !== null)
          switch (l.tag) {
            case U: {
              var s = l.stateNode.containerInfo, f = (l.mode & nt) !== _e;
              w$(s, t, a, f);
              break;
            }
            case H: {
              var m = l.type, h = l.memoizedProps, S = l.stateNode, w = (l.mode & nt) !== _e;
              x$(m, h, S, t, a, w);
              break;
            }
          }
      }
      return i;
    }
    function K$(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      h$(a, e);
    }
    function Z$(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return y$(a);
    }
    function cD(e) {
      for (var t = e.return; t !== null && t.tag !== H && t.tag !== U && t.tag !== X; )
        t = t.return;
      Bn = t;
    }
    function zp(e) {
      if (e !== Bn)
        return false;
      if (!ti)
        return cD(e), ti = true, false;
      if (e.tag !== U && (e.tag !== H || b$(e.type) && !Vy(e.type, e.memoizedProps))) {
        var t = Na;
        if (t)
          if (og(e))
            fD(e), lg();
          else
            for (; t; )
              lD(e, t), t = lf(t);
      }
      return cD(e), e.tag === X ? Na = Z$(e) : Na = Bn ? lf(e.stateNode) : null, true;
    }
    function e2() {
      return ti && Na !== null;
    }
    function fD(e) {
      for (var t = Na; t; )
        oD(e, t), t = lf(t);
    }
    function Ss() {
      Bn = null, Na = null, ti = false, su = false;
    }
    function dD() {
      nl !== null && (lR(nl), nl = null);
    }
    function Xn() {
      return ti;
    }
    function sg(e) {
      nl === null ? nl = [e] : nl.push(e);
    }
    var t2 = o.ReactCurrentBatchConfig, n2 = null;
    function r2() {
      return t2.transition;
    }
    var ni = { recordUnsafeLifecycleWarnings: function(e, t) {
    }, flushPendingUnsafeLifecycleWarnings: function() {
    }, recordLegacyContextWarning: function(e, t) {
    }, flushLegacyContextWarning: function() {
    }, discardPendingWarnings: function() {
    } };
    {
      var a2 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & mn && (t = a), a = a.return;
        return t;
      }, cu = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, ff = [], df = [], pf = [], vf = [], mf = [], hf = [], fu = /* @__PURE__ */ new Set();
      ni.recordUnsafeLifecycleWarnings = function(e, t) {
        fu.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== true && ff.push(e), e.mode & mn && typeof t.UNSAFE_componentWillMount == "function" && df.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== true && pf.push(e), e.mode & mn && typeof t.UNSAFE_componentWillReceiveProps == "function" && vf.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== true && mf.push(e), e.mode & mn && typeof t.UNSAFE_componentWillUpdate == "function" && hf.push(e));
      }, ni.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ff.length > 0 && (ff.forEach(function(_) {
          e.add(ze(_) || "Component"), fu.add(_.type);
        }), ff = []);
        var t = /* @__PURE__ */ new Set();
        df.length > 0 && (df.forEach(function(_) {
          t.add(ze(_) || "Component"), fu.add(_.type);
        }), df = []);
        var a = /* @__PURE__ */ new Set();
        pf.length > 0 && (pf.forEach(function(_) {
          a.add(ze(_) || "Component"), fu.add(_.type);
        }), pf = []);
        var i = /* @__PURE__ */ new Set();
        vf.length > 0 && (vf.forEach(function(_) {
          i.add(ze(_) || "Component"), fu.add(_.type);
        }), vf = []);
        var l = /* @__PURE__ */ new Set();
        mf.length > 0 && (mf.forEach(function(_) {
          l.add(ze(_) || "Component"), fu.add(_.type);
        }), mf = []);
        var s = /* @__PURE__ */ new Set();
        if (hf.length > 0 && (hf.forEach(function(_) {
          s.add(ze(_) || "Component"), fu.add(_.type);
        }), hf = []), t.size > 0) {
          var f = cu(t);
          d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var m = cu(i);
          d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var h = cu(s);
          d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
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
        if (l.size > 0) {
          var O = cu(l);
          p(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var jp = /* @__PURE__ */ new Map(), pD = /* @__PURE__ */ new Set();
      ni.recordLegacyContextWarning = function(e, t) {
        var a = a2(e);
        if (a === null) {
          d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!pD.has(e.type)) {
          var i = jp.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jp.set(a, i)), i.push(e));
        }
      }, ni.flushLegacyContextWarning = function() {
        jp.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ze(s) || "Component"), pD.add(s.type);
            });
            var l = cu(i);
            try {
              zt(a), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              un();
            }
          }
        });
      }, ni.discardPendingWarnings = function() {
        ff = [], df = [], pf = [], vf = [], mf = [], hf = [], jp = /* @__PURE__ */ new Map();
      };
    }
    function ri(e, t) {
      if (e && e.defaultProps) {
        var a = Fe({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var cg = Zo(null), fg;
    fg = {};
    var Pp = null, bs = null, dg = null, Hp = false;
    function Fp() {
      Pp = null, bs = null, dg = null, Hp = false;
    }
    function vD() {
      Hp = true;
    }
    function mD() {
      Hp = false;
    }
    function hD(e, t, a) {
      cr(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      sr(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (is(i.childLanes, t) ? l !== null && !is(l.childLanes, t) && (l.childLanes = Ye(l.childLanes, t)) : (i.childLanes = Ye(i.childLanes, t), l !== null && (l.childLanes = Ye(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function i2(e, t, a) {
      o2(e, t, a);
    }
    function o2(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === T) {
                var m = Ic(a), h = vo(jt, m);
                h.tag = Yp;
                var S = i.updateQueue;
                if (S !== null) {
                  var w = S.shared, O = w.pending;
                  O === null ? h.next = h : (h.next = O.next, O.next = h), w.pending = h;
                }
              }
              i.lanes = Ye(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = Ye(_.lanes, a)), vg(i.return, a, e), s.lanes = Ye(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === C)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Re) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = Ye(P.lanes, a);
          var z = P.alternate;
          z !== null && (z.lanes = Ye(z.lanes, a)), vg(P, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var F = l.sibling;
            if (F !== null) {
              F.return = l.return, l = F;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function ws(e, t) {
      Pp = e, bs = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && Of(), a.firstContext = null);
      }
    }
    function hn(e) {
      Hp && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = { context: e, memoizedValue: t, next: null };
        if (bs === null) {
          if (Pp === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          bs = a, Pp.dependencies = { lanes: G, firstContext: a };
        } else
          bs = bs.next = a;
      }
      return t;
    }
    var du = null;
    function mg(e) {
      du === null ? du = [e] : du.push(e);
    }
    function l2() {
      if (du !== null) {
        for (var e = 0; e < du.length; e++) {
          var t = du[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        du = null;
      }
    }
    function yD(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, mg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Vp(e, i);
    }
    function u2(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, mg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function s2(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, mg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, Vp(e, i);
    }
    function Vr(e, t) {
      return Vp(e, t);
    }
    var c2 = Vp;
    function Vp(e, t) {
      e.lanes = Ye(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ye(a.lanes, t)), a === null && (e.flags & (vn | no)) !== ke && SR(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ye(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ye(a.childLanes, t) : (l.flags & (vn | no)) !== ke && SR(e), i = l, l = l.return;
      if (i.tag === U) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gD = 0, SD = 1, Yp = 2, hg = 3, Qp = false, yg, Wp;
    yg = false, Wp = null;
    function gg(e) {
      var t = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: G }, effects: null };
      e.updateQueue = t;
    }
    function bD(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects };
        t.updateQueue = l;
      }
    }
    function vo(e, t) {
      var a = { eventTime: e, lane: t, tag: gD, payload: null, callback: null, next: null };
      return a;
    }
    function rl(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Wp === l && !yg && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = true), mA()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, c2(e, a);
      } else
        return s2(e, l, t, a);
    }
    function Bp(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Aw(a)) {
          var s = l.lanes;
          s = jw(s, e.pendingLanes);
          var f = Ye(s, a);
          l.lanes = f, my(e, f);
        }
      }
    }
    function Sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var h = m;
            do {
              var S = { eventTime: h.eventTime, lane: h.lane, tag: h.tag, payload: h.payload, callback: h.callback, next: null };
              f === null ? s = f = S : (f.next = S, f = S), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = { baseState: l.baseState, firstBaseUpdate: s, lastBaseUpdate: f, shared: l.shared, effects: l.effects }, e.updateQueue = a;
          return;
        }
      }
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function f2(e, t, a, i, l, s) {
      switch (a.tag) {
        case SD: {
          var f = a.payload;
          if (typeof f == "function") {
            vD();
            var m = f.call(s, i, l);
            {
              if (e.mode & mn) {
                jn(true);
                try {
                  f.call(s, i, l);
                } finally {
                  jn(false);
                }
              }
              mD();
            }
            return m;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~Er | St;
        case gD: {
          var h = a.payload, S;
          if (typeof h == "function") {
            vD(), S = h.call(s, i, l);
            {
              if (e.mode & mn) {
                jn(true);
                try {
                  h.call(s, i, l);
                } finally {
                  jn(false);
                }
              }
              mD();
            }
          } else
            S = h;
          return S == null ? i : Fe({}, i, S);
        }
        case Yp:
          return Qp = true, i;
      }
      return i;
    }
    function Xp(e, t, a, i) {
      var l = e.updateQueue;
      Qp = false, Wp = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var h = m, S = h.next;
        h.next = null, f === null ? s = S : f.next = S, f = h;
        var w = e.alternate;
        if (w !== null) {
          var O = w.updateQueue, _ = O.lastBaseUpdate;
          _ !== f && (_ === null ? O.firstBaseUpdate = S : _.next = S, O.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var P = l.baseState, z = G, F = null, de = null, De = null, Se = s;
        do {
          var qe = Se.lane, Ke = Se.eventTime;
          if (is(i, qe)) {
            if (De !== null) {
              var Y = { eventTime: Ke, lane: Pn, tag: Se.tag, payload: Se.payload, callback: Se.callback, next: null };
              De = De.next = Y;
            }
            P = f2(e, l, Se, P, t, a);
            var $ = Se.callback;
            if ($ !== null && Se.lane !== Pn) {
              e.flags |= Mh;
              var Z = l.effects;
              Z === null ? l.effects = [Se] : Z.push(Se);
            }
          } else {
            var I = { eventTime: Ke, lane: qe, tag: Se.tag, payload: Se.payload, callback: Se.callback, next: null };
            De === null ? (de = De = I, F = P) : De = De.next = I, z = Ye(z, qe);
          }
          if (Se = Se.next, Se === null) {
            if (m = l.shared.pending, m === null)
              break;
            var me = m, ce = me.next;
            me.next = null, Se = ce, l.lastBaseUpdate = me, l.shared.pending = null;
          }
        } while (true);
        De === null && (F = P), l.baseState = F, l.firstBaseUpdate = de, l.lastBaseUpdate = De;
        var Ne = l.shared.interleaved;
        if (Ne !== null) {
          var je = Ne;
          do
            z = Ye(z, je.lane), je = je.next;
          while (je !== Ne);
        } else
          s === null && (l.shared.lanes = G);
        Ff(z), e.lanes = z, e.memoizedState = P;
      }
      Wp = null;
    }
    function d2(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function wD() {
      Qp = false;
    }
    function Jp() {
      return Qp;
    }
    function xD(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, d2(f, a));
        }
    }
    var bg = {}, DD = new n.Component().refs, wg, xg, Dg, Cg, Rg, CD, Gp, Eg, Tg, kg;
    {
      wg = /* @__PURE__ */ new Set(), xg = /* @__PURE__ */ new Set(), Dg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set(), Rg = /* @__PURE__ */ new Set(), Tg = /* @__PURE__ */ new Set(), kg = /* @__PURE__ */ new Set();
      var RD = /* @__PURE__ */ new Set();
      Gp = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          RD.has(a) || (RD.add(a), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, CD = function(e, t) {
        if (t === void 0) {
          var a = ot(e) || "Component";
          Rg.has(a) || (Rg.add(a), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(bg, "_processChildContext", { enumerable: false, value: function() {
        throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
      } }), Object.freeze(bg);
    }
    function _g(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & mn) {
          jn(true);
          try {
            s = a(i, l);
          } finally {
            jn(false);
          }
        }
        CD(t, s);
      }
      var f = s == null ? l : Fe({}, l, s);
      if (e.memoizedState = f, e.lanes === G) {
        var m = e.updateQueue;
        m.baseState = f;
      }
    }
    var Og = { isMounted: wN, enqueueSetState: function(e, t, a) {
      var i = Ku(e), l = _r(), s = fl(i), f = vo(l, s);
      f.payload = t, a != null && (Gp(a, "setState"), f.callback = a);
      var m = rl(i, f, s);
      m !== null && (Ln(m, i, s, l), Bp(m, i, s)), Yh(i, s);
    }, enqueueReplaceState: function(e, t, a) {
      var i = Ku(e), l = _r(), s = fl(i), f = vo(l, s);
      f.tag = SD, f.payload = t, a != null && (Gp(a, "replaceState"), f.callback = a);
      var m = rl(i, f, s);
      m !== null && (Ln(m, i, s, l), Bp(m, i, s)), Yh(i, s);
    }, enqueueForceUpdate: function(e, t) {
      var a = Ku(e), i = _r(), l = fl(a), s = vo(i, l);
      s.tag = Yp, t != null && (Gp(t, "forceUpdate"), s.callback = t);
      var f = rl(a, s, l);
      f !== null && (Ln(f, a, l, i), Bp(f, a, l)), KN(a, l);
    } };
    function ED(e, t, a, i, l, s, f) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var h = m.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & mn) {
            jn(true);
            try {
              h = m.shouldComponentUpdate(i, s, f);
            } finally {
              jn(false);
            }
          }
          h === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ot(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Jc(a, i) || !Jc(l, s) : true;
    }
    function p2(e, t, a) {
      var i = e.stateNode;
      {
        var l = ot(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Tg.has(t) && (Tg.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ot(t) || "A pure component"), typeof i.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Dg.has(t) && (Dg.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ot(t))), typeof i.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || tt(m)) && d("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function TD(e, t) {
      t.updater = Og, e.stateNode = t, hN(t, e), t._reactInternalInstance = bg;
    }
    function kD(e, t, a) {
      var i = false, l = pa, s = pa, f = t.contextType;
      if ("contextType" in t) {
        var m = f === null || f !== void 0 && f.$$typeof === ae && f._context === void 0;
        if (!m && !kg.has(t)) {
          kg.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === W ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ot(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = hn(f);
      else {
        l = ms(e, t, true);
        var S = t.contextTypes;
        i = S != null, s = i ? hs(e, l) : pa;
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
      TD(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var _ = ot(t) || "Component";
          xg.has(_) || (xg.add(_), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, w.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var P = null, z = null, F = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== true ? P = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== true ? z = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== true ? F = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), P !== null || z !== null || F !== null) {
            var de = ot(t) || "Component", De = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Cg.has(de) || (Cg.add(de), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, De, P !== null ? `
  ` + P : "", z !== null ? `
  ` + z : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && Kx(e, l, s), w;
    }
    function v2(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ze(e) || "Component"), Og.enqueueReplaceState(t, t.state, null));
    }
    function _D(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ze(e) || "Component";
          wg.has(s) || (wg.add(s), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Og.enqueueReplaceState(t, t.state, null);
      }
    }
    function Ng(e, t, a, i) {
      p2(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = DD, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = hn(s);
      else {
        var f = ms(e, t, true);
        l.context = hs(e, f);
      }
      {
        if (l.state === a) {
          var m = ot(t) || "Component";
          Eg.has(m) || (Eg.add(m), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & mn && ni.recordLegacyContextWarning(e, l), ni.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (_g(e, t, h, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (v2(e, l), Xp(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var S = lt;
        S |= Jl, (e.mode & _i) !== _e && (S |= ro), e.flags |= S;
      }
    }
    function m2(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, m = t.contextType, h = pa;
      if (typeof m == "object" && m !== null)
        h = hn(m);
      else {
        var S = ms(e, t, true);
        h = hs(e, S);
      }
      var w = t.getDerivedStateFromProps, O = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !O && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== h) && _D(e, l, a, h), wD();
      var _ = e.memoizedState, P = l.state = _;
      if (Xp(e, a, l, i), P = e.memoizedState, s === a && _ === P && !Np() && !Jp()) {
        if (typeof l.componentDidMount == "function") {
          var z = lt;
          z |= Jl, (e.mode & _i) !== _e && (z |= ro), e.flags |= z;
        }
        return false;
      }
      typeof w == "function" && (_g(e, t, w, a), P = e.memoizedState);
      var F = Jp() || ED(e, t, s, a, _, P, h);
      if (F) {
        if (!O && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var de = lt;
          de |= Jl, (e.mode & _i) !== _e && (de |= ro), e.flags |= de;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var De = lt;
          De |= Jl, (e.mode & _i) !== _e && (De |= ro), e.flags |= De;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return l.props = a, l.state = P, l.context = h, F;
    }
    function h2(e, t, a, i, l) {
      var s = t.stateNode;
      bD(e, t);
      var f = t.memoizedProps, m = t.type === t.elementType ? f : ri(t.type, f);
      s.props = m;
      var h = t.pendingProps, S = s.context, w = a.contextType, O = pa;
      if (typeof w == "object" && w !== null)
        O = hn(w);
      else {
        var _ = ms(t, a, true);
        O = hs(t, _);
      }
      var P = a.getDerivedStateFromProps, z = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || S !== O) && _D(t, s, i, O), wD();
      var F = t.memoizedState, de = s.state = F;
      if (Xp(t, i, s, l), de = t.memoizedState, f === h && F === de && !Np() && !Jp() && !bn)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Bl), false;
      typeof P == "function" && (_g(t, a, P, i), de = t.memoizedState);
      var De = Jp() || ED(t, a, m, i, F, de, O) || bn;
      return De ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, O)), typeof s.componentDidUpdate == "function" && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Bl)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Bl), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = O, De;
    }
    var Lg, Ug, Ig, $g, Mg, OD = function(e, t) {
    };
    Lg = false, Ug = false, Ig = {}, $g = {}, Mg = {}, OD = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = true;
        var a = ze(t) || "Component";
        $g[a] || ($g[a] = true, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function yf(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & mn || Qe) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = ze(e) || "Component";
          Ig[l] || (d('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Ig[l] = true);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var m = s;
            if (m.tag !== T)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = m.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          Yn(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var w = function(O) {
            var _ = h.refs;
            _ === DD && (_ = h.refs = {}), O === null ? delete _[S] : _[S] = O;
          };
          return w._stringRef = S, w;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function qp(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Kp(e) {
      {
        var t = ze(e) || "Component";
        if (Mg[t])
          return;
        Mg[t] = true, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function ND(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function LD(e) {
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
      function i(I, Y) {
        for (var $ = /* @__PURE__ */ new Map(), Z = Y; Z !== null; )
          Z.key !== null ? $.set(Z.key, Z) : $.set(Z.index, Z), Z = Z.sibling;
        return $;
      }
      function l(I, Y) {
        var $ = bu(I, Y);
        return $.index = 0, $.sibling = null, $;
      }
      function s(I, Y, $) {
        if (I.index = $, !e)
          return I.flags |= Sw, Y;
        var Z = I.alternate;
        if (Z !== null) {
          var me = Z.index;
          return me < Y ? (I.flags |= vn, Y) : me;
        } else
          return I.flags |= vn, Y;
      }
      function f(I) {
        return e && I.alternate === null && (I.flags |= vn), I;
      }
      function m(I, Y, $, Z) {
        if (Y === null || Y.tag !== J) {
          var me = cS($, I.mode, Z);
          return me.return = I, me;
        } else {
          var ce = l(Y, $);
          return ce.return = I, ce;
        }
      }
      function h(I, Y, $, Z) {
        var me = $.type;
        if (me === ra)
          return w(I, Y, $.props.children, Z, $.key);
        if (Y !== null && (Y.elementType === me || DR(Y, $) || typeof me == "object" && me !== null && me.$$typeof === Ce && ND(me) === Y.type)) {
          var ce = l(Y, $.props);
          return ce.ref = yf(I, Y, $), ce.return = I, ce._debugSource = $._source, ce._debugOwner = $._owner, ce;
        }
        var Ne = sS($, I.mode, Z);
        return Ne.ref = yf(I, Y, $), Ne.return = I, Ne;
      }
      function S(I, Y, $, Z) {
        if (Y === null || Y.tag !== j || Y.stateNode.containerInfo !== $.containerInfo || Y.stateNode.implementation !== $.implementation) {
          var me = fS($, I.mode, Z);
          return me.return = I, me;
        } else {
          var ce = l(Y, $.children || []);
          return ce.return = I, ce;
        }
      }
      function w(I, Y, $, Z, me) {
        if (Y === null || Y.tag !== ie) {
          var ce = pl($, I.mode, Z, me);
          return ce.return = I, ce;
        } else {
          var Ne = l(Y, $);
          return Ne.return = I, Ne;
        }
      }
      function O(I, Y, $) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var Z = cS("" + Y, I.mode, $);
          return Z.return = I, Z;
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Ra: {
              var me = sS(Y, I.mode, $);
              return me.ref = yf(I, null, Y), me.return = I, me;
            }
            case na: {
              var ce = fS(Y, I.mode, $);
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
          qp(I, Y);
        }
        return typeof Y == "function" && Kp(I), null;
      }
      function _(I, Y, $, Z) {
        var me = Y !== null ? Y.key : null;
        if (typeof $ == "string" && $ !== "" || typeof $ == "number")
          return me !== null ? null : m(I, Y, "" + $, Z);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Ra:
              return $.key === me ? h(I, Y, $, Z) : null;
            case na:
              return $.key === me ? S(I, Y, $, Z) : null;
            case Ce: {
              var ce = $._payload, Ne = $._init;
              return _(I, Y, Ne(ce), Z);
            }
          }
          if (tt($) || Wa($))
            return me !== null ? null : w(I, Y, $, Z, null);
          qp(I, $);
        }
        return typeof $ == "function" && Kp(I), null;
      }
      function P(I, Y, $, Z, me) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ce = I.get($) || null;
          return m(Y, ce, "" + Z, me);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Ra: {
              var Ne = I.get(Z.key === null ? $ : Z.key) || null;
              return h(Y, Ne, Z, me);
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
          qp(Y, Z);
        }
        return typeof Z == "function" && Kp(Y), null;
      }
      function z(I, Y, $) {
        {
          if (typeof I != "object" || I === null)
            return Y;
          switch (I.$$typeof) {
            case Ra:
            case na:
              OD(I, $);
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
        for (var Nr = i(I, mt); ht < $.length; ht++) {
          var pr = P(Nr, I, ht, $[ht], Z);
          pr !== null && (e && pr.alternate !== null && Nr.delete(pr.key === null ? ht : pr.key), sn = s(pr, sn, ht), kt === null ? je = pr : kt.sibling = pr, kt = pr);
        }
        if (e && Nr.forEach(function(zs) {
          return t(I, zs);
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
          typeof Symbol == "function" && $[Symbol.toStringTag] === "Generator" && (Ug || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ug = true), $.entries === me && (Lg || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Lg = true);
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
            var zs = tr;
            lu(I, zs);
          }
          return sn;
        }
        for (var Bf = i(I, rn); !Or.done; tr++, Or = mt.next()) {
          var Pi = P(Bf, I, tr, Or.value, Z);
          Pi !== null && (e && Pi.alternate !== null && Bf.delete(Pi.key === null ? tr : Pi.key), dr = s(Pi, dr, tr), ht === null ? sn = Pi : ht.sibling = Pi, ht = Pi);
        }
        if (e && Bf.forEach(function($z) {
          return t(I, $z);
        }), Xn()) {
          var Iz = tr;
          lu(I, Iz);
        }
        return sn;
      }
      function De(I, Y, $, Z) {
        if (Y !== null && Y.tag === J) {
          a(I, Y.sibling);
          var me = l(Y, $);
          return me.return = I, me;
        }
        a(I, Y);
        var ce = cS($, I.mode, Z);
        return ce.return = I, ce;
      }
      function Se(I, Y, $, Z) {
        for (var me = $.key, ce = Y; ce !== null; ) {
          if (ce.key === me) {
            var Ne = $.type;
            if (Ne === ra) {
              if (ce.tag === ie) {
                a(I, ce.sibling);
                var je = l(ce, $.props.children);
                return je.return = I, je._debugSource = $._source, je._debugOwner = $._owner, je;
              }
            } else if (ce.elementType === Ne || DR(ce, $) || typeof Ne == "object" && Ne !== null && Ne.$$typeof === Ce && ND(Ne) === ce.type) {
              a(I, ce.sibling);
              var kt = l(ce, $.props);
              return kt.ref = yf(I, ce, $), kt.return = I, kt._debugSource = $._source, kt._debugOwner = $._owner, kt;
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
          var sn = sS($, I.mode, Z);
          return sn.ref = yf(I, Y, $), sn.return = I, sn;
        }
      }
      function qe(I, Y, $, Z) {
        for (var me = $.key, ce = Y; ce !== null; ) {
          if (ce.key === me)
            if (ce.tag === j && ce.stateNode.containerInfo === $.containerInfo && ce.stateNode.implementation === $.implementation) {
              a(I, ce.sibling);
              var Ne = l(ce, $.children || []);
              return Ne.return = I, Ne;
            } else {
              a(I, ce);
              break;
            }
          else
            t(I, ce);
          ce = ce.sibling;
        }
        var je = fS($, I.mode, Z);
        return je.return = I, je;
      }
      function Ke(I, Y, $, Z) {
        var me = typeof $ == "object" && $ !== null && $.type === ra && $.key === null;
        if (me && ($ = $.props.children), typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Ra:
              return f(Se(I, Y, $, Z));
            case na:
              return f(qe(I, Y, $, Z));
            case Ce:
              var ce = $._payload, Ne = $._init;
              return Ke(I, Y, Ne(ce), Z);
          }
          if (tt($))
            return F(I, Y, $, Z);
          if (Wa($))
            return de(I, Y, $, Z);
          qp(I, $);
        }
        return typeof $ == "string" && $ !== "" || typeof $ == "number" ? f(De(I, Y, "" + $, Z)) : (typeof $ == "function" && Kp(I), a(I, Y));
      }
      return Ke;
    }
    var xs = LD(true), UD = LD(false);
    function y2(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = bu(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = bu(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function g2(e, t) {
      for (var a = e.child; a !== null; )
        KA(a, t), a = a.sibling;
    }
    var gf = {}, al = Zo(gf), Sf = Zo(gf), Zp = Zo(gf);
    function ev(e) {
      if (e === gf)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ID() {
      var e = ev(Zp.current);
      return e;
    }
    function Ag(e, t) {
      cr(Zp, t, e), cr(Sf, e, e), cr(al, gf, e);
      var a = LI(t);
      sr(al, e), cr(al, a, e);
    }
    function Ds(e) {
      sr(al, e), sr(Sf, e), sr(Zp, e);
    }
    function zg() {
      var e = ev(al.current);
      return e;
    }
    function $D(e) {
      var t = ev(Zp.current), a = ev(al.current), i = UI(a, e.type);
      a !== i && (cr(Sf, e, e), cr(al, i, e));
    }
    function jg(e) {
      Sf.current === e && (sr(al, e), sr(Sf, e));
    }
    var S2 = 0, MD = 1, AD = 1, bf = 2, ai = Zo(S2);
    function Pg(e, t) {
      return (e & t) !== 0;
    }
    function Cs(e) {
      return e & MD;
    }
    function Hg(e, t) {
      return e & MD | t;
    }
    function b2(e, t) {
      return e | t;
    }
    function il(e, t) {
      cr(ai, t, e);
    }
    function Rs(e) {
      sr(ai, e);
    }
    function w2(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var i = e.memoizedProps;
      return true;
    }
    function tv(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === X) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Bx(i) || By(i))
              return t;
          }
        } else if (t.tag === dt && t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & St) !== ke;
          if (l)
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
    var Yr = 0, Rn = 1, Ui = 2, En = 4, Jn = 8, Fg = [];
    function Vg() {
      for (var e = 0; e < Fg.length; e++) {
        var t = Fg[e];
        t._workInProgressVersionPrimary = null;
      }
      Fg.length = 0;
    }
    function x2(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var pe = o.ReactCurrentDispatcher, wf = o.ReactCurrentBatchConfig, Yg, Es;
    Yg = /* @__PURE__ */ new Set();
    var pu = G, Tt = null, Tn = null, kn = null, nv = false, xf = false, Df = 0, D2 = 0, C2 = 25, B = null, La = null, ol = -1, Qg = false;
    function xt() {
      {
        var e = B;
        La === null ? La = [e] : La.push(e);
      }
    }
    function le() {
      {
        var e = B;
        La !== null && (ol++, La[ol] !== e && R2(e));
      }
    }
    function Ts(e) {
      e != null && !tt(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function R2(e) {
      {
        var t = ze(Tt);
        if (!Yg.has(t) && (Yg.add(t), La !== null)) {
          for (var a = "", i = 30, l = 0; l <= ol; l++) {
            for (var s = La[l], f = l === ol ? e : s, m = l + 1 + ". " + s; m.length < i; )
              m += " ";
            m += f + `
`, a += m;
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
    function Wg(e, t) {
      if (Qg)
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
    function ks(e, t, a, i, l, s) {
      pu = s, Tt = t, La = e !== null ? e._debugHookTypes : null, ol = -1, Qg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = G, e !== null && e.memoizedState !== null ? pe.current = iC : La !== null ? pe.current = aC : pe.current = rC;
      var f = a(i, l);
      if (xf) {
        var m = 0;
        do {
          if (xf = false, Df = 0, m >= C2)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, Qg = false, Tn = null, kn = null, t.updateQueue = null, ol = -1, pe.current = oC, f = a(i, l);
        } while (xf);
      }
      pe.current = mv, t._debugHookTypes = La;
      var h = Tn !== null && Tn.next !== null;
      if (pu = G, Tt = null, Tn = null, kn = null, B = null, La = null, ol = -1, e !== null && (e.flags & ao) !== (t.flags & ao) && (e.mode & nt) !== _e && d("Internal React error: Expected static flag was missing. Please notify the React team."), nv = false, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function _s() {
      var e = Df !== 0;
      return Df = 0, e;
    }
    function zD(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & _i) !== _e ? t.flags &= ~(Jd | ro | qa | lt) : t.flags &= ~(qa | lt), e.lanes = np(e.lanes, a);
    }
    function jD() {
      if (pe.current = mv, nv) {
        for (var e = Tt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        nv = false;
      }
      pu = G, Tt = null, Tn = null, kn = null, La = null, ol = -1, B = null, KD = false, xf = false, Df = 0;
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
        var i = { memoizedState: Tn.memoizedState, baseState: Tn.baseState, baseQueue: Tn.baseQueue, queue: Tn.queue, next: null };
        kn === null ? Tt.memoizedState = kn = i : kn = kn.next = i;
      }
      return kn;
    }
    function PD() {
      return { lastEffect: null, stores: null };
    }
    function Bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Xg(e, t, a) {
      var i = Ii(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = { pending: null, interleaved: null, lanes: G, dispatch: null, lastRenderedReducer: e, lastRenderedState: l };
      i.queue = s;
      var f = s.dispatch = _2.bind(null, Tt, s);
      return [i.memoizedState, f];
    }
    function Jg(e, t, a) {
      var i = Ua(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Tn, f = s.baseQueue, m = l.pending;
      if (m !== null) {
        if (f !== null) {
          var h = f.next, S = m.next;
          f.next = S, m.next = h;
        }
        s.baseQueue !== f && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = m, l.pending = null;
      }
      if (f !== null) {
        var w = f.next, O = s.baseState, _ = null, P = null, z = null, F = w;
        do {
          var de = F.lane;
          if (is(pu, de)) {
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
            z === null ? (P = z = De, _ = O) : z = z.next = De, Tt.lanes = Ye(Tt.lanes, de), Ff(de);
          }
          F = F.next;
        } while (F !== null && F !== w);
        z === null ? _ = O : z.next = P, da(O, i.memoizedState) || Of(), i.memoizedState = O, i.baseState = _, i.baseQueue = z, l.lastRenderedState = O;
      }
      var Ke = l.interleaved;
      if (Ke !== null) {
        var I = Ke;
        do {
          var Y = I.lane;
          Tt.lanes = Ye(Tt.lanes, Y), Ff(Y), I = I.next;
        } while (I !== Ke);
      } else
        f === null && (l.lanes = G);
      var $ = l.dispatch;
      return [i.memoizedState, $];
    }
    function Gg(e, t, a) {
      var i = Ua(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, m = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var h = f.next, S = h;
        do {
          var w = S.action;
          m = e(m, w), S = S.next;
        } while (S !== h);
        da(m, i.memoizedState) || Of(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, s];
    }
    function q4(e, t, a) {
    }
    function K4(e, t, a) {
    }
    function qg(e, t, a) {
      var i = Tt, l = Ii(), s, f = Xn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Es || s !== a() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Es = true);
      } else {
        if (s = t(), !Es) {
          var m = t();
          da(s, m) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Es = true);
        }
        var h = Uv();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tp(h, pu) || HD(i, t, s);
      }
      l.memoizedState = s;
      var S = { value: s, getSnapshot: t };
      return l.queue = S, lv(VD.bind(null, i, S, e), [e]), i.flags |= qa, Cf(Rn | Jn, FD.bind(null, i, S, s, t), void 0, null), s;
    }
    function rv(e, t, a) {
      var i = Tt, l = Ua(), s = t();
      if (!Es) {
        var f = t();
        da(s, f) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Es = true);
      }
      var m = l.memoizedState, h = !da(m, s);
      h && (l.memoizedState = s, Of());
      var S = l.queue;
      if (Ef(VD.bind(null, i, S, e), [e]), S.getSnapshot !== t || h || kn !== null && kn.memoizedState.tag & Rn) {
        i.flags |= qa, Cf(Rn | Jn, FD.bind(null, i, S, s, t), void 0, null);
        var w = Uv();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tp(w, pu) || HD(i, t, s);
      }
      return s;
    }
    function HD(e, t, a) {
      e.flags |= Xd;
      var i = { getSnapshot: t, value: a }, l = Tt.updateQueue;
      if (l === null)
        l = PD(), Tt.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function FD(e, t, a, i) {
      t.value = a, t.getSnapshot = i, YD(t) && QD(e);
    }
    function VD(e, t, a) {
      var i = function() {
        YD(t) && QD(e);
      };
      return a(i);
    }
    function YD(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !da(a, i);
      } catch {
        return true;
      }
    }
    function QD(e) {
      var t = Vr(e, Ie);
      t !== null && Ln(t, e, Ie, jt);
    }
    function av(e) {
      var t = Ii();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = { pending: null, interleaved: null, lanes: G, dispatch: null, lastRenderedReducer: Bg, lastRenderedState: e };
      t.queue = a;
      var i = a.dispatch = O2.bind(null, Tt, a);
      return [t.memoizedState, i];
    }
    function Kg(e) {
      return Jg(Bg);
    }
    function Zg(e) {
      return Gg(Bg);
    }
    function Cf(e, t, a, i) {
      var l = { tag: e, create: t, destroy: a, deps: i, next: null }, s = Tt.updateQueue;
      if (s === null)
        s = PD(), Tt.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var m = f.next;
          f.next = l, l.next = m, s.lastEffect = l;
        }
      }
      return l;
    }
    function e0(e) {
      var t = Ii();
      {
        var a = { current: e };
        return t.memoizedState = a, a;
      }
    }
    function iv(e) {
      var t = Ua();
      return t.memoizedState;
    }
    function Rf(e, t, a, i) {
      var l = Ii(), s = i === void 0 ? null : i;
      Tt.flags |= e, l.memoizedState = Cf(Rn | t, a, void 0, s);
    }
    function ov(e, t, a, i) {
      var l = Ua(), s = i === void 0 ? null : i, f = void 0;
      if (Tn !== null) {
        var m = Tn.memoizedState;
        if (f = m.destroy, s !== null) {
          var h = m.deps;
          if (Wg(s, h)) {
            l.memoizedState = Cf(t, a, f, s);
            return;
          }
        }
      }
      Tt.flags |= e, l.memoizedState = Cf(Rn | t, a, f, s);
    }
    function lv(e, t) {
      return (Tt.mode & _i) !== _e ? Rf(Jd | qa | jh, Jn, e, t) : Rf(qa | jh, Jn, e, t);
    }
    function Ef(e, t) {
      return ov(qa, Jn, e, t);
    }
    function t0(e, t) {
      return Rf(lt, Ui, e, t);
    }
    function uv(e, t) {
      return ov(lt, Ui, e, t);
    }
    function n0(e, t) {
      var a = lt;
      return a |= Jl, (Tt.mode & _i) !== _e && (a |= ro), Rf(a, En, e, t);
    }
    function sv(e, t) {
      return ov(lt, En, e, t);
    }
    function WD(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function r0(e, t, a) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = lt;
      return l |= Jl, (Tt.mode & _i) !== _e && (l |= ro), Rf(l, En, WD.bind(null, t, e), i);
    }
    function cv(e, t, a) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return ov(lt, En, WD.bind(null, t, e), i);
    }
    function E2(e, t) {
    }
    var fv = E2;
    function a0(e, t) {
      var a = Ii(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function dv(e, t) {
      var a = Ua(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Wg(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function i0(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function pv(e, t) {
      var a = Ua(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (Wg(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function o0(e) {
      var t = Ii();
      return t.memoizedState = e, e;
    }
    function BD(e) {
      var t = Ua(), a = Tn, i = a.memoizedState;
      return JD(t, i, e);
    }
    function XD(e) {
      var t = Ua();
      if (Tn === null)
        return t.memoizedState = e, e;
      var a = Tn.memoizedState;
      return JD(t, a, e);
    }
    function JD(e, t, a) {
      var i = !uL(pu);
      if (i) {
        if (!da(a, t)) {
          var l = zw();
          Tt.lanes = Ye(Tt.lanes, l), Ff(l), e.baseState = true;
        }
        return t;
      } else
        return e.baseState && (e.baseState = false, Of()), e.memoizedState = a, a;
    }
    function T2(e, t, a) {
      var i = Za();
      Hn(yL(i, oo)), e(true);
      var l = wf.transition;
      wf.transition = {};
      var s = wf.transition;
      wf.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(false), t();
      } finally {
        if (Hn(i), wf.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && p("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function l0() {
      var e = av(false), t = e[0], a = e[1], i = T2.bind(null, a), l = Ii();
      return l.memoizedState = i, [t, i];
    }
    function GD() {
      var e = Kg(), t = e[0], a = Ua(), i = a.memoizedState;
      return [t, i];
    }
    function qD() {
      var e = Zg(), t = e[0], a = Ua(), i = a.memoizedState;
      return [t, i];
    }
    var KD = false;
    function k2() {
      return KD;
    }
    function u0() {
      var e = Ii(), t = Uv(), a = t.identifierPrefix, i;
      if (Xn()) {
        var l = F$();
        i = ":" + a + "R" + l;
        var s = Df++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = D2++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function vv() {
      var e = Ua(), t = e.memoizedState;
      return t;
    }
    function _2(e, t, a) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fl(e), l = { lane: i, action: a, hasEagerState: false, eagerState: null, next: null };
      if (ZD(e))
        eC(t, l);
      else {
        var s = yD(e, t, l, i);
        if (s !== null) {
          var f = _r();
          Ln(s, e, i, f), tC(s, t, i);
        }
      }
      nC(e, i);
    }
    function O2(e, t, a) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = fl(e), l = { lane: i, action: a, hasEagerState: false, eagerState: null, next: null };
      if (ZD(e))
        eC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === G && (s === null || s.lanes === G)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var m;
            m = pe.current, pe.current = ii;
            try {
              var h = t.lastRenderedState, S = f(h, a);
              if (l.hasEagerState = true, l.eagerState = S, da(S, h)) {
                u2(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              pe.current = m;
            }
          }
        }
        var w = yD(e, t, l, i);
        if (w !== null) {
          var O = _r();
          Ln(w, e, i, O), tC(w, t, i);
        }
      }
      nC(e, i);
    }
    function ZD(e) {
      var t = e.alternate;
      return e === Tt || t !== null && t === Tt;
    }
    function eC(e, t) {
      xf = nv = true;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function tC(e, t, a) {
      if (Aw(a)) {
        var i = t.lanes;
        i = jw(i, e.pendingLanes);
        var l = Ye(i, a);
        t.lanes = l, my(e, l);
      }
    }
    function nC(e, t, a) {
      Yh(e, t);
    }
    var mv = { readContext: hn, useCallback: fr, useContext: fr, useEffect: fr, useImperativeHandle: fr, useInsertionEffect: fr, useLayoutEffect: fr, useMemo: fr, useReducer: fr, useRef: fr, useState: fr, useDebugValue: fr, useDeferredValue: fr, useTransition: fr, useMutableSource: fr, useSyncExternalStore: fr, useId: fr, unstable_isNewReconciler: at }, rC = null, aC = null, iC = null, oC = null, $i = null, ii = null, hv = null;
    {
      var s0 = function() {
        d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, $e = function() {
        d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      rC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", xt(), Ts(t), a0(e, t);
      }, useContext: function(e) {
        return B = "useContext", xt(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", xt(), Ts(t), lv(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", xt(), Ts(a), r0(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", xt(), Ts(t), t0(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", xt(), Ts(t), n0(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", xt(), Ts(t);
        var a = pe.current;
        pe.current = $i;
        try {
          return i0(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", xt();
        var i = pe.current;
        pe.current = $i;
        try {
          return Xg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", xt(), e0(e);
      }, useState: function(e) {
        B = "useState", xt();
        var t = pe.current;
        pe.current = $i;
        try {
          return av(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", xt(), void 0;
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", xt(), o0(e);
      }, useTransition: function() {
        return B = "useTransition", xt(), l0();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", xt(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", xt(), qg(e, t, a);
      }, useId: function() {
        return B = "useId", xt(), u0();
      }, unstable_isNewReconciler: at }, aC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", le(), a0(e, t);
      }, useContext: function(e) {
        return B = "useContext", le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", le(), lv(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", le(), r0(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", le(), t0(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", le(), n0(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", le();
        var a = pe.current;
        pe.current = $i;
        try {
          return i0(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", le();
        var i = pe.current;
        pe.current = $i;
        try {
          return Xg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", le(), e0(e);
      }, useState: function(e) {
        B = "useState", le();
        var t = pe.current;
        pe.current = $i;
        try {
          return av(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", le(), void 0;
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", le(), o0(e);
      }, useTransition: function() {
        return B = "useTransition", le(), l0();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", le(), qg(e, t, a);
      }, useId: function() {
        return B = "useId", le(), u0();
      }, unstable_isNewReconciler: at }, iC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", le(), dv(e, t);
      }, useContext: function(e) {
        return B = "useContext", le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", le(), Ef(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", le(), cv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", le(), uv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", le(), sv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", le();
        var a = pe.current;
        pe.current = ii;
        try {
          return pv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", le();
        var i = pe.current;
        pe.current = ii;
        try {
          return Jg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", le(), iv();
      }, useState: function(e) {
        B = "useState", le();
        var t = pe.current;
        pe.current = ii;
        try {
          return Kg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", le(), fv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", le(), BD(e);
      }, useTransition: function() {
        return B = "useTransition", le(), GD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", le(), rv(e, t);
      }, useId: function() {
        return B = "useId", le(), vv();
      }, unstable_isNewReconciler: at }, oC = { readContext: function(e) {
        return hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", le(), dv(e, t);
      }, useContext: function(e) {
        return B = "useContext", le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", le(), Ef(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", le(), cv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", le(), uv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", le(), sv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", le();
        var a = pe.current;
        pe.current = hv;
        try {
          return pv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", le();
        var i = pe.current;
        pe.current = hv;
        try {
          return Gg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", le(), iv();
      }, useState: function(e) {
        B = "useState", le();
        var t = pe.current;
        pe.current = hv;
        try {
          return Zg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", le(), fv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", le(), XD(e);
      }, useTransition: function() {
        return B = "useTransition", le(), qD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", le(), rv(e, t);
      }, useId: function() {
        return B = "useId", le(), vv();
      }, unstable_isNewReconciler: at }, $i = { readContext: function(e) {
        return s0(), hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", $e(), xt(), a0(e, t);
      }, useContext: function(e) {
        return B = "useContext", $e(), xt(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", $e(), xt(), lv(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", $e(), xt(), r0(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", $e(), xt(), t0(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", $e(), xt(), n0(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", $e(), xt();
        var a = pe.current;
        pe.current = $i;
        try {
          return i0(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", $e(), xt();
        var i = pe.current;
        pe.current = $i;
        try {
          return Xg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", $e(), xt(), e0(e);
      }, useState: function(e) {
        B = "useState", $e(), xt();
        var t = pe.current;
        pe.current = $i;
        try {
          return av(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", $e(), xt(), void 0;
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", $e(), xt(), o0(e);
      }, useTransition: function() {
        return B = "useTransition", $e(), xt(), l0();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", $e(), xt(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", $e(), xt(), qg(e, t, a);
      }, useId: function() {
        return B = "useId", $e(), xt(), u0();
      }, unstable_isNewReconciler: at }, ii = { readContext: function(e) {
        return s0(), hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", $e(), le(), dv(e, t);
      }, useContext: function(e) {
        return B = "useContext", $e(), le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", $e(), le(), Ef(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", $e(), le(), cv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", $e(), le(), uv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", $e(), le(), sv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", $e(), le();
        var a = pe.current;
        pe.current = ii;
        try {
          return pv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", $e(), le();
        var i = pe.current;
        pe.current = ii;
        try {
          return Jg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", $e(), le(), iv();
      }, useState: function(e) {
        B = "useState", $e(), le();
        var t = pe.current;
        pe.current = ii;
        try {
          return Kg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", $e(), le(), fv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", $e(), le(), BD(e);
      }, useTransition: function() {
        return B = "useTransition", $e(), le(), GD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", $e(), le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", $e(), le(), rv(e, t);
      }, useId: function() {
        return B = "useId", $e(), le(), vv();
      }, unstable_isNewReconciler: at }, hv = { readContext: function(e) {
        return s0(), hn(e);
      }, useCallback: function(e, t) {
        return B = "useCallback", $e(), le(), dv(e, t);
      }, useContext: function(e) {
        return B = "useContext", $e(), le(), hn(e);
      }, useEffect: function(e, t) {
        return B = "useEffect", $e(), le(), Ef(e, t);
      }, useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", $e(), le(), cv(e, t, a);
      }, useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", $e(), le(), uv(e, t);
      }, useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", $e(), le(), sv(e, t);
      }, useMemo: function(e, t) {
        B = "useMemo", $e(), le();
        var a = pe.current;
        pe.current = ii;
        try {
          return pv(e, t);
        } finally {
          pe.current = a;
        }
      }, useReducer: function(e, t, a) {
        B = "useReducer", $e(), le();
        var i = pe.current;
        pe.current = ii;
        try {
          return Gg(e, t, a);
        } finally {
          pe.current = i;
        }
      }, useRef: function(e) {
        return B = "useRef", $e(), le(), iv();
      }, useState: function(e) {
        B = "useState", $e(), le();
        var t = pe.current;
        pe.current = ii;
        try {
          return Zg(e);
        } finally {
          pe.current = t;
        }
      }, useDebugValue: function(e, t) {
        return B = "useDebugValue", $e(), le(), fv();
      }, useDeferredValue: function(e) {
        return B = "useDeferredValue", $e(), le(), XD(e);
      }, useTransition: function() {
        return B = "useTransition", $e(), le(), qD();
      }, useMutableSource: function(e, t, a) {
        return B = "useMutableSource", $e(), le(), void 0;
      }, useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", $e(), le(), rv(e, t);
      }, useId: function() {
        return B = "useId", $e(), le(), vv();
      }, unstable_isNewReconciler: at };
    }
    var ll = r.unstable_now, lC = 0, yv = -1, Tf = -1, gv = -1, c0 = false, Sv = false;
    function uC() {
      return c0;
    }
    function N2() {
      Sv = true;
    }
    function L2() {
      c0 = false, Sv = false;
    }
    function U2() {
      c0 = Sv, Sv = false;
    }
    function sC() {
      return lC;
    }
    function cC() {
      lC = ll();
    }
    function f0(e) {
      Tf = ll(), e.actualStartTime < 0 && (e.actualStartTime = ll());
    }
    function fC(e) {
      Tf = -1;
    }
    function bv(e, t) {
      if (Tf >= 0) {
        var a = ll() - Tf;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Tf = -1;
      }
    }
    function Mi(e) {
      if (yv >= 0) {
        var t = ll() - yv;
        yv = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Q:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function d0(e) {
      if (gv >= 0) {
        var t = ll() - gv;
        gv = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case U:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Q:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ai() {
      yv = ll();
    }
    function p0() {
      gv = ll();
    }
    function v0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vu(e, t) {
      return { value: e, source: t, stack: jl(t), digest: null };
    }
    function m0(e, t, a) {
      return { value: e, source: null, stack: a ?? null, digest: t ?? null };
    }
    function I2(e, t) {
      return true;
    }
    function h0(e, t) {
      try {
        var a = I2(e, t);
        if (a === false)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === T)
            return;
          console.error(i);
        }
        var m = l ? ze(l) : null, h = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === U)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = ze(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var O = h + `
` + f + `

` + ("" + S);
        console.error(O);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var $2 = typeof WeakMap == "function" ? WeakMap : Map;
    function dC(e, t, a) {
      var i = vo(jt, a);
      i.tag = hg, i.payload = { element: null };
      var l = t.value;
      return i.callback = function() {
        LA(l), h0(e, t);
      }, i;
    }
    function y0(e, t, a) {
      var i = vo(jt, a);
      i.tag = hg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          CR(e), h0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        CR(e), h0(e, t), typeof l != "function" && OA(this);
        var h = t.value, S = t.stack;
        this.componentDidCatch(h, { componentStack: S !== null ? S : "" }), typeof l != "function" && (sa(e.lanes, Ie) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ze(e) || "Unknown"));
      }), i;
    }
    function pC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new $2(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = UA.bind(null, e, t, a);
        Ka && Vf(e, a), t.then(s, s);
      }
    }
    function M2(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function A2(e, t) {
      var a = e.tag;
      if ((e.mode & nt) === _e && (a === x || a === k || a === ee)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function vC(e) {
      var t = e;
      do {
        if (t.tag === X && w2(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function mC(e, t, a, i, l) {
      if ((e.mode & nt) === _e) {
        if (e === t)
          e.flags |= Er;
        else {
          if (e.flags |= St, a.flags |= Ah, a.flags &= ~(yN | Ec), a.tag === T) {
            var s = a.alternate;
            if (s === null)
              a.tag = Me;
            else {
              var f = vo(jt, Ie);
              f.tag = Yp, rl(a, f, Ie);
            }
          }
          a.lanes = Ye(a.lanes, Ie);
        }
        return e;
      }
      return e.flags |= Er, e.lanes = l, e;
    }
    function z2(e, t, a, i, l) {
      if (a.flags |= Ec, Ka && Vf(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        A2(a), Xn() && a.mode & nt && iD();
        var f = vC(t);
        if (f !== null) {
          f.flags &= ~to, mC(f, t, a, e, l), f.mode & nt && pC(e, s, l), M2(f, e, s);
          return;
        } else {
          if (!lL(l)) {
            pC(e, s, l), q0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Xn() && a.mode & nt) {
        iD();
        var h = vC(t);
        if (h !== null) {
          (h.flags & Er) === ke && (h.flags |= to), mC(h, t, a, e, l), sg(vu(i, a));
          return;
        }
      }
      i = vu(i, a), xA(i);
      var S = t;
      do {
        switch (S.tag) {
          case U: {
            var w = i;
            S.flags |= Er;
            var O = Ic(l);
            S.lanes = Ye(S.lanes, O);
            var _ = dC(S, w, O);
            Sg(S, _);
            return;
          }
          case T:
            var P = i, z = S.type, F = S.stateNode;
            if ((S.flags & St) === ke && (typeof z.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !mR(F))) {
              S.flags |= Er;
              var de = Ic(l);
              S.lanes = Ye(S.lanes, de);
              var De = y0(S, P, de);
              Sg(S, De);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function j2() {
      return null;
    }
    var kf = o.ReactCurrentOwner, oi = false, g0, _f, S0, b0, w0, mu, x0, wv;
    g0 = {}, _f = {}, S0 = {}, b0 = {}, w0 = {}, mu = false, x0 = {}, wv = {};
    function Tr(e, t, a, i) {
      e === null ? t.child = UD(t, null, a, i) : t.child = xs(t, e.child, a, i);
    }
    function P2(e, t, a, i) {
      t.child = xs(t, e.child, null, i), t.child = xs(t, null, a, i);
    }
    function hC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ei(s, i, "prop", ot(a));
      }
      var f = a.render, m = t.ref, h, S;
      ws(t, l), kc(t);
      {
        if (kf.current = t, Cr(true), h = ks(e, t, f, i, m, l), S = _s(), t.mode & mn) {
          jn(true);
          try {
            h = ks(e, t, f, i, m, l), S = _s();
          } finally {
            jn(false);
          }
        }
        Cr(false);
      }
      return ts(), e !== null && !oi ? (zD(e, t, l), mo(e, t, l)) : (Xn() && S && rg(t), t.flags |= Zu, Tr(e, t, h, l), t.child);
    }
    function yC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (GA(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = As(s), t.tag = ee, t.type = f, R0(t, s), gC(e, t, f, i, l);
        }
        {
          var m = s.propTypes;
          m && ei(m, i, "prop", ot(s));
        }
        var h = uS(a.type, null, i, t, t.mode, l);
        return h.ref = t.ref, h.return = t, t.child = h, h;
      }
      {
        var S = a.type, w = S.propTypes;
        w && ei(w, i, "prop", ot(S));
      }
      var O = e.child, _ = N0(e, l);
      if (!_) {
        var P = O.memoizedProps, z = a.compare;
        if (z = z !== null ? z : Jc, z(P, i) && e.ref === t.ref)
          return mo(e, t, l);
      }
      t.flags |= Zu;
      var F = bu(O, i);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function gC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ce) {
          var f = s, m = f._payload, h = f._init;
          try {
            s = h(m);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && ei(S, i, "prop", ot(s));
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Jc(w, i) && e.ref === t.ref && t.type === e.type)
          if (oi = false, t.pendingProps = i = w, N0(e, l))
            (e.flags & Ah) !== ke && (oi = true);
          else
            return t.lanes = e.lanes, mo(e, t, l);
      }
      return D0(e, t, a, i, l);
    }
    function SC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Zt)
        if ((t.mode & nt) === _e) {
          var f = { baseLanes: G, cachePool: null, transitions: null };
          t.memoizedState = f, Iv(t, a);
        } else if (sa(a, ua)) {
          var O = { baseLanes: G, cachePool: null, transitions: null };
          t.memoizedState = O;
          var _ = s !== null ? s.baseLanes : a;
          Iv(t, _);
        } else {
          var m = null, h;
          if (s !== null) {
            var S = s.baseLanes;
            h = Ye(S, a);
          } else
            h = a;
          t.lanes = t.childLanes = ua;
          var w = { baseLanes: h, cachePool: m, transitions: null };
          return t.memoizedState = w, t.updateQueue = null, Iv(t, h), null;
        }
      else {
        var P;
        s !== null ? (P = Ye(s.baseLanes, a), t.memoizedState = null) : P = a, Iv(t, P);
      }
      return Tr(e, t, l, a), t.child;
    }
    function H2(e, t, a) {
      var i = t.pendingProps;
      return Tr(e, t, i, a), t.child;
    }
    function F2(e, t, a) {
      var i = t.pendingProps.children;
      return Tr(e, t, i, a), t.child;
    }
    function V2(e, t, a) {
      {
        t.flags |= lt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Tr(e, t, s, a), t.child;
    }
    function bC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Qo, t.flags |= zh);
    }
    function D0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ei(s, i, "prop", ot(a));
      }
      var f;
      {
        var m = ms(t, a, true);
        f = hs(t, m);
      }
      var h, S;
      ws(t, l), kc(t);
      {
        if (kf.current = t, Cr(true), h = ks(e, t, a, i, f, l), S = _s(), t.mode & mn) {
          jn(true);
          try {
            h = ks(e, t, a, i, f, l), S = _s();
          } finally {
            jn(false);
          }
        }
        Cr(false);
      }
      return ts(), e !== null && !oi ? (zD(e, t, l), mo(e, t, l)) : (Xn() && S && rg(t), t.flags |= Zu, Tr(e, t, h, l), t.child);
    }
    function wC(e, t, a, i, l) {
      {
        switch (fz(t)) {
          case false: {
            var s = t.stateNode, f = t.type, m = new f(t.memoizedProps, s.context), h = m.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case true: {
            t.flags |= St, t.flags |= Er;
            var S = new Error("Simulated error coming from DevTools"), w = Ic(l);
            t.lanes = Ye(t.lanes, w);
            var O = y0(t, vu(S, t), w);
            Sg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && ei(_, i, "prop", ot(a));
        }
      }
      var P;
      Li(a) ? (P = true, Up(t)) : P = false, ws(t, l);
      var z = t.stateNode, F;
      z === null ? (Dv(e, t), kD(t, a, i), Ng(t, a, i, l), F = true) : e === null ? F = m2(t, a, i, l) : F = h2(e, t, a, i, l);
      var de = C0(e, t, a, F, P, l);
      {
        var De = t.stateNode;
        F && De.props !== i && (mu || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ze(t) || "a component"), mu = true);
      }
      return de;
    }
    function C0(e, t, a, i, l, s) {
      bC(e, t);
      var f = (t.flags & St) !== ke;
      if (!i && !f)
        return l && tD(t, a, false), mo(e, t, s);
      var m = t.stateNode;
      kf.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, fC();
      else {
        kc(t);
        {
          if (Cr(true), h = m.render(), t.mode & mn) {
            jn(true);
            try {
              m.render();
            } finally {
              jn(false);
            }
          }
          Cr(false);
        }
        ts();
      }
      return t.flags |= Zu, e !== null && f ? P2(e, t, h, s) : Tr(e, t, h, s), t.memoizedState = m.state, l && tD(t, a, true), t.child;
    }
    function xC(e) {
      var t = e.stateNode;
      t.pendingContext ? Zx(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zx(e, t.context, false), Ag(e, t.containerInfo);
    }
    function Y2(e, t, a) {
      if (xC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      bD(e, t), Xp(t, i, null, a);
      var f = t.memoizedState, m = t.stateNode, h = f.element;
      if (l.isDehydrated) {
        var S = { element: h, isDehydrated: false, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, w = t.updateQueue;
        if (w.baseState = S, t.memoizedState = S, t.flags & to) {
          var O = vu(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return DC(e, t, h, a, O);
        } else if (h !== s) {
          var _ = vu(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return DC(e, t, h, a, _);
        } else {
          X$(t);
          var P = UD(t, null, h, a);
          t.child = P;
          for (var z = P; z; )
            z.flags = z.flags & ~vn | no, z = z.sibling;
        }
      } else {
        if (Ss(), h === s)
          return mo(e, t, a);
        Tr(e, t, h, a);
      }
      return t.child;
    }
    function DC(e, t, a, i, l) {
      return Ss(), sg(l), t.flags |= to, Tr(e, t, a, i), t.child;
    }
    function Q2(e, t, a) {
      $D(t), e === null && ug(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, m = Vy(i, l);
      return m ? f = null : s !== null && Vy(i, s) && (t.flags |= Rc), bC(e, t), Tr(e, t, f, a), t.child;
    }
    function W2(e, t) {
      return e === null && ug(t), null;
    }
    function B2(e, t, a, i) {
      Dv(e, t);
      var l = t.pendingProps, s = a, f = s._payload, m = s._init, h = m(f);
      t.type = h;
      var S = t.tag = qA(h), w = ri(h, l), O;
      switch (S) {
        case x:
          return R0(t, h), t.type = h = As(h), O = D0(null, t, h, w, i), O;
        case T:
          return t.type = h = nS(h), O = wC(null, t, h, w, i), O;
        case k:
          return t.type = h = rS(h), O = hC(null, t, h, w, i), O;
        case re: {
          if (t.type !== t.elementType) {
            var _ = h.propTypes;
            _ && ei(_, w, "prop", ot(h));
          }
          return O = yC(null, t, h, ri(h.type, w), i), O;
        }
      }
      var P = "";
      throw h !== null && typeof h == "object" && h.$$typeof === Ce && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function X2(e, t, a, i, l) {
      Dv(e, t), t.tag = T;
      var s;
      return Li(a) ? (s = true, Up(t)) : s = false, ws(t, l), kD(t, a, i), Ng(t, a, i, l), C0(null, t, a, true, s, l);
    }
    function J2(e, t, a, i) {
      Dv(e, t);
      var l = t.pendingProps, s;
      {
        var f = ms(t, a, false);
        s = hs(t, f);
      }
      ws(t, i);
      var m, h;
      kc(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = ot(a) || "Unknown";
          g0[S] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), g0[S] = true);
        }
        t.mode & mn && ni.recordLegacyContextWarning(t, null), Cr(true), kf.current = t, m = ks(null, t, a, l, s, i), h = _s(), Cr(false);
      }
      if (ts(), t.flags |= Zu, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var w = ot(a) || "Unknown";
        _f[w] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), _f[w] = true);
      }
      if (typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        {
          var O = ot(a) || "Unknown";
          _f[O] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), _f[O] = true);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var _ = false;
        return Li(a) ? (_ = true, Up(t)) : _ = false, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, gg(t), TD(t, m), Ng(t, a, l, i), C0(null, t, a, true, _, i);
      } else {
        if (t.tag = x, t.mode & mn) {
          jn(true);
          try {
            m = ks(null, t, a, l, s, i), h = _s();
          } finally {
            jn(false);
          }
        }
        return Xn() && h && rg(t), Tr(null, t, m, i), R0(t, a), t.child;
      }
    }
    function R0(e, t) {
      {
        if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ja();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), w0[l] || (w0[l] = true, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = ot(t) || "Unknown";
          b0[f] || (d("%s: Function components do not support getDerivedStateFromProps.", f), b0[f] = true);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = ot(t) || "Unknown";
          S0[m] || (d("%s: Function components do not support contextType.", m), S0[m] = true);
        }
      }
    }
    var E0 = { dehydrated: null, treeContext: null, retryLane: Pn };
    function T0(e) {
      return { baseLanes: e, cachePool: j2(), transitions: null };
    }
    function G2(e, t) {
      var a = null;
      return { baseLanes: Ye(e.baseLanes, t), cachePool: a, transitions: e.transitions };
    }
    function q2(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return false;
      }
      return Pg(e, bf);
    }
    function K2(e, t) {
      return np(e.childLanes, t);
    }
    function CC(e, t, a) {
      var i = t.pendingProps;
      dz(t) && (t.flags |= St);
      var l = ai.current, s = false, f = (t.flags & St) !== ke;
      if (f || q2(l, e) ? (s = true, t.flags &= ~St) : (e === null || e.memoizedState !== null) && (l = b2(l, AD)), l = Cs(l), il(t, l), e === null) {
        ug(t);
        var m = t.memoizedState;
        if (m !== null) {
          var h = m.dehydrated;
          if (h !== null)
            return rM(t, h);
        }
        var S = i.children, w = i.fallback;
        if (s) {
          var O = Z2(t, S, w, a), _ = t.child;
          return _.memoizedState = T0(a), t.memoizedState = E0, O;
        } else
          return k0(t, S);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var z = P.dehydrated;
          if (z !== null)
            return aM(e, t, f, i, z, P, a);
        }
        if (s) {
          var F = i.fallback, de = i.children, De = tM(e, t, de, F, a), Se = t.child, qe = e.child.memoizedState;
          return Se.memoizedState = qe === null ? T0(a) : G2(qe, a), Se.childLanes = K2(e, a), t.memoizedState = E0, De;
        } else {
          var Ke = i.children, I = eM(e, t, Ke, a);
          return t.memoizedState = null, I;
        }
      }
    }
    function k0(e, t, a) {
      var i = e.mode, l = { mode: "visible", children: t }, s = _0(l, i);
      return s.return = e, e.child = s, s;
    }
    function Z2(e, t, a, i) {
      var l = e.mode, s = e.child, f = { mode: "hidden", children: t }, m, h;
      return (l & nt) === _e && s !== null ? (m = s, m.childLanes = G, m.pendingProps = f, e.mode & Et && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), h = pl(a, l, i, null)) : (m = _0(f, l), h = pl(a, l, i, null)), m.return = e, h.return = e, m.sibling = h, e.child = m, h;
    }
    function _0(e, t, a) {
      return ER(e, t, G, null);
    }
    function RC(e, t) {
      return bu(e, t);
    }
    function eM(e, t, a, i) {
      var l = e.child, s = l.sibling, f = RC(l, { mode: "visible", children: a });
      if ((t.mode & nt) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Wl) : m.push(s);
      }
      return t.child = f, f;
    }
    function tM(e, t, a, i, l) {
      var s = t.mode, f = e.child, m = f.sibling, h = { mode: "hidden", children: a }, S;
      if ((s & nt) === _e && t.child !== f) {
        var w = t.child;
        S = w, S.childLanes = G, S.pendingProps = h, t.mode & Et && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = RC(f, h), S.subtreeFlags = f.subtreeFlags & ao;
      var O;
      return m !== null ? O = bu(m, i) : (O = pl(i, s, l, null), O.flags |= vn), O.return = t, S.return = t, S.sibling = O, t.child = S, O;
    }
    function xv(e, t, a, i) {
      i !== null && sg(i), xs(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = k0(t, s);
      return f.flags |= vn, t.memoizedState = null, f;
    }
    function nM(e, t, a, i, l) {
      var s = t.mode, f = { mode: "visible", children: a }, m = _0(f, s), h = pl(i, s, l, null);
      return h.flags |= vn, m.return = t, h.return = t, m.sibling = h, t.child = m, (t.mode & nt) !== _e && xs(t, e.child, null, l), h;
    }
    function rM(e, t, a) {
      return (e.mode & nt) === _e ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ie) : By(t) ? e.lanes = Zl : e.lanes = ua, null;
    }
    function aM(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & to) {
          t.flags &= ~to;
          var I = m0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return xv(e, t, f, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= St, null;
          var Y = i.children, $ = i.fallback, Z = nM(e, t, Y, $, f), me = t.child;
          return me.memoizedState = T0(f), t.memoizedState = E0, Z;
        }
      else {
        if (W$(), (t.mode & nt) === _e)
          return xv(e, t, f, null);
        if (By(l)) {
          var m, h, S;
          {
            var w = s$(l);
            m = w.digest, h = w.message, S = w.stack;
          }
          var O;
          h ? O = new Error(h) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = m0(O, m, S);
          return xv(e, t, f, _);
        }
        var P = sa(f, e.childLanes);
        if (oi || P) {
          var z = Uv();
          if (z !== null) {
            var F = mL(z, f);
            if (F !== Pn && F !== s.retryLane) {
              s.retryLane = F;
              var de = jt;
              Vr(e, F), Ln(z, e, F, de);
            }
          }
          q0();
          var De = m0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return xv(e, t, f, De);
        } else if (Bx(l)) {
          t.flags |= St, t.child = e.child;
          var Se = IA.bind(null, e);
          return c$(l, Se), null;
        } else {
          J$(t, l, s.treeContext);
          var qe = i.children, Ke = k0(t, qe);
          return Ke.flags |= no, Ke;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = Ye(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ye(i.lanes, t)), vg(e.return, t, a);
    }
    function iM(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === X) {
          var l = i.memoizedState;
          l !== null && EC(i, a, e);
        } else if (i.tag === dt)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function oM(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && tv(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function lM(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !x0[e])
        if (x0[e] = true, typeof e == "string")
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
    function uM(e, t) {
      e !== void 0 && !wv[e] && (e !== "collapsed" && e !== "hidden" ? (wv[e] = true, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wv[e] = true, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function TC(e, t) {
      {
        var a = tt(e), i = !a && typeof Wa(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), false;
        }
      }
      return true;
    }
    function sM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== false)
        if (tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!TC(e[a], a))
              return;
        } else {
          var i = Wa(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!TC(s.value, f))
                  return;
                f++;
              }
          } else
            d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function O0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: a, tailMode: l } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function kC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      lM(l), uM(s, l), sM(f, l), Tr(e, t, f, a);
      var m = ai.current, h = Pg(m, bf);
      if (h)
        m = Hg(m, bf), t.flags |= St;
      else {
        var S = e !== null && (e.flags & St) !== ke;
        S && iM(t, t.child, a), m = Cs(m);
      }
      if (il(t, m), (t.mode & nt) === _e)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var w = oM(t.child), O;
            w === null ? (O = t.child, t.child = null) : (O = w.sibling, w.sibling = null), O0(t, false, O, w, s);
            break;
          }
          case "backwards": {
            var _ = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var z = P.alternate;
              if (z !== null && tv(z) === null) {
                t.child = P;
                break;
              }
              var F = P.sibling;
              P.sibling = _, _ = P, P = F;
            }
            O0(t, true, _, null, s);
            break;
          }
          case "together": {
            O0(t, false, null, null, void 0);
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function cM(e, t, a) {
      Ag(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = xs(t, null, i, a) : Tr(e, t, i, a), t.child;
    }
    var _C = false;
    function fM(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, m = s.value;
      {
        "value" in s || _C || (_C = true, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && ei(h, s, "prop", "Context.Provider");
      }
      if (hD(t, l, m), f !== null) {
        var S = f.value;
        if (da(S, m)) {
          if (f.children === s.children && !Np())
            return mo(e, t, a);
        } else
          i2(t, l, a);
      }
      var w = s.children;
      return Tr(e, t, w, a), t.child;
    }
    var OC = false;
    function dM(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (OC || (OC = true, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ws(t, a);
      var f = hn(i);
      kc(t);
      var m;
      return kf.current = t, Cr(true), m = s(f), Cr(false), ts(), t.flags |= Zu, Tr(e, t, m, a), t.child;
    }
    function Of() {
      oi = true;
    }
    function Dv(e, t) {
      (t.mode & nt) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= vn);
    }
    function mo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), fC(), Ff(t.lanes), sa(a, t.childLanes) ? (y2(e, t), t.child) : null;
    }
    function pM(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Wl) : s.push(e), a.flags |= vn, a;
      }
    }
    function N0(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function vM(e, t, a) {
      switch (t.tag) {
        case U:
          xC(t);
          var i = t.stateNode;
          Ss();
          break;
        case H:
          $D(t);
          break;
        case T: {
          var l = t.type;
          Li(l) && Up(t);
          break;
        }
        case j:
          Ag(t, t.stateNode.containerInfo);
          break;
        case C: {
          var s = t.memoizedProps.value, f = t.type._context;
          hD(t, f, s);
          break;
        }
        case Q:
          {
            var m = sa(a, t.childLanes);
            m && (t.flags |= lt);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case X: {
          var S = t.memoizedState;
          if (S !== null) {
            if (S.dehydrated !== null)
              return il(t, Cs(ai.current)), t.flags |= St, null;
            var w = t.child, O = w.childLanes;
            if (sa(a, O))
              return CC(e, t, a);
            il(t, Cs(ai.current));
            var _ = mo(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            il(t, Cs(ai.current));
          break;
        }
        case dt: {
          var P = (e.flags & St) !== ke, z = sa(a, t.childLanes);
          if (P) {
            if (z)
              return kC(e, t, a);
            t.flags |= St;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), il(t, ai.current), z)
            break;
          return null;
        }
        case Te:
        case wt:
          return t.lanes = G, SC(e, t, a);
      }
      return mo(e, t, a);
    }
    function NC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return pM(e, t, uS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Np() || t.type !== e.type)
          oi = true;
        else {
          var s = N0(e, a);
          if (!s && (t.flags & St) === ke)
            return oi = false, vM(e, t, a);
          (e.flags & Ah) !== ke ? oi = true : oi = false;
        }
      } else if (oi = false, Xn() && P$(t)) {
        var f = t.index, m = H$();
        aD(t, m, f);
      }
      switch (t.lanes = G, t.tag) {
        case V:
          return J2(e, t, t.type, a);
        case he: {
          var h = t.elementType;
          return B2(e, t, h, a);
        }
        case x: {
          var S = t.type, w = t.pendingProps, O = t.elementType === S ? w : ri(S, w);
          return D0(e, t, S, O, a);
        }
        case T: {
          var _ = t.type, P = t.pendingProps, z = t.elementType === _ ? P : ri(_, P);
          return wC(e, t, _, z, a);
        }
        case U:
          return Y2(e, t, a);
        case H:
          return Q2(e, t, a);
        case J:
          return W2(e, t);
        case X:
          return CC(e, t, a);
        case j:
          return cM(e, t, a);
        case k: {
          var F = t.type, de = t.pendingProps, De = t.elementType === F ? de : ri(F, de);
          return hC(e, t, F, De, a);
        }
        case ie:
          return H2(e, t, a);
        case Ge:
          return F2(e, t, a);
        case Q:
          return V2(e, t, a);
        case C:
          return fM(e, t, a);
        case N:
          return dM(e, t, a);
        case re: {
          var Se = t.type, qe = t.pendingProps, Ke = ri(Se, qe);
          if (t.type !== t.elementType) {
            var I = Se.propTypes;
            I && ei(I, Ke, "prop", ot(Se));
          }
          return Ke = ri(Se.type, Ke), yC(e, t, Se, Ke, a);
        }
        case ee:
          return gC(e, t, t.type, t.pendingProps, a);
        case Me: {
          var Y = t.type, $ = t.pendingProps, Z = t.elementType === Y ? $ : ri(Y, $);
          return X2(e, t, Y, Z, a);
        }
        case dt:
          return kC(e, t, a);
        case gt:
          break;
        case Te:
          return SC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Os(e) {
      e.flags |= lt;
    }
    function LC(e) {
      e.flags |= Qo, e.flags |= zh;
    }
    var UC, L0, IC, $C;
    UC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === H || l.tag === J)
          AI(e, l.stateNode);
        else if (l.tag !== j) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, L0 = function(e, t) {
    }, IC = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, m = zg(), h = jI(f, a, s, i, l, m);
        t.updateQueue = h, h && Os(t);
      }
    }, $C = function(e, t, a, i) {
      a !== i && Os(t);
    };
    function Nf(e, t) {
      if (!Xn())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Gn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = G, i = ke;
      if (t) {
        if ((e.mode & Et) !== _e) {
          for (var h = e.selfBaseDuration, S = e.child; S !== null; )
            a = Ye(a, Ye(S.lanes, S.childLanes)), i |= S.subtreeFlags & ao, i |= S.flags & ao, h += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = h;
        } else
          for (var w = e.child; w !== null; )
            a = Ye(a, Ye(w.lanes, w.childLanes)), i |= w.subtreeFlags & ao, i |= w.flags & ao, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Et) !== _e) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ye(a, Ye(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = Ye(a, Ye(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function mM(e, t, a) {
      if (e2() && (t.mode & nt) !== _e && (t.flags & St) === ke)
        return fD(t), Ss(), t.flags |= to | Ec | Er, false;
      var i = zp(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (K$(t), Gn(t), (t.mode & Et) !== _e) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return false;
        } else {
          if (Ss(), (t.flags & St) === ke && (t.memoizedState = null), t.flags |= lt, Gn(t), (t.mode & Et) !== _e) {
            var f = a !== null;
            if (f) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return false;
        }
      else
        return dD(), true;
    }
    function MC(e, t, a) {
      var i = t.pendingProps;
      switch (ag(t), t.tag) {
        case V:
        case he:
        case ee:
        case x:
        case k:
        case ie:
        case Ge:
        case Q:
        case N:
        case re:
          return Gn(t), null;
        case T: {
          var l = t.type;
          return Li(l) && Lp(t), Gn(t), null;
        }
        case U: {
          var s = t.stateNode;
          if (Ds(t), eg(t), Vg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = zp(t);
            if (f)
              Os(t);
            else if (e !== null) {
              var m = e.memoizedState;
              (!m.isDehydrated || (t.flags & to) !== ke) && (t.flags |= Bl, dD());
            }
          }
          return L0(e, t), Gn(t), null;
        }
        case H: {
          jg(t);
          var h = ID(), S = t.type;
          if (e !== null && t.stateNode != null)
            IC(e, t, S, i, h), e.ref !== t.ref && LC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Gn(t), null;
            }
            var w = zg(), O = zp(t);
            if (O)
              G$(t, h, w) && Os(t);
            else {
              var _ = MI(S, i, h, w, t);
              UC(_, t, false, false), t.stateNode = _, zI(_, S, i, h) && Os(t);
            }
            t.ref !== null && LC(t);
          }
          return Gn(t), null;
        }
        case J: {
          var P = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            $C(e, t, z, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = ID(), de = zg(), De = zp(t);
            De ? q$(t) && Os(t) : t.stateNode = PI(P, F, de, t);
          }
          return Gn(t), null;
        }
        case X: {
          Rs(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var qe = mM(e, t, Se);
            if (!qe)
              return t.flags & Er ? t : null;
          }
          if ((t.flags & St) !== ke)
            return t.lanes = a, (t.mode & Et) !== _e && v0(t), t;
          var Ke = Se !== null, I = e !== null && e.memoizedState !== null;
          if (Ke !== I && Ke) {
            var Y = t.child;
            if (Y.flags |= Xl, (t.mode & nt) !== _e) {
              var $ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== true || !M);
              $ || Pg(ai.current, AD) ? wA() : q0();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= lt), Gn(t), (t.mode & Et) !== _e && Ke) {
            var me = t.child;
            me !== null && (t.treeBaseDuration -= me.treeBaseDuration);
          }
          return null;
        }
        case j:
          return Ds(t), L0(e, t), e === null && U$(t.stateNode.containerInfo), Gn(t), null;
        case C:
          var ce = t.type._context;
          return pg(ce, t), Gn(t), null;
        case Me: {
          var Ne = t.type;
          return Li(Ne) && Lp(t), Gn(t), null;
        }
        case dt: {
          Rs(t);
          var je = t.memoizedState;
          if (je === null)
            return Gn(t), null;
          var kt = (t.flags & St) !== ke, mt = je.rendering;
          if (mt === null)
            if (kt)
              Nf(je, false);
            else {
              var sn = DA() && (e === null || (e.flags & St) === ke);
              if (!sn)
                for (var ht = t.child; ht !== null; ) {
                  var rn = tv(ht);
                  if (rn !== null) {
                    kt = true, t.flags |= St, Nf(je, false);
                    var dr = rn.updateQueue;
                    return dr !== null && (t.updateQueue = dr, t.flags |= lt), t.subtreeFlags = ke, g2(t, a), il(t, Hg(ai.current, bf)), t.child;
                  }
                  ht = ht.sibling;
                }
              je.tail !== null && zn() > aR() && (t.flags |= St, kt = true, Nf(je, false), t.lanes = Iw);
            }
          else {
            if (!kt) {
              var tr = tv(mt);
              if (tr !== null) {
                t.flags |= St, kt = true;
                var ma = tr.updateQueue;
                if (ma !== null && (t.updateQueue = ma, t.flags |= lt), Nf(je, true), je.tail === null && je.tailMode === "hidden" && !mt.alternate && !Xn())
                  return Gn(t), null;
              } else
                zn() * 2 - je.renderingStartTime > aR() && a !== ua && (t.flags |= St, kt = true, Nf(je, false), t.lanes = Iw);
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
            return kt ? pr = Hg(pr, bf) : pr = Cs(pr), il(t, pr), Nr;
          }
          return Gn(t), null;
        }
        case gt:
          break;
        case Te:
        case wt: {
          G0(t);
          var bo = t.memoizedState, zs = bo !== null;
          if (e !== null) {
            var Bf = e.memoizedState, Pi = Bf !== null;
            Pi !== zs && !Zt && (t.flags |= Xl);
          }
          return !zs || (t.mode & nt) === _e ? Gn(t) : sa(ji, ua) && (Gn(t), t.subtreeFlags & (vn | lt) && (t.flags |= Xl)), null;
        }
        case be:
          return null;
        case Lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function hM(e, t, a) {
      switch (ag(t), t.tag) {
        case T: {
          var i = t.type;
          Li(i) && Lp(t);
          var l = t.flags;
          return l & Er ? (t.flags = l & ~Er | St, (t.mode & Et) !== _e && v0(t), t) : null;
        }
        case U: {
          var s = t.stateNode;
          Ds(t), eg(t), Vg();
          var f = t.flags;
          return (f & Er) !== ke && (f & St) === ke ? (t.flags = f & ~Er | St, t) : null;
        }
        case H:
          return jg(t), null;
        case X: {
          Rs(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ss();
          }
          var h = t.flags;
          return h & Er ? (t.flags = h & ~Er | St, (t.mode & Et) !== _e && v0(t), t) : null;
        }
        case dt:
          return Rs(t), null;
        case j:
          return Ds(t), null;
        case C:
          var S = t.type._context;
          return pg(S, t), null;
        case Te:
        case wt:
          return G0(t), null;
        case be:
          return null;
        default:
          return null;
      }
    }
    function AC(e, t, a) {
      switch (ag(t), t.tag) {
        case T: {
          var i = t.type.childContextTypes;
          i != null && Lp(t);
          break;
        }
        case U: {
          var l = t.stateNode;
          Ds(t), eg(t), Vg();
          break;
        }
        case H: {
          jg(t);
          break;
        }
        case j:
          Ds(t);
          break;
        case X:
          Rs(t);
          break;
        case dt:
          Rs(t);
          break;
        case C:
          var s = t.type._context;
          pg(s, t);
          break;
        case Te:
        case wt:
          G0(t);
          break;
      }
    }
    var zC = null;
    zC = /* @__PURE__ */ new Set();
    var Cv = false, qn = false, yM = typeof WeakSet == "function" ? WeakSet : Set, ye = null, Ns = null, Ls = null;
    function gM(e) {
      Ih(null, function() {
        throw e;
      }), $h();
    }
    var SM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Et)
        try {
          Ai(), t.componentWillUnmount();
        } finally {
          Mi(e);
        }
      else
        t.componentWillUnmount();
    };
    function jC(e, t) {
      try {
        ul(En, e);
      } catch (a) {
        Mt(e, t, a);
      }
    }
    function U0(e, t, a) {
      try {
        SM(e, a);
      } catch (i) {
        Mt(e, t, i);
      }
    }
    function bM(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Mt(e, t, i);
      }
    }
    function PC(e, t) {
      try {
        VC(e);
      } catch (a) {
        Mt(e, t, a);
      }
    }
    function Us(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ct && ft && e.mode & Et)
              try {
                Ai(), i = a(null);
              } finally {
                Mi(e);
              }
            else
              i = a(null);
          } catch (l) {
            Mt(e, t, l);
          }
          typeof i == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ze(e));
        } else
          a.current = null;
    }
    function Rv(e, t, a) {
      try {
        a();
      } catch (i) {
        Mt(e, t, i);
      }
    }
    var HC = null, FC = false;
    function wM(e, t) {
      HC = II(e.containerInfo), ye = t, xM();
      var a = FC;
      return FC = false, HC = null, a;
    }
    function xM() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        (e.subtreeFlags & Ph) !== ke && t !== null ? (t.return = e, ye = t) : DM();
      }
    }
    function DM() {
      for (; ye !== null; ) {
        var e = ye;
        zt(e);
        try {
          CM(e);
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
    function CM(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Bl) !== ke) {
        switch (zt(e), e.tag) {
          case x:
          case k:
          case ee:
            break;
          case T: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !mu && (s.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(e) || "instance"), s.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ri(e.type, i), l);
              {
                var m = zC;
                f === void 0 && !m.has(e.type) && (m.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ze(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case U: {
            {
              var h = e.stateNode;
              i$(h.containerInfo);
            }
            break;
          }
          case H:
          case J:
          case j:
          case Me:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function li(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var m = f.destroy;
            f.destroy = void 0, m !== void 0 && ((e & Jn) !== Yr ? PN(t) : (e & En) !== Yr && _w(t), (e & Ui) !== Yr && Yf(true), Rv(t, a, m), (e & Ui) !== Yr && Yf(false), (e & Jn) !== Yr ? HN() : (e & En) !== Yr && Ow());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function ul(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Jn) !== Yr ? zN(t) : (e & En) !== Yr && FN(t);
            var f = s.create;
            (e & Ui) !== Yr && Yf(true), s.destroy = f(), (e & Ui) !== Yr && Yf(false), (e & Jn) !== Yr ? jN() : (e & En) !== Yr && VN();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var h = void 0;
                (s.tag & En) !== ke ? h = "useLayoutEffect" : (s.tag & Ui) !== ke ? h = "useInsertionEffect" : h = "useEffect";
                var S = void 0;
                m === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? S = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + m, d("%s must not return anything besides a function, which is used for clean-up.%s", h, S);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function RM(e, t) {
      if ((t.flags & lt) !== ke)
        switch (t.tag) {
          case Q: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = sC(), m = t.alternate === null ? "mount" : "update";
            uC() && (m = "nested-update"), typeof s == "function" && s(l, m, a, f);
            var h = t.return;
            e:
              for (; h !== null; ) {
                switch (h.tag) {
                  case U:
                    var S = h.stateNode;
                    S.passiveEffectDuration += a;
                    break e;
                  case Q:
                    var w = h.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                }
                h = h.return;
              }
            break;
          }
        }
    }
    function EM(e, t, a, i) {
      if ((a.flags & Tc) !== ke)
        switch (a.tag) {
          case x:
          case k:
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
            var l = a.stateNode;
            if (a.flags & lt && !qn)
              if (t === null)
                if (a.type === a.elementType && !mu && (l.props !== a.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(a) || "instance"), l.state !== a.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(a) || "instance")), a.mode & Et)
                  try {
                    Ai(), l.componentDidMount();
                  } finally {
                    Mi(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ri(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !mu && (l.props !== a.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(a) || "instance"), l.state !== a.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(a) || "instance")), a.mode & Et)
                  try {
                    Ai(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Mi(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !mu && (l.props !== a.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ze(a) || "instance"), l.state !== a.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ze(a) || "instance")), xD(a, m, l));
            break;
          }
          case U: {
            var h = a.updateQueue;
            if (h !== null) {
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
              xD(a, h, S);
            }
            break;
          }
          case H: {
            var w = a.stateNode;
            if (t === null && a.flags & lt) {
              var O = a.type, _ = a.memoizedProps;
              QI(w, O, _);
            }
            break;
          }
          case J:
            break;
          case j:
            break;
          case Q: {
            {
              var P = a.memoizedProps, z = P.onCommit, F = P.onRender, de = a.stateNode.effectDuration, De = sC(), Se = t === null ? "mount" : "update";
              uC() && (Se = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, De);
              {
                typeof z == "function" && z(a.memoizedProps.id, Se, de, De), kA(a);
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
            IM(e, a);
            break;
          }
          case dt:
          case Me:
          case gt:
          case Te:
          case wt:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      qn || a.flags & Qo && VC(a);
    }
    function TM(e) {
      switch (e.tag) {
        case x:
        case k:
        case ee: {
          if (e.mode & Et)
            try {
              Ai(), jC(e, e.return);
            } finally {
              Mi(e);
            }
          else
            jC(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && bM(e, e.return, t), PC(e, e.return);
          break;
        }
        case H: {
          PC(e, e.return);
          break;
        }
      }
    }
    function kM(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === H) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? t$(l) : r$(i.stateNode, i.memoizedProps);
            } catch (f) {
              Mt(e, e.return, f);
            }
          }
        } else if (i.tag === J) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? n$(s) : a$(s, i.memoizedProps);
            } catch (f) {
              Mt(e, e.return, f);
            }
        } else if (!((i.tag === Te || i.tag === wt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function VC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case H:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Et)
            try {
              Ai(), l = t(i);
            } finally {
              Mi(e);
            }
          else
            l = t(i);
          typeof l == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ze(e));
        } else
          t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ze(e)), t.current = i;
      }
    }
    function _M(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function YC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, YC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === H) {
          var a = e.stateNode;
          a !== null && M$(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function OM(e) {
      for (var t = e.return; t !== null; ) {
        if (QC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function QC(e) {
      return e.tag === H || e.tag === U || e.tag === j;
    }
    function WC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || QC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== H && t.tag !== J && t.tag !== Re; ) {
            if (t.flags & vn || t.child === null || t.tag === j)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & vn))
            return t.stateNode;
        }
    }
    function NM(e) {
      var t = OM(e);
      switch (t.tag) {
        case H: {
          var a = t.stateNode;
          t.flags & Rc && (Wx(a), t.flags &= ~Rc);
          var i = WC(e);
          $0(e, i, a);
          break;
        }
        case U:
        case j: {
          var l = t.stateNode.containerInfo, s = WC(e);
          I0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function I0(e, t, a) {
      var i = e.tag, l = i === H || i === J;
      if (l) {
        var s = e.stateNode;
        t ? qI(a, s, t) : JI(a, s);
      } else if (i !== j) {
        var f = e.child;
        if (f !== null) {
          I0(f, t, a);
          for (var m = f.sibling; m !== null; )
            I0(m, t, a), m = m.sibling;
        }
      }
    }
    function $0(e, t, a) {
      var i = e.tag, l = i === H || i === J;
      if (l) {
        var s = e.stateNode;
        t ? GI(a, s, t) : XI(a, s);
      } else if (i !== j) {
        var f = e.child;
        if (f !== null) {
          $0(f, t, a);
          for (var m = f.sibling; m !== null; )
            $0(m, t, a), m = m.sibling;
        }
      }
    }
    var Kn = null, ui = false;
    function LM(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case H: {
                Kn = i.stateNode, ui = false;
                break e;
              }
              case U: {
                Kn = i.stateNode.containerInfo, ui = true;
                break e;
              }
              case j: {
                Kn = i.stateNode.containerInfo, ui = true;
                break e;
              }
            }
            i = i.return;
          }
        if (Kn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BC(e, t, a), Kn = null, ui = false;
      }
      _M(a);
    }
    function sl(e, t, a) {
      for (var i = a.child; i !== null; )
        BC(e, t, i), i = i.sibling;
    }
    function BC(e, t, a) {
      switch (IN(a), a.tag) {
        case H:
          qn || Us(a, t);
        case J: {
          {
            var i = Kn, l = ui;
            Kn = null, sl(e, t, a), Kn = i, ui = l, Kn !== null && (ui ? ZI(Kn, a.stateNode) : KI(Kn, a.stateNode));
          }
          return;
        }
        case Re: {
          Kn !== null && (ui ? e$(Kn, a.stateNode) : Wy(Kn, a.stateNode));
          return;
        }
        case j: {
          {
            var s = Kn, f = ui;
            Kn = a.stateNode.containerInfo, ui = true, sl(e, t, a), Kn = s, ui = f;
          }
          return;
        }
        case x:
        case k:
        case re:
        case ee: {
          if (!qn) {
            var m = a.updateQueue;
            if (m !== null) {
              var h = m.lastEffect;
              if (h !== null) {
                var S = h.next, w = S;
                do {
                  var O = w, _ = O.destroy, P = O.tag;
                  _ !== void 0 && ((P & Ui) !== Yr ? Rv(a, t, _) : (P & En) !== Yr && (_w(a), a.mode & Et ? (Ai(), Rv(a, t, _), Mi(a)) : Rv(a, t, _), Ow())), w = w.next;
                } while (w !== S);
              }
            }
          }
          sl(e, t, a);
          return;
        }
        case T: {
          if (!qn) {
            Us(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && U0(a, t, z);
          }
          sl(e, t, a);
          return;
        }
        case gt: {
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
    function UM(e) {
      var t = e.memoizedState;
    }
    function IM(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && S$(s);
          }
        }
      }
    }
    function XC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new yM()), t.forEach(function(i) {
          var l = $A.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ka)
              if (Ns !== null && Ls !== null)
                Vf(Ls, Ns);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function $M(e, t, a) {
      Ns = a, Ls = e, zt(t), JC(t, e), zt(t), Ns = null, Ls = null;
    }
    function si(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            LM(e, t, s);
          } catch (h) {
            Mt(s, t, h);
          }
        }
      var f = Yu();
      if (t.subtreeFlags & Hh)
        for (var m = t.child; m !== null; )
          zt(m), JC(m, e), m = m.sibling;
      zt(f);
    }
    function JC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case x:
        case k:
        case re:
        case ee: {
          if (si(t, e), zi(e), l & lt) {
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
          si(t, e), zi(e), l & Qo && i !== null && Us(i, i.return);
          return;
        }
        case H: {
          si(t, e), zi(e), l & Qo && i !== null && Us(i, i.return);
          {
            if (e.flags & Rc) {
              var s = e.stateNode;
              try {
                Wx(s);
              } catch (Ne) {
                Mt(e, e.return, Ne);
              }
            }
            if (l & lt) {
              var f = e.stateNode;
              if (f != null) {
                var m = e.memoizedProps, h = i !== null ? i.memoizedProps : m, S = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    WI(f, w, S, h, m, e);
                  } catch (Ne) {
                    Mt(e, e.return, Ne);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (si(t, e), zi(e), l & lt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, _ = e.memoizedProps, P = i !== null ? i.memoizedProps : _;
            try {
              BI(O, P, _);
            } catch (Ne) {
              Mt(e, e.return, Ne);
            }
          }
          return;
        }
        case U: {
          if (si(t, e), zi(e), l & lt && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                g$(t.containerInfo);
              } catch (Ne) {
                Mt(e, e.return, Ne);
              }
          }
          return;
        }
        case j: {
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
              qe || bA();
            }
          }
          if (l & lt) {
            try {
              UM(e);
            } catch (Ne) {
              Mt(e, e.return, Ne);
            }
            XC(e);
          }
          return;
        }
        case Te: {
          var Ke = i !== null && i.memoizedState !== null;
          if (e.mode & nt) {
            var I = qn;
            qn = I || Ke, si(t, e), qn = I;
          } else
            si(t, e);
          if (zi(e), l & Xl) {
            var Y = e.stateNode, $ = e.memoizedState, Z = $ !== null, me = e;
            if (Y.isHidden = Z, Z && !Ke && (me.mode & nt) !== _e) {
              ye = me;
              for (var ce = me.child; ce !== null; )
                ye = ce, AM(ce), ce = ce.sibling;
            }
            kM(me, Z);
          }
          return;
        }
        case dt: {
          si(t, e), zi(e), l & lt && XC(e);
          return;
        }
        case gt:
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
          NM(e);
        } catch (a) {
          Mt(e, e.return, a);
        }
        e.flags &= ~vn;
      }
      t & no && (e.flags &= ~no);
    }
    function MM(e, t, a) {
      Ns = a, Ls = t, ye = e, GC(e, t, a), Ns = null, Ls = null;
    }
    function GC(e, t, a) {
      for (var i = (e.mode & nt) !== _e; ye !== null; ) {
        var l = ye, s = l.child;
        if (l.tag === Te && i) {
          var f = l.memoizedState !== null, m = f || Cv;
          if (m) {
            M0(e, t, a);
            continue;
          } else {
            var h = l.alternate, S = h !== null && h.memoizedState !== null, w = S || qn, O = Cv, _ = qn;
            Cv = m, qn = w, qn && !_ && (ye = l, zM(l));
            for (var P = s; P !== null; )
              ye = P, GC(P, t, a), P = P.sibling;
            ye = l, Cv = O, qn = _, M0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Tc) !== ke && s !== null ? (s.return = l, ye = s) : M0(e, t, a);
      }
    }
    function M0(e, t, a) {
      for (; ye !== null; ) {
        var i = ye;
        if ((i.flags & Tc) !== ke) {
          var l = i.alternate;
          zt(i);
          try {
            EM(t, l, i, a);
          } catch (f) {
            Mt(i, i.return, f);
          }
          un();
        }
        if (i === e) {
          ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ye = s;
          return;
        }
        ye = i.return;
      }
    }
    function AM(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        switch (t.tag) {
          case x:
          case k:
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
            Us(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && U0(t, t.return, i);
            break;
          }
          case H: {
            Us(t, t.return);
            break;
          }
          case Te: {
            var l = t.memoizedState !== null;
            if (l) {
              qC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ye = a) : qC(e);
      }
    }
    function qC(e) {
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
    function zM(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        if (t.tag === Te) {
          var i = t.memoizedState !== null;
          if (i) {
            KC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ye = a) : KC(e);
      }
    }
    function KC(e) {
      for (; ye !== null; ) {
        var t = ye;
        zt(t);
        try {
          TM(t);
        } catch (i) {
          Mt(t, t.return, i);
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
    function jM(e, t, a, i) {
      ye = t, PM(t, e, a, i);
    }
    function PM(e, t, a, i) {
      for (; ye !== null; ) {
        var l = ye, s = l.child;
        (l.subtreeFlags & es) !== ke && s !== null ? (s.return = l, ye = s) : HM(e, t, a, i);
      }
    }
    function HM(e, t, a, i) {
      for (; ye !== null; ) {
        var l = ye;
        if ((l.flags & qa) !== ke) {
          zt(l);
          try {
            FM(t, l, a, i);
          } catch (f) {
            Mt(l, l.return, f);
          }
          un();
        }
        if (l === e) {
          ye = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, ye = s;
          return;
        }
        ye = l.return;
      }
    }
    function FM(e, t, a, i) {
      switch (t.tag) {
        case x:
        case k:
        case ee: {
          if (t.mode & Et) {
            p0();
            try {
              ul(Jn | Rn, t);
            } finally {
              d0(t);
            }
          } else
            ul(Jn | Rn, t);
          break;
        }
      }
    }
    function VM(e) {
      ye = e, YM();
    }
    function YM() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        if ((ye.flags & Wl) !== ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              ye = l, BM(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var m = f.sibling;
                    f.sibling = null, f = m;
                  } while (f !== null);
                }
              }
            }
            ye = e;
          }
        }
        (e.subtreeFlags & es) !== ke && t !== null ? (t.return = e, ye = t) : QM();
      }
    }
    function QM() {
      for (; ye !== null; ) {
        var e = ye;
        (e.flags & qa) !== ke && (zt(e), WM(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function WM(e) {
      switch (e.tag) {
        case x:
        case k:
        case ee: {
          e.mode & Et ? (p0(), li(Jn | Rn, e, e.return), d0(e)) : li(Jn | Rn, e, e.return);
          break;
        }
      }
    }
    function BM(e, t) {
      for (; ye !== null; ) {
        var a = ye;
        zt(a), JM(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, ye = i) : XM(e);
      }
    }
    function XM(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.sibling, i = t.return;
        if (YC(t), t === e) {
          ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, ye = a;
          return;
        }
        ye = i;
      }
    }
    function JM(e, t) {
      switch (e.tag) {
        case x:
        case k:
        case ee: {
          e.mode & Et ? (p0(), li(Jn, e, t), d0(e)) : li(Jn, e, t);
          break;
        }
      }
    }
    function GM(e) {
      switch (e.tag) {
        case x:
        case k:
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
    function qM(e) {
      switch (e.tag) {
        case x:
        case k:
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
    function KM(e) {
      switch (e.tag) {
        case x:
        case k:
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
          typeof t.componentWillUnmount == "function" && U0(e, e.return, t);
          break;
        }
      }
    }
    function ZM(e) {
      switch (e.tag) {
        case x:
        case k:
        case ee:
          try {
            li(Jn | Rn, e, e.return);
          } catch (t) {
            Mt(e, e.return, t);
          }
      }
    }
    var eA = 0, tA = 1, nA = 2, rA = 3, aA = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var Lf = Symbol.for;
      eA = Lf("selector.component"), tA = Lf("selector.has_pseudo_class"), nA = Lf("selector.role"), rA = Lf("selector.test_id"), aA = Lf("selector.text");
    }
    var iA = [];
    function oA() {
      iA.forEach(function(e) {
        return e();
      });
    }
    var lA = o.ReactCurrentActQueue;
    function uA(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== false;
      }
    }
    function ZC() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && lA.current !== null && d("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var sA = Math.ceil, A0 = o.ReactCurrentDispatcher, z0 = o.ReactCurrentOwner, Zn = o.ReactCurrentBatchConfig, ci = o.ReactCurrentActQueue, _n = 0, eR = 1, er = 2, Ia = 4, ho = 0, Uf = 1, hu = 2, Ev = 3, If = 4, tR = 5, j0 = 6, rt = _n, kr = null, Jt = null, On = G, ji = G, P0 = Zo(G), Nn = ho, $f = null, H0 = G, Tv = G, Mf = G, kv = G, Af = null, Qr = null, F0 = 0, nR = 500, rR = 1 / 0, cA = 500, yo = null;
    function zf() {
      rR = zn() + cA;
    }
    function aR() {
      return rR;
    }
    var _v = false, V0 = null, Is = null, yu = false, cl = null, jf = G, Y0 = [], Q0 = null, fA = 50, Pf = 0, W0 = null, B0 = false, Ov = false, dA = 50, $s = 0, Nv = null, Hf = jt, Lv = G, iR = false;
    function Uv() {
      return kr;
    }
    function _r() {
      return (rt & (er | Ia)) !== _n ? zn() : (Hf !== jt || (Hf = zn()), Hf);
    }
    function fl(e) {
      var t = e.mode;
      if ((t & nt) === _e)
        return Ie;
      if ((rt & er) !== _n && On !== G)
        return Ic(On);
      var a = r2() !== n2;
      if (a) {
        if (Zn.transition !== null) {
          var i = Zn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lv === Pn && (Lv = zw()), Lv;
      }
      var l = Za();
      if (l !== Pn)
        return l;
      var s = HI();
      return s;
    }
    function pA(e) {
      var t = e.mode;
      return (t & nt) === _e ? Ie : fL();
    }
    function Ln(e, t, a, i) {
      AA(), iR && d("useInsertionEffect must not schedule updates."), B0 && (Ov = true), $c(e, a, i), (rt & er) !== G && e === kr ? PA(t) : (Ka && Hw(e, t, a), HA(t), e === kr && ((rt & er) === _n && (Mf = Ye(Mf, a)), Nn === If && dl(e, On)), Wr(e, i), a === Ie && rt === _n && (t.mode & nt) === _e && !ci.isBatchingLegacy && (zf(), rD()));
    }
    function vA(e, t, a) {
      var i = e.current;
      i.lanes = t, $c(e, t, a), Wr(e, a);
    }
    function mA(e) {
      return (rt & er) !== _n;
    }
    function Wr(e, t) {
      var a = e.callbackNode;
      iL(e, t);
      var i = ep(e, e === kr ? On : G);
      if (i === G) {
        a !== null && wR(a), e.callbackNode = null, e.callbackPriority = Pn;
        return;
      }
      var l = tu(i), s = e.callbackPriority;
      if (s === l && !(ci.current !== null && a !== eS)) {
        a == null && s !== Ie && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && wR(a);
      var f;
      if (l === Ie)
        e.tag === el ? (ci.isBatchingLegacy !== null && (ci.didScheduleLegacyUpdate = true), j$(uR.bind(null, e))) : nD(uR.bind(null, e)), ci.current !== null ? ci.current.push(tl) : VI(function() {
          (rt & (er | Ia)) === _n && tl();
        }), f = null;
      else {
        var m;
        switch (Yw(i)) {
          case ca:
            m = Gd;
            break;
          case oo:
            m = Fh;
            break;
          case lo:
            m = ql;
            break;
          case rp:
            m = Vh;
            break;
          default:
            m = ql;
            break;
        }
        f = tS(m, oR.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function oR(e, t) {
      if (L2(), Hf = jt, Lv = G, (rt & (er | Ia)) !== _n)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = So();
      if (i && e.callbackNode !== a)
        return null;
      var l = ep(e, e === kr ? On : G);
      if (l === G)
        return null;
      var s = !tp(e, l) && !cL(e, l) && !t, f = s ? RA(e, l) : $v(e, l);
      if (f !== ho) {
        if (f === hu) {
          var m = fy(e);
          m !== G && (l = m, f = X0(e, m));
        }
        if (f === Uf) {
          var h = $f;
          throw gu(e, G), dl(e, l), Wr(e, zn()), h;
        }
        if (f === j0)
          dl(e, l);
        else {
          var S = !tp(e, l), w = e.current.alternate;
          if (S && !yA(w)) {
            if (f = $v(e, l), f === hu) {
              var O = fy(e);
              O !== G && (l = O, f = X0(e, O));
            }
            if (f === Uf) {
              var _ = $f;
              throw gu(e, G), dl(e, l), Wr(e, zn()), _;
            }
          }
          e.finishedWork = w, e.finishedLanes = l, hA(e, f, l);
        }
      }
      return Wr(e, zn()), e.callbackNode === a ? oR.bind(null, e) : null;
    }
    function X0(e, t) {
      var a = Af;
      if (ap(e)) {
        var i = gu(e, t);
        i.flags |= to, L$(e.containerInfo);
      }
      var l = $v(e, t);
      if (l !== hu) {
        var s = Qr;
        Qr = a, s !== null && lR(s);
      }
      return l;
    }
    function lR(e) {
      Qr === null ? Qr = e : Qr.push.apply(Qr, e);
    }
    function hA(e, t, a) {
      switch (t) {
        case ho:
        case Uf:
          throw new Error("Root did not complete. This is a bug in React.");
        case hu: {
          Su(e, Qr, yo);
          break;
        }
        case Ev: {
          if (dl(e, a), Mw(a) && !xR()) {
            var i = F0 + nR - zn();
            if (i > 10) {
              var l = ep(e, G);
              if (l !== G)
                break;
              var s = e.suspendedLanes;
              if (!is(s, a)) {
                var f = _r();
                Pw(e, s);
                break;
              }
              e.timeoutHandle = Yy(Su.bind(null, e, Qr, yo), i);
              break;
            }
          }
          Su(e, Qr, yo);
          break;
        }
        case If: {
          if (dl(e, a), sL(a))
            break;
          if (!xR()) {
            var m = rL(e, a), h = m, S = zn() - h, w = MA(S) - S;
            if (w > 10) {
              e.timeoutHandle = Yy(Su.bind(null, e, Qr, yo), w);
              break;
            }
          }
          Su(e, Qr, yo);
          break;
        }
        case tR: {
          Su(e, Qr, yo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function yA(e) {
      for (var t = e; ; ) {
        if (t.flags & Xd) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, m = s.value;
                try {
                  if (!da(f(), m))
                    return false;
                } catch {
                  return false;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Xd && h !== null) {
          h.return = t, t = h;
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
      t = np(t, kv), t = np(t, Mf), pL(e, t);
    }
    function uR(e) {
      if (U2(), (rt & (er | Ia)) !== _n)
        throw new Error("Should not already be working.");
      So();
      var t = ep(e, G);
      if (!sa(t, Ie))
        return Wr(e, zn()), null;
      var a = $v(e, t);
      if (e.tag !== el && a === hu) {
        var i = fy(e);
        i !== G && (t = i, a = X0(e, i));
      }
      if (a === Uf) {
        var l = $f;
        throw gu(e, G), dl(e, t), Wr(e, zn()), l;
      }
      if (a === j0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Su(e, Qr, yo), Wr(e, zn()), null;
    }
    function gA(e, t) {
      t !== G && (my(e, Ye(t, Ie)), Wr(e, zn()), (rt & (er | Ia)) === _n && (zf(), tl()));
    }
    function J0(e, t) {
      var a = rt;
      rt |= eR;
      try {
        return e(t);
      } finally {
        rt = a, rt === _n && !ci.isBatchingLegacy && (zf(), rD());
      }
    }
    function SA(e, t, a, i, l) {
      var s = Za(), f = Zn.transition;
      try {
        return Zn.transition = null, Hn(ca), e(t, a, i, l);
      } finally {
        Hn(s), Zn.transition = f, rt === _n && zf();
      }
    }
    function go(e) {
      cl !== null && cl.tag === el && (rt & (er | Ia)) === _n && So();
      var t = rt;
      rt |= eR;
      var a = Zn.transition, i = Za();
      try {
        return Zn.transition = null, Hn(ca), e ? e() : void 0;
      } finally {
        Hn(i), Zn.transition = a, rt = t, (rt & (er | Ia)) === _n && tl();
      }
    }
    function sR() {
      return (rt & (er | Ia)) !== _n;
    }
    function Iv(e, t) {
      cr(P0, ji, e), ji = Ye(ji, t), H0 = Ye(H0, t);
    }
    function G0(e) {
      ji = P0.current, sr(P0, e);
    }
    function gu(e, t) {
      e.finishedWork = null, e.finishedLanes = G;
      var a = e.timeoutHandle;
      if (a !== Qy && (e.timeoutHandle = Qy, FI(a)), Jt !== null)
        for (var i = Jt.return; i !== null; ) {
          var l = i.alternate;
          AC(l, i), i = i.return;
        }
      kr = e;
      var s = bu(e.current, null);
      return Jt = s, On = ji = H0 = t, Nn = ho, $f = null, Tv = G, Mf = G, kv = G, Af = null, Qr = null, l2(), ni.discardPendingWarnings(), s;
    }
    function cR(e, t) {
      do {
        var a = Jt;
        try {
          if (Fp(), jD(), un(), z0.current = null, a === null || a.return === null) {
            Nn = Uf, $f = t, Jt = null;
            return;
          }
          if (ct && a.mode & Et && bv(a, true), We)
            if (ts(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              QN(a, i, On);
            } else
              YN(a, t, On);
          z2(e, a.return, a, t, On), vR(a);
        } catch (l) {
          t = l, Jt === a && a !== null ? (a = a.return, Jt = a) : a = Jt;
          continue;
        }
        return;
      } while (true);
    }
    function fR() {
      var e = A0.current;
      return A0.current = mv, e === null ? mv : e;
    }
    function dR(e) {
      A0.current = e;
    }
    function bA() {
      F0 = zn();
    }
    function Ff(e) {
      Tv = Ye(e, Tv);
    }
    function wA() {
      Nn === ho && (Nn = Ev);
    }
    function q0() {
      (Nn === ho || Nn === Ev || Nn === hu) && (Nn = If), kr !== null && (dy(Tv) || dy(Mf)) && dl(kr, On);
    }
    function xA(e) {
      Nn !== If && (Nn = hu), Af === null ? Af = [e] : Af.push(e);
    }
    function DA() {
      return Nn === ho;
    }
    function $v(e, t) {
      var a = rt;
      rt |= er;
      var i = fR();
      if (kr !== e || On !== t) {
        if (Ka) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Vf(e, On), l.clear()), Fw(e, t);
        }
        yo = Vw(), gu(e, t);
      }
      Nw(t);
      do
        try {
          CA();
          break;
        } catch (s) {
          cR(e, s);
        }
      while (true);
      if (Fp(), rt = a, dR(i), Jt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lw(), kr = null, On = G, Nn;
    }
    function CA() {
      for (; Jt !== null; )
        pR(Jt);
    }
    function RA(e, t) {
      var a = rt;
      rt |= er;
      var i = fR();
      if (kr !== e || On !== t) {
        if (Ka) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Vf(e, On), l.clear()), Fw(e, t);
        }
        yo = Vw(), zf(), gu(e, t);
      }
      Nw(t);
      do
        try {
          EA();
          break;
        } catch (s) {
          cR(e, s);
        }
      while (true);
      return Fp(), dR(i), rt = a, Jt !== null ? (GN(), ho) : (Lw(), kr = null, On = G, Nn);
    }
    function EA() {
      for (; Jt !== null && !CN(); )
        pR(Jt);
    }
    function pR(e) {
      var t = e.alternate;
      zt(e);
      var a;
      (e.mode & Et) !== _e ? (f0(e), a = K0(t, e, ji), bv(e, true)) : a = K0(t, e, ji), un(), e.memoizedProps = e.pendingProps, a === null ? vR(e) : Jt = a, z0.current = null;
    }
    function vR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ec) === ke) {
          zt(t);
          var l = void 0;
          if ((t.mode & Et) === _e ? l = MC(a, t, ji) : (f0(t), l = MC(a, t, ji), bv(t, false)), un(), l !== null) {
            Jt = l;
            return;
          }
        } else {
          var s = hM(a, t);
          if (s !== null) {
            s.flags &= gN, Jt = s;
            return;
          }
          if ((t.mode & Et) !== _e) {
            bv(t, false);
            for (var f = t.actualDuration, m = t.child; m !== null; )
              f += m.actualDuration, m = m.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ec, i.subtreeFlags = ke, i.deletions = null;
          else {
            Nn = j0, Jt = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Jt = h;
          return;
        }
        t = i, Jt = t;
      } while (t !== null);
      Nn === ho && (Nn = tR);
    }
    function Su(e, t, a) {
      var i = Za(), l = Zn.transition;
      try {
        Zn.transition = null, Hn(ca), TA(e, t, a, i);
      } finally {
        Zn.transition = l, Hn(i);
      }
      return null;
    }
    function TA(e, t, a, i) {
      do
        So();
      while (cl !== null);
      if (zA(), (rt & (er | Ia)) !== _n)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (AN(s), l === null)
        return kw(), null;
      if (s === G && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = G, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pn;
      var f = Ye(l.lanes, l.childLanes);
      vL(e, f), e === kr && (kr = null, Jt = null, On = G), ((l.subtreeFlags & es) !== ke || (l.flags & es) !== ke) && (yu || (yu = true, Q0 = a, tS(ql, function() {
        return So(), null;
      })));
      var m = (l.subtreeFlags & (Ph | Hh | Tc | es)) !== ke, h = (l.flags & (Ph | Hh | Tc | es)) !== ke;
      if (m || h) {
        var S = Zn.transition;
        Zn.transition = null;
        var w = Za();
        Hn(ca);
        var O = rt;
        rt |= Ia, z0.current = null;
        var _ = wM(e, l);
        cC(), $M(e, l, s), $I(e.containerInfo), e.current = l, WN(s), MM(l, e, s), BN(), RN(), rt = O, Hn(w), Zn.transition = S;
      } else
        e.current = l, cC();
      var P = yu;
      if (yu ? (yu = false, cl = e, jf = s) : ($s = 0, Nv = null), f = e.pendingLanes, f === G && (Is = null), P || gR(e.current, false), LN(l.stateNode, i), Ka && e.memoizedUpdaters.clear(), oA(), Wr(e, zn()), t !== null)
        for (var z = e.onRecoverableError, F = 0; F < t.length; F++) {
          var de = t[F], De = de.stack, Se = de.digest;
          z(de.value, { componentStack: De, digest: Se });
        }
      if (_v) {
        _v = false;
        var qe = V0;
        throw V0 = null, qe;
      }
      return sa(jf, Ie) && e.tag !== el && So(), f = e.pendingLanes, sa(f, Ie) ? (N2(), e === W0 ? Pf++ : (Pf = 0, W0 = e)) : Pf = 0, tl(), kw(), null;
    }
    function So() {
      if (cl !== null) {
        var e = Yw(jf), t = gL(lo, e), a = Zn.transition, i = Za();
        try {
          return Zn.transition = null, Hn(t), _A();
        } finally {
          Hn(i), Zn.transition = a;
        }
      }
      return false;
    }
    function kA(e) {
      Y0.push(e), yu || (yu = true, tS(ql, function() {
        return So(), null;
      }));
    }
    function _A() {
      if (cl === null)
        return false;
      var e = Q0;
      Q0 = null;
      var t = cl, a = jf;
      if (cl = null, jf = G, (rt & (er | Ia)) !== _n)
        throw new Error("Cannot flush passive effects while already rendering.");
      B0 = true, Ov = false, XN(a);
      var i = rt;
      rt |= Ia, VM(t.current), jM(t, t.current, a, e);
      {
        var l = Y0;
        Y0 = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          RM(t, f);
        }
      }
      JN(), gR(t.current, true), rt = i, tl(), Ov ? t === Nv ? $s++ : ($s = 0, Nv = t) : $s = 0, B0 = false, Ov = false, UN(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return true;
    }
    function mR(e) {
      return Is !== null && Is.has(e);
    }
    function OA(e) {
      Is === null ? Is = /* @__PURE__ */ new Set([e]) : Is.add(e);
    }
    function NA(e) {
      _v || (_v = true, V0 = e);
    }
    var LA = NA;
    function hR(e, t, a) {
      var i = vu(a, t), l = dC(e, i, Ie), s = rl(e, l, Ie), f = _r();
      s !== null && ($c(s, Ie, f), Wr(s, f));
    }
    function Mt(e, t, a) {
      if (gM(a), Yf(false), e.tag === U) {
        hR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === U) {
          hR(i, e, a);
          return;
        } else if (i.tag === T) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !mR(s)) {
            var f = vu(a, e), m = y0(i, f, Ie), h = rl(i, m, Ie), S = _r();
            h !== null && ($c(h, Ie, S), Wr(h, S));
            return;
          }
        }
        i = i.return;
      }
      d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function UA(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = _r();
      Pw(e, a), FA(e), kr === e && is(On, a) && (Nn === If || Nn === Ev && Mw(On) && zn() - F0 < nR ? gu(e, G) : kv = Ye(kv, a)), Wr(e, l);
    }
    function yR(e, t) {
      t === Pn && (t = pA(e));
      var a = _r(), i = Vr(e, t);
      i !== null && ($c(i, t, a), Wr(i, a));
    }
    function IA(e) {
      var t = e.memoizedState, a = Pn;
      t !== null && (a = t.retryLane), yR(e, a);
    }
    function $A(e, t) {
      var a = Pn, i;
      switch (e.tag) {
        case X:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case dt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), yR(e, a);
    }
    function MA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : sA(e / 1960) * 1960;
    }
    function AA() {
      if (Pf > fA)
        throw Pf = 0, W0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $s > dA && ($s = 0, Nv = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function zA() {
      ni.flushLegacyContextWarning(), ni.flushPendingUnsafeLifecycleWarnings();
    }
    function gR(e, t) {
      zt(e), Mv(e, ro, KM), t && Mv(e, Jd, ZM), Mv(e, ro, GM), t && Mv(e, Jd, qM), un();
    }
    function Mv(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== ke ? i = i.child : ((i.flags & t) !== ke && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var Av = null;
    function SR(e) {
      {
        if ((rt & er) !== _n || !(e.mode & nt))
          return;
        var t = e.tag;
        if (t !== V && t !== U && t !== T && t !== x && t !== k && t !== re && t !== ee)
          return;
        var a = ze(e) || "ReactComponent";
        if (Av !== null) {
          if (Av.has(a))
            return;
          Av.add(a);
        } else
          Av = /* @__PURE__ */ new Set([a]);
        var i = Cn;
        try {
          zt(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? zt(e) : un();
        }
      }
    }
    var K0;
    {
      var jA = null;
      K0 = function(e, t, a) {
        var i = TR(jA, t);
        try {
          return NC(e, t, a);
        } catch (s) {
          if (B$() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fp(), jD(), AC(e, t), TR(t, i), t.mode & Et && f0(t), Ih(null, NC, null, e, t, a), vN()) {
            var l = $h();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = true);
          }
          throw s;
        }
      };
    }
    var bR = false, Z0;
    Z0 = /* @__PURE__ */ new Set();
    function PA(e) {
      if (Ci && !k2())
        switch (e.tag) {
          case x:
          case k:
          case ee: {
            var t = Jt && ze(Jt) || "Unknown", a = t;
            if (!Z0.has(a)) {
              Z0.add(a);
              var i = ze(e) || "Unknown";
              d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case T: {
            bR || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), bR = true);
            break;
          }
        }
    }
    function Vf(e, t) {
      if (Ka) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Hw(e, i, t);
        });
      }
    }
    var eS = {};
    function tS(e, t) {
      {
        var a = ci.current;
        return a !== null ? (a.push(t), eS) : Tw(e, t);
      }
    }
    function wR(e) {
      if (e !== eS)
        return DN(e);
    }
    function xR() {
      return ci.current !== null;
    }
    function HA(e) {
      {
        if (e.mode & nt) {
          if (!ZC())
            return;
        } else if (!uA() || rt !== _n || e.tag !== x && e.tag !== k && e.tag !== ee)
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
    function FA(e) {
      e.tag !== el && ZC() && ci.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yf(e) {
      iR = e;
    }
    var $a = null, Ms = null, VA = function(e) {
      $a = e;
    };
    function As(e) {
      {
        if ($a === null)
          return e;
        var t = $a(e);
        return t === void 0 ? e : t.current;
      }
    }
    function nS(e) {
      return As(e);
    }
    function rS(e) {
      {
        if ($a === null)
          return e;
        var t = $a(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = As(e.render);
            if (e.render !== a) {
              var i = { $$typeof: ve, render: a };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function DR(e, t) {
      {
        if ($a === null)
          return false;
        var a = e.elementType, i = t.type, l = false, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case T: {
            typeof i == "function" && (l = true);
            break;
          }
          case x: {
            (typeof i == "function" || s === Ce) && (l = true);
            break;
          }
          case k: {
            (s === ve || s === Ce) && (l = true);
            break;
          }
          case re:
          case ee: {
            (s === He || s === Ce) && (l = true);
            break;
          }
          default:
            return false;
        }
        if (l) {
          var f = $a(a);
          if (f !== void 0 && f === $a(i))
            return true;
        }
        return false;
      }
    }
    function CR(e) {
      {
        if ($a === null || typeof WeakSet != "function")
          return;
        Ms === null && (Ms = /* @__PURE__ */ new WeakSet()), Ms.add(e);
      }
    }
    var YA = function(e, t) {
      {
        if ($a === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        So(), go(function() {
          aS(e.current, i, a);
        });
      }
    }, QA = function(e, t) {
      {
        if (e.context !== pa)
          return;
        So(), go(function() {
          Qf(t, e, null, null);
        });
      }
    };
    function aS(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, m = e.type, h = null;
        switch (f) {
          case x:
          case ee:
          case T:
            h = m;
            break;
          case k:
            h = m.render;
            break;
        }
        if ($a === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = false, w = false;
        if (h !== null) {
          var O = $a(h);
          O !== void 0 && (a.has(O) ? w = true : t.has(O) && (f === T ? w = true : S = true));
        }
        if (Ms !== null && (Ms.has(e) || i !== null && Ms.has(i)) && (w = true), w && (e._debugNeedsRemount = true), w || S) {
          var _ = Vr(e, Ie);
          _ !== null && Ln(_, e, Ie, jt);
        }
        l !== null && !w && aS(l, t, a), s !== null && aS(s, t, a);
      }
    }
    var WA = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return iS(e.current, i, a), a;
      }
    };
    function iS(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, m = null;
        switch (s) {
          case x:
          case ee:
          case T:
            m = f;
            break;
          case k:
            m = f.render;
            break;
        }
        var h = false;
        m !== null && t.has(m) && (h = true), h ? BA(e, a) : i !== null && iS(i, t, a), l !== null && iS(l, t, a);
      }
    }
    function BA(e, t) {
      {
        var a = XA(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case H:
              t.add(i.stateNode);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
            case U:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function XA(e, t) {
      for (var a = e, i = false; ; ) {
        if (a.tag === H)
          i = true, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return false;
    }
    var oS;
    {
      oS = false;
      try {
        var RR = Object.preventExtensions({});
      } catch {
        oS = true;
      }
    }
    function JA(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = ke, this.subtreeFlags = ke, this.deletions = null, this.lanes = G, this.childLanes = G, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = false, this._debugHookTypes = null, !oS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var va = function(e, t, a, i) {
      return new JA(e, t, a, i);
    };
    function lS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function GA(e) {
      return typeof e == "function" && !lS(e) && e.defaultProps === void 0;
    }
    function qA(e) {
      if (typeof e == "function")
        return lS(e) ? T : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ve)
          return k;
        if (t === He)
          return re;
      }
      return V;
    }
    function bu(e, t) {
      var a = e.alternate;
      a === null ? (a = va(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = ke, a.subtreeFlags = ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ao, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case V:
        case x:
        case ee:
          a.type = As(e.type);
          break;
        case T:
          a.type = nS(e.type);
          break;
        case k:
          a.type = rS(e.type);
          break;
      }
      return a;
    }
    function KA(e, t) {
      e.flags &= ao | vn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = G, e.lanes = t, e.child = null, e.subtreeFlags = ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ZA(e, t, a) {
      var i;
      return e === Ip ? (i = nt, t === true && (i |= mn, i |= _i)) : i = _e, Ka && (i |= Et), va(U, null, null, i);
    }
    function uS(e, t, a, i, l, s) {
      var f = V, m = e;
      if (typeof e == "function")
        lS(e) ? (f = T, m = nS(m)) : m = As(m);
      else if (typeof e == "string")
        f = H;
      else
        e:
          switch (e) {
            case ra:
              return pl(a.children, l, s, t);
            case bi:
              f = Ge, l |= mn, (l & nt) !== _e && (l |= _i);
              break;
            case E:
              return ez(a, l, s, t);
            case Xe:
              return tz(a, l, s, t);
            case it:
              return nz(a, l, s, t);
            case It:
              return ER(a, l, s, t);
            case An:
            case ln:
            case Ea:
            case Lo:
            case Ut:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case W:
                    f = C;
                    break e;
                  case ae:
                    f = N;
                    break e;
                  case ve:
                    f = k, m = rS(m);
                    break e;
                  case He:
                    f = re;
                    break e;
                  case Ce:
                    f = he, m = null;
                    break e;
                }
              var h = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var S = i ? ze(i) : null;
                S && (h += `

Check the render method of \`` + S + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
            }
          }
      var w = va(f, a, t, l);
      return w.elementType = e, w.type = m, w.lanes = s, w._debugOwner = i, w;
    }
    function sS(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, m = uS(l, s, f, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function pl(e, t, a, i) {
      var l = va(ie, e, i, t);
      return l.lanes = a, l;
    }
    function ez(e, t, a, i) {
      typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = va(Q, e, i, t | Et);
      return l.elementType = E, l.lanes = a, l.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, l;
    }
    function tz(e, t, a, i) {
      var l = va(X, e, i, t);
      return l.elementType = Xe, l.lanes = a, l;
    }
    function nz(e, t, a, i) {
      var l = va(dt, e, i, t);
      return l.elementType = it, l.lanes = a, l;
    }
    function ER(e, t, a, i) {
      var l = va(Te, e, i, t);
      l.elementType = It, l.lanes = a;
      var s = { isHidden: false };
      return l.stateNode = s, l;
    }
    function cS(e, t, a) {
      var i = va(J, e, null, t);
      return i.lanes = a, i;
    }
    function rz() {
      var e = va(H, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function az(e) {
      var t = va(Re, null, null, _e);
      return t.stateNode = e, t;
    }
    function fS(e, t, a) {
      var i = e.children !== null ? e.children : [], l = va(j, i, e.key, t);
      return l.lanes = a, l.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, l;
    }
    function TR(e, t) {
      return e === null && (e = va(V, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function iz(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Qy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pn, this.eventTimes = vy(G), this.expirationTimes = vy(jt), this.pendingLanes = G, this.suspendedLanes = G, this.pingedLanes = G, this.expiredLanes = G, this.mutableReadLanes = G, this.finishedLanes = G, this.entangledLanes = G, this.entanglements = vy(G), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Qh; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ip:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case el:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function kR(e, t, a, i, l, s, f, m, h, S) {
      var w = new iz(e, t, a, m, h), O = ZA(t, s);
      w.current = O, O.stateNode = w;
      {
        var _ = { element: i, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        O.memoizedState = _;
      }
      return gg(O), w;
    }
    var dS = "18.2.0";
    function oz(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Mn(i), { $$typeof: na, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: a };
    }
    var pS, vS;
    pS = false, vS = {};
    function _R(e) {
      if (!e)
        return pa;
      var t = Ku(e), a = z$(t);
      if (t.tag === T) {
        var i = t.type;
        if (Li(i))
          return eD(t, i, a);
      }
      return a;
    }
    function lz(e, t) {
      {
        var a = Ku(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Cw(a);
        if (l === null)
          return null;
        if (l.mode & mn) {
          var s = ze(a) || "Component";
          if (!vS[s]) {
            vS[s] = true;
            var f = Cn;
            try {
              zt(l), a.mode & mn ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? zt(f) : un();
            }
          }
        }
        return l.stateNode;
      }
    }
    function OR(e, t, a, i, l, s, f, m) {
      var h = false, S = null;
      return kR(e, t, h, S, a, i, l, s, f);
    }
    function NR(e, t, a, i, l, s, f, m, h, S) {
      var w = true, O = kR(a, i, w, e, l, s, f, m, h);
      O.context = _R(null);
      var _ = O.current, P = _r(), z = fl(_), F = vo(P, z);
      return F.callback = t ?? null, rl(_, F, z), vA(O, z, P), O;
    }
    function Qf(e, t, a, i) {
      NN(t, e);
      var l = t.current, s = _r(), f = fl(l);
      qN(f);
      var m = _R(a);
      t.context === null ? t.context = m : t.pendingContext = m, Ci && Cn !== null && !pS && (pS = true, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ze(Cn) || "Unknown"));
      var h = vo(s, f);
      h.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var S = rl(l, h, f);
      return S !== null && (Ln(S, l, f, s), Bp(S, l, f)), f;
    }
    function zv(e) {
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
    function uz(e) {
      switch (e.tag) {
        case U: {
          var t = e.stateNode;
          if (ap(t)) {
            var a = oL(t);
            gA(t, a);
          }
          break;
        }
        case X: {
          go(function() {
            var l = Vr(e, Ie);
            if (l !== null) {
              var s = _r();
              Ln(l, e, Ie, s);
            }
          });
          var i = Ie;
          mS(e, i);
          break;
        }
      }
    }
    function LR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = dL(a.retryLane, t));
    }
    function mS(e, t) {
      LR(e, t);
      var a = e.alternate;
      a && LR(a, t);
    }
    function sz(e) {
      if (e.tag === X) {
        var t = Nc, a = Vr(e, t);
        if (a !== null) {
          var i = _r();
          Ln(a, e, t, i);
        }
        mS(e, t);
      }
    }
    function cz(e) {
      if (e.tag === X) {
        var t = fl(e), a = Vr(e, t);
        if (a !== null) {
          var i = _r();
          Ln(a, e, t, i);
        }
        mS(e, t);
      }
    }
    function UR(e) {
      var t = xN(e);
      return t === null ? null : t.stateNode;
    }
    var IR = function(e) {
      return null;
    };
    function fz(e) {
      return IR(e);
    }
    var $R = function(e) {
      return false;
    };
    function dz(e) {
      return $R(e);
    }
    var MR = null, AR = null, zR = null, jR = null, PR = null, HR = null, FR = null, VR = null, YR = null;
    {
      var QR = function(e, t, a) {
        var i = t[a], l = tt(e) ? e.slice() : Fe({}, e);
        return a + 1 === t.length ? (tt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = QR(e[i], t, a + 1), l);
      }, WR = function(e, t) {
        return QR(e, t, 0);
      }, BR = function(e, t, a, i) {
        var l = t[i], s = tt(e) ? e.slice() : Fe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], tt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = BR(e[l], t, a, i + 1);
        return s;
      }, XR = function(e, t, a) {
        if (t.length !== a.length) {
          p("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              p("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BR(e, t, a, 0);
      }, JR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = tt(e) ? e.slice() : Fe({}, e);
        return s[l] = JR(e[l], t, a + 1, i), s;
      }, GR = function(e, t, a) {
        return JR(e, t, 0, a);
      }, hS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      MR = function(e, t, a, i) {
        var l = hS(e, t);
        if (l !== null) {
          var s = GR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Fe({}, e.memoizedProps);
          var f = Vr(e, Ie);
          f !== null && Ln(f, e, Ie, jt);
        }
      }, AR = function(e, t, a) {
        var i = hS(e, t);
        if (i !== null) {
          var l = WR(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Fe({}, e.memoizedProps);
          var s = Vr(e, Ie);
          s !== null && Ln(s, e, Ie, jt);
        }
      }, zR = function(e, t, a, i) {
        var l = hS(e, t);
        if (l !== null) {
          var s = XR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Fe({}, e.memoizedProps);
          var f = Vr(e, Ie);
          f !== null && Ln(f, e, Ie, jt);
        }
      }, jR = function(e, t, a) {
        e.pendingProps = GR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Vr(e, Ie);
        i !== null && Ln(i, e, Ie, jt);
      }, PR = function(e, t) {
        e.pendingProps = WR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Vr(e, Ie);
        a !== null && Ln(a, e, Ie, jt);
      }, HR = function(e, t, a) {
        e.pendingProps = XR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Vr(e, Ie);
        i !== null && Ln(i, e, Ie, jt);
      }, FR = function(e) {
        var t = Vr(e, Ie);
        t !== null && Ln(t, e, Ie, jt);
      }, VR = function(e) {
        IR = e;
      }, YR = function(e) {
        $R = e;
      };
    }
    function pz(e) {
      var t = Cw(e);
      return t === null ? null : t.stateNode;
    }
    function vz(e) {
      return null;
    }
    function mz() {
      return Cn;
    }
    function hz(e) {
      var t = e.findFiberByHostInstance, a = o.ReactCurrentDispatcher;
      return ON({ bundleType: e.bundleType, version: e.version, rendererPackageName: e.rendererPackageName, rendererConfig: e.rendererConfig, overrideHookState: MR, overrideHookStateDeletePath: AR, overrideHookStateRenamePath: zR, overrideProps: jR, overridePropsDeletePath: PR, overridePropsRenamePath: HR, setErrorHandler: VR, setSuspenseHandler: YR, scheduleUpdate: FR, currentDispatcherRef: a, findHostInstanceByFiber: pz, findFiberByHostInstance: t || vz, findHostInstancesForRefresh: WA, scheduleRefresh: YA, scheduleRoot: QA, setRefreshHandler: VA, getCurrentFiber: mz, reconcilerVersion: dS });
    }
    var qR = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function yS(e) {
      this._internalRoot = e;
    }
    jv.prototype.render = yS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Pv(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== pn) {
          var i = UR(t.current);
          i && i.parentNode !== a && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qf(e, t, null, null);
    }, jv.prototype.unmount = yS.prototype.unmount = function() {
      typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sR() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), go(function() {
          Qf(null, e, null, null);
        }), Jx(t);
      }
    };
    function yz(e, t) {
      if (!Pv(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      KR(e);
      var a = false, i = false, l = "", s = qR, f = null;
      t != null && (t.hydrate ? p("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ra && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && (f = t.transitionCallbacks));
      var m = OR(e, Ip, null, a, i, l, s);
      Tp(m.current, e);
      var h = e.nodeType === pn ? e.parentNode : e;
      return Kc(h), new yS(m);
    }
    function jv(e) {
      this._internalRoot = e;
    }
    function gz(e) {
      e && _L(e);
    }
    jv.prototype.unstable_scheduleHydration = gz;
    function Sz(e, t, a) {
      if (!Pv(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      KR(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = false, f = false, m = "", h = qR;
      a != null && (a.unstable_strictMode === true && (s = true), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var S = NR(t, null, e, Ip, i, s, f, m, h);
      if (Tp(S.current, e), Kc(e), l)
        for (var w = 0; w < l.length; w++) {
          var O = l[w];
          x2(S, O);
        }
      return new jv(S);
    }
    function Pv(e) {
      return !!(e && (e.nodeType === Hr || e.nodeType === eo || e.nodeType === Dh || !q));
    }
    function Wf(e) {
      return !!(e && (e.nodeType === Hr || e.nodeType === eo || e.nodeType === Dh || e.nodeType === pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function KR(e) {
      e.nodeType === Hr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cf(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var bz = o.ReactCurrentOwner, ZR;
    ZR = function(e) {
      if (e._reactRootContainer && e.nodeType !== pn) {
        var t = UR(e._reactRootContainer.current);
        t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = gS(e), l = !!(i && Ko(i));
      l && !a && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Hr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function gS(e) {
      return e ? e.nodeType === eo ? e.documentElement : e.firstChild : null;
    }
    function eE() {
    }
    function wz(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = zv(f);
            s.call(_);
          };
        }
        var f = NR(t, i, e, el, null, false, false, "", eE);
        e._reactRootContainer = f, Tp(f.current, e);
        var m = e.nodeType === pn ? e.parentNode : e;
        return Kc(m), go(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var _ = zv(w);
            S.call(_);
          };
        }
        var w = OR(e, el, null, false, false, "", eE);
        e._reactRootContainer = w, Tp(w.current, e);
        var O = e.nodeType === pn ? e.parentNode : e;
        return Kc(O), go(function() {
          Qf(t, w, a, i);
        }), w;
      }
    }
    function xz(e, t) {
      e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Hv(e, t, a, i, l) {
      ZR(a), xz(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = wz(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var m = l;
          l = function() {
            var h = zv(f);
            m.call(h);
          };
        }
        Qf(t, f, e, l);
      }
      return zv(f);
    }
    function Dz(e) {
      {
        var t = bz.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ot(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = true;
        }
      }
      return e == null ? null : e.nodeType === Hr ? e : lz(e, "findDOMNode");
    }
    function Cz(e, t, a) {
      if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wf(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cf(t) && t._reactRootContainer === void 0;
        i && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Hv(null, e, t, true, a);
    }
    function Rz(e, t, a) {
      if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wf(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cf(t) && t._reactRootContainer === void 0;
        i && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Hv(null, e, t, false, a);
    }
    function Ez(e, t, a, i) {
      if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wf(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !mN(e))
        throw new Error("parentComponent must be a valid React Component");
      return Hv(e, t, a, false, i);
    }
    function Tz(e) {
      if (!Wf(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cf(e) && e._reactRootContainer === void 0;
        t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = gS(e), i = a && !Ko(a);
          i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return go(function() {
          Hv(null, null, e, false, function() {
            e._reactRootContainer = null, Jx(e);
          });
        }), true;
      } else {
        {
          var l = gS(e), s = !!(l && Ko(l)), f = e.nodeType === Hr && Wf(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return false;
      }
    }
    SL(uz), wL(sz), xL(cz), DL(Za), CL(hL), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), aN(RI), lN(J0, SA, go);
    function kz(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pv(t))
        throw new Error("Target container is not a DOM element.");
      return oz(e, t, null, a);
    }
    function _z(e, t, a, i) {
      return Ez(e, t, a, i);
    }
    var SS = { usingClientEntryPoint: false, Events: [Ko, vs, kp, dw, pw, J0] };
    function Oz(e, t) {
      return SS.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), yz(e, t);
    }
    function Nz(e, t, a) {
      return SS.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Sz(e, t, a);
    }
    function Lz(e) {
      return sR() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), go(e);
    }
    var Uz = hz({ findFiberByHostInstance: iu, bundleType: 1, version: dS, rendererPackageName: "react-dom" });
    if (!Uz && en && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var tE = window.location.protocol;
      /^(https?|file):$/.test(tE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (tE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = SS, xa.createPortal = kz, xa.createRoot = Oz, xa.findDOMNode = Dz, xa.flushSync = Lz, xa.hydrate = Cz, xa.hydrateRoot = Nz, xa.render = Rz, xa.unmountComponentAtNode = Tz, xa.unstable_batchedUpdates = J0, xa.unstable_renderSubtreeIntoContainer = _z, xa.version = dS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var I_ = yn((lP, Hb) => {
  "use strict";
  function U_() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U_);
      } catch (n) {
        console.error(n);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (U_(), Hb.exports = N_()) : Hb.exports = L_();
});
var $_ = yn((Fd) => {
  "use strict";
  var Pd = I_();
  process.env.NODE_ENV === "production" ? (Fd.createRoot = Pd.createRoot, Fd.hydrateRoot = Pd.hydrateRoot) : (Hd = Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fd.createRoot = function(n, r) {
    Hd.usingClientEntryPoint = true;
    try {
      return Pd.createRoot(n, r);
    } finally {
      Hd.usingClientEntryPoint = false;
    }
  }, Fd.hydrateRoot = function(n, r, o) {
    Hd.usingClientEntryPoint = true;
    try {
      return Pd.hydrateRoot(n, r, o);
    } finally {
      Hd.usingClientEntryPoint = false;
    }
  });
  var Hd;
});
var j_ = yn((fh) => {
  "use strict";
  var h4 = Ur(), y4 = Symbol.for("react.element"), g4 = Symbol.for("react.fragment"), S4 = Object.prototype.hasOwnProperty, b4 = h4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w4 = { key: true, ref: true, __self: true, __source: true };
  function z_(n, r, o) {
    var u, c = {}, p = null, d = null;
    o !== void 0 && (p = "" + o), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (d = r.ref);
    for (u in r)
      S4.call(r, u) && !w4.hasOwnProperty(u) && (c[u] = r[u]);
    if (n && n.defaultProps)
      for (u in r = n.defaultProps, r)
        c[u] === void 0 && (c[u] = r[u]);
    return { $$typeof: y4, type: n, key: p, ref: d, props: c, _owner: b4.current };
  }
  fh.Fragment = g4;
  fh.jsx = z_;
  fh.jsxs = z_;
});
var P_ = yn((dh) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    var n = Ur(), r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), J = Symbol.iterator, ie = "@@iterator";
    function Ge(E) {
      if (E === null || typeof E != "object")
        return null;
      var W = J && E[J] || E[ie];
      return typeof W == "function" ? W : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(E) {
      {
        for (var W = arguments.length, ae = new Array(W > 1 ? W - 1 : 0), ve = 1; ve < W; ve++)
          ae[ve - 1] = arguments[ve];
        k("error", E, ae);
      }
    }
    function k(E, W, ae) {
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
      return !!(typeof E == "string" || typeof E == "function" || E === u || E === p || he || E === c || E === T || E === V || ee || E === H || Q || X || re || typeof E == "object" && E !== null && (E.$$typeof === j || E.$$typeof === U || E.$$typeof === d || E.$$typeof === b || E.$$typeof === x || E.$$typeof === Me || E.getModuleId !== void 0));
    }
    function dt(E, W, ae) {
      var ve = E.displayName;
      if (ve)
        return ve;
      var Xe = W.displayName || W.name || "";
      return Xe !== "" ? ae + "(" + Xe + ")" : ae;
    }
    function gt(E) {
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
            return gt(W) + ".Consumer";
          case d:
            var ae = E;
            return gt(ae._context) + ".Provider";
          case x:
            return dt(E, E.render, "ForwardRef");
          case U:
            var ve = E.displayName || null;
            return ve !== null ? ve : Te(E.type) || "Memo";
          case j: {
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
    var wt = Object.assign, be = 0, Lt, Pe, at, bn, Zt, M, q;
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
          Object.defineProperties(console, { log: wt({}, E, { value: Lt }), info: wt({}, E, { value: Pe }), warn: wt({}, E, { value: at }), error: wt({}, E, { value: bn }), group: wt({}, E, { value: Zt }), groupCollapsed: wt({}, E, { value: M }), groupEnd: wt({}, E, { value: q }) });
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
          case j: {
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
    dh.Fragment = u, dh.jsx = ra, dh.jsxs = bi;
  }();
});
var fn = yn((EP, Qb) => {
  "use strict";
  process.env.NODE_ENV === "production" ? Qb.exports = j_() : Qb.exports = P_();
});
var K_ = yn((VP, T4) => {
  T4.exports = "./gradebook-HGMMK3GT.png";
});
var Z_ = yn((YP, k4) => {
  k4.exports = "./learnerDashboard-5VWYSIWY.png";
});
var eO = yn((QP, _4) => {
  _4.exports = "./ora-5FMS4A5D.png";
});
var tO = yn((WP, O4) => {
  O4.exports = "./strictDict-XCWHRALP.png";
});
var nO = yn((BP, N4) => {
  N4.exports = "./shallowSnapshot-J77CBTZB.png";
});
var rO = yn((XP, L4) => {
  L4.exports = "./useKeyedState-SMKD7XCK.png";
});
var aO = yn((JP, U4) => {
  U4.exports = "./oraGrading-IBITA2CL.png";
});
var pO = yt(Ur());
var vO = yt($_());
var mO = require("react-router-dom");
var Xb = yt(Ur());
var fO = require("react-router-dom");
var H_ = yt(Ur());
var F_ = yt(require("classnames"));
var TP = require("react-bootstrap");
var mc = require("react-icons/fa");
var V_ = require("react-icons/fa6");
var a4 = Object.create;
var M_ = Object.defineProperty;
var i4 = Object.getOwnPropertyDescriptor;
var o4 = Object.getOwnPropertyNames;
var l4 = Object.getPrototypeOf;
var u4 = Object.prototype.hasOwnProperty;
var Fb = (n, r) => () => (r || n((r = { exports: {} }).exports, r), r.exports);
var s4 = (n, r, o, u) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let c of o4(r))
      !u4.call(n, c) && c !== o && M_(n, c, { get: () => r[c], enumerable: !(u = i4(r, c)) || u.enumerable });
  return n;
};
var Vb = (n, r, o) => (o = n != null ? a4(l4(n)) : {}, s4(r || !n || !n.__esModule ? M_(o, "default", { value: n, enumerable: true }) : o, n));
var c4 = Fb((n) => {
  "use strict";
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), V = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), j = Symbol.iterator;
  function H(M) {
    return M === null || typeof M != "object" ? null : (M = j && M[j] || M["@@iterator"], typeof M == "function" ? M : null);
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
  function k(M, q, Le) {
    this.props = M, this.context = q, this.refs = Ge, this.updater = Le || J;
  }
  var Q = k.prototype = new C();
  Q.constructor = k, ie(Q, N.prototype), Q.isPureReactComponent = true;
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
  function gt(M) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(Le) {
      return q[Le];
    });
  }
  var Te = /\/+/g;
  function wt(M, q) {
    return typeof M == "object" && M !== null && M.key != null ? gt("" + M.key) : q.toString(36);
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
      return ft = M, We = We(ft), M = Qe === "" ? "." + wt(ft, 0) : Qe, X(We) ? (Le = "", M != null && (Le = M.replace(Te, "$&/") + "/"), be(We, q, Le, "", function(Ot) {
        return Ot;
      })) : We != null && (dt(We) && (We = Re(We, Le + (!We.key || ft && ft.key === We.key ? "" : ("" + We.key).replace(Te, "$&/") + "/") + M)), q.push(We)), 1;
    if (ft = 0, Qe = Qe === "" ? "." : Qe + ":", X(M))
      for (var et = 0; et < M.length; et++) {
        ct = M[et];
        var Be = Qe + wt(ct, et);
        ft += be(ct, q, Le, Be, We);
      }
    else if (Be = H(M), typeof Be == "function")
      for (M = Be.call(M), et = 0; !(ct = M.next()).done; )
        ct = ct.value, Be = Qe + wt(ct, et++), ft += be(ct, q, Le, Be, We);
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
  n.Children = { map: Lt, forEach: function(M, q, Le) {
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
  } }, n.Component = N, n.Fragment = u, n.Profiler = p, n.PureComponent = k, n.StrictMode = c, n.Suspense = T, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zt, n.cloneElement = function(M, q, Le) {
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
  }, n.createContext = function(M) {
    return M = { $$typeof: b, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: d, _context: M }, M.Consumer = M;
  }, n.createElement = Me, n.createFactory = function(M) {
    var q = Me.bind(null, M);
    return q.type = M, q;
  }, n.createRef = function() {
    return { current: null };
  }, n.forwardRef = function(M) {
    return { $$typeof: x, render: M };
  }, n.isValidElement = dt, n.lazy = function(M) {
    return { $$typeof: U, _payload: { _status: -1, _result: M }, _init: Pe };
  }, n.memo = function(M, q) {
    return { $$typeof: V, type: M, compare: q === void 0 ? null : q };
  }, n.startTransition = function(M) {
    var q = bn.transition;
    bn.transition = {};
    try {
      M();
    } finally {
      bn.transition = q;
    }
  }, n.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, n.useCallback = function(M, q) {
    return at.current.useCallback(M, q);
  }, n.useContext = function(M) {
    return at.current.useContext(M);
  }, n.useDebugValue = function() {
  }, n.useDeferredValue = function(M) {
    return at.current.useDeferredValue(M);
  }, n.useEffect = function(M, q) {
    return at.current.useEffect(M, q);
  }, n.useId = function() {
    return at.current.useId();
  }, n.useImperativeHandle = function(M, q, Le) {
    return at.current.useImperativeHandle(M, q, Le);
  }, n.useInsertionEffect = function(M, q) {
    return at.current.useInsertionEffect(M, q);
  }, n.useLayoutEffect = function(M, q) {
    return at.current.useLayoutEffect(M, q);
  }, n.useMemo = function(M, q) {
    return at.current.useMemo(M, q);
  }, n.useReducer = function(M, q, Le) {
    return at.current.useReducer(M, q, Le);
  }, n.useRef = function(M) {
    return at.current.useRef(M);
  }, n.useState = function(M) {
    return at.current.useState(M);
  }, n.useSyncExternalStore = function(M, q, Le) {
    return at.current.useSyncExternalStore(M, q, Le);
  }, n.useTransition = function() {
    return at.current.useTransition();
  }, n.version = "18.2.0";
});
var f4 = Fb((n, r) => {
  "use strict";
  process.env.NODE_ENV !== "production" && function() {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = "18.2.0", u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), T = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Ge = Symbol.iterator, N = "@@iterator";
    function C(v) {
      if (v === null || typeof v != "object")
        return null;
      var g = Ge && v[Ge] || v[N];
      return typeof g == "function" ? g : null;
    }
    var k = { current: null }, Q = { transition: null }, X = { current: null, isBatchingLegacy: false, didScheduleLegacyUpdate: false }, re = { current: null }, ee = {}, he = null;
    function Me(v) {
      he = v;
    }
    ee.setExtraStackFrame = function(v) {
      he = v;
    }, ee.getCurrentStack = null, ee.getStackAddendum = function() {
      var v = "";
      he && (v += he);
      var g = ee.getCurrentStack;
      return g && (v += g() || ""), v;
    };
    var Re = false, dt = false, gt = false, Te = false, wt = false, be = { ReactCurrentDispatcher: k, ReactCurrentBatchConfig: Q, ReactCurrentOwner: re };
    be.ReactDebugCurrentFrame = ee, be.ReactCurrentActQueue = X;
    function Lt(v) {
      {
        for (var g = arguments.length, D = new Array(g > 1 ? g - 1 : 0), L = 1; L < g; L++)
          D[L - 1] = arguments[L];
        at("warn", v, D);
      }
    }
    function Pe(v) {
      {
        for (var g = arguments.length, D = new Array(g > 1 ? g - 1 : 0), L = 1; L < g; L++)
          D[L - 1] = arguments[L];
        at("error", v, D);
      }
    }
    function at(v, g, D) {
      {
        var L = be.ReactDebugCurrentFrame, A = L.getStackAddendum();
        A !== "" && (g += "%s", D = D.concat([A]));
        var te = D.map(function(K) {
          return String(K);
        });
        te.unshift("Warning: " + g), Function.prototype.apply.call(console[v], console, te);
      }
    }
    var bn = {};
    function Zt(v, g) {
      {
        var D = v.constructor, L = D && (D.displayName || D.name) || "ReactClass", A = L + "." + g;
        if (bn[A])
          return;
        Pe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", g, L), bn[A] = true;
      }
    }
    var M = { isMounted: function(v) {
      return false;
    }, enqueueForceUpdate: function(v, g, D) {
      Zt(v, "forceUpdate");
    }, enqueueReplaceState: function(v, g, D, L) {
      Zt(v, "replaceState");
    }, enqueueSetState: function(v, g, D, L) {
      Zt(v, "setState");
    } }, q = Object.assign, Le = {};
    Object.freeze(Le);
    function Qe(v, g, D) {
      this.props = v, this.context = g, this.refs = Le, this.updater = D || M;
    }
    Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(v, g) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, v, g, "setState");
    }, Qe.prototype.forceUpdate = function(v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    };
    {
      var We = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] }, ct = function(v, g) {
        Object.defineProperty(Qe.prototype, v, { get: function() {
          Lt("%s(...) is deprecated in plain JavaScript React classes. %s", g[0], g[1]);
        } });
      };
      for (var ft in We)
        We.hasOwnProperty(ft) && ct(ft, We[ft]);
    }
    function et() {
    }
    et.prototype = Qe.prototype;
    function Be(v, g, D) {
      this.props = v, this.context = g, this.refs = Le, this.updater = D || M;
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
        var g = typeof Symbol == "function" && Symbol.toStringTag, D = g && v[Symbol.toStringTag] || v.constructor.name || "Object";
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
    function nn(v, g, D) {
      var L = v.displayName;
      if (L)
        return L;
      var A = g.displayName || g.name || "";
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
        case j:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case T:
            var g = v;
            return Mn(g) + ".Consumer";
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
        var g = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (g && g.isReactWarning)
          return false;
      }
      return v.ref !== void 0;
    }
    function Xt(v) {
      if (zr.call(v, "key")) {
        var g = Object.getOwnPropertyDescriptor(v, "key").get;
        if (g && g.isReactWarning)
          return false;
      }
      return v.key !== void 0;
    }
    function jr(v, g) {
      var D = function() {
        xn || (xn = true, Pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
      };
      D.isReactWarning = true, Object.defineProperty(v, "key", { get: D, configurable: true });
    }
    function Zr(v, g) {
      var D = function() {
        xr || (xr = true, Pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
      };
      D.isReactWarning = true, Object.defineProperty(v, "ref", { get: D, configurable: true });
    }
    function Va(v) {
      if (typeof v.ref == "string" && re.current && v.__self && re.current.stateNode !== v.__self) {
        var g = Yn(re.current.type);
        Dn[g] || (Pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g, v.ref), Dn[g] = true);
      }
    }
    var oe = function(v, g, D, L, A, te, K) {
      var se = { $$typeof: u, type: v, key: g, ref: D, props: K, _owner: te };
      return se._store = {}, Object.defineProperty(se._store, "validated", { configurable: false, enumerable: false, writable: true, value: false }), Object.defineProperty(se, "_self", { configurable: false, enumerable: false, writable: false, value: L }), Object.defineProperty(se, "_source", { configurable: false, enumerable: false, writable: false, value: A }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function xe(v, g, D) {
      var L, A = {}, te = null, K = null, se = null, we = null;
      if (g != null) {
        Dr(g) && (K = g.ref, Va(g)), Xt(g) && (tn(g.key), te = "" + g.key), se = g.__self === void 0 ? null : g.__self, we = g.__source === void 0 ? null : g.__source;
        for (L in g)
          zr.call(g, L) && !wr.hasOwnProperty(L) && (A[L] = g[L]);
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
    function Ae(v, g) {
      var D = oe(v.type, g, v.ref, v._self, v._source, v._owner, v.props);
      return D;
    }
    function pt(v, g, D) {
      if (v == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + v + ".");
      var L, A = q({}, v.props), te = v.key, K = v.ref, se = v._self, we = v._source, Ee = v._owner;
      if (g != null) {
        Dr(g) && (K = g.ref, Ee = re.current), Xt(g) && (tn(g.key), te = "" + g.key);
        var Oe;
        v.type && v.type.defaultProps && (Oe = v.type.defaultProps);
        for (L in g)
          zr.call(g, L) && !wr.hasOwnProperty(L) && (g[L] === void 0 && Oe !== void 0 ? A[L] = Oe[L] : A[L] = g[L]);
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
      var g = /[=:]/g, D = { "=": "=0", ":": "=2" }, L = v.replace(g, function(A) {
        return D[A];
      });
      return "$" + L;
    }
    var Dt = false, Qn = /\/+/g;
    function Ct(v) {
      return v.replace(Qn, "$&/");
    }
    function Rt(v, g) {
      return typeof v == "object" && v !== null && v.key != null ? (tn(v.key), ir("" + v.key)) : g.toString(36);
    }
    function Da(v, g, D, L, A) {
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
          Ee != null && (Oe = Ct(Ee) + "/"), Da(we, g, Oe, "", function(gh) {
            return gh;
          });
        } else
          we != null && (vt(we) && (we.key && (!se || se.key !== we.key) && tn(we.key), we = Ae(we, D + (we.key && (!se || se.key !== we.key) ? Ct("" + we.key) + "/" : "") + Ee)), g.push(we));
        return 1;
      }
      var Ue, Ve, $t = 0, tt = L === "" ? on : L + Qt;
      if (en(v))
        for (var Ga = 0; Ga < v.length; Ga++)
          Ue = v[Ga], Ve = tt + Rt(Ue, Ga), $t += Da(Ue, g, D, Ve, A);
      else {
        var Vo = C(v);
        if (typeof Vo == "function") {
          var Yo = v;
          Vo === Yo.entries && (Dt || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Dt = true);
          for (var gc = Vo.call(Yo), ka, Yl = 0; !(ka = gc.next()).done; )
            Ue = ka.value, Ve = tt + Rt(Ue, Yl++), $t += Da(Ue, g, D, Ve, A);
        } else if (te === "object") {
          var Sc = String(v);
          throw new Error("Objects are not valid as a React child (found: " + (Sc === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : Sc) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return $t;
    }
    function ea(v, g, D) {
      if (v == null)
        return v;
      var L = [], A = 0;
      return Da(v, L, "", "", function(te) {
        return g.call(D, te, A++);
      }), L;
    }
    function Bi(v) {
      var g = 0;
      return ea(v, function() {
        g++;
      }), g;
    }
    function No(v, g, D) {
      ea(v, function() {
        g.apply(this, arguments);
      }, D);
    }
    function $l(v) {
      return ea(v, function(g) {
        return g;
      }) || [];
    }
    function ta(v) {
      if (!vt(v))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return v;
    }
    function Ya(v) {
      var g = { $$typeof: T, _currentValue: v, _currentValue2: v, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      g.Provider = { $$typeof: x, _context: g };
      var D = false, L = false, A = false;
      {
        var te = { $$typeof: T, _context: g };
        Object.defineProperties(te, { Provider: { get: function() {
          return L || (L = true, Pe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), g.Provider;
        }, set: function(K) {
          g.Provider = K;
        } }, _currentValue: { get: function() {
          return g._currentValue;
        }, set: function(K) {
          g._currentValue = K;
        } }, _currentValue2: { get: function() {
          return g._currentValue2;
        }, set: function(K) {
          g._currentValue2 = K;
        } }, _threadCount: { get: function() {
          return g._threadCount;
        }, set: function(K) {
          g._threadCount = K;
        } }, Consumer: { get: function() {
          return D || (D = true, Pe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), g.Consumer;
        } }, displayName: { get: function() {
          return g.displayName;
        }, set: function(K) {
          A || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", K), A = true);
        } } }), g.Consumer = te;
      }
      return g._currentRenderer = null, g._currentRenderer2 = null, g;
    }
    var Ca = -1, Si = 0, Qa = 1, Ra = 2;
    function na(v) {
      if (v._status === Ca) {
        var g = v._result, D = g();
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
      var g = { _status: Ca, _result: v }, D = { $$typeof: J, _payload: g, _init: na };
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
      var g = { $$typeof: V, render: v };
      {
        var D;
        Object.defineProperty(g, "displayName", { enumerable: false, configurable: true, get: function() {
          return D;
        }, set: function(L) {
          D = L, !v.name && !v.displayName && (v.displayName = L);
        } });
      }
      return g;
    }
    var E;
    E = Symbol.for("react.module.reference");
    function W(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === p || v === b || wt || v === d || v === U || v === j || Te || v === ie || Re || dt || gt || typeof v == "object" && v !== null && (v.$$typeof === J || v.$$typeof === H || v.$$typeof === x || v.$$typeof === T || v.$$typeof === V || v.$$typeof === E || v.getModuleId !== void 0));
    }
    function ae(v, g) {
      W(v) || Pe("memo: The first argument must be a component. Instead received: %s", v === null ? "null" : typeof v);
      var D = { $$typeof: H, type: v, compare: g === void 0 ? null : g };
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
      var v = k.current;
      return v === null && Pe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), v;
    }
    function Xe(v) {
      var g = ve();
      if (v._context !== void 0) {
        var D = v._context;
        D.Consumer === v ? Pe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : D.Provider === v && Pe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return g.useContext(v);
    }
    function it(v) {
      var g = ve();
      return g.useState(v);
    }
    function He(v, g, D) {
      var L = ve();
      return L.useReducer(v, g, D);
    }
    function Ce(v) {
      var g = ve();
      return g.useRef(v);
    }
    function ln(v, g) {
      var D = ve();
      return D.useEffect(v, g);
    }
    function Ut(v, g) {
      var D = ve();
      return D.useInsertionEffect(v, g);
    }
    function It(v, g) {
      var D = ve();
      return D.useLayoutEffect(v, g);
    }
    function An(v, g) {
      var D = ve();
      return D.useCallback(v, g);
    }
    function Ea(v, g) {
      var D = ve();
      return D.useMemo(v, g);
    }
    function Lo(v, g, D) {
      var L = ve();
      return L.useImperativeHandle(v, g, D);
    }
    function or(v, g) {
      {
        var D = ve();
        return D.useDebugValue(v, g);
      }
    }
    function yc() {
      var v = ve();
      return v.useTransition();
    }
    function Wa(v) {
      var g = ve();
      return g.useDeferredValue(v);
    }
    function Fe() {
      var v = ve();
      return v.useId();
    }
    function wi(v, g, D) {
      var L = ve();
      return L.useSyncExternalStore(v, g, D);
    }
    var Ba = 0, Uo, Io, $o, Mo, Ao, zo, Ml;
    function ju() {
    }
    ju.__reactDisabledLog = true;
    function Al() {
      {
        if (Ba === 0) {
          Uo = console.log, Io = console.info, $o = console.warn, Mo = console.error, Ao = console.group, zo = console.groupCollapsed, Ml = console.groupEnd;
          var v = { configurable: true, enumerable: true, value: ju, writable: true };
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
    function aa(v, g, D) {
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
    function Pu(v, g) {
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
        if (g) {
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
    function Di(v, g, D) {
      return Pu(v, false);
    }
    function Hu(v) {
      var g = v.prototype;
      return !!(g && g.isReactComponent);
    }
    function Xa(v, g, D) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return Pu(v, Hu(v));
      if (typeof v == "string")
        return aa(v);
      switch (v) {
        case U:
          return aa("Suspense");
        case j:
          return aa("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case V:
            return Di(v.render);
          case H:
            return Xa(v.type, g, D);
          case J: {
            var L = v, A = L._payload, te = L._init;
            try {
              return Xa(te(A), g, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Gi = {}, jl = be.ReactDebugCurrentFrame;
    function ia(v) {
      if (v) {
        var g = v._owner, D = Xa(v.type, v._source, g ? g.type : null);
        jl.setExtraStackFrame(D);
      } else
        jl.setExtraStackFrame(null);
    }
    function jo(v, g, D, L, A) {
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
              se = v[K](g, K, L, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (ia(A), Pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", D, K, typeof se), ia(null)), se instanceof Error && !(se.message in Gi) && (Gi[se.message] = true, ia(A), Pe("Failed %s type: %s", D, se.message), ia(null));
          }
      }
    }
    function ot(v) {
      if (v) {
        var g = v._owner, D = Xa(v.type, v._source, g ? g.type : null);
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
        var g = v.fileName.replace(/^.*[\\\/]/, ""), D = v.lineNumber;
        return `

Check your code at ` + g + ":" + D + ".";
      }
      return "";
    }
    function Fu(v) {
      return v != null ? ze(v.__source) : "";
    }
    var Cn = {};
    function Ci(v) {
      var g = Hl();
      if (!g) {
        var D = typeof v == "string" ? v : v.displayName || v.name;
        D && (g = `

Check the top-level render call using <` + D + ">.");
      }
      return g;
    }
    function Ja(v, g) {
      if (!(!v._store || v._store.validated || v.key != null)) {
        v._store.validated = true;
        var D = Ci(g);
        if (!Cn[D]) {
          Cn[D] = true;
          var L = "";
          v && v._owner && v._owner !== re.current && (L = " It was passed a child from " + Yn(v._owner.type) + "."), ot(v), Pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, L), ot(null);
        }
      }
    }
    function Vu(v, g) {
      if (typeof v == "object") {
        if (en(v))
          for (var D = 0; D < v.length; D++) {
            var L = v[D];
            vt(L) && Ja(L, g);
          }
        else if (vt(v))
          v._store && (v._store.validated = true);
        else if (v) {
          var A = C(v);
          if (typeof A == "function" && A !== v.entries)
            for (var te = A.call(v), K; !(K = te.next()).done; )
              vt(K.value) && Ja(K.value, g);
        }
      }
    }
    function un(v) {
      {
        var g = v.type;
        if (g == null || typeof g == "string")
          return;
        var D;
        if (typeof g == "function")
          D = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === V || g.$$typeof === H))
          D = g.propTypes;
        else
          return;
        if (D) {
          var L = Yn(g);
          jo(D, v.props, "prop", L, v);
        } else if (g.PropTypes !== void 0 && !Pl) {
          Pl = true;
          var A = Yn(g);
          Pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && Pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zt(v) {
      {
        for (var g = Object.keys(v.props), D = 0; D < g.length; D++) {
          var L = g[D];
          if (L !== "children" && L !== "key") {
            ot(v), Pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), ot(null);
            break;
          }
        }
        v.ref !== null && (ot(v), Pe("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function Yu(v, g, D) {
      var L = W(v);
      if (!L) {
        var A = "";
        (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var te = Fu(g);
        te ? A += te : A += Hl();
        var K;
        v === null ? K = "null" : en(v) ? K = "array" : v !== void 0 && v.$$typeof === u ? (K = "<" + (Yn(v.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : K = typeof v, Pe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, A);
      }
      var se = xe.apply(this, arguments);
      if (se == null)
        return se;
      if (L)
        for (var we = 2; we < arguments.length; we++)
          Vu(arguments[we], v);
      return v === p ? zt(se) : un(se), se;
    }
    var Cr = false;
    function ur(v) {
      var g = Yu.bind(null, v);
      return g.type = v, Cr || (Cr = true, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(g, "type", { enumerable: false, get: function() {
        return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: v }), v;
      } }), g;
    }
    function oa(v, g, D) {
      for (var L = pt.apply(this, arguments), A = 2; A < arguments.length; A++)
        Vu(arguments[A], L.type);
      return un(L), L;
    }
    function Po(v, g) {
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
          var g = ("require" + Math.random()).slice(0, 7), D = r && r[g];
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
        var g = Ri;
        Ri++, X.current === null && (X.current = []);
        var D = X.isBatchingLegacy, L;
        try {
          if (X.isBatchingLegacy = true, L = v(), !D && X.didScheduleLegacyUpdate) {
            var A = X.current;
            A !== null && (X.didScheduleLegacyUpdate = false, Fo(A));
          }
        } catch (Ve) {
          throw la(g), Ve;
        } finally {
          X.isBatchingLegacy = D;
        }
        if (L !== null && typeof L == "object" && typeof L.then == "function") {
          var te = L, K = false, se = { then: function(Ve, $t) {
            K = true, te.then(function(tt) {
              la(g), Ri === 0 ? Ei(tt, Ve, $t) : Ve(tt);
            }, function(tt) {
              la(g), $t(tt);
            });
          } };
          return !qi && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            K || (qi = true, Pe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), se;
        } else {
          var we = L;
          if (la(g), Ri === 0) {
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
    function Ei(v, g, D) {
      {
        var L = X.current;
        if (L !== null)
          try {
            Fo(L), Fl(function() {
              L.length === 0 ? (X.current = null, g(v)) : Ei(v, g, D);
            });
          } catch (A) {
            D(A);
          }
        else
          g(v);
      }
    }
    var Ti = false;
    function Fo(v) {
      if (!Ti) {
        Ti = true;
        var g = 0;
        try {
          for (; g < v.length; g++) {
            var D = v[g];
            do
              D = D(true);
            while (D !== null);
          }
          v.length = 0;
        } catch (L) {
          throw v = v.slice(g + 1), L;
        } finally {
          Ti = false;
        }
      }
    }
    var Qu = Yu, Wu = oa, y = ur, R = { map: ea, forEach: No, count: Bi, toArray: $l, only: ta };
    n.Children = R, n.Component = Qe, n.Fragment = p, n.Profiler = b, n.PureComponent = Be, n.StrictMode = d, n.Suspense = U, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, n.cloneElement = Wu, n.createContext = Ya, n.createElement = Qu, n.createFactory = y, n.createRef = $n, n.forwardRef = bi, n.isValidElement = vt, n.lazy = ra, n.memo = ae, n.startTransition = Po, n.unstable_act = Vl, n.useCallback = An, n.useContext = Xe, n.useDebugValue = or, n.useDeferredValue = Wa, n.useEffect = ln, n.useId = Fe, n.useImperativeHandle = Lo, n.useInsertionEffect = Ut, n.useLayoutEffect = It, n.useMemo = Ea, n.useReducer = He, n.useRef = Ce, n.useState = it, n.useSyncExternalStore = wi, n.useTransition = yc, n.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }();
});
var Yb = Fb((n, r) => {
  "use strict";
  process.env.NODE_ENV === "production" ? r.exports = c4() : r.exports = f4();
});
var d4 = Vb(Yb(), 1);
var mP = d4.default.createContext({});
var p4 = (n, r, o = {}) => {
  if (r === Symbol.toStringTag)
    return n;
  if (r === "$$typeof")
    return typeof n;
  if (r in n || r === "_reactFragment")
    return n[r];
  let u = process.env.NODE_ENV;
  if (Object.keys(o).includes(u))
    o[u]({ target: n, key: r });
  else {
    console.log(r.toString()), console.error({ target: n, key: r });
    let c = Error(`invalid property "${r.toString()}"`);
    console.error(c.stack);
  }
};
var Mu = (n, r = {}) => {
  let o = (u, c) => p4(u, c, r);
  return Array.isArray(n) ? new Proxy(n.reduce((u, c) => ({ ...u, [c]: c }), {}), { get: o }) : new Proxy(n, { get: o });
};
var hP = Vb(Yb(), 1);
var yP = Vb(Yb(), 1);
var A_ = "./ampersand-KER2ENTU.png";
var m4 = { name: "Ben Warzeski", email: "bwarzeski@gmail.com", title: "Full-Stack Software Engineer", phone: "+1 (941) 387-5092", phoneRaw: "19413875092", github: "https://www.github.com/muselesscreator", linkedIn: "https://www.linkedin.com/in/benjamin-warzeski-69111518/", avatar: A_ };
var Kr = m4;
var Ze = yt(fn());
var x4 = () => {
  let [n, r] = H_.default.useState(false), o = () => r(!n);
  return (0, Ze.jsxs)("aside", { className: (0, F_.default)("sidebar", { active: n }), children: [(0, Ze.jsxs)("div", { className: "sidebar-info", children: [(0, Ze.jsx)("figure", { className: "avatar-box", children: (0, Ze.jsx)("img", { src: Kr.avatar, alt: Kr.name, width: "80" }) }), (0, Ze.jsxs)("div", { className: "info-content", children: [(0, Ze.jsx)("h1", { className: "name", title: Kr.name, children: Kr.name }), (0, Ze.jsx)("p", { className: "title", children: Kr.title })] }), (0, Ze.jsx)("button", { onClick: o, className: "info_more-btn", children: (0, Ze.jsx)("span", { children: "Show Contacts" }) })] }), (0, Ze.jsxs)("div", { className: "sidebar-info_more", children: [(0, Ze.jsx)("div", { className: "separator" }), (0, Ze.jsxs)("ul", { className: "contacts-list", children: [(0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(mc.FaEnvelope, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "Email" }), (0, Ze.jsx)("a", { href: `mailto:${Kr.email}`, className: "contact-link", children: Kr.email })] })] }), (0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(V_.FaPhone, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "Phone" }), (0, Ze.jsx)("a", { href: `tel:${Kr.phoneRaw}`, className: "contact-link", children: Kr.phone })] })] }), (0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(mc.FaGithub, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "Github" }), (0, Ze.jsx)("a", { href: Kr.github, className: "contact-link", children: Kr.github })] })] }), (0, Ze.jsxs)("li", { className: "contact-item", children: [(0, Ze.jsx)("div", { className: "icon-box", children: (0, Ze.jsx)(mc.FaLinkedin, {}) }), (0, Ze.jsxs)("div", { className: "contact-info", children: [(0, Ze.jsx)("p", { className: "contact-title", children: "LinkedIn" }), (0, Ze.jsx)("a", { href: Kr.linkedIn, className: "contact-link", children: Kr.linkedIn })] })] })] })] })] });
};
var Y_ = x4;
var UP = yt(Ur());
var W_ = yt(require("classnames"));
var B_ = require("react-router-dom");
var Sn = Mu({ about: "about", contact: "contact", resume: "resume", portfolio: "portfolio", blog: "blog" });
var Q_ = Mu({ [Sn.about]: "About", [Sn.contact]: "Contact", [Sn.resume]: "Resume", [Sn.portfolio]: "Portfolio", [Sn.blog]: "Blog" });
var hc = yt(fn());
var D4 = ({ activePage: n }) => {
  let r = (o) => (0, hc.jsx)("li", { className: "navbar-item", children: (0, hc.jsx)(B_.NavLink, { className: (0, W_.default)("navbar-link", { active: n === o }), to: `/${o}`, onClick: () => setActivePage(o), children: Q_[o] }) }, o);
  return (0, hc.jsx)("nav", { className: "navbar", children: (0, hc.jsxs)("ul", { className: "navbar-list", children: [r(Sn.about), r(Sn.resume), r(Sn.portfolio), r(Sn.contact)] }) });
};
var X_ = D4;
var rH = yt(Ur());
var MP = yt(Ur());
var Sr = yt(fn());
var C4 = () => (0, Sr.jsxs)("article", { className: "about active", children: [(0, Sr.jsx)("header", { children: (0, Sr.jsx)("h2", { className: "h2 article-title", children: "About me" }) }), (0, Sr.jsxs)("div", { className: "about-text", children: [(0, Sr.jsx)("p", { children: "With over a decade of software engineering, I specialize in helping teams produce solid, testable frontend-code and maintainable agile frontend development processes, as well as experience in building and managing communities devoted to frontend communication, coordination, and training." }), (0, Sr.jsx)("p", { children: "I have experience guiding large projects from conception, through ideation and refinement, implementation, validation, release, and maintenance, as well as coming into existing projects and codebases and updating them to a consistent level of quality." }), (0, Sr.jsx)("p", { children: "My background in SQA and the odd variety of engineering tech my career has exposed me to give me a mindset and focus on maintainability of code and practices above all else.  I like to spend a bit of thoughtful effort now to make less work for everyone later." }), (0, Sr.jsx)("p", { children: "My core goal in any code-base is not only to achieve excellent code, but specifically to make achieving excellence as easy as possible.  I have high standards for my code and the projects I own, but I also endeavor to provide tools, workflows, and utilities to allow developers to quickly build well-designed, easily-maintained, and highly/deeply tested code." }), (0, Sr.jsx)("p", { children: "It has also been my experience that Agile workflows and processes are very effective for managing the engineering process, and have been pleased to be able to lead and teach multiple teams in development and refinement of effective Agile practices, with a focus on iteration, clarity of ceremonies, and focus/efficacy of meetings." }), (0, Sr.jsxs)("ul", { children: [(0, Sr.jsx)("li", { children: "Senior Frontend/Full-Stack Software Engineer with 8+ years of experience with Python and Full-Stack Python/JavaScript Web development, with a focus on user interfaces, APIs, and testing methodologies." }), (0, Sr.jsx)("li", { children: "Experience developing in a variety of architectures, including web, mobile, asynchronous server applications, and  2D/3D gaming." }), (0, Sr.jsx)("li", { children: "Experience self-managing and leading on projects with complex requirements across departments and generating well defined, fully-featured, well-tested code." }), (0, Sr.jsx)("li", { children: "Experience with test automation, database design, and API design." })] })] })] });
var J_ = C4;
var zP = yt(Ur());
var ph = yt(fn());
var R4 = () => (0, ph.jsxs)("article", { className: "about active", children: [(0, ph.jsx)("h1", { children: "About" }), "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies."] });
var G_ = R4;
var PP = yt(Ur());
var vh = require("@muselesscreator/use-keyed-state");
var Ar = yt(fn());
var Wb = Mu({ fullname: "fullname", email: "email", message: "message" });
var E4 = () => {
  let [n, r] = (0, vh.useKeyedState)(Wb.fullname, ""), [o, u] = (0, vh.useKeyedState)(Wb.email, ""), [c, p] = (0, vh.useKeyedState)(Wb.message, "");
  return (0, Ar.jsxs)("article", { className: "contact active", children: [(0, Ar.jsx)("header", { children: (0, Ar.jsx)("h2", { className: "h2 article-title", children: "Contact" }) }), (0, Ar.jsxs)("section", { className: "contact-form", children: [(0, Ar.jsx)("h3", { className: "h3 form-title", children: "Contact Form" }), (0, Ar.jsxs)("form", { method: "POST", action: "https://formspree.io/f/mkndboev", className: "form", "data-form": true, children: [(0, Ar.jsxs)("div", { className: "input-wrapper", children: [(0, Ar.jsx)("input", { type: "text", name: "fullname", className: "form-input", placeholder: "Full name", required: true, value: n, onChange: (b) => r(b.target.value) }), (0, Ar.jsx)("input", { type: "email", name: "email", className: "form-input", placeholder: "Email address", required: true, value: o, onChange: (b) => u(b.target.value) })] }), (0, Ar.jsx)("textarea", { name: "message", className: "form-input", placeholder: "Your Message", required: true, value: c, onChange: (b) => p(b.target.value) }), (0, Ar.jsxs)("button", { className: "form-btn", type: "submit", disabled: !(n && o && c), children: [(0, Ar.jsx)("ion-icon", { name: "paper-plane" }), (0, Ar.jsx)("span", { children: "Send Message" })] })] })] })] });
};
var q_ = E4;
var oO = yt(Ur());
var Au = yt(require("classnames"));
var mh = require("react-icons/fa");
var hh = require("react-icons/ri");
var I4 = K_();
var $4 = Z_();
var M4 = eO();
var A4 = tO();
var z4 = nO();
var j4 = rO();
var P4 = aO();
var Nt = Mu({ openSource: "Open Source Contributions", public: "Public Packages", all: "All" });
var H4 = [{ title: "@muselesscreator/react-shallow-snapshot", description: "A shallow snapshot testing utility for React", category: Nt.public, githubUrl: "https://www.github.com/muselesscreator/react-shallow-snapshot", githubRepo: "muselesscreator/react-shallow-snapshot", packageName: "@muselesscreator/react-shallow-snapshot", packageUrl: "https://www.npmjs.com/package/@muselesscreator/react-shallow-snapshot", image: z4, projectUrl: "https://www.npmjs.com/package/@muselesscreator/react-shallow-snapshot" }, { title: "@muselesscreator/strict-dict", description: "A key-safe object wrapper for JS", category: Nt.public, githubUrl: "https://www.github.com/muselesscreator/strict-dict", githubRepo: "muselesscreator/strict-dict", packageName: "@muselesscreator/strict-dict", packageUrl: "https://www.npmjs.com/package/@muselesscreator/strict-dict", details: "A key-safe dictionary for JavaScript.  This package is used in all of my projects and is available for anyone to use.", image: A4, projectUrl: "https://www.npmjs.com/package/@muselesscreator/strict-dict" }, { title: "@muselesscreator/use-keyed-state", description: "A more testable React hook for keyed state management", category: Nt.public, githubUrl: "https://www.github.com/muselesscreator/use-keyed-state", githubRepo: "muselesscreator/use-keyed-state", packageName: "@muselesscreator/use-keyed-state", packageUrl: "https://www.npmjs.com/package/@muselesscreator/use-keyed-state", projectUrl: "https://www.npmjs.com/package/@muselesscreator/use-keyed-state", image: j4 }, { title: "EdX Gradebook App Re-Architecture", description: "Grade management app for EdX Course Staff", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-gradebook", githubRepo: "openedx/frontend-app-gradebook", packageName: "@edx/frontend-app-gradebook", packageUrl: "npmjs.com/package/@edx/frontend-app-gradebook", details: "I led a team effort to update and fully re-architect the old Gradebook app with modern React practices and added theme-ability and test coverage.", image: I4, projectUrl: "https://www.github.com/openedx/frontend-app-gradebook" }, { title: "EdX Open Response Assessment Staff Grader", description: "Staff-Grading tool for EdX short-answer and file-submission questions", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-ora-grading", githubRepo: "openedx/frontend-app-ora-grading", packageName: "@edx/frontend-app-ora-grading", packageUrl: "npmjs.com/package/@edx/frontend-app-ora-grading", details: "Served as Technical Lead for the development of a new grading interface which drastically reduced the time, effort, and frustration involved in grading of one of the most-used problem types in the system.  Ensured a bug-free release of code with 100% test coverage.", image: P4, projectUrl: "https://www.github.com/openedx/frontend-app-ora-grading" }, { title: "EdX Learner Home Redesign", description: "Landing page for learner course listings", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-learner-dashboard", githubRepo: "openedx/frontend-app-learner-dashboard", packageName: "@edx/frontend-app-learner-dashboard", packageUrl: "npmjs.com/package/@edx/frontend-app-learner-dashboard", details: "Served as Technical Lead and Project Manager for redesign of the Learner Home web interface (logged-in learner\u2019s course listing page).  The new experience is faster to load, more configurable, more theme-able, and fully internationalized, while providing a much easier interface for adding revenue-significant upsell interfaces (suggested courses, upsell links, \u201Cwhere to go from here?\u201D)", image: $4, projectUrl: "https://www.github.com/openedx/frontend-app-learner-dashboard" }, { title: "EdX Open Response Assessment Learning Block Redesign", description: "Learning block for all short-answer and file-submission questions", category: Nt.openSource, githubUrl: "https://www.github.com/openedx/frontend-app-ora", githubRepo: "openedx/frontend-app-ora", packageName: "@edx/frontend-app-ora", packageUrl: "npmjs.com/package/@edx/frontend-app-ora", details: "Served as Technical Lead and Project Manager for the full redesign of theOpen Response Assessment learning block, migrating legacy (backboneJS/jquery) experience to a modern experience using React and theme-able componentry.", image: M4, projectUrl: "https://www.github.com/openedx/frontend-app-ora" }];
var iO = H4;
var Je = yt(fn());
var F4 = ({ project: n }) => {
  let { title: r, description: o, category: u, githubUrl: c, githubRepo: p, packageName: d, packageUrl: b, image: x, projectUrl: T } = n;
  return (0, Je.jsxs)("li", { className: "project-item active", children: [(0, Je.jsxs)("a", { href: T, target: "_blank", rel: "noopener noreferrer", children: [(0, Je.jsxs)("figure", { className: "project-img", children: [(0, Je.jsxs)("div", { className: "project-item-icon-box", children: [(0, Je.jsx)("p", { children: o }), (0, Je.jsx)(mh.FaEye, {})] }), (0, Je.jsx)("img", { src: x, alt: r, loading: "lazy" })] }), (0, Je.jsx)("h4", { className: "project-title", children: r }), (0, Je.jsx)("p", { className: "project-category", children: u })] }), (0, Je.jsxs)("div", { className: "project-links", children: [(0, Je.jsxs)("p", { children: [(0, Je.jsx)(hh.RiGithubFill, { style: { transform: "translate(0, 2px)" } }), ": ", (0, Je.jsx)("a", { href: c, className: "project-link", target: "_blank", rel: "noopener noreferrer", children: p })] }), (0, Je.jsxs)("p", { children: [(0, Je.jsx)(hh.RiNpmjsFill, { style: { transform: "translate(0, 2px)" } }), ": ", (0, Je.jsx)("a", { href: b, className: "project-link", target: "_blank", rel: "noopener noreferrer", children: d })] })] })] });
};
var V4 = () => {
  let [n, r] = oO.default.useState(Nt.all), o = (u) => () => r(u);
  return (0, Je.jsxs)("article", { className: "portfolio active", children: [(0, Je.jsx)("header", { children: (0, Je.jsx)("h2", { className: "h2 article-title", children: "Portfolio" }) }), (0, Je.jsxs)("section", { className: "projects", children: [(0, Je.jsxs)("ul", { className: "filter-list", children: [(0, Je.jsx)("li", { className: "filter-item", children: (0, Je.jsx)("button", { className: (0, Au.default)({ active: n === Nt.all }), onClick: o(Nt.all), children: Nt.all }) }), (0, Je.jsx)("li", { className: "filter-item", children: (0, Je.jsx)("button", { className: (0, Au.default)({ active: n === Nt.public }), onClick: o(Nt.public), children: Nt.public }) }), (0, Je.jsx)("li", { className: "filter-item", children: (0, Je.jsx)("button", { className: (0, Au.default)({ active: n === Nt.openSource }), onClick: o(Nt.openSource), children: Nt.openSource }) })] }), (0, Je.jsxs)("div", { className: "filter-select-box", children: [(0, Je.jsxs)("button", { className: "filter-select", children: [(0, Je.jsx)("div", { className: "select-value", children: "Select category" }), (0, Je.jsx)("div", { className: "select-icon", children: (0, Je.jsx)(mh.FaChevronDown, {}) })] }), (0, Je.jsxs)("ul", { children: [(0, Je.jsx)("li", { className: (0, Au.default)("select-item", { active: n === Nt.all }), onClick: o(Nt.all), children: Nt.all }), (0, Je.jsx)("li", { className: (0, Au.default)("select-item", { active: n === Nt.public }), onClick: o(Nt.public), children: Nt.public }), (0, Je.jsx)("li", { className: (0, Au.default)("select-item", { active: n === Nt.openSource }), onClick: o(Nt.openSource), children: Nt.openSource })] })] }), (0, Je.jsx)("ul", { className: "project-list", children: iO.filter((u) => u.category === n || n === Nt.all).map((u) => (0, Je.jsx)(F4, { project: u }, u.title)) })] })] });
};
var lO = V4;
var tH = yt(Ur());
var Bb = require("react-icons/gi");
var ue = yt(fn());
var Y4 = () => (0, ue.jsxs)("article", { className: "resume active", children: [(0, ue.jsx)("header", { children: (0, ue.jsx)("h2", { className: "h2 article-title", children: "Resume" }) }), (0, ue.jsxs)("section", { className: "timeline", children: [(0, ue.jsxs)("div", { className: "title-wrapper", children: [(0, ue.jsx)("div", { className: "icon-box", children: (0, ue.jsx)(Bb.GiOpenBook, {}) }), (0, ue.jsx)("h3", { className: "h3", children: "Education" })] }), (0, ue.jsx)("ol", { className: "timeline-list", children: (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Tulane University" }), (0, ue.jsx)("span", { children: "2007 \u2014 2011" }), (0, ue.jsx)("p", { className: "timeline-text", children: 'Bachelor of Science in Mathematics with minors in Music and "Music, Science and Technology".' })] }) })] }), (0, ue.jsxs)("section", { className: "timeline", children: [(0, ue.jsxs)("div", { className: "title-wrapper", children: [(0, ue.jsx)("div", { className: "icon-box", children: (0, ue.jsx)(Bb.GiOpenBook, {}) }), (0, ue.jsx)("h3", { className: "h3", children: "Experience" })] }), (0, ue.jsxs)("ol", { className: "timeline-list", children: [(0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Senior Software Engineer II, UI-Lead - EdX/2U Inc, Boston, MA" }), (0, ue.jsx)("span", { children: "2020 - 2024" }), (0, ue.jsx)("p", { className: "timeline-text", children: "I served as the Frontend technical leadership for my squad across formation and delivery of multiple projects, as well as serving as the Project Manager for later projects, including the Learner Home and ORA redesign projects." }), (0, ue.jsx)("p", { className: "timeline-text", children: "My core priorities and contributions outside of project delivery came in the form of testing, community, and training." }), (0, ue.jsx)("b", { className: "timeline-text", children: "Community-Building" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "Organized and managed the Fedx (frontend-at-edx) community, integrating rotating leadership, a manage-able charter, engineering leadership support/sponsorship, and well-defined responsibilities." }), (0, ue.jsx)("li", { children: "This community serves as the hub for frontend development across teams at a company with no formal frontend organization.  This provided us a place and avenue for discussing/resolving tricky \u201Cglue\u201D type problems that affected many teams, but none specifically enough to get funding otherwise (dependency upgrades, pattern updates, adoption of new technology, definition and consolidation of coding standards)." })] }), (0, ue.jsx)("b", { className: "timeline-text", children: "Training" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "In addition to training up a junior frontend dev on my team as well as training my backend devs to be comfortable working quickly and effectively in our React code, I spent a great deal of time training up developers on other teams on frontend development and testing techniques." }), (0, ue.jsx)("li", { children: "Organized and managed the frontend study group, and integrated it with the fedx community.  I wrote and ran a variety of training sessions on testing, hooks, react development, internal tools, typescript, and more." })] }), (0, ue.jsx)("b", { className: "timeline-text", children: "Testing" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "I maintain a high standard of testing in my projects, with a tendency to release with close to 100% test coverage.  I have a focus on accurate/easy unit tests that provide maximum value for minimum creation/maintenance time." }), (0, ue.jsx)("li", { children: "As part of my testing pattern, I have developed a testing library to serve as a replacement for Enzyme, which is getting deprecated in future versions of React, which has begun being used by members of the community to mass-overhaul testing patterns." })] })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Senior Software Engineer - ReadCoor Inc, Boston, MA" }), (0, ue.jsx)("span", { children: "2018 - 2020" }), (0, ue.jsx)("p", { className: "timeline-text", children: (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Facilitated technology comparison process across teams to determine in which new UI technology the disparate  User Interfaces at the company should work towards being re-written, managing to acquire broad buy-in  across multiple development teams with very different focuses and existing JS workflows.  \u2022 Succeeded in pushing to implement a stable Javascript development workflow, with documented coding  guidelines, UI-generation scripts, reusable plug-in JS components and modules, and a shared theming." }), (0, ue.jsx)("li", { children: " Lead re-write of multiple existing user interfaces into React/Redux." }), (0, ue.jsx)("li", { children: "Lead the requirements generation and implementation of the Customer Device Interface, providing control  over all the parts of the genetic sequencing scan setup and run procedure, with input from and co-ordination  with UX designer. As part of this process, I helped lead the generation of initial design and requirements,  provided 90% of JS implementation, facilitated/lead backend API updates/integration, and generated a full  set of requirements in Testlink along with a development manual test plan for engineer testers." })] }) })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Software Engineer, UI Lead - Optimus Ride, Boston, MA" }), (0, ue.jsx)("span", { children: "2017 \u2014 2018" }), (0, ue.jsx)("p", { className: "timeline-text", children: (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "As Lead UI Developer, implemented web-based customer-facing User Interfaces in React/Redux, targeted at  many levels of customer, including rider, dispatchers, vehicle operators, and fleet managers." }), (0, ue.jsx)("li", { children: "As Scrum Master for Fleet Software team: designed and enforced an agile system to bring structure to a  disorganized team. Implemented 2-week sprints, with regular agile meetings, resulting in improved output,  and vastly improved targeting of priorities by enforcing a structure around requirements-gathering and  problem definition from stakeholders." }), (0, ue.jsx)("li", { children: "As SW Engineer, built python backend services in support of web user interfaces, allowing tracking of a  meta-contextual state across system components and tracking/controlling the data driving the user  experience workflow throughout and across all user levels/types." })] }) })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Software Engineer, Software Engineer II - Bio-Rad, Boston MA" }), (0, ue.jsx)("span", { children: "2014 \u2014 2017" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsx)("li", { children: "As Project Manager for the Customer User Interface: managed coordination between manufacturing,  marketing, biology, and software departments, along with an external UX contracting firm, to produce a  touch-screen user interface for the MonoRAyL system." }), (0, ue.jsx)("li", { children: "As Lead Developer for the Customer User Interface: produced a touch-screen web app based around a  Python web server, responsible for guiding the user through the steps of an experiment, while also managing  the hardware interaction, data access, user management, and software/firmware updates." }), (0, ue.jsx)("li", { children: "As Lead Developer for the Internal Development User Interface: produced a complex, robust one-page app  providing control over all aspects of the complex biomedical microfluidic device." }), (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Provided controls and status readouts for over 40 physical sensors and interfaces, including: electrodes,  cameras, stepper motors, thermal plates, pressure pumps/valves, lasers, and LEDs" }), (0, ue.jsx)("li", { children: "Provided sub-tools for manufacturing and software teams allowed management of all running sub processes and internal flags for the system as well as interactive tools for running end-of-line testing and  managing machine configurations." }), (0, ue.jsx)("li", { children: "Developed and maintained tools and APIs for inter-process communication, database management and interaction, unit testing, asynchronous process coordination, and hardware interactions." })] })] })] }), (0, ue.jsxs)("li", { className: "timeline-item", children: [(0, ue.jsx)("h4", { className: "h4 timeline-item-title", children: "Co-Founder/Lead Developer - Nerd Pile Gaming, Boston, MA" }), (0, ue.jsx)("span", { children: "2013 \u2014 2016" }), (0, ue.jsxs)("ul", { className: "timeline-text", children: [(0, ue.jsxs)("li", { children: ["For the studio\u2019s first iOS/Android release, ", (0, ue.jsx)("em", { children: "Farmageddon" })] }), (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Lead Developer, implementing core gameplay APIs in Lua using CoronaSDK." }), (0, ue.jsx)("li", { children: "Lead Sound Engineer, producing sound effects, voice overs and seven music compositions." })] }), (0, ue.jsxs)("li", { children: ["Post-", (0, ue.jsx)("em", { children: "Farmageddon" })] }), (0, ue.jsxs)("ul", { children: [(0, ue.jsx)("li", { children: "Lead Developer for further projects in Unity" }), (0, ue.jsx)("li", { children: "Developed 2D and 3D interfaces for a variety of puzzle games" }), (0, ue.jsx)("li", { children: "Lead Sound Engineer, four music compositions for PuzzlePlanets" })] })] })] })] })] })] });
var uO = Y4;
var cO = yt(fn());
var Q4 = { [Sn.about]: J_, [Sn.blog]: G_, [Sn.contact]: q_, [Sn.portfolio]: lO, [Sn.resume]: uO };
var W4 = ({ activePage: n }) => {
  let r = Q4[n];
  return (0, cO.jsx)(r, {});
};
var sO = W4;
var zu = yt(fn());
function B4() {
  let n = (0, fO.useLocation)().pathname.slice(1), [r, o] = Xb.default.useState(n ? Sn[n] : Sn.about);
  return Xb.default.useEffect(() => {
    o(Sn[n]);
  }, [n, o]), (0, zu.jsxs)("main", { children: [(0, zu.jsx)(Y_, {}), (0, zu.jsxs)("div", { className: "main-content", children: [(0, zu.jsx)(X_, { activePage: r, setActivePage: o }), (0, zu.jsx)(sO, { activePage: r })] })] });
}
var dO = B4;
var yh = yt(fn());
var X4 = vO.default.createRoot(document.getElementById("root"));
X4.render((0, yh.jsx)(pO.default.StrictMode, { children: (0, yh.jsx)(mO.BrowserRouter, { children: (0, yh.jsx)(dO, {}) }) }));
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
