import { o as e, html as t } from "./sinuous/index.js";
import { on as n } from "./sinuous/observable.js";
import { map as s } from "./sinuous/map.js";
import { observe as i } from "./disco/index.js";
import "./sinuous/style.js";
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})("");
class l {
    constructor(s, i) {
        const l = this;
        let r;
        (this.parent = i),
            (this.value = e(s?.value)),
            (this.element = e(s?.element || t`<li>${this.value}</li>`));
        const a = n(this.element, (e) => {
            l
                ? (r && r.classList.remove("list-item"),
                  (r = l.element()),
                  r && r.classList.add("list-item"))
                : a();
        });
    }
    getValue() {
        return this.value();
    }
    setValue(e) {
        return this.value(e);
    }
    getElement() {
        return this.element();
    }
    setElement(e) {
        return this.element(e);
    }
    getParent() {
        return this.parent;
    }
    getIndex() {
        return this.parent?.getItems()?.indexOf(this);
    }
}
const r = (n) => {
    let i = e(n?.items || []);
    const r = t`<ul class="list">${s(i, (e) => t`${e.element}`)}</ul>`;
    return (
        (r.getItems = i),
        (r.setItems = i),
        (r.clearItems = (e) => r.setItems([])),
        (r.getItem = (e) => r.getItems()[e]),
        (r.itemRemoveByKey = (e) => {
            let t = r.getItems(),
                n = -1 === e ? [] : t.splice(e, 1);
            return r.setItems(t), n;
        }),
        (r.itemRemoveByValue = (e) => r.itemRemoveByKey(e.getIndex())),
        (r.itemPush = (e) => (r.setItems(r.getItems().concat(e)), e)),
        (r.itemInsert = (e, t) => {
            let n = r.getItem();
            return (
                e instanceof Array ? n.splice(t, 0, ...e) : n.splice(t, 0, e),
                r.setItems(n),
                e
            );
        }),
        (r.itemUnshift = (e) => {
            let t = r.getItems();
            return e instanceof Array ? t.unshift(...e) : t.unshift(e), r.setItems(t), e;
        }),
        (r.itemCreate = (e) => new l(e, r)),
        (r.itemCreateAndPush = (e) => r.itemPush(r.itemCreate(e))),
        (r.itemCreateAndInsert = (e, t) => r.itemInsert(r.itemCreate(e), t)),
        (r.itemCreateAndUnshift = (e) => r.itemUnshift(r.itemCreate(e))),
        (r.itemsCreateAndPush = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = r.itemCreate(e[n]);
            return r.itemPush(t);
        }),
        (r.itemsCreateAndInsert = (e, t) => {
            let n = [];
            for (var s = 0; s < e.length; s++) n[s] = r.itemCreate(e[s]);
            return r.itemInsert(n, t);
        }),
        (r.itemsCreateAndUnshift = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = r.itemCreate(e[n]);
            return r.itemUnshift(t);
        }),
        r
    );
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".nav-header, .nav-header-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.nav-header-section, .nav-header-item {\n  height: 100%; }\n\n.nav-header-section {\n  list-style-type: none; }\n\n.nav-header-start {\n  align-self: flex-start; }\n\n.nav-header-center {\n  align-self: center; }\n\n.nav-header-end {\n  align-self: flex-end; }\n",
);
class a extends l {
    constructor(e, t) {
        super(e, t);
        const s = this;
        let i;
        const l = n(this.element, (e) => {
            if (!s) return l();
            i && i.classList.remove("nav-header-item"),
                (i = s.element()),
                i && i.classList.add("nav-header-item");
        });
    }
}
const o = (e) => {
        const t = r(e);
        return (
            t.classList.add("nav-header-section"), (t.itemCreate = (e) => new a(e, t)), t
        );
    },
    d = (e) => {
        var n = o(e?.sectionStart),
            s = o(e?.sectionCenter),
            i = o(e?.sectionEnd);
        n.classList.add("nav-header-start"),
            s.classList.add("nav-header-center"),
            i.classList.add("nav-header-end");
        const l = t`
    <nav class="nav-header">
        ${n}
        ${s}
        ${i}
    </nav>
    `;
        return (l.sectionStart = n), (l.sectionCenter = s), (l.sectionEnd = i), l;
    };
