!function (m, g) {
    "use strict";
    var r = "position", b = "absolute", o = "relative", F = "px", f = "left", i = "right", $ = "top", z = "bottom",
        a = "display", Z = "none", s = "block", p = ht.Default, q = p.getInternal(), M = Math.floor, y = Math.ceil,
        w = Math.PI, d = null, B = m.parseInt, Y = function (Q) {
            return Q.getContext("2d")
        }, l = function () {
            return document
        }, H = function (U) {
            return l().createElement(U)
        }, V = function () {
            return H("canvas")
        }, D = function (F, v, A) {
            F.style.setProperty(v, A, d)
        }, Q = function (n, Y, d) {
            p.def(ht.widget[n], Y, d)
        }, S = function (i, X) {
            i.appendChild(X)
        }, O = function (k, Y) {
            k.removeChild(Y)
        }, A = function (n, U, I, Y) {
            n.addEventListener(U, I, !!Y)
        }, t = function (r, u, v, S) {
            r.removeEventListener(u, v, !!S)
        };
    ht.widget.RulerFrame = function (Z) {
        var O = this, X = O._view = q.createView(null, O), i = O.$1k = V(), G = O.$2k = V(), j = O.$3k = V(),
            g = O.$4k = V();
        O._defaultRulerConfig = {
            size: 20,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#888",
            defaultMajorTickSpacing: 50,
            minMajorTickSpacing: 10,
            minPhysicalMajorTickSpacing: 40,
            maxPhysicalMajorTickSpacing: 100,
            tickSpacingAdaptable: !0,
            majorTickTextFont: "12px Arial",
            majorTickTextColor: "#666",
            majorTickColor: "#888",
            minorTickColor: "#ccc",
            background: "rgba(0,0,0,0)",
            guideColor: "rgb(0, 173, 239)",
            guideWidth: 2,
            guideVisible: !1,
            guideTipVisible: !1,
            guideTipBorderColor: "#666",
            guideTipTextColor: "#666",
            guideTipTextFont: "12px Arial",
            guideTipBackground: "#fff"
        }, O._topRulerConfig = {visible: !0}, O._rightRulerConfig = {visible: !1}, O._bottomRulerConfig = {visible: !1}, O._leftRulerConfig = {visible: !0}, S(X, i), S(X, j), S(X, G), S(X, g), D(X, r, o), D(X, "box-sizing", "border-box"), D(X, "-moz-box-sizing", "border-box"), D(i, r, b), D(G, r, b), D(j, r, b), D(g, r, b), O.$14k = function () {
            O.$13k = 1, O.iv()
        }, O.$15k = function (A) {
            if (O._topRulerConfig.guideVisible || O._rightRulerConfig.guideVisible || O._bottomRulerConfig.guideVisible || O._leftRulerConfig.guideVisible || O._defaultRulerConfig.guideVisible || (O._topRulerConfig.guideTipVisible || O._rightRulerConfig.guideTipVisible || O._bottomRulerConfig.guideTipVisible || O._leftRulerConfig.guideTipVisible || O._defaultRulerConfig.guideTipVisible) && O._component) {
                var s = X.getBoundingClientRect();
                O.$16k = {x: A.clientX - s.left, y: A.clientY - s.top}, O.$5k()
            }
        }, O.setComponent(Z)
    }, Q("RulerFrame", g, {
        ms_v: 1,
        ms_fire: 1,
        ms_ac: ["defaultRulerConfig", "topRulerConfig", "rightRulerConfig", "bottomRulerConfig", "leftRulerConfig", "component"],
        setComponent: function ($) {
            var I = this, j = I._component, w = I.getView();
            if (w) {
                if (I._component = $, I.fp("component", j, $), j) {
                    var R = I.getComponentView(j);
                    O(w, R), t(w, "mousemove", I.$15k), I.removeComponentPropertyChangeListener(j, I.$14k)
                }
                if ($) {
                    var L = I.getComponentView($);
                    S(w, L), D(L, r, b), A(w, "mousemove", I.$15k), I.addComponentPropertyChangeListener($, I.$14k)
                }
            }
        },
        addComponentPropertyChangeListener: function (G, r) {
            G && G.mp && G.mp(r)
        },
        removeComponentPropertyChangeListener: function (k, s) {
            k && k.ump && k.ump(s)
        },
        getComponentHZoom: function (a) {
            return a && a.getZoom ? a.getZoom() : 1
        },
        getComponentVZoom: function (b) {
            return b && b.getZoom ? b.getZoom() : 1
        },
        getComponentViewRect: function (I) {
            return I && I.getViewRect ? I.getViewRect() : void 0
        },
        getComponentView: function (S) {
            return S && S.getView ? S.getView() : S
        },
        invalidateComponent: function (J) {
            J && J.iv && J.iv()
        },
        validateComponent: function (t) {
            t && t.validate && t.validate()
        },
        $7k: function (i, F, G, Q, V, r, X, L, K, v, R, U) {
            if (F.visible) {
                var x = this._defaultRulerConfig, h = "borderStyle", g = "borderColor", c = "borderWidth",
                    T = "background", m = F[h] || x[h], u = F[g] || x[g], J = F[c] || x[c],
                    $ = F.size != d ? F.size : x.size, k = F[T] || x[T], t = $ + J,
                    y = this.$6k(J, m, u, i, G, V, t, X, L, K, v, R, U);
                D(i, V, "0px"), r ? q.setCanvas(i, Q - y, $) : q.setCanvas(i, $, Q - y), D(i, "background", k), D(i, a, s)
            } else D(i, a, Z), D(this.getComponentView(this._component), V, "0px")
        },
        $6k: function (t, B, G, z, P, a, N, R, W, L, S, r, s) {
            var m = 0;
            return D(z, P, t + "px " + B + " " + G), D(this.getComponentView(this._component), a, N + F), R ? (D(z, W, L + F), m += L) : D(z, W, "0px"), S ? (D(z, r, s + F), m += s) : D(z, r, "0px"), m
        },
        validateImpl: function () {
            var v = this, K = v._component, N = v.$1k, I = v.$2k, O = v.$3k, x = v.$4k, D = v._view,
                F = v._defaultRulerConfig, c = v._topRulerConfig, h = v._rightRulerConfig, P = v._bottomRulerConfig,
                E = v._leftRulerConfig, Z = F.size;
            if (D && K) {
                var C = c.size != d ? c.size : Z, L = h.size != d ? h.size : Z, H = P.size != d ? P.size : Z,
                    U = E.size != d ? E.size : Z;
                v.$7k(N, c, "border-bottom", D.offsetWidth, $, !0, E.visible, f, U, h.visible, i, L), v.$7k(I, h, "border-left", D.offsetHeight, i, !1, c.visible, $, C, P.visible, z, H), v.$7k(O, P, "border-top", D.offsetWidth, z, !0, E.visible, f, U, h.visible, i, L), v.$7k(x, E, "border-right", D.offsetHeight, f, !1, c.visible, $, C, P.visible, z, H), v.$13k ? delete v.$13k : v.invalidateComponent(K), v.validateComponent(K), v.$5k()
            }
        },
        $5k: function () {
            function L(S, G, L, h, T, f) {
                if (G.visible) {
                    var M = Y(S), t = G[K] || O, U = G[V] != d ? G[V] : m, X = G[A] || a, k = G[B] || I,
                        _ = G.size != d ? G.size : n, Hq = G[y] || b, Kp = G[C] || W, $l = G[J] || j,
                        Tq = G[o] != d ? G[o] : E, Ni = G[F] != d ? G[F] : e, mj = G[w] != d ? G[w] : D,
                        Hp = G[r] != d ? G[r] : P, An = G[z] != d ? G[z] : g, Bf = G[$] != d ? G[$] : p,
                        Zi = G[Q] || Yj, Ln = G[R] || uj;
                    U && (t = u[f] = u.$8k(u[f] || t, G[i] || N, G[v] || H, h ? s : Z, Kp)), L.call(u, M, q, c, l, x, _, h ? s : Z, t, X, k, T, Hq, $l);
                    var nf = u.$16k;
                    (Tq || Ni) && nf && (h ? u.$9k(M, nf.x, _, Zi, Ln, Tq, Ni, mj, Hp, An, Bf) : u.$10k(M, nf.y, _, Zi, Ln, Tq, Ni, mj, Hp, An, Bf, T))
                }
            }

            var u = this, k = u.$1k, G = u.$2k, t = u.$3k, M = u.$4k, U = u._topRulerConfig, h = u._rightRulerConfig,
                _ = u._bottomRulerConfig, f = u._leftRulerConfig, X = u._defaultRulerConfig, S = u._component,
                T = u.getComponentViewRect(S), s = u.getComponentHZoom(S), Z = u.getComponentVZoom(S), q = T.x * s,
                l = q + T.width * s, c = T.y * Z, x = c + T.height * Z, n = u._defaultRulerConfig.size,
                K = "defaultMajorTickSpacing", i = "maxPhysicalMajorTickSpacing", v = "minPhysicalMajorTickSpacing",
                V = "tickSpacingAdaptable", A = "majorTickTextFont", B = "majorTickTextColor", y = "majorTickColor",
                J = "minorTickColor", o = "guideVisible", F = "guideTipVisible", w = "guideTipBorderColor",
                r = "guideTipTextColor", z = "guideTipTextFont", $ = "guideTipBackground", Q = "guideColor",
                R = "guideWidth", C = "minMajorTickSpacing", O = X[K], N = X[i], H = X[v], m = X[V], a = X[A], I = X[B],
                b = X[y], W = X[C], j = X[J], E = X[o], e = X[F], D = X[w], P = X[r], g = X[z], p = X[$], Yj = X[Q],
                uj = X[R];
            u._view && S && (L(k, U, u.$11k, !0, !1, "_currentTopMajorTickSpacing"), L(G, h, u.$12k, !1, !0, "_currentRightMajorTickSpacing"), L(t, _, u.$11k, !0, !0, "_currentBottomMajorTickSpacing"), L(M, f, u.$12k, !1, !1, "_currenLeftMajorTickSpacing"))
        },
        $8k: function (X, j, i, J, A) {
            return i > X * J ? X = M(j / J / A) * A : X * J > j && (X = y(i / J / A) * A), X
        },
        getHTipText: function (b) {
            var T = this, X = T._component, R = 0, q = T._view.getBoundingClientRect();
            return X.lp ? R = B(X.lp({x: b.x + q.left, y: b.y}).x) : R -= B(this.getComponentView(X).style.left) || 0, R
        },
        $9k: function (m, c, n, h, E, i, D, M, G, o, y) {
            var k = this, F = k._component;
            m.save(), q.translateAndScale(m, 0, 0, 1);
            var a = c - (B(this.getComponentView(F).style.left) || 0), $ = 0;
            if (c = k.getHTipText(k.$16k), i && (m.beginPath(), m.fillStyle = h, m.rect(a, $, E, n), m.fill()), D) {
                m.beginPath(), m.textAlign = "center", m.textBaseline = "middle", m.font = o;
                var W = m.measureText(c).width + 6;
                m.fillStyle = y, m.rect(a - W / 2, $, W, n), m.fill(), m.strokeStyle = M, m.stroke(), m.beginPath(), m.fillStyle = G, m.fillText(c, a, $ + n / 2)
            }
            m.restore()
        },
        getVTipText: function (j) {
            var D = this, C = D._component, P = 0, a = D._view.getBoundingClientRect();
            return C.lp ? P = B(C.lp({x: j.x, y: j.y + a.top}).y) : P -= B(this.getComponentView(C).style.top) || 0, P
        },
        formatScaleText: function (N) {
            return Math.round(N)
        },
        $10k: function (k, O, S, d, A, x, n, t, e, X, U, P) {
            var I = this, m = I._component;
            k.save(), q.translateAndScale(k, 0, 0, 1);
            var o = S / 2, v = O - (B(this.getComponentView(m).style.top) || 0);
            if (O = I.getVTipText(I.$16k), x && (k.beginPath(), k.fillStyle = d, k.rect(o - S / 2, v, S, A), k.fill()), n) {
                k.translate(o, v), k.rotate((P ? 90 : -90) * w / 180), k.translate(-o, -v), k.beginPath(), k.textAlign = "center", k.textBaseline = "middle", k.font = X;
                var L = k.measureText(O).width + 6;
                k.fillStyle = U, k.rect(o - L / 2, v - S / 2, L, S), k.fill(), k.strokeStyle = t, k.stroke(), k.fillStyle = e, k.fillText(O, o, v)
            }
            k.restore()
        },
        $11k: function (c, d, H, $, j, n, z, u, W, R, A, I, t) {
            c.save(), H = 0;
            var T = d, F = $, E = (T + F) / 2;
            d = 0, $ = F - T, q.translateAndScale(c, 0, 0, 1);
            var O = 0, p = 0, X = B(n / 2), f = n - X, C = A ? 0 : X, U = u * z, a = U / 10;
            d -= U, $ += U, c.clearRect(d, 0, $ - d, n), c.beginPath(), c.fillStyle = t;
            var o = M(E / a) * a - T;
            for (O = o; $ > O; O += a) c.rect(O, H + C, 1, f);
            for (O = o; O > d; O -= a) c.rect(O, H + C, 1, f);
            for (c.fill(), C = A ? 0 : 1, c.beginPath(), c.fillStyle = I, o = M(E / U) * U - T, O = o; $ > O; O += U) c.rect(O, H + C, 1, n - 1);
            for (O = o; O > d; O -= U) c.rect(O, H + C, 1, n - 1);
            c.fill();
            var Q = B(/\d+px/.exec(W)[0]), g = (Q || 10) / 2;
            c.textBaseline = "middle", C = A ? n - g - 2 : g + 2, c.beginPath(), c.fillStyle = R, c.font = W;
            var N = M(E / U) * U / z;
            for (O = o, p = N; $ > O; O += U, p += u) {
                var D = this.getHScaleText ? this.getHScaleText(O) : p;
                c.fillText(this.formatScaleText(D), O + 2, H + C)
            }
            for (O = o, p = N; O > d; O -= U, p -= u) {
                var D = this.getHScaleText ? this.getHScaleText(O) : p;
                c.fillText(this.formatScaleText(D), O + 2, H + C)
            }
            c.restore()
        },
        $12k: function (X, i, r, y, J, F, V, x, h, G, C, e, R) {
            function m(t, $, V, b, F, x) {
                F = S.getVScaleText ? S.getVScaleText(V) : F, F = S.formatScaleText(F), X.translate(t + $, V), X.rotate(-b), X.translate(-t - $, -V), X.fillText(F, t + $ + (x ? 2 : 1), V), X.translate(t + $, V), X.rotate(b), X.translate(-t - $, -V)
            }

            X.save(), i = 0;
            var P = r, N = J, b = (P + N) / 2;
            r = 0, J = N - P, q.translateAndScale(X, 0, 0, 1);
            var Y = 0, S = this, z = 0, g = B(F / 2), l = F - g, A = C ? 0 : g, s = x * V, k = s / 10;
            r -= s, J += s, X.clearRect(i, 0, F, J - r), X.beginPath(), X.fillStyle = R;
            var f = M(b / k) * k - P;
            for (Y = f; J > Y; Y += k) X.rect(i + A, Y, l, 1);
            for (Y = f; Y > r; Y -= k) X.rect(i + A, Y, l, 1);
            for (X.fill(), A = C ? 0 : 1, X.beginPath(), X.fillStyle = e, f = M(b / s) * s - P, Y = f; J > Y; Y += s) X.rect(i + A, Y, F - 1, 1);
            for (Y = f; Y > r; Y -= s) X.rect(i + A, Y, F - 1, 1);
            X.fill();
            var p = B(/\d+px/.exec(h)[0]), $ = (p || 10) / 2, n = 90 * w / 180;
            X.textBaseline = "middle", A = C ? F - $ : $ + 2, n = C ? -n : n, X.beginPath(), X.fillStyle = G, X.font = h;
            var _ = M(b / s) * s / V;
            for (Y = f, z = _; J > Y; Y += s, z += x) m(i, A, Y, n, z, C);
            for (Y = f, z = _; Y > r; Y -= s, z -= x) m(i, A, Y, n, z, C);
            X.restore()
        },
        onPropertyChanged: function () {
            this.iv()
        },
        dispose: function () {
            var e = this, i = e._component, Y = e._view;
            i && e.removeComponentPropertyChangeListener(i, e.$14k), Y && (t(Y, "mousemove", e.$15k), O(Y.parentNode, Y), e._view = null)
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);