///
/// Global app statement
/// This file used for insert static app components
///

// INT_UI STYLES
import "./styles/style.js";

// import components
import { WorkSpace } from "@integerUI.js";

// import shells
import { Shell as ShellLogin } from "./shells/Login/index.js";
import { Shell as ShellApplication } from "./shells/Application/index.js";

const app = WorkSpace();

/// Shells section

app.shell_login = ShellLogin(),
app.shell_application = ShellApplication(),

///

document.body.append(app);

export default app;