// import style
import "./index.sass";

// import libraries
import { html } from "@sinuous/index.js";
import { observe } from "@disco/index.js";

// import components
import { AppShell } from "@integerUI.js";
import { DropDownList } from "@integerUI.js";
import { DropDownMenu } from "@integerUI.js";
import { Menu } from "@integerUI.js";

// import views
import { View as ViewRoot } from "../../views/Root/index.js";
import { View as ViewMain } from "../../views/Main/index.js";
import { View as ViewCardFile } from "../../views/CardFile/index.js";

// api for interface init
import { getInterface } from "../../api.js"

const fillNode = (menu, datas) => {
    for (let i = 0; i < datas.length; i++) {
        let data = datas[i];
        menu.itemCreateAndPush({
            value: html`<a href=${data.comandScript}>${data.name}</a>`,
            menu: data.typeElement === 1 ? fillNode(Menu(), data.elements) : undefined,
        });
    };

    return menu;
};

// const createHeaderItem = data => data.typeElement === 1 ? fillNode(DropDownMenu({ header: html`<a>${data.name}</a>` }), data.elements) : html`<a>${data.name}</a>`;
const createHeaderItem = data => {
    if(data.typeElement === 1){
        let dropdown = DropDownMenu({ header: html`<a>${data.name}</a>`, isHoverable: true });
        dropdown.classList.add("is-center");

        dropdown.addEventListener("onExpand", _ => {
            dropdown.isHoverable = false;
            dropdown.getHeader().classList.add('is-active');
        });
        dropdown.addEventListener("onCollapse", _ => {
            dropdown.isHoverable = true;
            dropdown.getHeader().classList.remove('is-active');
        });

        return fillNode(dropdown, data.elements);
    } else {
        return html`<a href=${data.comandScript}>${data.name}</a>`;
    }
}

export const Shell = props => {
    const logo = html`<img src="assets/image/integer-logo.svg"></img>`;

    const element = AppShell(props);
    observe(element);

    element.classList.add("shell-application");

    element.view_root = ViewRoot();
    element.view_main = ViewMain();
    element.view_card_file = ViewCardFile();

    element.sectionStart.itemCreateAndPush({ element: html`<a href="#" class="logo">${logo}</a>` });

    let collapseOtherMenu = _ => element?.currentItem?.getElement()?.collapse();

    // Create Interface
    element.addEventListener("connected", _ => { 
        document.addEventListener("click", collapseOtherMenu, false);

        element.sectionEnd.clearItems();

        getInterface(+localStorage.role).then(res => {
            let interfacePanel = res.elements;
            for(var i = 0; i < interfacePanel.length; i++) {
                let item = element.sectionEnd.itemCreateAndPush({ element: createHeaderItem(interfacePanel[i]) });

                item.getElement().getHeader().addEventListener("click", event => event.stopPropagation());
                item.getElement().addEventListener("onExpand", _ => {
                    let previous = element.currentItem;
                    if (previous) {
                        if (previous == item) return;
                        previous.getElement()?.collapse();
                    };

                    element.currentItem = item;
                });

                if(i == interfacePanel.length - 1) {
                    element.sectionEnd.itemCreateAndPush({ element: (_ => {
                        const dropdown = DropDownList({
                            header: html`<div>${localStorage.userName}</div>`,
                            isHoverable: true,
                        });
                
                        dropdown.classList.add("is-center");
                
                        dropdown.itemCreateAndPush({ element: html`<a href="#">Профиль</a>` });
                        dropdown.itemCreateAndPush({ element: html`<a href="#logout">Выйти</a>` });
                
                        return dropdown;
                    })()});
                }
            }
        });
    });

    // element.addEventListener("connected", _ => alert("You are logged in!"));
    // element.addEventListener("disconnected", _ => alert("You are logged out!")); 
    element.addEventListener("disconnected", document.removeEventListener("click", collapseOtherMenu, false)); 

    return element;
};
