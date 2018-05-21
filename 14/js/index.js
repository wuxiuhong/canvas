!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e()
}(0, function () {
    "use strict";

    function t(t, e, i, n, o, a) {
        var r = t.getContext("2d");
        return r.save(), e = e || 0, i = i || 0, n = n || 1, a = a || ht.Default.devicePixelRatio, r.translate(e * a, i * a), 1 !== (n *= a) && r.scale(n, n), o && (r.beginPath(), r.rect(o.x, o.y, o.width, o.height), r.clip(), r.clearRect(o.x, o.y, o.width, o.height)), r
    }

    var e = function t(e) {
        t.superClass.constructor.call(this)
    };
    ht.Default.def(e, ht.ui.drawable.Drawable, {
        ms_ac: ["borderColor"], draw: function (t, e, i, n, o, a, r) {
            var s = this, h = a.getRootContext(r), d = s.getBorderColor();
            h.beginPath(), h.rect(t, e + n - 1, i, 1), h.fillStyle = d, h.fill(), h.beginPath(), h.rect(t, e - 1, i, 1), h.fillStyle = d, h.fill(), h.beginPath(), ht.Default.drawStretchImage(h, ht.Default.getImage(a.isExpanded() ? "panel_expand" : "panel_collapse"), "centerUniform", t + 8, e, 14, n)
        }, getSerializableProperties: function () {
            var t = e.superClass.getSerializableProperties.call(this);
            return addMethod(t, {separatorColor: !0})
        }
    });
    var i = function t() {
        var i = this;
        t.superClass.constructor.call(this), this.setHeaderBackgroundDrawable(new e("#d8d9d8")), this.setBorder(null), this.setTitleColor("#fff"), this.setCollapsable(!1), this.setHeaderPaddingLeft(28), this.setIconWidth(16), this.setIconHeight(16), this.setExpanded(!1), this.getView().addEventListener("mousedown", function (t) {
            i.lp(t).y < i.getHeaderHeight() && i.setExpanded(!i.isExpanded())
        })
    };
    ht.Default.def(i, ht.ui.Panel, {});
    var n = function t(e) {
        t.superClass.constructor.call(this), this._initWidth = e
    };
    ht.Default.def(n, ht.ui.ViewGroup, {
        ms_ac: ["direction", "itemWidth", "itemHeight"],
        __direction: "row",
        __itemWidth: 60,
        __itemHeight: 50,
        figurePreferredSize: function () {
            var t = this, e = t.getVisibleChildren(), i = {
                width: t.getPaddingLeft() + t.getPaddingRight() + t.getBorderLeft() + t.getBorderRight(),
                height: t.getPaddingTop() + t.getPaddingBottom() + t.getBorderTop() + t.getBorderBottom()
            };
            if (e.size() > 0) {
                var n = e.get(0).getWidth(), o = e.get(0).getHeight(), a = Math.ceil(e.size() * n / this._initWidth);
                i.height += o * a
            }
            return i
        },
        validateImpl: function (t, e, i, n) {
            for (var o = this, a = o.getVisibleChildren(), r = a.size(), s = t, h = e, d = 0, u = this.getItemHeight(), c = this.getItemWidth(), l = 0; l < r; l++) {
                var g = a.get(l), f = (g.getPreferredSize(), o.getChildLayoutParams(g) || {}), y = f.marginLeft || 0,
                    v = f.marginRight || 0, p = f.marginTop || 0, x = f.marginBottom || 0;
                d = Math.max(d, u + p + x), s + c + y + v > t + i && (s = t, h += d, d = 0), o.layoutChild(g, s + y, h + p, c, u), s += y + c + v
            }
        }
    });
    var o = ht.Default.setImage;
    o("panel_expand", {
        width: 14,
        height: 8,
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "#229cfc",
            rotation: 3.14159,
            points: [.51889, 1.81612, 6.61586, 6.61586, 13.102, 1.6864]
        }]
    }), o("panel_collapse", {
        width: 14,
        height: 8,
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "#8b8b8b",
            points: [.51889, 1.81612, 6.61586, 6.61586, 13.102, 1.6864]
        }]
    }), o("defaultEdgeArrow", {
        width: 12,
        height: 10,
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "#979797",
            closePath: !0,
            points: [0, .06095, 0, 10.05746, 11.94704, 5.0592]
        }]
    }), o("textBox", {
        dataBindings: [{
            attr: "TBContent",
            valueType: "Multiline",
            name: "TBContent"
        }, {attr: "TBFontSize", valueType: "PositiveNumber", name: "TBFontSize"}, {
            attr: "TBAlign",
            valueType: "Align",
            name: "TBTextAlign"
        }, {attr: "TBColor", valueType: "Color", name: "TBColor"}, {
            attr: "TBLineHeight",
            valueType: "PositiveNumber",
            name: "TBLineHeight"
        }, {attr: "TBBackground", valueType: "Color", name: "TBBackground"}, {
            attr: "TBPadding",
            valueType: "String",
            name: "TBPadding",
            description: "like CSS"
        }],
        width: {
            func: function (t) {
                return t.getHost() ? t.getHost().getWidth() : t._width
            }
        },
        height: {
            func: function (t) {
                return t.getHost() ? t.getHost().getHeight() : t._height
            }
        },
        fitSize: !0,
        clip: !0,
        comps: [{
            type: "components/textBox.json",
            displayName: "textBox",
            rect: [0, 0, 1, 1],
            relative: !0,
            content: {func: "attr@TBContent", value: "HT 2D Editor"},
            fontSize: {func: "attr@TBFontSize", value: 14},
            textAlign: {func: "attr@TBAlign", value: "center"},
            color: {func: "attr@TBColor", value: "rgb(0,0,0)"},
            lineHeight: {func: "attr@TBLineHeight", value: 18},
            background: {func: "attr@TBBackground", value: null},
            padding: {func: "attr@TBPadding", value: "5"}
        }]
    }), o("edgeText", {
        dataBindings: [{attr: "edge.text.background", valueType: "Color"}, {
            attr: "edge.text",
            valueType: "String"
        }, {attr: "edge.text.font", valueType: "String"}], width: 100, height: 20, fitSize: !0, comps: [{
            type: "rect", background: {func: "attr@edge.text.background", value: "rgb(255,255,255)"},
            borderColor: "#979797",
            rect: [0, 0, 100, 20]
        }, {
            type: "text",
            text: {func: "attr@edge.text", value: "12"},
            align: "center",
            font: {func: "attr@edge.text.font", value: "12px arial, sans-serif"},
            rect: [0, 0, 100, 20]
        }]
    }), o("menuIconUndo", {
        width: 16,
        height: 16,
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            shadowColor: "#1ABC9C",
            points: [9.9945, 5.006, 6.0345, 5.006, 6.0345, 3.527, 6.0345, 3.336, 5.9255, 3.162, 5.7545, 3.078, 5.5825, 2.994, 5.3785, 3.015, 5.2275, 3.132, 2.4795, 5.264, 2.3575, 5.359, 2.2865, 5.505, 2.2865, 5.659, 2.2865, 5.813, 2.3575, 5.959, 2.4795, 6.054, 5.2275, 8.186, 5.3175, 8.256, 5.4255, 8.292, 5.5345, 8.292, 5.6095, 8.292, 5.6845, 8.275, 5.7545, 8.241, 5.9255, 8.157, 6.0345, 7.983, 6.0345, 7.792, 6.0345, 6.006, 9.9945, 6.006, 11.5445, 6.006, 12.7135, 7.296, 12.7135, 9.006, 12.7135, 10.689, 11.4815, 12.006, 9.9085, 12.006, 5.0345, 12.006, 4.7585, 12.006, 4.5345, 12.23, 4.5345, 12.506, 4.5345, 12.782, 4.7585, 13.006, 5.0345, 13.006, 9.9085, 13.006, 12.0425, 13.006, 13.7135, 11.249, 13.7135, 9.006, 13.7135, 6.763, 12.0795, 5.006, 9.9945, 5.006, 9.9945, 5.006],
            segments: [1, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2]
        }]
    }), o("menuIconRedo", {
        width: 16,
        height: 16,
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            shadowColor: "#1ABC9C",
            scaleX: -1,
            points: [9.9945, 5.006, 6.0345, 5.006, 6.0345, 3.527, 6.0345, 3.336, 5.9255, 3.162, 5.7545, 3.078, 5.5825, 2.994, 5.3785, 3.015, 5.2275, 3.132, 2.4795, 5.264, 2.3575, 5.359, 2.2865, 5.505, 2.2865, 5.659, 2.2865, 5.813, 2.3575, 5.959, 2.4795, 6.054, 5.2275, 8.186, 5.3175, 8.256, 5.4255, 8.292, 5.5345, 8.292, 5.6095, 8.292, 5.6845, 8.275, 5.7545, 8.241, 5.9255, 8.157, 6.0345, 7.983, 6.0345, 7.792, 6.0345, 6.006, 9.9945, 6.006, 11.5445, 6.006, 12.7135, 7.296, 12.7135, 9.006, 12.7135, 10.689, 11.4815, 12.006, 9.9085, 12.006, 5.0345, 12.006, 4.7585, 12.006, 4.5345, 12.23, 4.5345, 12.506, 4.5345, 12.782, 4.7585, 13.006, 5.0345, 13.006, 9.9085, 13.006, 12.0425, 13.006, 13.7135, 11.249, 13.7135, 9.006, 13.7135, 6.763, 12.0795, 5.006, 9.9945, 5.006, 9.9945, 5.006],
            segments: [1, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2]
        }]
    }), o("editor.rulers", {
        width: 16,
        height: 16,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(0,0,0)",
            points: [4, 1.45949, 4.00511, 4.00511, 1.49343, 4.00511, 1.52737, 14.49307, 1.52737, 12.04928, 4.00511, 12.04928, 1.52737, 12.04928, 1.49343, 1.45949, 14.49307, 1.45949, 12, 1.45949, 12.01533, 4.00511, 12.01533, 1.45949]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(0,0,0)",
            borderCap: "round",
            points: [14.01789, 6.00767, 14.01789, 14.01789, 6, 14]
        }]
    });
    var a = {
            SIDEBAR_BG_COLOR: "#f7f7f7",
            SIDEBAR_BORDER_COLOR: "#f7f7f7",
            SIDEBAR_TITLE_TC: "#8B8B8B",
            SIDEBAR_TITLE_TF: "14px bold verdana, arial, tahoma, helvetica, sans-serif",
            TOOLBAR_BG: "#f7f7f7",
            TAB_BTN_BG: "#f7f7f7",
            TAB_BTN_BG_ACTIVE: "#f1f1f1",
            TAB_BTN_BG_HOVER: "#f1f1f1",
            TAB_BTN_TC: "#8b8b8b",
            TAB_BTN_TC_HOVER: "#8b8b8b",
            TAB_BTN_TC_ACTIVE: "#0099FF",
            SIDBAR_WIDTH: 240
        }, r = {
            checkSize: 7,
            rotationCheckSize: 5,
            rectPointSize: 8,
            rectBackgroundColor: "#fff",
            rectBorderColor: "#97cbff",
            rectDashPattern: [8, 8],
            editBorderColor: "#c6a09f",
            tipBackgroundColor: "#333333",
            tipTextColor: "#ffffff",
            tipOpacity: .6,
            rotatePointOffset: 14,
            rotateClockMinSize: 50,
            edgePointSize: 8,
            defaultEdgeColor: "#111",
            textareaPadding: 4,
            minDrawEdgeDistance: 20
        }, s = {
            STATE_NORMAL: "normal",
            STATE_HOVER: "hover",
            STATE_ACTIVE: "active",
            SELECT_TARGET: "selectTarget",
            ET_TEXT: 1,
            ET_EDGE: 2,
            ET_NULL: null
        }, h = [{
            groupId: "basic",
            title: "基本流程图形",
            graphs: ["rect", "diamond", "round-rect", "parallelogram", "cone"]
        }, {groupId: "other", title: "其他图形", graphs: ["star", "angel"]}], d = {mainColor: "#45c4f9"}, u = new ht.Notifier,
        c = new ht.Notifier, l = function t(e) {
            t.superClass.constructor.call(this, e)
        };
    ht.Default.def(l, ht.ui.Interactor, {
        handle_mouseenter: function (t) {
            ht.Default.preventDefault(t), this.getComponent().setState(s.STATE_HOVER)
        }, handle_mouseleave: function (t) {
            ht.Default.preventDefault(t), this.getComponent().setState(s.STATE_NORMAL)
        }, handle_mousedown: function (t) {
            t.preventDefault();
            var e = this.getComponent();
            e.forSelect ? c.fire({
                kind: s.SELECT_TARGET,
                data: e
            }) : ht.ui.DragHelper.doDrag(e, {}, e.getImage(), -e.getWidth() / 2, -e.getHeight() / 2)
        }
    });
    var g = function t() {
        t.superClass.constructor.call(this)
    };
    ht.Default.def(g, ht.ui.View, {
        ui_ac: ["image", "state", "drawable:hoverBackground"],
        __width: 60,
        __height: 50,
        __state: s.STATE_NORMAL,
        __hoverBackground: "#c3edf8",
        setUpInteractors: function () {
            g.superClass.setUpInteractors.call(this);
            var t = this._interactor;
            t || (t = this._interactor = new l(this)).addListeners()
        },
        figurePreferredSize: function () {
            return {
                width: this.getPaddingLeft() + this.getPaddingRight() + this.getBorderLeft() + this.getBorderRight(),
                height: this.getPaddingTop() + this.getPaddingBottom() + this.getBorderTop() + this.getBorderBottom()
            }
        },
        drawBackground: function (t, e, i, n, o, a) {
            t = this.getCurrentBackgroundDrawable(), g.superClass.drawBackground.call(this, t, e, i, n, o, a)
        },
        getCurrentBackgroundDrawable: function () {
            return this.getState() === s.STATE_NORMAL ? this.getBackgroundDrawable() : s.STATE_HOVER ? this.getHoverBackgroundDrawable() : void 0
        },
        validateImpl: function (t, e, i, n) {
            var o = this.getRootContext(), a = this.getImage();
            ht.Default.drawStretchImage(o, ht.Default.getImage(a), "uniform", t, e, i, n, null, this)
        }
    });
    var f = new ht.ui.VBoxLayout;
    !function (t) {
        h.forEach(function (e) {
            var o = new i, r = new n(a.SIDBAR_WIDTH);
            o.setTitle(e.title), o.setTitleColor(a.SIDEBAR_TITLE_TC), o.setTitleFont(a.SIDEBAR_TITLE_TF), o.setExpanded(!0), r.setPadding([0, 0, 10, 0]), r.setItemHeight(50), r.setItemWidth(60), e.graphs.forEach(function (t) {
                var i = new g;
                // ht.Default.setImage(t, "./symbols/" + t + ".json"), i.setImage(t), i.setPadding([0, 5, 0, 5]), i.groupId = e.groupId, r.addView(i, {marginTop: 3})
            }), o.setContentView(r), t.addView(o, {width: "match_parent", height: "wrap_content"})
        })
    }(f);
    var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, v = (function () {
        function t(t) {
            this.value = t
        }

        function e(e) {
            function i(o, a) {
                try {
                    var r = e[o](a), s = r.value;
                    s instanceof t ? Promise.resolve(s.value).then(function (t) {
                        i("next", t)
                    }, function (t) {
                        i("throw", t)
                    }) : n(r.done ? "return" : "normal", r.value)
                } catch (t) {
                    n("throw", t)
                }
            }

            function n(t, e) {
                switch (t) {
                    case"return":
                        o.resolve({value: e, done: !0});
                        break;
                    case"throw":
                        o.reject(e);
                        break;
                    default:
                        o.resolve({value: e, done: !1})
                }
                (o = o.next) ? i(o.key, o.arg) : a = null
            }

            var o, a;
            this._invoke = function (t, e) {
                return new Promise(function (n, r) {
                    var s = {key: t, arg: e, resolve: n, reject: r, next: null};
                    a ? a = a.next = s : (o = a = s, i(t, e))
                })
            }, "function" != typeof e.return && (this.return = void 0)
        }

        "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function () {
            return this
        }), e.prototype.next = function (t) {
            return this._invoke("next", t)
        }, e.prototype.throw = function (t) {
            return this._invoke("throw", t)
        }, e.prototype.return = function (t) {
            return this._invoke("return", t)
        }
    }(), function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }), p = function () {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e
        }
    }(), x = function t(e, i, n) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, i);
        if (void 0 === o) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : t(a, i, n)
        }
        if ("value" in o) return o.value;
        var r = o.get;
        if (void 0 !== r) return r.call(n)
    }, _ = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }, m = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }, b = function () {
        function t(t, e) {
            var i = [], n = !0, o = !1, a = void 0;
            try {
                for (var r, s = t[Symbol.iterator](); !(n = (r = s.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0) ;
            } catch (t) {
                o = !0, a = t
            } finally {
                try {
                    !n && s.return && s.return()
                } finally {
                    if (o) throw a
                }
            }
            return i
        }

        return function (e, i) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), w = function t(e) {
        v(this, t), this.pane = e
    }, T = [{id: "paper", label: "图纸"}, {id: "icon", label: "图标"}, {id: "comps", label: "组件"}, {
        id: "resource",
        label: "资源"
    }], k = new (function (t) {
        function e() {
            v(this, e);
            var t = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, new ht.ui.HBoxLayout));
            return t.addTabButtons(), t.addListener(), t
        }

        return _(e, w), p(e, [{
            key: "addTabButtons", value: function () {
                var t = this, e = this.pane;
                T.forEach(function (i) {
                    var n = new ht.ui.Button;
                    n.setCursor("pointer"), n.setText(i.label), t._resetTabBtnStyle(n), n.addViewListener(function (e) {
                        "click" === e.kind && t._activeTabBtn !== n && (t._activeTabBtn && t._resetTabBtnStyle(t._activeTabBtn), n.setBackground(a.TAB_BTN_BG_ACTIVE), n.setTextColor(a.TAB_BTN_TC_ACTIVE), n.setHoverTextColor(a.TAB_BTN_TC_ACTIVE), t._activeTabBtn = n)
                    }), e.addView(n, {width: 48, height: 32, vAlign: "middle"})
                })
            }
        }, {
            key: "_resetTabBtnStyle", value: function (t) {
                t.setTextColor(a.TAB_BTN_TC), t.setHoverTextColor(a.TAB_BTN_TC_HOVER), t.setActiveTextColor(a.TAB_BTN_TC_ACTIVE), t.setBackground(a.TAB_BTN_BG), t.setActiveBackground(a.TAB_BTN_BG_ACTIVE), t.setHoverBackground(a.TAB_BTN_BG_HOVER)
            }
        }, {
            key: "addListener", value: function () {
                var t = this;
                u.add(function (e) {
                    "load" === e && t._delaySetZIndex()
                }), this.pane.addViewListener(function (e) {
                    t._delaySetZIndex()
                })
            }
        }, {
            key: "_delaySetZIndex", value: function () {
                var t = this;
                setTimeout(function () {
                    t.pane.getView().style.zIndex = 100
                }, 20)
            }
        }]), e
    }()), S = [{
        icon: "menuIconUndo", onClick: function () {
            console.log("TODO undo")
        }
    }, {
        icon: "menuIconRedo", onClick: function () {
            console.log("TODO redo")
        }
    }], I = [{
        icon: "editor.rulers", onClick: function () {
            this.getIconDrawable().setColorTint(d.mainColor)
        }
    }], E = (new (function () {
        function t() {
            v(this, t), this.init()
        }

        return p(t, [{
            key: "init", value: function () {
                var t = this, e = this.wrap = new ht.ui.RelativeLayout;
                e.setBackground("#fff");
                var i = new ht.ui.HBoxLayout;
                S.forEach(function (e, n) {
                    var o = t.createBtn(e);
                    i.addView(o, {width: 28, height: 28, vAlign: "middle", marginRight: 4})
                }), e.addView(i, {
                    align: "left",
                    vAlign: "top",
                    width: 32 * i.getChildren().size(),
                    height: "match_parent"
                });
                var n = new ht.ui.HBoxLayout;
                n.setAlign("right"), I.forEach(function (e, i) {
                    var o = t.createBtn(e);
                    n.addView(o, {width: 28, height: 28, vAlign: "middle", marginRight: 4})
                }), e.addView(n, {
                    align: "right",
                    vAlign: "top",
                    width: 32 * n.getChildren().size(),
                    height: "match_parent"
                })
            }
        }, {
            key: "createBtn", value: function (t) {
                var e = new ht.ui.Button;
                return e.setBackground(null), e.setActiveBackground("#ebebeb"), e.setHoverBackground("#ebebeb"), e.setIconDrawable(new ht.ui.drawable.ImageDrawable(t.icon, "centerUniform", "#111111")), e.addViewListener(function (e) {
                    "click" === e.kind && t.onClick && t.onClick.call(e.target)
                }), e
            }
        }]), t
    }()), new ht.ui.VBoxLayout);
    E.addView(k.pane, {
        width: "match_parent",
        height: 32
    }), E.getView().style.boxShadow = "0 4px 7px #ddd", E.getView().style.backgroundColor = a.TOOLBAR_BG, E.setZIndex(100);
    var P = "T", B = "R", C = "B", M = "L", R = "x", D = "sub", A = "add", L = Math.abs, z = Math.max,
        O = ht.Default.getInternal(), H = {
            directionList: [P, B, C, M], getDirection: function (t, e, i, n) {
                var o = void 0, a = void 0;
                o = i < .2 ? P : i > .8 ? C : e > .8 ? B : e < .2 ? M : C, a = this.directionList.indexOf(o);
                var r = n.getRotation();
                if (r) {
                    var s = (a + Math.floor((r / (2 * Math.PI) * 360 + 45) / 90)) % this.directionList.length;
                    o = this.directionList[s]
                }
                return o
            }, copyPoint: function (t) {
                return {x: t.x, y: t.y}
            }, getSourcePoint: function (t, e) {
                return O.getEdgeAgentPosition(t, e.getSourceAgent(), e.s("edge.source.position"), e.s("edge.source.offset.x"), e.s("edge.source.offset.y"), e.s("edge.source.anchor.x"), e.s("edge.source.anchor.y"))
            }, getTargetPoint: function (t, e) {
                return O.getEdgeAgentPosition(t, e.getTargetAgent(), e.s("edge.target.position"), e.s("edge.target.offset.x"), e.s("edge.target.offset.y"), e.s("edge.target.anchor.x"), e.s("edge.target.anchor.y"))
            }, add: function (t, e, i) {
                t[e] += i
            }, sub: function (t, e, i) {
                t[e] -= i
            }, move: function (t, e, i, n) {
                this[i](t, e, n)
            }, gen: function (t, e) {
                var i = this.getSourcePoint(e, t), n = this.getTargetPoint(e, t), o = t.getSourceAgent().getRect(),
                    a = t.getTargetAgent().getRect(), r = t.getSourceAgent(), s = t.getTargetAgent(),
                    h = this.getDirection(t, t.s("edge.source.anchor.x"), t.s("edge.source.anchor.y"), t.getSourceAgent()),
                    d = this.getDirection(t, t.s("edge.target.anchor.x"), t.s("edge.target.anchor.y"), t.getTargetAgent()),
                    u = this.points = [];
                return r === s ? this.genSameImpl(i, n, o, a, h, d) : this.genDiffImpl(i, n, o, a, h, d), this.edge = t, u.unshift(i), u.push(n), new ht.List(u)
            }, genSameImpl: function (t, e, i, n, o, a) {
                for (var r = t, s = this.gatherInfo(a), h = b(s, 2), d = h[0], u = h[1], c = this.gatherInfo(o), l = b(c, 2), g = l[0], f = l[1], y = g === d && u !== f, v = o, p = void 0, x = 0; x < 4; x++) {
                    var _ = this.gatherInfo(v), m = b(_, 2);
                    if (g = m[0], f = m[1], 0 === x) if (p = 26, y) {
                        var w = (this.directionList.indexOf(o) + 3) % this.directionList.length;
                        v = this.directionList[w]
                    } else v = a; else if (1 === x) p = g === R ? .5 * i.width + 26 : .5 * i.height + 26, v = this.getReverseDirection(o); else if (2 === x) if (y) {
                        var T = (this.directionList.indexOf(o) + 1) % this.directionList.length;
                        v = this.directionList[T], p = (g === R ? i.width : i.height) + 52
                    } else p = L(g === R ? r.x - e.x : r.y - e.y); else if (3 === x) {
                        if (!y) break;
                        p = L(g === R ? r.x - e.x : r.y - e.y)
                    }
                    r = this.copyPoint(r), this.move(r, g, f, p), this.points.push(r)
                }
            }, genDiffImpl: function (t, e, i, n, o, a) {
                if (!ht.Default.containsPoint(i, e) && !ht.Default.containsPoint(n, t)) {
                    var r = void 0, s = this.getReverseDirection(a), h = t, d = o, u = A, c = 26, l = .5 * i.width,
                        g = .5 * n.width, f = .5 * i.height, y = .5 * n.height, v = void 0, p = void 0, x = void 0,
                        _ = void 0, m = 0, w = void 0, T = this.gatherInfo(a), k = b(T, 2), S = k[0], I = k[1];
                    do {
                        if (d === s && (d === P && h.y > e.y && h.x === e.x || d === C && h.y < e.y && h.x === e.x || d === B && h.x < e.x && h.y === e.y || d === M && h.x > e.x && h.y === e.y)) break;
                        var E = this.gatherInfo(d), O = b(E, 2);
                        r = O[0], u = O[1], w = !1, v = h.x - e.x, p = h.y - e.y, d === P || d === C ? (x = {
                            s: f,
                            t: y,
                            o: p,
                            max: z(f, y)
                        }, _ = {s: l, t: g, o: v, max: z(l, g)}) : (_ = {s: f, t: y, o: p, max: z(f, y)}, x = {
                            s: l,
                            t: g,
                            o: v,
                            max: z(l, g)
                        });
                        var H = (h = this.copyPoint(h))[S] >= e[S] && I === D, V = h[S] <= e[S] && I === A;
                        if (u === D) if (r === S) if (h[r] > e[r] && _.t < L(_.o) && d === a) c = h[r] - (e[r] - 26); else if (h[r] > e[r] && d === s && L(x.o) > x.s) {
                            if (w = !0, 0 === m) c = .5 * L(x.o); else if (1 === m || 2 === m) {
                                var N = L(x.o) - x.s;
                                c = N > 26 ? h[r] - e[r] - 26 : x.s + .5 * N
                            }
                        } else c = 0 === m && o === s && h[r] > e[r] ? .5 * L(x.o) : 26; else c = (H || V) && h[r] - n[r] - 2 * x.t > 0 && h[r] - n[r] - 2 * x.t <= 34 ? .5 * (h[r] - n[r] - 2 * x.t) : (H || V) && x.o + x.t >= L(x.o) && L(x.o) - x.t >= 8 && L(x.o) - x.t - x.s > 0 ? .5 * (L(x.o) - x.t - x.s) + x.s : (H || V) && x.o + x.t >= 26 && L(x.o) - x.t < 8 ? x.o + 26 + x.t : H || V ? 26 : h[r] - e[r]; else if (r === S) if (h[r] < e[r] && _.t < L(_.o) && d === a) c = e[r] - h[r] + 26; else if (h[r] < e[r] && d === s && L(x.o) > x.s) {
                            if (w = !0, 0 === m) c = .5 * L(x.o); else if (1 === m || 2 === m) {
                                var W = L(x.o) - x.s;
                                c = W > 26 ? e[r] - h[r] - 26 : x.s + .5 * W
                            }
                        } else c = 0 === m && o === s && h[r] < e[r] ? .5 * L(x.o) : 26; else c = (H || V) && n[r] - h[r] > 0 && n[r] - h[r] <= 34 ? .5 * (n[r] - h[r]) : (H || V) && x.o - x.t <= 26 && L(x.o) - x.t >= 8 && L(x.o) - x.t - x.s > 0 ? .5 * (L(x.o) - x.t - x.s) + x.s : (H || V) && x.o - x.t <= 26 && L(x.o) - x.t < 8 ? x.t + 26 - x.o : H || V ? 26 : e[r] - h[r];
                        if (c = c < 0 ? 26 : c, r === R) if (_.s >= L(_.o) && _.t >= L(_.o) && d === a) d = h.y > e.y ? C : P; else if (0 === m && (V || H) && _.s + _.t + 1.6 >= L(t.y - e.y) && r === S) {
                            d = h.y > e.y ? C : P;
                            var G = this.copyPoint(h);
                            this.move(G, r, u, c), d = I === A && G.x > e.x || I === D && G.x < e.x ? h.y > e.y ? P : C : h.y > e.y ? C : P
                        } else d = 0 === m && _.s >= L(_.o) && (u === A && h[r] - 2 * x.s >= e[r] || u === D && h[r] <= e[r] - 2 * x.s) ? I === A ? C : P : h.y === e.y && r !== S ? a : h.y > e.y ? P : C; else if (_.s >= L(_.o) && _.t >= L(_.o) && d === a) d = h.x > e.x ? B : M; else if (0 === m && (V || H) && _.s + _.t >= L(t.x - e.x) && r === S) {
                            var j = this.copyPoint(h);
                            this.move(j, r, u, c), d = I === A && j.y > e.y || I === D && j.y < e.y ? h.x > e.x ? M : B : h.x > e.x ? B : M
                        } else d = 0 === m && _.s >= L(_.o) && (u === A && h[r] - 2 * x.s >= e[r] || u === D && h[r] <= e[r] - 2 * x.s) ? I === A ? B : M : h.x === e.x && r !== S ? a : h.x > e.x ? M : B;
                        if (1 === m && this.getReverseDirection(o) === d && x.s >= c && !w && (c = x.s + 26), 2 === m) {
                            var K = this.gatherInfo(d), U = b(K, 2), F = U[0], X = U[1], q = this.copyPoint(h);
                            this.move(q, r, u, c), this.move(q, F, X, 35), ht.Default.containsPoint(i, q) && (c = .5 * L(x.o) - x.s > 26 || ht.Default.intersectsRect(i, n) || u === D && h[r] - 2 * x.s - 26 <= e[r] || u === A && h[r] + 2 * x.s + 26 >= e[r] ? 2 * (x.s + 26) : x.s + 26 + .5 * (L(x.o) - 26))
                        }
                        this.move(h, r, u, c), this.points.push(h), m++
                    } while (m < 4)
                }
            }, gatherInfo: function (t) {
                switch (t) {
                    case P:
                        return ["y", D];
                    case C:
                        return ["y", A];
                    case M:
                        return [R, D];
                    case B:
                        return [R, A]
                }
            }, getReverseDirection: function (t) {
                switch (t) {
                    case P:
                        return C;
                    case C:
                        return P;
                    case M:
                        return B;
                    case B:
                        return M
                }
            }, translateKey: function () {
                this.conutKey = this.countKey === R ? "y" : R
            }
        };
    ht.Default.setEdgeType("edgeforflow", function (t, e, i, n) {
        H.gen(t, i);
        return {points: H.gen(t, i)}
    });
    var V = function () {
        function t(e, i) {
            v(this, t), "object" === (void 0 === e ? "undefined" : y(e)) && (void 0 != e.x ? (i = e.y, e = e.x) : (i = e[1], e = e[0])), this.set(e || 0, i || 0)
        }

        return p(t, [{
            key: "clone", value: function () {
                return new t(this.x, this.y)
            }
        }, {
            key: "copy", value: function (t) {
                return this.set(t.x, t.y), this
            }
        }, {
            key: "equals", value: function (t) {
                return t.x === this.x && t.y === this.y
            }
        }, {
            key: "set", value: function (t, e) {
                return this.x = t || 0, this.y = e || (0 !== e ? this.x : 0), this
            }
        }, {
            key: "setScalar", value: function (t) {
                return this.x = t, this.y = t, this
            }
        }, {
            key: "setX", value: function (t) {
                return this.x = t || 0, this
            }
        }, {
            key: "setY", value: function (t) {
                return this.y = t || 0, this
            }
        }, {
            key: "add", value: function (t) {
                return this.x += t.x, this.y += t.y, this
            }
        }, {
            key: "addVectors", value: function (t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this
            }
        }, {
            key: "addScalar", value: function (t) {
                return this.x += t, this.y += t, this
            }
        }, {
            key: "addScaledVector", value: function (t, e) {
                return this.x += t.x * e, this.y += t.y * e, this
            }
        }, {
            key: "sub", value: function (t) {
                return this.x -= t.x, this.y -= t.y, this
            }
        }, {
            key: "subScalar", value: function (t) {
                return this.x -= t, this.y -= t, this
            }
        }, {
            key: "subVectors", value: function (t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this
            }
        }, {
            key: "multiply", value: function (t) {
                return this.x *= t.x, this.y *= t.y, this
            }
        }, {
            key: "multiplyScalar", value: function (t) {
                return this.x *= t, this.y *= t, this
            }
        }, {
            key: "divide", value: function (t) {
                return this.x /= t.x, this.y /= t.y, this
            }
        }, {
            key: "divideScalar", value: function (t) {
                return this.multiplyScalar(1 / t)
            }
        }, {
            key: "min", value: function (t) {
                return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
            }
        }, {
            key: "max", value: function (t) {
                return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
            }
        }, {
            key: "clamp", value: function (t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
            }
        }, {
            key: "clampScalar", value: function (e, i) {
                var n, o;
                return void 0 === n && (n = new t, o = new t), n.set(e, e), o.set(i, i), this.clamp(n, o)
            }
        }, {
            key: "clampLength", value: function (t, e) {
                var i = this.length();
                return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i)
            }
        }, {
            key: "dot", value: function (t) {
                return this.x * t.x + this.y * t.y
            }
        }, {
            key: "lengthSq", value: function () {
                return this.x * this.x + this.y * this.y
            }
        }, {
            key: "length", value: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
        }, {
            key: "normalize", value: function () {
                return this.divideScalar(this.length())
            }
        }, {
            key: "angle", value: function () {
                var t = Math.atan2(this.y, this.x);
                return t < 0 && (t += 2 * Math.PI), t
            }
        }, {
            key: "distanceTo", value: function (t) {
                return Math.sqrt(this.distanceToSquared(t))
            }
        }, {
            key: "distanceToSquared", value: function (t) {
                var e = this.x - t.x, i = this.y - t.y;
                return e * e + i * i
            }
        }, {
            key: "isNearEnough", value: function (t) {
                return this.distanceToSquared(t) < 1e-8
            }
        }, {
            key: "setLength", value: function (t) {
                return this.multiplyScalar(t / this.length())
            }
        }, {
            key: "lerp", value: function (t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
            }
        }, {
            key: "lerpVectors", value: function (t, e, i) {
                return this.subVectors(e, t).multiplyScalar(i).add(t)
            }
        }, {
            key: "rotateAround", value: function (t, e) {
                var i = Math.cos(e), n = Math.sin(e), o = this.x - t.x, a = this.y - t.y;
                return this.x = o * i - a * n + t.x, this.y = o * n + a * i + t.y, this
            }
        }, {
            key: "width", set: function (t) {
                this.x = t
            }, get: function () {
                return this.x
            }
        }, {
            key: "height", set: function (t) {
                this.y = t
            }, get: function () {
                return this.y
            }
        }]), t
    }(), N = function () {
        function t() {
            v(this, t), this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
        }

        return p(t, [{
            key: "set", value: function (t, e, i, n, o, a) {
                return this.a = t, this.b = e, this.c = i, this.d = n, this.tx = o, this.ty = a, this
            }
        }, {
            key: "apply", value: function (t, e) {
                e = e || new Vector2;
                var i = t.x, n = t.y;
                return e.x = this.a * i + this.c * n + this.tx, e.y = this.b * i + this.d * n + this.ty, e
            }
        }, {
            key: "applyInverse", value: function (t, e) {
                e = e || new Vector2;
                var i = 1 / (this.a * this.d + this.c * -this.b), n = t.x, o = t.y;
                return e.x = this.d * i * n + -this.c * i * o + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * o + -this.b * i * n + (-this.ty * this.a + this.tx * this.b) * i, e
            }
        }, {
            key: "translate", value: function (t, e) {
                return this.tx += t, this.ty += e, this
            }
        }, {
            key: "scale", value: function (t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }
        }, {
            key: "rotate", value: function (t) {
                var e = Math.cos(t), i = Math.sin(t), n = this.a, o = this.c, a = this.tx;
                return this.a = n * e - this.b * i, this.b = n * i + this.b * e, this.c = o * e - this.d * i, this.d = o * i + this.d * e, this.tx = a * e - this.ty * i, this.ty = a * i + this.ty * e, this
            }
        }, {
            key: "append", value: function (t) {
                var e = this.a, i = this.b, n = this.c, o = this.d;
                return this.a = t.a * e + t.b * n, this.b = t.a * i + t.b * o, this.c = t.c * e + t.d * n, this.d = t.c * i + t.d * o, this.tx = t.tx * e + t.ty * n + this.tx, this.ty = t.tx * i + t.ty * o + this.ty, this
            }
        }, {
            key: "setTransform", value: function (t, e, i, n, o, a, r, s, h) {
                var d, u, c, l, g, f, y, v, p, x;
                return g = Math.sin(r), f = Math.cos(r), y = Math.cos(h), v = Math.sin(h), p = -Math.sin(s), x = Math.cos(s), d = f * o, u = g * o, c = -g * a, l = f * a, this.a = y * d + v * c, this.b = y * u + v * l, this.c = p * d + x * c, this.d = p * u + x * l, this.tx = t + (i * d + n * c), this.ty = e + (i * u + n * l), this
            }
        }, {
            key: "prepend", value: function (t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var i = this.a, n = this.c;
                    this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = n * t.a + this.d * t.c, this.d = n * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
            }
        }, {
            key: "invert", value: function () {
                var t = this.a, e = this.b, i = this.c, n = this.d, o = this.tx, a = t * n - e * i;
                return this.a = n / a, this.b = -e / a, this.c = -i / a, this.d = t / a, this.tx = (i * this.ty - n * o) / a, this.ty = -(t * this.ty - e * o) / a, this
            }
        }, {
            key: "identity", value: function () {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }
        }, {
            key: "clone", value: function () {
                var e = new t;
                return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
            }
        }, {
            key: "copy", value: function (t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }
        }]), t
    }();
    N.IDENTITY = new N, N.TEMP_MATRIX = new N;
    var W = {};
    W.toScreenPosition = function (t, e) {
        var i = t.tx(), n = t.ty(), o = t._zoom;
        return new V(e.x * o + i, e.y * o + n)
    }, W.checkHit = function (t, e, i) {
        return t.distanceTo(e) < i
    }, W.setAntialias = function (t, e) {
        for (var i = ["imageSmoothingEnabled", "webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "oImageSmoothingEnabled", "msImageSmoothingEnabled"], n = void 0, o = 0, a = i.length; o < a && !((n = i[o]) in t); o++) ;
        t[n] = e
    }, W.getDataMatrix = function (t) {
        if (t instanceof ht.Shape) {
            var e = new N, i = t.getPosition();
            return e.translate(-i.x, -i.y).scale(t.getScale().x, t.getScale().y).rotate(t.getRotation()).translate(i.x, i.y), e
        }
        return t.getMatrix ? t.getMatrix() : new N
    }, W.getDirection = function (t, e, i, n) {
        var o = void 0, a = void 0, r = ["T", "R", "B", "L"];
        o = i < .2 ? "T" : i > .8 ? "B" : e > .8 ? "R" : e < .2 ? "L" : "B", a = r.indexOf(o);
        var s = n.getRotation();
        return s && (o = r[(a + Math.floor((s / (2 * Math.PI) * 360 + 45) / 90)) % r.length]), o
    };
    var G = {}, j = r.rectPointSize, K = r.edgePointSize;
    ht.Default.setImage("Icons.RectPoint", {
        width: j,
        height: j,
        comps: [{
            type: "shape",
            borderWidthAbsolute: !0,
            points: [0, 0, 0, j, j, j, j, 0],
            segments: [1, 2, 2, 2, 5],
            borderWidth: 2,
            background: {
                func: function () {
                    return r.rectBackgroundColor
                }
            },
            borderColor: {
                func: function () {
                    return r.rectBorderColor
                }
            }
        }]
    }), ht.Default.setImage("Icons.EdgePoint", {
        width: K,
        height: K,
        comps: [{
            type: "oval",
            background: "rgb(255,255,255)",
            borderWidth: 2,
            borderColor: "#97cbff",
            borderWidthAbsolute: !0
        }]
    }), G.Rect = {
        comps: [{
            type: "shape",
            points: {
                func: function () {
                    var t = G.Rect.data;
                    if (!t) return [];
                    var e = t.LT, i = t.LB, n = t.RB, o = t.RT;
                    return [e.x, e.y, i.x, i.y, n.x, n.y, o.x, o.y]
                }
            },
            dash: !0,
            dashPattern: r.rectDashPattern,
            dashColor: r.editBorderColor,
            segments: [1, 2, 2, 2, 5],
            background: null,
            borderWidth: 1
        }, {
            type: "image", name: "Icons.RectPoint", rotation: {
                func: function () {
                    return G.Rect.data.rotation
                }
            }, rect: {
                func: function () {
                    return [[G.Rect.data.LT.x, G.Rect.data.LT.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.RectPoint", rotation: {
                func: function () {
                    return G.Rect.data.rotation
                }
            }, rect: {
                func: function () {
                    return [[G.Rect.data.LB.x, G.Rect.data.LB.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.RectPoint", rotation: {
                func: function () {
                    return G.Rect.data.rotation
                }
            }, rect: {
                func: function () {
                    return [[G.Rect.data.RB.x, G.Rect.data.RB.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.RectPoint", rotation: {
                func: function () {
                    return G.Rect.data.rotation
                }
            }, rect: {
                func: function () {
                    return [[G.Rect.data.RT.x, G.Rect.data.RT.y], j, j]
                }
            }
        }]
    }, G.EdgeRect = {
        comps: [{
            type: "image", name: "Icons.RectPoint", rotation: {
                func: function () {
                    return G.Rect.data.rotation
                }
            }, rect: {
                func: function () {
                    return [[G.EdgeRect.data.SP.x, G.EdgeRect.data.SP.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.RectPoint", rotation: {
                func: function () {
                    return G.Rect.data.rotation
                }
            }, rect: {
                func: function () {
                    return [[G.EdgeRect.data.TP.x, G.EdgeRect.data.TP.y], j, j]
                }
            }
        }]
    }, G.EdgePoint = {
        comps: [{
            type: "image", name: "Icons.EdgePoint", rect: {
                func: function () {
                    return [[G.EdgePoint.data.T.x, G.EdgePoint.data.T.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.EdgePoint", rect: {
                func: function () {
                    return [[G.EdgePoint.data.R.x, G.EdgePoint.data.R.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.EdgePoint", rect: {
                func: function () {
                    return [[G.EdgePoint.data.B.x, G.EdgePoint.data.B.y], j, j]
                }
            }
        }, {
            type: "image", name: "Icons.EdgePoint", rect: {
                func: function () {
                    return [[G.EdgePoint.data.L.x, G.EdgePoint.data.L.y], j, j]
                }
            }
        }]
    }, G.Rotate = {
        comps: [{
            type: "image", name: "Icons.EdgePoint", rect: {
                func: function () {
                    return [[G.Rotate.data.rp.x, G.Rotate.data.rp.y], j, j]
                }
            }
        }]
    }, G.TipShiftX = 12, G.TipShiftY = 12;
    var U = [8, 28];
    G.TipHelper = {
        comps: [{
            type: "roundRect", rect: {
                func: function () {
                    return [G.TipHelper.data.helperPos.x, G.TipHelper.data.helperPos.y, U[0] * G.TipHelper.data.size, U[1]]
                }
            }, background: {
                func: function () {
                    return r.tipBackgroundColor
                }
            }, opacity: r.tipOpacity
        }, {
            type: "text", text: {
                func: function () {
                    return G.TipHelper.data.text
                }
            }, rect: {
                func: function () {
                    return [G.TipHelper.data.helperPos.x, G.TipHelper.data.helperPos.y, U[0] * G.TipHelper.data.size, U[1]]
                }
            }, color: {
                func: function () {
                    return r.tipTextColor
                }
            }, font: "bold 12px Arial", align: "center"
        }]
    }, G.drawIcon = function (t, e, i, n) {
        i.width = i.height = 1, i.data = n, ht.Default.drawImage(e, i, 0, 0, 1, 1)
    };
    var F = function () {
        function t() {
            v(this, t), this._state = {}
        }

        return p(t, [{
            key: "getState", value: function () {
                return this._state
            }
        }, {
            key: "setState", value: function (t, e) {
                if ("object" === (void 0 === t ? "undefined" : y(t))) for (var i in t) this._state[i] = t[i]; else "string" == typeof t && void 0 !== e && (this._state[t] = e)
            }
        }, {
            key: "state", set: function (t) {
            }, get: function () {
                return this._state
            }
        }]), t
    }(), X = function (t) {
        var e = this;
        e._entities = t, e._rotation = 0, e._position = {x: 0, y: 0}, e._scale = {x: 1, y: 1}, e._anchor = {
            x: .5,
            y: .5
        }, e._anchor2 = {x: .5, y: .5}
    };
    (X.prototype = {}).constructor = X;
    var q = null;
    X.prototype.checkIsMe = function (t) {
        var e = this._entities;
        if (e.length !== t.length) return !1;
        var i = {}, n = void 0, o = t.length;
        for (n = 0; n < o; n++) i[t[n]._id] = !0;
        for (n = 0; n < o; n++) if (!i[e[n]._id]) return !1;
        return !0
    }, X.prototype.getRotation = function () {
        return this._rotation
    }, X.prototype.getPosition = function () {
        return this._position
    }, X.prototype.getAnchor = function () {
        return this._anchor
    }, X.prototype.getWidth = function () {
        return this._width
    }, X.prototype.getScale = function () {
        return this._scale
    }, X.prototype.getSize = function () {
        return {width: this._width, height: this._height}
    }, X.prototype.getHeight = function () {
        return this._height
    }, X.prototype.getKeyOb = function () {
        for (var t = this._entities, e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            if (this.isNode(i)) return i
        }
    }, X.prototype.getAnchor2 = function () {
        var t = this, e = t.rotateCenter;
        if (e) return e;
        var i = t.getKeyOb();
        if (!i) return t._anchor;
        var n = t._anchor2;
        return i.getMatrix().tf({x: i.getWidth() * (n.x - i.getAnchor().x), y: i.getHeight() * (n.y - i.getAnchor().y)})
    }, X.prototype.setAnchor2 = function (t, e) {
        var i = this, n = i.getKeyOb();
        if (n) {
            var o = n.getMatrix(), a = void 0;
            a = "number" == typeof t ? {x: t, y: e} : t;
            var r = o.tfi(a);
            i._anchor2 = {x: n.getAnchor().x + r.x / n.getWidth(), y: n.getAnchor().y + r.y / n.getHeight()}
        }
    }, X.prototype.setRotation = function (t) {
    }, X.prototype.beginRotate = function (t) {
        this.rotateCenter = t.pos, this.rotateMode = t.groupRotateMode
    }, X.prototype.endRotate = function () {
        delete this.rotateCenter, delete this.rotateMode
    }, X.prototype.addRotation = function (t, e) {
        return "batch" === e ? this._addRotationInBatchMode(t) : "block" === e ? this._addRotationInBlockMode(t) : void 0
    }, X.prototype._addRotationInBlockMode = function (t) {
        var e = this, i = e.rotateCenter || e.getPosition();
        e._entities.forEach(function (n) {
            if (e.isNode(n)) {
                var o = n.getMatrix();
                o.translate(-i.x, -i.y), o.rotate(t), o.translate(i.x, i.y);
                var a = Math.sign(n.getScale().x);
                n.setRotation(mathAtan2(o.b * a, o.a * a)), n.setPosition(o.tx, o.ty)
            }
        })
    }, X.prototype._addRotationInBatchMode = function (t) {
        var e = this, i = e._anchor2;
        e._entities.forEach(function (n) {
            if (e.isNode(n)) {
                var o = n.getAnchor(), a = n.getMatrix(),
                    r = a.tf({x: n.getWidth() * (i.x - o.x), y: n.getHeight() * (i.y - o.y)}), s = new N;
                s.set(a.a, a.b, a.c, a.d, a.tx, a.ty), s.translate(-r.x, -r.y), s.rotate(t), s.translate(r.x, r.y);
                var h = Math.sign(n.getScale().x);
                n.setRotation(mathAtan2(s.b * h, s.a * h)), n.setPosition(s.tx, s.ty)
            }
        })
    }, X.prototype.setPosition = function (t) {
        var e = this, i = e._position, n = t.x - i.x, o = t.y - i.y, a = void 0, r = e._entities, s = void 0,
            h = void 0, d = void 0;
        for (s = 0, h = r.length; s < h; s++) a = r[s], this._isNode(a) && (d = a.getPosition(), a.setPosition(d.x + n, d.y + o));
        e._position = t
    }, X.prototype.setScale = function (t, e) {
        var i = this, n = t / i._scale.x, o = e / i._scale.y;
        i._adjustChildScaleOrSize(n, o, "size"), i._scale = {x: t, y: e}
    }, X.prototype.getRect = function () {
        var t = this, e = t._position, i = t._width, n = t._height;
        return {x: e.x - i / 2, y: e.y - n / 2, width: i, height: n}
    }, X.prototype.setSize = function (t, e) {
        var i = this;
        t = Math.max(1, t), e = Math.max(1, e);
        var n = t / i._width, o = e / i._height;
        i._adjustChildScaleOrSize(n, o, "size"), i._width = t, i._height = e
    }, X.prototype._adjustChildScaleOrSize = function (t, e, i) {
        var n = this, o = n._position, a = void 0, r = n._entities, s = void 0, h = void 0, d = new N, u = void 0,
            c = void 0, l = void 0, g = void 0, f = void 0, y = void 0, v = void 0, p = void 0, x = void 0, _ = void 0,
            m = void 0;
        for (s = 0, h = r.length; s < h; s++) if (a = r[s], n.isNode(a)) {
            if (u = a.getPosition(), c = a.getRotation(), l = a.getWidth(), g = a.getHeight(), f = a.getScale(), p = f.x * l, x = f.y * g, d.identity().scale(p, x).rotate(c).translate(u.x, u.y).translate(-o.x, -o.y).rotate(-n._rotation), c = Math.atan2(d.b * Math.sign(p), d.a * Math.sign(p)), d.scale(t, e), y = Math.cos(c), v = Math.sin(c), Math.abs(y) < .001 ? (_ = d.b / v, m = -d.c / v) : (_ = d.a / y, m = d.d / y), "scale" === i) a.setScale(_ / l, m / g); else if ("size" === i) {
                var b = _ / f.x, w = m / f.y;
                a.setScale(Math.sign(_) * Math.abs(f.x), Math.sign(m) * Math.abs(f.y)), a.setSize(Math.max(.1, Math.abs(b)), Math.max(.1, Math.abs(w)))
            }
            d.rotate(n._rotation).translate(o.x, o.y), a.setPosition(d.tx, d.ty)
        }
    }, X.prototype.getMatrix = function () {
        var t = this, e = t._position, i = ht.Default.getInternal(), n = t._scale;
        return new i.Mat(t._rotation, e.x, e.y, n.x, n.y)
    }, X.prototype.getCorners = function () {
        var t = this, e = t._width, i = t._height, n = t._anchor, o = -e * n.x, a = -i * n.y, r = t.getMatrix();
        return [r.tf(o, a), r.tf(o, a + i), r.tf(o + e, a + i), r.tf(o + e, a)]
    }, X.prototype.calcInfo = function () {
        var t = this, e = void 0, i = void 0, n = void 0, o = [], a = void 0, r = void 0, s = void 0, h = t._entities,
            d = t._rotation;
        for (a = 0, r = h.length; a < r; a++) s = h[a], t.isNode(s) && s.getCorners && o.push.apply(o, s.getCorners());
        if (o.length) {
            var u = Math.cos(-d), c = Math.sin(-d), l = 1 / 0, g = -1 / 0, f = 1 / 0, y = -1 / 0;
            for (a = 0, r = o.length; a < r; a++) e = (n = o[a]).x, i = n.y, n.x = u * e - c * i, n.y = c * e + u * i, l = Math.min(l, n.x), g = Math.max(g, n.x), f = Math.min(f, n.y), y = Math.max(y, n.y);
            t._width = (g - l) / t._scale.x, t._height = (y - f) / t._scale.y, u = Math.cos(d), c = Math.sin(d);
            var v = t._anchor;
            e = l + (g - l) * v.x, i = f + (y - f) * v.y, t._position = {x: u * e - c * i, y: c * e + u * i}
        }
    }, X.prototype._isNode = function (t) {
        return t instanceof ht.Node
    }, X.prototype.isExpandedGroup = function (t, e) {
        if (!(t instanceof ht.Group)) return !1;
        if (!e) return t.isExpanded();
        var i = e.getDataUI(t);
        return !(!i || !i._88I)
    }, X.prototype.isNode = function (t) {
        return !!this._isNode(t) && !this.isExpandedGroup(t)
    }, X.prototype.draw = function (t, e, i) {
        var n = this, o = n._entities, a = void 0, r = void 0, s = void 0, h = void 0, d = void 0, u = void 0;
        for ("batch" === n.rotateMode && (u = n.getKeyOb()), a = 0, r = o.length; a < r; a++) s = o[a], n.isNode(s) && (h = s.getRect(), d = {
            min: W.toScreenPosition(i, {
                x: h.x,
                y: h.y
            }), max: W.toScreenPosition(i, {x: h.x + h.width, y: h.y + h.height})
        }, s === u && (d.isKeyOb = !0), W.Icons.DrawIcon(t, e, W.Icons.GroupSubEntityRect, d))
    };
    var Z = function (t) {
            if (q && q.checkIsMe(t)) return q;
            var e = new X(t);
            if (e.getKeyOb()) return q = e, e
        }, Y = ["LT", "RB", "LB", "RT"],
        $ = [{x: -1, y: -1}, {x: 1, y: 1}, {x: -1, y: 1}, {x: 1, y: -1}, {x: -1, y: 0}, {x: 1, y: 0}, {
            x: 0,
            y: 1
        }, {x: 0, y: -1}], J = function (t) {
            function e(t) {
                v(this, e);
                var i = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._interactor = t, i
            }

            return _(e, F), p(e, [{
                key: "gatherInfo", value: function (t, e) {
                    if (1 === e.length) {
                        var i = e[0];
                        return !(i instanceof ht.Edge) && this.gatherSingleTarget(t, i)
                    }
                    return e.length > 1 && this.gatherMultiTargets(t, e)
                }
            }, {
                key: "gatherSingleTarget", value: function (t, e) {
                    if (e.getCorners) {
                        var i = this.info, n = void 0;
                        this.target = e, n = this.screenInfo = {};
                        var o = e.getCorners();
                        i.LT = new V(o[0]), i.LB = new V(o[1]), i.RB = new V(o[2]), i.RT = new V(o[3]);
                        for (var a in i) n[a] = W.toScreenPosition(t, i[a]);
                        return !0
                    }
                }
            }, {
                key: "gatherMultiTargets", value: function (t, e) {
                    var i = Z(e);
                    if (!i) return !1;
                    var n = this;
                    return this.editing || i.calcInfo(), n.gatherSingleTarget(t, i)
                }
            }, {
                key: "check", value: function (t, e, i) {
                    if (ht.Default.isLeftButton(e)) {
                        var n = this;
                        if (n.editing = null, n.tipInfo = null, n.screenInfo) {
                            var o = null, a = void 0, r = void 0, s = void 0, h = n._interactor, d = n.target,
                                u = t.isEditable(d);
                            if (d instanceof X && (u = !0), u && t.isRectEditable(d)) for (r = 0; r < Y.length; r++) if (s = Y[r], W.checkHit(i, n.screenInfo[s], 7)) {
                                o = s, a = "resize";
                                break
                            }
                            if (o) {
                                var c = Y.indexOf(o), l = $[c], g = Math.cos(d.getRotation()),
                                    f = Math.sin(d.getRotation()), y = l.x * Math.sign(d.getScale().x),
                                    v = l.y * Math.sign(d.getScale().y), p = Math.atan2(-f * y - g * v, g * y - f * v),
                                    x = ["ew-resize", "nesw-resize", "ns-resize", "nwse-resize", "ew-resize", "nesw-resize", "ns-resize", "nwse-resize"][(Math.round(p / (Math.PI / 4)) + 8) % 8];
                                this._interactor.setCursor(x);
                                var _ = d.getWidth(), m = d.getHeight(), b = d.getAnchor();
                                return n.editing = {
                                    mode: a,
                                    key: o,
                                    rect: {x: -_ * b.x, y: -m * b.y, width: _, height: m},
                                    anchor: b,
                                    matrix: d.getMatrix()
                                }, o
                            }
                            h.setCursor("default")
                        }
                    }
                }
            }, {
                key: "startEdit", value: function (t, e) {
                    t.startDragging(e)
                }
            }, {
                key: "endEdit", value: function () {
                    var t = this, e = t.editing ? t.editing.groupRotateMode : null;
                    t.editing = null, t.tipInfo = null, t._inSmartGuide && (t._interactor.rectGuide.clear(), t._inSmartGuide = !1), e && t.target && t.target.endRotate()
                }
            }, {
                key: "handleEdit", value: function (t, e) {
                    var i = this, n = i.editing;
                    if (n) {
                        var o, a, r, s, h, d, u = i.target, c = n.key, l = n.mode, g = i._interactor;
                        if ("resize" === l) {
                            var f = n.rect;
                            s = f.x, h = f.y;
                            var y = f.width, v = f.height, p = n.anchor, x = n.matrix;
                            a = t.lp(e);
                            var _, m = ht.Default.isShiftDown(e);
                            if (i._inSmartGuide && !ht.Default.isCtrlDown(e) && !m) {
                                var b;
                                "L" === c || "R" === c ? b = "x" : "T" !== c && "B" !== c || (b = "y"), i._adsorbedToClosest(a, b), d = !0
                            }
                            _ = x.tfi(a);
                            var w;
                            "LT" === c ? (f = this._unionPointMode1(_, {
                                x: s + y,
                                y: h + v
                            }, y, v, m), w = 9) : "RT" === c ? (f = this._unionPointMode1(_, {
                                x: s,
                                y: h + v
                            }, y, v, m), w = 33) : "LB" === c ? (f = this._unionPointMode1(_, {
                                x: s + y,
                                y: h
                            }, y, v, m), w = 12) : "RB" === c && (f = this._unionPointMode1(_, {
                                x: s,
                                y: h
                            }, y, v, m), w = 36);
                            var T = x.tf(f.x + f.width * p.x, f.y + f.height * p.y);
                            u.setPosition(T), u.setSize(f.width, f.height), d && (r = u.getRect(), g.rectGuide.gatherLines({
                                node: u,
                                x: r.x,
                                y: r.y,
                                w: r.width,
                                h: r.height
                            }, b, w)), o = Math.round(f.width) + " * " + Math.round(f.height)
                        }
                        var k = ht.Default.getLogicalPoint(e, g._canvas);
                        k.x += G.TipShiftX, k.y += G.TipShiftY, i.tipInfo = {helperPos: k, text: o, size: o.length}
                    }
                }
            }, {
                key: "_unionPointMode1", value: function (t, e, i, n, o) {
                    if (o && i && n) {
                        var a = t.x - e.x, r = t.y - e.y;
                        Math.abs(a * n) < Math.abs(r * i) ? (r = Math.sign(r) * Math.abs(a * n / i), t.y = e.y + r) : (a = Math.sign(a) * Math.abs(r * i / n), t.x = e.x + a)
                    }
                    return ht.Default.unionPoint(t, e)
                }
            }, {
                key: "_unionPointMode2", value: function (t, e, i, n, o, a) {
                    var r = ht.Default.unionPoint(t, e);
                    if (o && i && n) {
                        var s;
                        "v" === a ? (s = r.x + r.width / 2, r.width = i * r.height / n, r.x = s - r.width / 2) : (s = r.y + r.height / 2, r.height = n * r.width / i, r.y = s - r.height / 2)
                    }
                    return r
                }
            }, {
                key: "draw", value: function (t, e, i) {
                    var n = this._interactor;
                    this.info = {}, this.screenInfo = null, n.editDetail || this.gatherInfo(e, i) && n.editType !== s.ET_TEXT && (G.drawIcon(n, t, G.Rect, this.screenInfo), this.tipInfo && G.drawIcon(n, t, G.TipHelper, this.tipInfo))
                }
            }]), e
        }(), Q = function (t) {
            function e(t) {
                v(this, e);
                var i = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._interactor = t, i.setState("info", {}), i
            }

            return _(e, F), p(e, [{
                key: "gatherInfo", value: function (t, e) {
                    return 1 === e.length && this.gatherSingleTarget(t, e[0])
                }
            }, {
                key: "gatherSingleTarget", value: function (t, e) {
                    if (!(e instanceof ht.Edge)) {
                        var i = this.state.screenInfo = {}, n = this.state.info, o = e.getCorners(),
                            a = e.getRotation() - Math.PI / 2, s = t.getZoom(), h = b(o, 4), d = h[0],
                            u = (h[1], h[2], h[3]), c = new V(d), l = new V(u), g = n.rp = c.clone().add(l).divideScalar(2);
                        g.setY(g.y + r.rotatePointOffset * Math.sin(a) * (1 / s)), g.setX(g.x + r.rotatePointOffset * Math.cos(a) * (1 / s));
                        for (var f in n) i[f] = W.toScreenPosition(t, n[f]);
                        return this.state.target = e, !0
                    }
                }
            }, {
                key: "gatherMultiTargets", value: function (t, e) {
                    var i = Z(e);
                    if (!i) return !1;
                    var n = this;
                    return this.editing || i.calcInfo(), n.gatherSingleTarget(t, i)
                }
            }, {
                key: "check", value: function (t, e, i) {
                    var n = this.state, o = n.screenInfo, a = n.target;
                    if (o) {
                        var s = null, h = null, d = this._interactor, u = t.isEditable(a);
                        if (a instanceof X && (u = !0), u && t.isRectEditable(a)) {
                            W.checkHit(i, o.rp, r.rotationCheckSize) && (h = "rp", s = "rotate")
                        }
                        if (h) {
                            var c = t.lp(e), l = this.isGroup(a) ? a.getAnchor2() : a.p();
                            return d.setCursor("crosshair"), this.setState({
                                editInfo: {
                                    rotation: a.getRotation(),
                                    hitRot: Math.atan2(c.y - l.y, c.x - l.x)
                                }
                            }), this.editable = !0, s
                        }
                        return this.editable = !1, void d.setCursor("default")
                    }
                }
            }, {
                key: "startEdit", value: function (t, e) {
                    this.editable && t.startDragging(e)
                }
            }, {
                key: "endEdit", value: function () {
                }
            }, {
                key: "handleEdit", value: function (t, e) {
                    var i = this.state, n = i.target, o = i.editInfo, a = void 0, r = void 0,
                        s = (this._interactor, t.lp(e)), h = this.isGroup(n) ? n.getAnchor2() : n.p();
                    a = Math.atan2(s.y - h.y, s.x - h.x) - o.hitRot, r = o.rotation + a;
                    var d = Math.PI / 36;
                    r = Math.round(r / d) * d + .0029229901685084666, (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), n.setRotation(r)
                }
            }, {
                key: "isGroup", value: function (t) {
                    return t instanceof X
                }
            }, {
                key: "draw", value: function (t, e, i) {
                    var n = this._interactor;
                    this.state.screenInfo = null, this.gatherInfo(e, i) && n.editType !== s.ET_TEXT && (G.drawIcon(n, t, G.Rotate, this.state.screenInfo), this.editable && this.drawRotateClock(t))
                }
            }, {
                key: "drawRotateClock", value: function (t) {
                    var e = this.state.target;
                    if (e) {
                        this._interactor.gv.getZoom();
                        var i = e.getRotation(), n = Math.floor(i / Math.PI * 180), o = 0 - .5 * Math.PI,
                            a = i - .5 * Math.PI,
                            s = .7 * Math.sqrt(Math.pow(e.getWidth(), 2) + Math.pow(e.getHeight(), 2)),
                            h = this.isGroup(e) ? e.getAnchor2() : e.p(),
                            d = W.toScreenPosition(this._interactor.gv, new V(h));
                        s = Math.max(s, r.rotateClockMinSize), t.save(), t.strokeStyle = "rgba(52, 52,52, 0.6)", t.lineWidth = 1;
                        for (var u = 0; u < 72; u++) {
                            var c = Math.PI / 36 * u, l = u % 9 ? .93 : 1, g = s * Math.cos(c), f = s * Math.sin(c);
                            t.beginPath(), t.moveTo(g * l + d.x, f * l + d.y), t.lineTo(.85 * g + d.x, .85 * f + d.y), t.stroke()
                        }
                        t.restore(), n && (t.save(), t.beginPath(), t.moveTo(d.x, d.y), t.lineTo(d.x, d.y - s), t.arc(d.x, d.y, s, o, a), t.closePath(), t.fillStyle = "rgba(0, 255, 204, 0.7)", t.fill(), t.restore()), t.save(), t.beginPath(), t.fillStyle = "rgba(255, 255, 255, 0.9)", t.rect(d.x - 25, d.y - 18, 50, 26), t.fill(), t.closePath(), t.restore(), t.save(), t.font = "16px serif", t.textAlign = "center", t.fillStyle = "#000", t.fillText(n + "°", d.x + 8, d.y, 50), t.restore()
                    }
                }
            }, {
                key: "editable", set: function (t) {
                    this._editable !== t && (this._interactor.redraw(), this._editable = t)
                }, get: function () {
                    return this._editable
                }
            }]), e
        }(), tt = new (function () {
            function t() {
                v(this, t);
                var e = this.box = window.flexBox = new n(a.SIDBAR_WIDTH), i = e.getView();
                e.setPadding([0, 0, 10, 0]), e.setItemHeight(50), e.setItemWidth(60), i.style.border = "1px solid #999", i.style.boxShadow = "3px 3px 8px #999", i.style.backgroundColor = "#fff", this.box.setVisible(!1)
            }

            return p(t, [{
                key: "show", value: function (t, e) {
                    var i = this.getGroup(e), n = this.box, o = n.getView();
                    n.clear(), i.graphs.forEach(function (t) {
                        var e = new g;
                        e.setImage(t), e.setPadding([0, 5, 0, 5]), e.groupId = i.groupId, e.forSelect = !0, n.addView(e, {marginTop: 3})
                    }), n.setVisible(!0);
                    var a = this.box.getParent(), r = a.getWidth(), s = a.getHeight(), h = n.getWidth(), d = n.getHeight(),
                        u = t.x, c = t.y;
                    r - h - u < 0 && (u = r - h), s - d - c < 0 && (c = s - d), setTimeout(function () {
                        o.style.top = c + "px", o.style.left = u + "px"
                    }, 10)
                }
            }, {
                key: "hide", value: function () {
                    this.box.isVisible() && this.box.setVisible(!1)
                }
            }, {
                key: "getGroup", value: function (t) {
                    if (t) for (var e = 0, i = h.length; e < i; e++) if (h[e].groupId === t) return h[e];
                    return h[0]
                }
            }]), t
        }()), et = function (t) {
            function e() {
                v(this, e);
                var t = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.addStyleIcon("label", {
                    position: 17,
                    width: 1,
                    height: 0,
                    rotationFixed: !0,
                    names: ["edgeText"]
                }), t.a("edge.text.font", t.fontSize + "px arial, sans-serif"), window.te = t, t
            }

            return _(e, t), p(e, [{
                key: "setLabelText", value: function (t, e) {
                    var i = t.getCanvas().getContext("2d"), n = this.a("edge.text.font"),
                        o = this.fontSize = parseInt(n.match(/^\d+/g)[0]), a = this.s("icons"), r = void 0;
                    i.font = this.a("edge.text.font"), r = i.measureText(e), a.label.height = o + 4, a.label.width = r.width, this.a("edge.text", e)
                }
            }, {
                key: "getSourcePoint", value: function () {
                    return this._calculatePoint(this.getSourceAgent(), this.s("edge.source.anchor.x"), this.s("edge.source.anchor.y"), this.s("edge.source.offset.x"), this.s("edge.source.offset.y"))
                }
            }, {
                key: "getTargetPoint", value: function () {
                    return this._calculatePoint(this.getTargetAgent(), this.s("edge.target.anchor.x"), this.s("edge.target.anchor.y"), this.s("edge.target.offset.x"), this.s("edge.target.offset.y"))
                }
            }, {
                key: "_calculatePoint", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a = t.getWidth(),
                        r = t.getHeight(), s = t.getRotation(), h = t.getCorners()[0], d = {x: e * a + n, y: i * r + o},
                        u = Math.pow, c = Math.abs, l = Math.sqrt(u(c(d.x), 2) + u(c(d.y), 2)),
                        g = s + Math.atan2(d.y, d.x);
                    return 0 === s ? {x: h.x + d.x, y: h.y + d.y} : {x: h.x + Math.cos(g) * l, y: h.y + Math.sin(g) * l}
                }
            }, {
                key: "fontSize", get: function () {
                    return this._fontSize || 14
                }, set: function (t) {
                    this._fontSize = t
                }
            }]), e
        }(ht.Edge), it = ["T", "R", "B", "L"], nt = [{x: .5, y: 0}, {x: 1, y: .5}, {x: .5, y: 1}, {x: 0, y: .5}],
        ot = function (t) {
            function e(t) {
                v(this, e);
                var i = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._interactor = t, i.setState("info", {}), i
            }

            return _(e, F), p(e, [{
                key: "setUp", value: function () {
                    c.add(this._handleSelectTarget, this), this._interactor.gv.mi(this._handleClickBackground, this)
                }
            }, {
                key: "tearDown", value: function () {
                    c.remove(this._handleSelectTarget), this._interactor.gv.umi(this._handleClickBackground)
                }
            }, {
                key: "gatherInfo", value: function (t, e) {
                    if (1 === e.length) {
                        var i = e[0];
                        return this.gatherSingleTarget(t, i)
                    }
                    return !1
                }
            }, {
                key: "gatherSingleTarget", value: function (t, e) {
                    if (e.getCorners && !(e instanceof ht.Edge)) {
                        var i = this.state.screenInfo = {}, n = this.state.info;
                        this.state.target = e;
                        var o = e.getCorners(), a = new V(o[0]), r = new V(o[1]), s = new V(o[2]), h = new V(o[3]);
                        n.T = a.clone().add(h).divideScalar(2), n.B = r.clone().add(s).divideScalar(2), n.L = a.clone().add(r).divideScalar(2), n.R = h.clone().add(s).divideScalar(2);
                        for (var d in n) i[d] = W.toScreenPosition(t, n[d]);
                        return !0
                    }
                }
            }, {
                key: "check", value: function (t, e, i) {
                    var n = this.state, o = n.screenInfo, a = n.target;
                    if (o) {
                        var s = null, h = this._interactor;
                        if (t.isEditable(a) && t.isRectEditable(a)) for (var d in o) if (W.checkHit(i, o[d], r.checkSize)) {
                            s = d;
                            break
                        }
                        return s ? (h.setCursor("crosshair"), this.state.editKey = s, this.editable = !0, !0) : (this.editable = !1, this.state.editKey = null, void h.setCursor("default"))
                    }
                }
            }, {
                key: "startEdit", value: function (t, e) {
                    if (this.editable) {
                        var i = this.state, n = i.target, o = i.editKey, a = t.dm, h = it.indexOf(o), d = nt[h],
                            u = new ht.Node, c = new et, l = t.gv.lp(e);
                        u.s("2d.visible", !1), u.p(l), u.setSize(1, 1), a.add(u), c.a("source.effective", !0), c.a("target.effective", !1), c.a("target.temp", u), c.s({
                            "edge.independent": !0,
                            "edge.color": r.defaultEdgeColor,
                            "edge.type": "edgeforflow",
                            "edge.source.anchor.x": d.x,
                            "edge.source.anchor.y": d.y
                        }), c.setSource(n), c.setTarget(u), c.addStyleIcon("defaultEdgeArrow", {
                            position: 28,
                            keepOrien: !0,
                            width: 10,
                            height: 12,
                            names: ["defaultEdgeArrow"]
                        }), a.add(c), this.setState({
                            tempEdge: c,
                            tempNode: u,
                            startLp: l
                        }), t.startDragging(e), t.editType = s.ET_EDGE
                    }
                }
            }, {
                key: "handleEdit", value: function (t, e, i) {
                    var n = this._interactor, o = this.state, a = o.tempNode, r = o.tempEdge, s = o.startLp,
                        h = t.getDataAt(e, function (t) {
                            return t !== r && t.s("2d.selectable")
                        }), d = t.lp(e), u = d.x - s.x, c = d.y - s.y, l = void 0;
                    h instanceof ht.Edge && (h = null);
                    var g = n.invokeSubModule("checkEdgeEdit", !0, h, i);
                    if (g && g.state.editKey) {
                        var f = 0;
                        f = it.indexOf(g.state.editKey), l = nt[f]
                    } else if (r.getTarget() === r.getSource()) {
                        var y = W.getDirection(r, r.s("edge.source.anchor.x"), r.s("edge.source.anchor.y"), r.getSourceAgent()),
                            v = it.indexOf(y);
                        l = nt[(v + 1) % 4]
                    } else l = Math.abs(u) >= Math.abs(c) ? u > 0 ? nt[3] : nt[1] : c > 0 ? nt[0] : nt[2];
                    r.s({
                        "edge.target.anchor.x": l.x,
                        "edge.target.anchor.y": l.y
                    }), h ? r.setTarget(h) : (r.setTarget(a), a.p(d)), this.state.hoverNode = h || null, r.a("target.effective", !!h)
                }
            }, {
                key: "endEdit", value: function (t) {
                    var e = this.state, i = e.tempNode, n = e.tempEdge, o = (e.hoverNode, e.target), a = e.startLp,
                        h = this._interactor, d = h.dm, u = n.getTarget();
                    if (u = n.getTarget(), t.distanceTo(a) < r.minDrawEdgeDistance && u === i) return d.remove(i), d.remove(n), void this.setState({
                        tempNode: null,
                        tempEdge: null,
                        hoverNode: null
                    });
                    if (u !== i) d.remove(i), this.setState({
                        tempNode: null,
                        tempEdge: null,
                        hoverNode: null
                    }); else if (i) {
                        var c = o.a("groupId");
                        tt.show(t, c)
                    }
                    h.editType = s.ET_NULL
                }
            }, {
                key: "_handleSelectTarget", value: function (t) {
                    if (t.kind === s.SELECT_TARGET) {
                        var e = this.state, i = e.tempNode, n = e.tempEdge, o = t.data,
                            a = ht.Default.getImage(o.getImage());
                        i.setImage(o.getImage()), i.s("2d.visible", !0), i.s("select.width", 0), i.a("groupId", o.groupId), i.setSize(a.width, a.height);
                        var r = new ht.Node;
                        r.setImage("textBox"), r.setHost(i), r.p(i.p()), r.s("2d.selectable", !1), r.a("TBContent", ""), r.a("TBPadding", "5 10"), i.a("labelComp", r), this._interactor.dm.add(r), tt.hide(), n.a("target.effective", !0), this.setState({
                            tempNode: null,
                            tempEdge: null,
                            hoverNode: null
                        })
                    }
                }
            }, {
                key: "_handleClickBackground", value: function (t) {
                    "clickData" !== t.kind && "clickBackground" !== t.kind && "doubleClickBackground" !== t.kind && "doubleClickData" !== t.kind || (tt.hide(), this.setState({
                        tempNode: null,
                        tempEdge: null,
                        hoverNode: null
                    }))
                }
            }, {
                key: "draw", value: function (t, e, i) {
                    var n = this._interactor;
                    this.state.screenInfo = null, this.gatherInfo(e, i) && n.editType !== s.ET_TEXT && G.drawIcon(n, t, G.EdgePoint, this.state.screenInfo)
                }
            }]), e
        }(), at = ["T", "R", "B", "L"], rt = [{x: .5, y: 0}, {x: 1, y: .5}, {x: .5, y: 1}, {x: 0, y: .5}], st = "SP",
        dt = function (t) {
            function e(t) {
                v(this, e);
                var i = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._interactor = t, i.setState("info", {}), i
            }

            return _(e, F), p(e, [{
                key: "gatherInfo", value: function (t, e) {
                    if (1 === e.length && e[0] instanceof ht.Edge) {
                        var i = this.target = window.edge = e[0];
                        return this.gatherLine(t, i)
                    }
                    return !1
                }
            }, {
                key: "gatherLine", value: function (t, e) {
                    var i = this.state.screenInfo = {}, n = this.state.info, o = e.getSourcePoint(),
                        a = e.getTargetPoint();
                    return this.state.editEdge = e, n.SP = o, n.TP = a, i.SP = W.toScreenPosition(t, o), i.TP = W.toScreenPosition(t, a), !0
                }
            }, {
                key: "calculatePoint", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a = t.getWidth(),
                        r = t.getHeight(), s = t.getRotation(), h = t.getCorners()[0], d = {x: e * a + n, y: i * r + o},
                        u = Math.pow, c = Math.abs, l = Math.sqrt(u(c(d.x), 2) + u(c(d.y), 2)),
                        g = s + Math.atan2(d.y, d.x);
                    return 0 === s ? {x: h.x + d.x, y: h.y + d.y} : {x: h.x + Math.cos(g) * l, y: h.y + Math.sin(g) * l}
                }
            }, {
                key: "check", value: function (t, e, i) {
                    var n = this._interactor, o = this.state.screenInfo;
                    if (o) {
                        var a = null;
                        for (var s in o) if (W.checkHit(i, o[s], r.checkSize)) {
                            a = s;
                            break
                        }
                        return a ? (n.setCursor("crosshair"), this.state.editKey = a, this.editable = !0, !0) : (this.editable = !1, this.state.editKey = null, void n.setCursor("default"))
                    }
                }
            }, {
                key: "startEdit", value: function (t, e) {
                    if (this.editable) {
                        var i = this.state, n = i.editEdge, o = i.editKey, a = this._interactor.dm, r = void 0,
                            h = o === st ? "source" : "target";
                        n.a(h + ".effective") ? ((r = new ht.Node).s("2d.visible", !1), r.p(t.gv.lp(e)), r.setSize(1, 1), a.add(r), n.a(h + ".temp", r)) : r = o === st ? n.getSource() : n.getTarget(), o === st ? n.setSource(r) : n.setTarget(r), this.setState({tempNode: r}), t.startDragging(e), t.editType = s.ET_EDGE
                    }
                }
            }, {
                key: "handleEdit", value: function (t, e, i) {
                    var n = this._interactor, o = this.state, a = o.tempNode, r = o.editKey, s = o.editEdge, h = o.info,
                        d = r === st ? "source" : "target", u = r === st ? "TP" : st, c = t.getDataAt(e, function (t) {
                            return t !== s && t.s("2d.selectable") && !(t instanceof ht.Edge)
                        }), l = t.lp(e), g = l.x - h[u].x, f = l.y - h[u].y, y = void 0,
                        v = n.invokeSubModule("checkEdgeEdit", !0, c, i);
                    if (v && v.state.editKey) {
                        var p = 0;
                        p = at.indexOf(v.state.editKey), y = rt[p]
                    } else if (s.getTarget() === s.getSource()) {
                        var x = W.getDirection(s, s.s("edge.source.anchor.x"), s.s("edge.source.anchor.y"), edge.getSourceAgent()),
                            _ = at.indexOf(x);
                        y = rt[(_ + 1) % 4]
                    } else y = Math.abs(g) >= Math.abs(f) ? g > 0 ? rt[3] : rt[1] : f > 0 ? rt[0] : rt[2];
                    s.s("edge." + d + ".anchor.x", y.x), s.s("edge." + d + ".anchor.y", y.y), c ? "SP" === r ? s.setSource(c) : s.setTarget(c) : ("SP" === r ? s.setSource(a) : s.setTarget(a), a.p(l)), this.state.hoverNode = c || null, s.a(d + ".effective", !!c)
                }
            }, {
                key: "endEdit", value: function (t) {
                    var e = this.state, i = e.tempNode, n = (e.hoverNode, e.editEdge), o = e.editKey,
                        a = this._interactor, r = a.dm;
                    ("SP" === o ? n.getSource() : n.getTarget()) !== i && (r.remove(i), this.setState({
                        tempNode: null,
                        editEdge: null,
                        hoverNode: null
                    })), a.editType = s.ET_NULL
                }
            }, {
                key: "draw", value: function (t, e, i) {
                    var n = this._interactor;
                    this.state.screenInfo = null, this.gatherInfo(e, i) && n.editType !== s.ET_TEXT && G.drawIcon(n, t, G.EdgeRect, this.state.screenInfo)
                }
            }]), e
        }(),
        ut = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"],
        ct = function (t) {
            function e(t) {
                v(this, e);
                var i = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._interactor = t, i.gv = t.gv, i
            }

            return _(e, F), p(e, [{
                key: "setUp", value: function () {
                    this.gv.mi(this._handleInteractor, this);
                    var t = this.textarea = document.createElement("textarea"),
                        e = this.wrap = document.createElement("div");
                    t.setAttribute("style", "margin: 0;\n\t\t\t\t\t\t\t\t\t\tpadding: " + r.textareaPadding + "px;\n\t\t\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\toutline: none;\n\t\t\t\t\t\t\t\t\t\tresize: none;\n\t\t\t\t\t\t\t\t\t\tborder: node;\n\t\t\t\t\t\t\t\t\t\tborder-width: 0;\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\tcursor: inherit;\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\tleft: 50%;\n\t\t\t\t\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\t\t\t\t\tbackground-color: transparent;"), t.addEventListener("blur", this._endTextEdit.bind(this)), t.addEventListener("keydown", this._handleKeyDown.bind(this)), e.setAttribute("style", "box-sizing:border-box;\n\t\t\t\t\t\t\t\t\tmargin:0;\n\t\t\t\t\t\t\t\t\tpadding:0;\n\t\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\t\t\t\tbox-shadow:0 0 13px rgba(16,142,233, 0.5);\n\t\t\t\t\t\t\t\t\tbackground-color: transparent;"), e.appendChild(t), this.gv.getView().appendChild(e);
                    var i = this.input = document.createElement("input");
                    i.text = "text", i.setAttribute("style", "margin: 0;\n\t\t\t\t\t\t\t\t\t padding: 2px 3px;\n\t\t\t\t\t\t\t\t\t margin-left: -50px;\n\t\t\t\t\t\t\t\t\t width: 100px;\n\t\t\t\t\t\t\t\t\t display: none;\n\t\t\t\t\t\t\t\t\t outline: none;\n\t\t\t\t\t\t\t\t\t position: absolute;\n\t\t\t\t\t\t\t\t\t box-sizing: border-box;\n\t\t\t\t\t\t\t\t\t box-shadow:0 0 13px rgba(16,142,233, 0.5);\n\t\t\t\t\t\t\t\t\t border: 1px solid #d8d8d8;\n\t\t\t\t\t\t\t\t\t text-align: center;"), this.gv.getView().appendChild(i), i.addEventListener("blur", this._endTextEdit.bind(this))
                }
            }, {
                key: "tearDown", value: function () {
                    this.gv.umi(this._handleInteractor), this.gv.getView().removeChild(this.input), this.gv.getView().removeChild(this.textarea)
                }
            }, {
                key: "_handleInteractor", value: function (t) {
                    "doubleClickData" === t.kind && this._startTextEdit(t)
                }
            }, {
                key: "_handleKeyDown", value: function (t) {
                    this.calculateNodeHeight(String.fromCharCode(t.keyCode))
                }
            }, {
                key: "_createHiddenTextarea", value: function () {
                    this._hiddenTextarea = document.createElement("textarea"), this._hiddenTextarea.setAttribute("style", "margin:0; padding:0; position:absolute; overflowY:scroll; resize:none; box-sizing:border-box;"), this._hiddenTextarea.setAttribute("rows", "1"), this.gv.getView().appendChild(this._hiddenTextarea)
                }
            }, {
                key: "_startTextEdit", value: function (t) {
                    t.data instanceof ht.Edge ? this._handleEdgeTextEdit(t) : this._handleNodeTextEdit(t), this._interactor.editType = s.ET_TEXT
                }
            }, {
                key: "_handleNodeTextEdit", value: function (t) {
                    var e = t.data;
                    this.editTarget = t.data, this._hiddenTextarea || this._createHiddenTextarea(), this._textEditingNode = e;
                    var i = this.wrap, n = this.textarea, o = e.a("labelComp"), a = o.a("TBContent"), r = e.getRect(),
                        s = this.gv.getZoom(), h = W.toScreenPosition(this.gv, {x: r.x, y: r.y}), d = r.width * s,
                        u = r.height * s;
                    this.nodeHeight = u, i.style.width = d + "px", i.style.minHeight = u + "px", i.style.top = h.y + "px", i.style.left = h.x + "px", i.style.display = "block", n.style.marginLeft = 0 - .5 * d + "px", a && (n.value = a, o.s("2d.visible", !1)), this.calculateNodeHeight(), setTimeout(function () {
                        n.focus()
                    }, 10)
                }
            }, {
                key: "_handleEdgeTextEdit", value: function (t) {
                    var e = this, i = t.data, n = this.gv.getDataUI(i)._38o.rects.label[0],
                        o = W.toScreenPosition(this.gv, {x: n.x + .5 * n.width, y: n.y + .5 * n.height}),
                        a = this.input.style, r = i.a("edge.text"), s = i.fontSize, h = s + 6;
                    this.editTarget = i, a.display = "block", a.top = o.y + "px", a.left = o.x + "px", a.fontSize = s + "px", a.height = h + "px", a.marginTop = 0 - .5 * h + "px", r && (this.input.value = r), setTimeout(function () {
                        e.input.focus()
                    }, 10)
                }
            }, {
                key: "_endTextEdit", value: function (t) {
                    var e = this.editTarget, i = t.target, n = i.value;
                    if (n = n.replace(/(^\s*)|(\s*$)/g, ""), i === this.input) {
                        var o = this.editTarget;
                        this.input.style.display = "none", o.setLabelText(this.gv, n)
                    } else {
                        var a = e.a("labelComp");
                        this.wrap.style.display = "none", a.s("2d.visible", !0), a.a("TBContent", n)
                    }
                    this._interactor.editType = s.ET_NULL, i.value = ""
                }
            }, {
                key: "calculateNodeStyle", value: function (t, e) {
                    if (e && this.computedStyleCache) return this.computedStyleCache;
                    var i = window.getComputedStyle(t),
                        n = i.getPropertyValue("box-sizing") || i.getPropertyValue("-moz-box-sizing") || i.getPropertyValue("-webkit-box-sizing"),
                        o = parseFloat(i.getPropertyValue("padding-bottom")) + parseFloat(i.getPropertyValue("padding-top")),
                        a = parseFloat(i.getPropertyValue("border-bottom-width")) + parseFloat(i.getPropertyValue("border-top-width")),
                        r = {
                            sizingStyle: ut.map(function (t) {
                                return t + ":" + i.getPropertyValue(t)
                            }).join(";"), paddingSize: o, borderSize: a, boxSizing: n
                        };
                    return e && (this.computedStyleCache = r), r
                }
            }, {
                key: "calculateNodeHeight", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = this.textarea,
                        i = this._hiddenTextarea, n = this.wrap, o = this.nodeHeight,
                        a = this.calculateNodeStyle(e, !1), r = a.paddingSize, s = a.borderSize, h = a.boxSizing,
                        d = a.sizingStyle;
                    i.setAttribute("style", d + ";\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n"), i.value = e.value + t || "";
                    var u = i.scrollHeight;
                    "border-box" === h ? u += s : "content-box" === h && (u -= r), e.style.height = u + "px", e.style.marginTop = 0 - .5 * u + "px", n.style.height = Math.max(u, o) + "px", n.style.marginTop = o < u ? .5 * (o - u) + "px" : "0"
                }
            }]), e
        }(), lt = function (t) {
            function e(t) {
                v(this, e);
                var i = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return i._interactor = t, i.setState("info", {}), i
            }

            return _(e, F), p(e, [{
                key: "setUp", value: function () {
                }
            }, {
                key: "tearDown", value: function () {
                }
            }, {
                key: "gatherInfo", value: function (t) {
                    var e = this.state.hoverNode;
                    if (e && e.getCorners && !(e instanceof ht.Edge)) {
                        var i = this.state.screenInfo = {}, n = this.state.info;
                        this.state.target = e;
                        var o = e.getCorners(), a = new V(o[0]), r = new V(o[1]), s = new V(o[2]), h = new V(o[3]);
                        n.T = a.clone().add(h).divideScalar(2), n.B = r.clone().add(s).divideScalar(2), n.L = a.clone().add(r).divideScalar(2), n.R = h.clone().add(s).divideScalar(2);
                        for (var d in n) i[d] = W.toScreenPosition(t, n[d]);
                        return !0
                    }
                }
            }, {
                key: "checkEdgeEdit", value: function (t, e) {
                    if (this.setState("hoverNode", t || null), t) {
                        var i = this.state.screenInfo;
                        if (i) {
                            var n = null;
                            for (var o in i) if (W.checkHit(e, i[o], r.checkSize)) {
                                n = o;
                                break
                            }
                            return this.state.editKey = n || null, !!n
                        }
                    }
                }
            }, {
                key: "draw", value: function (t, e, i) {
                    var n = this._interactor, o = this.state.direction;
                    this.state.screenInfo = null, this.gatherInfo(e) && n.editType === s.ET_EDGE && G.drawIcon(n, t, G.EdgePoint, this.state.screenInfo), o && console.log("画个标识点")
                }
            }]), e
        }(), gt = function (e) {
            function i(t) {
                v(this, i);
                var e = m(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
                return e._notifier = new ht.Notifier, e._subModules = [new ot(e), new Q(e), new J(e), new dt(e), new ct(e), new lt(e)], e
            }

            return _(i, e), p(i, [{
                key: "setUp", value: function () {
                    var t = this.gv;
                    x(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setUp", this).call(this), this.gv.setEditInteractor(this), this.createEditCanvas(), this.sm.ms(this._handleSelectModelChange, this), t.mi(this._handleInteractor, this), this.dm.onRemoved = this._handleNodeRemove.bind(this), this.invokeSubModule("setUp", !1), this._isInputDirty = !1
                }
            }, {
                key: "tearDown", value: function () {
                    var t = this.gv;
                    x(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "tearDown", this).call(this), this.sm.ums(this._handleSelectModelChange), t.umi(this._handleInteractor), this.dm.onRemoved = function (t) {
                    }, this.invokeSubModule("tearDown", !1)
                }
            }, {
                key: "_handleNodeRemove", value: function (t) {
                    var e = t.a("labelComp");
                    e && this.dm.remove(e), t instanceof ht.Edge && (t.a("source.effective") ? t.a("target.effective") || this.dm.remove(t.a("target.temp")) : this.dm.remove(t.a("source.temp")))
                }
            }, {
                key: "_handleSelectModelChange", value: function (t) {
                    this.draw()
                }
            }, {
                key: "_handleInteractor", value: function (t) {
                    ["betweenMove", "endMove", "betweenPan", "moveRight", "moveUp", "moveDown", "moveLeft"].indexOf(t.kind) >= 0 && this.draw()
                }
            }, {
                key: "_handleInputKeyup", value: function (t) {
                    13 === t.keyCode ? (t.preventDefault(), this.input.blur()) : this._isInputDirty = !0
                }
            }, {
                key: "getSubModule", value: function (t) {
                    var e, i, n, o = this._subModules;
                    for (i = 0, n = o.length; i < n; i++) if ((e = o[i]).catalog === t) return e
                }
            }, {
                key: "invokeSubModule", value: function (t, e) {
                    var i = this._subModules;
                    if (i) for (var n, o, a = Array.prototype.slice.call(arguments, 2), r = 0, s = i.length; r < s; r++) if (n = i[r], (o = n[t]) && void 0 != o.apply(n, a) && e) return n
                }
            }, {
                key: "invokeSubModuleInverse", value: function (t, e) {
                    var i = this._subModules;
                    if (i) for (var n, o, a = Array.prototype.slice.call(arguments, 2), r = i.length - 1; r >= 0; r--) if (n = i[r], (o = n[t]) && void 0 != o.apply(n, a) && e) return n
                }
            }, {
                key: "createEditCanvas", value: function () {
                    var e = ht.Default.createCanvas();
                    this._canvas = e, this.setCanvasSize(), this.gv.getView().appendChild(e), this._canvas.style.position = "absolute", this._g = t(e), W.setAntialias(e, !1), window.addEventListener("resize", this.setCanvasSize.bind(this))
                }
            }, {
                key: "setCanvasSize", value: function () {
                    var t = this, e = this.gv;
                    setTimeout(function () {
                        ht.Default.setCanvas(t._canvas, e.getWidth(), e.getHeight())
                    }, 0)
                }
            }, {
                key: "handle_mousedown", value: function (t) {
                    ht.Default.preventDefault(t);
                    var e = this._checkEdit(t);
                    e && (e.startEdit(this, t), this.editing = !0)
                }
            }, {
                key: "handle_mousewheel", value: function (t) {
                    this.redraw()
                }
            }, {
                key: "handle_mouseup", value: function (t) {
                }
            }, {
                key: "handle_touchstart", value: function (t) {
                    this.handle_mousedown(t)
                }
            }, {
                key: "handle_mousemove", value: function (t) {
                    ht.Default.isDragging() || this.editing || this._checkEdit(t)
                }
            }, {
                key: "handle_touchmove", value: function (t) {
                    this.handle_mousemove(t)
                }
            }, {
                key: "handleWindowTouchMove", value: function (t) {
                    this.handleWindowMouseMove(t)
                }
            }, {
                key: "handleWindowMouseMove", value: function (t) {
                    var e = this._editMod;
                    e && (e.handleEdit(this.gv, t, this._getLogicalPoint(t)), this.redraw())
                }
            }, {
                key: "handleWindowMouseUp", value: function (t) {
                    var e = this, i = this._editMod;
                    e.editing = !1, e.setCursor("default"), i.endEdit(this._getLogicalPoint(t)), e.draw(), this._editMod = null
                }
            }, {
                key: "_checkEdit", value: function (t) {
                    var e = this.gv, i = this._getLogicalPoint(t);
                    return this._editMod = this.invokeSubModule("check", !0, e, t, i) || null
                }
            }, {
                key: "_getValidSelection", value: function () {
                    var t = this.gv, e = [];
                    return t.sm().getSelection().each(function (i) {
                        t.isVisible(i) && e.push(i)
                    }), e
                }
            }, {
                key: "_getLogicalPoint", value: function (t) {
                    var e = ht.Default.getLogicalPoint(t, this._canvas);
                    return new V(e)
                }
            }, {
                key: "redraw", value: function () {
                    this.draw()
                }
            }, {
                key: "draw", value: function () {
                    var t = this;
                    this._drawTimer || (this._drawTimer = setTimeout(function () {
                        delete t._drawTimer, t.drawImpl()
                    }, 0))
                }
            }, {
                key: "drawImpl", value: function () {
                    var t = this._canvas, e = this.gv, i = e.getWidth(), n = e.getHeight(), o = this._g,
                        a = ht.Default.getInternal();
                    t.width === i && t.height === n || a.setCanvas(t, i, n), o.clearRect(0, 0, t.width, t.height);
                    var r = this._getValidSelection();
                    o.save();
                    var s = ht.Default.devicePixelRatio;
                    o.scale(s, s), this.invokeSubModuleInverse("draw", !1, o, e, r), o.restore()
                }
            }, {
                key: "dm", get: function () {
                    return this.gv.dm()
                }
            }, {
                key: "sm", get: function () {
                    return this.gv.dm().sm()
                }
            }, {
                key: "editing", get: function () {
                    return this.gv._editing
                }, set: function (t) {
                    this.gv._editing = t
                }
            }, {
                key: "editType", set: function (t) {
                    this._editType !== t && (this._editType = t, this.redraw())
                }, get: function () {
                    return this._editType || null
                }
            }]), i
        }(ht.graph.Interactor), ft = new (function (t) {
            function e(t) {
                return v(this, e), m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
            }

            return _(e, t), p(e, [{
                key: "setEditable", value: function (t) {
                    x(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setEditable", this).call(this, t), t ? this.setInteractors(new ht.List([new gt(this), new ht.graph.SelectInteractor(this), new ht.graph.MoveInteractor(this), new ht.graph.DefaultInteractor(this), new ht.graph.TouchInteractor(this, {editable: !1})])) : this.setInteractors(new ht.List([new ht.graph.DefaultInteractor(this), new ht.graph.SelectInteractor(this)]))
                }
            }]), e
        }(ht.graph.GraphView)), yt = new ht.widget.RulerFrame(ft), vt = new ht.ui.HTView(yt), pt = ht.ui.DragHelper,
        xt = yt.getTopRulerConfig(), _t = yt.getLeftRulerConfig();
    xt.guideVisible = !0, _t.guideVisible = !0, ft.setEditable(!0), window.gv = ft, vt.addViewListener(function (t) {
        if (t.source instanceof g) if ("dragEnter" === t.kind) pt.acceptDragDrop(t.target); else if ("dragCompleted" === t.kind) {
            var e = t.source, i = new ht.Node, n = ht.Default.getImage(e.getImage());
            i.setImage(e.getImage()), i.setWidth(n.width), i.setHeight(n.height), i.p(ft.lp(t.nativeEvent)), i.s("select.width", 0), i.a("groupId", e.groupId);
            var o = new ht.Node;
            o.setImage("textBox"), o.setHost(i), o.p(ft.lp(t.nativeEvent)), o.s("2d.selectable", !1), o.a("TBContent", ""), o.a("TBPadding", "5 10"), i.a("labelComp", o), ft.dm().add(o), ft.dm().add(i)
        }
    });
    var mt = new ht.ui.RelativeLayout;
    mt.addView(vt, {
        align: "left",
        vAlign: "top",
        width: "match_parent",
        height: "match_parent"
    }), mt.addView(tt.box, {vAlign: "top", align: "left", width: 200, marginLeft: 20});
    var bt = new ht.ui.BorderLayout;
    bt.setToggleVisible(!1), bt.setSplitter(a.SIDEBAR_BORDER_COLOR), bt.setResizable([0, 1, 0, 1]), bt.setSplitterSize([1, 4, 0, 4]), bt.addView(E, {
        region: "top",
        width: "match_parent"
    }), E.getView().parentNode.style.zIndex = 100, bt.addView(f, {region: "left"}), bt.setLeftWidth(a.SIDBAR_WIDTH), bt.addView(mt, {region: "center"}), bt.getLeftView().getView().style.backgroundColor = a.SIDEBAR_BG_COLOR, window.addEventListener("load", function () {
        console.log("HT Workflow Editor vv0.0.1 powered by HT for Web v" + ht.Default.getVersion() + " from www.hightopo.com"), bt.addToDOM(), u.fire("load")
    })
});