function c(n) {
    var s = e(n),
        i = t`<div class="workspace">${s}</div>`;
    return (i.view = s), (i.getView = s), (i.setView = s), i;
}
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})("");
function u(e) {
    const n = d(e?.header),
        s = c(e?.body),
        i = t`
    <div class="app-shell">
        ${n}
        ${s}
    </div>
    `;
    return (
        (i.header = n),
        (i.body = s),
        (i.sectionStart = n.sectionStart),
        (i.sectionCenter = n.sectionCenter),
        (i.sectionEnd = n.sectionEnd),
        (i.getView = s.getView),
        (i.setView = s.setView),
        i
    );
}
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(".app-shell .workspace {\n  height: 100%; }\n");
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(".collapse-category:not(.is-active) .collapse-category-body {\n  display: none; }\n");
const m = (s) => {
    let i = e(s?.header || t`<div></div>`),
        l = e(s?.body || t`<div></div>`);
    const r = t`<div class="collapse-category">${i}${l}</div>`;
    let a, o;
    (r.getHeader = i),
        (r.setHeader = i),
        (r.getBody = l),
        (r.setBody = l),
        (r.getExpanded = (e) => r.expanded),
        (r.setExpanded = (e) => (e ? r.expand() : r.collapse())),
        (r.expand = (e) => {
            r.dispatchEvent(new Event("beforeExpand")) &&
                (r.expanded ||
                    ((r.expanded = !0),
                    r.dispatchEvent(new Event("onExpand")),
                    r.classList.add("is-active")));
        }),
        (r.collapse = (e) => {
            r.dispatchEvent(new Event("beforeCollapse")) &&
                r.expanded &&
                ((r.expanded = !1),
                r.dispatchEvent(new Event("onCollapse")),
                r.classList.remove("is-active"));
        }),
        (r.toggle = (e) => r.setExpanded(!r.getExpanded()));
    const d = n(i, (e) => {
        r
            ? (a &&
                  (a.classList.remove("collapse-category-header"),
                  a.removeEventListener("click", o)),
              (a = i()),
              a &&
                  (a.classList.add("collapse-category-header"),
                  (o = r.toggle),
                  a.addEventListener("click", o)))
            : d();
    });
    let c;
    const u = n(l, (e) => {
        r
            ? (c && c.classList.remove("collapse-category-body"),
              (c = l()),
              c && c.classList.add("collapse-category-body"))
            : u();
    });
    return r.setExpanded(s?.expanded || !1), r;
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".dropdown {\n  position: relative; }\n  .dropdown:not(.is-active) .dropdown-body {\n    display: none; }\n  .dropdown.is-left .dropdown-body {\n    left: 0px; }\n  .dropdown.is-center .dropdown-body {\n    left: 50%;\n    transform: translateX(-50%); }\n  .dropdown.is-right .dropdown-body {\n    right: 0px; }\n\n.dropdown-body {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  z-index: 1; }\n",
);
const h = (e) => {
    const t = m(e);
    let s;
    t.classList.add("dropdown"),
        (t.isHoverable = e?.isHoverable),
        t.addEventListener(
            "mouseover",
            (e) => {
                t.isHoverable && t.expand();
            },
            { capture: !0 },
        ),
        t.addEventListener(
            "mouseout",
            (e) => {
                t.isHoverable && t.collapse();
            },
            { capture: !0 },
        );
    const i = n(t.getHeader, (e) => {
        t
            ? (s && s.classList.remove("dropdown-header"),
              (s = t.getHeader()),
              s && s.classList.add("dropdown-header"))
            : i();
    });
    let l, r;
    const a = n(t.getBody, (e) => {
        t
            ? (l &&
                  (l.classList.remove("dropdown-body"),
                  l.removeEventListener("click", r)),
              (l = t.getBody()),
              l &&
                  (l.classList.add("dropdown-body"),
                  (r = (e) => t.collapse()),
                  l.addEventListener("click", r)))
            : a();
    });
    return t;
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".dropdown-list .dropdown-body {\n  min-width: min-content; }\n\n.dropdown-list.is-active .dropdown-body.list {\n  display: flex;\n  flex-direction: column; }\n",
);
const p = (e) => {
    e || (e = {}), (e.body = e.body || r(e));
    const t = h(e);
    return (
        t.classList.add("dropdown-list"),
        (t.getItems = (n) => t.getBody().getItems(e)),
        (t.setItems = (e) => t.getBody().setItems(e)),
        (t.clearItems = (e) => t.getBody().clearItems()),
        (t.getItem = (e) => t.getBody().getItem(e)),
        (t.itemRemoveByKey = (e) => t.getBody().itemRemoveByKey(e)),
        (t.itemRemoveByValue = (e) => t.getBody().itemRemoveByValue(e)),
        (t.itemPush = (e) => t.getBody().itemPush(e)),
        (t.itemInsert = (e, n) => t.getBody().itemInsert(e, n)),
        (t.itemUnshift = (e) => t.getBody().itemUnshift(e)),
        (t.itemCreate = (e) => t.getBody().itemCreate(e)),
        (t.itemCreateAndPush = (e) => t.getBody().itemCreateAndPush(e)),
        (t.itemCreateAndInsert = (e, n) => t.getBody().itemCreateAndInsert(e, n)),
        (t.itemCreateAndUnshift = (e) => t.getBody().itemCreateAndUnshift(e)),
        (t.itemsCreateAndPush = (e) => t.getBody().itemsCreateAndPush(e)),
        (t.itemsCreateAndInsert = (e, n) => t.getBody().itemsCreateAndInsert(e, n)),
        (t.itemsCreateAndUnshift = (e) => t.getBody().itemsCreateAndUnshift(e)),
        t
    );
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".menu {\n  position: absolute;\n  width: max-content;\n  height: max-content;\n  list-style-type: none;\n  z-index: 1; }\n  .menu:not(.is-active) {\n    display: none; }\n",
);
class v extends l {
    constructor(s, i) {
        super(s, i);
        const l = this;
        let r,
            a,
            o = s?.isHoverable;
        (this.isHoverable = void 0 === o || o),
            (this.menu = e(s?.menu)),
            s?.element || this.setElement(t`<li>${this.value}${this.menu}</li>`);
        const d = n(this.element, (e) => {
            if (!l) return d();
            r && (r.classList.remove("menu-item"), r.removeEventListener("mouseover", a)),
                (r = l.element()),
                r &&
                    ((a = (e) => {
                        l.isHoverable && l.parent?.itemSetActive(l, !0);
                    }),
                    r.classList.add("menu-item"),
                    r.addEventListener("mouseover", a, { capture: !0 }));
        });
    }
    getMenu() {
        return this.menu();
    }
    setMenu(e) {
        this.menu(e);
    }
    menuHide() {
        this.getMenu()?.hide();
    }
    menuShow() {
        let e = this.getElement();
        if (!e) return;
        let t = this.getMenu();
        if (!t) return;
        t.show();
        let n = this.getParent();
        if (!n) return;
        let s = t.getItem(0);
        if (!s) return;
        let i = s.getElement()?.getBoundingClientRect();
        if (!i) return;
        let l = e.getBoundingClientRect(),
            r = n.getBoundingClientRect(),
            a = t.getBoundingClientRect(),
            o = r.x + r.width + a.width > window.screen.width ? -a.width : r.width,
            d = l.y - r.y - (i.y - a.y),
            c = o + a.width - window.screen.width;
        c > 0 && (o -= c);
        let u = d + a.height - window.screen.height;
        u > 0 && (d -= u), t.setPos(o, d);
    }
}
const g = (e) => {
    const t = r(e);
    return (
        t.classList.add("menu"),
        (t.itemCreate = (e) => new v(e, t)),
        (t.itemGetActive = (e) => t.itemActive),
        (t.itemSetActive = (e, n) => {
            let s = t.itemActive;
            s && (s.getElement()?.classList.remove("is-active"), s.menuHide()),
                e && (e.getElement()?.classList.add("is-active"), n && e.menuShow()),
                (t.itemActive = e);
        }),
        (t.hide = (e) => {
            t.dispatchEvent(new Event("beforeHide", { cancelable: !0 })) &&
                (t.classList.remove("is-active"), t.dispatchEvent(new Event("onHide")));
        }),
        (t.show = (e) => {
            t.dispatchEvent(new Event("beforeShow", { cancelable: !0 })) &&
                (t.itemSetActive(),
                t.classList.add("is-active"),
                t.dispatchEvent(new Event("onShow")));
        }),
        (t.setPos = (e, n) => {
            let s = new Event("beforeSetPos", { cancelable: !0 });
            if (((s.positionX = e), (s.positionY = n), !t.dispatchEvent(s))) return;
            (t.style.left = s.positionX + "px"), (t.style.top = s.positionY + "px");
            let i = new Event("onSetPos");
            (i.positionX = s.positionX), (i.positionY = s.positionY), t.dispatchEvent(i);
        }),
        t
    );
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})("");
const f = (e) => {
    e || (e = {}), (e.body = e.body || g(e));
    const t = h(e);
    return (
        t.classList.add("dropdown-menu"),
        t.addEventListener("onExpand", (e) => t.getBody()?.show()),
        t.addEventListener("onCollapse", (e) => t.getBody()?.hide()),
        (t.getItems = (n) => t.getBody().getItems(e)),
        (t.setItems = (e) => t.getBody().setItems(e)),
        (t.clearItems = (e) => t.getBody().clearItems()),
        (t.getItem = (e) => t.getBody().getItem(e)),
        (t.itemRemoveByKey = (e) => t.getBody().itemRemoveByKey(e)),
        (t.itemRemoveByValue = (e) => t.getBody().itemRemoveByValue(e)),
        (t.itemPush = (e) => t.getBody().itemPush(e)),
        (t.itemInsert = (e, n) => t.getBody().itemInsert(e, n)),
        (t.itemUnshift = (e) => t.getBody().itemUnshift(e)),
        (t.itemCreate = (e) => t.getBody().itemCreate(e)),
        (t.itemCreateAndPush = (e) => t.getBody().itemCreateAndPush(e)),
        (t.itemCreateAndInsert = (e, n) => t.getBody().itemCreateAndInsert(e, n)),
        (t.itemCreateAndUnshift = (e) => t.getBody().itemCreateAndUnshift(e)),
        (t.itemsCreateAndPush = (e) => t.getBody().itemsCreateAndPush(e)),
        (t.itemsCreateAndInsert = (e, n) => t.getBody().itemsCreateAndInsert(e, n)),
        (t.itemsCreateAndUnshift = (e) => t.getBody().itemsCreateAndUnshift(e)),
        (t.itemGetActive = (e) => t.getBody().itemGetActive()),
        (t.itemSetActive = (e, n) => t.getBody().itemSetActive(e, n)),
        t
    );
};
class y {
    constructor(s, i) {
        const l = this;
        let r;
        (this.parent = i),
            (this.value = e(s?.value)),
            (this.element = e(s?.element || t`<li>${this.value}</li>`));
        const a = n(this.element, (e) => {
            l
                ? (r && r.classList.remove("hlist-item"),
                  (r = this.element()),
                  r && r.classList.add("hlist-item"))
                : a();
        });
    }
    getValue() {
        return this.value();
    }
    setValue(e) {
        return this.value(e);
    }
    getElement() {
        return this.element();
    }
    setElement(e) {
        return this.element(e);
    }
    getParent() {
        return this.parent;
    }
    getIndex() {
        return this.parent?.getItems()?.indexOf(this);
    }
}
const w = (n) => {
    let i = e(n?.items || []);
    const l = t`<ul class="hlist">${s(i, (e) => t`${e.element}`)}</ul>`;
    return (
        (l.getItems = i),
        (l.setItems = i),
        (l.clearItems = (e) => l.setItems([])),
        (l.getItem = (e) => l.getItems()[e]),
        (l.itemRemoveByKey = (e) => {
            let t = l.getItems(),
                n = -1 === e ? [] : t.splice(e, 1);
            return l.setItems(t), n;
        }),
        (l.itemRemoveByValue = (e) => l.itemRemoveByKey(e.getIndex())),
        (l.itemPush = (e) => (l.setItems(l.getItems().concat(e)), e)),
        (l.itemInsert = (e, t) => {
            let n = l.getItem();
            return (
                t instanceof Array ? n.splice(e, 0, ...t) : n.splice(e, 0, t),
                l.setItems(n),
                t
            );
        }),
        (l.itemUnshift = (e) => {
            let t = l.getItems();
            return e instanceof Array ? t.unshift(...e) : t.unshift(e), l.setItems(t), e;
        }),
        (l.itemCreate = (e) => new y(e, l)),
        (l.itemCreateAndPush = (e) => l.itemPush(l.itemCreate(e))),
        (l.itemCreateAndInsert = (e, t) => l.itemInsert(t, l.itemCreate(e))),
        (l.itemCreateAndUnshift = (e) => l.itemUnshift(l.itemCreate(e))),
        (l.itemsCreateAndPush = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = l.itemCreate(e[n]);
            return l.itemPush(t);
        }),
        (l.itemsCreateAndInsert = (e, t) => {
            let n = [];
            for (var s = 0; s < e.length; s++) n[s] = l.itemCreate(e[s]);
            return l.itemInsert(t, n);
        }),
        (l.itemsCreateAndUnshift = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = l.itemCreate(e[n]);
            return l.itemUnshift(t);
        }),
        l
    );
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".modal-background {\n  display: flex;\n position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #0000004a; }\n\n.modal-window {\n  position: relative;\n  background-color: white;\n  margin: auto; }\n",
);
let C = [];
const b = (s) => {
    let i = e(s?.contents),
        l = e(s?.window || t`<div>${i}</div>`),
        r = e(s?.background || t`<div>${l}</div>`);
    const a = t`<div class="modal">${r}</div>`;
    let o, d, c, u, m, h;
    (a.contents = i),
        (a.window = l),
        (a.background = r),
        (a.getContents = a.contents),
        (a.setContents = a.contents),
        (a.getWindow = a.window),
        (a.setWindow = a.window),
        (a.getBackground = a.background),
        (a.setBackground = a.background),
        C.push(a);
    let p = a.window();
    function v(e) {
        (p.style.left = e.pageX - u + "px"), (p.style.top = e.pageY - m + "px");
    }
    p.onmousedown = function (e) {
        var t;
        (t = p.getBoundingClientRect()),
            (h = { top: t.top + pageYOffset, left: t.left + pageXOffset }),
            (u = e.pageX - h.left),
            (m = e.pageY - h.top),
            m < 20 &&
                ((p.style.position = "absolute"),
                v(e),
                (document.onmousemove = v),
                (p.onmouseup = () => {
                    (p.onmouseup = null), (document.onmousemove = null);
                }));
    };
    const g = n(a.background, (e) => {
        if (!a) return g();
        o &&
            (o.classList.remove("modal-background"),
            o.removeEventListener("click", d),
            document.removeEventListener("keyup", c)),
            (o = a.background()),
            o &&
                (o.classList.add("modal-background"),
                (d = (e) => {
                    e.target == o &&
                        (C.splice(C.length - 1, 1)[0].dispatchEvent(new Event("onClose")),
                        0 == C.length && document.removeEventListener("keyup", c));
                }),
                (c = (e) => {
                    27 === e.keyCode &&
                        (C.splice(C.length - 1, 1)[0].dispatchEvent(new Event("onClose")),
                        0 == C.length && document.removeEventListener("keyup", c));
                }),
                o.addEventListener("mousedown", d),
                1 == C.length && document.addEventListener("keyup", c));
    });
    let f;
    const y = n(a.window, (e) => {
        if (!a) return y();
        f && f.classList.remove("modal-window"),
            (f = a.window()),
            f && f.classList.add("modal-window");
    });
    return a;
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".table {\n  table-layout: fixed;\n  display: grid; }\n\n.table-header, .table-body, .table-row, .table-row-header {\n  display: contents; }\n\n.table-column {\n  position: relative;\n  color: black; }\n\n.table-cell, .table-column {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border: 1px solid; }\n\n.table-divider {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 3px;\n  background-color: black;\n  opacity: 0;\n  cursor: col-resize;\n  user-select: none; }\n  .table-divider.is-active {\n    opacity: 0.5; }\n",
);
class E {
    constructor(s, i) {
        const l = this;
        (this.parent = i), (this.value = e(s?.value));
        let r,
            a = s?.element;
        void 0 === a && (a = t`<td>${this.value}</td>`), (this.element = e(a));
        const o = n(this.element, (e) => {
            if (!l) return o();
            r && r.classList.remove("table-cell"),
                (r = l.element()),
                r && r.classList.add("table-cell");
        });
    }
    getValue() {
        return this.value();
    }
    setValue(e) {
        return this.value(e);
    }
    getElement() {
        return this.element();
    }
    setElement(e) {
        return this.element(e);
    }
    getParent() {
        return this.parent;
    }
    getIndex() {
        return this.getParent()?.getCells()?.indexOf(this);
    }
}
class L {
    constructor(i, l) {
        const r = this;
        (this.parent = l), (this.cells = e(i?.cells || []));
        let a,
            o = i?.element;
        void 0 === o && (o = t`<tr>${s(this.cells, (e) => t`${e.element}`)}</tr>`),
            (this.element = e(o));
        const d = n(this.element, (e) => {
            if (!r) return d();
            a && a.classList.remove("table-row"),
                (a = r.element()),
                a && a.classList.add("table-row");
        });
    }
    getElement() {
        return this.element();
    }
    setElement(e) {
        return this.element(e);
    }
    getParent() {
        return this.parent;
    }
    getIndex() {
        return this.parent?.getRows()?.indexOf(this);
    }
    getCells() {
        return this.cells();
    }
    setCells(e) {
        return this.cells(e);
    }
    clearCells() {
        this.setCells([]);
    }
    getCell(e) {
        return this.getCells()[e];
    }
    cellRemoveByKey(e) {
        let t = this.getCells(),
            n = -1 === e ? [] : t.splice(e, 1);
        return this.setCells(t), n;
    }
    cellRemoveByValue(e) {
        return this.cellRemoveByKey(e.getIndex());
    }
    cellPush(e) {
        return this.setCells(this.getCells().concat(e)), e;
    }
    cellInsert(e, t) {
        let n = this.getCells();
        return (
            t instanceof Array ? n.splice(e, 0, ...t) : n.splice(e, 0, t),
            this.setCells(n),
            t
        );
    }
    cellUnshift(e) {
        let t = this.getCells();
        return e instanceof Array ? t.unshift(...e) : t.unshift(e), this.setCells(t), e;
    }
    cellCreate(e) {
        return new E(e, this);
    }
    cellCreateAndPush(e) {
        return this.cellPush(this.cellCreate(e));
    }
    cellCreateAndInsert(e, t) {
        return this.cellInsert(e, this.cellCreate(t));
    }
    cellCreateAndUnshift(e, t) {
        return this.cellUnshift(e, this.cellCreate(t));
    }
    cellsCreateAndPush = (e) => {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.cellCreate(e[n]);
        return this.cellPush(t);
    };
    cellsCreateAndInsert = (e, t) => {
        let n = [];
        for (var s = 0; s < e.length; s++) n[s] = this.cellCreate(e[s]);
        return this.cellInsert(t, n);
    };
    cellsCreateAndUnshift = (e) => {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.cellCreate(e[n]);
        return this.cellUnshift(t);
    };
}
class x {
    constructor(s, i) {
        const l = this;
        (this.parent = i),
            (this.value = e(s?.value)),
            (this.width = e(s?.width || 0)),
            (this.doubleClickDuration = s?.doubleClickDuration || 500);
        let r = s?.draggable;
        null == r && (r = !0);
        let a = s?.droppable;
        null == a && (a = !0), (this.droppable = a);
        let o = s?.divider;
        void 0 === o && (o = t`<span></span>`), (this.divider = e(o));
        let d,
            c,
            u,
            m,
            h = s?.element;
        void 0 === h &&
            ((h = t`<th>${this.value}${this.divider}</th>`),
            r && h.setAttribute("draggable", !0)),
            (this.element = e(h));
        const p = n(this.divider, (e) => {
                if (!l) return p();
                if (
                    (d &&
                        (d.classList.remove("table-divider"),
                        d.removeEventListener("mousedown", c),
                        d.removeEventListener("touchstart", c),
                        document.removeEventListener("mousemove", u),
                        document.removeEventListener("mouseup", m),
                        document.removeEventListener("touchmove", u),
                        document.removeEventListener("touchend", m),
                        document.removeEventListener("touchcancel", m)),
                    (d = l.divider()),
                    !d)
                )
                    return;
                let t, n;
                d.classList.add("table-divider"),
                    (c = (e) => {
                        let s = t;
                        (t = e.timeStamp),
                            void 0 !== s &&
                                e.timeStamp - s < l.doubleClickDuration &&
                                l.fit();
                        let i = e.touches ? e.touches[0] : null;
                        i && (n = i.screenX),
                            d.classList.add("is-active"),
                            document.addEventListener("mousemove", u),
                            document.addEventListener("mouseup", m, { once: !0 }),
                            document.addEventListener("touchmove", u),
                            document.addEventListener("touchend", m, { once: !0 }),
                            document.addEventListener("touchcancel", m, { once: !0 }),
                            e.preventDefault();
                    }),
                    (u = (e) => {
                        if (!d) return;
                        let t = e.movementX,
                            s = e.touches ? e.touches[0] : null;
                        s && ((t = n ? s.screenX - n : 0), (n = s.screenX));
                        let i = l.width(),
                            r = i + t;
                        if (Math.round(Math.abs(r - i)) < 1) return;
                        let a = l.getMinWidth();
                        r < a && (r = a), l.width(r), e.preventDefault();
                    }),
                    (m = (e) => {
                        d && d.classList.remove("is-active"),
                            document.removeEventListener("mousemove", u),
                            document.removeEventListener("touchmove", u),
                            e.preventDefault();
                    }),
                    d.addEventListener("mousedown", c),
                    d.addEventListener("touchstart", c);
            }),
            v = n(this.width, (e) => {
                if (!l) return v();
                l.getParent()?.updateWidth();
            });
        let g, f, y, w, C;
        const b = n(this.element, (e) => {
            if (!l) return b();
            g &&
                (g.classList.remove("table-column"),
                g.setAttribute("draggable", f),
                g.removeEventListener("dragstart", y),
                g.removeEventListener("dragover", w),
                g.removeEventListener("drop", C)),
                (g = l.element()),
                g &&
                    (g.classList.add("table-column"),
                    (f = g.getAttribute("draggable")),
                    (y = (e) =>
                        e.dataTransfer.setData("text/plain", l.getIndex().toString())),
                    (w = (e) => {
                        l.droppable && e.preventDefault();
                    }),
                    (C = (e) => {
                        if ((e.preventDefault(), !e.dataTransfer)) return;
                        let t = parseInt(e.dataTransfer.getData("text/plain"));
                        if (null == t || t < 0) return;
                        let n = l.getIndex();
                        if (null == n || n < 0) return;
                        if (n === t) return;
                        let s = l.getParent();
                        if (s) {
                            var i = s.getColumns(),
                                r = i.splice(t, 1)[0];
                            r && i.splice(n, 0, r);
                            var a = s.getRows();
                            for (let e = 0; e < a.length; e++) {
                                var o = a[e].getCells(),
                                    d = o.splice(t, 1)[0];
                                d && o.splice(n, 0, d), a[e].setCells(o);
                            }
                            s.setColumns(i);
                        }
                    }),
                    g.addEventListener("dragstart", y, { capture: !0 }),
                    g.addEventListener("dragover", w, { capture: !0 }),
                    g.addEventListener("drop", C, { capture: !0 }));
        });
    }
    getValue() {
        return this.value();
    }
    setValue(e) {
        return this.value(e);
    }
    getElement() {
        return this.element();
    }
    setElement(e) {
        return this.element(e);
    }
    getDivider() {
        return this.divider();
    }
    setDivider(e) {
        return this.divider(e);
    }
    getParent() {
        return this.parent;
    }
    getIndex() {
        return this.parent?.getColumns()?.indexOf(this);
    }
    getDraggable() {
        return this.getElement()?.getAttribute("draggable");
    }
    setDraggable(e) {
        return this.getElement()?.setAttribute("draggable", e);
    }
    getDroppable() {
        return this.droppable;
    }
    setDroppable(e) {
        this.droppable = e;
    }
    getWidth() {
        return this.width();
    }
    setWidth(e) {
        return this.width(e);
    }
    getMinWidth() {
        let e = this.getElement();
        if (!e) return;
        let t = getComputedStyle(e),
            n = parseFloat(t?.paddingLeft);
        (n && NaN !== n) || (n = 0);
        let s = parseFloat(t?.paddingRight);
        (s && NaN !== s) || (s = 0);
        let i = this.getDivider()?.offsetWidth;
        return (i && NaN !== i) || (i = 0), i + n + s;
    }
    getMaxWidth() {
        let e = this.getIndex();
        if (null == e || e < 0) return;
        let t = this.getMinWidth();
        return (
            this.setWidth("max-content"),
            (t = this.getElement().getBoundingClientRect().width + 1),
            this.setWidth(t),
            t
        );
    }
    fit() {
        let e = this.getMaxWidth();
        if (null != e) return this.setWidth(e), e;
    }
    getDoubleClickDuration() {
        return this.doubleClickDuration;
    }
    setDoubleClickDuration(e) {
        this.doubleClickDuration = e;
    }
}
const $ = (i) => {
    let l = e(i?.columns || []),
        r = e(i?.rows || []);
    const a = t`
    <table class="table">
        <thead class="table-header">
            <tr class="table-row-header">${s(l, (e) => t`${e.element}`)}</tr>
        </thead>
        <tbody class="table-body">
            ${s(r, (e) => t`${e.element}`)}
        </tbody>
    </table>
    `;
    a.updateWidth = (e) =>
        (a.style.gridTemplateColumns = l()
            .map((e) => {
                let t = e.width();
                return "string" == typeof t ? t : t + "px";
            })
            .join(" "));
    const o = n(l, (e) => {
        if (!a) return o();
        a?.updateWidth();
    });
    return (
        (a.getColumns = l),
        (a.setColumns = l),
        (a.getColumn = (e) => a.getColumns()[e]),
        (a.clearColumns = (e) => a.setColumns([])),
        (a.columnRemoveByKey = (e) => {
            let t = a.getColumns(),
                n = -1 === e ? [] : t.splice(e, 1);
            return a.setColumns(t), n;
        }),
        (a.columnRemoveByValue = (e) => a.columnRemoveByKey(e.getIndex())),
        (a.columnPush = (e) => (a.setColumns(a.getColumns().concat(e)), e)),
        (a.columnInsert = (e, t) => {
            let n = a.getColumns();
            return (
                e instanceof Array ? n.splice(t, 0, ...e) : n.splice(t, 0, e),
                a.setColumns(n),
                e
            );
        }),
        (a.columnUnshift = (e) => {
            let t = a.getColumns();
            return (
                e instanceof Array ? t.unshift(...e) : t.unshift(e), a.setColumns(t), e
            );
        }),
        (a.columnCreate = (e) => new x(e, a)),
        (a.columnCreateAndPush = (e) => a.columnPush(a.columnCreate(e))),
        (a.columnCreateAndInsert = (e, t) => a.columnInsert(a.columnCreate(e), t)),
        (a.columnCreateAndUnshift = (e) => a.columnUnshift(a.columnCreate(e))),
        (a.columnsCreateAndPush = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = a.columnCreate(e[n]);
            return a.columnPush(t);
        }),
        (a.columnsCreateAndInsert = (e, t) => {
            let n = [];
            for (var s = 0; s < e.length; s++) n[s] = a.columnCreate(e[s]);
            return a.columnInsert(n, t);
        }),
        (a.columnsCreateAndUnshift = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = a.columnCreate(e[n]);
            return a.columnUnshift(t);
        }),
        (a.getRows = r),
        (a.setRows = r),
        (a.getRow = (e) => a.getRows()[e]),
        (a.clearRows = (e) => a.setRows([])),
        (a.rowRemoveByKey = (e) => {
            let t = a.getRows(),
                n = -1 === e ? [] : t.splice(e, 1);
            return a.setRows(t), n;
        }),
        (a.rowRemoveByValue = (e) => a.rowRemoveByKey(e.getIndex())),
        (a.rowPush = (e) => (a.setRows(a.getRows().concat(e)), e)),
        (a.rowInsert = (e, t) => {
            let n = a.getRows();
            return (
                t instanceof Array ? n.splice(e, 0, ...t) : n.splice(e, 0, t),
                a.setRows(n),
                t
            );
        }),
        (a.rowUnshift = (e) => {
            let t = a.getRows();
            return e instanceof Array ? t.unshift(...e) : t.unshift(e), a.setRows(t), e;
        }),
        (a.rowCreate = (e) => new L(e, a)),
        (a.rowCreateAndPush = (e) => a.rowPush(a.rowCreate(e))),
        (a.rowCreateAndInsert = (e, t) => a.rowInsert(t, a.rowCreate(e))),
        (a.rowCreateAndUnshift = (e) => a.rowUnshift(a.rowCreate(e))),
        (a.rowsCreateAndPush = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = a.rowCreate(e[n]);
            return a.rowPush(t);
        }),
        (a.rowsCreateAndInsert = (e, t) => {
            let n = [];
            for (var s = 0; s < e.length; s++) n[s] = a.rowCreate(e[s]);
            return a.rowInsert(t, n);
        }),
        (a.rowsCreateAndUnshift = (e) => {
            let t = [];
            for (var n = 0; n < e.length; n++) t[n] = a.rowCreate(e[n]);
            return a.rowUnshift(t);
        }),
        (a.getCells = (e) => {
            let t = [],
                n = a.getRows();
            for (let e = 0; e < n.length; e++) {
                let s = n[e]?.getCells();
                if (s) for (let e = 0; e < s.length; e++) t[t.length] = s[e];
            }
            return t;
        }),
        (a.getCell = (e, t) => a.getRows()[e]?.getCell(t)),
        a
    );
};
!(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if (e && "undefined" != typeof document) {
        var s = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"),
            "top" === n && s.firstChild
                ? s.insertBefore(i, s.firstChild)
                : s.appendChild(i),
            i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
    }
})(
    ".tree-node {\n  width: max-content; }\n  .tree-node > .collapse-category-body > .tree-node {\n    padding-left: 16px; }\n  .tree-node.is-root > .collapse-category-body > .tree-node {\n    padding-left: unset; }\n",
);
class k extends l {
    constructor(s, i) {
        super(s, i);
        const l = this;
        let a;
        this.element = e(
            s?.element ||
                m({
                    header: s?.header || t`<div></div>`,
                    body: s?.body || r({ items: s?.items }),
                }),
        );
        const o = n(this.element, (e) => {
            l
                ? (a && a.classList.remove("tree-node"),
                  (a = l.element()),
                  a && a.classList.add("tree-node"))
                : o();
        });
    }
    getElement() {
        return this.element();
    }
    setElement(e) {
        return this.element(e);
    }
    getHeader() {
        return this.getElement()?.getHeader();
    }
    setHeader(e) {
        return this.getElement()?.setHeader(e);
    }
    getBody() {
        return this.getElement()?.getBody();
    }
    setBody(e) {
        return this.getElement()?.setBody(e);
    }
    getItems() {
        return this.getBody()?.getItems();
    }
    setItems(e) {
        return this.getBody()?.setItems(e);
    }
    clearItems() {
        return this.getBody()?.clearItems();
    }
    getItem(e) {
        return this.getBody()?.getItem(e);
    }
    itemRemoveByKey(e) {
        return this.getBody()?.itemRemoveByKey(e);
    }
    itemRemoveByValue(e) {
        return this.getBody()?.itemRemoveByValue(e);
    }
    itemPush(e) {
        return this.getBody()?.itemPush(e);
    }
    itemInsert(e, t) {
        return this.getBody()?.itemInsert(e, t);
    }
    itemUnshift(e) {
        return this.getBody()?.itemUnshift(e);
    }
    itemCreate(e) {
        return this.getBody()?.itemCreate(e);
    }
    itemCreateAndPush(e) {
        return this.itemPush(this.itemCreate(e));
    }
    itemCreateAndInsert(e) {
        return this.itemInsert(this.itemCreate(e));
    }
    itemCreateAndUnshift(e) {
        return this.itemUnshift(this.itemCreate(e));
    }
    itemsCreateAndPush(e) {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.itemCreate(e[n]);
        return this.itemPush(t);
    }
    itemsCreateAndInsert(e) {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.itemCreate(e[n]);
        return this.itemInsert(t);
    }
    itemsCreateAndUnshift(e) {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.itemCreate(e[n]);
        return this.itemUnshift(t);
    }
    nodeCreate(e) {
        return new k(e, this);
    }
    nodeCreateAndPush(e) {
        return this.itemPush(this.nodeCreate(e));
    }
    nodeCreateAndInsert(e, t) {
        return this.itemInsert(this.nodeCreate(e), t);
    }
    nodeCreateAndUnshift(e) {
        return this.itemUnshift(this.nodeCreate(e));
    }
    nodesCreateAndPush(e) {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.nodeCreate(e[n]);
        return this.itemPush(t);
    }
    nodesCreateAndInsert(e, t) {
        let n = [];
        for (var s = 0; s < e.length; s++) n[s] = this.nodeCreate(e[s]);
        return this.itemInsert(n, t);
    }
    nodesCreateAndUnshift(e) {
        let t = [];
        for (var n = 0; n < e.length; n++) t[n] = this.nodeCreate(e[n]);
        return this.itemUnshift(t);
    }
    getExpanded() {
        return this.getElement()?.getExpanded();
    }
    setExpanded(e) {
        return this.getElement()?.setExpanded(e);
    }
    expand() {
        return this.getElement()?.expand();
    }
    collapse() {
        return this.getElement()?.collapse();
    }
    toggle() {
        return this.getElement()?.toggle();
    }
}
const _ = (e) => {
        let n = e?.root || new k(e);
        n.getElement()?.classList.add("is-root");
        const s = t`${n.element}`;
        return (n.parent = s), (s.getRoot = (e) => n), s;
    },
    A = (e) => localStorage.userId;
