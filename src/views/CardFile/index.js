// import style
import "./index.sass";

// import libraries
import { html } from "@sinuous/style.js";
import { o } from "@sinuous/index.js";

//import CARDFILE Components*
import { CardFileEmployee } from "../../components/IncentiveSystem/CardFiles/References/CardFileEmployee/index.js";

export const View = props => {
    let cardFile = o(undefined);
    let header = o(undefined);

    // output element architecture
    const element = html`
        <div class="card-file-view">
            <h1 style="display:none">${header}</h1>
            ${cardFile}
        </div>
    `;

    // setting the element and title to a rule (.../#cardfile/<RULE>)*
    const cardFiles = {
        "employees": {
            // targetClass: "BaseInt.Справочники.Persona",
            element: CardFileEmployee,
            header: "Сотрудники:"
        }
    };

    let lastCardFile = undefined;

    element.setCardFile = (id) => {
        lastCardFile = cardFile(cardFiles[id].element());
        header(cardFiles[id].header);
    }

    element.viewRecord = docid => lastCardFile.viewRecord(docid);

    element.addEventListener("connected", _ => console.log("Connected!"));
    return element;
};