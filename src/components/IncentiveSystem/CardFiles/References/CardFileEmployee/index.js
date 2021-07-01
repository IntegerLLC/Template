import "./index.sass";

import { TableHelper } from "../../../../../helpers.js";

import { CardFile } from "@integerUI.js";
import { BlankEmployee } from "../../../Blanks/BlankEmployee/index.js";

export const CardFileEmployee = props => {
    let tableHelper = TableHelper();

    let column_props = [
        { id: "IsGroup", text: "", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "display: flex; height: 100%; justify-content: center; align-items: center;", order: "IsGroup", fixWidth: 25, callback: tableHelper.fileOrFolder }, //TODO
        { id: "Name", text: "Фамилия инициалы", order: "Name", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", order: "name", width: 30 },
        { id: "Имя", text: "Имя", order: "Имя", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", width: 10, isHidden: true },
        { id: "Фамилия", text: "Фамилия", order: "Фамилия", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", width: 12, isHidden: true },
        { id: "Отчество", text: "Отчество", order: "Отчество", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", width: 12, isHidden: true },
        { id: "Пол", text: "Пол", order: "Пол", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", width: 30, callback: tableHelper.sexGender },
        { id: "ДатаРожд", text: "Дата рождения", order: "ДатаРожд", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", width: 12, isHidden: true },
        { id: "Email", text: "Email", order: "Email", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", width: 40 },
        { id: "Телефон", text: "Телефон", order: "Телефон", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", isHidden: true },

        // { id: "docid", text: "DOCID", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", order: "docid", width: 5, isHidden: true },
        // { id: "CreateDate", text: "Дата создания", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", order: "CreateDate", width: 12, isHidden: true },
        // { id: "CreateUser", text: "Кто создал", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", order: "CreateUser", width: 15, isHidden: true },
        // { id: "UpdateDate", text: "Дата изменения", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", order: "UpdateDate", width: 12, isHidden: true },
        // { id: "UpdateUser", text: "Кто изменил", style: 'text-align: center; width: 100%; justify-content: center;', styleCell: "text-align: center;", order: "UpdateUser", width: 15, isHidden: true },
    ];

    let cardFile = CardFile({ targetClass: "BaseInt.Справочники.Persona", rootName: "Сотрудники", cardWidth: 85, column_props: column_props, inModal: props?.inModal, callBackElement: props?.callBackElement });

    cardFile.setBlank(BlankEmployee); // set your blank on cardFile

    cardFile.setConstFilter("IsEmployee = true");

    cardFile.urlPath = "employees";

    return cardFile;
}