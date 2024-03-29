"use strict";
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
            }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
}
!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var r = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var r in e)
                    n.d(
                        i,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return i;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 1));
})([
    function (e, t, n) {
        (function (t) {
            var n;
            e.exports = (function e(t, i, r) {
                function o(s, u) {
                    if (!i[s]) {
                        if (!t[s]) {
                            if (!u && "function" == typeof n && n) return n(s, !0);
                            if (a) return a(s, !0);
                            var l = new Error("Cannot find module '" + s + "'");
                            throw ((l.code = "MODULE_NOT_FOUND"), l);
                        }
                        var c = (i[s] = { exports: {} });
                        t[s][0].call(
                            c.exports,
                            function (e) {
                                return o(t[s][1][e] || e);
                            },
                            c,
                            c.exports,
                            e,
                            t,
                            i,
                            r
                        );
                    }
                    return i[s].exports;
                }
                for (var a = "function" == typeof n && n, s = 0; s < r.length; s++) o(r[s]);
                return o;
            })(
                {
                    1: [
                        function (e, t) {
                            function n(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }
                            function i(e) {
                                return e && "object" === (void 0 === e ? "undefined" : ue(e)) && "default" in e ? e.default : e;
                            }
                            function r(e) {
                                return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + e + "</svg>";
                            }
                            function o(e, t, n) {
                                return (
                                    (function (e) {
                                        if (!e.focus)
                                            try {
                                                HTMLElement.prototype.focus.call(e);
                                            } catch (t) {
                                                ze(e);
                                            }
                                    })(t),
                                    n.activeElement === t
                                );
                            }
                            function a() {
                                Et.warn("trying to focus inert element", this);
                            }
                            function s(e, t) {
                                return (
                                    Ot ||
                                    (function (e) {
                                        At.some(function (t) {
                                            return !!e[t] && ((Ot = t), !0);
                                        });
                                    })(e),
                                    e[Ot](t)
                                );
                            }
                            function u(e) {
                                var t = e.webkitUserModify || "";
                                return Boolean(t && -1 !== t.indexOf("write"));
                            }
                            function l(e) {
                                return [e.getPropertyValue("overflow"), e.getPropertyValue("overflow-x"), e.getPropertyValue("overflow-y")].some(function (e) {
                                    return "auto" === e || "scroll" === e;
                                });
                            }
                            function c(e) {
                                return e.display.indexOf("flex") > -1;
                            }
                            function d(e, t, n, i) {
                                return !(("div" !== t && "span" !== t) || (n && "div" !== n && "span" !== n && !l(i)) || !(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth));
                            }
                            function f() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.context,
                                    n = e.except,
                                    i = void 0 === n ? { flexbox: !1, scrollable: !1, shadow: !1 } : n;
                                Lt || (Lt = lt());
                                var r = fe({ label: "is/focus-relevant", resolveDocument: !0, context: t });
                                if (!i.shadow && r.shadowRoot) return !0;
                                var o = r.nodeName.toLowerCase();
                                if ("input" === o && "hidden" === r.type) return !1;
                                if ("input" === o || "select" === o || "button" === o || "textarea" === o) return !0;
                                if ("legend" === o && Lt.focusRedirectLegend) return !0;
                                if ("label" === o) return !0;
                                if ("area" === o) return !0;
                                if ("a" === o && r.hasAttribute("href")) return !0;
                                if ("object" === o && r.hasAttribute("usemap")) return !1;
                                if ("object" === o) {
                                    var a = r.getAttribute("type");
                                    if (!Lt.focusObjectSvg && "image/svg+xml" === a) return !1;
                                    if (!Lt.focusObjectSwf && "application/x-shockwave-flash" === a) return !1;
                                }
                                if ("iframe" === o || "object" === o) return !0;
                                if ("embed" === o || "keygen" === o) return !0;
                                if (r.hasAttribute("contenteditable")) return !0;
                                if ("audio" === o && (Lt.focusAudioWithoutControls || r.hasAttribute("controls"))) return !0;
                                if ("video" === o && (Lt.focusVideoWithoutControls || r.hasAttribute("controls"))) return !0;
                                if (Lt.focusSummary && "summary" === o) return !0;
                                var f = mt(r);
                                if ("img" === o && r.hasAttribute("usemap")) return (f && Lt.focusImgUsemapTabindex) || Lt.focusRedirectImgUsemap;
                                if (Lt.focusTable && ("table" === o || "td" === o)) return !0;
                                if (Lt.focusFieldset && "fieldset" === o) return !0;
                                var m = "svg" === o,
                                    v = r.ownerSVGElement,
                                    b = r.getAttribute("focusable"),
                                    h = vt(r);
                                if ("use" === o && null !== h && !Lt.focusSvgUseTabindex) return !1;
                                if ("foreignobject" === o) return null !== h && Lt.focusSvgForeignobjectTabindex;
                                if (s(r, "svg a") && r.hasAttribute("xlink:href")) return !0;
                                if ((m || v) && r.focus && !Lt.focusSvgNegativeTabindexAttribute && 0 > h) return !1;
                                if (m) return f || Lt.focusSvg || Lt.focusSvgInIframe || Boolean(Lt.focusSvgFocusableAttribute && b && "true" === b);
                                if (v) {
                                    if (Lt.focusSvgTabindexAttribute && f) return !0;
                                    if (Lt.focusSvgFocusableAttribute) return "true" === b;
                                }
                                if (f) return !0;
                                var p = window.getComputedStyle(r, null);
                                if (u(p)) return !0;
                                if (
                                    Lt.focusImgIsmap &&
                                    "img" === o &&
                                    r.hasAttribute("ismap") &&
                                    Tt({ context: r }).some(function (e) {
                                        return "a" === e.nodeName.toLowerCase() && e.hasAttribute("href");
                                    })
                                )
                                    return !0;
                                if (!i.scrollable && Lt.focusScrollContainer)
                                    if (Lt.focusScrollContainerWithoutOverflow) {
                                        if (d(r, o)) return !0;
                                    } else if (l(p)) return !0;
                                if (!i.flexbox && Lt.focusFlexboxContainer && c(p)) return !0;
                                var g = r.parentElement;
                                if (!i.scrollable && g) {
                                    var y = g.nodeName.toLowerCase(),
                                        w = window.getComputedStyle(g, null);
                                    if (Lt.focusScrollBody && d(g, o, y, w)) return !0;
                                    if (Lt.focusChildrenOfFocusableFlexbox && c(w)) return !0;
                                }
                                return !1;
                            }
                            function m(e, t) {
                                if (e.findIndex) return e.findIndex(t);
                                var n = e.length;
                                if (0 === n) return -1;
                                for (var i = 0; n > i; i++) if (t(e[i], i, e)) return i;
                                return -1;
                            }
                            function v(e) {
                                var t = he(e);
                                if (!t.parent || t.parent === t) return null;
                                try {
                                    return (
                                        t.frameElement ||
                                        (function (e) {
                                            if ((_t || (_t = Nt("object, iframe")), void 0 !== e._frameElement)) return e._frameElement;
                                            e._frameElement = null;
                                            var t = e.parent.document.querySelectorAll(_t);
                                            return (
                                                [].some.call(t, function (t) {
                                                    return It(t) === e.document && ((e._frameElement = t), !0);
                                                }),
                                                e._frameElement
                                            );
                                        })(t)
                                    );
                                } catch (e) {
                                    return null;
                                }
                            }
                            function b(e, t) {
                                return window.getComputedStyle(e, null).getPropertyValue(t);
                            }
                            function h() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.context,
                                    n = e.except,
                                    i = void 0 === n ? { notRendered: !1, cssDisplay: !1, cssVisibility: !1, detailsElement: !1, browsingContext: !1 } : n,
                                    r = fe({ label: "is/visible", resolveDocument: !0, context: t }),
                                    o = r.nodeName.toLowerCase();
                                if (!i.notRendered && Bt.test(o)) return !0;
                                var a = Tt({ context: r }),
                                    s = "audio" === o && !r.hasAttribute("controls");
                                if (
                                    !i.cssDisplay &&
                                    (s ? a.slice(1) : a).some(function (e) {
                                        return "none" === b(e, "display");
                                    })
                                )
                                    return !1;
                                if (
                                    !i.cssVisibility &&
                                    (function (e) {
                                        var t = m(e, function (e) {
                                            var t = b(e, "visibility");
                                            return "hidden" === t || "collapse" === t;
                                        });
                                        if (-1 === t) return !1;
                                        var n = m(e, function (e) {
                                            return "visible" === b(e, "visibility");
                                        });
                                        return -1 === n || n > t;
                                    })(a)
                                )
                                    return !1;
                                if (
                                    !i.detailsElement &&
                                    (function (e) {
                                        var t = 1;
                                        return (
                                            "summary" === e[0].nodeName.toLowerCase() && (t = 2),
                                            e.slice(t).some(function (e) {
                                                return "details" === e.nodeName.toLowerCase() && !1 === e.open;
                                            })
                                        );
                                    })(a)
                                )
                                    return !1;
                                if (!i.browsingContext) {
                                    var u = v(r),
                                        l = h.except(i);
                                    if (u && !l(u)) return !1;
                                }
                                return !0;
                            }
                            function p(e, t) {
                                return t.querySelector('map[name="' + ce(e) + '"]') || null;
                            }
                            function g(e) {
                                var t = e.parentElement;
                                return (t.name && "map" === t.nodeName.toLowerCase() && ve(e).querySelector('img[usemap="#' + ce(t.name) + '"]')) || null;
                            }
                            function y(e) {
                                return "fieldset" === e.nodeName.toLowerCase() && e.disabled;
                            }
                            function w(e) {
                                return "form" === e.nodeName.toLowerCase() && e.disabled;
                            }
                            function x() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.context,
                                    n = e.except,
                                    i = void 0 === n ? { onlyFocusableBrowsingContext: !1, visible: !1 } : n,
                                    r = fe({ label: "is/only-tabbable", resolveDocument: !0, context: t });
                                if (!i.visible && !Pt(r)) return !1;
                                if (!i.onlyFocusableBrowsingContext && (pe.is.GECKO || pe.is.TRIDENT || pe.is.EDGE)) {
                                    var o = v(r);
                                    if (o && vt(o) < 0) return !1;
                                }
                                var a = r.nodeName.toLowerCase(),
                                    s = vt(r);
                                return "label" === a && pe.is.GECKO ? null !== s && s >= 0 : !!(pe.is.GECKO && r.ownerSVGElement && !r.focus && "a" === a && r.hasAttribute("xlink:href") && pe.is.GECKO);
                            }
                            function E() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.context,
                                    n = e.except,
                                    i = void 0 === n ? { disabled: !1, visible: !1, onlyTabbable: !1 } : n;
                                Wt || (Wt = lt());
                                var r = Rt.rules.except({ onlyFocusableBrowsingContext: !0, visible: i.visible }),
                                    o = fe({ label: "is/focusable", resolveDocument: !0, context: t });
                                if (
                                    !kt.rules({ context: o, except: i }) ||
                                    (function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        if ("embed" === t || "keygen" === t) return !0;
                                        var n = vt(e);
                                        if (e.shadowRoot && null === n) return !0;
                                        if ("label" === t) return !Wt.focusLabelTabindex || null === n;
                                        if ("legend" === t) return null === n;
                                        if (Wt.focusSvgFocusableAttribute && (e.ownerSVGElement || "svg" === t)) {
                                            var i = e.getAttribute("focusable");
                                            return i && "false" === i;
                                        }
                                        return "img" === t && e.hasAttribute("usemap") ? null === n || !Wt.focusImgUsemapTabindex : "area" === t && !Dt(e);
                                    })(o)
                                )
                                    return !1;
                                if (!i.disabled && Ht(o)) return !1;
                                if (!i.onlyTabbable && r(o)) return !1;
                                if (!i.visible) {
                                    var a = { context: o, except: {} };
                                    if ((Wt.focusInHiddenIframe && (a.except.browsingContext = !0), Wt.focusObjectSvgHidden)) "object" === o.nodeName.toLowerCase() && (a.except.cssVisibility = !0);
                                    if (!Pt.rules(a)) return !1;
                                }
                                var s = v(o);
                                if (s && !("object" !== s.nodeName.toLowerCase() || Wt.focusInZeroDimensionObject || (s.offsetWidth && s.offsetHeight))) return !1;
                                return !("svg" === o.nodeName.toLowerCase() && Wt.focusSvgInIframe && !s && null === o.getAttribute("tabindex"));
                            }
                            function S(e) {
                                var t = function (t) {
                                    return t.shadowRoot ? NodeFilter.FILTER_ACCEPT : e(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                                };
                                return (t.acceptNode = t), t;
                            }
                            function C() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.context,
                                    n = e.except,
                                    i = void 0 === n ? { flexbox: !1, scrollable: !1, shadow: !1, visible: !1, onlyTabbable: !1 } : n;
                                $t || ($t = lt());
                                var r = fe({ label: "is/tabbable", resolveDocument: !0, context: t });
                                if (pe.is.BLINK && pe.is.ANDROID && pe.majorVersion > 42) return !1;
                                var o = v(r);
                                if (o) {
                                    if (pe.is.WEBKIT && pe.is.IOS) return !1;
                                    if (vt(o) < 0) return !1;
                                    if (!i.visible && (pe.is.BLINK || pe.is.WEBKIT) && !Pt(o)) return !1;
                                    if ("object" === o.nodeName.toLowerCase()) {
                                        var a = ("Chrome" === pe.name && pe.majorVersion >= 54) || ("Opera" === pe.name && pe.majorVersion >= 41);
                                        if (pe.is.WEBKIT || (pe.is.BLINK && !a)) return !1;
                                    }
                                }
                                var f = r.nodeName.toLowerCase(),
                                    m = vt(r),
                                    b = null === m ? null : m >= 0;
                                if (pe.is.EDGE && pe.majorVersion >= 14 && o && r.ownerSVGElement && 0 > m) return !0;
                                var h = !1 !== b,
                                    p = null !== m && m >= 0;
                                if (r.hasAttribute("contenteditable")) return h;
                                if (Ut.test(f) && !0 !== b) return !1;
                                if (pe.is.WEBKIT && pe.is.IOS) {
                                    var y = ("input" === f && "text" === r.type) || "password" === r.type || "select" === f || "textarea" === f || r.hasAttribute("contenteditable");
                                    if (!y) y = u(window.getComputedStyle(r, null));
                                    if (!y) return !1;
                                }
                                if ("use" === f && null !== m && (pe.is.BLINK || (pe.is.WEBKIT && 9 === pe.majorVersion))) return !0;
                                if (s(r, "svg a") && r.hasAttribute("xlink:href")) {
                                    if (h) return !0;
                                    if (r.focus && !$t.focusSvgNegativeTabindexAttribute) return !0;
                                }
                                if ("svg" === f && $t.focusSvgInIframe && h) return !0;
                                if (pe.is.TRIDENT || pe.is.EDGE) {
                                    if ("svg" === f) return !!$t.focusSvg || r.hasAttribute("focusable") || p;
                                    if (r.ownerSVGElement) return !(!$t.focusSvgTabindexAttribute || !p) || r.hasAttribute("focusable");
                                }
                                if (void 0 === r.tabIndex) return Boolean(i.onlyTabbable);
                                if ("audio" === f) {
                                    if (!r.hasAttribute("controls")) return !1;
                                    if (pe.is.BLINK) return !0;
                                }
                                if ("video" === f)
                                    if (r.hasAttribute("controls")) {
                                        if (pe.is.BLINK || pe.is.GECKO) return !0;
                                    } else if (pe.is.TRIDENT || pe.is.EDGE) return !1;
                                if ("object" === f && (pe.is.BLINK || pe.is.WEBKIT)) return !1;
                                if ("iframe" === f) return !1;
                                if (!i.scrollable && pe.is.GECKO && l(window.getComputedStyle(r, null))) return h;
                                if (pe.is.TRIDENT || pe.is.EDGE) {
                                    if ("area" === f) {
                                        var w = g(r);
                                        if (w && vt(w) < 0) return !1;
                                    }
                                    var x = window.getComputedStyle(r, null);
                                    if (u(x)) return r.tabIndex >= 0;
                                    if (!i.flexbox && c(x)) return null !== m ? p : Xt(r) && zt(r);
                                    if (d(r, f)) return !1;
                                    var E = r.parentElement;
                                    if (E) {
                                        var S = E.nodeName.toLowerCase(),
                                            C = window.getComputedStyle(E, null);
                                        if (d(E, f, S, C)) return !1;
                                        if (c(C)) return p;
                                    }
                                }
                                return r.tabIndex >= 0;
                            }
                            function T(e, t) {
                                return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
                            }
                            function A(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t || "textarea" === t || "select" === t || "button" === t;
                            }
                            function O() { }
                            function L() {
                                if (document.activeElement) {
                                    if (document.activeElement !== ln) {
                                        var e = new sn("active-element", { bubbles: !1, cancelable: !1, detail: { focus: document.activeElement, blur: ln } });
                                        document.dispatchEvent(e), (ln = document.activeElement);
                                    }
                                } else document.body.focus();
                                !1 !== cn && (cn = requestAnimationFrame(L));
                            }
                            function k() {
                                this.context && (this.context.forEach(this.disengage), (this.context = null), (this.engage = null), (this.disengage = null));
                            }
                            function I() { }
                            function M() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.parent,
                                    n = e.element,
                                    i = e.includeSelf;
                                if (t)
                                    return function (e) {
                                        return Boolean((i && e === t) || t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY);
                                    };
                                if (n)
                                    return function (e) {
                                        return Boolean((i && n === e) || e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY);
                                    };
                                throw new TypeError("util/compare-position#getParentComparator required either options.parent or options.element");
                            }
                            function N() {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context,
                                    t = fe({ label: "query/shadow-hosts", resolveDocument: !0, defaultToDocument: !0, context: e }),
                                    n = ve(e).createTreeWalker(t, NodeFilter.SHOW_ELEMENT, Nn, !1),
                                    i = [];
                                for (t.shadowRoot && (i.push(t), (i = i.concat(N({ context: t.shadowRoot })))); n.nextNode();) i.push(n.currentNode), (i = i.concat(N({ context: n.currentNode.shadowRoot })));
                                return i;
                            }
                            function _(e) {
                                return Ct(e, !1);
                            }
                            function B(e) {
                                wt({ element: e, attribute: "aria-hidden", temporaryValue: "true" });
                            }
                            function P(e) {
                                wt({ element: e, attribute: "aria-hidden" });
                            }
                            function F(e, t) {
                                return Kn.tabsequenceAreaAtImgPosition && (e = Wn(e, t)), Gn(e);
                            }
                            function D(e, t) {
                                return !ti.some(function (n) {
                                    return "boolean" == typeof e[n] && Boolean(t[n]) !== e[n];
                                });
                            }
                            function j() {
                                (oi = 0), (ai = 0);
                            }
                            function H(e) {
                                !1 !== e.isPrimary && oi++;
                            }
                            function R(e) {
                                return !1 !== e.isPrimary
                                    ? e.touches
                                        ? void (oi = e.touches.length)
                                        : void (window.setImmediate || window.setTimeout)(function () {
                                            oi = Math.max(oi - 1, 0);
                                        })
                                    : void 0;
                            }
                            function W(e) {
                                switch (e.keyCode || e.which) {
                                    case 16:
                                    case 17:
                                    case 18:
                                    case 91:
                                    case 93:
                                        return;
                                }
                                ai++;
                            }
                            function q(e) {
                                switch (e.keyCode || e.which) {
                                    case 16:
                                    case 17:
                                    case 18:
                                    case 91:
                                    case 93:
                                        return;
                                }
                                (window.setImmediate || window.setTimeout)(function () {
                                    ai = Math.max(ai - 1, 0);
                                });
                            }
                            function G() {
                                return { pointer: Boolean(oi), key: Boolean(ai) };
                            }
                            function K(e) {
                                return e.hasAttribute("autofocus");
                            }
                            function V(e) {
                                return e.tabIndex <= 0;
                            }
                            function Z(e, t, n) {
                                var i = (function (e) {
                                    var t = (e.getAttribute && e.getAttribute("class")) || "";
                                    return "" === t ? [] : t.split(" ");
                                })(e),
                                    r = i.indexOf(t),
                                    o = -1 !== r,
                                    a = void 0 !== n ? n : !o;
                                a !== o && (a || i.splice(r, 1), a && i.push(t), e.setAttribute("class", i.join(" ")));
                            }
                            function $(e, t) {
                                return Z(e, t, !1);
                            }
                            function U(e, t) {
                                return Z(e, t, !0);
                            }
                            function X(e) {
                                var t = "";
                                if (e.type === mi || "shadow-focus" === e.type) {
                                    var n = bi.get();
                                    t = gi || (n.pointer && "pointer") || (n.key && "key") || "script";
                                } else "initial" === e.type && (t = "initial");
                                document.documentElement.setAttribute("data-focus-source", t), e.type !== vi && (yi[t] || U(document.documentElement, "focus-source-" + t), (yi[t] = !0), (pi = t));
                            }
                            function z() {
                                return pi;
                            }
                            function J(e) {
                                return yi[e];
                            }
                            function Q(e) {
                                gi = e;
                            }
                            function Y() {
                                gi = !1;
                            }
                            function ee(e) {
                                var t = e || vn();
                                xi.cssShadowPiercingDeepCombinator || (t = t.slice(-1));
                                var n = [].slice.call(document.querySelectorAll(Ai), 0),
                                    i = t
                                        .map(function (e) {
                                            return Tt({ context: e });
                                        })
                                        .reduce(function (e, t) {
                                            return t.concat(e);
                                        }, []);
                                n.forEach(function (e) {
                                    -1 === i.indexOf(e) && $(e, Ti);
                                }),
                                    i.forEach(function (e) {
                                        -1 === n.indexOf(e) && U(e, Ti);
                                    });
                            }
                            function te() {
                                Oi = (window.setImmediate || window.setTimeout)(function () {
                                    ee();
                                });
                            }
                            function ne() {
                                (window.clearImmediate || window.clearTimeout)(Oi), ee();
                            }
                            function ie(e) {
                                ee(e.detail.elements);
                            }
                            function re(e, t) {
                                var n = Math.max(e.top, t.top),
                                    i = Math.max(e.left, t.left),
                                    r = Math.max(Math.min(e.right, t.right), i),
                                    o = Math.max(Math.min(e.bottom, t.bottom), n);
                                return { top: n, right: r, bottom: o, left: i, width: r - i, height: o - n };
                            }
                            function oe(e) {
                                var t = e.getBoundingClientRect(),
                                    n = e.offsetWidth - e.clientWidth,
                                    i = e.offsetHeight - e.clientHeight,
                                    r = { top: t.top, left: t.left, right: t.right - n, bottom: t.bottom - i, width: t.width - n, height: t.height - i, area: 0 };
                                return (r.area = r.width * r.height), r;
                            }
                            function ae(e) {
                                return (
                                    !!(function (e) {
                                        var t = window.getComputedStyle(e, null),
                                            n = "visible";
                                        return t.getPropertyValue("overflow-x") !== n && t.getPropertyValue("overflow-y") !== n;
                                    })(e) &&
                                    (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth)
                                );
                            }
                            var se = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                                    }
                                }
                                return function (t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t;
                                };
                            })(),
                                ue =
                                    "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
                                        ? function (e) {
                                            return _typeof(e);
                                        }
                                        : function (e) {
                                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
                                        },
                                le = i(e("platform")),
                                ce = i(e("css.escape")),
                                de = function (e) {
                                    if (!e) return [];
                                    if (Array.isArray(e)) return e;
                                    if (void 0 !== e.nodeType) return [e];
                                    if (("string" == typeof e && (e = document.querySelectorAll(e)), void 0 !== e.length)) return [].slice.call(e, 0);
                                    throw new TypeError("unexpected input " + String(e));
                                },
                                fe = function (e) {
                                    var t = e.context,
                                        n = e.label,
                                        i = void 0 === n ? "context-to-element" : n,
                                        r = e.resolveDocument,
                                        o = e.defaultToDocument,
                                        a = de(t)[0];
                                    if ((r && a && a.nodeType === Node.DOCUMENT_NODE && (a = a.documentElement), !a && o)) return document.documentElement;
                                    if (!a) throw new TypeError(i + " requires valid options.context");
                                    if (a.nodeType !== Node.ELEMENT_NODE && a.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) throw new TypeError(i + " requires options.context to be an Element");
                                    return a;
                                },
                                me = function () {
                                    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context, t = fe({ label: "get/shadow-host", context: e }), n = null; t;) (n = t), (t = t.parentNode);
                                    return n.nodeType === n.DOCUMENT_FRAGMENT_NODE && n.host ? n.host : null;
                                },
                                ve = function (e) {
                                    return e ? (e.nodeType === Node.DOCUMENT_NODE ? e : e.ownerDocument || document) : document;
                                },
                                be = function (e) {
                                    var t = fe({ label: "is/active-element", resolveDocument: !0, context: e });
                                    if (ve(t).activeElement === t) return !0;
                                    var n = me({ context: t });
                                    return !(!n || n.shadowRoot.activeElement !== t);
                                },
                                he = function (e) {
                                    return ve(e).defaultView || window;
                                },
                                pe = JSON.parse(JSON.stringify(le)),
                                ge = pe.os.family || "",
                                ye = "Android" === ge,
                                we = "Windows" === ge.slice(0, 7),
                                xe = "OS X" === ge,
                                Ee = "iOS" === ge,
                                Se = "Blink" === pe.layout,
                                Ce = "Gecko" === pe.layout,
                                Te = "Trident" === pe.layout,
                                Ae = "EdgeHTML" === pe.layout,
                                Oe = "WebKit" === pe.layout,
                                Le = parseFloat(pe.version),
                                ke = Math.floor(Le);
                            (pe.majorVersion = ke), (pe.is = { ANDROID: ye, WINDOWS: we, OSX: xe, IOS: Ee, BLINK: Se, GECKO: Ce, TRIDENT: Te, EDGE: Ae, WEBKIT: Oe, IE9: Te && 9 === ke, IE10: Te && 10 === ke, IE11: Te && 11 === ke });
                            var Ie = "1.4.1",
                                Me = ("undefined" != typeof window && window.navigator.userAgent) || "",
                                Ne = "ally-supports-cache",
                                _e = (function (e) {
                                    var t = void 0;
                                    try {
                                        t = (t = window.localStorage && window.localStorage.getItem("ally-supports-cache")) ? JSON.parse(t) : {};
                                    } catch (e) {
                                        t = {};
                                    }
                                    return t;
                                })();
                            (_e.userAgent !== Me || _e.version !== Ie) && (_e = {}), (_e.userAgent = Me), (_e.version = Ie);
                            var Be = function () {
                                return _e;
                            },
                                Pe = function (e) {
                                    Object.keys(e).forEach(function (t) {
                                        _e[t] = e[t];
                                    }),
                                        (_e.time = new Date().toISOString()),
                                        (function (e, t) {
                                            if (document.hasFocus())
                                                try {
                                                    window.localStorage && window.localStorage.setItem(e, JSON.stringify(t));
                                                } catch (e) { }
                                            else
                                                try {
                                                    window.localStorage && window.localStorage.removeItem(e);
                                                } catch (e) { }
                                        })(Ne, _e);
                                },
                                Fe = function () {
                                    var e = void 0;
                                    try {
                                        document.querySelector("html >>> :first-child"), (e = ">>>");
                                    } catch (t) {
                                        try {
                                            document.querySelector("html /deep/ :first-child"), (e = "/deep/");
                                        } catch (t) {
                                            e = "";
                                        }
                                    }
                                    return e;
                                },
                                De = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                je = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (
                                            (e.innerHTML = '<map name="image-map-tabindex-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + De + '">'),
                                            e.querySelector("area")
                                        );
                                    },
                                },
                                He = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (
                                            (e.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" alt="" src="' + De + '">'), !1
                                        );
                                    },
                                    validate: function (e, t, n) {
                                        if (pe.is.GECKO) return !0;
                                        var i = e.querySelector("area");
                                        return i.focus(), n.activeElement === i;
                                    },
                                },
                                Re = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (e.innerHTML = '<map name="image-map-area-href-test"><area shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-area-href-test" alt="" src="' + De + '">'), e.querySelector("area");
                                    },
                                    validate: function (e, t, n) {
                                        return !!pe.is.GECKO || n.activeElement === t;
                                    },
                                },
                                We = {
                                    name: "can-focus-audio-without-controls",
                                    element: "audio",
                                    mutate: function (e) {
                                        try {
                                            e.setAttribute("src", De);
                                        } catch (e) { }
                                    },
                                },
                                qe = {
                                    element: "a",
                                    mutate: function (e) {
                                        return (e.href = "#void"), (e.innerHTML = '<img ismap src="' + De + '" alt="">'), e.querySelector("img");
                                    },
                                },
                                Ge = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (
                                            (e.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + De + '">'),
                                            e.querySelector("img")
                                        );
                                    },
                                },
                                Ke = !pe.is.WEBKIT,
                                Ve =
                                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJzdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==",
                                Ze = {
                                    element: "object",
                                    mutate: function (e) {
                                        e.setAttribute("type", "image/svg+xml"), e.setAttribute("data", Ve), e.setAttribute("width", "200"), e.setAttribute("height", "50"), (e.style.visibility = "hidden");
                                    },
                                },
                                $e = {
                                    name: "can-focus-object-svg",
                                    element: "object",
                                    mutate: function (e) {
                                        e.setAttribute("type", "image/svg+xml"), e.setAttribute("data", Ve), e.setAttribute("width", "200"), e.setAttribute("height", "50");
                                    },
                                    validate: function (e, t, n) {
                                        return !!pe.is.GECKO || n.activeElement === e;
                                    },
                                },
                                Ue = !pe.is.IE9,
                                Xe = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (
                                            (e.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#focus-redirect-img-usemap" alt="" src="' + De + '">'),
                                            e.querySelector("img")
                                        );
                                    },
                                    validate: function (e, t, n) {
                                        var i = e.querySelector("area");
                                        return n.activeElement === i;
                                    },
                                },
                                ze = function (e) {
                                    if (!(e.ownerSVGElement || "svg" === e.nodeName.toLowerCase())) return !1;
                                    var t = (function () {
                                        var e = document.createElement("div");
                                        return (e.innerHTML = '<svg><foreignObject width="30" height="30">\n      <input type="text"/>\n  </foreignObject></svg>'), e.firstChild.firstChild;
                                    })();
                                    e.appendChild(t);
                                    var n = t.querySelector("input");
                                    return n.focus(), (n.disabled = !0), e.removeChild(t), !0;
                                },
                                Je = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (e.innerHTML = r('<text focusable="true">a</text>')), e.querySelector("text");
                                    },
                                    validate: o,
                                },
                                Qe = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (e.innerHTML = r('<text tabindex="0">a</text>')), e.querySelector("text");
                                    },
                                    validate: o,
                                },
                                Ye = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (e.innerHTML = r('<text tabindex="-1">a</text>')), e.querySelector("text");
                                    },
                                    validate: o,
                                },
                                et = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (
                                            (e.innerHTML = r(['<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>', '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'].join(""))), e.querySelector("use")
                                        );
                                    },
                                    validate: o,
                                },
                                tt = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (e.innerHTML = r('<foreignObject tabindex="-1"><input type="text" /></foreignObject>')), e.querySelector("foreignObject") || e.getElementsByTagName("foreignObject")[0];
                                    },
                                    validate: o,
                                },
                                nt = Boolean(pe.is.GECKO && "undefined" != typeof SVGElement && SVGElement.prototype.focus),
                                it = {
                                    element: "div",
                                    mutate: function (e) {
                                        return (e.innerHTML = r("")), e.firstChild;
                                    },
                                    validate: o,
                                },
                                rt = {
                                    element: "video",
                                    mutate: function (e) {
                                        try {
                                            e.setAttribute("src", De);
                                        } catch (e) { }
                                    },
                                },
                                ot = pe.is.GECKO || pe.is.TRIDENT || pe.is.EDGE,
                                at = {
                                    cssShadowPiercingDeepCombinator: Fe,
                                    focusInZeroDimensionObject: function () {
                                        return Ke;
                                    },
                                    focusObjectSwf: function () {
                                        return Ue;
                                    },
                                    focusSvgInIframe: function () {
                                        return nt;
                                    },
                                    tabsequenceAreaAtImgPosition: function () {
                                        return ot;
                                    },
                                },
                                st = {
                                    focusAreaImgTabindex: je,
                                    focusAreaTabindex: He,
                                    focusAreaWithoutHref: Re,
                                    focusAudioWithoutControls: We,
                                    focusBrokenImageMap: {
                                        element: "div",
                                        mutate: function (e) {
                                            return (
                                                (e.innerHTML =
                                                    '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map><img usemap="#broken-image-map-test" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ">'),
                                                e.querySelector("area")
                                            );
                                        },
                                    },
                                    focusChildrenOfFocusableFlexbox: {
                                        element: "div",
                                        mutate: function (e) {
                                            return (
                                                e.setAttribute("tabindex", "-1"),
                                                e.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;"),
                                                (e.innerHTML = '<span style="display: block;">hello</span>'),
                                                e.querySelector("span")
                                            );
                                        },
                                    },
                                    focusFieldsetDisabled: {
                                        element: "fieldset",
                                        mutate: function (e) {
                                            e.setAttribute("tabindex", 0), e.setAttribute("disabled", "disabled");
                                        },
                                    },
                                    focusFieldset: {
                                        element: "fieldset",
                                        mutate: function (e) {
                                            e.innerHTML = "<legend>legend</legend><p>content</p>";
                                        },
                                    },
                                    focusFlexboxContainer: {
                                        element: "span",
                                        mutate: function (e) {
                                            e.setAttribute("style", "display: -webkit-flex; display: -ms-flexbox; display: flex;"), (e.innerHTML = '<span style="display: block;">hello</span>');
                                        },
                                    },
                                    focusFormDisabled: {
                                        element: "form",
                                        mutate: function (e) {
                                            e.setAttribute("tabindex", 0), e.setAttribute("disabled", "disabled");
                                        },
                                    },
                                    focusImgIsmap: qe,
                                    focusImgUsemapTabindex: Ge,
                                    focusInHiddenIframe: {
                                        element: function (e, t) {
                                            var n = t.createElement("iframe");
                                            e.appendChild(n);
                                            var i = n.contentWindow.document;
                                            return i.open(), i.close(), n;
                                        },
                                        mutate: function (e) {
                                            e.style.visibility = "hidden";
                                            var t = e.contentWindow.document,
                                                n = t.createElement("input");
                                            return t.body.appendChild(n), n;
                                        },
                                        validate: function (e) {
                                            var t = e.contentWindow.document,
                                                n = t.querySelector("input");
                                            return t.activeElement === n;
                                        },
                                    },
                                    focusInvalidTabindex: {
                                        element: "div",
                                        mutate: function (e) {
                                            e.setAttribute("tabindex", "invalid-value");
                                        },
                                    },
                                    focusLabelTabindex: {
                                        element: "label",
                                        mutate: function (e) {
                                            e.setAttribute("tabindex", "-1");
                                        },
                                        validate: function (e, t, n) {
                                            return e.offsetHeight, e.focus(), n.activeElement === e;
                                        },
                                    },
                                    focusObjectSvg: $e,
                                    focusObjectSvgHidden: Ze,
                                    focusRedirectImgUsemap: Xe,
                                    focusRedirectLegend: {
                                        element: "fieldset",
                                        mutate: function (e) {
                                            return (e.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">'), !1;
                                        },
                                        validate: function (e, t, n) {
                                            var i = e.querySelector('input[tabindex="-1"]'),
                                                r = e.querySelector('input[tabindex="0"]');
                                            return e.focus(), e.querySelector("legend").focus(), (n.activeElement === i ? "focusable" : n.activeElement === r && "tabbable") || "";
                                        },
                                    },
                                    focusScrollBody: {
                                        element: "div",
                                        mutate: function (e) {
                                            return e.setAttribute("style", "width: 100px; height: 50px; overflow: auto;"), (e.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>'), e.querySelector("div");
                                        },
                                    },
                                    focusScrollContainerWithoutOverflow: {
                                        element: "div",
                                        mutate: function (e) {
                                            e.setAttribute("style", "width: 100px; height: 50px;"), (e.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>');
                                        },
                                    },
                                    focusScrollContainer: {
                                        element: "div",
                                        mutate: function (e) {
                                            e.setAttribute("style", "width: 100px; height: 50px; overflow: auto;"), (e.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>');
                                        },
                                    },
                                    focusSummary: {
                                        element: "details",
                                        mutate: function (e) {
                                            return (e.innerHTML = "<summary>foo</summary><p>content</p>"), e.firstElementChild;
                                        },
                                    },
                                    focusSvgFocusableAttribute: Je,
                                    focusSvgTabindexAttribute: Qe,
                                    focusSvgNegativeTabindexAttribute: Ye,
                                    focusSvgUseTabindex: et,
                                    focusSvgForeignobjectTabindex: tt,
                                    focusSvg: it,
                                    focusTabindexTrailingCharacters: {
                                        element: "div",
                                        mutate: function (e) {
                                            e.setAttribute("tabindex", "3x");
                                        },
                                    },
                                    focusTable: {
                                        element: "table",
                                        mutate: function (e, t, n) {
                                            var i = n.createDocumentFragment();
                                            (i.innerHTML = "<tr><td>cell</td></tr>"), e.appendChild(i);
                                        },
                                    },
                                    focusVideoWithoutControls: rt,
                                },
                                ut = null,
                                lt = function () {
                                    return (
                                        ut ||
                                        ((ut = Be()).time ||
                                            (Pe(
                                                ((e = (function (e) {
                                                    var t = (function () {
                                                        var e = {
                                                            activeElement: document.activeElement,
                                                            windowScrollTop: window.scrollTop,
                                                            windowScrollLeft: window.scrollLeft,
                                                            bodyScrollTop: document.body.scrollTop,
                                                            bodyScrollLeft: document.body.scrollLeft,
                                                        },
                                                            t = document.createElement("iframe");
                                                        t.setAttribute("style", "position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;"),
                                                            t.setAttribute("aria-live", "off"),
                                                            t.setAttribute("aria-busy", "true"),
                                                            t.setAttribute("aria-hidden", "true"),
                                                            document.body.appendChild(t);
                                                        var n = t.contentWindow,
                                                            i = n.document;
                                                        i.open(), i.close();
                                                        var r = i.createElement("div");
                                                        return i.body.appendChild(r), (e.iframe = t), (e.wrapper = r), (e.window = n), (e.document = i), e;
                                                    })(),
                                                        n = {};
                                                    return (
                                                        Object.keys(e).map(function (i) {
                                                            n[i] = (function (e, t) {
                                                                e.wrapper.innerHTML = "";
                                                                var n = "string" == typeof t.element ? e.document.createElement(t.element) : t.element(e.wrapper, e.document),
                                                                    i = t.mutate && t.mutate(n, e.wrapper, e.document);
                                                                return (
                                                                    i || !1 === i || (i = n), !n.parentNode && e.wrapper.appendChild(n), i && i.focus && i.focus(), t.validate ? t.validate(n, i, e.document) : e.document.activeElement === i
                                                                );
                                                            })(t, e[i]);
                                                        }),
                                                        (function (e) {
                                                            e.activeElement === document.body
                                                                ? (document.activeElement && document.activeElement.blur && document.activeElement.blur(), pe.is.IE10 && document.body.focus())
                                                                : e.activeElement && e.activeElement.focus && e.activeElement.focus(),
                                                                document.body.removeChild(e.iframe),
                                                                (window.scrollTop = e.windowScrollTop),
                                                                (window.scrollLeft = e.windowScrollLeft),
                                                                (document.body.scrollTop = e.bodyScrollTop),
                                                                (document.body.scrollLeft = e.bodyScrollLeft);
                                                        })(t),
                                                        n
                                                    );
                                                })(st)),
                                                    Object.keys(at).forEach(function (t) {
                                                        e[t] = at[t]();
                                                    }),
                                                    e)
                                            ),
                                                (ut = Be())),
                                            ut)
                                    );
                                    var e;
                                },
                                ct = void 0,
                                dt = /^\s*(-|\+)?[0-9]+\s*$/,
                                ft = /^\s*(-|\+)?[0-9]+.*$/,
                                mt = function (e) {
                                    ct || (ct = lt());
                                    var t = ct.focusTabindexTrailingCharacters ? ft : dt,
                                        n = fe({ label: "is/valid-tabindex", resolveDocument: !0, context: e }),
                                        i = n.hasAttribute("tabindex"),
                                        r = n.hasAttribute("tabIndex");
                                    if (!i && !r) return !1;
                                    if ((n.ownerSVGElement || "svg" === n.nodeName.toLowerCase()) && !ct.focusSvgTabindexAttribute) return !1;
                                    if (ct.focusInvalidTabindex) return !0;
                                    var o = n.getAttribute(i ? "tabindex" : "tabIndex");
                                    return "-32768" !== o && Boolean(o && t.test(o));
                                },
                                vt = function (e) {
                                    if (!mt(e)) return null;
                                    var t = e.hasAttribute("tabindex") ? "tabindex" : "tabIndex",
                                        n = parseInt(e.getAttribute(t), 10);
                                    return isNaN(n) ? -1 : n;
                                },
                                bt = void 0,
                                ht = void 0,
                                pt = { input: !0, select: !0, textarea: !0, button: !0, fieldset: !0, form: !0 },
                                gt = function (e) {
                                    bt || ((bt = lt()).focusFieldsetDisabled && delete pt.fieldset, bt.focusFormDisabled && delete pt.form, (ht = new RegExp("^(" + Object.keys(pt).join("|") + ")$")));
                                    var t = fe({ label: "is/native-disabled-supported", context: e }).nodeName.toLowerCase();
                                    return Boolean(ht.test(t));
                                },
                                yt = function (e) {
                                    var t = e.element,
                                        n = e.attribute,
                                        i = "data-cached-" + n;
                                    if (null === t.getAttribute(i)) {
                                        var r = t.getAttribute(n);
                                        if (null === r) return;
                                        t.setAttribute(i, r || ""), t.removeAttribute(n);
                                    } else {
                                        var o = t.getAttribute(i);
                                        t.removeAttribute(i), t.setAttribute(n, o);
                                    }
                                },
                                wt = function (e) {
                                    var t = e.element,
                                        n = e.attribute,
                                        i = e.temporaryValue,
                                        r = e.saveValue,
                                        o = "data-cached-" + n;
                                    if (void 0 !== i) {
                                        var a = r || t.getAttribute(n);
                                        t.setAttribute(o, a || ""), t.setAttribute(n, i);
                                    } else {
                                        var s = t.getAttribute(o);
                                        t.removeAttribute(o), "" === s ? t.removeAttribute(n) : t.setAttribute(n, s);
                                    }
                                },
                                xt = function () { },
                                Et = "undefined" != typeof console ? console : { log: xt, debug: xt, info: xt, warn: xt, error: xt },
                                St = void 0,
                                Ct = function (e, t) {
                                    St || (St = lt());
                                    var n = fe({ label: "element/disabled", context: e });
                                    t = Boolean(t);
                                    var i = n.hasAttribute("data-ally-disabled"),
                                        r = 1 === arguments.length;
                                    return gt(n)
                                        ? r
                                            ? n.disabled
                                            : ((n.disabled = t), n)
                                        : r
                                            ? i
                                            : i === t
                                                ? n
                                                : ((function (e, t) {
                                                    (function (e, t) {
                                                        wt({ element: e, attribute: "aria-disabled", temporaryValue: t ? "true" : void 0 });
                                                    })(e, t),
                                                        (function (e, t) {
                                                            if (t) {
                                                                var n = vt(e);
                                                                wt({ element: e, attribute: "tabindex", temporaryValue: "-1", saveValue: null !== n ? n : "" });
                                                            } else wt({ element: e, attribute: "tabindex" });
                                                        })(e, t),
                                                        (function (e, t) {
                                                            t ? (e.focus = a) : delete e.focus;
                                                        })(e, t),
                                                        (function (e, t) {
                                                            if (t) {
                                                                var n = e.style.pointerEvents || "";
                                                                e.setAttribute("data-inert-pointer-events", n), (e.style.pointerEvents = "none");
                                                            } else {
                                                                var i = e.getAttribute("data-inert-pointer-events");
                                                                e.removeAttribute("data-inert-pointer-events"), (e.style.pointerEvents = i);
                                                            }
                                                        })(e, t);
                                                    var n = e.nodeName.toLowerCase();
                                                    ("video" === n || "audio" === n) &&
                                                        (function (e, t) {
                                                            yt({ element: e, attribute: "controls", remove: t });
                                                        })(e, t),
                                                        ("svg" === n || e.ownerSVGElement) &&
                                                        (St.focusSvgFocusableAttribute
                                                            ? (function (e, t) {
                                                                wt({ element: e, attribute: "focusable", temporaryValue: t ? "false" : void 0 });
                                                            })(e, t)
                                                            : St.focusSvgTabindexAttribute ||
                                                            "a" !== n ||
                                                            (function (e, t) {
                                                                yt({ element: e, attribute: "xlink:href", remove: t });
                                                            })(e, t)),
                                                        t ? e.setAttribute("data-ally-disabled", "true") : e.removeAttribute("data-ally-disabled");
                                                })(n, t),
                                                    n);
                                },
                                Tt = function () {
                                    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context, t = [], n = fe({ label: "get/parents", context: e }); n;)
                                        t.push(n), (n = n.parentNode) && n.nodeType !== Node.ELEMENT_NODE && (n = null);
                                    return t;
                                },
                                At = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"],
                                Ot = null,
                                Lt = void 0;
                            f.except = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = function (t) {
                                        return f({ context: t, except: e });
                                    };
                                return (t.rules = f), t;
                            };
                            var kt = f.except({}),
                                It = function (e) {
                                    try {
                                        return e.contentDocument || (e.contentWindow && e.contentWindow.document) || (e.getSVGDocument && e.getSVGDocument()) || null;
                                    } catch (e) {
                                        return null;
                                    }
                                },
                                Mt = void 0,
                                Nt = function (e) {
                                    if ("string" != typeof Mt) {
                                        var t = Fe();
                                        t && (Mt = ", html " + t + " ");
                                    }
                                    return Mt
                                        ? e +
                                        Mt +
                                        e
                                            .replace(/\s*,\s*/g, ",")
                                            .split(",")
                                            .join(Mt)
                                        : e;
                                },
                                _t = void 0,
                                Bt = /^(area)$/;
                            h.except = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = function (t) {
                                        return h({ context: t, except: e });
                                    };
                                return (t.rules = h), t;
                            };
                            var Pt = h.except({}),
                                Ft = void 0,
                                Dt = function (e) {
                                    Ft || (Ft = lt());
                                    var t = fe({ label: "is/valid-area", context: e });
                                    if ("area" !== t.nodeName.toLowerCase()) return !1;
                                    var n = t.hasAttribute("tabindex");
                                    if (!Ft.focusAreaTabindex && n) return !1;
                                    var i = g(t);
                                    return (
                                        !(!i || !Pt(i)) &&
                                        !(!Ft.focusBrokenImageMap && (!i.complete || !i.naturalHeight || i.offsetWidth <= 0 || i.offsetHeight <= 0)) &&
                                        (Ft.focusAreaWithoutHref || t.href
                                            ? !Tt({ context: i })
                                                .slice(1)
                                                .some(function (e) {
                                                    var t = e.nodeName.toLowerCase();
                                                    return "button" === t || "a" === t;
                                                })
                                            : (Ft.focusAreaTabindex && n) || (Ft.focusAreaImgTabindex && i.hasAttribute("tabindex")))
                                    );
                                },
                                jt = void 0,
                                Ht = function (e) {
                                    jt || (jt = lt());
                                    var t = fe({ label: "is/disabled", context: e });
                                    if (t.hasAttribute("data-ally-disabled")) return !0;
                                    if (!gt(t)) return !1;
                                    if (t.disabled) return !0;
                                    var n = Tt({ context: t });
                                    return !!n.some(y) || !(jt.focusFormDisabled || !n.some(w));
                                };
                            x.except = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = function (t) {
                                        return x({ context: t, except: e });
                                    };
                                return (t.rules = x), t;
                            };
                            var Rt = x.except({}),
                                Wt = void 0;
                            E.except = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = function (t) {
                                        return E({ context: t, except: e });
                                    };
                                return (t.rules = E), t;
                            };
                            var qt = E.except({}),
                                Gt = S(kt),
                                Kt = void 0,
                                Vt = void 0,
                                Zt = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.includeContext,
                                        i = e.includeOnlyTabbable,
                                        r = e.strategy,
                                        o = void 0 === r ? "quick" : r,
                                        a = { context: fe({ label: "query/focusable", resolveDocument: !0, defaultToDocument: !0, context: t }), includeContext: n, includeOnlyTabbable: i, strategy: o };
                                    if ("quick" === o)
                                        return (function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                t = e.context,
                                                n = e.includeContext,
                                                i = e.includeOnlyTabbable,
                                                r =
                                                    (Kt || (Kt = lt()),
                                                        "string" == typeof Vt
                                                            ? Vt
                                                            : ((Vt =
                                                                (Kt.focusTable ? "table, td," : "") +
                                                                (Kt.focusFieldset ? "fieldset," : "") +
                                                                "svg a,a[href],area[href],input, select, textarea, button,iframe, object, embed,keygen," +
                                                                (Kt.focusAudioWithoutControls ? "audio," : "audio[controls],") +
                                                                (Kt.focusVideoWithoutControls ? "video," : "video[controls],") +
                                                                (Kt.focusSummary ? "summary," : "") +
                                                                "[tabindex],[contenteditable]"),
                                                                (Vt = Nt(Vt)))),
                                                o = t.querySelectorAll(r),
                                                a = qt.rules.except({ onlyTabbable: i }),
                                                s = [].filter.call(o, a);
                                            return n && a(t) && s.unshift(t), s;
                                        })(a);
                                    if ("strict" === o || "all" === o)
                                        return (function e() {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                n = t.context,
                                                i = t.includeContext,
                                                r = t.includeOnlyTabbable,
                                                o = t.strategy;
                                            n || (n = document.documentElement);
                                            for (var a = qt.rules.except({ onlyTabbable: r }), s = ve(n).createTreeWalker(n, NodeFilter.SHOW_ELEMENT, "all" === o ? Gt : S(a), !1), u = []; s.nextNode();)
                                                s.currentNode.shadowRoot ? (a(s.currentNode) && u.push(s.currentNode), (u = u.concat(e({ context: s.currentNode.shadowRoot, includeOnlyTabbable: r, strategy: o })))) : u.push(s.currentNode);
                                            return i && ("all" === o ? kt(n) && u.unshift(n) : a(n) && u.unshift(n)), u;
                                        })(a);
                                    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
                                },
                                $t = void 0,
                                Ut = /^(fieldset|table|td|body)$/;
                            C.except = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = function (t) {
                                        return C({ context: t, except: e });
                                    };
                                return (t.rules = C), t;
                            };
                            var Xt = kt.rules.except({ flexbox: !0 }),
                                zt = C.except({ flexbox: !0 }),
                                Jt = C.except({}),
                                Qt = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.includeContext,
                                        i = e.includeOnlyTabbable,
                                        r = e.strategy,
                                        o = Jt.rules.except({ onlyTabbable: i });
                                    return Zt({ context: t, includeContext: n, includeOnlyTabbable: i, strategy: r }).filter(o);
                                },
                                Yt = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.list,
                                        n = e.elements,
                                        i = e.resolveElement,
                                        r = t.slice(0),
                                        o = de(n).slice(0);
                                    o.sort(T);
                                    var a = (function (e, t, n) {
                                        var i = [];
                                        return (
                                            t.forEach(function (t) {
                                                var r = !0,
                                                    o = e.indexOf(t);
                                                -1 === o &&
                                                    ((o = (function (e, t) {
                                                        return m(e, function (e) {
                                                            return t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING;
                                                        });
                                                    })(e, t)),
                                                        (r = !1)),
                                                    -1 === o && (o = e.length);
                                                var a = de(n ? n(t) : t);
                                                a.length && i.push({ offset: o, replace: r, elements: a });
                                            }),
                                            i
                                        );
                                    })(r, o, i);
                                    return (
                                        (function (e, t) {
                                            var n = 0;
                                            t.sort(function (e, t) {
                                                return e.offset - t.offset;
                                            }),
                                                t.forEach(function (t) {
                                                    var i = t.replace ? 1 : 0,
                                                        r = [t.offset + n, i].concat(t.elements);
                                                    e.splice.apply(e, r), (n += t.elements.length - i);
                                                });
                                        })(r, a),
                                        r
                                    );
                                },
                                en = void 0,
                                tn = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.skipFocusable;
                                    en || (en = lt());
                                    var i = fe({ label: "get/focus-redirect-target", context: t });
                                    if (!n && qt(i)) return null;
                                    var r = i.nodeName.toLowerCase(),
                                        o = ve(i);
                                    return "label" === r
                                        ? (function (e, t) {
                                            var n = e.getAttribute("for");
                                            return n ? t.getElementById(n) : e.querySelector("input, select, textarea");
                                        })(i, o)
                                        : "legend" === r
                                            ? (function (e, t) {
                                                return en.focusRedirectLegend
                                                    ? "fieldset" !== e.parentNode.nodeName.toLowerCase()
                                                        ? null
                                                        : "tabbable" === en.focusRedirectLegend
                                                            ? (function (e, t) {
                                                                var n = Qt({ context: t.body, strategy: "strict" });
                                                                if (!n.length) return null;
                                                                var i = Yt({ list: n, elements: [e] }),
                                                                    r = i.indexOf(e);
                                                                return r === i.length - 1 ? null : i[r + 1];
                                                            })(e, t)
                                                            : (function (e) {
                                                                var t = e.parentNode;
                                                                return Zt({ context: t, strategy: "strict" }).filter(A)[0] || null;
                                                            })(e)
                                                    : null;
                                            })(i, o)
                                            : "img" === r
                                                ? (function (e) {
                                                    if (!en.focusRedirectImgUsemap) return null;
                                                    var t = (function (e) {
                                                        var t = e.getAttribute("usemap");
                                                        if (!t) return null;
                                                        var n = ve(e);
                                                        return p(t.slice(1), n);
                                                    })(e);
                                                    return (t && t.querySelector("area")) || null;
                                                })(i)
                                                : null;
                                },
                                nn = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.except,
                                        i = fe({ label: "get/focus-target", context: t }),
                                        r = null,
                                        o = function (e) {
                                            return qt.rules({ context: e, except: n }) ? ((r = e), !0) : ((r = tn({ context: e, skipFocusable: !0 })), Boolean(r));
                                        };
                                    return o(i) ? r : (Tt({ context: i }).slice(1).some(o), r);
                                },
                                rn = { flexbox: !0, scrollable: !0, onlyTabbable: !0 },
                                on = {
                                    blur: function (e) {
                                        var t = fe({ label: "element/blur", context: e });
                                        if (!be(t)) return null;
                                        if ("body" === t.nodeName.toLowerCase()) return null;
                                        if (t.blur) return t.blur(), document.activeElement;
                                        var n = he(t);
                                        try {
                                            n.HTMLElement.prototype.blur.call(t);
                                        } catch (e) {
                                            var i = n.document && n.document.body;
                                            if (!i) return null;
                                            var r = i.getAttribute("tabindex");
                                            i.setAttribute("tabindex", "-1"), i.focus(), r ? i.setAttribute("tabindex", r) : i.removeAttribute("tabindex");
                                        }
                                        return n.document.activeElement;
                                    },
                                    disabled: Ct,
                                    focus: function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            n = t.defaultToAncestor,
                                            i = t.undoScrolling,
                                            r = fe({ label: "element/focus", context: e }),
                                            o = qt.rules({ context: r, except: rn });
                                        if (!n && !o) return null;
                                        var a = nn({ context: r, except: rn });
                                        if (!a) return null;
                                        if (be(a)) return a;
                                        var s = void 0;
                                        i &&
                                            (s = (function (e) {
                                                var t = Tt({ context: a })
                                                    .slice(1)
                                                    .map(function (e) {
                                                        return { element: e, scrollTop: e.scrollTop, scrollLeft: e.scrollLeft };
                                                    });
                                                return function () {
                                                    t.forEach(function (e) {
                                                        (e.element.scrollTop = e.scrollTop), (e.element.scrollLeft = e.scrollLeft);
                                                    });
                                                };
                                            })());
                                        var u = (function (e) {
                                            if (e.focus) return e.focus(), be(e) ? e : null;
                                            var t = he(e);
                                            try {
                                                return t.HTMLElement.prototype.focus.call(e), be(e) ? e : null;
                                            } catch (t) {
                                                return ze(e) && be(e) ? e : null;
                                            }
                                        })(a);
                                        return s && s(), u;
                                    },
                                };
                            "undefined" != typeof window &&
                                (function () {
                                    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = "", i = "", r = 0, o = t.length; o > r; ++r)
                                        (n = window[t[r] + "RequestAnimationFrame"]), (i = window[t[r] + "CancelAnimationFrame"] || window[t[r] + "CancelRequestAnimationFrame"]);
                                    "function" != typeof window.requestAnimationFrame &&
                                        (window.requestAnimationFrame =
                                            window[n] ||
                                            function (t) {
                                                var n = new Date().getTime(),
                                                    i = Math.max(0, 16 - (n - e)),
                                                    r = window.setTimeout(function () {
                                                        t(n + i);
                                                    }, i);
                                                return (e = n + i), r;
                                            }),
                                        "function" != typeof window.cancelAnimationFrame &&
                                        (window.cancelAnimationFrame =
                                            window[i] ||
                                            function (e) {
                                                clearTimeout(e);
                                            });
                                })();
                            var an = ("undefined" != typeof window && window.CustomEvent) || function () { };
                            "function" != typeof an &&
                                ((an = function (e, t) {
                                    var n = document.createEvent("CustomEvent");
                                    return !t && (t = { bubbles: !1, cancelable: !1, detail: void 0 }), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                                }).prototype = window.Event.prototype);
                            var sn = an,
                                un = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.engage,
                                        n = e.disengage;
                                    return function () {
                                        return this.instances
                                            ? (this.instances++, this._result)
                                            : (this.instances++,
                                                (this._result = this.engage() || {}),
                                                (this._result.disengage = function () {
                                                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).force ? (this.instances = 0) : this.instances--, this.instances || (this.disengage(), (this._result = null));
                                                }.bind(this)),
                                                this._result);
                                    }.bind({ engage: t || O, disengage: n || O, instances: 0, _result: null });
                                },
                                ln = void 0,
                                cn = void 0,
                                dn = un({
                                    engage: function () {
                                        (cn = !0), (ln = document.activeElement), L();
                                    },
                                    disengage: function () {
                                        cancelAnimationFrame(cn), (cn = !1);
                                    },
                                }),
                                fn = function (e) {
                                    var t = fe({ label: "is/shadowed", resolveDocument: !0, context: e });
                                    return Boolean(me({ context: t }));
                                },
                                mn = function () {
                                    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context, t = [], n = fe({ label: "get/shadow-host-parents", context: e }); n && (n = me({ context: n }));) t.push(n);
                                    return t;
                                },
                                vn = function () {
                                    return (
                                        null === document.activeElement && document.body.focus(),
                                        fn(document.activeElement)
                                            ? ((e = mn({ context: document.activeElement })), [document.activeElement].concat(e))
                                            : (function () {
                                                for (var e = [document.activeElement]; e[0] && e[0].shadowRoot;) e.unshift(e[0].shadowRoot.activeElement);
                                                return e;
                                            })()
                                    );
                                    var e;
                                },
                                bn = void 0,
                                hn = void 0;
                            "undefined" != typeof document && document.documentElement.createShadowRoot
                                ? (function () {
                                    var e = void 0,
                                        t = void 0,
                                        n = function () {
                                            r(),
                                                (window.clearImmediate || window.clearTimeout)(e),
                                                (e = (window.setImmediate || window.setTimeout)(function () {
                                                    o();
                                                }));
                                        },
                                        i = function (e) {
                                            e.addEventListener("blur", n, !0), (t = e);
                                        },
                                        r = function () {
                                            t && t.removeEventListener("blur", n, !0), (t = null);
                                        },
                                        o = function () {
                                            var e = vn();
                                            if (1 !== e.length) {
                                                i(e[0]);
                                                var t = new CustomEvent("shadow-focus", { bubbles: !1, cancelable: !1, detail: { elements: e, active: e[0], hosts: e.slice(1) } });
                                                document.dispatchEvent(t);
                                            } else r();
                                        },
                                        a = function () {
                                            (window.clearImmediate || window.clearTimeout)(e), o();
                                        };
                                    (bn = function () {
                                        document.addEventListener("focus", a, !0);
                                    }),
                                        (hn = function () {
                                            (window.clearImmediate || window.clearTimeout)(e), t && t.removeEventListener("blur", n, !0), document.removeEventListener("focus", a, !0);
                                        });
                                })()
                                : (bn = hn = function () { });
                            var pn = un({ engage: bn, disengage: hn }),
                                gn = { activeElement: dn, shadowFocus: pn },
                                yn = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.engage,
                                        n = e.disengage;
                                    return function () {
                                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context;
                                        return (this.context = de(e || document)), this.context.forEach(this.engage), { disengage: k.bind(this) };
                                    }.bind({ engage: t || I, disengage: n || I, context: null });
                                },
                                wn = void 0,
                                xn = void 0;
                            pe.is.TRIDENT && (pe.is.IE10 || pe.is.IE11)
                                ? (function () {
                                    var e = function (e) {
                                        var t = nn({ context: e.target, except: { flexbox: !0, scrollable: !0 } });
                                        if (t && t !== e.target) {
                                            window.setImmediate(function () {
                                                t.focus();
                                            });
                                            var n = [].map.call(t.children, function (e) {
                                                var t = e.style.visibility || "",
                                                    n = e.style.transition || "";
                                                return (e.style.visibility = "hidden"), (e.style.transition = "none"), [e, t, n];
                                            });
                                            window.setImmediate(function () {
                                                n.forEach(function (e) {
                                                    (e[0].style.visibility = e[1]), (e[0].style.transition = e[2]);
                                                });
                                            });
                                        }
                                    };
                                    (wn = function (t) {
                                        t.addEventListener("mousedown", e, !0);
                                    }),
                                        (xn = function (t) {
                                            t.removeEventListener("mousedown", e, !0);
                                        });
                                })()
                                : (wn = function () { });
                            var En = yn({ engage: wn, disengage: xn }),
                                Sn = void 0,
                                Cn = void 0;
                            pe.is.OSX && (pe.is.GECKO || pe.is.WEBKIT)
                                ? (function () {
                                    var e = function (e) {
                                        if (!e.defaultPrevented && s(e.target, "input, button, button *")) {
                                            var t = nn({ context: e.target });
                                            (window.setImmediate || window.setTimeout)(function () {
                                                t.focus();
                                            });
                                        }
                                    },
                                        t = function (e) {
                                            if (!e.defaultPrevented && s(e.target, "label, label *")) {
                                                var t = nn({ context: e.target });
                                                t && t.focus();
                                            }
                                        };
                                    (Sn = function (n) {
                                        n.addEventListener("mousedown", e, !1), n.addEventListener("mouseup", t, !1);
                                    }),
                                        (Cn = function (n) {
                                            n.removeEventListener("mousedown", e, !1), n.removeEventListener("mouseup", t, !1);
                                        });
                                })()
                                : (Sn = function () { });
                            var Tn = yn({ engage: Sn, disengage: Cn }),
                                An = void 0,
                                On = void 0;
                            pe.is.WEBKIT
                                ? (function () {
                                    var e = function (e) {
                                        var t = nn({ context: e.target });
                                        !t ||
                                            (t.hasAttribute("tabindex") && mt(t)) ||
                                            (t.setAttribute("tabindex", 0),
                                                (window.setImmediate || window.setTimeout)(function () {
                                                    t.removeAttribute("tabindex");
                                                }, 0));
                                    };
                                    (An = function (t) {
                                        t.addEventListener("mousedown", e, !0), t.addEventListener("touchstart", e, !0);
                                    }),
                                        (On = function (t) {
                                            t.removeEventListener("mousedown", e, !0), t.removeEventListener("touchstart", e, !0);
                                        });
                                })()
                                : (An = function () { });
                            var Ln = { pointerFocusChildren: En, pointerFocusInput: Tn, pointerFocusParent: yn({ engage: An, disengage: On }) },
                                kn = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.filter;
                                    if (((t = fe({ label: "get/insignificant-branches", defaultToDocument: !0, context: t })), !(n = de(n)).length)) throw new TypeError("get/insignificant-branches requires valid options.filter");
                                    return (function (e) {
                                        var t = e.context,
                                            n = e.filter,
                                            i = [],
                                            r = function (e) {
                                                return n.some(function (t) {
                                                    return e === t;
                                                })
                                                    ? NodeFilter.FILTER_REJECT
                                                    : (function (e) {
                                                        var t = M({ parent: e });
                                                        return n.some(t);
                                                    })(e)
                                                        ? NodeFilter.FILTER_ACCEPT
                                                        : (i.push(e), NodeFilter.FILTER_REJECT);
                                            };
                                        r.acceptNode = r;
                                        for (var o = ve(t).createTreeWalker(t, NodeFilter.SHOW_ELEMENT, r, !1); o.nextNode(););
                                        return i;
                                    })({ context: t, filter: n });
                                },
                                In = {
                                    activeElement: function () {
                                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context,
                                            t = ve(e),
                                            n = void 0;
                                        try {
                                            n = t.activeElement;
                                        } catch (e) { }
                                        return (n && n.nodeType) || (n = t.body || t.documentElement), n;
                                    },
                                    activeElements: vn,
                                    focusRedirectTarget: tn,
                                    focusTarget: nn,
                                    insignificantBranches: kn,
                                    parents: Tt,
                                    shadowHostParents: mn,
                                    shadowHost: me,
                                },
                                Mn = { activeElement: be, disabled: Ht, focusRelevant: kt, focusable: qt, onlyTabbable: Rt, shadowed: fn, tabbable: Jt, validArea: Dt, validTabindex: mt, visible: Pt },
                                Nn = function (e) {
                                    return e.shadowRoot ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                                };
                            Nn.acceptNode = Nn;
                            for (
                                var _n = { childList: !0, subtree: !0 },
                                Bn = (function () {
                                    function e() {
                                        var t = this,
                                            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            r = i.context,
                                            o = i.callback,
                                            a = i.config;
                                        n(this, e),
                                            (this.config = a),
                                            (this.disengage = this.disengage.bind(this)),
                                            (this.clientObserver = new MutationObserver(o)),
                                            (this.hostObserver = new MutationObserver(function (e) {
                                                return e.forEach(t.handleHostMutation, t);
                                            })),
                                            this.observeContext(r),
                                            this.observeShadowHosts(r);
                                    }
                                    return (
                                        se(e, [
                                            {
                                                key: "disengage",
                                                value: function () {
                                                    this.clientObserver && this.clientObserver.disconnect(), (this.clientObserver = null), this.hostObserver && this.hostObserver.disconnect(), (this.hostObserver = null);
                                                },
                                            },
                                            {
                                                key: "observeShadowHosts",
                                                value: function (e) {
                                                    var t = this;
                                                    N({ context: e }).forEach(function (e) {
                                                        return t.observeContext(e.shadowRoot);
                                                    });
                                                },
                                            },
                                            {
                                                key: "observeContext",
                                                value: function (e) {
                                                    this.clientObserver.observe(e, this.config), this.hostObserver.observe(e, _n);
                                                },
                                            },
                                            {
                                                key: "handleHostMutation",
                                                value: function (e) {
                                                    "childList" === e.type &&
                                                        de(e.addedNodes)
                                                            .filter(function (e) {
                                                                return e.nodeType === Node.ELEMENT_NODE;
                                                            })
                                                            .forEach(this.observeShadowHosts, this);
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                Pn = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.callback,
                                        i = e.config;
                                    if ("function" != typeof n) throw new TypeError("observe/shadow-mutations requires options.callback to be a function");
                                    if ("object" !== (void 0 === i ? "undefined" : ue(i))) throw new TypeError("observe/shadow-mutations requires options.config to be an object");
                                    if (!window.MutationObserver) return { disengage: function () { } };
                                    var r = fe({ label: "observe/shadow-mutations", resolveDocument: !0, defaultToDocument: !0, context: t });
                                    return { disengage: new Bn({ context: r, callback: n, config: i }).disengage };
                                },
                                Fn = { attributes: !0, childList: !0, subtree: !0, attributeFilter: ["tabindex", "disabled", "data-ally-disabled"] },
                                Dn = (function () {
                                    function e() {
                                        var t = this,
                                            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            r = i.context,
                                            o = i.filter;
                                        n(this, e),
                                            (this._context = de(r || document.documentElement)[0]),
                                            (this._filter = de(o)),
                                            (this._inertElementCache = []),
                                            (this.disengage = this.disengage.bind(this)),
                                            (this.handleMutation = this.handleMutation.bind(this)),
                                            (this.renderInert = this.renderInert.bind(this)),
                                            (this.filterElements = this.filterElements.bind(this)),
                                            (this.filterParentElements = this.filterParentElements.bind(this));
                                        var a = Zt({ context: this._context, includeContext: !0, strategy: "all" });
                                        this.renderInert(a),
                                            (this.shadowObserver = Pn({
                                                context: this._context,
                                                config: Fn,
                                                callback: function (e) {
                                                    return e.forEach(t.handleMutation);
                                                },
                                            }));
                                    }
                                    return (
                                        se(e, [
                                            {
                                                key: "disengage",
                                                value: function () {
                                                    this._context &&
                                                        (_(this._context),
                                                            this._inertElementCache.forEach(function (e) {
                                                                return _(e);
                                                            }),
                                                            (this._inertElementCache = null),
                                                            (this._filter = null),
                                                            (this._context = null),
                                                            this.shadowObserver && this.shadowObserver.disengage(),
                                                            (this.shadowObserver = null));
                                                },
                                            },
                                            {
                                                key: "listQueryFocusable",
                                                value: function (e) {
                                                    return e
                                                        .map(function (e) {
                                                            return Zt({ context: e, includeContext: !0, strategy: "all" });
                                                        })
                                                        .reduce(function (e, t) {
                                                            return e.concat(t);
                                                        }, []);
                                                },
                                            },
                                            {
                                                key: "renderInert",
                                                value: function (e) {
                                                    var t = this;
                                                    e.filter(this.filterElements)
                                                        .filter(this.filterParentElements)
                                                        .filter(function (e) {
                                                            return !Ct(e);
                                                        })
                                                        .forEach(function (e) {
                                                            t._inertElementCache.push(e),
                                                                (function (e) {
                                                                    Ct(e, !0);
                                                                })(e);
                                                        });
                                                },
                                            },
                                            {
                                                key: "filterElements",
                                                value: function (e) {
                                                    var t = M({ element: e, includeSelf: !0 });
                                                    return !this._filter.some(t);
                                                },
                                            },
                                            {
                                                key: "filterParentElements",
                                                value: function (e) {
                                                    var t = M({ parent: e });
                                                    return !this._filter.some(t);
                                                },
                                            },
                                            {
                                                key: "handleMutation",
                                                value: function (e) {
                                                    if ("childList" === e.type) {
                                                        var t = de(e.addedNodes).filter(function (e) {
                                                            return e.nodeType === Node.ELEMENT_NODE;
                                                        });
                                                        if (!t.length) return;
                                                        var n = this.listQueryFocusable(t);
                                                        this.renderInert(n);
                                                    } else "attributes" === e.type && this.renderInert([e.target]);
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                jn = { attributes: !1, childList: !0, subtree: !0 },
                                Hn = (function () {
                                    function e() {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            i = t.context,
                                            r = t.filter;
                                        n(this, e),
                                            (this._context = de(i || document.documentElement)[0]),
                                            (this._filter = de(r)),
                                            (this.disengage = this.disengage.bind(this)),
                                            (this.handleMutation = this.handleMutation.bind(this)),
                                            (this.isInsignificantBranch = this.isInsignificantBranch.bind(this)),
                                            kn({ context: this._context, filter: this._filter }).forEach(B),
                                            this.startObserver();
                                    }
                                    return (
                                        se(e, [
                                            {
                                                key: "disengage",
                                                value: function () {
                                                    this._context &&
                                                        ([].forEach.call(this._context.querySelectorAll("[data-cached-aria-hidden]"), P),
                                                            (this._context = null),
                                                            (this._filter = null),
                                                            this._observer && this._observer.disconnect(),
                                                            (this._observer = null));
                                                },
                                            },
                                            {
                                                key: "startObserver",
                                                value: function () {
                                                    var e = this;
                                                    window.MutationObserver &&
                                                        ((this._observer = new MutationObserver(function (t) {
                                                            return t.forEach(e.handleMutation);
                                                        })),
                                                            this._observer.observe(this._context, jn));
                                                },
                                            },
                                            {
                                                key: "handleMutation",
                                                value: function (e) {
                                                    "childList" === e.type &&
                                                        de(e.addedNodes)
                                                            .filter(function (e) {
                                                                return e.nodeType === Node.ELEMENT_NODE;
                                                            })
                                                            .filter(this.isInsignificantBranch)
                                                            .forEach(B);
                                                },
                                            },
                                            {
                                                key: "isInsignificantBranch",
                                                value: function (e) {
                                                    if (
                                                        Tt({ context: e }).some(function (e) {
                                                            return "true" === e.getAttribute("aria-hidden");
                                                        })
                                                    )
                                                        return !1;
                                                    var t = M({ element: e });
                                                    return !this._filter.some(t);
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                Rn = (function () {
                                    function e(t) {
                                        n(this, e), (this._document = ve(t)), (this.maps = {});
                                    }
                                    return (
                                        se(e, [
                                            {
                                                key: "getAreasFor",
                                                value: function (e) {
                                                    return this.maps[e] || this.addMapByName(e), this.maps[e];
                                                },
                                            },
                                            {
                                                key: "addMapByName",
                                                value: function (e) {
                                                    var t = p(e, this._document);
                                                    t && (this.maps[t.name] = Qt({ context: t }));
                                                },
                                            },
                                            {
                                                key: "extractAreasFromList",
                                                value: function (e) {
                                                    return e.filter(function (e) {
                                                        if ("area" !== e.nodeName.toLowerCase()) return !0;
                                                        var t = e.parentNode;
                                                        return this.maps[t.name] || (this.maps[t.name] = []), this.maps[t.name].push(e), !1;
                                                    }, this);
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                Wn = function (e, t) {
                                    var n = t.querySelectorAll("img[usemap]"),
                                        i = new Rn(t),
                                        r = i.extractAreasFromList(e);
                                    return n.length
                                        ? Yt({
                                            list: r,
                                            elements: n,
                                            resolveElement: function (e) {
                                                var t = e.getAttribute("usemap").slice(1);
                                                return i.getAreasFor(t);
                                            },
                                        })
                                        : r;
                                },
                                qn = (function () {
                                    function e(t, i) {
                                        n(this, e), (this.context = t), (this.sortElements = i), (this.hostCounter = 1), (this.inHost = {}), (this.inDocument = []), (this.hosts = {}), (this.elements = {});
                                    }
                                    return (
                                        se(e, [
                                            {
                                                key: "_registerHost",
                                                value: function (e) {
                                                    if (!e._sortingId) {
                                                        (e._sortingId = "shadow-" + this.hostCounter++), (this.hosts[e._sortingId] = e);
                                                        var t = me({ context: e });
                                                        t ? (this._registerHost(t), this._registerHostParent(e, t)) : this.inDocument.push(e);
                                                    }
                                                },
                                            },
                                            {
                                                key: "_registerHostParent",
                                                value: function (e, t) {
                                                    this.inHost[t._sortingId] || (this.inHost[t._sortingId] = []), this.inHost[t._sortingId].push(e);
                                                },
                                            },
                                            {
                                                key: "_registerElement",
                                                value: function (e, t) {
                                                    this.elements[t._sortingId] || (this.elements[t._sortingId] = []), this.elements[t._sortingId].push(e);
                                                },
                                            },
                                            {
                                                key: "extractElements",
                                                value: function (e) {
                                                    return e.filter(function (e) {
                                                        var t = me({ context: e });
                                                        return !t || (this._registerHost(t), this._registerElement(e, t), !1);
                                                    }, this);
                                                },
                                            },
                                            {
                                                key: "sort",
                                                value: function (e) {
                                                    var t = this._injectHosts(e);
                                                    return (t = this._replaceHosts(t)), this._cleanup(), t;
                                                },
                                            },
                                            {
                                                key: "_injectHosts",
                                                value: function (e) {
                                                    return (
                                                        Object.keys(this.hosts).forEach(function (e) {
                                                            var t = this.elements[e],
                                                                n = this.inHost[e],
                                                                i = this.hosts[e].shadowRoot;
                                                            this.elements[e] = this._merge(t, n, i);
                                                        }, this),
                                                        this._merge(e, this.inDocument, this.context)
                                                    );
                                                },
                                            },
                                            {
                                                key: "_merge",
                                                value: function (e, t, n) {
                                                    var i = Yt({ list: e, elements: t });
                                                    return this.sortElements(i, n);
                                                },
                                            },
                                            {
                                                key: "_replaceHosts",
                                                value: function (e) {
                                                    return Yt({ list: e, elements: this.inDocument, resolveElement: this._resolveHostElement.bind(this) });
                                                },
                                            },
                                            {
                                                key: "_resolveHostElement",
                                                value: function (e) {
                                                    var t = Yt({ list: this.elements[e._sortingId], elements: this.inHost[e._sortingId], resolveElement: this._resolveHostElement.bind(this) }),
                                                        n = vt(e);
                                                    return null !== n && n > -1 ? [e].concat(t) : t;
                                                },
                                            },
                                            {
                                                key: "_cleanup",
                                                value: function () {
                                                    Object.keys(this.hosts).forEach(function (e) {
                                                        delete this.hosts[e]._sortingId;
                                                    }, this);
                                                },
                                            },
                                        ]),
                                        e
                                    );
                                })(),
                                Gn = function (e) {
                                    var t = {},
                                        n = [],
                                        i = e.filter(function (e) {
                                            var i = e.tabIndex;
                                            return void 0 === i && (i = vt(e)), 0 >= i || null == i || (t[i] || ((t[i] = []), n.push(i)), t[i].push(e), !1);
                                        });
                                    return n
                                        .sort()
                                        .map(function (e) {
                                            return t[e];
                                        })
                                        .reduceRight(function (e, t) {
                                            return t.concat(e);
                                        }, i);
                                },
                                Kn = void 0,
                                Vn = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.includeContext,
                                        i = e.includeOnlyTabbable,
                                        r = e.strategy;
                                    Kn || (Kn = lt());
                                    var o = de(t)[0] || document.documentElement,
                                        a = Qt({ context: o, includeContext: n, includeOnlyTabbable: i, strategy: r });
                                    return (
                                        (a =
                                            document.body.createShadowRoot && pe.is.BLINK
                                                ? (function (e, t, n) {
                                                    var i = new qn(o, n),
                                                        r = i.extractElements(e);
                                                    return r.length === e.length ? n(e) : i.sort(r);
                                                })(a, 0, F)
                                                : F(a, o)),
                                        n &&
                                        (a = (function (e, t) {
                                            var n = e.indexOf(t);
                                            return n > 0 ? e.splice(n, 1).concat(e) : e;
                                        })(a, o)),
                                        a
                                    );
                                },
                                Zn = {
                                    tab: 9,
                                    left: 37,
                                    up: 38,
                                    right: 39,
                                    down: 40,
                                    pageUp: 33,
                                    "page-up": 33,
                                    pageDown: 34,
                                    "page-down": 34,
                                    end: 35,
                                    home: 36,
                                    enter: 13,
                                    escape: 27,
                                    space: 32,
                                    shift: 16,
                                    capsLock: 20,
                                    "caps-lock": 20,
                                    ctrl: 17,
                                    alt: 18,
                                    meta: 91,
                                    pause: 19,
                                    insert: 45,
                                    delete: 46,
                                    backspace: 8,
                                    _alias: { 91: [92, 93, 224] },
                                },
                                $n = 1;
                                26 > $n;
                                $n++
                            )
                                Zn["f" + $n] = $n + 111;
                            for (var Un = 0; 10 > Un; Un++) {
                                var Xn = Un + 48,
                                    zn = Un + 96;
                                (Zn[Un] = Xn), (Zn["num-" + Un] = zn), (Zn._alias[Xn] = [zn]);
                            }
                            for (var Jn = 0; 26 > Jn; Jn++) {
                                var Qn = Jn + 65,
                                    Yn = String.fromCharCode(Qn).toLowerCase();
                                Zn[Yn] = Qn;
                            }
                            var ei = { alt: "altKey", ctrl: "ctrlKey", meta: "metaKey", shift: "shiftKey" },
                                ti = Object.keys(ei).map(function (e) {
                                    return ei[e];
                                }),
                                ni = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = {},
                                        n = de(e.context)[0] || document.documentElement;
                                    delete e.context;
                                    var i = de(e.filter);
                                    delete e.filter;
                                    var r = Object.keys(e);
                                    if (!r.length) throw new TypeError("when/key requires at least one option key");
                                    var o = function (e) {
                                        e.keyCodes.forEach(function (n) {
                                            t[n] || (t[n] = []), t[n].push(e);
                                        });
                                    };
                                    r.forEach(function (t) {
                                        if ("function" != typeof e[t]) throw new TypeError('when/key requires option["' + t + '"] to be a function');
                                        (function (e) {
                                            return e.split(/\s+/).map(function (e) {
                                                var t = e.split("+"),
                                                    n = (function (e) {
                                                        var t = (function (e) {
                                                            var t = !!e && null;
                                                            return { altKey: t, ctrlKey: t, metaKey: t, shiftKey: t };
                                                        })(-1 !== e.indexOf("*"));
                                                        return (
                                                            e.forEach(function (e) {
                                                                if ("*" !== e) {
                                                                    var n = !0,
                                                                        i = e.slice(0, 1);
                                                                    "?" === i ? (n = null) : "!" === i && (n = !1), !0 !== n && (e = e.slice(1));
                                                                    var r = ei[e];
                                                                    if (!r) throw new TypeError('Unknown modifier "' + e + '"');
                                                                    t[r] = n;
                                                                }
                                                            }),
                                                            t
                                                        );
                                                    })(t.slice(0, -1));
                                                return {
                                                    keyCodes: (function (e) {
                                                        var t = Zn[e] || parseInt(e, 10);
                                                        if (!t || "number" != typeof t || isNaN(t)) throw new TypeError('Unknown key "' + e + '"');
                                                        return [t].concat(Zn._alias[t] || []);
                                                    })(t.slice(-1)),
                                                    modifiers: n,
                                                    matchModifiers: D.bind(null, n),
                                                };
                                            });
                                        })(t)
                                            .map(function (n) {
                                                return (n.callback = e[t]), n;
                                            })
                                            .forEach(o);
                                    });
                                    var a = function (e) {
                                        if (!e.defaultPrevented) {
                                            if (i.length) {
                                                var r = M({ element: e.target, includeSelf: !0 });
                                                if (i.some(r)) return;
                                            }
                                            var o = e.keyCode || e.which;
                                            t[o] &&
                                                t[o].forEach(function (t) {
                                                    t.matchModifiers(e) && t.callback.call(n, e, s);
                                                });
                                        }
                                    };
                                    n.addEventListener("keydown", a, !1);
                                    var s = function () {
                                        n.removeEventListener("keydown", a, !1);
                                    };
                                    return { disengage: s };
                                },
                                ii = {
                                    disabled: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = e.context,
                                            n = e.filter;
                                        return { disengage: new Dn({ context: t, filter: n }).disengage };
                                    },
                                    hidden: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = e.context,
                                            n = e.filter;
                                        return { disengage: new Hn({ context: t, filter: n }).disengage };
                                    },
                                    tabFocus: function () {
                                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).context;
                                        return (
                                            e || (e = document.documentElement),
                                            Vn(),
                                            ni({
                                                "?alt+?shift+tab": function (t) {
                                                    t.preventDefault();
                                                    var n = Vn({ context: e }),
                                                        i = t.shiftKey,
                                                        r = n[0],
                                                        o = n[n.length - 1],
                                                        a = i ? o : r;
                                                    if (be(i ? r : o)) a.focus();
                                                    else {
                                                        var s = void 0;
                                                        if (
                                                            n.some(function (e, t) {
                                                                return !!be(e) && ((s = t), !0);
                                                            })
                                                        )
                                                            n[s + (i ? -1 : 1)].focus();
                                                        else r.focus();
                                                    }
                                                },
                                            })
                                        );
                                    },
                                },
                                ri = {
                                    attribute: {
                                        "aria-busy": { default: "false", values: ["true", "false"] },
                                        "aria-checked": { default: void 0, values: ["true", "false", "mixed", void 0] },
                                        "aria-disabled": { default: "false", values: ["true", "false"] },
                                        "aria-expanded": { default: void 0, values: ["true", "false", void 0] },
                                        "aria-grabbed": { default: void 0, values: ["true", "false", void 0] },
                                        "aria-hidden": { default: "false", values: ["true", "false"] },
                                        "aria-invalid": { default: "false", values: ["true", "false", "grammar", "spelling"] },
                                        "aria-pressed": { default: void 0, values: ["true", "false", "mixed", void 0] },
                                        "aria-selected": { default: void 0, values: ["true", "false", void 0] },
                                        "aria-atomic": { default: "false", values: ["true", "false"] },
                                        "aria-autocomplete": { default: "none", values: ["inline", "list", "both", "none"] },
                                        "aria-dropeffect": { default: "none", multiple: !0, values: ["copy", "move", "link", "execute", "popup", "none"] },
                                        "aria-haspopup": { default: "false", values: ["true", "false"] },
                                        "aria-live": { default: "off", values: ["off", "polite", "assertive"] },
                                        "aria-multiline": { default: "false", values: ["true", "false"] },
                                        "aria-multiselectable": { default: "false", values: ["true", "false"] },
                                        "aria-orientation": { default: "horizontal", values: ["vertical", "horizontal"] },
                                        "aria-readonly": { default: "false", values: ["true", "false"] },
                                        "aria-relevant": { default: "additions text", multiple: !0, values: ["additions", "removals", "text", "all"] },
                                        "aria-required": { default: "false", values: ["true", "false"] },
                                        "aria-sort": { default: "none", other: !0, values: ["ascending", "descending", "none"] },
                                    },
                                    keycode: Zn,
                                },
                                oi = 0,
                                ai = 0,
                                si = ["touchstart", "pointerdown", "MSPointerDown", "mousedown"],
                                ui = ["touchend", "touchcancel", "pointerup", "MSPointerUp", "pointercancel", "MSPointerCancel", "mouseup"],
                                li = un({
                                    engage: function () {
                                        return (
                                            window.addEventListener("blur", j, !1),
                                            document.documentElement.addEventListener("keydown", W, !0),
                                            document.documentElement.addEventListener("keyup", q, !0),
                                            si.forEach(function (e) {
                                                document.documentElement.addEventListener(e, H, !0);
                                            }),
                                            ui.forEach(function (e) {
                                                document.documentElement.addEventListener(e, R, !0);
                                            }),
                                            { get: G }
                                        );
                                    },
                                    disengage: function () {
                                        (oi = ai = 0),
                                            window.removeEventListener("blur", j, !1),
                                            document.documentElement.removeEventListener("keydown", W, !0),
                                            document.documentElement.removeEventListener("keyup", q, !0),
                                            si.forEach(function (e) {
                                                document.documentElement.removeEventListener(e, H, !0);
                                            }),
                                            ui.forEach(function (e) {
                                                document.documentElement.removeEventListener(e, R, !0);
                                            });
                                    },
                                }),
                                ci = { interactionType: li, shadowMutations: Pn },
                                di = {
                                    firstTabbable: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = e.context,
                                            n = e.sequence,
                                            i = e.strategy,
                                            r = e.ignoreAutofocus,
                                            o = e.defaultToContext,
                                            a = e.includeOnlyTabbable,
                                            s = -1;
                                        n || ((t = de(t || document.body)[0]), (n = Qt({ context: t, includeOnlyTabbable: a, strategy: i }))), n.length && !r && (s = m(n, K)), n.length && -1 === s && (s = m(n, V));
                                        var u = qt.rules.except({ onlyTabbable: a });
                                        return -1 === s && o && t && u(t) ? t : n[s] || null;
                                    },
                                    focusable: Zt,
                                    shadowHosts: N,
                                    tabbable: Qt,
                                    tabsequence: Vn,
                                },
                                fi = "undefined" != typeof document && "onfocusin" in document,
                                mi = fi ? "focusin" : "focus",
                                vi = fi ? "focusout" : "blur",
                                bi = void 0,
                                hi = void 0,
                                pi = null,
                                gi = null,
                                yi = { pointer: !1, key: !1, script: !1, initial: !1 },
                                wi = un({
                                    engage: function () {
                                        return (
                                            (hi = pn()),
                                            document.addEventListener("shadow-focus", X, !0),
                                            document.documentElement.addEventListener(mi, X, !0),
                                            document.documentElement.addEventListener(vi, X, !0),
                                            (bi = li()),
                                            X({ type: "initial" }),
                                            { used: J, current: z, lock: Q, unlock: Y }
                                        );
                                    },
                                    disengage: function () {
                                        X({ type: vi }),
                                            (pi = gi = null),
                                            Object.keys(yi).forEach(function (e) {
                                                $(document.documentElement, "focus-source-" + e), (yi[e] = !1);
                                            }),
                                            bi.disengage(),
                                            hi && hi.disengage(),
                                            document.removeEventListener("shadow-focus", X, !0),
                                            document.documentElement.removeEventListener(mi, X, !0),
                                            document.documentElement.removeEventListener(vi, X, !0),
                                            document.documentElement.removeAttribute("data-focus-source");
                                    },
                                }),
                                xi = void 0,
                                Ei = "undefined" != typeof document && "onfocusin" in document,
                                Si = Ei ? "focusin" : "focus",
                                Ci = Ei ? "focusout" : "blur",
                                Ti = "ally-focus-within",
                                Ai = void 0,
                                Oi = void 0,
                                Li = void 0,
                                ki = {
                                    focusSource: wi,
                                    focusWithin: un({
                                        engage: function () {
                                            xi || ((xi = lt()), (Ai = Nt("." + Ti))), (Li = pn()), document.addEventListener(Ci, te, !0), document.addEventListener(Si, ne, !0), document.addEventListener("shadow-focus", ie, !0), ee();
                                        },
                                        disengage: function () {
                                            Li && Li.disengage(),
                                                (window.clearImmediate || window.clearTimeout)(Oi),
                                                document.removeEventListener(Ci, te, !0),
                                                document.removeEventListener(Si, ne, !0),
                                                document.removeEventListener("shadow-focus", ie, !0),
                                                [].forEach.call(document.querySelectorAll(Ai), function (e) {
                                                    $(e, Ti);
                                                });
                                        },
                                    }),
                                },
                                Ii = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.context,
                                        n = e.callback,
                                        i = e.area;
                                    if ("function" != typeof n) throw new TypeError("when/visible-area requires options.callback to be a function");
                                    "number" != typeof i && (i = 1);
                                    var r = fe({ label: "when/visible-area", context: t }),
                                        o = void 0,
                                        a = null,
                                        s = function () {
                                            o && cancelAnimationFrame(o);
                                        },
                                        u = function () {
                                            return !Pt(r) ||
                                                (function (e) {
                                                    var t = e.getBoundingClientRect(),
                                                        n = (function () {
                                                            var e = window.innerWidth || document.documentElement.clientWidth,
                                                                t = window.innerHeight || document.documentElement.clientHeight;
                                                            return { top: 0, right: e, bottom: t, left: 0, width: e, height: t };
                                                        })();
                                                    n.area = n.width * n.height;
                                                    var i = n,
                                                        r = (function (e) {
                                                            var t = Tt({ context: e }).slice(1).filter(ae);
                                                            return t.length
                                                                ? t.reduce(function (e, t) {
                                                                    var n = oe(t),
                                                                        i = re(n, e);
                                                                    return (i.area = Math.min(n.area, e.area)), i;
                                                                }, oe(t[0]))
                                                                : null;
                                                        })(e);
                                                    if (r) {
                                                        if (!r.width || !r.height) return 0;
                                                        (i = re(r, n)).area = r.area;
                                                    }
                                                    var o = re(t, i);
                                                    if (!o.width || !o.height) return 0;
                                                    var a = t.width * t.height,
                                                        s = Math.min(a, i.area),
                                                        u = (Math.round(o.width) * Math.round(o.height)) / s,
                                                        l = Math.round(1e4 * u) / 1e4;
                                                    return Math.min(l, 1);
                                                })(r) < i ||
                                                !1 === n(r)
                                                ? void a()
                                                : void s();
                                        };
                                    return (
                                        (a = function () {
                                            o = requestAnimationFrame(u);
                                        })(),
                                        { disengage: s }
                                    );
                                },
                                Mi = {
                                    focusable: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = e.context,
                                            n = e.callback,
                                            i = e.area;
                                        if ("function" != typeof n) throw new TypeError("when/focusable requires options.callback to be a function");
                                        var r = fe({ label: "when/focusable", context: t }),
                                            o = ve(r),
                                            a = Ii({
                                                context: r,
                                                callback: function (e) {
                                                    return !!qt(e) && n(e);
                                                },
                                                area: i,
                                            }),
                                            s = function e() {
                                                o.removeEventListener("focus", e, !0), a && a.disengage();
                                            };
                                        return o.addEventListener("focus", s, !0), { disengage: s };
                                    },
                                    key: ni,
                                    visibleArea: Ii,
                                },
                                Ni = "undefined" != typeof window && window.ally,
                                _i = {
                                    element: on,
                                    event: gn,
                                    fix: Ln,
                                    get: In,
                                    is: Mn,
                                    maintain: ii,
                                    map: ri,
                                    observe: ci,
                                    query: di,
                                    style: ki,
                                    when: Mi,
                                    version: Ie,
                                    noConflict: function () {
                                        return "undefined" != typeof window && window.ally === this && (window.ally = Ni), this;
                                    },
                                };
                            t.exports = _i;
                        },
                        { "css.escape": 2, platform: 3 },
                    ],
                    2: [
                        function (e, n, i) {
                            (function (e) {
                                !(function (e, t) {
                                    "object" == _typeof(i) ? (n.exports = t(e)) : t(e);
                                })(void 0 !== e ? e : this, function (e) {
                                    if (e.CSS && e.CSS.escape) return e.CSS.escape;
                                    var t = function (e) {
                                        if (0 == arguments.length) throw new TypeError("`CSS.escape` requires an argument.");
                                        for (var t, n = String(e), i = n.length, r = -1, o = "", a = n.charCodeAt(0); ++r < i;)
                                            (t = n.charCodeAt(r)),
                                                (o +=
                                                    0 != t
                                                        ? (t >= 1 && 31 >= t) || 127 == t || (0 == r && t >= 48 && 57 >= t) || (1 == r && t >= 48 && 57 >= t && 45 == a)
                                                            ? "\\" + t.toString(16) + " "
                                                            : (0 == r && 1 == i && 45 == t) || !(t >= 128 || 45 == t || 95 == t || (t >= 48 && 57 >= t) || (t >= 65 && 90 >= t) || (t >= 97 && 122 >= t))
                                                                ? "\\" + n.charAt(r)
                                                                : n.charAt(r)
                                                        : "�");
                                        return o;
                                    };
                                    return e.CSS || (e.CSS = {}), (e.CSS.escape = t), t;
                                });
                            }.call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
                        },
                        {},
                    ],
                    3: [
                        function (e, n, i) {
                            (function (e) {
                                (function () {
                                    function t(e) {
                                        return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
                                    }
                                    function r(e) {
                                        return (e = c(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : t(e);
                                    }
                                    function o(e, t) {
                                        for (var n in e) x.call(e, n) && t(e[n], n, e);
                                    }
                                    function a(e) {
                                        return null == e ? t(e) : E.call(e).slice(8, -1);
                                    }
                                    function s(e, t) {
                                        var n = null != e ? _typeof(e[t]) : "number";
                                        return !(/^(?:boolean|number|string|undefined)$/.test(n) || ("object" == n && !e[t]));
                                    }
                                    function u(e) {
                                        return String(e).replace(/([ -])(?!$)/g, "$1?");
                                    }
                                    function l(e, t) {
                                        var n = null;
                                        return (
                                            (function (e, t) {
                                                var n = -1,
                                                    i = e ? e.length : 0;
                                                if ("number" == typeof i && i > -1 && p >= i) for (; ++n < i;) t(e[n], n);
                                                else o(e, t);
                                            })(e, function (i, r) {
                                                n = t(n, i, r, e);
                                            }),
                                            n
                                        );
                                    }
                                    function c(e) {
                                        return String(e).replace(/^ +| +$/g, "");
                                    }
                                    var d = { function: !0, object: !0 },
                                        f = (d["undefined" == typeof window ? "undefined" : _typeof(window)] && window) || this,
                                        m = f,
                                        v = d[_typeof(i)] && i,
                                        b = d[_typeof(n)] && n && !n.nodeType && n,
                                        h = v && b && "object" == _typeof(e) && e;
                                    !h || (h.global !== h && h.window !== h && h.self !== h) || (f = h);
                                    var p = Math.pow(2, 53) - 1,
                                        g = /\bOpera/,
                                        y = this,
                                        w = Object.prototype,
                                        x = w.hasOwnProperty,
                                        E = w.toString,
                                        S = (function e(t) {
                                            function n(e) {
                                                return l(e, function (e, n) {
                                                    var i = n.pattern || u(n);
                                                    return (
                                                        !e &&
                                                        (e = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) &&
                                                        ((e = String(n.label && !RegExp(i, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                                                            (n = n.label || n),
                                                            (e = r(
                                                                e[0]
                                                                    .replace(RegExp(i, "i"), n)
                                                                    .replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ")
                                                                    .replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2")
                                                            ))),
                                                        e
                                                    );
                                                });
                                            }
                                            var i = f,
                                                d = t && "object" == _typeof(t) && "String" != a(t);
                                            d && ((i = t), (t = null));
                                            var v = i.navigator || {},
                                                b = v.userAgent || "";
                                            t || (t = b);
                                            var h,
                                                p,
                                                w = d || y == m,
                                                x = d ? !!v.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(E.toString()),
                                                S = "Object",
                                                C = d ? S : "ScriptBridgingProxyObject",
                                                T = d ? S : "Environment",
                                                A = d && i.java ? "JavaPackage" : a(i.java),
                                                O = d ? S : "RuntimeObject",
                                                L = /\bJava/.test(A) && i.java,
                                                k = L && a(i.environment) == T,
                                                I = L ? "a" : "α",
                                                M = L ? "b" : "β",
                                                N = i.document || {},
                                                _ = i.operamini || i.opera,
                                                B = g.test((B = d && _ ? _["[[Class]]"] : a(_))) ? B : (_ = null),
                                                P = t,
                                                F = [],
                                                D = null,
                                                j = t == b,
                                                H = j && _ && "function" == typeof _.version && _.version(),
                                                R = l([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (e, n) {
                                                    return e || (RegExp("\\b" + (n.pattern || u(n)) + "\\b", "i").exec(t) && (n.label || n));
                                                }),
                                                W = l(
                                                    [
                                                        "Adobe AIR",
                                                        "Arora",
                                                        "Avant Browser",
                                                        "Breach",
                                                        "Camino",
                                                        "Epiphany",
                                                        "Fennec",
                                                        "Flock",
                                                        "Galeon",
                                                        "GreenBrowser",
                                                        "iCab",
                                                        "Iceweasel",
                                                        "K-Meleon",
                                                        "Konqueror",
                                                        "Lunascape",
                                                        "Maxthon",
                                                        { label: "Microsoft Edge", pattern: "Edge" },
                                                        "Midori",
                                                        "Nook Browser",
                                                        "PaleMoon",
                                                        "PhantomJS",
                                                        "Raven",
                                                        "Rekonq",
                                                        "RockMelt",
                                                        "SeaMonkey",
                                                        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                                                        "Sleipnir",
                                                        "SlimBrowser",
                                                        { label: "SRWare Iron", pattern: "Iron" },
                                                        "Sunrise",
                                                        "Swiftfox",
                                                        "WebPositive",
                                                        "Opera Mini",
                                                        { label: "Opera Mini", pattern: "OPiOS" },
                                                        "Opera",
                                                        { label: "Opera", pattern: "OPR" },
                                                        "Chrome",
                                                        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                                                        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                                                        { label: "Firefox for iOS", pattern: "FxiOS" },
                                                        { label: "IE", pattern: "IEMobile" },
                                                        { label: "IE", pattern: "MSIE" },
                                                        "Safari",
                                                    ],
                                                    function (e, n) {
                                                        return e || (RegExp("\\b" + (n.pattern || u(n)) + "\\b", "i").exec(t) && (n.label || n));
                                                    }
                                                ),
                                                q = n([
                                                    { label: "BlackBerry", pattern: "BB10" },
                                                    "BlackBerry",
                                                    { label: "Galaxy S", pattern: "GT-I9000" },
                                                    { label: "Galaxy S2", pattern: "GT-I9100" },
                                                    { label: "Galaxy S3", pattern: "GT-I9300" },
                                                    { label: "Galaxy S4", pattern: "GT-I9500" },
                                                    "Google TV",
                                                    "Lumia",
                                                    "iPad",
                                                    "iPod",
                                                    "iPhone",
                                                    "Kindle",
                                                    { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
                                                    "Nexus",
                                                    "Nook",
                                                    "PlayBook",
                                                    "PlayStation 3",
                                                    "PlayStation 4",
                                                    "PlayStation Vita",
                                                    "TouchPad",
                                                    "Transformer",
                                                    { label: "Wii U", pattern: "WiiU" },
                                                    "Wii",
                                                    "Xbox One",
                                                    { label: "Xbox 360", pattern: "Xbox" },
                                                    "Xoom",
                                                ]),
                                                G = l(
                                                    {
                                                        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                                                        Archos: {},
                                                        Amazon: { Kindle: 1, "Kindle Fire": 1 },
                                                        Asus: { Transformer: 1 },
                                                        "Barnes & Noble": { Nook: 1 },
                                                        BlackBerry: { PlayBook: 1 },
                                                        Google: { "Google TV": 1, Nexus: 1 },
                                                        HP: { TouchPad: 1 },
                                                        HTC: {},
                                                        LG: {},
                                                        Microsoft: { Xbox: 1, "Xbox One": 1 },
                                                        Motorola: { Xoom: 1 },
                                                        Nintendo: { "Wii U": 1, Wii: 1 },
                                                        Nokia: { Lumia: 1 },
                                                        Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                                                        Sony: { "PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1 },
                                                    },
                                                    function (e, n, i) {
                                                        return e || ((n[q] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(q)] || RegExp("\\b" + u(i) + "(?:\\b|\\w*\\d)", "i").exec(t)) && i);
                                                    }
                                                ),
                                                K = l(
                                                    [
                                                        "Windows Phone",
                                                        "Android",
                                                        "CentOS",
                                                        { label: "Chrome OS", pattern: "CrOS" },
                                                        "Debian",
                                                        "Fedora",
                                                        "FreeBSD",
                                                        "Gentoo",
                                                        "Haiku",
                                                        "Kubuntu",
                                                        "Linux Mint",
                                                        "OpenBSD",
                                                        "Red Hat",
                                                        "SuSE",
                                                        "Ubuntu",
                                                        "Xubuntu",
                                                        "Cygwin",
                                                        "Symbian OS",
                                                        "hpwOS",
                                                        "webOS ",
                                                        "webOS",
                                                        "Tablet OS",
                                                        "Linux",
                                                        "Mac OS X",
                                                        "Macintosh",
                                                        "Mac",
                                                        "Windows 98;",
                                                        "Windows ",
                                                    ],
                                                    function (e, n) {
                                                        var i = n.pattern || u(n);
                                                        return (
                                                            !e &&
                                                            (e = RegExp("\\b" + i + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) &&
                                                            (e = (function (e, t, n) {
                                                                var i = {
                                                                    "10.0": "10",
                                                                    6.4: "10 Technical Preview",
                                                                    6.3: "8.1",
                                                                    6.2: "8",
                                                                    6.1: "Server 2008 R2 / 7",
                                                                    "6.0": "Server 2008 / Vista",
                                                                    5.2: "Server 2003 / XP 64-bit",
                                                                    5.1: "XP",
                                                                    5.01: "2000 SP1",
                                                                    "5.0": "2000",
                                                                    "4.0": "NT",
                                                                    "4.90": "ME",
                                                                };
                                                                return (
                                                                    t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (i = i[/[\d.]+$/.exec(e)]) && (e = "Windows " + i),
                                                                    (e = String(e)),
                                                                    t && n && (e = e.replace(RegExp(t, "i"), n)),
                                                                    r(
                                                                        e
                                                                            .replace(/ ce$/i, " CE")
                                                                            .replace(/\bhpw/i, "web")
                                                                            .replace(/\bMacintosh\b/, "Mac OS")
                                                                            .replace(/_PowerPC\b/i, " OS")
                                                                            .replace(/\b(OS X) [^ \d]+/i, "$1")
                                                                            .replace(/\bMac (OS X)\b/, "$1")
                                                                            .replace(/\/(\d)/, " $1")
                                                                            .replace(/_/g, ".")
                                                                            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                                                                            .replace(/\bx86\.64\b/gi, "x86_64")
                                                                            .replace(/\b(Windows Phone) OS\b/, "$1")
                                                                            .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                                                                            .split(" on ")[0]
                                                                    )
                                                                );
                                                            })(e, i, n.label || n)),
                                                            e
                                                        );
                                                    }
                                                );
                                            if (
                                                (R && (R = [R]),
                                                    G && !q && (q = n([G])),
                                                    (h = /\bGoogle TV\b/.exec(q)) && (q = h[0]),
                                                    /\bSimulator\b/i.test(t) && (q = (q ? q + " " : "") + "Simulator"),
                                                    "Opera Mini" == W && /\bOPiOS\b/.test(t) && F.push("running in Turbo/Uncompressed mode"),
                                                    "IE" == W && /\blike iPhone OS\b/.test(t)
                                                        ? ((G = (h = e(t.replace(/like iPhone OS/, ""))).manufacturer), (q = h.product))
                                                        : /^iP/.test(q)
                                                            ? (W || (W = "Safari"), (K = "iOS" + ((h = / OS ([\d_]+)/i.exec(t)) ? " " + h[1].replace(/_/g, ".") : "")))
                                                            : "Konqueror" != W || /buntu/i.test(K)
                                                                ? (G && "Google" != G && ((/Chrome/.test(W) && !/\bMobile Safari\b/i.test(t)) || /\bVita\b/.test(q))) || (/\bAndroid\b/.test(K) && /^Chrome/.test(W) && /\bVersion\//i.test(t))
                                                                    ? ((W = "Android Browser"), (K = /\bAndroid\b/.test(K) ? K : "Android"))
                                                                    : "Silk" == W
                                                                        ? (/\bMobi/i.test(t) || ((K = "Android"), F.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && F.unshift("accelerated"))
                                                                        : "PaleMoon" == W && (h = /\bFirefox\/([\d.]+)\b/.exec(t))
                                                                            ? F.push("identifying as Firefox " + h[1])
                                                                            : "Firefox" == W && (h = /\b(Mobile|Tablet|TV)\b/i.exec(t))
                                                                                ? (K || (K = "Firefox OS"), q || (q = h[1]))
                                                                                : (!W || (h = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(W))) &&
                                                                                (W && !q && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(h + "/") + 8)) && (W = null),
                                                                                    (h = q || G || K) && (q || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(K)) && (W = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(K) ? K : h) + " Browser"))
                                                                : (K = "Kubuntu"),
                                                    H ||
                                                    (H = l(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", u(W), "(?:Firefox|Minefield|NetFront)"], function (e, n) {
                                                        return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null;
                                                    })),
                                                    (h =
                                                        ("iCab" == R && parseFloat(H) > 3 ? "WebKit" : /\bOpera\b/.test(W) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) ||
                                                        (/\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(R) && "WebKit") ||
                                                        (!R && /\bMSIE\b/i.test(t) && ("Mac OS" == K ? "Tasman" : "Trident")) ||
                                                        ("WebKit" == R && /\bPlayStation\b(?! Vita\b)/i.test(W) && "NetFront")) && (R = [h]),
                                                    "IE" == W && (h = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1])
                                                        ? ((W += " Mobile"), (K = "Windows Phone " + (/\+$/.test(h) ? h : h + ".x")), F.unshift("desktop mode"))
                                                        : /\bWPDesktop\b/i.test(t)
                                                            ? ((W = "IE Mobile"), (K = "Windows Phone 8.x"), F.unshift("desktop mode"), H || (H = (/\brv:([\d.]+)/.exec(t) || 0)[1]))
                                                            : "IE" != W && "Trident" == R && (h = /\brv:([\d.]+)/.exec(t)) && (W && F.push("identifying as " + W + (H ? " " + H : "")), (W = "IE"), (H = h[1])),
                                                    j)
                                            ) {
                                                if (s(i, "global"))
                                                    if ((L && ((P = (h = L.lang.System).getProperty("os.arch")), (K = K || h.getProperty("os.name") + " " + h.getProperty("os.version"))), w && s(i, "system") && (h = [i.system])[0])) {
                                                        K || (K = h[0].os || null);
                                                        try {
                                                            (h[1] = i.require("ringo/engine").version), (H = h[1].join(".")), (W = "RingoJS");
                                                        } catch (e) {
                                                            h[0].global.system == i.system && (W = "Narwhal");
                                                        }
                                                    } else "object" == _typeof(i.process) && !i.process.browser && (h = i.process) ? ((W = "Node.js"), (P = h.arch), (K = h.platform), (H = /[\d.]+/.exec(h.version)[0])) : k && (W = "Rhino");
                                                else
                                                    a((h = i.runtime)) == C
                                                        ? ((W = "Adobe AIR"), (K = h.flash.system.Capabilities.os))
                                                        : a((h = i.phantom)) == O
                                                            ? ((W = "PhantomJS"), (H = (h = h.version || null) && h.major + "." + h.minor + "." + h.patch))
                                                            : "number" == typeof N.documentMode &&
                                                            (h = /\bTrident\/(\d+)/i.exec(t)) &&
                                                            ((H = [H, N.documentMode]), (h = +h[1] + 4) != H[1] && (F.push("IE " + H[1] + " mode"), R && (R[1] = ""), (H[1] = h)), (H = "IE" == W ? String(H[1].toFixed(1)) : H[0]));
                                                K = K && r(K);
                                            }
                                            H &&
                                                (h = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(H) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (j && v.appMinorVersion)) || (/\bMinefield\b/i.test(t) && "a")) &&
                                                ((D = /b/i.test(h) ? "beta" : "alpha"), (H = H.replace(RegExp(h + "\\+?$"), "") + ("beta" == D ? M : I) + (/\d+\+?/.exec(h) || ""))),
                                                "Fennec" == W || ("Firefox" == W && /\b(?:Android|Firefox OS)\b/.test(K))
                                                    ? (W = "Firefox Mobile")
                                                    : "Maxthon" == W && H
                                                        ? (H = H.replace(/\.[\d.]+/, ".x"))
                                                        : /\bXbox\b/i.test(q)
                                                            ? ((K = null), "Xbox 360" == q && /\bIEMobile\b/.test(t) && F.unshift("mobile mode"))
                                                            : (!/^(?:Chrome|IE|Opera)$/.test(W) && (!W || q || /Browser|Mobi/.test(W))) || ("Windows CE" != K && !/Mobi/i.test(t))
                                                                ? "IE" == W && j && null === i.external
                                                                    ? F.unshift("platform preview")
                                                                    : (/\bBlackBerry\b/.test(q) || /\bBB10\b/.test(t)) && (h = (RegExp(q.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || H)
                                                                        ? ((K = ((h = [h, /BB10/.test(t)])[1] ? ((q = null), (G = "BlackBerry")) : "Device Software") + " " + h[0]), (H = null))
                                                                        : this != o &&
                                                                        "Wii" != q &&
                                                                        ((j && _) ||
                                                                            (/Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(t)) ||
                                                                            ("Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(K)) ||
                                                                            ("IE" == W && ((K && !/^Win/.test(K) && H > 5.5) || (/\bWindows XP\b/.test(K) && H > 8) || (8 == H && !/\bTrident\b/.test(t))))) &&
                                                                        !g.test((h = e.call(o, t.replace(g, "") + ";"))) &&
                                                                        h.name &&
                                                                        ((h = "ing as " + h.name + ((h = h.version) ? " " + h : "")),
                                                                            g.test(W)
                                                                                ? (/\bIE\b/.test(h) && "Mac OS" == K && (K = null), (h = "identify" + h))
                                                                                : ((h = "mask" + h), (W = B ? r(B.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"), /\bIE\b/.test(h) && (K = null), j || (H = null)),
                                                                            (R = ["Presto"]),
                                                                            F.push(h))
                                                                : (W += " Mobile"),
                                                (h = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) &&
                                                ((h = [parseFloat(h.replace(/\.(\d)$/, ".0$1")), h]),
                                                    "Safari" == W && "+" == h[1].slice(-1)
                                                        ? ((W = "WebKit Nightly"), (D = "alpha"), (H = h[1].slice(0, -1)))
                                                        : (H == h[1] || H == (h[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (H = null),
                                                    (h[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1]),
                                                    537.36 == h[0] && 537.36 == h[2] && parseFloat(h[1]) >= 28 && "WebKit" == R && (R = ["Blink"]),
                                                    j && (x || h[1])
                                                        ? (R && (R[1] = "like Chrome"),
                                                            (h =
                                                                h[1] ||
                                                                (530 > (h = h[0])
                                                                    ? 1
                                                                    : 532 > h
                                                                        ? 2
                                                                        : 532.05 > h
                                                                            ? 3
                                                                            : 533 > h
                                                                                ? 4
                                                                                : 534.03 > h
                                                                                    ? 5
                                                                                    : 534.07 > h
                                                                                        ? 6
                                                                                        : 534.1 > h
                                                                                            ? 7
                                                                                            : 534.13 > h
                                                                                                ? 8
                                                                                                : 534.16 > h
                                                                                                    ? 9
                                                                                                    : 534.24 > h
                                                                                                        ? 10
                                                                                                        : 534.3 > h
                                                                                                            ? 11
                                                                                                            : 535.01 > h
                                                                                                                ? 12
                                                                                                                : 535.02 > h
                                                                                                                    ? "13+"
                                                                                                                    : 535.07 > h
                                                                                                                        ? 15
                                                                                                                        : 535.11 > h
                                                                                                                            ? 16
                                                                                                                            : 535.19 > h
                                                                                                                                ? 17
                                                                                                                                : 536.05 > h
                                                                                                                                    ? 18
                                                                                                                                    : 536.1 > h
                                                                                                                                        ? 19
                                                                                                                                        : 537.01 > h
                                                                                                                                            ? 20
                                                                                                                                            : 537.11 > h
                                                                                                                                                ? "21+"
                                                                                                                                                : 537.13 > h
                                                                                                                                                    ? 23
                                                                                                                                                    : 537.18 > h
                                                                                                                                                        ? 24
                                                                                                                                                        : 537.24 > h
                                                                                                                                                            ? 25
                                                                                                                                                            : 537.36 > h
                                                                                                                                                                ? 26
                                                                                                                                                                : "Blink" != R
                                                                                                                                                                    ? "27"
                                                                                                                                                                    : "28")))
                                                        : (R && (R[1] = "like Safari"), (h = 400 > (h = h[0]) ? 1 : 500 > h ? 2 : 526 > h ? 3 : 533 > h ? 4 : 534 > h ? "4+" : 535 > h ? 5 : 537 > h ? 6 : 538 > h ? 7 : 601 > h ? 8 : "8")),
                                                    R && (R[1] += " " + (h += "number" == typeof h ? ".x" : /[.+]/.test(h) ? "" : "+")),
                                                    "Safari" == W && (!H || parseInt(H) > 45) && (H = h)),
                                                "Opera" == W && (h = /\bzbov|zvav$/.exec(K))
                                                    ? ((W += " "), F.unshift("desktop mode"), "zvav" == h ? ((W += "Mini"), (H = null)) : (W += "Mobile"), (K = K.replace(RegExp(" *" + h + "$"), "")))
                                                    : "Safari" == W && /\bChrome\b/.exec(R && R[1]) && (F.unshift("desktop mode"), (W = "Chrome Mobile"), (H = null), /\bOS X\b/.test(K) ? ((G = "Apple"), (K = "iOS 4.3+")) : (K = null)),
                                                H && 0 == H.indexOf((h = /[\d.]+$/.exec(K))) && t.indexOf("/" + h + "-") > -1 && (K = c(K.replace(h, ""))),
                                                R &&
                                                !/\b(?:Avant|Nook)\b/.test(W) &&
                                                (/Browser|Lunascape|Maxthon/.test(W) ||
                                                    ("Safari" != W && /^iOS/.test(K) && /\bSafari\b/.test(R[1])) ||
                                                    (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(W) && R[1])) &&
                                                (h = R[R.length - 1]) &&
                                                F.push(h),
                                                F.length && (F = ["(" + F.join("; ") + ")"]),
                                                G && q && q.indexOf(G) < 0 && F.push("on " + G),
                                                q && F.push((/^on /.test(F[F.length - 1]) ? "" : "on ") + q),
                                                K &&
                                                ((h = / ([\d.+]+)$/.exec(K)),
                                                    (p = h && "/" == K.charAt(K.length - h[0].length - 1)),
                                                    (K = {
                                                        architecture: 32,
                                                        family: h && !p ? K.replace(h[0], "") : K,
                                                        version: h ? h[1] : null,
                                                        toString: function () {
                                                            var e = this.version;
                                                            return this.family + (e && !p ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                                                        },
                                                    })),
                                                (h = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P)) && !/\bi686\b/i.test(P)
                                                    ? (K && ((K.architecture = 64), (K.family = K.family.replace(RegExp(" *" + h), ""))),
                                                        W && (/\bWOW64\b/i.test(t) || (j && /\w(?:86|32)$/.test(v.cpuClass || v.platform) && !/\bWin64; x64\b/i.test(t))) && F.unshift("32-bit"))
                                                    : K && /^OS X/.test(K.family) && "Chrome" == W && parseFloat(H) >= 39 && (K.architecture = 64),
                                                t || (t = null);
                                            var V = {};
                                            return (
                                                (V.description = t),
                                                (V.layout = R && R[0]),
                                                (V.manufacturer = G),
                                                (V.name = W),
                                                (V.prerelease = D),
                                                (V.product = q),
                                                (V.ua = t),
                                                (V.version = W && H),
                                                (V.os = K || {
                                                    architecture: null,
                                                    family: null,
                                                    version: null,
                                                    toString: function () {
                                                        return "null";
                                                    },
                                                }),
                                                (V.parse = e),
                                                (V.toString = function () {
                                                    return this.description || "";
                                                }),
                                                V.version && F.unshift(H),
                                                V.name && F.unshift(W),
                                                K && W && (K != String(K).split(" ")[0] || (K != W.split(" ")[0] && !q)) && F.push(q ? "(" + K + ")" : "on " + K),
                                                F.length && (V.description = F.join(" ")),
                                                V
                                            );
                                        })();
                                    v && b
                                        ? o(S, function (e, t) {
                                            v[t] = e;
                                        })
                                        : (f.platform = S);
                                }.call(this));
                            }.call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
                        },
                        {},
                    ],
                },
                {},
                [1]
            )(1);
        }.call(this, n(2)));
    },
    function (e, t, n) {
        n(3), (e.exports = n(4));
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        n.r(t);
        var r = { bodyNoScrollClass: "drawerr-no-scroll", drawerOpenClass: "drawerr--open", toggleBtnActiveClass: "drawerr-btn--active", slideFromClass: "drawerr-slide-from-right" },
            o = { btnText: "MENU", drawerr: "#drawerr", navbar: "header", toggleBtn: ".toggleDrawerr", slideFrom: "left", preventBodyOnClick: !1 },
            a = (function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.settings = r),
                        (this.options = Object.assign(o, t)),
                        (this.openEvent = new Event("drawerr-open")),
                        (this.closeEvent = new Event("drawerr-close")),
                        (this.body = document.querySelector("body")),
                        (this.drawerr = document.querySelector(this.options.drawerr)),
                        (this.toggleBtn = document.querySelector(this.options.toggleBtn)),
                        (this.navbar = document.querySelector(this.options.navbar)),
                        this.beforeVisible(),
                        this.drawerr.classList.remove("drawerr--init"),
                        this.drawerr.classList.add("drawerr"),
                        this.toggleBtn.classList.add("drawerr-btn"),
                        this.events();
                }
                var t, n;
                return (
                    (t = e),
                    (n = [
                        {
                            key: "beforeVisible",
                            value: function () {
                                this.setSlideFromDirection(), this.drawerrOffsetTop(), this.insertHamburgerText();
                            },
                        },
                        {
                            key: "drawerrOffsetTop",
                            value: function () {
                                this.drawerr.style.top = o.navbar.offsetHeight + "px";
                            },
                        },
                        {
                            key: "setSlideFromDirection",
                            value: function () {
                                "right" === o.slideFrom && this.drawerr.classList.add(this.settings.slideFromClass);
                            },
                        },
                        {
                            key: "events",
                            value: function () {
                                var e = this;
                                this.toggleBtn.addEventListener("click", function () {
                                    e.toggleDrawer();
                                }),
                                    document.addEventListener("click", function (t) {
                                        e.bodyClick(t);
                                    }),
                                    (window.onresize = function (t) {
                                        e.onResize();
                                    });
                            },
                        },
                        {
                            key: "toggleDrawer",
                            value: function () {
                                this.addOrRemoveClass(this.body, this.settings.bodyNoScrollClass),
                                    this.addOrRemoveClass(this.drawerr, this.settings.drawerOpenClass),
                                    this.addOrRemoveClass(this.toggleBtn, this.settings.toggleBtnActiveClass),
                                    this.dispatchEvents();
                            },
                        },
                        {
                            key: "onResize",
                            value: function () {
                                this.drawerrOffsetTop();
                            },
                        },
                        {
                            key: "bodyClick",
                            value: function (e) {
                                this.toggleBtn.contains(e.target) ||
                                    this.options.preventBodyOnClick ||
                                    (!this.drawerr.contains(e.target) && document.querySelector(o.drawerr).classList.contains(this.settings.drawerOpenClass) && this.toggleDrawer());
                            },
                        },
                        {
                            key: "dispatchEvents",
                            value: function () {
                                this.drawerr.classList.contains(this.settings.drawerOpenClass) ? document.dispatchEvent(this.openEvent) : document.dispatchEvent(this.closeEvent);
                            },
                        },
                        {
                            key: "addOrRemoveClass",
                            value: function (e, t) {
                                if (e.classList.contains(t)) return e.classList.remove(t);
                                e.classList.add(t);
                            },
                        },
                        {
                            key: "insertHamburgerText",
                            value: function () {
                                0 !== o.btnText.length && (this.toggleBtn.classList.add("drawerr-btn--has-menu-text"), this.toggleBtn.insertAdjacentHTML("beforeend", '<span class="drawerr-btn__menu-text">'.concat(o.btnText, "</span>")));
                            },
                        },
                    ]) && i(t.prototype, n),
                    e
                );
            })(),
            s = n(0);
        function u(e) {
            return (u =
                "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
                    ? function (e) {
                        return _typeof(e);
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
                    })(e);
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function c(e, t, n) {
            return (c =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                        var i = (function (e, t) {
                            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                            return e;
                        })(e, t);
                        if (i) {
                            var r = Object.getOwnPropertyDescriptor(i, t);
                            return r.get ? r.get.call(n) : r.value;
                        }
                    })(e, t, n || e);
        }
        function d(e) {
            return (d = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
        }
        function f(e, t) {
            return (f =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        var m = {
            activeSubmenu: !1,
            submenus: !1,
            links: !1,
            navigationTextClass: "drawerr-navigation",
            hasSubmenuClass: "drawerr-item-has-submenu",
            submenuClass: "drawerr-submenu",
            submenuActiveClass: "drawerr-submenu--active",
            navigationContainerClass: "drawerr-navigation-container",
            hiddenClass: "hidden",
            noHashLinkClass: "drawer-item-hashlink",
            subMenuLinkClass: "drawerr-submenu-link",
        },
            v = { navigationText: "", toggleBtnAriaLabel: "navigation", closeMenuBtnLabel: "Close menu", showOnLoad: !1 },
            b = (function (e) {
                function t(e) {
                    var n;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (n = (function (e, t) {
                            return !t || ("object" !== u(t) && "function" != typeof t)
                                ? (function (e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(e)
                                : t;
                        })(this, d(t).call(this, e)));
                    var i = v.navigationText,
                        r = v.toggleBtnAriaLabel,
                        o = v.closeMenuBtnLabel,
                        a = v.showOnLoad;
                    return (
                        (n.options.navigationText = e.navigationText || i),
                        (n.options.toggleBtnAriaLabel = e.toggleBtnAriaLabel || r),
                        (n.options.closeMenuBtnLabel = e.closeMenuBtnLabel || o),
                        (n.options.showOnLoad = e.showOnLoad || a),
                        (n.multilevelSettings = m),
                        n.drawerr.classList.add("drawerr-multilevel"),
                        (n.tabHandle = !1),
                        (n.links = n.drawerr.querySelectorAll("a")),
                        n.insertNavigation(),
                        n.insertCloseMenu(),
                        (n.navigation = document.querySelector(".".concat(n.multilevelSettings.navigationTextClass))),
                        (n.navigationText = n.navigation.querySelector(".".concat(n.multilevelSettings.navigationTextClass, "__text"))),
                        (n.navigationIcon = document.querySelector(".".concat(n.multilevelSettings.navigationTextClass, "__icon"))),
                        (n.linkActiveClass = "drawerr-link--active"),
                        (n.multilevelSettings.submenus = n.drawerr.querySelectorAll("ul li ul")),
                        n.addClassToSubmenus(),
                        n.bindLinks(),
                        n.navigationOnClick(),
                        n.bindOnClose(),
                        n.toggleBtn.setAttribute("aria-expanded", "false"),
                        n.toggleBtn.setAttribute("aria-label", n.options.toggleBtnAriaLabel),
                        n.options.showOnLoad && n.toggleDrawer(),
                        n
                    );
                }
                var n, i;
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
                    })(t, a),
                    (n = t),
                    (i = [
                        {
                            key: "toggleDrawer",
                            value: function () {
                                c(d(t.prototype), "toggleDrawer", this).call(this),
                                    this.toggleBtn.classList.contains("drawerr-btn--active")
                                        ? (this.toggleBtn.setAttribute("aria-expanded", "true"), this.drawerr.querySelector("ul a").focus(), this.tabHandle || (this.tabHandle = s.maintain.tabFocus({ context: ".drawerr-container" })))
                                        : (this.removeActiveClassFromLinks(),
                                            this.toggleBtn.setAttribute("aria-expanded", "false"),
                                            (this.multilevelSettings.activeSubmenu = !1),
                                            this.toggleBtn.focus(),
                                            this.tabHandle.disengage(),
                                            (this.tabHandle = !1));
                            },
                        },
                        {
                            key: "insertNavigation",
                            value: function () {
                                (this.navigationContainer = document.querySelector(".".concat(this.multilevelSettings.navigationContainerClass))),
                                    null === this.navigationContainer &&
                                    ((this.navigationContainer = this.drawerr.insertAdjacentHTML("afterbegin", '<div class="'.concat(this.multilevelSettings.navigationContainerClass, '"></div>'))),
                                        (this.navigationContainer = document.querySelector(".".concat(this.multilevelSettings.navigationContainerClass)))),
                                    this.navigationContainer.insertAdjacentHTML(
                                        "afterbegin",
                                        ' <a tabIndex="-1" class="'
                                            .concat(this.multilevelSettings.navigationTextClass, '" href="#"><span class="')
                                            .concat(this.multilevelSettings.navigationTextClass, "__icon ")
                                            .concat(this.multilevelSettings.hiddenClass, '"></span><span class="')
                                            .concat(this.multilevelSettings.navigationTextClass, '__text">')
                                            .concat(this.options.navigationText, "</span></a>")
                                    );
                            },
                        },
                        {
                            key: "insertCloseMenu",
                            value: function () {
                                null !== this.navigationContainer &&
                                    (this.navigationContainer.insertAdjacentHTML("afterbegin", '<button id="js-sr-close-menu" class="sr-only sr-only-focusable">'.concat(this.options.closeMenuBtnLabel, "</button>")),
                                        this.closeMenuOnClick());
                            },
                        },
                        {
                            key: "addClassToSubmenus",
                            value: function () {
                                var e = this;
                                Array.prototype.forEach.call(this.multilevelSettings.submenus, function (t) {
                                    t.classList.add(e.multilevelSettings.submenuClass);
                                });
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                var e = this;
                                setTimeout(function () {
                                    e.removeActiveClassFromSubmenus(), e.setNavigationText(e.options.navigationText), e.hideShowNavigationIcon();
                                }, 300);
                            },
                        },
                        {
                            key: "bindOnClose",
                            value: function () {
                                var e = this;
                                document.addEventListener("drawerr-close", this.reset.bind(this)),
                                    document.addEventListener("keydown", function (t) {
                                        27 === t.keyCode && e.drawerr.classList.contains("drawerr--open") && e.toggleDrawer();
                                    });
                            },
                        },
                        {
                            key: "bindLinks",
                            value: function () {
                                var e = this,
                                    t = this.drawerr.querySelectorAll("ul a");
                                t.length &&
                                    Array.prototype.forEach.call(t, function (t) {
                                        var n = t.parentElement;
                                        n.children.item(n.children.length - 1).classList.contains(e.multilevelSettings.submenuClass) &&
                                            (t.classList.add(e.multilevelSettings.hasSubmenuClass), "#" !== t.getAttribute("href") && e.addSubmenuLink(t)),
                                            t.addEventListener("click", e.linkOnClick.bind(e));
                                    });
                            },
                        },
                        {
                            key: "addSubmenuLink",
                            value: function (e) {
                                var t = document.createElement("a");
                                e.parentElement.classList.add(this.multilevelSettings.noHashLinkClass),
                                    t.setAttribute("class", this.multilevelSettings.subMenuLinkClass),
                                    e.insertAdjacentElement("afterend", t),
                                    t.addEventListener("click", this.linkOnClick.bind(this));
                            },
                        },
                        {
                            key: "linkOnClick",
                            value: function (e) {
                                var t = this,
                                    n = e.target,
                                    i = n.parentElement.querySelector(".".concat(this.multilevelSettings.submenuClass)),
                                    r = !1,
                                    o = "";
                                if ((this.navigationContainer.scrollIntoView(), n.classList.add(this.linkActiveClass), n.classList.contains(this.multilevelSettings.subMenuLinkClass) && (r = n.previousSibling), null !== i)) {
                                    if (r) o = r.textContent;
                                    else if (((o = n.textContent), "#" !== n.getAttribute("href"))) return !1;
                                    this.navigation.setAttribute("tabIndex", 0),
                                        i.classList.add(this.multilevelSettings.submenuActiveClass),
                                        this.setNavigationText(o),
                                        (this.multilevelSettings.activeSubmenu = i),
                                        setTimeout(function () {
                                            t.multilevelSettings.activeSubmenu.querySelector("li a").focus();
                                        }, 600),
                                        this.hideShowNavigationIcon("show");
                                }
                            },
                        },
                        {
                            key: "navigationOnClick",
                            value: function () {
                                var e = this;
                                this.navigation.addEventListener("click", function (t) {
                                    t.preventDefault(),
                                        e.multilevelSettings.activeSubmenu &&
                                        (e.removeActiveClassFromLinks(),
                                            e.multilevelSettings.activeSubmenu.classList.remove(e.multilevelSettings.submenuActiveClass),
                                            (e.multilevelSettings.activeSubmenu = e.multilevelSettings.activeSubmenu.parentElement.parentElement),
                                            e.multilevelSettings.activeSubmenu.classList.contains("drawerr-submenu--active")
                                                ? e.setNavigationText(e.multilevelSettings.activeSubmenu.parentElement.querySelector("a").textContent)
                                                : (e.hideShowNavigationIcon(e.multilevelSettings.hiddenClass), e.setNavigationText(e.options.navigationText), e.navigation.setAttribute("tabindex", -1)));
                                });
                            },
                        },
                        {
                            key: "closeMenuOnClick",
                            value: function () {
                                var e = this;
                                document.querySelector("#js-sr-close-menu").addEventListener("click", function () {
                                    e.toggleDrawer();
                                });
                            },
                        },
                        {
                            key: "removeActiveClassFromLinks",
                            value: function () {
                                var e = this;
                                this.links.length > 0 &&
                                    this.links.forEach(function (t) {
                                        t.classList.remove(e.linkActiveClass);
                                    });
                            },
                        },
                        {
                            key: "removeActiveClassFromSubmenus",
                            value: function () {
                                var e = this;
                                this.multilevelSettings.submenus.length > 0 &&
                                    Array.prototype.forEach.call(this.multilevelSettings.submenus, function (t) {
                                        t.classList.remove(e.multilevelSettings.submenuActiveClass);
                                    });
                            },
                        },
                        {
                            key: "setNavigationText",
                            value: function (e) {
                                this.navigationText.textContent = e;
                            },
                        },
                        {
                            key: "hideShowNavigationIcon",
                            value: function (e) {
                                "show" === e ? this.navigationIcon.classList.remove(this.multilevelSettings.hiddenClass) : this.navigationIcon.classList.add(this.multilevelSettings.hiddenClass);
                            },
                        },
                    ]) && l(n.prototype, i),
                    t
                );
            })();
        (t.default = { Drawerr: a, DrawerrMultilevel: b }), (window.drawerr = a), (window.drawerrMultilevel = b);
    },
    function (e, t) { },
]);
