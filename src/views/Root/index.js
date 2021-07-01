// import style
import "./index.sass";

// import libraries
import { html as context } from "@sinuous/style.js";

export const View = props => {
    return context("view-root")`<div><img src="assets/image/text-integer.svg" /></div>`;
};