let I = t`<div class="system-messages"></div>`;
const B = { success: "succes-message", error: "error-message", info: "info-message" };
document.body.append(I);
const P = (e, n) => {
        let s = t`<button class="close-icon"></button>`,
            i = t`
        <div class="message">
            <div
                class=${B[n] ? B[n] : "info-message"}
                style="margin-bottom: 4px"
            ></div>
            <div class="content">${e || "Процедура пока не доступна"}</div>
            ${s}
        </div>
    `;
        s.addEventListener("click", () => {
            i.classList.add("disactive"), (i.style.marginBottom = `-${i.clientHeight}px`);
        }),
            I.append(i),
            i.addEventListener("transitionend", i.remove, !1),
            setTimeout(() => {
                i.classList.add("disactive"),
                    (i.style.marginBottom = `-${i.clientHeight}px`);
            }, 1e4);
    },
    R = "https://unilever.integer.ru:8080/PortalTB/";
const N = (e) =>
    fetch(R + "getHierarchyLevel", {
        method: "POST",
        body: JSON.stringify({
            targetClass: e.targetClass,
            id: e?.id,
            order: e?.order,
            filter: e?.filter,
            isHierarchycal: e?.isHierarchycal,
            start: e?.start,
            length: e?.length,
        }),
    })
        .then((e) => e.json())
        .catch((e) => e);
function S(e, t, n) {
    return fetch(R + "moveHierarchyObject", {
        method: "POST",
        body: JSON.stringify({ targetClass: e, id_objects: t, id_to: n }),
    });
}
function V(e, t) {
    return fetch(R + "createOrUpdateRecord", {
        method: "POST",
        body: JSON.stringify({ targetClass: e, body: t }),
    })
        .then((e) => e.json())
        .catch((e) => e);
}
var T = [];
const H = (e) => {
        var t = location.hash.substr(1);
        for (const e in T) {
            const n = t.match(T[e][0]);
            if (n && 1 == T[e][1](n.groups || {})) break;
        }
    },
    D = (e) => {
        const t = ((e) => {
                var t = location.hash;
                if ("" === t || "#" === t) return "";
                const n = (t = t.slice(1, t.length)).indexOf("?");
                return {
                    hash: -1 === n ? t : t.slice(0, n),
                    query: -1 === n ? "" : t.slice(n + 1),
                };
            })(),
            n = new URLSearchParams(t.query);
        for (const t in e) {
            const s = e[t];
            n.delete(t), n.append(t, s);
        }
        location.href = "#" + t.hash + "?" + n.toString();
    };
