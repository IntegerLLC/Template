import { html, o } from "@sinuous/index.js";

export function dateToJs(date) {
    if (date.indexOf(" ") < 0) return date.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
    return date.split(" ")[0].replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1");
}

export function dateToTurbo(date) {
    return date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3.$2.$1");
}

export const getCurrentDateJS = _ => {
    let date = new Date();
    let dd = String(date.getDate()).length == 2? date.getDate() : "0" + date.getDate();
    let mm = String((date.getMonth() + 1)).length == 2? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    return dd + "." + mm + "." + yyyy;
};

export const getCurrentDateTurbo = _ => {
    let date = new Date();
    let dd = String(date.getDate()).length == 2? date.getDate() : "0" + date.getDate();
    let mm = String((date.getMonth() + 1)).length == 2? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
    let yyyy = date.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

export function TableHelper() {
    let fileOrFolder = props => {
        if (props) {
            return html`<div class="table-folder"></div>`;
        } else {
            return html`<div class="table-file"></div>`;
        }
    }

    let sexGender = props => {
        if (props == 0) {
            return "Не указан";
        } else if (props == 1) {
            return "Мужской";
        } else if (props == 2) {
            return "Женский";
        } else {
            return "Не корректное значение";
        }
    }

    let checkBox = props => {
        let item = html`<input type="checkbox" disabled />`;
        if (props) {
            item.checked = true;
        } else {
            item.checked = false;
        }
        return item;
    }

    let date = props => {
        let item = html`<input type="date" value=${dateToJs(props)} disabled />`;
        return item;
    }

    let number = props => {
        let numberText = String(props);
        let result = numberText.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1'");
        if (numberText.indexOf(".") < 0) result += ".00";
        return result;
    }

    let templateType = props => {
        switch (props) {
            case 0: return "Email";
            case 1: return "СМС";
            default: return "Не корректное значение";
        }
    }

    let rewardType = props => {
        switch (props) {
            case 0: return "Премия";
            case 1: return "Услуги";
            case 2: return "В скидку";
            default: return "Не корректное значение";
        }
    }

    let cellChanger = {
        rewardType,
        templateType,
        fileOrFolder,
        sexGender,
        checkBox,
        date,
        number
    };

    return cellChanger;
}

export function generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-7xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};