/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cv(a) {
        if (!ck[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement) cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close();
                d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }

    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function ct() {
        cr = b
    }

    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }

    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function cb(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        } if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function ca(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object")
            for (var e in b) ca(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bT,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }

    function bZ(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bx : by,
            g = 0,
            h = e.length;
        if (d > 0) {
            if (c !== "border")
                for (; g < h; g++) c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; g < h; g++) d += parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + "px"
    }

    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw new Error(a)
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break; return a
                },
                trim: G ? function (a) {
                    return a == null ? "" : G.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            },
            n = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++)
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            },
            o = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function () {
                    c = [];
                    return this
                },
                disable: function () {
                    c = d = e = b;
                    return this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function () {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"),
            r = c.documentElement;
        q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }!q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (q.attachEvent)
            for (o in {
                submit: 1,
                change: 1,
                focusin: 1
            }) n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p;
        k.removeChild(q), k = g = h = j = q = i = null, f(function () {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            }, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function () {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++)~ g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0]; {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; h < g; h++) e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /\bhover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [
                    [e, p.bindType || h]
                ];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = [],
                j, k, l, m, n, o, p, q, r, s, t;
            g[0] = c, c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                m = f(this), m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {}, q = [], m[0] = l;
                    for (j = 0; j < e; j++) r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r);
                    q.length && i.push({
                        elem: l,
                        matches: q
                    })
                }
            }
            d.length > e && i.push({
                elem: this,
                matches: d.slice(e)
            });
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j], c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                }
            }
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button,
                    i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a,
                h = f.event.fixHooks[a.type] || {},
                i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {
                setup: f.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c = this,
                    d = a.relatedTarget,
                    e = a.handleObj,
                    g = e.selector,
                    h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var d = 0,
            e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0)
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J;
            else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                    f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }),
    function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            e = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0,
                v = m.isXML(d),
                w = [],
                x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))
                if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]")
                if (!u) e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
            else
                for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a,
                r = [],
                s = c,
                t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === "\\") continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f) g = i = !0;
                            else if (f === !0) continue
                        }
                        if (f)
                            for (n = 0;
                                (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], "");
                            if (!g) return [];
                            break
                        }
                    }
                if (a === q)
                    if (g == null) m.error(a);
                    else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
                var b, c, d = a.nodeType,
                    e = "";
                if (d) {
                    if (d === 1 || d === 9) {
                        if (typeof a.textContent == "string") return a.textContent;
                        if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                        for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                    } else if (d === 3 || d === 4) return a.nodeValue
                } else
                    for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
                return e
            },
            o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b == "string",
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1);
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b == "string",
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                    },
                    "~": function (a, b, c) {
                        var d, f = e++,
                            g = x;
                        typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = [],
                                d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(j, "") + " ";
                        if (f) return a;
                        for (var g = 0, h;
                            (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function (a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function (a, b) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        } else a[2] && m.error(a[0]);
                        a[0] = e++;
                        return a
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === "not")
                            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                            else {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1
                            } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                        return b
                    },
                    POS: function (a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        return a.checked === !0
                    },
                    selected: function (a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 === 0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function (a, b) {
                        var c, e, f, g, h, i, j, k = b[1],
                            l = a;
                        switch (k) {
                        case "only":
                        case "first":
                            while (l = l.previousSibling)
                                if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case "last":
                            while (l = l.nextSibling)
                                if (l.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function (a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        if (f) return f(a, c, b, d)
                    }
                }
            },
            p = o.match.POS,
            q = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0,
                    d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length == "number")
                    for (var e = a.length; c < e; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),
        function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(),
        function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e,
                                l = e.getAttribute("id"),
                                n = l || d,
                                p = e.parentNode,
                                q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {} finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(),
        function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {}
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(),
        function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [],
                f = "",
                g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.POS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bp)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
                (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string")
                    if (!_.test(k)) k = b.createTextNode(k);
                    else {
                        k = k.replace(Y, "<$1></$2>");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                            m = bg[l] || bg._default,
                            n = m[0],
                            o = b.createElement("div");
                        b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                        while (n--) o = o.lastChild;
                        if (!f.support.tbody) {
                            var p = $.test(k),
                                q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                        }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                    }
                var r;
                if (!f.support.appendChecked)
                    if (k[0] && typeof (r = k.length) == "number")
                        for (i = 0; i < r; i++) bn(k[i]);
                    else bn(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (j = 0; h[j]; j++)
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                    else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
            }
            return h
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i,
        br = /opacity=([^)]*)/,
        bs = /([A-Z]|^ms)/g,
        bt = /^-?\d+(?:px)?$/i,
        bu = /^-?\d/,
        bv = /^([\-+])=([\-+.\de]+)/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Left", "Right"],
        by = ["Top", "Bottom"],
        bz, bA, bB;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bz) return bz(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return bC(a, b, d);
                    f.swap(a, bw, function () {
                        e = bC(a, b, d)
                    });
                    return e
                }
            },
            set: function (a, b) {
                if (!bt.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function () {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function (a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }), c.documentElement.currentStyle && (bB = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bD = /%20/g,
        bE = /\[\]$/,
        bF = /\r?\n/g,
        bG = /#.*$/,
        bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bK = /^(?:GET|HEAD)$/,
        bL = /^\/\//,
        bM = /\?/,
        bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bO = /^(?:select|textarea)/i,
        bP = /\s+/,
        bQ = /([?&])_=[^&]*/,
        bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bS = f.fn.load,
        bT = {},
        bU = {},
        bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"), bV.href = "", bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bS) return bS.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bF, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cb(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cc(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var g in a) ca(g, a[g], c, e);
            return d.join("&").replace(bD, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now(),
        ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cd++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ? function () {
            for (var a in ch) ch[a](0, 1)
        } : !1,
        cg = 0,
        ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ci() || cj()
    } : ci,
    function (a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                if (e) h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var ck = {},
        cl, cm, cn = /^(?:toggle|show|hide)$/,
        co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cp, cq = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cr;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = cr || cs(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(cp), cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0],
            c;
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        } : {
            top: 0,
            left: 0
        };
        var h = e.body,
            i = cy(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cy(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);

jQuery(function ($) {
    $.easing.elasout = function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    $.easing.easeInOutQuad = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
});


/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: csstransforms | csstransforms3d | csstransitions | cssclasses | prefixed | teststyles | testprop | testallprops | prefixes | domprefixes
 * http://www.modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;
window.Modernizr = function (a, b, c) {
    function C(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1),
            d = (a + " " + o.join(c + " ") + c).split(" ");
        return B(d, b)
    }

    function B(a, b) {
        for (var d in a)
            if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0;
        return !1
    }

    function A(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function z(a, b) {
        return typeof a === b
    }

    function y(a, b) {
        return x(n.join(a + ";") + (b || ""))
    }

    function x(a) {
        k.cssText = a
    }
    var d = "2.0.6",
        e = {},
        f = !0,
        g = b.documentElement,
        h = b.head || b.getElementsByTagName("head")[0],
        i = "modernizr",
        j = b.createElement(i),
        k = j.style,
        l, m = Object.prototype.toString,
        n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        o = "Webkit Moz O ms Khtml".split(" "),
        p = {},
        q = {},
        r = {},
        s = [],
        t = function (a, c, d, e) {
            var f, h, j, k = b.createElement("div");
            if (parseInt(d, 10))
                while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1), k.appendChild(j);
            f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML += f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k);
            return !!h
        },
        u, v = {}.hasOwnProperty,
        w;
    !z(v, c) && !z(v.call, c) ? w = function (a, b) {
        return v.call(a, b)
    } : w = function (a, b) {
        return b in a && z(a.constructor.prototype[b], c)
    };
    var D = function (a, c) {
        var d = a.join(""),
            f = c.length;
        t(d, function (a, c) {
            var d = b.styleSheets[b.styleSheets.length - 1],
                g = d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText || "",
                h = a.childNodes,
                i = {};
            while (f--) i[h[f].id] = h[f];
            e.csstransforms3d = i.csstransforms3d.offsetLeft === 9
        }, f, c)
    }([, ["@media (", n.join("transform-3d),("), i, ")", "{#csstransforms3d{left:9px;position:absolute}}"].join("")], [, "csstransforms3d"]);
    p.csstransforms = function () {
        return !!B(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    }, p.csstransforms3d = function () {
        var a = !!B(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        a && "webkitPerspective" in g.style && (a = e.csstransforms3d);
        return a
    }, p.csstransitions = function () {
        return C("transitionProperty")
    };
    for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
    x(""), j = l = null, e._version = d, e._prefixes = n, e._domPrefixes = o, e.testProp = function (a) {
        return B([a])
    }, e.testAllProps = C, e.testStyles = t, e.prefixed = function (a) {
        return C(a, "pfx")
    }, g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + s.join(" ") : "");
    return e
}(this, this.document);

/**
 * jquery.inview.min.js
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function (c) {
    function p() {
        var d, a = {
            height: h.innerHeight,
            width: h.innerWidth
        };
        if (!a.height && ((d = i.compatMode) || !c.support.boxModel)) d = d === "CSS1Compat" ? k : i.body, a = {
            height: d.clientHeight,
            width: d.clientWidth
        };
        return a
    }
    var m = {},
        e, a, i = document,
        h = window,
        k = i.documentElement,
        j = c.expando;
    c.event.special.inview = {
        add: function (a) {
            m[a.guid + "-" + this[j]] = {
                data: a,
                $element: c(this)
            }
        },
        remove: function (a) {
            try {
                delete m[a.guid + "-" + this[j]]
            } catch (c) {}
        }
    };
    c(h).bind("scroll resize", function () {
        e = a = null
    });
    setInterval(function () {
        var d =
            c(),
            j, l = 0;
        c.each(m, function (a, b) {
            var c = b.data.selector,
                e = b.$element;
            d = d.add(c ? e.find(c) : e)
        });
        if (j = d.length) {
            e = e || p();
            for (a = a || {
                top: h.pageYOffset || k.scrollTop || i.body.scrollTop,
                left: h.pageXOffset || k.scrollLeft || i.body.scrollLeft
            }; l < j; l++)
                if (c.contains(k, d[l])) {
                    var g = c(d[l]),
                        f = {
                            height: g.height(),
                            width: g.width()
                        },
                        b = g.offset(),
                        n = g.data("inview"),
                        o;
                    if (!a || !e) break;
                    b.top + f.height > a.top && b.top < a.top + e.height && b.left + f.width > a.left && b.left < a.left + e.width ? (o = a.left > b.left ? "right" : a.left + e.width < b.left + f.width ?
                        "left" : "both", f = a.top > b.top ? "bottom" : a.top + e.height < b.top + f.height ? "top" : "both", b = o + "-" + f, (!n || n !== b) && g.data("inview", b).trigger("inview", [!0, o, f])) : n && g.data("inview", !1).trigger("inview", [!1])
                }
        }
    }, 250)
})(jQuery);

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function () {},
            wipeRight: function () {},
            wipeUp: function () {},
            wipeDown: function () {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;
(function (d) {
    var k = d.scrollTo = function (a, i, e) {
        d(window).scrollTo(a, i, e)
    };
    k.defaults = {
        axis: 'xy',
        duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
    };
    k.window = function (a) {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function () {
        return this.map(function () {
            var a = this,
                i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!i) return a;
            var e = (a.contentWindow || a).document || a.ownerDocument || a;
            return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
        })
    };
    d.fn.scrollTo = function (n, j, b) {
        if (typeof j == 'object') {
            b = j;
            j = 0
        }
        if (typeof b == 'function') b = {
            onAfter: b
        };
        if (n == 'max') n = 9e9;
        b = d.extend({}, k.defaults, b);
        j = j || b.speed || b.duration;
        b.queue = b.queue && b.axis.length > 1;
        if (b.queue) j /= 2;
        b.offset = p(b.offset);
        b.over = p(b.over);
        return this._scrollable().each(function () {
            var q = this,
                r = d(q),
                f = n,
                s, g = {},
                u = r.is('html,body');
            switch (typeof f) {
            case 'number':
            case 'string':
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                    f = p(f);
                    break
                }
                f = d(f, this);
            case 'object':
                if (f.is || f.style) s = (f = d(f)).offset()
            }
            d.each(b.axis.split(''), function (a, i) {
                var e = i == 'x' ? 'Left' : 'Top',
                    h = e.toLowerCase(),
                    c = 'scroll' + e,
                    l = q[c],
                    m = k.max(q, i);
                if (s) {
                    g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                    if (b.margin) {
                        g[c] -= parseInt(f.css('margin' + e)) || 0;
                        g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                    }
                    g[c] += b.offset[h] || 0;
                    if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                } else {
                    var o = f[h];
                    g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                } if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                if (!a && b.queue) {
                    if (l != g[c]) t(b.onAfterFirst);
                    delete g[c]
                }
            });
            t(b.onAfter);

            function t(a) {
                r.animate(g, j, b.easing, a && function () {
                    a.call(this, n, b)
                })
            }
        }).end()
    };
    k.max = function (a, i) {
        var e = i == 'x' ? 'Width' : 'Height',
            h = 'scroll' + e;
        if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()]();
        var c = 'client' + e,
            l = a.ownerDocument.documentElement,
            m = a.ownerDocument.body;
        return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
    };

    function p(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);

// Underscore.js 1.2.3
// (c) 2009-2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function () {
    function r(a, c, d) {
        if (a === c) return a !== 0 || 1 / a == 1 / c;
        if (a == null || c == null) return a === c;
        if (a._chain) a = a._wrapped;
        if (c._chain) c = c._wrapped;
        if (a.isEqual && b.isFunction(a.isEqual)) return a.isEqual(c);
        if (c.isEqual && b.isFunction(c.isEqual)) return c.isEqual(a);
        var e = l.call(a);
        if (e != l.call(c)) return false;
        switch (e) {
        case "[object String]":
            return a == String(c);
        case "[object Number]":
            return a != +a ? c != +c : a == 0 ? 1 / a == 1 / c : a == +c;
        case "[object Date]":
        case "[object Boolean]":
            return +a == +c;
        case "[object RegExp]":
            return a.source ==
                c.source && a.global == c.global && a.multiline == c.multiline && a.ignoreCase == c.ignoreCase
        }
        if (typeof a != "object" || typeof c != "object") return false;
        for (var f = d.length; f--;)
            if (d[f] == a) return true;
        d.push(a);
        var f = 0,
            g = true;
        if (e == "[object Array]") {
            if (f = a.length, g = f == c.length)
                for (; f--;)
                    if (!(g = f in a == f in c && r(a[f], c[f], d))) break
        } else {
            if ("constructor" in a != "constructor" in c || a.constructor != c.constructor) return false;
            for (var h in a)
                if (m.call(a, h) && (f++, !(g = m.call(c, h) && r(a[h], c[h], d)))) break;
            if (g) {
                for (h in c)
                    if (m.call(c,
                        h) && !f--) break;
                g = !f
            }
        }
        d.pop();
        return g
    }
    var s = this,
        F = s._,
        o = {},
        k = Array.prototype,
        p = Object.prototype,
        i = k.slice,
        G = k.concat,
        H = k.unshift,
        l = p.toString,
        m = p.hasOwnProperty,
        v = k.forEach,
        w = k.map,
        x = k.reduce,
        y = k.reduceRight,
        z = k.filter,
        A = k.every,
        B = k.some,
        q = k.indexOf,
        C = k.lastIndexOf,
        p = Array.isArray,
        I = Object.keys,
        t = Function.prototype.bind,
        b = function (a) {
            return new n(a)
        };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) exports = module.exports = b;
        exports._ = b
    } else typeof define === "function" &&
        define.amd ? define("underscore", function () {
            return b
        }) : s._ = b;
    b.VERSION = "1.2.3";
    var j = b.each = b.forEach = function (a, c, b) {
        if (a != null)
            if (v && a.forEach === v) a.forEach(c, b);
            else if (a.length === +a.length)
            for (var e = 0, f = a.length; e < f; e++) {
                if (e in a && c.call(b, a[e], e, a) === o) break
            } else
                for (e in a)
                    if (m.call(a, e) && c.call(b, a[e], e, a) === o) break
    };
    b.map = function (a, c, b) {
        var e = [];
        if (a == null) return e;
        if (w && a.map === w) return a.map(c, b);
        j(a, function (a, g, h) {
            e[e.length] = c.call(b, a, g, h)
        });
        return e
    };
    b.reduce = b.foldl = b.inject = function (a,
        c, d, e) {
        var f = arguments.length > 2;
        a == null && (a = []);
        if (x && a.reduce === x) return e && (c = b.bind(c, e)), f ? a.reduce(c, d) : a.reduce(c);
        j(a, function (a, b, i) {
            f ? d = c.call(e, d, a, b, i) : (d = a, f = true)
        });
        if (!f) throw new TypeError("Reduce of empty array with no initial value");
        return d
    };
    b.reduceRight = b.foldr = function (a, c, d, e) {
        var f = arguments.length > 2;
        a == null && (a = []);
        if (y && a.reduceRight === y) return e && (c = b.bind(c, e)), f ? a.reduceRight(c, d) : a.reduceRight(c);
        var g = b.toArray(a).reverse();
        e && !f && (c = b.bind(c, e));
        return f ? b.reduce(g,
            c, d, e) : b.reduce(g, c)
    };
    b.find = b.detect = function (a, c, b) {
        var e;
        D(a, function (a, g, h) {
            if (c.call(b, a, g, h)) return e = a, true
        });
        return e
    };
    b.filter = b.select = function (a, c, b) {
        var e = [];
        if (a == null) return e;
        if (z && a.filter === z) return a.filter(c, b);
        j(a, function (a, g, h) {
            c.call(b, a, g, h) && (e[e.length] = a)
        });
        return e
    };
    b.reject = function (a, c, b) {
        var e = [];
        if (a == null) return e;
        j(a, function (a, g, h) {
            c.call(b, a, g, h) || (e[e.length] = a)
        });
        return e
    };
    b.every = b.all = function (a, c, b) {
        var e = true;
        if (a == null) return e;
        if (A && a.every === A) return a.every(c,
            b);
        j(a, function (a, g, h) {
            if (!(e = e && c.call(b, a, g, h))) return o
        });
        return e
    };
    var D = b.some = b.any = function (a, c, d) {
        c || (c = b.identity);
        var e = false;
        if (a == null) return e;
        if (B && a.some === B) return a.some(c, d);
        j(a, function (a, b, h) {
            if (e || (e = c.call(d, a, b, h))) return o
        });
        return !!e
    };
    b.include = b.contains = function (a, c) {
        var b = false;
        if (a == null) return b;
        return q && a.indexOf === q ? a.indexOf(c) != -1 : b = D(a, function (a) {
            return a === c
        })
    };
    b.invoke = function (a, c) {
        var d = i.call(arguments, 2);
        return b.map(a, function (a) {
            return (c.call ? c || a : a[c]).apply(a,
                d)
        })
    };
    b.pluck = function (a, c) {
        return b.map(a, function (a) {
            return a[c]
        })
    };
    b.max = function (a, c, d) {
        if (!c && b.isArray(a)) return Math.max.apply(Math, a);
        if (!c && b.isEmpty(a)) return -Infinity;
        var e = {
            computed: -Infinity
        };
        j(a, function (a, b, h) {
            b = c ? c.call(d, a, b, h) : a;
            b >= e.computed && (e = {
                value: a,
                computed: b
            })
        });
        return e.value
    };
    b.min = function (a, c, d) {
        if (!c && b.isArray(a)) return Math.min.apply(Math, a);
        if (!c && b.isEmpty(a)) return Infinity;
        var e = {
            computed: Infinity
        };
        j(a, function (a, b, h) {
            b = c ? c.call(d, a, b, h) : a;
            b < e.computed && (e = {
                value: a,
                computed: b
            })
        });
        return e.value
    };
    b.shuffle = function (a) {
        var c = [],
            b;
        j(a, function (a, f) {
            f == 0 ? c[0] = a : (b = Math.floor(Math.random() * (f + 1)), c[f] = c[b], c[b] = a)
        });
        return c
    };
    b.sortBy = function (a, c, d) {
        return b.pluck(b.map(a, function (a, b, g) {
            return {
                value: a,
                criteria: c.call(d, a, b, g)
            }
        }).sort(function (a, c) {
            var b = a.criteria,
                d = c.criteria;
            return b < d ? -1 : b > d ? 1 : 0
        }), "value")
    };
    b.groupBy = function (a, c) {
        var d = {},
            e = b.isFunction(c) ? c : function (a) {
                return a[c]
            };
        j(a, function (a, b) {
            var c = e(a, b);
            (d[c] || (d[c] = [])).push(a)
        });
        return d
    };
    b.sortedIndex =
        function (a, c, d) {
            d || (d = b.identity);
            for (var e = 0, f = a.length; e < f;) {
                var g = e + f >> 1;
                d(a[g]) < d(c) ? e = g + 1 : f = g
            }
            return e
    };
    b.toArray = function (a) {
        return !a ? [] : a.toArray ? a.toArray() : b.isArray(a) ? i.call(a) : b.isArguments(a) ? i.call(a) : b.values(a)
    };
    b.size = function (a) {
        return b.toArray(a).length
    };
    b.first = b.head = function (a, b, d) {
        return b != null && !d ? i.call(a, 0, b) : a[0]
    };
    b.initial = function (a, b, d) {
        return i.call(a, 0, a.length - (b == null || d ? 1 : b))
    };
    b.last = function (a, b, d) {
        return b != null && !d ? i.call(a, Math.max(a.length - b, 0)) : a[a.length -
            1]
    };
    b.rest = b.tail = function (a, b, d) {
        return i.call(a, b == null || d ? 1 : b)
    };
    b.compact = function (a) {
        return b.filter(a, function (a) {
            return !!a
        })
    };
    b.flatten = function (a, c) {
        return b.reduce(a, function (a, e) {
            if (b.isArray(e)) return a.concat(c ? e : b.flatten(e));
            a[a.length] = e;
            return a
        }, [])
    };
    b.without = function (a) {
        return b.difference(a, i.call(arguments, 1))
    };
    b.uniq = b.unique = function (a, c, d) {
        var d = d ? b.map(a, d) : a,
            e = [];
        b.reduce(d, function (d, g, h) {
            if (0 == h || (c === true ? b.last(d) != g : !b.include(d, g))) d[d.length] = g, e[e.length] = a[h];
            return d
        }, []);
        return e
    };
    b.union = function () {
        return b.uniq(b.flatten(arguments, true))
    };
    b.intersection = b.intersect = function (a) {
        var c = i.call(arguments, 1);
        return b.filter(b.uniq(a), function (a) {
            return b.every(c, function (c) {
                return b.indexOf(c, a) >= 0
            })
        })
    };
    b.difference = function (a) {
        var c = b.flatten(i.call(arguments, 1));
        return b.filter(a, function (a) {
            return !b.include(c, a)
        })
    };
    b.zip = function () {
        for (var a = i.call(arguments), c = b.max(b.pluck(a, "length")), d = Array(c), e = 0; e < c; e++) d[e] = b.pluck(a, "" + e);
        return d
    };
    b.indexOf = function (a,
        c, d) {
        if (a == null) return -1;
        var e;
        if (d) return d = b.sortedIndex(a, c), a[d] === c ? d : -1;
        if (q && a.indexOf === q) return a.indexOf(c);
        for (d = 0, e = a.length; d < e; d++)
            if (d in a && a[d] === c) return d;
        return -1
    };
    b.lastIndexOf = function (a, b) {
        if (a == null) return -1;
        if (C && a.lastIndexOf === C) return a.lastIndexOf(b);
        for (var d = a.length; d--;)
            if (d in a && a[d] === b) return d;
        return -1
    };
    b.range = function (a, b, d) {
        arguments.length <= 1 && (b = a || 0, a = 0);
        for (var d = arguments[2] || 1, e = Math.max(Math.ceil((b - a) / d), 0), f = 0, g = Array(e); f < e;) g[f++] = a, a += d;
        return g
    };
    var E = function () {};
    b.bind = function (a, c) {
        var d, e;
        if (a.bind === t && t) return t.apply(a, i.call(arguments, 1));
        if (!b.isFunction(a)) throw new TypeError;
        e = i.call(arguments, 2);
        return d = function () {
            if (!(this instanceof d)) return a.apply(c, e.concat(i.call(arguments)));
            E.prototype = a.prototype;
            var b = new E,
                g = a.apply(b, e.concat(i.call(arguments)));
            return Object(g) === g ? g : b
        }
    };
    b.bindAll = function (a) {
        var c = i.call(arguments, 1);
        c.length == 0 && (c = b.functions(a));
        j(c, function (c) {
            a[c] = b.bind(a[c], a)
        });
        return a
    };
    b.memoize = function (a,
        c) {
        var d = {};
        c || (c = b.identity);
        return function () {
            var b = c.apply(this, arguments);
            return m.call(d, b) ? d[b] : d[b] = a.apply(this, arguments)
        }
    };
    b.delay = function (a, b) {
        var d = i.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(a, d)
        }, b)
    };
    b.defer = function (a) {
        return b.delay.apply(b, [a, 1].concat(i.call(arguments, 1)))
    };
    b.throttle = function (a, c) {
        var d, e, f, g, h, i = b.debounce(function () {
            h = g = false
        }, c);
        return function () {
            d = this;
            e = arguments;
            var b;
            f || (f = setTimeout(function () {
                f = null;
                h && a.apply(d, e);
                i()
            }, c));
            g ? h = true :
                a.apply(d, e);
            i();
            g = true
        }
    };
    b.debounce = function (a, b) {
        var d;
        return function () {
            var e = this,
                f = arguments;
            clearTimeout(d);
            d = setTimeout(function () {
                d = null;
                a.apply(e, f)
            }, b)
        }
    };
    b.once = function (a) {
        var b = false,
            d;
        return function () {
            if (b) return d;
            b = true;
            return d = a.apply(this, arguments)
        }
    };
    b.wrap = function (a, b) {
        return function () {
            var d = G.apply([a], arguments);
            return b.apply(this, d)
        }
    };
    b.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, d = a.length - 1; d >= 0; d--) b = [a[d].apply(this, b)];
            return b[0]
        }
    };
    b.after =
        function (a, b) {
            return a <= 0 ? b() : function () {
                if (--a < 1) return b.apply(this, arguments)
            }
    };
    b.keys = I || function (a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [],
            d;
        for (d in a) m.call(a, d) && (b[b.length] = d);
        return b
    };
    b.values = function (a) {
        return b.map(a, b.identity)
    };
    b.functions = b.methods = function (a) {
        var c = [],
            d;
        for (d in a) b.isFunction(a[d]) && c.push(d);
        return c.sort()
    };
    b.extend = function (a) {
        j(i.call(arguments, 1), function (b) {
            for (var d in b) b[d] !== void 0 && (a[d] = b[d])
        });
        return a
    };
    b.defaults = function (a) {
        j(i.call(arguments,
            1), function (b) {
            for (var d in b) a[d] == null && (a[d] = b[d])
        });
        return a
    };
    b.clone = function (a) {
        return !b.isObject(a) ? a : b.isArray(a) ? a.slice() : b.extend({}, a)
    };
    b.tap = function (a, b) {
        b(a);
        return a
    };
    b.isEqual = function (a, b) {
        return r(a, b, [])
    };
    b.isEmpty = function (a) {
        if (b.isArray(a) || b.isString(a)) return a.length === 0;
        for (var c in a)
            if (m.call(a, c)) return false;
        return true
    };
    b.isElement = function (a) {
        return !!(a && a.nodeType == 1)
    };
    b.isArray = p || function (a) {
        return l.call(a) == "[object Array]"
    };
    b.isObject = function (a) {
        return a ===
            Object(a)
    };
    b.isArguments = function (a) {
        return l.call(a) == "[object Arguments]"
    };
    if (!b.isArguments(arguments)) b.isArguments = function (a) {
        return !(!a || !m.call(a, "callee"))
    };
    b.isFunction = function (a) {
        return l.call(a) == "[object Function]"
    };
    b.isString = function (a) {
        return l.call(a) == "[object String]"
    };
    b.isNumber = function (a) {
        return l.call(a) == "[object Number]"
    };
    b.isNaN = function (a) {
        return a !== a
    };
    b.isBoolean = function (a) {
        return a === true || a === false || l.call(a) == "[object Boolean]"
    };
    b.isDate = function (a) {
        return l.call(a) ==
            "[object Date]"
    };
    b.isRegExp = function (a) {
        return l.call(a) == "[object RegExp]"
    };
    b.isNull = function (a) {
        return a === null
    };
    b.isUndefined = function (a) {
        return a === void 0
    };
    b.noConflict = function () {
        s._ = F;
        return this
    };
    b.identity = function (a) {
        return a
    };
    b.times = function (a, b, d) {
        for (var e = 0; e < a; e++) b.call(d, e)
    };
    b.escape = function (a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    b.mixin = function (a) {
        j(b.functions(a), function (c) {
            J(c,
                b[c] = a[c])
        })
    };
    var K = 0;
    b.uniqueId = function (a) {
        var b = K++;
        return a ? a + b : b
    };
    b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    b.template = function (a, c) {
        var d = b.templateSettings,
            d = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(d.escape, function (a, b) {
                return "',_.escape(" + b.replace(/\\'/g, "'") + "),'"
            }).replace(d.interpolate, function (a, b) {
                return "'," + b.replace(/\\'/g,
                    "'") + ",'"
            }).replace(d.evaluate || null, function (a, b) {
                return "');" + b.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            e = new Function("obj", "_", d);
        return c ? e(c, b) : function (a) {
            return e.call(this, a, b)
        }
    };
    var n = function (a) {
        this._wrapped = a
    };
    b.prototype = n.prototype;
    var u = function (a, c) {
            return c ? b(a).chain() : a
        },
        J = function (a, c) {
            n.prototype[a] = function () {
                var a = i.call(arguments);
                H.call(a, this._wrapped);
                return u(c.apply(b,
                    a), this._chain)
            }
        };
    b.mixin(b);
    j("pop,push,reverse,shift,sort,splice,unshift".split(","), function (a) {
        var b = k[a];
        n.prototype[a] = function () {
            b.apply(this._wrapped, arguments);
            return u(this._wrapped, this._chain)
        }
    });
    j(["concat", "join", "slice"], function (a) {
        var b = k[a];
        n.prototype[a] = function () {
            return u(b.apply(this._wrapped, arguments), this._chain)
        }
    });
    n.prototype.chain = function () {
        this._chain = true;
        return this
    };
    n.prototype.value = function () {
        return this._wrapped
    }
}).call(this);

/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under MIT-style license:
 */
(function (g) {
    function m() {
        if (e.jStorage) try {
            c = n("" + e.jStorage)
        } catch (a) {
            e.jStorage = "{}"
        } else e.jStorage = "{}";
        j = e.jStorage ? ("" + e.jStorage).length : 0
    }

    function h() {
        try {
            e.jStorage = o(c), d && (d.setAttribute("jStorage", e.jStorage), d.save("jStorage")), j = e.jStorage ? ("" + e.jStorage).length : 0
        } catch (a) {}
    }

    function i(a) {
        if (!a || "string" != typeof a && "number" != typeof a) throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == a) throw new TypeError("Reserved key name");
        return !0
    }

    function k() {
        var a,
            b, d, e = Infinity,
            f = !1;
        clearTimeout(p);
        if (c.__jstorage_meta && "object" == typeof c.__jstorage_meta.TTL) {
            a = +new Date;
            d = c.__jstorage_meta.TTL;
            for (b in d) d.hasOwnProperty(b) && (d[b] <= a ? (delete d[b], delete c[b], f = !0) : d[b] < e && (e = d[b]));
            Infinity != e && (p = setTimeout(k, e - a));
            f && h()
        }
    }
    if (!g || !g.toJSON && !Object.toJSON && !window.JSON) throw Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");
    var c = {},
        e = {
            jStorage: "{}"
        },
        d = null,
        j = 0,
        o = g.toJSON || Object.toJSON || window.JSON && (JSON.encode || JSON.stringify),
        n = g.evalJSON || window.JSON && (JSON.decode || JSON.parse) || function (a) {
            return ("" + a).evalJSON()
        },
        f = !1,
        p, l = {
            isXML: function (a) {
                return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
            },
            encode: function (a) {
                if (!this.isXML(a)) return !1;
                try {
                    return (new XMLSerializer).serializeToString(a)
                } catch (b) {
                    try {
                        return a.xml
                    } catch (c) {}
                }
                return !1
            },
            decode: function (a) {
                var b = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function (a) {
                    var b = new ActiveXObject("Microsoft.XMLDOM");
                    b.async =
                        "false";
                    b.loadXML(a);
                    return b
                };
                if (!b) return !1;
                a = b.call("DOMParser" in window && new DOMParser || window, a, "text/xml");
                return this.isXML(a) ? a : !1
            }
        };
    g.jStorage = {
        version: "0.1.6.1",
        set: function (a, b) {
            i(a);
            if (l.isXML(b)) b = {
                _is_xml: !0,
                xml: l.encode(b)
            };
            else {
                if ("function" == typeof b) return;
                b && "object" == typeof b && (b = n(o(b)))
            }
            c[a] = b;
            h();
            return b
        },
        get: function (a, b) {
            i(a);
            return a in c ? c[a] && "object" == typeof c[a] && c[a]._is_xml && c[a]._is_xml ? l.decode(c[a].xml) : c[a] : "undefined" == typeof b ? null : b
        },
        deleteKey: function (a) {
            i(a);
            return a in c ? (delete c[a], c.__jstorage_meta && "object" == typeof c.__jstorage_meta.TTL && a in c.__jstorage_meta.TTL && delete c.__jstorage_meta.TTL[a], h(), !0) : !1
        },
        setTTL: function (a, b) {
            var d = +new Date;
            i(a);
            b = Number(b) || 0;
            if (a in c) {
                if (!c.__jstorage_meta) c.__jstorage_meta = {};
                if (!c.__jstorage_meta.TTL) c.__jstorage_meta.TTL = {};
                0 < b ? c.__jstorage_meta.TTL[a] = d + b : delete c.__jstorage_meta.TTL[a];
                h();
                k();
                return !0
            }
            return !1
        },
        flush: function () {
            c = {};
            h();
            return !0
        },
        storageObj: function () {
            function a() {}
            a.prototype = c;
            return new a
        },
        index: function () {
            var a = [],
                b;
            for (b in c) c.hasOwnProperty(b) && "__jstorage_meta" != b && a.push(b);
            return a
        },
        storageSize: function () {
            return j
        },
        currentBackend: function () {
            return f
        },
        storageAvailable: function () {
            return !!f
        },
        reInit: function () {
            var a;
            if (d && d.addBehavior) {
                a = document.createElement("link");
                d.parentNode.replaceChild(a, d);
                d = a;
                d.style.behavior = "url(#default#userData)";
                document.getElementsByTagName("head")[0].appendChild(d);
                d.load("jStorage");
                a = "{}";
                try {
                    a = d.getAttribute("jStorage")
                } catch (b) {}
                e.jStorage =
                    a;
                f = "userDataBehavior"
            }
            m()
        }
    };
    (function () {
        var a = !1;
        if ("localStorage" in window) try {
            window.localStorage.setItem("_tmptest", "tmpval"), a = !0, window.localStorage.removeItem("_tmptest")
        } catch (b) {}
        if (a) try {
            if (window.localStorage) e = window.localStorage, f = "localStorage"
        } catch (c) {} else if ("globalStorage" in window) try {
            window.globalStorage && (e = window.globalStorage[window.location.hostname], f = "globalStorage")
        } catch (g) {} else if (d = document.createElement("link"), d.addBehavior) {
            d.style.behavior = "url(#default#userData)";
            document.getElementsByTagName("head")[0].appendChild(d);
            d.load("jStorage");
            a = "{}";
            try {
                a = d.getAttribute("jStorage")
            } catch (h) {}
            e.jStorage = a;
            f = "userDataBehavior"
        } else {
            d = null;
            return
        }
        m();
        k()
    })()
})(window.jQuery || window.$);

/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2011, John Dyer (http://j.hn)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
var mejs = mejs || {};
mejs.version = "2.6.5";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo"]
    }]
};
mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function (b) {
        var f = 0,
            e, g = "",
            d = "",
            c, a = document.getElementsByTagName("script");
        for (; f < a.length; f++) {
            c = a[f].src;
            for (e = 0; e < b.length; e++) {
                d = b[e];
                if (c.indexOf(d) > -1) {
                    g = c.substring(0, c.indexOf(d));
                    break
                }
            }
            if (g !== "") {
                break
            }
        }
        return g
    },
    secondsToTimeCode: function (c, g, a, b) {
        if (typeof a == "undefined") {
            a = false
        } else {
            if (typeof b == "undefined") {
                b = 25
            }
        }
        var f = Math.floor(c / 3600) % 24,
            d = Math.floor(c / 60) % 60,
            h = Math.floor(c % 60),
            e = Math.floor(((c % 1) * b).toFixed(3)),
            j = ((g || f > 0) ? (f < 10 ? "0" + f : f) + ":" : "") + (d < 10 ? "0" + d : d) + ":" + (h < 10 ? "0" + h : h) + ((a) ? ":" + (e < 10 ? "0" + e : e) : "");
        return j
    },
    timeCodeToSeconds: function (c, k, d, e) {
        if (typeof d == "undefined") {
            d = false
        } else {
            if (typeof e == "undefined") {
                e = 25
            }
        }
        var f = c.split(":"),
            a = parseInt(f[0], 10),
            b = parseInt(f[1], 10),
            h = parseInt(f[2], 10),
            j = 0,
            g = 0;
        if (d) {
            j = parseInt(f[3]) / e
        }
        g = (a * 3600) + (b * 60) + h + j;
        return g
    },
    removeSwf: function (b) {
        var a = document.getElementById(b);
        if (a && a.nodeName == "OBJECT") {
            if (mejs.MediaFeatures.isIE) {
                a.style.display = "none";
                (function () {
                    if (a.readyState == 4) {
                        mejs.Utility.removeObjectInIE(b)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                a.parentNode.removeChild(a)
            }
        }
    },
    removeObjectInIE: function (c) {
        var b = document.getElementById(c);
        if (b) {
            for (var a in b) {
                if (typeof b[a] == "function") {
                    b[a] = null
                }
            }
            b.parentNode.removeChild(b)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function (c, a) {
        var b = this.plugins[c];
        a[1] = a[1] || 0;
        a[2] = a[2] || 0;
        return (b[0] > a[0] || (b[0] == a[0] && b[1] > a[1]) || (b[0] == a[0] && b[1] == a[1] && b[2] >= a[2])) ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (d, c, e, a, b) {
        this.plugins[d] = this.detectPlugin(c, e, a, b)
    },
    detectPlugin: function (g, b, c, k) {
        var h = [0, 0, 0],
            j, d, a;
        if (typeof (this.nav.plugins) != "undefined" && typeof this.nav.plugins[g] == "object") {
            j = this.nav.plugins[g].description;
            if (j && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                h = j.replace(g, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (d = 0; d < h.length; d++) {
                    h[d] = parseInt(h[d].match(/\d+/), 10)
                }
            }
        } else {
            if (typeof (window.ActiveXObject) != "undefined") {
                try {
                    a = new ActiveXObject(c);
                    if (a) {
                        h = k(a)
                    }
                } catch (f) {}
            }
        }
        return h
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (b) {
    var a = [],
        c = b.GetVariable("$version");
    if (c) {
        c = c.split(" ")[1].split(",");
        a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]
    }
    return a
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (b) {
    var a = [0, 0, 0, 0],
        c = function (f, d, e, g) {
            while (f.isVersionSupported(d[0] + "." + d[1] + "." + d[2] + "." + d[3])) {
                d[e] += g
            }
            d[e] -= g
        };
    c(b, a, 0, 1);
    c(b, a, 1, 1);
    c(b, a, 2, 10000);
    c(b, a, 2, 1000);
    c(b, a, 2, 100);
    c(b, a, 2, 10);
    c(b, a, 2, 1);
    c(b, a, 3, 1);
    return a
});
mejs.MediaFeatures = {
    init: function () {
        var e = this,
            h = document,
            g = mejs.PluginDetector.nav,
            c = mejs.PluginDetector.ua.toLowerCase(),
            b, a, f = ["source", "track", "audio", "video"];
        e.isiPad = (c.match(/ipad/i) !== null);
        e.isiPhone = (c.match(/iphone/i) !== null);
        e.isiOS = e.isiPhone || e.isiPad;
        e.isAndroid = (c.match(/android/i) !== null);
        e.isBustedAndroid = (c.match(/android 2\.[12]/) !== null);
        e.isIE = (g.appName.toLowerCase().indexOf("microsoft") != -1);
        e.isChrome = (c.match(/chrome/gi) !== null);
        e.isFirefox = (c.match(/firefox/gi) !== null);
        e.isWebkit = (c.match(/webkit/gi) !== null);
        e.isGecko = (c.match(/gecko/gi) !== null) && !e.isWebkit;
        e.isOpera = (c.match(/opera/gi) !== null);
        e.hasTouch = ("ontouchstart" in window);
        for (b = 0; b < f.length; b++) {
            a = document.createElement(f[b])
        }
        e.supportsMediaTag = (typeof a.canPlayType !== "undefined" || e.isBustedAndroid);
        e.hasSemiNativeFullScreen = (typeof a.webkitEnterFullscreen !== "undefined");
        e.hasWebkitNativeFullScreen = (typeof a.webkitRequestFullScreen !== "undefined");
        e.hasMozNativeFullScreen = (typeof a.mozRequestFullScreen !== "undefined");
        e.hasTrueNativeFullScreen = (e.hasWebkitNativeFullScreen || e.hasMozNativeFullScreen);
        e.nativeFullScreenEnabled = e.hasTrueNativeFullScreen;
        if (e.hasMozNativeFullScreen) {
            e.nativeFullScreenEnabled = a.mozFullScreenEnabled
        }
        if (this.isChrome) {
            e.hasSemiNativeFullScreen = false
        }
        if (e.hasTrueNativeFullScreen) {
            e.fullScreenEventName = (e.hasWebkitNativeFullScreen) ? "webkitfullscreenchange" : "mozfullscreenchange";
            e.isFullScreen = function () {
                if (a.mozRequestFullScreen) {
                    return h.mozFullScreen
                } else {
                    if (a.webkitRequestFullScreen) {
                        return h.webkitIsFullScreen
                    }
                }
            };
            e.requestFullScreen = function (d) {
                if (e.hasWebkitNativeFullScreen) {
                    d.webkitRequestFullScreen()
                } else {
                    if (e.hasMozNativeFullScreen) {
                        d.mozRequestFullScreen()
                    }
                }
            };
            e.cancelFullScreen = function () {
                if (e.hasWebkitNativeFullScreen) {
                    document.webkitCancelFullScreen()
                } else {
                    if (e.hasMozNativeFullScreen) {
                        document.mozCancelFullScreen()
                    }
                }
            }
        }
        if (e.hasSemiNativeFullScreen && c.match(/mac os x 10_5/i)) {
            e.hasNativeFullScreen = false;
            e.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function (a) {
        this.currentTime = a
    },
    setMuted: function (a) {
        this.muted = a
    },
    setVolume: function (a) {
        this.volume = a
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (a) {
        var c = this.getElementsByTagName("source");
        while (c.length > 0) {
            this.removeChild(c[0])
        }
        if (typeof a == "string") {
            this.src = a
        } else {
            var b, d;
            for (b = 0; b < a.length; b++) {
                d = a[b];
                if (this.canPlayType(d.type)) {
                    this.src = d.src
                }
            }
        }
    },
    setVideoSize: function (b, a) {
        this.width = b;
        this.height = a
    }
};
mejs.PluginMediaElement = function (b, c, a) {
    this.id = b;
    this.pluginType = c;
    this.src = a;
    this.events = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function () {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                this.pluginApi.playVideo()
            } else {
                this.pluginApi.playMedia()
            }
            this.paused = false
        }
    },
    load: function () {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {} else {
                this.pluginApi.loadMedia()
            }
            this.paused = false
        }
    },
    pause: function () {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                this.pluginApi.pauseVideo()
            } else {
                this.pluginApi.pauseMedia()
            }
            this.paused = true
        }
    },
    stop: function () {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                this.pluginApi.stopVideo()
            } else {
                this.pluginApi.stopMedia()
            }
            this.paused = true
        }
    },
    canPlayType: function (e) {
        var d, c, a, b = mejs.plugins[this.pluginType];
        for (d = 0; d < b.length; d++) {
            a = b[d];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, a.version)) {
                for (c = 0; c < a.types.length; c++) {
                    if (e == a.types[c]) {
                        return true
                    }
                }
            }
        }
        return false
    },
    positionFullscreenButton: function (a, c, b) {
        if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
            this.pluginApi.positionFullscreenButton(a, c, b)
        }
    },
    hideFullscreenButton: function () {
        if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
            this.pluginApi.hideFullscreenButton()
        }
    },
    setSrc: function (a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a)
                }
            }
        }
    },
    setCurrentTime: function (a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                this.pluginApi.seekTo(a)
            } else {
                this.pluginApi.setCurrentTime(a)
            }
            this.currentTime = a
        }
    },
    setVolume: function (a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                this.pluginApi.setVolume(a * 100)
            } else {
                this.pluginApi.setVolume(a)
            }
            this.volume = a
        }
    },
    setMuted: function (a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                if (a) {
                    this.pluginApi.mute()
                } else {
                    this.pluginApi.unMute()
                }
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else {
                this.pluginApi.setMuted(a)
            }
            this.muted = a
        }
    },
    setVideoSize: function (b, a) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = b + "px";
            this.pluginElement.style.height = a + "px"
        }
        if (this.pluginApi != null && this.pluginApi.setVideoSize) {
            this.pluginApi.setVideoSize(b, a)
        }
    },
    setFullscreen: function (a) {
        if (this.pluginApi != null && this.pluginApi.setFullscreen) {
            this.pluginApi.setFullscreen(a)
        }
    },
    enterFullScreen: function () {
        if (this.pluginApi != null && this.pluginApi.setFullscreen) {
            this.setFullscreen(true)
        }
    },
    exitFullScreen: function () {
        if (this.pluginApi != null && this.pluginApi.setFullscreen) {
            this.setFullscreen(false)
        }
    },
    addEventListener: function (b, c, a) {
        this.events[b] = this.events[b] || [];
        this.events[b].push(c)
    },
    removeEventListener: function (a, c) {
        if (!a) {
            this.events = {};
            return true
        }
        var b = this.events[a];
        if (!b) {
            return true
        }
        if (!c) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] === c) {
                this.events[a].splice(i, 1);
                return true
            }
        }
        return false
    },
    dispatchEvent: function (a) {
        var c, b, d = this.events[a];
        if (d) {
            b = Array.prototype.slice.call(arguments, 1);
            for (c = 0; c < d.length; c++) {
                d[c].apply(null, b)
            }
        }
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (c, a, b) {
        this.pluginMediaElements[c] = a;
        this.htmlMediaElements[c] = b
    },
    initPlugin: function (c) {
        var a = this.pluginMediaElements[c],
            b = this.htmlMediaElements[c];
        if (a) {
            switch (a.pluginType) {
            case "flash":
                a.pluginElement = a.pluginApi = document.getElementById(c);
                break;
            case "silverlight":
                a.pluginElement = document.getElementById(a.id);
                a.pluginApi = a.pluginElement.Content.MediaElementJS;
                break
            }
            if (a.pluginApi != null && a.success) {
                a.success(a, b)
            }
        }
    },
    fireEvent: function (h, c, b) {
        var g, f, a, d = this.pluginMediaElements[h];
        d.ended = false;
        d.paused = true;
        g = {
            type: c,
            target: d
        };
        for (f in b) {
            d[f] = b[f];
            g[f] = b[f]
        }
        a = b.bufferedTime || 0;
        g.target.buffered = g.buffered = {
            start: function (e) {
                return 0
            },
            end: function (e) {
                return a
            },
            length: 1
        };
        d.dispatchEvent(g.type, g)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    enablePluginSmoothing: false,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () {},
    error: function () {}
};
mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function (e, d) {
        var n = mejs.MediaElementDefaults,
            k = (typeof (e) == "string") ? document.getElementById(e) : e,
            h = k.tagName.toLowerCase(),
            g = (h === "audio" || h === "video"),
            b = (g) ? k.getAttribute("src") : k.getAttribute("href"),
            l = k.getAttribute("poster"),
            f = k.getAttribute("autoplay"),
            j = k.getAttribute("preload"),
            m = k.getAttribute("controls"),
            a, c;
        for (c in d) {
            n[c] = d[c]
        }
        b = (typeof b == "undefined" || b === null || b == "") ? null : b;
        l = (typeof l == "undefined" || l === null) ? "" : l;
        j = (typeof j == "undefined" || j === null || j === "false") ? "none" : j;
        f = !(typeof f == "undefined" || f === null || f === "false");
        m = !(typeof m == "undefined" || m === null || m === "false");
        a = this.determinePlayback(k, n, mejs.MediaFeatures.supportsMediaTag, g, b);
        a.url = (a.url !== null) ? mejs.Utility.absolutizeUrl(a.url) : "";
        if (a.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                k.src = a.url;
                k.addEventListener("click", function () {
                    k.play()
                }, false)
            }
            return this.updateNative(a, n, f, j)
        } else {
            if (a.method !== "") {
                return this.createPlugin(a, n, l, f, j, m)
            } else {
                this.createErrorMessage(a, n, l);
                return this
            }
        }
    },
    determinePlayback: function (s, v, b, d, a) {
        var u = [],
            m, h, g, f, c, q, t = {
                method: "",
                url: "",
                htmlMediaElement: s,
                isVideo: (s.tagName.toLowerCase() != "audio")
            },
            o, p, r, e;
        if (typeof v.type != "undefined" && v.type !== "") {
            if (typeof v.type == "string") {
                u.push({
                    type: v.type,
                    url: a
                })
            } else {
                for (m = 0; m < v.type.length; m++) {
                    u.push({
                        type: v.type[m],
                        url: a
                    })
                }
            }
        } else {
            if (a !== null) {
                q = this.formatType(a, s.getAttribute("type"));
                u.push({
                    type: q,
                    url: a
                })
            } else {
                for (m = 0; m < s.childNodes.length; m++) {
                    c = s.childNodes[m];
                    if (c.nodeType == 1 && c.tagName.toLowerCase() == "source") {
                        a = c.getAttribute("src");
                        q = this.formatType(a, c.getAttribute("type"));
                        u.push({
                            type: q,
                            url: a
                        })
                    }
                }
            }
        } if (!d && u.length > 0 && u[0].url !== null && this.getTypeFromFile(u[0].url).indexOf("audio") > -1) {
            t.isVideo = false
        }
        if (mejs.MediaFeatures.isBustedAndroid) {
            s.canPlayType = function (j) {
                return (j.match(/video\/(mp4|m4v)/gi) !== null) ? "maybe" : ""
            }
        }
        if (b && (v.mode === "auto" || v.mode === "native")) {
            if (!d) {
                e = document.createElement(t.isVideo ? "video" : "audio");
                s.parentNode.insertBefore(e, s);
                s.style.display = "none";
                t.htmlMediaElement = s = e
            }
            for (m = 0; m < u.length; m++) {
                if (s.canPlayType(u[m].type).replace(/no/, "") !== "" || s.canPlayType(u[m].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    t.method = "native";
                    t.url = u[m].url;
                    break
                }
            }
            if (t.method === "native") {
                if (t.url !== null) {
                    s.src = t.url
                }
                return t
            }
        }
        if (v.mode === "auto" || v.mode === "shim") {
            for (m = 0; m < u.length; m++) {
                q = u[m].type;
                for (h = 0; h < v.plugins.length; h++) {
                    o = v.plugins[h];
                    p = mejs.plugins[o];
                    for (g = 0; g < p.length; g++) {
                        r = p[g];
                        if (r.version == null || mejs.PluginDetector.hasPluginVersion(o, r.version)) {
                            for (f = 0; f < r.types.length; f++) {
                                if (q == r.types[f]) {
                                    t.method = o;
                                    t.url = u[m].url;
                                    return t
                                }
                            }
                        }
                    }
                }
            }
        }
        if (t.method === "" && u.length > 0) {
            t.url = u[0].url
        }
        return t
    },
    formatType: function (a, c) {
        var b;
        if (a && !c) {
            return this.getTypeFromFile(a)
        } else {
            if (c && ~c.indexOf(";")) {
                return c.substr(0, c.indexOf(";"))
            } else {
                return c
            }
        }
    },
    getTypeFromFile: function (a) {
        var b = a.substring(a.lastIndexOf(".") + 1);
        return (/(mp4|m4v|ogg|ogv|webm|flv|wmv|mpeg|mov)/gi.test(b) ? "video" : "audio") + "/" + b
    },
    createErrorMessage: function (c, b, g) {
        var d = c.htmlMediaElement,
            a = document.createElement("div");
        a.className = "me-cannotplay";
        try {
            a.style.width = d.width + "px";
            a.style.height = d.height + "px"
        } catch (f) {}
        a.innerHTML = (g !== "") ? '<a href="' + c.url + '"><img src="' + g + '" /></a>' : '<a href="' + c.url + '"><span>Download File</span></a>';
        d.parentNode.insertBefore(a, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function (b, q, m, f, l, n) {
        var k = b.htmlMediaElement,
            d = 1,
            o = 1,
            e = "me_" + b.method + "_" + (mejs.meIndex++),
            p = new mejs.PluginMediaElement(e, b.method, b.url),
            c = document.createElement("div"),
            j, g, a;
        g = k.parentNode;
        while (g !== null && g.tagName.toLowerCase() != "body") {
            if (g.parentNode.tagName.toLowerCase() == "p") {
                g.parentNode.parentNode.insertBefore(g, g.parentNode);
                break
            }
            g = g.parentNode
        }
        if (b.isVideo) {
            d = (q.videoWidth > 0) ? q.videoWidth : (k.getAttribute("width") !== null) ? k.getAttribute("width") : q.defaultVideoWidth;
            o = (q.videoHeight > 0) ? q.videoHeight : (k.getAttribute("height") !== null) ? k.getAttribute("height") : q.defaultVideoHeight;
            d = mejs.Utility.encodeUrl(d);
            o = mejs.Utility.encodeUrl(o)
        } else {
            if (q.enablePluginDebug) {
                d = 320;
                o = 240
            }
        }
        p.success = q.success;
        mejs.MediaPluginBridge.registerPluginElement(e, p, k);
        c.className = "me-plugin";
        c.id = e + "_container";
        if (b.isVideo) {
            k.parentNode.insertBefore(c, k)
        } else {
            document.body.insertBefore(c, document.body.childNodes[0])
        }
        a = ["id=" + e, "isvideo=" + ((b.isVideo) ? "true" : "false"), "autoplay=" + ((f) ? "true" : "false"), "preload=" + l, "width=" + d, "startvolume=" + q.startVolume, "timerrate=" + q.timerRate, "height=" + o];
        if (b.url !== null) {
            if (b.method == "flash") {
                a.push("file=" + mejs.Utility.encodeUrl(b.url))
            } else {
                a.push("file=" + b.url)
            }
        }
        if (q.enablePluginDebug) {
            a.push("debug=true")
        }
        if (q.enablePluginSmoothing) {
            a.push("smoothing=true")
        }
        if (n) {
            a.push("controls=true")
        }
        if (q.pluginVars) {
            a = a.concat(q.pluginVars)
        }
        switch (b.method) {
        case "silverlight":
            c.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + e + '" name="' + e + '" width="' + d + '" height="' + o + '"><param name="initParams" value="' + a.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + q.pluginPath + q.silverlightName + '" /></object>';
            break;
        case "flash":
            if (mejs.MediaFeatures.isIE) {
                j = document.createElement("div");
                c.appendChild(j);
                j.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e + '" width="' + d + '" height="' + o + '"><param name="movie" value="' + q.pluginPath + q.flashName + "?x=" + (new Date()) + '" /><param name="flashvars" value="' + a.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
            } else {
                c.innerHTML = '<embed id="' + e + '" name="' + e + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + q.pluginPath + q.flashName + '" flashvars="' + a.join("&") + '" width="' + d + '" height="' + o + '"></embed>'
            }
            break;
        case "youtube":
            var h = b.url.substr(b.url.lastIndexOf("=") + 1);
            youtubeSettings = {
                container: c,
                containerId: c.id,
                pluginMediaElement: p,
                pluginId: e,
                videoId: h,
                height: o,
                width: d
            };
            if (mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0])) {
                mejs.YouTubeApi.createFlash(youtubeSettings)
            } else {
                mejs.YouTubeApi.enqueueIframe(youtubeSettings)
            }
            break;
        case "vimeo":
            console.log("vimeoid");
            p.vimeoid = b.url.substr(b.url.lastIndexOf("/") + 1);
            c.innerHTML = '<object width="' + d + '" height="' + o + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="flashvars" value="api=1" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + p.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' + p.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + d + '" height="' + o + '"></embed></object>';
            break
        }
        k.style.display = "none";
        return p
    },
    updateNative: function (d, c, f, b) {
        var e = d.htmlMediaElement,
            a;
        for (a in mejs.HtmlMediaElement) {
            e[a] = mejs.HtmlMediaElement[a]
        }
        c.success(e, e);
        return e
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "http://www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function (a) {
        if (this.isLoaded) {
            this.createIframe(a)
        } else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function (c) {
        var b = c.pluginMediaElement,
            a = new YT.Player(c.containerId, {
                height: c.height,
                width: c.width,
                videoId: c.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function () {
                        c.pluginMediaElement.pluginApi = a;
                        mejs.MediaPluginBridge.initPlugin(c.pluginId);
                        setInterval(function () {
                            mejs.YouTubeApi.createEvent(a, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function (d) {
                        mejs.YouTubeApi.handleStateChange(d.data, a, b)
                    }
                }
            })
    },
    createEvent: function (d, c, b) {
        var e = {
            type: b,
            target: c
        };
        if (d && d.getDuration) {
            c.currentTime = e.currentTime = d.getCurrentTime();
            c.duration = e.duration = d.getDuration();
            e.paused = c.paused;
            e.ended = c.ended;
            e.muted = d.isMuted();
            e.volume = d.getVolume() / 100;
            e.bytesTotal = d.getVideoBytesTotal();
            e.bufferedBytes = d.getVideoBytesLoaded();
            var a = e.bufferedBytes / e.bytesTotal * e.duration;
            e.target.buffered = e.buffered = {
                start: function (f) {
                    return 0
                },
                end: function (f) {
                    return a
                },
                length: 1
            }
        }
        c.dispatchEvent(e.type, e)
    },
    iFrameReady: function () {
        this.isIframeLoaded = true;
        while (this.iframeQueue.length > 0) {
            var a = this.iframeQueue.pop();
            this.createIframe(a)
        }
    },
    flashPlayers: {},
    createFlash: function (c) {
        this.flashPlayers[c.pluginId] = c;
        var b, a = "http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + c.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            c.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + c.pluginId + '" width="' + c.width + '" height="' + c.height + '"><param name="movie" value="' + a + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else {
            c.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + c.pluginId + '" data="' + a + '" width="' + c.width + '" height="' + c.height + '" style="visibility: visible; "><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        }
    },
    flashReady: function (e) {
        var c = this.flashPlayers[e],
            b = document.getElementById(e),
            a = c.pluginMediaElement;
        a.pluginApi = a.pluginElement = b;
        mejs.MediaPluginBridge.initPlugin(e);
        b.cueVideoById(c.videoId);
        var d = c.containerId + "_callback";
        window[d] = function (f) {
            mejs.YouTubeApi.handleStateChange(f, b, a)
        };
        b.addEventListener("onStateChange", d);
        setInterval(function () {
            mejs.YouTubeApi.createEvent(b, a, "timeupdate")
        }, 250)
    },
    handleStateChange: function (c, b, a) {
        switch (c) {
        case -1:
            a.paused = true;
            a.ended = true;
            mejs.YouTubeApi.createEvent(b, a, "loadedmetadata");
            break;
        case 0:
            a.paused = false;
            a.ended = true;
            mejs.YouTubeApi.createEvent(b, a, "ended");
            break;
        case 1:
            a.paused = false;
            a.ended = false;
            mejs.YouTubeApi.createEvent(b, a, "play");
            mejs.YouTubeApi.createEvent(b, a, "playing");
            break;
        case 2:
            a.paused = true;
            a.ended = false;
            mejs.YouTubeApi.createEvent(b, a, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(b, a, "progress");
            break;
        case 5:
            break
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2011, John Dyer (http://j.hn/)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
if (typeof jQuery != "undefined") {
    mejs.$ = jQuery
} else {
    if (typeof ender != "undefined") {
        mejs.$ = ender
    }
}(function (a) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function (b, c) {
                if (c.paused || c.ended) {
                    c.play()
                } else {
                    c.pause()
                }
            }
        }, {
            keys: [38],
            action: function (b, d) {
                var c = Math.min(d.volume + 0.1, 1);
                d.setVolume(c)
            }
        }, {
            keys: [40],
            action: function (b, d) {
                var c = Math.max(d.volume - 0.1, 0);
                d.setVolume(c)
            }
        }, {
            keys: [37, 227],
            action: function (b, d) {
                if (!isNaN(d.duration) && d.duration > 0) {
                    if (b.isVideo) {
                        b.showControls();
                        b.startControlsTimer()
                    }
                    var c = Math.min(d.currentTime - (d.duration * 0.05), d.duration);
                    d.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function (b, d) {
                if (!isNaN(d.duration) && d.duration > 0) {
                    if (b.isVideo) {
                        b.showControls();
                        b.startControlsTimer()
                    }
                    var c = Math.max(d.currentTime + (d.duration * 0.05), 0);
                    d.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function (b, c) {
                if (typeof b.enterFullScreen != "undefined") {
                    if (b.isFullScreen) {
                        b.exitFullScreen()
                    } else {
                        b.enterFullScreen()
                    }
                }
            }
        }, {
            keys: [27],
            action: function (b, c) {
                b.pause()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = [];
    mejs.MediaElementPlayer = function (c, d) {
        if (!(this instanceof mejs.MediaElementPlayer)) {
            return new mejs.MediaElementPlayer(c, d)
        }
        var b = this;
        b.$media = b.$node = a(c);
        b.node = b.media = b.$media[0];
        if (typeof b.node.player != "undefined") {
            return b.node.player
        } else {
            b.node.player = b
        } if (typeof d == "undefined") {
            d = b.$node.data("mejsoptions")
        }
        b.options = a.extend({}, mejs.MepDefaults, d);
        mejs.players.push(b);
        b.init();
        return b
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function () {
            var d = this,
                e = mejs.MediaFeatures,
                g = a.extend(true, {}, d.options, {
                    success: function (j, h) {
                        d.meReady(j, h)
                    },
                    error: function (h) {
                        d.handleError(h)
                    }
                }),
                c = d.media.tagName.toLowerCase();
            d.isDynamic = (c !== "audio" && c !== "video");
            if (d.isDynamic) {
                d.isVideo = d.options.isVideo
            } else {
                d.isVideo = (c !== "audio" && d.options.isVideo)
            } if ((e.isiPad && d.options.iPadUseNativeControls) || (e.isiPhone && d.options.iPhoneUseNativeControls)) {
                d.$media.attr("controls", "controls");
                d.$media.removeAttr("poster");
                if (e.isiPad && d.media.getAttribute("autoplay") !== null) {
                    d.media.load();
                    d.media.play()
                }
            } else {
                if (e.isAndroid && d.AndroidUseNativeControls) {} else {
                    d.$media.removeAttr("controls");
                    d.id = "mep_" + mejs.mepIndex++;
                    d.container = a('<div id="' + d.id + '" class="mejs-container"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(d.$media[0].className).insertBefore(d.$media);
                    d.container.addClass((e.isAndroid ? "mejs-android " : "") + (e.isiOS ? "mejs-ios " : "") + (e.isiPad ? "mejs-ipad " : "") + (e.isiPhone ? "mejs-iphone " : "") + (d.isVideo ? "mejs-video " : "mejs-audio "));
                    if (e.isiOS) {
                        var f = d.$media.clone();
                        d.container.find(".mejs-mediaelement").append(f);
                        d.$media.remove();
                        d.$node = d.$media = f;
                        d.node = d.media = f[0]
                    } else {
                        d.container.find(".mejs-mediaelement").append(d.$media)
                    }
                    d.controls = d.container.find(".mejs-controls");
                    d.layers = d.container.find(".mejs-layers");
                    var b = c.substring(0, 1).toUpperCase() + c.substring(1);
                    if (d.options[c + "Width"] > 0 || d.options[c + "Width"].toString().indexOf("%") > -1) {
                        d.width = d.options[c + "Width"]
                    } else {
                        if (d.media.style.width !== "" && d.media.style.width !== null) {
                            d.width = d.media.style.width
                        } else {
                            if (d.media.getAttribute("width") !== null) {
                                d.width = d.$media.attr("width")
                            } else {
                                d.width = d.options["default" + b + "Width"]
                            }
                        }
                    } if (d.options[c + "Height"] > 0 || d.options[c + "Height"].toString().indexOf("%") > -1) {
                        d.height = d.options[c + "Height"]
                    } else {
                        if (d.media.style.height !== "" && d.media.style.height !== null) {
                            d.height = d.media.style.height
                        } else {
                            if (d.$media[0].getAttribute("height") !== null) {
                                d.height = d.$media.attr("height")
                            } else {
                                d.height = d.options["default" + b + "Height"]
                            }
                        }
                    }
                    d.setPlayerSize(d.width, d.height);
                    g.pluginWidth = d.height;
                    g.pluginHeight = d.width
                }
            }
            mejs.MediaElement(d.$media[0], g)
        },
        showControls: function (b) {
            var c = this;
            b = typeof b == "undefined" || b;
            if (c.controlsAreVisible) {
                return
            }
            if (b) {
                c.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                    c.controlsAreVisible = true
                });
                c.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                    c.controlsAreVisible = true
                })
            } else {
                c.controls.css("visibility", "visible").css("display", "block");
                c.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                c.controlsAreVisible = true
            }
            c.setControlsSize()
        },
        hideControls: function (b) {
            var c = this;
            b = typeof b == "undefined" || b;
            if (!c.controlsAreVisible) {
                return
            }
            if (b) {
                c.controls.stop(true, true).fadeOut(200, function () {
                    a(this).css("visibility", "hidden").css("display", "block");
                    c.controlsAreVisible = false
                });
                c.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                    a(this).css("visibility", "hidden").css("display", "block")
                })
            } else {
                c.controls.css("visibility", "hidden").css("display", "block");
                c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                c.controlsAreVisible = false
            }
        },
        controlsTimer: null,
        startControlsTimer: function (c) {
            var b = this;
            c = typeof c != "undefined" ? c : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function () {
                b.hideControls();
                b.killControlsTimer("hide")
            }, c)
        },
        killControlsTimer: function (c) {
            var b = this;
            if (b.controlsTimer !== null) {
                clearTimeout(b.controlsTimer);
                delete b.controlsTimer;
                b.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function () {
            var b = this;
            b.killControlsTimer();
            b.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function () {
            var b = this;
            b.showControls(false);
            b.controlsEnabled = true
        },
        meReady: function (d, g) {
            var l = this,
                k = mejs.MediaFeatures,
                h = g.getAttribute("autoplay"),
                f = !(typeof h == "undefined" || h === null || h === "false"),
                b, m;
            if (l.created) {
                return
            } else {
                l.created = true
            }
            l.media = d;
            l.domNode = g;
            if (!(k.isAndroid && l.options.AndroidUseNativeControls) && !(k.isiPad && l.options.iPadUseNativeControls) && !(k.isiPhone && l.options.iPhoneUseNativeControls)) {
                l.buildposter(l, l.controls, l.layers, l.media);
                l.buildkeyboard(l, l.controls, l.layers, l.media);
                l.buildoverlays(l, l.controls, l.layers, l.media);
                l.findTracks();
                for (b in l.options.features) {
                    m = l.options.features[b];
                    if (l["build" + m]) {
                        try {
                            l["build" + m](l, l.controls, l.layers, l.media)
                        } catch (j) {}
                    }
                }
                l.container.trigger("controlsready");
                l.setPlayerSize(l.width, l.height);
                l.setControlsSize();
                if (l.isVideo) {
                    if (mejs.MediaFeatures.hasTouch) {
                        l.$media.bind("touchstart", function () {
                            if (l.controlsAreVisible) {
                                l.hideControls(false)
                            } else {
                                if (l.controlsEnabled) {
                                    l.showControls(false)
                                }
                            }
                        })
                    } else {
                        var c = (l.media.pluginType == "native") ? l.$media : a(l.media.pluginElement);
                        c.click(function () {
                            if (d.paused) {
                                d.play()
                            } else {
                                d.pause()
                            }
                        });
                        l.container.bind("mouseenter mouseover", function () {
                            if (l.controlsEnabled) {
                                if (!l.options.alwaysShowControls) {
                                    l.killControlsTimer("enter");
                                    l.showControls();
                                    l.startControlsTimer(2500)
                                }
                            }
                        }).bind("mousemove", function () {
                            if (l.controlsEnabled) {
                                if (!l.controlsAreVisible) {
                                    l.showControls()
                                }
                                if (!l.options.alwaysShowControls) {
                                    l.startControlsTimer(2500)
                                }
                            }
                        }).bind("mouseleave", function () {
                            if (l.controlsEnabled) {
                                if (!l.media.paused && !l.options.alwaysShowControls) {
                                    l.startControlsTimer(1000)
                                }
                            }
                        })
                    } if (f && !l.options.alwaysShowControls) {
                        l.hideControls()
                    }
                    if (l.options.enableAutosize) {
                        l.media.addEventListener("loadedmetadata", function (n) {
                            if (l.options.videoHeight <= 0 && l.domNode.getAttribute("height") === null && !isNaN(n.target.videoHeight)) {
                                l.setPlayerSize(n.target.videoWidth, n.target.videoHeight);
                                l.setControlsSize();
                                l.media.setVideoSize(n.target.videoWidth, n.target.videoHeight)
                            }
                        }, false)
                    }
                }
                d.addEventListener("play", function () {
                    for (var n = 0, e = mejs.players.length; n < e; n++) {
                        var o = mejs.players[n];
                        if (o.id != l.id && l.options.pauseOtherPlayers && !o.paused && !o.ended) {
                            o.pause()
                        }
                        o.hasFocus = false
                    }
                    l.hasFocus = true
                }, false);
                l.media.addEventListener("ended", function (n) {
                    try {
                        l.media.setCurrentTime(0)
                    } catch (o) {}
                    l.media.pause();
                    if (l.setProgressRail) {
                        l.setProgressRail()
                    }
                    if (l.setCurrentRail) {
                        l.setCurrentRail()
                    }
                    if (l.options.loop) {
                        l.media.play()
                    } else {
                        if (!l.options.alwaysShowControls && l.controlsEnabled) {
                            l.showControls()
                        }
                    }
                }, false);
                l.media.addEventListener("loadedmetadata", function (n) {
                    if (l.updateDuration) {
                        l.updateDuration()
                    }
                    if (l.updateCurrent) {
                        l.updateCurrent()
                    }
                    if (!l.isFullScreen) {
                        l.setPlayerSize(l.width, l.height);
                        l.setControlsSize()
                    }
                }, false);
                setTimeout(function () {
                    l.setPlayerSize(l.width, l.height);
                    l.setControlsSize()
                }, 50);
                a(window).resize(function () {
                    if (!(l.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen))) {
                        l.setPlayerSize(l.width, l.height)
                    }
                    l.setControlsSize()
                });
                if (l.media.pluginType == "youtube") {
                    l.container.find(".mejs-overlay-play").hide()
                }
            }
            if (f && d.pluginType == "native") {
                d.load();
                d.play()
            }
            if (l.options.success) {
                if (typeof l.options.success == "string") {
                    window[l.options.success](l.media, l.domNode, l)
                } else {
                    l.options.success(l.media, l.domNode, l)
                }
            }
        },
        handleError: function (c) {
            var b = this;
            b.controls.hide();
            if (b.options.error) {
                b.options.error(c)
            }
        },
        setPlayerSize: function (g, b) {
            var e = this;
            if (e.height.toString().indexOf("%") > 0) {
                var h = (e.media.videoWidth && e.media.videoWidth > 0) ? e.media.videoWidth : e.options.defaultVideoWidth,
                    d = (e.media.videoHeight && e.media.videoHeight > 0) ? e.media.videoHeight : e.options.defaultVideoHeight,
                    f = e.container.parent().width(),
                    c = parseInt(f * d / h, 10);
                if (e.container.parent()[0].tagName.toLowerCase() === "body") {
                    f = a(window).width();
                    c = a(window).height()
                }
                e.container.width(f).height(c);
                e.$media.width("100%").height("100%");
                e.container.find("object, embed, iframe").width("100%").height("100%");
                if (e.media.setVideoSize) {
                    e.media.setVideoSize(f, c)
                }
                e.layers.children(".mejs-layer").width("100%").height("100%")
            } else {
                e.container.width(e.width).height(e.height);
                e.layers.children(".mejs-layer").width(e.width).height(e.height)
            }
        },
        setControlsSize: function () {
            var c = this,
                f = 0,
                h = 0,
                g = c.controls.find(".mejs-time-rail"),
                d = c.controls.find(".mejs-time-total"),
                e = c.controls.find(".mejs-time-current"),
                b = c.controls.find(".mejs-time-loaded");
            others = g.siblings();
            if (c.options && !c.options.autosizeProgress) {
                h = parseInt(g.css("width"))
            }
            if (h === 0 || !h) {
                others.each(function () {
                    if (a(this).css("position") != "absolute") {
                        f += a(this).outerWidth(true)
                    }
                });
                h = c.controls.width() - f - (g.outerWidth(true) - g.outerWidth(false))
            }
            g.width(h);
            d.width(h - (d.outerWidth(true) - d.width()));
            if (c.setProgressRail) {
                c.setProgressRail()
            }
            if (c.setCurrentRail) {
                c.setCurrentRail()
            }
        },
        buildposter: function (e, b, g, f) {
            var d = this,
                h = a('<div class="mejs-poster mejs-layer"></div>').appendTo(g),
                c = e.$media.attr("poster");
            if (e.options.poster !== "") {
                c = e.options.poster
            }
            if (c !== "" && c != null) {
                d.setPoster(c)
            } else {
                h.hide()
            }
            f.addEventListener("play", function () {
                h.hide()
            }, false)
        },
        setPoster: function (c) {
            var d = this,
                e = d.container.find(".mejs-poster"),
                b = e.find("img");
            if (b.length == 0) {
                b = a('<img width="100%" height="100%" />').appendTo(e)
            }
            b.attr("src", c)
        },
        buildoverlays: function (e, b, g, f) {
            if (!e.isVideo) {
                return
            }
            var h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(g),
                c = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(g),
                d = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(g).click(function () {
                    if (f.paused) {
                        f.play()
                    } else {
                        f.pause()
                    }
                });
            f.addEventListener("play", function () {
                d.hide();
                h.hide();
                c.hide()
            }, false);
            f.addEventListener("playing", function () {
                d.hide();
                h.hide();
                c.hide()
            }, false);
            f.addEventListener("pause", function () {
                if (!mejs.MediaFeatures.isiPhone) {
                    d.show()
                }
            }, false);
            f.addEventListener("waiting", function () {
                h.show()
            }, false);
            f.addEventListener("loadeddata", function () {
                h.show()
            }, false);
            f.addEventListener("canplay", function () {
                h.hide()
            }, false);
            f.addEventListener("error", function () {
                h.hide();
                c.show();
                c.find("mejs-overlay-error").html("Error loading this resource")
            }, false)
        },
        buildkeyboard: function (d, b, f, e) {
            var c = this;
            a(document).keydown(function (n) {
                if (d.hasFocus && d.options.enableKeyboard) {
                    for (var m = 0, g = d.options.keyActions.length; m < g; m++) {
                        var l = d.options.keyActions[m];
                        for (var h = 0, k = l.keys.length; h < k; h++) {
                            if (n.keyCode == l.keys[h]) {
                                n.preventDefault();
                                l.action(d, e);
                                return false
                            }
                        }
                    }
                }
                return true
            });
            a(document).click(function (g) {
                if (a(g.target).closest(".mejs-container").length == 0) {
                    d.hasFocus = false
                }
            })
        },
        findTracks: function () {
            var b = this,
                c = b.$media.find("track");
            b.tracks = [];
            c.each(function (e, d) {
                d = a(d);
                b.tracks.push({
                    srclang: d.attr("srclang").toLowerCase(),
                    src: d.attr("src"),
                    kind: d.attr("kind"),
                    label: d.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function (b) {
            this.container[0].className = "mejs-container " + b;
            this.setPlayerSize();
            this.setControlsSize()
        },
        play: function () {
            this.media.play()
        },
        pause: function () {
            this.media.pause()
        },
        load: function () {
            this.media.load()
        },
        setMuted: function (b) {
            this.media.setMuted(b)
        },
        setCurrentTime: function (b) {
            this.media.setCurrentTime(b)
        },
        getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (b) {
            this.media.setVolume(b)
        },
        getVolume: function () {
            return this.media.volume
        },
        setSrc: function (b) {
            this.media.setSrc(b)
        },
        remove: function () {
            var b = this;
            if (b.media.pluginType == "flash") {
                b.media.remove()
            } else {
                if (b.media.pluginTyp == "native") {
                    b.media.prop("controls", true)
                }
            } if (!b.isDynamic) {
                b.$node.insertBefore(b.container)
            }
            b.container.remove()
        }
    };
    if (typeof jQuery != "undefined") {
        jQuery.fn.mediaelementplayer = function (b) {
            return this.each(function () {
                new mejs.MediaElementPlayer(this, b)
            })
        }
    }
    a(document).ready(function () {
        a(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        playpauseText: "Play/Pause"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (d, b, g, f) {
            var c = this,
                e = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + c.id + '" title="' + c.options.playpauseText + '"></button></div>').appendTo(b).click(function (h) {
                    h.preventDefault();
                    if (f.paused) {
                        f.play()
                    } else {
                        f.pause()
                    }
                    return false
                });
            f.addEventListener("play", function () {
                e.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            f.addEventListener("playing", function () {
                e.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            f.addEventListener("pause", function () {
                e.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            f.addEventListener("paused", function () {
                e.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildstop: function (e, b, g, f) {
            var d = this,
                c = a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + d.id + '" title="' + d.options.stopText + "></button></div>").appendTo(b).click(function () {
                    if (!f.paused) {
                        f.pause()
                    }
                    if (f.currentTime > 0) {
                        f.setCurrentTime(0);
                        b.find(".mejs-time-current").width("0px");
                        b.find(".mejs-time-handle").css("left", "0px");
                        b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                        b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                        g.find(".mejs-poster").show()
                    }
                })
        }
    })
})(mejs.$);
(function (a) {
    a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (n, o, f, c) {
            a('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(o);
            var p = this,
                l = o.find(".mejs-time-total"),
                g = o.find(".mejs-time-loaded"),
                k = o.find(".mejs-time-current"),
                j = o.find(".mejs-time-handle"),
                m = o.find(".mejs-time-float"),
                b = o.find(".mejs-time-float-current"),
                e = function (u) {
                    var q = u.pageX,
                        v = l.offset(),
                        s = l.outerWidth(),
                        r = 0,
                        t = 0,
                        w = q - v.left;
                    if (q > v.left && q <= s + v.left && c.duration) {
                        r = ((q - v.left) / s);
                        t = (r <= 0.02) ? 0 : r * c.duration;
                        if (h) {
                            c.setCurrentTime(t)
                        }
                        if (!mejs.MediaFeatures.hasTouch) {
                            m.css("left", w);
                            b.html(mejs.Utility.secondsToTimeCode(t));
                            m.show()
                        }
                    }
                },
                h = false,
                d = false;
            l.bind("mousedown", function (q) {
                if (q.which === 1) {
                    h = true;
                    e(q);
                    return false
                }
            });
            o.find(".mejs-time-total").bind("mouseenter", function (q) {
                d = true;
                if (!mejs.MediaFeatures.hasTouch) {
                    m.show()
                }
            }).bind("mouseleave", function (q) {
                d = false;
                m.hide()
            });
            a(document).bind("mouseup", function (q) {
                h = false;
                m.hide()
            }).bind("mousemove", function (q) {
                if (h || d) {
                    e(q)
                }
            });
            c.addEventListener("progress", function (q) {
                n.setProgressRail(q);
                n.setCurrentRail(q)
            }, false);
            c.addEventListener("timeupdate", function (q) {
                n.setProgressRail(q);
                n.setCurrentRail(q)
            }, false);
            p.loaded = g;
            p.total = l;
            p.current = k;
            p.handle = j
        },
        setProgressRail: function (f) {
            var b = this,
                d = (f != undefined) ? f.target : b.media,
                c = null;
            if (d && d.buffered && d.buffered.length > 0 && d.buffered.end && d.duration) {
                c = d.buffered.end(0) / d.duration
            } else {
                if (d && d.bytesTotal != undefined && d.bytesTotal > 0 && d.bufferedBytes != undefined) {
                    c = d.bufferedBytes / d.bytesTotal
                } else {
                    if (f && f.lengthComputable && f.total != 0) {
                        c = f.loaded / f.total
                    }
                }
            } if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                if (b.loaded && b.total) {
                    b.loaded.width(b.total.width() * c)
                }
            }
        },
        setCurrentRail: function () {
            var b = this;
            if (b.media.currentTime != undefined && b.media.duration) {
                if (b.total && b.handle) {
                    var d = b.total.width() * b.media.currentTime / b.media.duration,
                        c = d - (b.handle.outerWidth(true) / 2);
                    b.current.width(d);
                    b.handle.css("left", c)
                }
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: " <span> | </span> "
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (d, b, f, e) {
            var c = this;
            a('<div class="mejs-time"><span class="mejs-currenttime">' + (d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            c.currenttime = c.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function () {
                d.updateCurrent()
            }, false)
        },
        buildduration: function (d, b, f, e) {
            var c = this;
            if (b.children().last().find(".mejs-currenttime").length > 0) {
                a(c.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (c.options.duration > 0 ? mejs.Utility.secondsToTimeCode(c.options.duration, c.options.alwaysShowHours || c.media.duration > 3600, c.options.showTimecodeFrameCount, c.options.framesPerSecond || 25) : ((d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00"))) + "</span>").appendTo(b.find(".mejs-time"))
            } else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (c.options.duration > 0 ? mejs.Utility.secondsToTimeCode(c.options.duration, c.options.alwaysShowHours || c.media.duration > 3600, c.options.showTimecodeFrameCount, c.options.framesPerSecond || 25) : ((d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00"))) + "</span></div>").appendTo(b)
            }
            c.durationD = c.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function () {
                d.updateDuration()
            }, false)
        },
        updateCurrent: function () {
            var b = this;
            if (b.currenttime) {
                b.currenttime.html(mejs.Utility.secondsToTimeCode(b.media.currentTime, b.options.alwaysShowHours || b.media.duration > 3600, b.options.showTimecodeFrameCount, b.options.framesPerSecond || 25))
            }
        },
        updateDuration: function () {
            var b = this;
            if (b.media.duration && b.durationD) {
                b.durationD.html(mejs.Utility.secondsToTimeCode(b.media.duration, b.options.alwaysShowHours, b.options.showTimecodeFrameCount, b.options.framesPerSecond || 25))
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        muteText: "Mute Toggle",
        hideVolumeOnTouchDevices: true
    });
    a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (m, n, j, d) {
            if (mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices) {
                return
            }
            var o = this,
                f = a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(n),
                p = f.find(".mejs-volume-slider"),
                b = f.find(".mejs-volume-total"),
                h = f.find(".mejs-volume-current"),
                g = f.find(".mejs-volume-handle"),
                l = function (t) {
                    if (!p.is(":visible")) {
                        p.show();
                        l(t);
                        p.hide();
                        return
                    }
                    var s = b.height(),
                        r = b.position(),
                        q = s - (s * t);
                    g.css("top", r.top + q - (g.height() / 2));
                    h.height(s - q);
                    h.css("top", r.top + q)
                },
                c = function (v) {
                    var s = b.height(),
                        r = b.offset(),
                        q = parseInt(b.css("top").replace(/px/, ""), 10),
                        u = v.pageY - r.top,
                        t = (s - u) / s;
                    if (r.top == 0 || r.left == 0) {
                        return
                    }
                    t = Math.max(0, t);
                    t = Math.min(t, 1);
                    if (u < 0) {
                        u = 0
                    } else {
                        if (u > s) {
                            u = s
                        }
                    }
                    g.css("top", u - (g.height() / 2) + q);
                    h.height(s - u);
                    h.css("top", u + q);
                    if (t == 0) {
                        d.setMuted(true);
                        f.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        d.setMuted(false);
                        f.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                    t = Math.max(0, t);
                    t = Math.min(t, 1);
                    d.setVolume(t)
                },
                k = false,
                e = false;
            f.hover(function () {
                p.show();
                e = true
            }, function () {
                e = false;
                if (!k) {
                    p.hide()
                }
            });
            p.bind("mouseover", function () {
                e = true
            }).bind("mousedown", function (q) {
                c(q);
                k = true;
                return false
            });
            a(document).bind("mouseup", function (q) {
                k = false;
                if (!e) {
                    p.hide()
                }
            }).bind("mousemove", function (q) {
                if (k) {
                    c(q)
                }
            });
            f.find("button").click(function () {
                d.setMuted(!d.muted)
            });
            d.addEventListener("volumechange", function (q) {
                if (!k) {
                    if (d.muted) {
                        l(0);
                        f.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        l(d.volume);
                        f.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                }
            }, false);
            l(m.options.startVolume);
            if (d.pluginType === "native") {
                d.setVolume(m.options.startVolume)
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function () {
            return ""
        },
        fullscreenText: "Fullscreen"
    });
    a.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function (p, q, l, g) {
            if (!p.isVideo) {
                return
            }
            p.isInIframe = (window.location != window.parent.location);
            if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                p.container.bind(mejs.MediaFeatures.fullScreenEventName, function (t) {
                    if (mejs.MediaFeatures.isFullScreen()) {
                        p.isNativeFullScreen = true;
                        p.setControlsSize()
                    } else {
                        p.isNativeFullScreen = false;
                        p.exitFullScreen()
                    }
                })
            }
            var s = this,
                m = 0,
                e = 0,
                b = p.container,
                h = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.fullscreenText + '"></button></div>').appendTo(q);
            if (s.media.pluginType === "native" || (!s.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)) {
                h.click(function () {
                    var t = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || p.isFullScreen;
                    if (t) {
                        p.exitFullScreen()
                    } else {
                        p.enterFullScreen()
                    }
                })
            } else {
                var k = null,
                    d = (document.documentElement.style.pointerEvents === "");
                if (d && !mejs.MediaFeatures.isOpera) {
                    var r = false,
                        f = function () {
                            if (r) {
                                n.hide();
                                j.hide();
                                c.hide();
                                h.css("pointer-events", "");
                                s.controls.css("pointer-events", "");
                                r = false
                            }
                        },
                        n = a('<div class="mejs-fullscreen-hover" />').appendTo(s.container).mouseover(f),
                        j = a('<div class="mejs-fullscreen-hover"  />').appendTo(s.container).mouseover(f),
                        c = a('<div class="mejs-fullscreen-hover"  />').appendTo(s.container).mouseover(f),
                        o = function () {
                            var u = {
                                position: "absolute",
                                top: 0,
                                left: 0
                            };
                            n.css(u);
                            j.css(u);
                            c.css(u);
                            n.width(s.container.width()).height(s.container.height() - s.controls.height());
                            var t = h.offset().left - s.container.offset().left;
                            fullScreenBtnWidth = h.outerWidth(true);
                            j.width(t).height(s.controls.height()).css({
                                top: s.container.height() - s.controls.height()
                            });
                            c.width(s.container.width() - t - fullScreenBtnWidth).height(s.controls.height()).css({
                                top: s.container.height() - s.controls.height(),
                                left: t + fullScreenBtnWidth
                            })
                        };
                    a(document).resize(function () {
                        o()
                    });
                    h.mouseover(function () {
                        if (!s.isFullScreen) {
                            var t = h.offset(),
                                u = p.container.offset();
                            g.positionFullscreenButton(t.left - u.left, t.top - u.top, false);
                            h.css("pointer-events", "none");
                            s.controls.css("pointer-events", "none");
                            n.show();
                            c.show();
                            j.show();
                            o();
                            r = true
                        }
                    });
                    g.addEventListener("fullscreenchange", function (t) {
                        f()
                    })
                } else {
                    h.mouseover(function () {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        var t = h.offset(),
                            u = p.container.offset();
                        g.positionFullscreenButton(t.left - u.left, t.top - u.top, true)
                    }).mouseout(function () {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function () {
                            g.hideFullscreenButton()
                        }, 1500)
                    })
                }
            }
            p.fullscreenBtn = h;
            a(document).bind("keydown", function (t) {
                if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || s.isFullScreen) && t.keyCode == 27) {
                    p.exitFullScreen()
                }
            })
        },
        enterFullScreen: function () {
            var c = this;
            if (c.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || c.options.usePluginFullScreen)) {
                return
            }
            docStyleOverflow = document.documentElement.style.overflow;
            document.documentElement.style.overflow = "hidden";
            normalHeight = c.container.height();
            normalWidth = c.container.width();
            if (c.media.pluginType === "native") {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    mejs.MediaFeatures.requestFullScreen(c.container[0]);
                    if (c.isInIframe) {
                        setTimeout(function d() {
                            if (c.isNativeFullScreen) {
                                if (a(window).width() !== screen.width) {
                                    c.exitFullScreen()
                                } else {
                                    setTimeout(d, 500)
                                }
                            }
                        }, 500)
                    }
                } else {
                    if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                        c.media.webkitEnterFullscreen();
                        return
                    }
                }
            }
            if (c.isInIframe) {
                var b = c.options.newWindowCallback(this);
                if (b !== "") {
                    if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        c.pause();
                        window.open(b, c.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return
                    } else {
                        setTimeout(function () {
                            if (!c.isNativeFullScreen) {
                                c.pause();
                                window.open(b, c.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                            }
                        }, 250)
                    }
                }
            }
            c.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
            setTimeout(function () {
                c.container.css({
                    width: "100%",
                    height: "100%"
                });
                c.setControlsSize()
            }, 500);
            if (c.pluginType === "native") {
                c.$media.width("100%").height("100%")
            } else {
                c.container.find("object, embed, iframe").width("100%").height("100%");
                c.media.setVideoSize(a(window).width(), a(window).height())
            }
            c.layers.children("div").width("100%").height("100%");
            if (c.fullscreenBtn) {
                c.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen")
            }
            c.setControlsSize();
            c.isFullScreen = true
        },
        exitFullScreen: function () {
            var b = this;
            if (b.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) {
                b.media.setFullscreen(false);
                return
            }
            if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen)) {
                mejs.MediaFeatures.cancelFullScreen()
            }
            document.documentElement.style.overflow = docStyleOverflow;
            b.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
            if (b.pluginType === "native") {
                b.$media.width(normalWidth).height(normalHeight)
            } else {
                b.container.find("object embed").width(normalWidth).height(normalHeight);
                b.media.setVideoSize(normalWidth, normalHeight)
            }
            b.layers.children("div").width(normalWidth).height(normalHeight);
            b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
            b.setControlsSize();
            b.isFullScreen = false
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: "Captions/Subtitles"
    });
    a.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function (f, b, h, g) {
            if (!f.isVideo) {
                return
            }
            if (f.tracks.length == 0) {
                return
            }
            var e = this,
                d, c = "";
            f.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(h).hide();
            f.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(h).hide();
            f.captionsText = f.captions.find(".mejs-captions-text");
            f.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + e.id + '" title="' + e.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + f.id + '_captions" id="' + f.id + '_captions_none" value="none" checked="checked" /><label for="' + f.id + '_captions_none">None</label></li></ul></div></div>').appendTo(b).hover(function () {
                a(this).find(".mejs-captions-selector").css("visibility", "visible")
            }, function () {
                a(this).find(".mejs-captions-selector").css("visibility", "hidden")
            }).delegate("input[type=radio]", "click", function () {
                lang = this.value;
                if (lang == "none") {
                    f.selectedTrack = null
                } else {
                    for (d = 0; d < f.tracks.length; d++) {
                        if (f.tracks[d].srclang == lang) {
                            f.selectedTrack = f.tracks[d];
                            f.captions.attr("lang", f.selectedTrack.srclang);
                            f.displayCaptions();
                            break
                        }
                    }
                }
            });
            if (!f.options.alwaysShowControls) {
                f.container.bind("mouseenter", function () {
                    f.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("mouseleave", function () {
                    if (!g.paused) {
                        f.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                    }
                })
            } else {
                f.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
            }
            f.trackToLoad = -1;
            f.selectedTrack = null;
            f.isLoadingTrack = false;
            for (d = 0; d < f.tracks.length; d++) {
                if (f.tracks[d].kind == "subtitles") {
                    f.addTrackButton(f.tracks[d].srclang, f.tracks[d].label)
                }
            }
            f.loadNextTrack();
            g.addEventListener("timeupdate", function (j) {
                f.displayCaptions()
            }, false);
            g.addEventListener("loadedmetadata", function (j) {
                f.displayChapters()
            }, false);
            f.container.hover(function () {
                if (f.hasChapters) {
                    f.chapters.css("visibility", "visible");
                    f.chapters.fadeIn(200)
                }
            }, function () {
                if (f.hasChapters && !g.paused) {
                    f.chapters.fadeOut(200, function () {
                        a(this).css("visibility", "hidden");
                        a(this).css("display", "block")
                    })
                }
            });
            if (f.node.getAttribute("autoplay") !== null) {
                f.chapters.css("visibility", "hidden")
            }
        },
        loadNextTrack: function () {
            var b = this;
            b.trackToLoad++;
            if (b.trackToLoad < b.tracks.length) {
                b.isLoadingTrack = true;
                b.loadTrack(b.trackToLoad)
            } else {
                b.isLoadingTrack = false
            }
        },
        loadTrack: function (c) {
            var d = this,
                b = d.tracks[c],
                e = function () {
                    b.isLoaded = true;
                    d.enableTrackButton(b.srclang, b.label);
                    d.loadNextTrack()
                };
            if (b.isTranslation) {
                mejs.TrackFormatParser.translateTrackText(d.tracks[0].entries, d.tracks[0].srclang, b.srclang, d.options.googleApiKey, function (f) {
                    b.entries = f;
                    e()
                })
            } else {
                a.ajax({
                    url: b.src,
                    success: function (f) {
                        b.entries = mejs.TrackFormatParser.parse(f);
                        e();
                        if (b.kind == "chapters" && d.media.duration > 0) {
                            d.drawChapters(b)
                        }
                    },
                    error: function () {
                        d.loadNextTrack()
                    }
                })
            }
        },
        enableTrackButton: function (d, b) {
            var c = this;
            if (b === "") {
                b = mejs.language.codes[d] || d
            }
            c.captionsButton.find("input[value=" + d + "]").prop("disabled", false).siblings("label").html(b);
            if (c.options.startLanguage == d) {
                a("#" + c.id + "_captions_" + d).click()
            }
            c.adjustLanguageBox()
        },
        addTrackButton: function (d, b) {
            var c = this;
            if (b === "") {
                b = mejs.language.codes[d] || d
            }
            c.captionsButton.find("ul").append(a('<li><input type="radio" name="' + c.id + '_captions" id="' + c.id + "_captions_" + d + '" value="' + d + '" disabled="disabled" /><label for="' + c.id + "_captions_" + d + '">' + b + " (loading)</label></li>"));
            c.adjustLanguageBox();
            c.container.find(".mejs-captions-translations option[value=" + d + "]").remove()
        },
        adjustLanguageBox: function () {
            var b = this;
            b.captionsButton.find(".mejs-captions-selector").height(b.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + b.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        displayCaptions: function () {
            if (typeof this.tracks == "undefined") {
                return
            }
            var d = this,
                c, b = d.selectedTrack;
            if (b != null && b.isLoaded) {
                for (c = 0; c < b.entries.times.length; c++) {
                    if (d.media.currentTime >= b.entries.times[c].start && d.media.currentTime <= b.entries.times[c].stop) {
                        d.captionsText.html(b.entries.text[c]);
                        d.captions.show();
                        return
                    }
                }
                d.captions.hide()
            } else {
                d.captions.hide()
            }
        },
        displayChapters: function () {
            var c = this,
                b;
            for (b = 0; b < c.tracks.length; b++) {
                if (c.tracks[b].kind == "chapters" && c.tracks[b].isLoaded) {
                    c.drawChapters(c.tracks[b]);
                    c.hasChapters = true;
                    break
                }
            }
        },
        drawChapters: function (f) {
            var c = this,
                b, d, e = 0,
                g = 0;
            c.chapters.empty();
            for (b = 0; b < f.entries.times.length; b++) {
                d = f.entries.times[b].stop - f.entries.times[b].start;
                e = Math.floor(d / c.media.duration * 100);
                if (e + g > 100 || b == f.entries.times.length - 1 && e + g < 100) {
                    e = 100 - g
                }
                c.chapters.append(a('<div class="mejs-chapter" rel="' + f.entries.times[b].start + '" style="left: ' + g.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + ((b == f.entries.times.length - 1) ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + f.entries.text[b] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(f.entries.times[b].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(f.entries.times[b].stop) + "</span></div></div>"));
                g += e
            }
            c.chapters.find("div.mejs-chapter").click(function () {
                c.media.setCurrentTime(parseFloat(a(this).attr("rel")));
                if (c.media.paused) {
                    c.media.play()
                }
            });
            c.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
        pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        split2: function (c, b) {
            return c.split(b)
        },
        parse: function (g) {
            var e = 0,
                d = this.split2(g, /\r?\n/),
                c = {
                    text: [],
                    times: []
                },
                b, f;
            for (; e < d.length; e++) {
                if (this.pattern_identifier.exec(d[e])) {
                    e++;
                    b = this.pattern_timecode.exec(d[e]);
                    if (b && e < d.length) {
                        e++;
                        f = d[e];
                        e++;
                        while (d[e] !== "" && e < d.length) {
                            f = f + "\n" + d[e];
                            e++
                        }
                        c.text.push(f);
                        c.times.push({
                            start: mejs.Utility.timeCodeToSeconds(b[1]),
                            stop: mejs.Utility.timeCodeToSeconds(b[3]),
                            settings: b[5]
                        })
                    }
                }
            }
            return c
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) {
        mejs.TrackFormatParser.split2 = function (f, d) {
            var e = [],
                b = "",
                c;
            for (c = 0; c < f.length; c++) {
                b += f.substring(c, c + 1);
                if (d.test(b)) {
                    e.push(b.replace(d, ""));
                    b = ""
                }
            }
            e.push(b);
            return e
        }
    }
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, contextMenuItems = [{
        render: function (b) {
            if (typeof b.enterFullScreen == "undefined") {
                return null
            }
            if (b.isFullScreen) {
                return "Turn off Fullscreen"
            } else {
                return "Go Fullscreen"
            }
        },
        click: function (b) {
            if (b.isFullScreen) {
                b.exitFullScreen()
            } else {
                b.enterFullScreen()
            }
        }
    }, {
        render: function (b) {
            if (b.media.muted) {
                return "Unmute"
            } else {
                return "Mute"
            }
        },
        click: function (b) {
            if (b.media.muted) {
                b.setMuted(false)
            } else {
                b.setMuted(true)
            }
        }
    }, {
        isSeparator: true
    }, {
        render: function (b) {
            return "Download Video"
        },
        click: function (b) {
            window.location.href = b.media.currentSrc
        }
    }]);
    a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (c, b, e, d) {
            c.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide();
            c.container.bind("contextmenu", function (f) {
                if (c.isContextMenuEnabled) {
                    f.preventDefault();
                    c.renderContextMenu(f.clientX - 1, f.clientY - 1);
                    return false
                }
            });
            c.container.bind("click", function () {
                c.contextMenu.hide()
            });
            c.contextMenu.bind("mouseleave", function () {
                c.startContextMenuTimer()
            })
        },
        isContextMenuEnabled: true,
        enableContextMenu: function () {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function () {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
            var b = this;
            b.killContextMenuTimer();
            b.contextMenuTimer = setTimeout(function () {
                b.hideContextMenu();
                b.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function () {
            var b = this.contextMenuTimer;
            if (b != null) {
                clearTimeout(b);
                delete b;
                b = null
            }
        },
        hideContextMenu: function () {
            this.contextMenu.hide()
        },
        renderContextMenu: function (b, j) {
            var g = this,
                f = "",
                d = g.options.contextMenuItems;
            for (var e = 0, c = d.length; e < c; e++) {
                if (d[e].isSeparator) {
                    f += '<div class="mejs-contextmenu-separator"></div>'
                } else {
                    var h = d[e].render(g);
                    if (h != null) {
                        f += '<div class="mejs-contextmenu-item" data-itemindex="' + e + '" id="element-' + (Math.random() * 1000000) + '">' + h + "</div>"
                    }
                }
            }
            g.contextMenu.empty().append(a(f)).css({
                top: j,
                left: b
            }).show();
            g.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var k = a(this),
                    l = parseInt(k.data("itemindex"), 10),
                    m = g.options.contextMenuItems[l];
                if (typeof m.show != "undefined") {
                    m.show(k, g)
                }
                k.click(function () {
                    if (typeof m.click != "undefined") {
                        m.click(g)
                    }
                    g.contextMenu.hide()
                })
            });
            setTimeout(function () {
                g.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);

// page
var openWindow;

openWindow = function (elm) {
    var service, url, win;
    service = $(elm).attr('id');
    url = $(elm).attr('href');
    win = "win_" + service;
    switch (service) {
    case "facebook":
        win = window.open(url, "", "height=383,width=626");
        if (win.focus) {
            return win.focus();
        }
        break;
    case "twitter":
        win = window.open(url, "", "height=450,width=550");
        if (win.focus) {
            return win.focus();
        }
        break;
    case "legallink":
        win = window.open(url, "", "height=450,width=550");
        if (win.focus) {
            return win.focus();
        }
        break;
    case "imprintlink":
        win = window.open(url, "", "height=450,width=550");
        if (win.focus) {
            return win.focus();
        }
    }
};

$("#twitter").click(function (event) {
    event.preventDefault();
    return openWindow(this);
});

$("#facebook").click(function (event) {
    event.preventDefault();
    return openWindow(this);
});

$("#imprintlink").click(function (event) {
    event.preventDefault();
    return openWindow(this);
});

$("#legallink").click(function (event) {
    event.preventDefault();
    return openWindow(this);
});

window.toggleFooter = function (hide) {
    var footer;
    footer = $("#footer");
    if (!hide) {
        return footer.stop().animate({
            height: 0,
            opacity: 0
        }, navSpeed, function () {
            return $(this).data("visible", false);
        });
    } else {
        if (!footer.data("visible")) {
            return footer.stop().animate({
                height: 70,
                opacity: 1
            }, {
                duration: navSpeed,
                queue: false,
                step: function () {
                    $(this).css("overflow", "visible");
                    return window.data;
                },
                complete: function () {
                    $(this).css("overflow", "visible");
                    return $(this).data("visible", true);
                }
            });
        }
    }
};

window.init_cleaning = function () {
    var cleaning, slides, slides_container;
    cleaning = $("#cleaning");
    slides_container = $("ol.horizontal", cleaning);
    slides = slides_container.find("> li");
    slides.width($(window).width());
    slides.eq(0).addClass("current");
    return slides_container.data("slides", slides.length);
};
window.init_all_cities = function () {
    var all_cities;
    all_cities = $("#all_cities");
    all_cities.find("section.divisions button").each(function () {
        return $(this).click(function (event) {
            event.stopPropagation();
            $("#select_city li[data-city-text='" + ($(this).data("city")) + "']").trigger("click");
            return selectPreviousTopic();
        });
    });
    return $("ol.cities li", all_cities).click(function (event) {
        var clickedItem;
        clickedItem = $(this).data("city");
        $(this).addClass("current").siblings().removeClass("current");
        $("section div." + clickedItem).addClass("current").siblings().removeClass("current");
        if (!is_ios) {
            all_cities.find("figure").css({
                opacity: 0
            });
            return all_cities.find("figure." + clickedItem).css({
                opacity: 1
            });
        }
    });
};

var cityTemplate, jobFeedUrl;

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,
    escape: /\{\{\{(.+?)\}\}\}/g
};

window.jobList = [];

cityTemplate = '<li data-city-text="{{ value }}">{{ value }}</li>';

window.init_all_jobs = function () {
    var $allJobs, emptyJob;
    $allJobs = $("#all_jobs");
    emptyJob = {
        brand: null,
        city: null,
        country: null,
        creationdate: null,
        description: null,
        jobtitle: null,
        referenceNumber: null,
        state: null,
        travelextent: null,
        url: null,
        postalcode: null
    };
    $allJobs.find("form").submit(function (event) {
        var $form;
        event.preventDefault();
        event.stopPropagation();
        $form = $(this);
        $allJobs.find(".error").hide();
        $allJobs.find(".no-results").hide();
        $allJobs.find("ol > li:not(.header)").remove();
        $allJobs.find(".cities > li:not(.first)").remove();
        return $.ajax({
            url: jobFeedUrl,
            type: "GET",
            dataType: "JSON",
            success: function (jobs_, textStatus, xhr) {
                var cities, jobs;
                $allJobs.find(".loading").hide();
                jobs = [];
                $allJobs.find(".submit").val("search");
                window.jobs = jobs_;
                cities = _.union(_.pluck(jobs_, "city")).sort();
                _.each(cities, function (city) {
                    var citiesCompiled;
                    citiesCompiled = _.template(cityTemplate, {
                        value: city
                    });
                    return $allJobs.find(".cities").append(citiesCompiled);
                });
                $.each(jobs_, function (jobIndex, job_) {
                    var compiled, job;
                    if (job_.jobTitle !== undefined) {
                        job_.jobtitle = job_.jobTitle;
                        delete job_.jobTitle;
                    }
                    if (job_.creationDate !== undefined) {
                        job_.creationdate = job_.creationDate;
                        delete job_.creationDate;
                    }
                    job = $.extend(emptyJob, job_);
                    compiled = _.template(singleJobTemplate, job);
                    return $allJobs.find(".job-list").append(compiled);
                });
                return $allJobs.trigger("initUX");
            },
            error: function (xhr, textStatus, errorThrown) {
                $allJobs.find(".submit").val("search");
                $allJobs.find(".loading").hide();
                return $allJobs.find(".error").show();
            }
        });
    }).trigger("submit");
    $allJobs.on("filter", function () {
        var city, keyword, reCity, reKeyword, reReference, reference;
        $allJobs.find(".job-list > li:not(.header)").hide();
        keyword = $("input.keyword").val();
        if (keyword === "Keyword (e.g. Apparal)") {
            keyword = "";
        }
        reKeyword = RegExp(keyword, "i");
        reference = $("input.reference").val();
        if (reference === "Reference No.") {
            reference = "";
        }
        reReference = RegExp(reference, "i");
        city = $("#select_city").attr("data-city-text");
        if (city === void 0) {
            city = "";
        }
        reCity = RegExp(city, "i");
        return $allJobs.find(".job-list > li").filter(function () {
            return reKeyword.test($(this).find("ul").attr("data-jobtitle")) && reCity.test($(this).find("ul").attr("data-city")) && reReference.test($(this).find("ul").attr("data-referencenumber"));
        }).show();
    });
    $allJobs.on("initUX", function () {
        var city;
        $allJobs.find(".job-list > li:odd").addClass("odd");
        if ($(".job-list > li").length > 10) {
            $("#all_jobs").height($(".job-list").height() + 600);
        }
        $("input.keyword").keyup(function (event) {
            return $allJobs.find("form").trigger("filter");
        });
        $("input.reference").keyup(function (event) {
            return $allJobs.find("form").trigger("filter");
        });
        $("#select_city").hover((function () {
            return $(this).find("div").css({
                height: $("#select_city li").length * 40
            });
        }), function () {
            return $(this).find("div").css({
                height: 0
            });
        });
        $("#select_city li").click(function (event) {
            $(this).parent().parent().parent().find("span").html($(this).html());
            $(this).parent().parent().css({
                height: 0
            });
            $(this).parent().parent().parent().attr("data-city-text", $(this).attr('data-city-text'));
            $allJobs.find("form").trigger("filter");
            if (window.location.hash !== ("#city=" + ($(this).html()))) {
                return window.location.hash = "city=" + ($(this).html());
            }
        });
        if (window.location.hash.indexOf("#city=") === 0) {
            city = window.location.hash.substring(3);
            if (city !== "All Cities") {
                $("#select_city li[data-city-text='" + city + "']").trigger("click");
            }
        }
        return $(".job-list li:not(.header) ul li").on("click", function (event) {
            var job;
            job = $(this).parent();
            return window.open(job.data("url"), "job_" + (job.data("id")));
        });
    });
    return this;
};

window.init_site_survey = function () {
    var site_survey, slides, slides_container;
    site_survey = $("#site_survey");
    slides_container = $("ol.horizontal", site_survey);
    slides = slides_container.find("> li");
    slides.width($(window).width());
    slides.eq(0).addClass("current");
    return slides_container.data("slides", slides.length);
};

window.init_ada_compliance = function () {
    var ada_compliance, init_slide, slides, slides_container;
    init_slide = function (slide) {
        var left, right;
        left = $(slide).find(".left");
        right = $(slide).find(".right");
        if (left.length > 0) {
            left.data('initial_left', left.position().left);
            if (Modernizr.csstransitions && Modernizr.csstransforms3d) {
                left.css({
                    left: "-" + left.innerWidth() + "px"
                });
                left.data('x', left.position().left);
            }
        }
        if (right.length > 0) {
            right.data('initial_right', right.position().left);
            if (Modernizr.csstransitions && Modernizr.csstransforms3d) {
                right.css({
                    right: 'auto',
                    left: right.innerWidth() + right.position().left
                });
            } else {
                right.css({
                    right: "-" + right.innerWidth() + "px"
                });
            }
            return right.data('x', right.position().left);
        }
    };
    ada_compliance = $("#ada_compliance");
    slides_container = $(".horizontal", ada_compliance);
    slides = slides_container.find("> li");
    slides_container.data("slides", slides.length);
    return slides.each(function (index) {
        if (index === 0) {
            $(this).addClass("current");
        }
        $(this).width($(window).width());
        return init_slide(this);
    });
};




window.handle_navigation = function () {
    var unloadFromIPad;
    $("#logo, #legal div,.right-logo").click(function (event) {
        event.stopPropagation();
        return $.scrollTo(0, scrollSpeed, {
            axis: "y",
            easing: easing
        });
    });
    topics.find("article > span.scrollDetectMiddle").bind("inview", function (event, isInView) {
        if (isInView) {
            return updateAppStateBasedOnTopic($(this).parent().parent());
        } else {
            return unloadFromIPad($(this).parent().parent());
        }
    });
    unloadFromIPad = function (topic) {
        return setTimeout(function () {
            return topic.find(".loaded").each(function () {
                return $(this).removeClass("loaded");
            });
        }, scrollSpeed + 50);
    };
    topics.eq(0).addClass("active");
    $nextTopicFooter.click(function () {
        return selectNextTopic();
    });
    $nextTopicText.html(topics.eq(0).data('next-name'));
    $sublineContent.html(topics.eq(0).data('subline'));
    topics.click(function (e) {
        return $.scrollTo(this, scrollSpeed, {
            axis: "y",
            easing: easing
        });
    });
	$prevTopicFooter.click(function () {
        return selectPreviousTopic();
    });
    $headerUl.find("li > div > a").each(function (index) {
        return $(this).bind(eventHandler, function (e) {
            e.preventDefault();
            $header.removeClass("hover");
            return $.scrollTo(topics.eq(index + 1), scrollSpeed, {
                axis: "y",
                easing: easing
            });
        });
    });
    $("#cleaning a.see_how_we_work_today").live("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        return selectNextSlide($("#cleaning"));
    });
    $("#cleaning a.open_positions").live("click", function (e) {
        e.preventDefault();
        return $.scrollTo($("#site_survey"), scrollSpeed, {
            axis: "y",
            easing: easing
        });
    });
    if (!is_ios) {
        return $header.hover((function () {
            return $(this).addClass("hover");
        }), function () {
            return $(this).removeClass("hover");
        });
    }
};

//app
var is_ie = navigator.userAgent.toLowerCase().indexOf("msie") > -1;
var is_ie8 = navigator.appVersion.indexOf("MSIE 8") > -1;
var scrollSpeed = 900;
var navSpeed = 300;
var currentTopicIndex = null;
var topicsSuper = null;
var topics = null;
var singleJobTemplate = '<li><ul id="{{ referenceNumber }}" data-id="{{ referenceNumber }}" data-brand="{{ brand }}" data-city="{{ city }}" data-country="{{ country }}" data-creationdate="{{ creationdate }}" data-description="{{{ description }}}" data-jobtitle="{{ jobtitle }}" data-referenceNumber="{{ referenceNumber }}" data-state="{{ state }}" data-travelextent="{{ travelextent }}" data-url="{{ url }}" data-postalcode="{{ postalcode }}"><li class="jobtitle">{{ jobtitle }}</li><li class="city">{{ city }}</li><li class="referencenumber">{{ referenceNumber }}</li><li class="creationdate">{{ creationdate }}</li></ul></li>';
var starredJobs = null;
var $header = null;
var $headerUl = null;
var $keys = null;
var $nextTopicFooter = null;
var $nextTopicText = null;
var $sublineContent = null;
var starredJobs;
var $navHeight = 62;
var applyStyle;
var getPosition;
var eventHandler = "click";
var easing = "elasout";
$(document).ready(function () {
    topicsSuper = $("#topics");
    topics = topicsSuper.find("> li");
    $header = $("#header");
    $headerUl = $("#header-ul");
    $keys = $("#keys");
    $nextTopicFooter = $("#nextTopic");
    $nextTopicText = $nextTopicFooter.find("> span");
    $sublineContent = $("#sublineContent");
    eventHandler = is_ios ? "touchstart" : "click";
    if ($.browser.msie && parseInt($.browser.version) < 9) {
        $headerUl.find("li:last-child").css("margin-right", 0)
    }

    function g() {
        var h = document.createElement("input");
        return ("placeholder" in h)
    }
    if (!g()) {
        $("[placeholder]").focus(function () {
            var h = $(this);
            if (h.val() == h.attr("placeholder")) {
                h.val("");
                h.removeClass("placeholder")
            }
        }).blur(function () {
            var h = $(this);
            if (h.val() == "" || h.val() == h.attr("placeholder")) {
                h.addClass("placeholder");
                h.val(h.attr("placeholder"))
            }
        }).blur()
    }
    $("div.play_me").each(function (h) {
        button = $(this);
        if (is_ie8) {
            player = $("#" + $(this).data("video-id"));
            player_id = player.attr("id");
            player_video = player.find("video")[0];
            $(player_video).attr("autoplay", "autoplay")
        }
        $(this).bind(eventHandler, function (i) {
            player = $("#" + $(this).data("video-id"));
            player_id = player.attr("id");
            player_video = player.find("video")[0];
            $(player_video).attr("preload", "auto");
            player.css({
                display: "block"
            });
            if (is_ie8) {
                $(player_video).attr("autoplay", "autoplay")
            }
            if (player_video.player === undefined) {
                player.find("div.close").click(function () {
                    player_video.player.pause()
                });
                player.find("video").mediaelementplayer({
                    iPadUseNativeControls: true,
                    alwaysShowControls: true,
                    features: ["playpause", "current", "progress", "duration", "volume"],
                    videoWidth: $(window).width(),
                    videoHeight: $(window).height(),
                    pluginPath: "js/",
                    flashName: "flashmediaelement.swf",
                    silverlightName: "silverlightmediaelement.xap",
                    pauseOtherPlayers: false,
                    success: function (j) {
                        if (is_ios || is_ie || is_ie8) {
                            player.css({
                                opacity: 1,
                                display: "block",
                                "z-index": 31000,
                                width: $(window).width() + "px",
                                height: $(window).height() + "px"
                            });
                            $(player_video).css({
                                width: $(window).width() + "px",
                                height: $(window).height() + "px"
                            })
                        } else {
                            player.css({
                                opacity: 1,
                                display: "block",
                                "z-index": 31000
                            })
                        }
                        j.addEventListener("canplay", function () {
                            if (j.pluginType == "flash") {
                                setTimeout(function () {
                                    j.play()
                                }, 500)
                            } else {
                                j.play()
                            }
                        });
                        j.addEventListener("pause", function () {
                            player.css({
                                opacity: 0
                            }).delay(1000).queue(function (k) {
                                player.css({
                                    display: "none"
                                });
                                $("#topics > li.active").click();
                                k()
                            })
                        });
                        j.addEventListener("play", function () {
                            player.css({
                                opacity: 1,
                                display: "block",
                                "z-index": 31000
                            })
                        })
                    }
                }).data("initialized", true)
            } else {
                player_video.player.play()
            }
        })
    });
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g,
        escape: /\{\{\{(.+?)\}\}\}/g
    };
    if (is_ios) {
        easing = "elasout";
        if (is_ipad) {
            $(topics).touchwipe({
                wipeUp: function () {
                    selectPreviousTopic(updateCurrentTopic())
                },
                wipeDown: function () {
                    selectNextTopic(updateCurrentTopic())
                },
                min_move_x: 20,
                min_move_y: 20,
                preventDefaultEvents: true
            })
        }
    } else {
        easing = "easeInOutQuad";
        $(window).scroll(function () {
            var j, k, i, h;
            if (is_ios) {
                return
            }
            k = $(document).height();
            i = $(window).height();
            h = $(window).scrollTop();
            j = h + $(window).height();
            if (h < 35) {
                $header.css({
                    "padding-top": -(h - $navHeight)
                })
            } else {
                $header.css({
                    "padding-top": 35
                })
            } if (h + (i * 1.5) >= k) {
                return toggleFooter()
            } else {
                return toggleFooter("show")
            }
        })
    }
    handle_navigation();
    init_ada_compliance();
    init_cleaning();
    init_all_cities();
    init_site_survey();
    init_all_jobs();
    var f = Modernizr.prefixed("transform");
    if (Modernizr.csstransforms3d) {
        getStyle = function (h) {
            var j = {};
            if (h.left != undefined) {
                var i = h.left
            } else {
                if (h.reset) {
                    var i = h.x
                } else {
                    if (h.direction == "left") {
                        var i = h.x + h.width
                    }
                    if (h.direction == "right") {
                        var i = -(h.x - h.width)
                    }
                }
            }
            j[f] = "translate3d(" + i + "px, 0, 0)";
            if (h.opacity !== undefined) {
                j.opacity = h.opacity
            }
            return j
        }
    }
    applyStyle = Modernizr.csstransitions && Modernizr.csstransforms3d ? "css" : "animate"
});
var updateAppStateBasedOnTopic = function (f) {
    topics.removeClass("active");
    $(f).addClass("active");
    $keys.removeClass().addClass($(f).data("keyboard"));
    $nextTopicText.html($(f).data("next-name"));
    $sublineContent.html($(f).data("subline"));
    updateCurrentTopic();
    _topic = f;
    if (currentTopicIndex == 0) {
        if (!is_ios) {
            $(document).unbind("keydown");
            $(document).keydown(function (g) {
                if (g.keyCode == 38 || g.keyCode == 33) {
                    g.preventDefault();
                    selectPreviousTopic();
                    return false
                }
                if (g.keyCode == 40 || g.keyCode == 34) {
                    g.preventDefault();
                    selectNextTopic();
                    return false
                }
            })
        }
    }
    if (currentTopicIndex == 1) {
        if (!is_ios) {
            $(document).unbind("keydown");
            $(document).keydown(function (g) {
                if (g.keyCode == 37) {
                    selectPrevSlide(_topic)
                }
                if (g.keyCode == 39) {
                    selectNextSlide(_topic)
                }
                if (g.keyCode == 38 || g.keyCode == 33) {
                    g.preventDefault();
                    selectPreviousTopic();
                    return false
                }
                if (g.keyCode == 40 || g.keyCode == 34) {
                    g.preventDefault();
                    selectNextTopic();
                    return false
                }
            })
        }
        if (_topic.data("binded") === undefined) {
            _topic.data("binded", true);
            horizontalTopics = $("ol.horizontal > li", _topic);
            circles = $("div.circles", _topic);
            _topic.find("div.arrow_left").click(function () {
                selectPrevSlide(_topic)
            });
            _topic.find("div.arrow_right").click(function () {
                selectNextSlide(_topic)
            });
            horizontalTopics.each(function (g) {
                if (g == 0) {
                    circles.append('<span class="' + (g + 1) + ' current"></span>');
                    $("div.copy h3", f).html($("figure.copy .title", this).html());
                    $("div.copy p", f).html($("figure.copy .copy", this).html())
                } else {
                    circles.append('<span class="' + (g + 1) + '"></span>')
                }
                wipeOptions = {};
                if (g + 1 < horizontalTopics.length) {
                    wipeOptions.wipeLeft = function () {
                        selectNextSlide(_topic)
                    }
                }
                if (g > 0) {
                    wipeOptions.wipeRight = function () {
                        selectPrevSlide(_topic)
                    }
                }
                $(this).touchwipe(wipeOptions);
                $(this).data("left", $(this).position().left)
            });
            right = $(".horizontal > li:first-child", _topic).find(".right");
            left = $(".horizontal > li:first-child", _topic).find(".left");
            currentLeftWidth = left.width();
            currentLeftX = left.data("x");
            currentRightWidth = right.width();
            currentRightX = right.data("x");
            if (right.length > 0) {
                if (applyStyle == "animate") {
                    right.animate({
                        right: 0,
                        opacity: 1
                    }, scrollSpeed)
                } else {
                    right[applyStyle](getStyle({
                        width: -currentRightWidth,
                        x: currentRightX,
                        opacity: 1,
                        direction: "right"
                    }))
                }
            }
            if (left.length > 0) {
                if (applyStyle == "animate") {
                    left.animate({
                        left: 0,
                        opacity: 1
                    }, scrollSpeed)
                } else {
                    left[applyStyle](getStyle({
                        width: currentLeftWidth,
                        x: currentLeftX,
                        opacity: 1,
                        direction: "left"
                    }))
                }
            }
        }
    }
    if (currentTopicIndex == 2) {
        if (!is_ios) {
            $(document).unbind("keydown");
            $(document).keydown(function (g) {
                if (g.keyCode == 37) {
                    selectPrevSlide(_topic)
                }
                if (g.keyCode == 39) {
                    selectNextSlide(_topic)
                }
                if (g.keyCode == 38 || g.keyCode == 33) {
                    g.preventDefault();
                    selectPreviousTopic();
                    return false
                }
                if (g.keyCode == 40 || g.keyCode == 34) {
                    g.preventDefault();
                    selectNextTopic();
                    return false
                }
            })
        }
        if (_topic.data("binded") === undefined) {
            _topic.data("binded", true);
            _topic.find("div.arrow_left").click(function () {
                selectPrevSlide(_topic)
            });
            _topic.find("div.arrow_right").click(function () {
                selectNextSlide(_topic)
            });
            horizontalTopics = $("ol.horizontal > li", _topic);
            horizontalTopics.each(function (g) {
                $(this).addClass("loaded");
                if (g == 0) {
                    $("h4", f).html($("figure.copy .year", this).html());
                    $("div.copy h3", f).html($("figure.copy .title", this).html());
                    $("div.copy p", f).html($("figure.copy .copy", this).html())
                }
                wipeOptions = {};
                if (g + 1 < horizontalTopics.length) {
                    wipeOptions.wipeLeft = function () {
                        selectNextSlide(_topic)
                    }
                }
                if (g > 0) {
                    wipeOptions.wipeRight = function () {
                        selectPrevSlide(_topic)
                    }
                }
                $(this).touchwipe(wipeOptions);
                $(this).data("left", $(this).position().left)
            })
        } else {
            horizontalTopics = $("ol.horizontal > li", _topic);
            horizontalTopics.each(function (g) {
                $(this).addClass("loaded")
            })
        }
    }
    if (currentTopicIndex == 5) {
        if (!is_ios) {
            a = new Image();
            a.src = "images/all_cities_01_herzo.jpg";
            b = new Image();
            b.src = "images/all_cities_02_canton.jpg";
            c = new Image();
            c.src = "images/all_cities_03_portland.jpg";
            d = new Image();
            d.src = "images/all_cities_04_shaghai.jpg";
            e = new Image();
            e.src = "images/all_cities_05_tokio.jpg"
        } else {
            $("figure.herzogenaurach", _topic).addClass("loaded")
        }
    }
    if (currentTopicIndex == 6) {
        if (!is_ios) {
            $(document).unbind("keydown");
            $(document).keydown(function (g) {
                if (g.keyCode == 37) {
                    selectPrevSlide(_topic)
                }
                if (g.keyCode == 39) {
                    selectNextSlide(_topic)
                }
                if (g.keyCode == 38 || g.keyCode == 33) {
                    g.preventDefault();
                    selectPreviousTopic();
                    return false
                }
                if (g.keyCode == 40 || g.keyCode == 34) {
                    g.preventDefault();
                    selectNextTopic();
                    return false
                }
            })
        } else {
            $("figure.background", _topic).addClass("loaded")
        } if (_topic.data("binded") === undefined) {
            _topic.data("binded", true);
            _topic.find("div.arrow_left").click(function () {
                selectPrevSlide(_topic)
            });
            _topic.find("div.arrow_right").click(function () {
                selectNextSlide(_topic)
            });
            horizontalTopics = $("ol.horizontal > li", _topic);
            horizontalTopics.each(function (g) {
                if (g == 0) {
                    $("h4", f).html($("figure.copy .year", this).html());
                    $("div.copy h3", f).html($("figure.copy .title", this).html());
                    $("div.copy p", f).html($("figure.copy .copy", this).html())
                }
                wipeOptions = {};
                if (g + 1 < horizontalTopics.length) {
                    wipeOptions.wipeLeft = function () {
                        selectNextSlide(_topic)
                    }
                }
                if (g > 0) {
                    wipeOptions.wipeRight = function () {
                        selectPrevSlide(_topic)
                    }
                }
                $(this).touchwipe(wipeOptions);
                $(this).data("left", $(this).position().left)
            })
        }
    }
    if (currentTopicIndex == 7) {
        legal_topic = $("#legal");
        legal_topic.find("div").css({
            opacity: 1
        });
        if (is_ios) {
            toggleFooter()
        }
    }
};
var updateCurrentTopic = function () {
    currentTopicIndex = $(".active").index("#topics > li")
};
var selectNextTopic = function (f) {
    $currentTopic = $(topicsSuper).find("> li.active");
	
/*************Blank Hide li conditions********************/
	$hideT = $currentTopic.next().text();;
	
//alert($hideT);
   if($hideT == ""){
	   $nextTopic = $currentTopic.next().next().next().next();
   }
   else{
    $nextTopic = $currentTopic.next();
   }
/*************End blank Hide li conditions********************/
  
    if ($nextTopic.length > 0) {
        $currentTopic.removeClass("active");
        $nextTopic.addClass("active");
        if (currentTopicIndex == 0) {
            $headerUl.find("li div span.tip").stop().animate({
                height: 0
            }, navSpeed)
        }
        $.scrollTo($nextTopic, scrollSpeed, {
            axis: "y",
            easing: easing
        });
        if (f && typeof (f) === "function") {
            f()
        }
    }
};
var selectPreviousTopic = function (f) {
    $currentTopic = $(topicsSuper).find("> li.active");
    $prevTopic = $currentTopic.prev();
    if ($prevTopic.length > 0) {
        $currentTopic.removeClass("active");
        $prevTopic.addClass("active");
        $.scrollTo($prevTopic, scrollSpeed, {
            axis: "y",
            easing: easing
        });
        if (f && typeof (f) === "function") {
            f()
        }
    }
};
var slideTopicHorizontal = function (g, f, j, i, h, k) {
    if (applyStyle == "animate") {
        slideTopicHorizontalNonCss(g, f, j, i, h, k);
        return
    }
    left = $("div.left", j);
    if (left.length > 0) {
        currentLeftWidth = left.width();
        currentLeftX = left.data("x")
    }
    right = $("div.right", j);
    if (right.length > 0) {
        currentRightWidth = right.width();
        currentRightX = right.data("x")
    }
    $(g).css({
        "fake-property": 0
    });
    if (right.length == 0 && left.length == 0) {
        $(g)[applyStyle](getStyle({
            left: -i.data("left"),
        })).animate({
            "fake-property": 10
        }, scrollSpeed, function () {
            left = $("div.left", i);
            if (left.length > 0) {
                $("div.left", i)[applyStyle](getStyle({
                    width: left.width(),
                    x: left.data("x"),
                    opacity: 1,
                    direction: "right"
                }))
            }
            right = $("div.right", i);
            if (right.length > 0) {
                right[applyStyle](getStyle({
                    width: -right.width(),
                    x: right.data("x"),
                    opacity: 1,
                    direction: "left"
                }))
            }
            if (k && typeof (k) === "function") {
                k.call(i, f)
            }
        })
    } else {
        if (right.length > 0) {
            right[applyStyle](getStyle({
                width: currentRightWidth,
                x: currentRightX,
                opacity: 0,
                direction: "right"
            }))
        }
        left[applyStyle](getStyle({
            width: -currentLeftWidth,
            x: currentLeftX,
            opacity: 0,
            direction: "left"
        })).animate({
            "fake-property": 10
        }, scrollSpeed, function () {
            $(g)[applyStyle](getStyle({
                left: -i.data("left"),
            })).animate({
                "fake-property": 10
            }, scrollSpeed, function () {
                left = $("div.left", i);
                left[applyStyle](getStyle({
                    width: $(".left", i).width(),
                    x: $("div.left", i).data("x"),
                    opacity: 1,
                    direction: "right"
                }));
                right = $("div.right", i);
                if (right.length > 0) {
                    right[applyStyle](getStyle({
                        width: -right.width(),
                        x: right.data("x"),
                        opacity: 1,
                        direction: "left"
                    }))
                }
                if (k && typeof (k) === "function") {
                    k.call(i, f)
                }
            })
        })
    }
};
var slideTopicHorizontalNonCss = function (g, f, j, i, h, k) {
    left = $("div.left", j);
    if (left.length > 0) {
        currentLeftWidth = left.width();
        currentLeftX = left.data("x")
    }
    right = $("div.right", j);
    if (right.length > 0) {
        currentRightWidth = right.width();
        currentRightX = right.data("x")
    }
    if (right.length == 0 && left.length == 0) {
        $(g).animate({
            left: -i.data("left")
        }, scrollSpeed, function () {
            $("div.right", i).animate({
                right: 0,
                opacity: 1
            }, scrollSpeed);
            $("div.left", i).animate({
                left: 0,
                opacity: 1
            }, scrollSpeed);
            if (k && typeof (k) === "function") {
                k.call(i, f)
            }
        })
    } else {
        if (right.length > 0) {
            right.animate({
                right: -currentRightWidth,
                opacity: 0
            }, scrollSpeed)
        }
        left.animate({
            left: -currentLeftWidth,
            opacity: 0
        }, scrollSpeed, function () {
            $(g).animate({
                left: -i.data("left")
            }, scrollSpeed, function () {
                rightNextSlide = $("div.right", i);
                if (rightNextSlide.length > 0) {
                    offsetRight = rightNextSlide.width();
                    rightNextSlide.animate({
                        right: 0,
                        opacity: 1
                    }, scrollSpeed)
                }
                leftNextSlide = $("div.left", i);
                offsetLeft = leftNextSlide.width();
                leftNextSlide.animate({
                    left: 0,
                    opacity: 1
                }, scrollSpeed);
                if (k && typeof (k) === "function") {
                    k.call(i, f)
                }
            })
        })
    }
    delete left, right
};
var selectNextSlide = function (f) {
    slider = $("ol.horizontal", f);
    slides = slider.data("slides");
    circles = $("div.circles", f);
    currentSlide = $("li.current", slider);
    nextSlide = currentSlide.next();
	$cl_active = $('#cleaning').attr('class');
	$cl_ID = $('#cleaning').attr('id');
	if($cl_active == 'active' && $cl_ID == 'cleaning'){
		$nslide = nextSlide.length > 1;
	}else{
		$nslide = nextSlide.length > 0;
	}
	
	
    if ($nslide) {
        $(".arrow_left", f).removeClass("inactive");
        currentSlide.removeClass("current");
        nextSlide.addClass("current");
        if (circles.length > 0) {
            $("span:eq(" + currentSlide.index() + ")", circles).removeClass("current");
            $("span:eq(" + nextSlide.index() + ")", circles).addClass("current")
        }
        if (f.attr("id") == "cleaning") {
            slideTopicHorizontal(slider, f, currentSlide, nextSlide, "left", function () {
                $("div.copy h3", f).html($("figure.copy .title", nextSlide).html());
                $("div.copy p", f).html($("figure.copy .copy", nextSlide).html());
                $("h4", f).html($("figure.copy .year", nextSlide).html());
                if (nextSlide.index() + 4 == slides) {
                    $("h2", f).html($("figure.copy .topicheadline", nextSlide).html())
                } else {
                    $("h2", f).html("all about")
                } if (nextSlide.index() == 8) {
                    $("div.copy", f).addClass("you")
                } else {
                    if (nextSlide.index() == 9) {
                        $("h2", f).fadeOut(navSpeed);
                        $("div.copy_wrapper", f).fadeOut(navSpeed);
                        $("div.copy", f).removeClass("you")
                    } else {
                        $("h2", f).fadeIn(navSpeed);
                        $("div.copy_wrapper", f).fadeIn(navSpeed);
                        $("div.copy", f).removeClass("you")
                    }
                }
            })
        }
        if (f.attr("id") == "site_survey") {
            if (currentSlide.hasClass("zero") && !is_ios) {
                //f.find("figure.background").addClass("scrolled");
				/*$('.horizontal li.current').each(function() {
					var fg = $(this).attr('class');
					var nc = fg.next().attr('class');
					alert(nc);
					//if(fg == 'three'){
						//f.find("figure.background").removeClass("scrolled");
						//alert("dfgdfgfdgfdg")
					//}
					
				})*/
				
				/*if(".horizontal li:eq(3).attr('class')" == 'three'){
					alert("fghghgh");
				}*/
				
            }
			//f.find("figure.background").removeClass("scrolled")
            slideTopicHorizontal(slider, f, currentSlide, nextSlide, "left", function () {})
        }
        if (f.attr("id") == "ada_compliance") {
            slideTopicHorizontal(slider, f, currentSlide, nextSlide, "left", function () {
                $("div.copy h3", f).html($("figure.copy .title", nextSlide).html());
                $("div.copy p", f).html($("figure.copy .copy", nextSlide).html())
            })
        }
        if (nextSlide.index() + 4 == slides) {
            $(".arrow_right", f).addClass("inactive")
        } else {
            $(".arrow_right", f).removeClass("inactive")
        }
    } else {
        currentSlide = $("li.current", slider);
        nextSlide = $("li:first-child", slider);
        $(".arrow_left", f).addClass("inactive");
        $(".arrow_right", f).removeClass("inactive");
        currentSlide.removeClass("current");
        nextSlide.addClass("current");
        if (circles.length > 0) {
            $("span:eq(" + currentSlide.index() + ")", circles).removeClass("current");
            $("span:eq(" + nextSlide.index() + ")", circles).addClass("current")
        }
        slideTopicHorizontal(slider, f, currentSlide, nextSlide, "left", function () {
            $("div.copy h3", f).html($("figure.copy .title", nextSlide).html());
            $("div.copy p", f).html($("figure.copy .copy", nextSlide).html());
            if (f.attr("id") == "cleaning") {
                $("h2", f).fadeIn(navSpeed);
                $("div.copy_wrapper", f).fadeIn(navSpeed);
                $("div.copy", f).removeClass("you")
            }
        })
    }
};
var selectPrevSlide = function (f) {
    slider = $("ol.horizontal", f);
    slides = slider.data("slides");
    circles = $("div.circles", f);
    currentSlide = $("li.current", slider);
    prevSlide = currentSlide.prev();
    if (prevSlide.length > 0) {
        currentSlide.removeClass("current");
        prevSlide.addClass("current");
        if (circles.length > 0) {
            $("span:eq(" + currentSlide.index() + ")", circles).removeClass("current");
            $("span:eq(" + prevSlide.index() + ")", circles).addClass("current")
        }
        if (f.attr("id") == "ada_compliance") {
            slideTopicHorizontal(slider, f, currentSlide, prevSlide, "left", function () {
                $("div.copy h3", f).html($("figure.copy .title", prevSlide).html());
                $("div.copy p", f).html($("figure.copy .copy", prevSlide).html())
            })
        }
        if (f.attr("id") == "cleaning") {
            slideTopicHorizontal(slider, f, currentSlide, prevSlide, "left", function () {
                $("div.copy h3", f).html($("figure.copy .title", prevSlide).html());
                $("div.copy p", f).html($("figure.copy .copy", prevSlide).html());
                $("h4", f).html($("figure.copy .year", prevSlide).html());
                if (prevSlide.index() == 8) {
                    $("h2", f).html($("figure.copy .topicheadline", prevSlide).html());
                    $("h2", f).fadeIn(navSpeed);
                    $("div.copy_wrapper", f).fadeIn(navSpeed);
                    $("div.copy", f).addClass("you")
                } else {
                    $("div.copy", f).removeClass("you")
                }
            });
            $("h2", f).html("all about")
        }
        if (f.attr("id") == "site_survey") {
			if (prevSlide.hasClass("zero")) {
                f.find("figure.background").removeClass("scrolled");
			}
			//alert('fghgfhgf');
			//if(prevSilde.hasClass("one")){
				/*$('.horizontal li').each(function() {
					var fg = $(this).attr('class');
					if(fg == 'one current'){
						f.find("figure.background").removeClass("scrolled");
					}
					
				})*/
			//}
			//$zro = $('.zero').attr('class');
//				alert($zro);
            //$('.horizontal li').each(function() {
//					var fg = $(li).attr('class');
//					alert(fg);
//					
//				})
				//$('.arrow_right').click(function(){
					// var txt = $('.horizontal li:eq(1)').text();
               // f.find("figure.background").removeClass("scrolled");
			   //alert("gfhfgh");
				//})
                //f.find("figure.background").removeClass("scrolled");
			
            slideTopicHorizontal(slider, f, currentSlide, prevSlide, "left", function () {})
        }
        if (prevSlide.index() <= 0) {
            $(".arrow_left", f).addClass("inactive")
        } else {
            $(".arrow_right", f).removeClass("inactive")
        }
    }
};



//$(document).ready(function(){
//	
//})