function M(s) {
    const i = $(s);
    let l,
        r = s,
        a = s.hideHeaderMenu;
    (i.menu = g()),
        i.menu.classList.add("table-menu"),
        i.menu.addEventListener("onHide", (e) => {
            e.stopPropagation(),
                document.body.removeChild(i.menu),
                document.removeEventListener("click", l);
        }),
        i.menu.addEventListener("onShow", (e) => {
            e.stopPropagation(),
                document.body.append(i.menu),
                i.menu.clearItems(),
                (l = i.menu.hide),
                document.addEventListener("click", l);
            let n = i.getHiddenColumns(),
                s = n.length;
            if (
                (s < i.getColumns().length - 1 &&
                    i.menu
                        .itemCreateAndPush({ value: t`<span>Скрыть столбец</span>` })
                        .getElement()
                        .addEventListener("click", (e) =>
                            i.hideColumn(i.menu.currentColumn),
                        ),
                0 === s)
            )
                return;
            let r = i.menu.itemCreateAndPush({
                    value: t`<span>Показать столбец</span>`,
                    menu: g(),
                }),
                a = r.getMenu();
            for (let e = 0; e < n.length; e++) {
                let t = n[e];
                a.itemCreateAndPush({ value: t.title })
                    .getElement()
                    .addEventListener("click", (e) => {
                        e.stopPropagation(), i.showColumn(t), i.menu.hide();
                    });
            }
            r.getElement().addEventListener("click", (e) => {
                e.stopPropagation();
                const t = i.getHiddenColumns();
                for (let e = t.length - 1; e >= 0; e--) i.showColumn(t[e]);
                i.menu.hide();
            });
        });
    const o = s.column_props;
    let d,
        c = [];
    for (let s = 0; s < o.length; s++) {
        let l = t`<div class="order-arrow"></div>`,
            u = t`<div class="back-button"></div>`,
            m = o[s],
            h = t`<div class="header-content" style=${m.style} title=${m.text}>${u}</div>`;
        "IsGroup" == m.id
            ? (m.value = h)
            : (m.value = t`<div class="header-content" style=${m.style} title=${m.text}>${l}<span class="header-content-text">${m.text}</span></div>`),
            (i.backButton = h);
        let p = i.columnCreateAndPush(m);
        m.isHidden && c.push(p),
            m?.headStyle &&
                Object.entries(m.headStyle).forEach(([e, t]) => {
                    p.element?.()?.style.setProperty(e, t);
                }),
            (p.index = m.id),
            (p.order = e(m?.initOrder ?? 0)),
            (p.getOrder = p.order),
            (p.setOrder = p.order),
            (p.order_query = m.order);
        let v = n(p.order, (e) => {
            if (p && l)
                switch (
                    (l.classList.remove("is-up"),
                    l.classList.remove("is-down"),
                    p.order())
                ) {
                    case 1:
                        l.classList.add("is-up");
                        break;
                    case 2:
                        l.classList.add("is-down");
                }
            else v();
        });
        (p.getArrow = (e) => l),
            a ||
                p.getElement().addEventListener("contextmenu", (e) => {
                    e.preventDefault(),
                        (i.menu.currentColumn = p),
                        i.menu.setPos(e.pageX, e.pageY),
                        i.menu.show();
                }),
            "IsGroup" === p.index
                ? p.getValue().addEventListener("click", r.backButtonAction, !1)
                : p.getValue().addEventListener("click", (e) => {
                      if (e.target === p.getDivider()) return;
                      d && d !== p && d.order(0);
                      let t = p.order();
                      (t = 2 == t ? 0 : t + 1), p.order(t), (d = p);
                      let n = p.order_query;
                      switch (t) {
                          case 0:
                              n = "";
                              break;
                          case 1:
                              n += "+";
                              break;
                          case 2:
                              n += "-";
                      }
                      r.setOrder(n);
                  });
    }
    return (
        (i.hiddenColumns = []),
        (i.getHiddenColumns = (e) => i.hiddenColumns),
        (i.setHiddenColumns = (e) => (i.hiddenColumns = e)),
        (i.hideColumn = (e) => {
            if (i.getHiddenColumn()) return;
            const t = e?.getElement();
            (e.__setWidth = e.__setWidth || e.setWidth),
                (e.setWidth = (t) => {
                    let n = i.getHiddenColumn(e);
                    if (!n) return e.__setWidth(t);
                    n.width = t;
                }),
                (i.hiddenColumns[i.hiddenColumns.length] = {
                    title: t?.textContent || "Без наименования",
                    width: e?.getWidth(),
                    data: e,
                }),
                e?.__setWidth(0),
                t?.classList.add("is-hidden");
            let n = e?.getIndex();
            if (null != n && -1 !== n) {
                let e = i.getRows();
                for (let t = 0; t < e.length; t++)
                    e[t]?.getCell(n)?.getElement()?.classList.add("is-hidden");
            }
        }),
        (i.getHiddenColumn = (e) => {
            let t = i.getHiddenColumns();
            for (let n = 0; n < t.length; n++) {
                let s = t[n];
                if (s?.data === e) return s;
            }
        }),
        (i.showColumn = (e) => {
            if (!e) return;
            let t = e.data;
            i.hiddenColumns.splice(i.hiddenColumns.indexOf(e), 1),
                t?.setWidth(e.width),
                t?.getElement()?.classList.remove("is-hidden");
            let n = t?.getIndex();
            if (null != n && -1 !== n) {
                let e = i.getRows();
                for (let t = 0; t < e.length; t++)
                    e[t]?.getCell(n)?.getElement()?.classList.remove("is-hidden");
            }
        }),
        c.forEach((e) => i.hideColumn(e)),
        i
    );
}
function O(e) {
    return e.indexOf(" ") < 0
        ? e.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1")
        : e.split(" ")[0].replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
}
function U(e) {
    return e.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3.$2.$1");
}
window.addEventListener("hashchange", H), window.addEventListener("load", H);
const W = (e) => {
        let t = new Date();
        return (
            (2 == (t.getDate() + "").length ? t.getDate() : "0" + t.getDate()) +
            "." +
            (2 == (t.getMonth() + 1 + "").length
                ? t.getMonth() + 1
                : "0" + (t.getMonth() + 1)) +
            "." +
            t.getFullYear()
        );
    },
    K = (n) => {
        let i = e();
        document.body.append(t`${i}`);
        let { groupHierarchy: l, column_props: r } = (function (e = [], t = [], n = {}) {
            const s = e.filter((e) => Object.keys(e).includes("group"));
            if (0 === s.length && 0 === t.length) return { column_props: e };
            0 === t.length &&
                (t = [
                    ...s
                        .map((e) => e.group)
                        .filter((e, t, n) => n.indexOf(e) === t)
                        .map((e) => ({ name: e })),
                ]);
            let i = [];
            for (const e of t) {
                const t = new q(e);
                i.push(t, ...t.descendants);
            }
            const l = i.reduce((e, t) => Math.max(e, t.depth), 0);
            i.forEach((t) => {
                let n = s.filter((e) => e.group === t.name);
                if (0 !== n.length)
                    if (
                        ((t.width =
                            0 === t.children.length ? n.length : t.width + n.length),
                        e.forEach((e, s) => {
                            n.includes(e) && (t.startPos = Math.min(s + 1, t.startPos));
                        }),
                        0 !== t.children.length)
                    )
                        t.height += t.depth + 1;
                    else if (t.parent)
                        if (0 !== t.siblings.length) {
                            let e = t.siblings.reduce(
                                (e, t) => Math.max(e, t.depth + 1),
                                0,
                            );
                            t.height += e;
                        } else t.height += 1;
                    else t.height += l + 1;
                else t.height = 1;
            });
            const r = i.map((e) => e.level).reduce((e, t) => Math.max(e, t), 0),
                a = { height: "100%", "grid-row": "1/" + (r + 2) };
            e.filter((e) => !s.includes(e)).forEach((e) => (e.headStyle = a)),
                i.forEach((e) => {
                    s.filter((t) => t.group === e.name).forEach((t) => {
                        const n = e.descendants.reduce(
                            (e, t) => Math.min(e, t.level),
                            1 / 0,
                        );
                        if (Math.abs(n - e.level) > 1 && isFinite(n)) {
                            const n = {
                                height: "100%",
                                "grid-row": `${e.height + e.level}/${r + 2}`,
                            };
                            t.headStyle = n;
                        }
                    });
                }),
                i.sort(q.compareByPosition).sort(q.compareByLevel);
            const o = Object.keys(n);
            n.style && i.forEach((e) => (e.style += n.style));
            o.length >= 1 &&
                o.forEach((e) => {
                    const t = i.filter((t) => t.name === e);
                    1 === t.length && (t[0].style = n[e]);
                });
            return { column_props: e, groupHierarchy: i };
        })(n?.column_props, n?.groupHierarchy, n?.groupsStyles);
        n.column_props = r;
        const a = M(n);
        a.columns_hash = void 0;
        let o = n?.tableWidth ? n.tableWidth : 50;
        const d = (n, i) => {
            const l = e(i),
                r = n.querySelector(".table-row-header:not(.groups)"),
                a = t`<tr class="table-row-header groups">
            ${s(l, (e) =>
                ((e) => {
                    const n = t`<th class="table-column group">
            <div class="header-content " title=${e.name} style=${e.style}>
                <span class="header-content-text ">${e.name}</span>
            </div>
        </th>`;
                    return (
                        (n.style.gridColumn = `${e.startPos}/${e.startPos + e.width}`),
                        (n.style.gridRow = `${e.level}/${e.level + e.height}`),
                        n
                    );
                })(e),
            )}
        </tr>`;
            n.insertBefore(a, r);
        };
        if (l && l.length > 0) {
            const e = a.querySelector("thead");
            e.classList.add("have-groups"), d(e, l);
        }
        let c = (e) => {
            let t = (window.innerWidth / 100) * o - 20,
                s = {};
            for (let e = 0; e < n.column_props.length; e++)
                n.column_props[e].width
                    ? (s[n.column_props[e].id] = (t / 100) * n.column_props[e].width)
                    : (s[n.column_props[e].id] = n.column_props[e].fixWidth);
            let i = a.getColumns(),
                l = {};
            for (let e = 0; e < i.length; e++) l[i[e].index] = i[e];
            for (let e in s) l[e].setWidth(s[e]);
        };
        window.addEventListener("resize", c, !1), c();
        let u = (e, t) => {
                (t.value = e?.Name || e?.Code || e?.NumberDoc || e?.docid),
                    t.setAttribute("docid", e.docid),
                    t.onSelect && t.onSelect(t.data),
                    i(void 0);
            },
            m = (e) => {
                let t = b({
                    contents: e.cardFile({
                        inModal: u,
                        callBackElement: e.element,
                        filter: e.filter,
                    }),
                });
                t.addEventListener("onClose", (e) => i(null)), i(t);
            };
        const h = (i, l) => {
            i.clearCells();
            let r = [],
                o = a.getColumns(),
                d = {};
            for (let e = 0; e < o.length; e++) d[o[e].index] = e;
            a.columns_hash = d;
            for (let i = 0; i < n.column_props.length; i++) {
                let a,
                    o = n.column_props[i]?.required,
                    c = n.column_props[i]?.disabled,
                    u = n.column_props[i]?.placeHolder,
                    h = n.column_props[i]?.fieldEllipsis,
                    p = n.column_props[i]?.onSelect,
                    v = n.column_props[i]?.dependentKey;
                if (n.column_props[i].reference) {
                    let s = "";
                    (void 0 === h || h) && (s = " field-ellipsis");
                    let o = e();
                    o(
                        t`<input placeholder=${u} class="reference-field${s}" value=${
                            l[n.column_props[i].id]?.Name
                        }></input>`,
                    ),
                        (o().readOnly = !0),
                        o().setAttribute("docid", l[n.column_props[i].id]?.docid),
                        (a = t`<div style=${n.column_props[i].styleCell} title=${
                            l[n.column_props[i].id]?.Name
                        }>${o()}</div>`),
                        p &&
                            ((o().onSelect = p),
                            (o().data = {
                                columnProps: n,
                                element: a,
                                data: l,
                                cells: r,
                                columns_hash: d,
                            })),
                        a.addEventListener(
                            "click",
                            (e) =>
                                m({
                                    cardFile: n.column_props[i].reference,
                                    element: o(),
                                    filter: n.column_props[i].filter,
                                }),
                            !1,
                        ),
                        (a.getValue = (e) => ({ docid: +o().getAttribute("docid") })),
                        (a.setValue = (e) => {
                            o().setAttribute("docid", e.docid), (o().value = e.Name);
                        }),
                        (a.input = (e) => o());
                } else if (n.column_props[i].refs) {
                    let s,
                        o = "";
                    (void 0 === h || h) && (o = " field-ellipsis");
                    let c = e();
                    if (
                        (c(
                            t`<input placeholder=${u} class="reference-field${o}" value=${
                                l[n.column_props[i].id]?.Name
                            }></input>`,
                        ),
                        (c().readOnly = !0),
                        c().setAttribute("docid", l[n.column_props[i].id]?.docid),
                        (a = t`<div style=${n.column_props[i].styleCell} title=${
                            l[n.column_props[i].id]?.Name
                        }>${c()}</div>`),
                        p &&
                            ((c().onSelect = p),
                            (c().data = {
                                columnProps: n,
                                element: a,
                                data: l,
                                cells: r,
                                columns_hash: d,
                            })),
                        v)
                    ) {
                        let e = l[v]?.docid;
                        e &&
                            ((s = n.column_props[i].refs[e]),
                            a.addEventListener(
                                "click",
                                (t) =>
                                    m({
                                        cardFile: n.column_props[i].refs[e],
                                        element: c(),
                                        filter: n.column_props[i].filters
                                            ? n.column_props[i].filters[e]
                                            : "",
                                    }),
                                !1,
                            ));
                    }
                    (a.getValue = (e) => ({
                        docid: +c().getAttribute("docid"),
                        targetClass: s ? s()?.targetClass : "",
                    })),
                        (a.setValue = (e) => {
                            c().setAttribute("docid", e.docid), (c().value = e.Name);
                        }),
                        (a.input = (e) => c()),
                        (a.setReference = (e) => {
                            (s = e.reference),
                                (c().placeholder = e?.placeHolder
                                    ? e.placeHolder
                                    : "Выбрать"),
                                a.setValue({ Name: "", docid: 0 }),
                                a.removeEventListener("click", m, !1),
                                a.addEventListener("click", (t) =>
                                    m({
                                        cardFile: e.reference,
                                        element: c(),
                                        filter: e.filter,
                                    }),
                                );
                        });
                } else if (n.column_props[i].type) {
                    let r,
                        d = n.column_props[i].type,
                        m = n.column_props[i]?.dataType;
                    if ("input" == d) {
                        let e = " field-ellipsis";
                        (void 0 !== h && h) || (e = ""),
                            (r = t`<input class="${e}" placeholder=${u} value=${
                                l[n.column_props[i].id]
                            } required=${o}></input>`),
                            (r.readOnly = c),
                            (a = t`<div style=${n.column_props[i].styleCell} title=${
                                l[n.column_props[i].id]
                            }>${r}</div>`),
                            m
                                ? "number" == m
                                    ? ((r.type = "number"),
                                      (a.getValue = (e) => +r.value))
                                    : "string" == m &&
                                      ((r.type = "text"),
                                      (a.getValue = (e) => "" + r.value))
                                : (a.getValue = (e) => r.value),
                            (a.setValue = (e) => (r.value = e));
                    } else if ("checkbox" == d)
                        (r = t`<input type="checkbox" checked=${
                            l[n.column_props[i].id]
                        } disabled=${c}></input>`),
                            (a = t`<div style=${n.column_props[i].styleCell} title=${
                                l[n.column_props[i].id]
                            }>${r}</div>`),
                            (a.getValue = (e) => r.checked),
                            (a.setValue = (e) => (r.checked = e));
                    else if ("date" == d)
                        (r = t`<input type="date" value=${O(
                            l[n.column_props[i].id],
                        )} required=${o} disabled=${c}></input>`),
                            (a = t`<div style=${n.column_props[i].styleCell} title=${
                                l[n.column_props[i].id]
                            }>${r}</div>`),
                            (a.getValue = (e) => U(r.value)),
                            (a.setValue = (e) => (r.value = e));
                    else if ("reference" == d) {
                        let e = t`<input placeholder=${u} value=${
                            l[n.column_props[i].id]?.Name
                        }></input>`;
                        (e.readOnly = !0),
                            e.setAttribute("docid", l[n.column_props[i].id]?.docid),
                            (a = t`<div style=${n.column_props[i].styleCell} title=${
                                l[n.column_props[i].id]?.Name
                            }>${e}</div>`),
                            (a.getValue = (t) => ({ docid: e.getAttribute("docid") })),
                            (a.setValue = (t) => (e.value = t));
                    } else if ("select" == d) {
                        let r = e(n.column_props[i].options),
                            o = t`<select>${s(
                                r,
                                (e) => t`<option value=${e.value}>${e.text}</option>`,
                            )}</select>`;
                        (a = t`<div style=${n.column_props[i].styleCell}>${o}</div>`),
                            (o.value = l[n.column_props[i].id]),
                            (a.getValue = (e) => o.value),
                            (a.setValue = (e) => (o.value = e));
                    }
                } else
                    n.column_props[i].changeValue
                        ? ((a = t`<div style=${n.column_props[i].styleCell} title=${
                              l[n.column_props[i].id]
                          }>${n.column_props[i].changeValue(
                              l[n.column_props[i].id],
                              l,
                          )}</div>`),
                          (a.getValue = (e) => l[n.column_props[i].id]),
                          (a.setValue = (e) =>
                              (a.innerText = n.column_props[i].changeValue(e, l))))
                        : ((a = t`<div style=${n.column_props[i].styleCell} title=${
                              l[n.column_props[i].id]
                          }>${l[n.column_props[i].id]}</div>`),
                          (a.getValue = (e) => a.innerText),
                          (a.setValue = (e) => (a.innerText = e)));
                n.column_props[i].callback &&
                    a.addEventListener("click", (e) => {
                        n.column_props[i].callback({
                            data: l,
                            cells: r,
                            columns_hash: d,
                            id: n.column_props[i].id,
                        });
                    }),
                    (a.getKey = (e) => n.column_props[i].id),
                    (r[d[n.column_props[i].id]] = { value: a });
            }
            i.cellsCreateAndPush(r);
            let c = i.getCells();
            for (let e = 0; e < c.length; e++) {
                let t = o[e],
                    n = c[e];
                a.getHiddenColumn(t) && n?.getElement()?.classList.add("is-hidden");
            }
        };
        let p;
        return (
            (a.menu_row = g()),
            a.menu_row.classList.add("table-menu"),
            (a.menu_row.style.zIndex = 999),
            a.menu_row.addEventListener("onHide", (e) => {
                e.stopPropagation(), a.menu_row.remove();
            }),
            a.menu_row.addEventListener("onShow", (e) => {
                e.stopPropagation(),
                    document.body.append(a.menu_row),
                    a.menu_row.clearItems(),
                    (p = a.menu_row.hide),
                    document.addEventListener("click", p, { once: !0 }),
                    a.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="duplicate-icon"></div>Дублировать</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            n?.rowMenu?.duplicate
                                ? n.rowMenu.duplicate(a.menu_row.currentRow)
                                : a.createRows([a.menu.currentRow.nodeData]),
                                a.menu_row.hide();
                        }),
                    a.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="trash-icon"></div>Удалить строку</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            n?.rowMenu?.remove
                                ? n.rowMenu.remove(a.menu_row.currentRow)
                                : a.rowRemoveByValue(a.menu_row.currentRow.row),
                                a.menu_row.hide();
                        }),
                    a.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="row-up-icon"></div>Поднять строку</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            let t =
                                    a.menu_row.currentRow.row.element()
                                        .previousElementSibling,
                                n = a.menu_row.currentRow.row.element();
                            if (t) {
                                a.querySelector("tbody").insertBefore(n, t);
                                let e = a.getRows();
                                for (let t = 0; t < e.length; t++)
                                    if (e[t].element() == n) {
                                        let n = e.splice(t, 1)[0];
                                        e.splice(t - 1, 0, n);
                                    }
                            }
                        }),
                    a.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="row-down-icon"></div>Опустить строку</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            let t =
                                    a.menu_row.currentRow.row.element()
                                        .nextElementSibling,
                                n = a.menu_row.currentRow.row.element();
                            if (t) {
                                a.querySelector("tbody").insertBefore(t, n);
                                let e = a.getRows();
                                for (let t = 0; t < e.length; t++)
                                    if (e[t].element() == n) {
                                        let n = e.splice(t, 1)[0];
                                        e.splice(t + 1, 0, n);
                                    }
                            }
                        });
            }),
            (a.createRows = (e, t, n) => {
                let s = 0;
                for (let t in e) s++;
                let i = Array(s);
                const l = [],
                    r = a.getColumns();
                for (let e = 0; e < r.length; e++) l[e] = !!a.getHiddenColumn(r[e]);
                const o = t ? a.rowsCreateAndUnshift(i) : a.rowsCreateAndPush(i);
                for (var d = 0; d < o.length; d++) {
                    const t = o[d];
                    h(t, e[d]);
                    let n = e[d];
                    t.getElement().addEventListener("contextmenu", (e) => {
                        e.preventDefault(),
                            (a.menu_row.currentRow = { row: t, nodeData: n }),
                            a.menu_row.setPos(e.pageX, e.pageY),
                            a.menu_row.show();
                    });
                    let s = t.getCells();
                    for (let e = 0; e < s.length; e++)
                        l[e] && s[e]?.getElement()?.classList.add("is-hidden");
                }
                return o;
            }),
            (a.getColumnsHash = (e) => a.columns_hash),
            (a.getData = (e) => {
                let t = [];
                return (
                    a.getRows().forEach((e) => {
                        let n = e.getCells(),
                            s = {};
                        n.forEach((e) => {
                            let t = e.getValue();
                            s[t.getKey()] = t.getValue();
                        }),
                            t.push(s);
                    }),
                    t
                );
            }),
            a
        );
    };
