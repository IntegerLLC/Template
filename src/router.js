var routes = [];
var trigger = _ => {};

export const add = (regex, callback) => routes.push([regex, callback]);
export const remove = id => delete routes[id];
export const sub = callback => {
    var _trigger = trigger;
    trigger = hash => {
        _trigger(hash);
        callback(hash);
    };
};
export const call = _ => {
    var hash = location.hash;
    var path = hash.substr(1);
    for (const id in routes) {
        const result = path.match(routes[id][0]);
        if (result && routes[id][1](result.groups || {}) == true) break;
    };
    trigger(hash);
};

export class QuerySchema extends URLSearchParams {
    constructor(...args) { super(...args); }

    put(key, value) {
        this.delete(key);
        this.append(key, value);
    }

    bulk_put(entries) { for (const key in entries) this.put(key, entries[key]); }
    bulk_set(entries) { for (const key in entries) this.set(key, entries[key]); }
    bulk_get(keys) {
        var output = {};
        for (const k in keys) output[key] = this.get(keys[k]);
        return output;
    }
}
export class Schema {
    constructor(schema) {
        if (schema === "" || schema === "#") {
            this.schema = "";
            this.hash = "";
            this.query = "";

            return;
        };

        const seperator = schema.indexOf("?");
        this.schema = schema.charAt(0) === "#" ? schema.slice(1, schema.length) : schema;
        this.hash = seperator === -1 ? schema : schema.slice(0, seperator);
        this.query = seperator === -1 ? "" : schema.slice(seperator + 1);
    }

    getQuerySchema() { return new QuerySchema(this.query); }
}

// TODO TEST + 
export const parts = _ => {
    var schema = location.hash;
    if (schema === "" || schema === "#") return "";
    schema = schema.slice(1, schema.length);

    const seperator = schema.indexOf("?");
    const hash = seperator === -1 ? schema : schema.slice(0, seperator);
    const query = seperator === -1 ? "" : schema.slice(seperator + 1);

    return {
        hash: hash,
        query: query,
    };
}

export const set_query = (kv) => {
    const url_parts = parts();

    const url_arguments = new URLSearchParams(url_parts.query);

    for (const key in kv) {
        const value = kv[key];

        url_arguments.delete(key);
        url_arguments.append(key, value);
    };

    location.href = "#" + url_parts.hash + "?" + url_arguments.toString();
}
// TODO TEST -

window.addEventListener("hashchange", call);
window.addEventListener("load", call);