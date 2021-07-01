// import style
import "./index.sass";

// import app statement
import app from "./app.js";

// import application libraries
import { add as route_add, call as route_call } from "./router.js";
import { isLoggedIn, logOut } from "./lib/account.js";

// route_add(/^SOME$/, _ => {
//     app.shell_application.setView(app.shell_application.view_test);
//     app.setView(app.shell_application);
// });

route_add(/^(?<href>.*)$/, groups => {
    if (groups?.href === "login") {
        if (!isLoggedIn()) return;

        location.href = "#";
        route_call();

        return true; // prevent propagation
    } else {
        if (isLoggedIn()) return;

        location.href = "#login";
        route_call();

        return true; // prevent propagation
    };
});

route_add(/^login$/, _ => app.setView(app.shell_login));
route_add(/^logout$/, _ => {
    logOut();

    location.href = "#login";
    route_call();
});

route_add(/^$/, _ => {
    app.shell_application.setView(app.shell_application.view_root);
    app.setView(app.shell_application);
});

route_add(/^main$/, _ => {
    app.shell_application.setView(app.shell_application.view_main);
    app.setView(app.shell_application);
});

let lastCardFile = undefined;
route_add(/^cardfile\/(?<query>.*)$/, ({query}) => {
    let parts = query.split('?');
    let record;

    if(parts.length > 1) {
        const url_arguments = new URLSearchParams("?"+parts[1]);
        record = url_arguments.get("id");
    }
    
    if(lastCardFile == parts[0]) {
        if(record) app.shell_application.view_card_file.viewRecord({docid: +record});
    } else {
        lastCardFile = parts[0];
        app.shell_application.view_card_file.setCardFile(parts[0]);
        app.shell_application.setView(app.shell_application.view_card_file);
        if(record) app.shell_application.view_card_file.viewRecord({docid: +record});
    }

    app.setView(app.shell_application);
});

// route_add(/^service\/(?<query>.*)$/, ({query}) => {
//     let parts = query.split('?');
//     let order, filter, record;

//     if(parts.length > 1) {
//         const url_arguments = new URLSearchParams("?"+parts[1]);
//         order = url_arguments.get("order");
//         filter = url_arguments.get("filter");
//         record = url_arguments.get("record");
//     }

//     if(lastCardFile == parts[0]) {
//         app.shell_application.view_service.setOtherProps({record, order, filter});
//     } else {
//         lastCardFile = parts[0];
//         app.shell_application.view_service.setService(parts[0]);
//         app.shell_application.setView(app.shell_application.view_service);
//     }
//     app.setView(app.shell_application);
// });

// import  * as UI  from "@integerUI.js";
// console.log(UI);