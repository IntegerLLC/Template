// import style
import "./index.sass";

// import libraries
import { html, o } from "@sinuous/index.js";
import { map } from "@sinuous/map.js";

// import application libraries
import { logIn } from "../../lib/account.js";
import { authorization } from "../../api.js"
import { Message } from "@integerUI.js";
import { Field } from "@integerUI.js";

export const Shell = props => {
    const login = Field({title: "Логин", required: true, type: "string", width: "400"});
    const password = Field({title: "Пароль", required: true, type: "password", width: "400"});
    const submitButton = html`<button type="submit" class="button-tool" style="width: 170px">Войти</button>`;

    const authForm = html`
        <form>
            ${login}
            ${password}
            ${submitButton}
        </form>
    `;

    let roles_visible = o(null);

    let rolesList = o([]);

    let roles = html`
        <div class="roles">
            <h4>Выберите Роль</h4>
            <div>
                ${map(rolesList, role => {
                    let roleEl = html`<p>${role.name}</p>`;
                    roleEl.addEventListener('click', _ => {
                        localStorage.role = role.docid;
                        logIn(login.getValue(), password.getValue(), role.docid);

                        roles_visible(null);
                        location.href = "#";
                    });
                    return roleEl;
                })}
            </div>
        </div>
    `;

    submitButton.addEventListener("click", e => {
        e.preventDefault();

        if(login.getValue() === "" ||password.getValue() === "") return Message(props?.alert || "Введите данные для входа!", "error");

        authorization(login.getValue(), password.getValue()).then(result => {
            if(result) {
                rolesList(result.roles);
                roles_visible(roles);
            }
        });
    });

    return html`
        <div class="auth">
            <div class="left-side">
                <h1>Авторизация</h1>
                ${authForm}
            </div>
            <div class="right-side">
                <img class="logo" src="assets/image/integer-logo.svg"></img>
            </div>
            ${roles_visible}
        </div>
    `;
};