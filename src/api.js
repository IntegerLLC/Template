const url = "http://localhost:8080/PortalTB"; //https://unilever.integer.ru:8080/PortalTB/

import { getUserId } from "../src/lib/account.js"
import { Message } from "@integerUI.js";

export async function authorization(login, password) {
    let user = {
        login,
        password
    };

    let response = await fetch(url + 'auth', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    if (response.ok) {
        let result = await response.json();
        localStorage.userId = result.docid;
        localStorage.userName = result.name;
        localStorage.bu = result.bu;
        localStorage.buName = result.buName;
        localStorage.roles = JSON.stringify(result.roles);
        return result;
    }
    else {
        response.text().then(result => Message(result, "error"));
    }
}

export function getInterface(roleId) {
    let body = {
        "docid": roleId
    }
    return fetch(url + "getInterface", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export function newComment(targetClass, docid, comment) {
    return fetch(url + "newComment", {
        method: "POST",
        body: JSON.stringify({
            targetClass,
            docid,
            userId: +getUserId(),
            comment
        })
    })
        .then(res => res.json())
        .catch(error => error);
}

export const getHierarchyLevel = props => { //(targetClass, id, order, filter, isHierarchycal) 
    return fetch(url + "getHierarchyLevel", {
        method: "POST",
        body: JSON.stringify({
            targetClass: props.targetClass,
            id: props?.id,
            order: props?.order,
            filter: props?.filter,
            isHierarchycal: props?.isHierarchycal,
            start: props?.start,
            length: props?.length
        })
    })
        .then(res => res.json())
        .catch(error => error);
};

export function moveHierarchyObject(targetClass, id_objects, id_to) {
    return fetch(url + "moveHierarchyObject", {
        method: "POST",
        body: JSON.stringify({
            targetClass,
            id_objects,
            id_to,
        })
    });
};

export function getRecord(targetClass, docid) {
    let body = {
        targetClass,
        docid
    }
    return fetch(url + "GetRecord", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
};

export function deleteRecord(targetClass, docid) {
    let body = {
        targetClass,
        docid
    }
    return fetch(url + "deleteRecord", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export function duplicateRecord(targetClass, docid) {
    let body = {
        targetClass,
        docid
    }
    return fetch(url + "duplicateRecord", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export function checkFormula(formula) {
    let body = {
        formula,
    }
    return fetch(url + "checkFormula", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export function createOrUpdateRecord(targetClass, recordBody) {
    let body = {
        targetClass,
        body: recordBody
    };
   // console.log(recordBody)
    return fetch(url + "createOrUpdateRecord", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export function getCalcInvestments(incentivePeriod, bu, customerType, customer, contractType) {
    //http://192.168.1.100:91/portaltb/calcInvestments
    let body = {
        incentivePeriod,
        bu,
        customerType,
        customer,
        contractType
    }
    return fetch(url + "calcInvestments", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export function saveCalcInvestments(data) {
    //http://192.168.1.100:91/portaltb/calcInvestments
    let body = {
        webUser: +getUserId(),
        data
    }
    return fetch(url + "saveCalcInvestments", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}

export async function serviceActionForIncentivePeriod(webUser, bu, incentivePeriod, customerType, service, deadline) {
    let body = {
        webUser,
        bu,
        incentivePeriod,
        customerType,
        service,
        deadline
    };

    let response = await fetch(url + 'serviceActionForIncentivePeriod', {
        method: 'POST',
        body: JSON.stringify(body)
    });

    let json;
    let error;
    if (!response.ok) {
        response.text().then(it => error = it);
    }

    return { response, json, error };
}

export async function setFlagIncentivePeriod(targetClass, recordBody) {
    let body = {
        webUser: +getUserId(),
        targetClass,
        body: recordBody
    };
    let response = await fetch(url + "setFlagIncentivePeriod", {
        method: "POST",
        body: JSON.stringify(body)
    });

    let json;
    let error;
    if (response.ok) {
        json = await response.json();
    }
    else {
        response.text().then(it => error = it);
    }

    return { response, json, error };
}

export async function saveIncentivePeriod(targetClass, recordBody) {
    let body = {
        webUser: +getUserId(),
        targetClass,
        body: recordBody
    };
    let response = await fetch(url + "saveIncentivePeriod", {
        method: "POST",
        body: JSON.stringify(body)
    });

    let json;
    let error;
    if (response.ok) {
        json = await response.json();
    }
    else {
        response.text().then(it => error = it);
    }

    return { response, json, error };
}

//rejectDocument {DocID TargetClass comment}
export async function rejectDocument(targetClass, data) {
    let body = {
        webUser: +getUserId(),
        targetClass,
        body: data
    };

    let response = await fetch(url + 'rejectDocument', {
        method: 'POST',
        body: JSON.stringify(body)
    });

    let json;
    let error;
    if (!response.ok) {
        response.text().then(it => error = it);
    }

    return { response, json, error };
}

export async function confirmDocument(targetClass) {
    let body = {
        webUser: +getUserId(),
        targetClass
    };

    let response = await fetch(url + 'confirmDocument', {
        method: 'POST'
    });

    let json;
    let error;
    if (!response.ok) {
        response.text().then(it => error = it);
    }

    return { response, json, error };
}

//createAppeal {TargetClass  DocId comment indicatorID OOS}
export async function createAppeal(targetClass, data) {
    let body = {
        webUser: +getUserId(),
        targetClass,
        body: data
    };

    let response = await fetch(url + 'createAppeal', {
        method: 'POST',
        body: JSON.stringify(body)
    });

    let json;
    let error;
    if (!response.ok) {
        response.text().then(it => error = it);
    }

    return { response, json, error };
}

//
export async function apiFetch(props) {
    const errorPrefix = 'Ошибка: ';

    let resource = props?.url || null;
    let base = props?.base || null;
    let rel = props?.rel || null;

    let data = props?.data || null;
    let method = props?.method || 'post';

    let notOkAsErrors = props?.notOkAsErrors || false;

    //
    let urlCombine = (url, rel) => {
        return rel
            ? url.replace(/\/+$/, '') + '/' + rel.replace(/^\/+/, '')
            : url;
    };

    //
    if (!resource) {
        if (base && rel) {
            resource = urlCombine(base, rel);
        } else if (rel) {
            resource = urlCombine(url, rel);
        }
    }
    if (!resource) return null;

    let options = { method };
    if (data) {
        options.body = JSON.stringify(data);
    }

    let response = await fetch(resource, options);
    if (notOkAsErrors && !response.ok) {
        const message = `${errorPrefix}${response.status}`;
        throw new Error(message);
    }

    return response;
}
export function apiShowMessage(message, messageCallback, type) {
    if (!message || message.length == 0) return;

    if (!messageCallback) {
        Message(message, type);
    } else {
        messageCallback(message);
    }
}
export async function apiFetchMessage(props) {
    const errorMessage_400 = 'Неверные параметры!';
    const errorMessage_401 = 'Нет доступа!';
    const errorMessage_404 = 'Не найден!';
    const errorMessage_500 = 'Ошибка сервера!';

    let error = null;
    let admin = props?.admin || false;
    let serverMessage = props?.serverMessage || false;
    let messageCallback = props?.messageCallback || null;

    let response = await apiFetch(props)
        .catch(error => {
            error = error;
        });

    if (error && admin) {
        Message(error.message, "error");
        return;
    }

    if (!response) return;

    let result = null;
    switch (response.status) {
        case 200:
            result = await response.json();
            break;

        case 201:
            result = await response.text();
            apiShowMessage(result, messageCallback);
            break;

        //
        case 400:
            result = !serverMessage ? errorMessage_400 : await response.text();
            apiShowMessage(result, messageCallback, "error");
            break;

        case 401:
            result = !serverMessage ? errorMessage_401 : await response.text();
            apiShowMessage(result, messageCallback), "error";
            break;

        case 404:
            result = !serverMessage ? errorMessage_404 : await response.text();
            apiShowMessage(result, messageCallback, "error");
            break;

        //
        case 500:
            if (admin) {
                result = !serverMessage ? errorMessage_500 : await response.text();
                apiShowMessage(result, messageCallback, "error");
            }
            break;
    }

    return { result, response };
}

export function excelUpload(filename, data, objectForImport, bu) {
    let body = {
        bu,
        filename,
        data,
        webUser: +getUserId(),
        objectForImport,
    }
    return fetch(url + "newDataForImport", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(error => { return error; });
}


export function getFile(docid) {
    return fetch(url + "getFile", {
        method: "POST",
        body: JSON.stringify({
            docid
        })
    })
    .then(res => res.json())
        
        // resp => {
        // console.log('тут ', resp)
       
        // let d = resp.json().data;
        // let l = d.length;
        // console.log('тут ', l);
        
        // let array = new Uint8Array(l);
        // for (let i = 0; i < l; i++) array[i] = d.charCodeAt(i);

        
    // })
    
    
        
    .catch(error => error);
};



