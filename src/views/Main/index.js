// import style
import "./index.sass";

// import libraries
import { html as context } from "@sinuous/style.js";

export const View = props => {
    return context("view-main")`<span>MAIN VIEW</span>`;
};