class q {
    constructor({ name: e, children: t = [], style: n = "", parent: s }) {
        (this.name = e),
            (this.children = t.map((e) => new q({ ...e, parent: this }))),
            (this._width = 0),
            (this.height = 0),
            (this.depth = 0),
            (this.parent = s),
            (this._startPos = 1 / 0),
            (this.lvl = 0),
            (this.style = n),
            this.setGroupDepth(),
            this.setMinWidth();
    }
    setGroupDepth() {
        this?.children &&
            (this.depth =
                this.children.map((e) => e.depth).reduce((e, t) => Math.max(e, t), -1) +
                1);
    }
    setMinWidth() {
        0 === this.children.length
            ? (this._width = 1)
            : (this._width = this.children.reduce((e, t) => e + t.width, 0));
    }
    get descendants() {
        return 0 === this.children.length
            ? []
            : [...this.children, ...this.children.map((e) => e.descendants)]
                  .flat()
                  .filter((e) => e);
    }
    get siblings() {
        return this.parent && this.parent.children
            ? this.parent.children.filter((e) => e.name !== this.name)
            : [];
    }
    set width(e) {
        const t = e - this._width;
        (this._width = e), this.parent && (this.parent.width += t);
    }
    get width() {
        return this._width;
    }
    set startPos(e) {
        (this._startPos = Math.min(this._startPos, e)),
            this.parent && (this.parent.startPos = e);
    }
    get startPos() {
        return this._startPos;
    }
    get level() {
        if (this.lvl > 0) return this.lvl;
        let e = 1,
            t = this.parent;
        for (; t; ) e++, t.height > 1 && (e += t.height - 1), (t = t.parent);
        return (this.lvl = e), e;
    }
    static compareByPosition = (e, t) => e.startPos - t.startPos;
    static compareByDepth = (e, t) => e.depth - t.depth;
    static compareByLevel = (e, t) => e.level - t.level;
}
const j = (n) => {
        let i = n?.key,
            l = n?.type,
            r = n?.placeholder,
            a = n.title,
            o = !!n?.required,
            d = !!n?.disabled,
            c = n?.reference,
            u = n?.width,
            m = n?.height,
            h = n?.data ? n.data : "",
            p = e(n?.options),
            v = n?.callback,
            g = n?.filter,
            f = e(),
            y = t`<label>${a}</label>`,
            w = t`<div class="field">${y} ${f}</div>`;
        u && (w.style.width = u + "px");
        let C,
            E,
            L,
            x = h ? h[i] : "";
        if (
            ("string" == l &&
                ((L = t`<input type="text" value=${x} placeholder=${r} required=${o} disabled=${d}></input>`),
                (f.getValue = () => L.value),
                (f.setValue = (e) => (L.value = e))),
            "number" == l &&
                ((L = t`<input type="number" value=${x} placeholder=${r} required=${o} disabled=${d}></input>`),
                (f.getValue = () => +L.value),
                (f.setValue = (e) => (L.value = +e))),
            "password" == l &&
                ((L = t`<input type="password" required=${o} placeholder=${r} disabled=${d}></input>`),
                (f.getValue = () => L.value),
                (f.setValue = (e) => (L.value = e))),
            "checkbox" == l &&
                ((L = t`<input type="checkbox" checked="${() =>
                    x}" required=${o} disabled=${d}></input>`),
                (f.getValue = () => L.checked),
                (f.setValue = (e) => (L.checked = e)),
                w.addEventListener("click", (e) => {
                    e.target !== L && L.click();
                }),
                w.classList.add("checkbox")),
            "date" == l &&
                ((L = t`<input type="date" value="${() => {
                    if (x) return O(x);
                }}" required=${o} disabled=${d}></input>`),
                (f.getValue = () => U(L.value)),
                (f.setValue = (e) => (L.value = e))),
            "reference" == l &&
                ((L = t`<input class="field-ellipsis" value=${() =>
                    x?.Name} placeholder=${r} disabled></input>`),
                L.setAttribute("docid", x?.docid),
                (f.getValue = () => ({ docid: +L.getAttribute("docid") })),
                (f.setValue = (e) => {
                    (L.value = e.Name), L.setAttribute("docid", e.docid);
                })),
            "select" == l &&
                ((L = t`<select>
            ${s(p, (e) => t`<option value=${e.value}>${e.text}</option>`)}
        </select>`),
                (L.value = x),
                (f.getValue = () => L.value),
                (f.setValue = (e) => (L.value = e))),
            "textarea" == l &&
                (w.classList.add("text-area"),
                (L = t`<textarea
            value=${x}
            placeholder=${r}
            required=${o}
            disabled=${d}
        ></textarea>`),
                (f.getValue = () => L.value),
                (f.setValue = (e) => (L.value = e))),
            "checkboxSelect" == l)
        ) {
            (x = x || n?.value || { text: "", value: [] }),
                (L = t`<input class="field-ellipsis" value=${() =>
                    x.text} disabled required=${o}></input>`);
            let e = x.value,
                i = t`
            <div class="options">
                ${s(p, (t) => {
                    let n = j(t);
                    return (
                        x?.value?.indexOf(t.value) >= 0 && n.setValue(!0),
                        n.input().addEventListener("change", (n) => {
                            if (n.target.checked)
                                e.push(t.value),
                                    L.value
                                        ? (L.value += ", " + t.title)
                                        : (L.value = t.title);
                            else {
                                e.splice(e.indexOf(t.value), 1);
                                let n = L.value.split(", ");
                                n.splice(n.indexOf(t.title), 1), (L.value = n.join(", "));
                            }
                        }),
                        n
                    );
                })}
            </div>
        `;
            w.append(i),
                w.addEventListener("click", (e) => {
                    i.classList.toggle("is-active");
                }),
                (f.getValue = () => e),
                (f.setValue = (t) => {
                    (L.value = t.name), (e = t.value);
                });
        }
        if (c) {
            (L = t`<input class="field-ellipsis" value=${() =>
                x?.Name} placeholder=${r} disabled required=${o}></input>`),
                L.setAttribute("docid", x?.docid),
                (f.getValue = () => ({ docid: +L.getAttribute("docid") })),
                (f.setValue = (e) => {
                    (L.value = e.Name), L.setAttribute("docid", e.docid);
                });
            let n = e(void 0);
            document.body.append(t`${n}`),
                (C = (e, t) => {
                    t.setValue({
                        Name: e.Name || e.Code || e.NumberDoc || e.docid,
                        docid: e.docid,
                    }),
                        v && v(e),
                        n(void 0);
                }),
                (E = () => {
                    let e = b({
                        contents: c({ inModal: C, callBackElement: f, filter: g }),
                    });
                    e.addEventListener("onClose", () => n(null)), n(e);
                });
            let s = t`<button class="clear-reference-button">
            <img src="assets/image/trash-icon-ref.svg" />
        </button>`;
            s.addEventListener("click", () => {
                f.setValue({ Name: "", docid: 0 });
            }),
                d ||
                    (w.append(s),
                    w.addEventListener("click", (e) => {
                        e.target !== s && E();
                    }));
        }
        return (
            m && (L.style.height = m + "px"),
            f(L),
            (w.input = f),
            (w.getKey = () => i),
            (w.getValue = () => f.getValue()),
            (w.setValue = f.setValue),
            w
        );
    },
    G = (n) => {
        let i = n?.data,
            l = e([]),
            r = e([]),
            a = e(),
            o = e(),
            d = t`<button class="button-tool cancel-tool">Отмена</button>`,
            c = t`<button class="button-tool" type="submit">Принять</button>`;
        d.addEventListener("click", (e) => y.cancelButtonAction()),
            c.addEventListener("click", (e) => {
                e.preventDefault(), y.applyButtonAction();
            });
        let u = e([]),
            m = t`<div class="blank-actions-view">${s(u, (e) => e)}</div>`,
            h = e([]),
            p = t`<div class="blank-view">${s(h, (e) => e)}</div>`,
            v = e([]),
            g = e([]),
            f = t`
    <div class="blank-header">
        <h2>${n.title}</h2>
        <div class="blank-header-tools">
            <div class="blank-header-left">
                ${s(v, (e) => e)}
            </div>
            <div class="blank-header-right">
                ${s(g, (e) => e)}
            </div>
        </div>
    </div>`,
            y = t`
        <form class="blank ${n.class}">
            ${f}
            <div class="blank-content">
                ${p}
                ${m}
            </div>
            <div class="blank-main-tools">
                ${d}
                ${c}
            </div>
        </form>
    `;
        return (
            y.addEventListener("submit", (e) => e.preventDefault()),
            (y.addHeaderLeftItem = (e) => {
                let t = v();
                t.push(e), v(t);
            }),
            (y.addHeaderRightItem = (e) => {
                let t = g();
                t.push(e), g(t);
            }),
            (y.addItem = (e) => {
                let t = h();
                t.push(e), h(t);
            }),
            (y.addItems = (e) => {
                let t = h();
                h(t.concat(e));
            }),
            (y.getItems = (e) => h),
            (y.getItem = (e) => h()[e]),
            (y.actionView = (e) => (
                e ? m.classList.add("is-active") : m.classList.remove("is-active"), m
            )),
            (m.addItem = (e) => {
                let t = u();
                t.push(e), u(t);
            }),
            (m.addItems = (e) => {
                let t = u();
                u(t.concat(e));
            }),
            (y.createField = (e) => {
                e.data = i;
                let t = j(e),
                    n = l();
                return n.push(t), l(n), t;
            }),
            (y.getFields = (e) => l()),
            (y.createTable = (e) => {
                e.hideHeaderMenu = null == e.hideHeaderMenu || e.hideHeaderMenu;
                let t = K(e);
                if (e.filter) {
                    let n = n ? n[e.key] : "",
                        s = [];
                    n &&
                        n[e.key].forEach((t) => {
                            t[e.filter.key] == t[e.filter.value] && s.push(t);
                        }),
                        t.createRows(s);
                } else t.createRows(i ? i[e.key] : "");
                t.getKey = (t) => e.key;
                let n = r();
                return n.push(t), r(n), t;
            }),
            (y.removeTable = (e) => {
                let t = r();
                (t = t.filter((t) => t !== e)), r(t);
            }),
            (y.createRow = (e) => {
                let n = t`<div class="blank-row"></div>`;
                return (
                    (n.items = []),
                    (n.addItem = (e) => {
                        n.append(e), n.items.push(e);
                    }),
                    (n.addItems = (e) => {
                        for (let t = 0; t < e.length; t++)
                            n.append(e[t]), n.items.push(e[t]);
                    }),
                    (n.getItem = (e) => n.items[e]),
                    (n.getItemList = (e) => n.items),
                    n
                );
            }),
            (y.createColumn = (e) => {
                let n = t`<div class="blank-column"></div>`;
                return (
                    (n.items = []),
                    (n.addItem = (e) => {
                        n.append(e);
                    }),
                    (n.addItems = (e) => {
                        for (let t = 0; t < e.length; t++)
                            n.append(e[t]), n.items.push(e[t]);
                    }),
                    (n.getItem = (e) => n.items[e]),
                    (n.getItemList = (e) => n.items),
                    n
                );
            }),
            (y.cancelButtonAction = n?.cancelButtonAction),
            (y.applyButtonAction = n?.applyButtonAction),
            (y.setGroupDoc = o),
            (y.setIsGroup = a),
            (y.setDocid = (e) => (n.docid = e)),
            (y.getData = (e) => {
                let t = l(),
                    s = r(),
                    i = {};
                return (
                    t.forEach((e) => {
                        i[e.getKey()] = e.getValue();
                    }),
                    s.forEach((e) => {
                        i[e.getKey()] = e.getData();
                    }),
                    (i.docid = n.docid ? n.docid : ""),
                    (i.groupDoc = n.data ? n.data?.groupDoc : { docid: "" }),
                    (i.isGroup = n.data?.IsGroup),
                    a() && (i.isGroup = a()),
                    o() && (i.groupDoc = { docid: o() }),
                    i
                );
            }),
            y
        );
    },
    X = [];
