import "./index.sass";

// base
import { html } from "@sinuous/index.js";

// helpers
import { dateToJs, dateToTurbo, generateUUID } from "../../../../helpers.js";

// components
import { Blank } from "@integerUI.js";
import { Field } from "@integerUI.js";

import { CardFileEmployee } from "../../CardFiles/References/CardFileEmployee/index.js";

let genders = [
    { value: 0, text: "Не указан" },
    { value: 1, text: "Мужской" },
    { value: 2, text: "Женский" }
];

export const BlankEmployee = (props, docid) => {
    let blankName = docid ? "Сотрудник: " + props.Name : "Новый сотрудник";

    props.subTable = [
        {name: "Ivan", age: 15},
        {name: "Ivan2", age: 14},
        {name: "Ivan3", age: 16},
        {name: "Ivan4", age: 17},
    ];

    let blank = Blank({ data: props, title: blankName, docid, class: "blank-employee" });
    let surnameInitial = blank.createField({ title: "Фамилия инициалы", key: "Name", type: "string" });
    let name = blank.createField({ title: "Имя", key: "Имя", type: "string" });
    let surname = blank.createField({ title: 'Фамилия', key: "Фамилия", type: "string" });
    let patronymic = blank.createField({ title: "Отчество", key: "Отчество", type: "string", width: 222 });
    let gender = blank.createField({ title: "Пол", key: "Пол", type: "select", options: genders });
    let dateBirth = blank.createField({ title: "Дата рождения", key: "ДатаРожд", type: "date" });
    let email = blank.createField({ title: "Email", key: "Email", type: "string", width: 300 });
    let phone = blank.createField({ title: "Телефон", key: "Телефон", type: "string", placeholder: "+7 () - -" });
    
    let CardFileEmployeeField = Field({title: "CardFile Employee", reference: CardFileEmployee, width: 300, placeholder: "Ссылочное поле"});
    let checkboxExampleField = Field({title: "Поле checkbox", type: "checkbox"});

    let subTableProps = [
        {id: "name"},
        {id: "age"}
    ];

    let subTable = blank.createTable({column_props: subTableProps, width: "30px", key: "subTable"});

    let headerRow = blank.createRow();
    let centerRow = blank.createRow();

    let exampleRow = blank.createRow();
    exampleRow.addItems([CardFileEmployeeField, checkboxExampleField]);

    headerRow.addItems([surnameInitial, name, surname, patronymic]);
    centerRow.addItems([gender, dateBirth, email, phone]);

    blank.addItem(headerRow);
    blank.addItem(centerRow);
    blank.addItems(html`<h3 style="color: grey">Example</h3>`);
    blank.addItem(exampleRow);

    blank.addItem(subTable);

    return blank;
};