class Y extends k {
    constructor(t, s) {
        super(t, s);
        const i = this;
        let l, r, a, o;
        (this.id = t?.id),
            (this.targetClass = t?.targetClass),
            (this.nodes = t?.nodes),
            (this.draggable = e(t?.draggable)),
            (this.droppable = t?.droppable),
            (this.onSelect = t?.onSelect),
            (this.onExpand = t?.onExpand),
            (this.onCollapse = t?.onCollapse),
            (this.hierarchicalNodeName = t?.hierarchicalNodeName
                ? t.hierarchicalNodeName
                : "Name"),
            (this.onMouseOver = t?.onMouseOver);
        const d = n(this.draggable, (e) => {
            if (!i) return void d();
            if (l) {
                let e = i.getHeader();
                if (!e) return;
                e.removeEventListener("dragstart", r),
                    e.removeEventListener("dragover", a),
                    e.removeEventListener("drop", o);
            }
            l = i.draggable();
            let t = i.getHeader();
            t &&
                (t.setAttribute("draggable", l),
                l &&
                    ((r = (e) =>
                        e.dataTransfer.setData(
                            "text/plain",
                            ((e) => {
                                let t = X.length;
                                return (X[t] = e), t;
                            })(i).toString(),
                        )),
                    (a = (e) => {
                        i.droppable && e.preventDefault();
                    }),
                    (o = (e) => {
                        if ((e.preventDefault(), !e.dataTransfer)) return;
                        let t = parseInt(e.dataTransfer.getData("text/plain"));
                        if (null == t || t < 0) return;
                        let n = ((e) => {
                            let t = X[e];
                            return delete X[e], t;
                        })(t);
                        if (!n || n.id == i.id) return;
                        let s = i;
                        for (;;) {
                            let e = s.getParent && s.getParent();
                            if (!e) break;
                            if (e == n) return;
                            s = e;
                        }
                        n.getParent()?.itemRemoveByValue(n),
                            (n.parent = i),
                            i.getExpanded() && i.itemPush(n),
                            S(i.targetClass, [n.id], i.id);
                    }),
                    t.addEventListener("dragstart", r, { capture: !0 }),
                    t.addEventListener("dragover", a, { capture: !0 }),
                    t.addEventListener("drop", o, { capture: !0 })));
        });
        this.getElement().addEventListener("onCollapse", (e) => {
            i.clearItems();
            let t = i.element().querySelector(".arrow");
            t && t.classList.remove("is-active"), i.onCollapse && i.onCollapse();
        });
        let c = i.hierarchicalNodeName;
        this.getElement().addEventListener("onExpand", (e) => {
            let n = i.getElement().querySelector(".arrow");
            N({ targetClass: i.targetClass, id: i.id }).then((e) => {
                if (0 === i.getItems().length)
                    for (let t in e) {
                        let n = e[t];
                        i.createNode(n.docid, n[c], n.IsGroup);
                    }
            }),
                n && n.classList.add("is-active"),
                i.onExpand && i.onExpand(),
                "H4" == i.getHeader().nodeName && i.onSelect(t);
        }),
            this.getElement()
                .getHeader()
                .addEventListener("mouseover", (e) => {
                    e.stopPropagation(), i.onMouseOver(t, i);
                });
    }
    nodeCreate(e) {
        return new Y(e, this);
    }
    createNode(e, n, s) {
        if (!s) return;
        const i = this;
        let l = t`<div class="arrow"></div>`,
            r = t`<div>${n}</div>`,
            a = i.nodeCreate({
                id: e,
                targetClass: i.targetClass,
                draggable: i.draggable(),
                droppable: i.droppable,
                onSelect: i.onSelect,
                nodes: i.nodes,
                onMouseOver: i.onMouseOver,
                onExpand: i.onExpand,
                onCollapse: i.onCollapse,
                hierarchicalNodeName: i.hierarchicalNodeName,
                header: s
                    ? t`<div title=${n}>${l}${r}</div>`
                    : t`<div title=${n}>${r}</div>`,
            });
        (a.name = n), (a.is_group = s), (i.nodes[a.id] = a);
        let o = g();
        o.classList.add("table-menu"), (o.style.zIndex = 1);
        const d = () => {
            o.hide();
        };
        return (
            o.addEventListener("onHide", (e) => {
                e.stopPropagation(), o.remove();
            }),
            o.addEventListener("onShow", (e) => {
                e.stopPropagation(),
                    document.body.append(o),
                    o.clearItems(),
                    document.addEventListener("click", d, { once: !0 }),
                    o
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"
                    ><div class="clear-group-icon"></div>
                    Очистить группу</span
                >`,
                        })
                        .getElement()
                        .addEventListener("click", () => {
                            const { targetClass: e, docid: t } = o.currentRow.nodeData;
                            (void 0)(e, t).then((e) => {
                                o.hide();
                            }),
                                o.hide();
                        });
            }),
            r.addEventListener("click", (e) => {
                e.stopPropagation(), a.onSelect && a.onSelect(a);
            }),
            r.addEventListener("mouseover", (e) => {
                e.stopPropagation(), a.onMouseOver && a.onMouseOver(a, i);
            }),
            i.itemPush(a),
            a
        );
    }
    get ancestors() {
        let e = [],
            t = this.parent;
        for (; t && t.id; ) e.unshift(t), (t = t.parent);
        return e;
    }
}
const F = (t) => {
        (t = t || {}).root = t?.root || new Y(t);
        let n = _(t),
            s = n.getRoot();
        return (
            (s.nodes = {}),
            (s.targetClass = t?.targetClass),
            (s.draggable = e(t?.draggable)),
            (s.droppable = t?.droppable),
            (s.onExpand = t?.onExpand),
            (s.onCollapse = t?.onCollapse),
            (s.onSelect = t?.onSelect),
            (s.hierarchicalNodeName = t?.hierarchicalNodeName),
            (s.onMouseOver = t?.onMouseOver),
            n
        );
    },
    z = (e, t) =>
        isNaN(t) || /.*(code)$/i.test(e) ? `Match(${e}, '*${t}*')` : `${e} = ${t}`,
    J = (e) => {
        const n = j({ title: "Поле:", type: "select", options: e }),
            s = j({
                title: "Знaчение:",
                type: "string",
                placeHolder: "Введите значение",
            }),
            i = t`
        <button class="clear-filter-button">
            <img src="assets/image/trash-icon-ref.svg" />
        </button>
    `,
            l = t`<div
        style="display: flex; justify-content: space-between"
        class="filter-row"
    >
        ${n} ${s} ${i}
    </div>`;
        return (
            i.addEventListener("click", () => {
                n.setValue(), s.setValue("");
            }),
            (l.getValue = () => {
                if (null == n.getValue() || 0 == s.getValue()?.length) return "";
                return z(n.getValue(), s.getValue());
            }),
            l
        );
    },
    Q = (n) => {
        n?.targetClass;
        const i = n?.column_props;
        let l = [];
        i.forEach((e) => {
            l.push({ text: e.text, value: e.id });
        });
        const r = e([J(l)]),
            a = t`<button class="add-button"></button>`;
        let o = t`
        <div class="filter-content">
            <div class="filters-array">${s(r, (e) => e)}</div>
            ${a}
        </div>
    `;
        return (
            a.addEventListener("click", () => {
                r(r().concat(J(l)));
            }),
            o.addEventListener("click", ({ target: e }) => {
                if (!e.classList.contains("clear-filter-button")) return;
                if (1 == r()?.length) return;
                let t = r();
                (t = t.filter((t) => !t.contains(e))), r(t);
            }),
            (o.getValue = () =>
                r()
                    .map((e) => e.getValue())
                    .join(" and ")),
            o
        );
    };
Q.createString = z;
const Z = () => {
        let e;
        return {
            show: () => {
                e && e.remove(),
                    (e = t`<img
                class="loader-image"
                src="assets/image/logo-preloader.svg"
            />`),
                    e.addEventListener("load", () => e.classList.add("is-active")),
                    document.body.append(e);
            },
            hide: () => {
                e.addEventListener("transitionend", e.remove, !1),
                    e.classList.remove("is-active");
            },
        };
    },
    ee = (n) => {
        let s,
            l = n,
            r = e();
        const a = n.request ? n.request : V;
        let o,
            d = Q(n),
            c = 0,
            u = e(void 0),
            m = e(void 0);
        document.body.append(t`${u}`), document.body.append(t`${m}`);
        let h,
            v = e(""),
            f = e(""),
            y = e(""),
            w = Z(),
            C = (e) => (f() ? (y() ? f() + " and " + y() : f()) : y()),
            E = e(!0),
            L = {},
            x = (e, t = !0) => {
                let n;
                ie.currentNode(e),
                    (n = e.header ? e.header : e.getHeader()),
                    n && n.classList.add("is-selected"),
                    h && h !== n && h.classList.remove("is-selected"),
                    (h = n),
                    e.id &&
                        t &&
                        N({ targetClass: e.targetClass, id: e.id }).then((t) => {
                            e.clearItems();
                            for (let n in t) {
                                let s = t[n];
                                e.createNode(
                                    s.docid,
                                    s[e.hierarchicalNodeName],
                                    s.IsGroup,
                                );
                            }
                        }),
                    w.show(),
                    N({
                        targetClass: e.targetClass,
                        id: e.id,
                        order: v(),
                        filter: C(),
                        isHierarchycal: !0,
                        length: 200,
                    }).then((t) => {
                        w.hide();
                        let n = [];
                        for (let s in t)
                            (t[s].targetClass = e.targetClass),
                                (t[s].header = e.header),
                                e.header
                                    ? (t[s].header = e.header)
                                    : (t[s].header = e.getHeader()),
                                n.push(t[s]);
                        ie.clearRows(), ie.createRows(n);
                    });
            },
            $ = {};
        const k = F({
            targetClass: n.targetClass,
            draggable: !0,
            droppable: !0,
            hierarchicalNodeName: l?.hierarchicalNodeName,
            header: t`<h4>${n.rootName ? n.rootName : "Корень"}</h4>`,
            onSelect: x,
            onMouseOver: (e, t) => {
                he &&
                    (($.element = e?.getHeader ? e.getHeader() : e.header),
                    $.element &&
                        (($.id = e.id || -1),
                        $.element.classList.add("is-drag-enter"),
                        $.element.addEventListener("mouseout", (e) => {
                            $.element.classList.remove("is-drag-enter"), ($.id = 0);
                        })));
            },
        });
        let _ = (e) => {
            v(e), ie.updateTable();
        };
        (l.backButtonAction = (e) => {
            let t = ie.currentNode();
            t.id ? t?.parent?.onSelect(t?.parent, !1) : t && t?.expand && t?.expand();
        }),
            (l.setOrder = _);
        const A = M(l);
        let I = (e) => {
            let t = (window.innerWidth / 100) * l.cardWidth - 20,
                n = {};
            for (let e = 0; e < l.column_props.length; e++)
                l.column_props[e].width
                    ? (n[l.column_props[e].id] = (t / 100) * l.column_props[e].width)
                    : (n[l.column_props[e].id] = l.column_props[e].fixWidth);
            let s = A.getColumns(),
                i = {};
            for (let e = 0; e < s.length; e++) i[s[e].index] = s[e];
            for (let e in n) i[e].setWidth(n[e]);
        };
        window.addEventListener("resize", I, !1), I();
        let B = n?.ApplyBlank
                ? n.ApplyBlank
                : () => {
                      n?.beforeApplyBlank && n?.beforeApplyBlank(),
                          w.show(),
                          a(ie.targetClass, s.getData()).then((e) => {
                              ie.hideBlank(),
                                  ie.updateTable(),
                                  w.hide(),
                                  n?.afterApplyBlank && n?.afterApplyBlank();
                          });
                  },
            T = (e) => {
                if (!r || !r()) return;
                const t = ie.currentNode()?.id;
                (s = r()({ docid: "", groupDoc: { docid: t || "" }, IsGroup: e })),
                    s.applyButtonAction || (s.applyButtonAction = B),
                    (s.cancelButtonAction = ie.hideBlank);
                let n = b({ contents: s });
                n.addEventListener("onClose", ie.hideBlank), m(n);
            },
            H = t`<button style="margin-left: 0" class="add-button"></button>`;
        H.addEventListener("click", (e) => {
            T(!1);
        });
        let O = t`<button class="filter-button"></button>`;
        O.addEventListener("click", (e) => {
            let t = b({ contents: q });
            t.addEventListener("onClose", (e) => m(null)), m(t);
        });
        let U = p({
            header: t`<button class="options-button"></button>`,
            isHoverable: !0,
        });
        U.style.display = "none";
        let W = t`<button class="button-tool">Принять</button>`;
        W.addEventListener("click", (e) => {
            f(d.getValue()), ie.updateTable({ filter: C() }), m(null);
        });
        let K = t`<button class="button-tool cancel-button">Отмена</button>`;
        K.addEventListener("click", () => {
            m(null);
        });
        let q = t`
        <div class="card-file-filter" style="padding: 10px">
            ${d}
            <div style="display: flex; justify-content: space-between">
                ${K}
                ${W}
            </div>
        </div>
    `,
            j = t`<button class="card-file-select-record button-tool">Выбрать</button>`;
        j.addEventListener("click", (e) => {
            l.inModal(L.nodeData, l.callBackElement);
        }),
            l.inModal
                ? ((H.style.display = "none"), (j.style.display = "block"))
                : ((j.style.display = "none"), (H.style.display = "block"));
        let G = t`
        <div class="card-table">
            ${A}
        </div>
    `;
        G.addEventListener("contextmenu", (e) => {
            e.preventDefault(),
                e.target == G &&
                    (A.menu_table.setPos(e.pageX, e.pageY), A.menu_table.show());
        });
        const X = (e) => {
            window.getSelection
                ? window.getSelection().removeAllRanges()
                : document.selection.empty();
        };
        let Y,
            z,
            J = t`<span class="resize-tool"></span>`,
            ee = !1,
            te = (e) => {
                if (ee) {
                    X();
                    let t = e.clientX - Y;
                    se.style.width = z + t >= 20 ? z + t + "px" : "20px";
                }
            },
            ne = (e) => {
                (ee = !1),
                    document.body.removeEventListener("mousemove", te, !1),
                    document.body.removeEventListener("mouseup", ne, !1);
            };
        J.addEventListener(
            "mousedown",
            (e) => {
                ee ||
                    ((ee = !0),
                    (Y = e.clientX),
                    (z = parseInt(document.defaultView.getComputedStyle(se).width, 10)),
                    document.body.addEventListener("mousemove", te, !1),
                    document.body.addEventListener("mouseup", ne, !1));
            },
            !1,
        );
        let se = t`
        <div class="card-tree">
            ${k}
        </div>
    `;
        const ie = t`
        <div class="card-file-container">
            <div class="card-file-tools">
                ${U}
                ${O}
                ${H}
                ${j}
            </div>
            <div class="card-file">
                ${se}
                ${J}
                ${G}
            </div>
        </div>
    `;
        let le, re;
        (ie.currentNode = e(void 0)),
            (ie.viewRecord = (e) => {
                var t, n;
                r &&
                    ((t = ie.targetClass),
                    (n = e.docid),
                    fetch(R + "GetRecord", {
                        method: "POST",
                        body: JSON.stringify({ targetClass: t, docid: n }),
                    })
                        .then((e) => e.json())
                        .catch((e) => e)).then((t) => {
                        (s = r()(t, e.docid)),
                            s.applyButtonAction || (s.applyButtonAction = B),
                            (s.cancelButtonAction = ie.hideBlank);
                        let n = b({ contents: s });
                        n.addEventListener("onClose", ie.hideBlank), m(n);
                    });
            }),
            i(ie),
            ie.addEventListener("connected", (e) => {
                (o = k.getRoot()), o.expand();
            });
        let ae = (e) => {
            if ((e.stopPropagation(), de(), !e.ctrlKey)) {
                let t = "TD" == e.target.nodeName ? e.target : e.target.parentNode,
                    n = t.parentNode;
                pe.length > 0 &&
                    (pe.forEach((e) => {
                        e.element.classList.remove("is-active");
                    }),
                    (pe = [])),
                    re !== t
                        ? (re && re.classList.remove("clicket-cell"),
                          le && le.classList.remove("clicket-row"),
                          t.classList.add("clicket-cell"),
                          n.classList.add("clicket-row"),
                          (le = n),
                          (re = t),
                          re.classList.add("clicket-cell"),
                          le.classList.add("clicket-row"))
                        : (re?.classList.remove("clicket-cell"),
                          le?.classList.remove("clicket-row"),
                          (le = void 0),
                          (re = void 0));
            }
        };
        const oe = (e, n) => {
            e.clearCells();
            let s = [],
                i = A.getColumns(),
                r = {};
            for (let e = 0; e < i.length; e++) r[i[e].index] = e;
            for (let e = 0; e < l.column_props.length; e++) {
                let i;
                (i = l.column_props[e].callback
                    ? t`<div style=${l.column_props[e].styleCell}>${l.column_props[
                          e
                      ].callback(n[l.column_props[e].id])}</div>`
                    : t`<div style=${l.column_props[e].styleCell} title=${
                          n[l.column_props[e].id]
                      }>${n[l.column_props[e].id]}</div>`),
                    l.inModal || i.addEventListener("click", ae, !1),
                    (s[r[l.column_props[e].id]] = { value: i });
            }
            e.cellsCreateAndPush(s);
            let a = e.getCells();
            for (let e = 0; e < a.length; e++) {
                let t = i[e],
                    n = a[e];
                l.inModal || n?.getElement().parentNode.addEventListener("click", ae, !1),
                    A.getHiddenColumn(t) && n?.getElement()?.classList.add("is-hidden");
            }
        };
        (ie.clearRows = A.clearRows),
            (ie.hideBlank = (e) => {
                m(null), D({ id: "" });
            }),
            (A.menu_row = g()),
            A.menu_row.classList.add("table-menu"),
            (A.menu_row.style.zIndex = 999);
        let de = (e) => {
                A.menu_row.hide(), A.menu_table.hide();
            },
            ce = de;
        A.menu_row.addEventListener("onHide", (e) => {
            e.stopPropagation(), A.menu_row.remove();
        }),
            A.menu_row.addEventListener("onShow", (e) => {
                A.menu_table.hide(),
                    e.stopPropagation(),
                    document.body.append(A.menu_row),
                    A.menu_row.clearItems(),
                    document.addEventListener("click", ce, { once: !0 }),
                    A.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="edit-icon"></div>Редактировать</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            l.inModal
                                ? window.open(
                                      `${location.origin}/#cardfile/${ie.urlPath}?id=${A.menu_row.currentRow.nodeData.docid}`,
                                  )
                                : (D({ id: A.menu_row.currentRow.nodeData.docid }),
                                  A.menu_row.hide());
                        }),
                    A.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="file-icon-menu"></div>Добавить</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            T(!1), A.menu_row.hide();
                        }),
                    A.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="folder-icon-menu"></div>Добавить группу</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            T(!0), A.menu_row.hide();
                        }),
                    A.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="duplicate-icon"></div>Дублировать</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            var t, n;
                            ((t = A.menu_row.currentRow.nodeData.targetClass),
                            (n = A.menu_row.currentRow.nodeData.docid),
                            fetch(R + "duplicateRecord", {
                                method: "POST",
                                body: JSON.stringify({ targetClass: t, docid: n }),
                            })
                                .then((e) => e.json())
                                .catch((e) => e)).then((e) => {
                                e.docid
                                    ? D({ id: e.docid })
                                    : P("Произошла ошибка", "error"),
                                    A.menu_row.hide();
                            });
                        }),
                    A.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;">${
                                E()
                                    ? t`<div class="check-mark"></div>`
                                    : t`<div class="empty-mark"></div>`
                            }Иерархический вид</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            ie.updateTable({ isHierarchycal: E() ? E(!1) : E(!0) }),
                                A.menu_row.hide();
                        }),
                    A.menu_row
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="trash-icon"></div>Удалить</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            var t, n;
                            ((t = A.menu_row.currentRow.nodeData.targetClass),
                            (n = A.menu_row.currentRow.nodeData.docid),
                            fetch(R + "deleteRecord", {
                                method: "POST",
                                body: JSON.stringify({ targetClass: t, docid: n }),
                            })
                                .then((e) => e.json())
                                .catch((e) => e)).then((e) => {
                                ie.updateTable(),
                                    A.menu_row.hide(),
                                    o.nodes[A.menu_row.currentRow.nodeData.docid]
                                        ?.getElement()
                                        ?.remove();
                            });
                        }),
                    A.menu_row.currentRow.nodeData?.IsGroup;
            }),
            (A.menu_table = g()),
            A.menu_table.classList.add("table-menu"),
            (A.menu_table.style.zIndex = 999),
            A.menu_table.addEventListener("onHide", (e) => {
                e.stopPropagation(), A.menu_table.remove();
            }),
            A.menu_table.addEventListener("onShow", (e) => {
                A.menu_row.hide(),
                    e.stopPropagation(),
                    document.body.append(A.menu_table),
                    A.menu_table.clearItems(),
                    document.addEventListener("click", ce, { once: !0 }),
                    A.menu_table
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="file-icon-menu"></div>Добавить</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            T(!1), A.menu_table.hide();
                        }),
                    A.menu_table
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;"><div class="folder-icon-menu"></div>Добавить группу</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            T(!0), A.menu_table.hide();
                        }),
                    A.menu_table
                        .itemCreateAndPush({
                            value: t`<span style="display: flex; align-items: center;">${
                                E()
                                    ? t`<div class="check-mark"></div>`
                                    : t`<div class="empty-mark"></div>`
                            }Иерархический вид</span>`,
                        })
                        .getElement()
                        .addEventListener("click", (e) => {
                            ie.updateTable({ isHierarchycal: E() ? E(!1) : E(!0) }),
                                A.menu_table.hide();
                        });
            }),
            (ie.createRows = (e, t, n) => {
                let s = 0;
                for (let t in e) s++;
                let i = Array(s);
                const r = [],
                    a = A.getColumns();
                for (let e = 0; e < a.length; e++) r[e] = !!A.getHiddenColumn(a[e]);
                const d = t ? A.rowsCreateAndUnshift(i) : A.rowsCreateAndPush(i);
                for (var u = 0; u < d.length; u++) {
                    const t = d[u];
                    oe(t, e[u]);
                    let n = e[u];
                    const s = t.getElement();
                    (s.nodeData = n),
                        s.addEventListener("contextmenu", (e) => {
                            e.preventDefault(),
                                (A.menu_row.currentRow = { row: t, nodeData: n }),
                                A.menu_row.setPos(e.pageX, e.pageY),
                                A.menu_row.show();
                        });
                    let i = pe.find((e) => e.data.docid == n.docid);
                    i && (s.classList.add("is-active"), (i.element = s)),
                        l.inModal
                            ? e[u].IsGroup
                                ? (s.addEventListener("click", (e) => {
                                      L.element &&
                                          L.element.classList.remove("is-active"),
                                          (L.nodeData = n),
                                          (L.element = s),
                                          L.element.classList.add("is-active");
                                  }),
                                  s.addEventListener("dblclick", (e) => {
                                      let t = o.nodes[n.docid];
                                      t
                                          ? (t.onSelect(t), t.expand())
                                          : x({
                                                targetClass: n.targetClass,
                                                id: n.docid,
                                                header: n.header,
                                            });
                                  }))
                                : (s.addEventListener("click", (e) => {
                                      L.element &&
                                          L.element.classList.remove("is-active"),
                                          (L.nodeData = n),
                                          (L.element = s),
                                          L.element.classList.add("is-active");
                                  }),
                                  s.addEventListener("dblclick", (e) => {
                                      l.inModal(n, l.callBackElement);
                                  }))
                            : (e[u].IsGroup
                                  ? s.addEventListener("dblclick", (e) => {
                                        let t = o.nodes[n.docid];
                                        if (t) {
                                            (be = 200), (Ee = 1), (Le = 0);
                                            let e = t.ancestors;
                                            e || (e = []),
                                                e.forEach((e) => e.expand()),
                                                t.onSelect(t, !1),
                                                t.expand();
                                        } else
                                            x({
                                                targetClass: n.targetClass,
                                                id: n.docid,
                                                header: n.header,
                                            });
                                    })
                                  : s.addEventListener("dblclick", (e) => {
                                        D({ id: n.docid });
                                    }),
                              s.addEventListener("mousedown", (e) => {
                                  e.ctrlKey
                                      ? s.classList.contains("is-active")
                                          ? (s.classList.remove("is-active"),
                                            pe.splice(
                                                pe.indexOf(
                                                    pe.find((e) => e.element == s),
                                                ),
                                                1,
                                            ))
                                          : (s.classList.contains("clicket-row")
                                                ? (le.classList.remove("clicket-row"),
                                                  re.classList.remove("clicket-cell"),
                                                  pe.push({ element: s, data: n }),
                                                  s.classList.add("is-active"),
                                                  (le = void 0),
                                                  (re = void 0))
                                                : (pe.push({ element: s, data: n }),
                                                  s.classList.add("is-active")),
                                            le &&
                                                (le.classList.remove("clicket-row"),
                                                re.classList.remove("clicket-cell"),
                                                pe.push({
                                                    element: le,
                                                    data: le.nodeData,
                                                }),
                                                le.classList.add("is-active"),
                                                (le = void 0),
                                                (re = void 0)))
                                      : fe({ element: s, data: n });
                              }));
                    let a = t.getCells();
                    for (let e = 0; e < a.length; e++)
                        r[e] && a[e]?.getElement()?.classList.add("is-hidden");
                }
                return n && (t ? ie.deleteRows(c, !1) : ie.deleteRows(c, !0)), d;
            }),
            (ie.setBlank = r);
        let ue,
            me = !1,
            he = !1,
            pe = [],
            ve = t`<p></p>`,
            ge = t`<div class="drag-element">${ve}</div>`,
            fe = (e) => {
                (me = !0),
                    e.element.classList.contains("is-active")
                        ? (ve.innerText = "Выделенных записей: " + pe.length)
                        : ((ve.innerText = e.data.Name || e.data.Code || e.data.docid),
                          pe.forEach((e) => {
                              e.element.classList.remove("is-active");
                          }),
                          (pe = []),
                          (ue = e)),
                    document.body.addEventListener("mouseup", we),
                    document.body.addEventListener("mousemove", ye);
            },
            ye = (e) => {
                me &&
                    !e.ctrlKey &&
                    (he ||
                        ((he = !0),
                        X(),
                        u(ge),
                        (document.body.style.cursor = "grabbing")),
                    (ge.style.top = e.clientY + "px"),
                    (ge.style.left = e.clientX + "px"));
            },
            we = (e) => {
                if (
                    he &&
                    ((he = !1),
                    u(null),
                    (document.body.style.cursor = ""),
                    document.body.removeEventListener("mousemove", ye),
                    document.body.removeEventListener("mouseup", we),
                    $?.id)
                ) {
                    let e = [];
                    0 == pe.length
                        ? e.push(ue.data.docid)
                        : pe.forEach((t) => {
                              e.push(t.data.docid);
                          }),
                        S(l.targetClass, e, $.id).then((t) => {
                            t.ok &&
                                (ie.updateTable(),
                                -1 == $.id
                                    ? (o.collapse(), o.expand())
                                    : (e.forEach((e) => {
                                          o.nodes[e]?.getElement()?.remove();
                                      }),
                                      o.nodes[$.id]?.collapse(),
                                      o.nodes[$.id]?.expand()));
                        });
                }
                me = !1;
            },
            Ce = (e) => {
                if (navigator.clipboard && window.isSecureContext)
                    return navigator.clipboard.writeText(e);
                navigator.clipboard
                    .writeText(e)
                    .then(() => {})
                    .catch((e) => {});
            };
        document.onkeydown = function (e) {
            let t = !1,
                n = !1,
                s = !1;
            if (
                ("key" in (e = e || window.event)
                    ? ((t = "Escape" === e.key || "Esc" === e.key),
                      (n = ("c" === e.key && e.ctrlKey) || ("C" === e.key && e.ctrlKey)),
                      (s = "Enter" === e.key || "Ent" == e.key))
                    : ((t = 27 === e.keyCode),
                      (n = 67 === e.keyCode && e.ctrlKey),
                      (s = 13 === e.keyCode)),
                t &&
                    (pe.forEach((e) => {
                        e.element.classList.remove("is-active");
                    }),
                    (pe = []),
                    u(null),
                    (document.body.style.cursor = ""),
                    document.body.removeEventListener("mousemove", ye),
                    document.body.removeEventListener("mouseup", we),
                    (me = !1),
                    (he = !1)),
                n)
            ) {
                let e = "";
                if (
                    (void 0 !== window.getSelection
                        ? (e = window.getSelection().toString())
                        : void 0 !== document.selection &&
                          "Text" == document.selection.type &&
                          (e = document.selection.createRange().text),
                    re && 0 == e.length && Ce(re.innerText),
                    pe.length > 0 && 0 == e.length)
                ) {
                    let e = "";
                    pe.forEach((t) => (e += t.element.innerText)), Ce(e);
                }
            }
            s && le && D({ id: le.nodeData.docid });
        };
        var be = 200,
            Ee = 1,
            Le = 0;
        var xe = !0,
            $e = !0;
        return (
            G.addEventListener("scroll", function (e) {
                let t = G.scrollTop / (A.offsetHeight / 100);
                G.scrollTop > Le
                    ? t > 75 && xe && ((xe = !1), ie.addRowsScroll(be, 50, !1))
                    : t < 25 &&
                      Ee > 1 &&
                      $e &&
                      (($e = !1), ie.addRowsScroll(Ee - 50, 50, !0)),
                    (Le = G.scrollTop);
            }),
            (ie.addRowsScroll = (e, t, s) =>
                N({
                    targetClass: l.targetClass,
                    id: ie.currentNode()?.id,
                    order: n.order || v(),
                    filter: n.filter || C(),
                    isHierarchycal: n.isHierarchycal || E(),
                    start: e,
                    length: t,
                }).then((e) => {
                    let t = [];
                    for (let n in e)
                        (e[n].targetClass = ie.currentNode()?.targetClass),
                            (e[n].header = ie.currentNode()?.header),
                            ie.currentNode()?.header
                                ? (e[n].header = ie.currentNode()?.header)
                                : (e[n].header = ie.currentNode()?.getHeader()),
                            t.push(e[n]);
                    (c = t.length),
                        s ? ie.createRows(t, !0, !0) : ie.createRows(t, !1, !0);
                })),
            (ie.deleteRows = (e, t) => {
                if (t) {
                    for (var n = 0; n < e; n++) A.rowRemoveByKey(0);
                    (be += e), (Ee += e), (xe = !0);
                } else {
                    if (0 === e) return;
                    let t = A.getRows().length - 1;
                    for (n = t; n >= t - e; n--) A.rowRemoveByKey(n);
                    (be -= e),
                        (Ee -= e),
                        ($e = !0),
                        (G.scrollTop = (A.offsetHeight / 100) * 35);
                }
            }),
            (ie.updateTable = (e) => {
                w.show(),
                    N({
                        targetClass: l.targetClass,
                        id: ie.currentNode()?.id,
                        order: e?.order || v(),
                        filter: e?.filter || C(),
                        isHierarchycal: e?.isHierarchycal || E(),
                        start: e?.start,
                        length: e?.length || 200,
                    }).then((e) => {
                        w.hide();
                        let t = [];
                        for (let n in e)
                            (e[n].targetClass = ie.currentNode()?.targetClass),
                                (e[n].header = ie.currentNode()?.header),
                                ie.currentNode()?.header
                                    ? (e[n].header = ie.currentNode()?.header)
                                    : (e[n].header = ie.currentNode()?.getHeader()),
                                t.push(e[n]);
                        ie.clearRows(), ie.createRows(t);
                    });
            }),
            (ie.setConstOrder = _),
            (ie.setConstFilter = y),
            (ie.table = A),
            (ie.tree = k),
            (ie.addActions = U),
            (ie.targetClass = n.targetClass),
            (ie.getBlank = () => s),
            ie
        );
    },
    te = (n) => {
        let i = e(n.comments || []),
            l = n.docid,
            r = n.targetClass,
            a = { docid: A(), Name: localStorage.userName },
            o = t`<input placeholder="Введите комментарий..." />`,
            d = t`<button class="send-message-button"></button>`;
        l || (d.disabled = !0),
            d.addEventListener("click", (e) => {
                o.value &&
                    (function (e, t, n) {
                        return fetch(R + "newComment", {
                            method: "POST",
                            body: JSON.stringify({
                                targetClass: e,
                                docid: t,
                                userId: +A(),
                                comment: n,
                            }),
                        })
                            .then((e) => e.json())
                            .catch((e) => e);
                    })(r, l, o.value).then((e) => {
                        let t = i();
                        t.push({ Comment: o.value, Persona: a, DateComment: W() }),
                            i(t),
                            (o.value = "");
                    });
            });
        let c = t`
        <div class="comments">
            ${s(i, (e) =>
                ((e) => {
                    let n;
                    return (
                        (n = e.Persona.docid == a.docid ? "comment is-self" : "comment"),
                        t`
            <div class=${n}>
                <div class="comment-inner">
                    <p class="comment-text">${e.Comment}</p>
                    <div class="comment-info">
                        <p class="comment-author">${e.Persona.Name}</p>
                        <p class="comment-date">${e.DateComment}</p>
                    </div>
                </div>
            </div>
        `
                    );
                })(e),
            )}
        </div>
    `;
        return t`
        <div class="comments-activity">
            <h3>Комментарии</h3>
            ${c}
            <div class="comments-activity-control">
                ${o}
                ${d}
            </div>
        </div>
    `;
    },
    ne = (n = {}) => {
        let i = e([]),
            l = e([]),
            r = e(),
            a = e([]);
        const o = t`
        <div class="tab-view">    
            <div class="tab-titles">
                ${s(i, (e) => e)}
            </div>
            <div class="tab-contents">
                ${r}
            </div>
        </div>
    `;
        let d = null;
        return (
            (o.addTab = (e, s) => {
                let d = t`<div class="tab-title">${e}</div>`,
                    c = t`<div class="tab-content">${s}</div>`,
                    u = { title: d, content: c, id: l().length };
                d.addEventListener("click", (e) => {
                    n.handleTabClick ? n.handleTabClick(u) : o.activate(u);
                }),
                    (u.isActive = (e = !1) => {
                        o.activate(u, e);
                    }),
                    (u.hide = (e) => {
                        (d.style.display = "none"),
                            d.classList.remove("is-active"),
                            r(null);
                    }),
                    (u.show = (e) => {
                        d.style.display = "inline-block";
                    });
                let m = i(),
                    h = l(),
                    p = a();
                return m.push(d), i(m), h.push(c), l(h), p.push(u), a(p), u;
            }),
            (o.activate = (e, t = !1) => {
                d && d.title.classList.remove("is-active"),
                    (d = e),
                    d.title.classList.add("is-active"),
                    t && r(""),
                    r(d.content);
            }),
            (o.getTab = (e) => a()[e]),
            (o.removeTab = (e) => {
                let t = a();
                t.splice(e, 1), a(t);
            }),
            (o.hideTab = (e) => {
                a()[e].hide();
            }),
            (o.showTab = (e) => {
                a()[e].show();
            }),
            (o.getTabs = a),
            o
        );
    };
export {
    u as AppShell,
    K as BaseTable,
    G as Blank,
    ee as CardFile,
    E as CellData,
    m as CollapseCategory,
    x as ColumnData,
    te as CommentsActivity,
    M as CustomTable,
    h as DropDown,
    p as DropDownList,
    f as DropDownMenu,
    j as Field,
    w as HList,
    F as HierarchicalCardFile,
    y as ItemDataHList,
    l as ItemDataList,
    v as ItemDataMenu,
    a as ItemDataNavHeader,
    r as List,
    Z as Loader,
    g as Menu,
    P as Message,
    b as Modal,
    d as NavHeader,
    o as NavHeaderSection,
    k as NodeData,
    L as RowData,
    ne as TabView,
    $ as Table,
    _ as Tree,
    c as WorkSpace,
};
