const path = require("path");

import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

const release = false;
const fullinput = "./src/index.js";
const target = "dist/";

export default [
    {
        input: fullinput,

        output: {
            dir: target,

            esModule: true,
            format: "es",
            interop: "esModule",
            exports: "named",
        },

	    plugins: [
            {
                name: "external-libraries-plugin-resolver",
                async resolveId(source, _) {
                    if (source == fullinput) { return null; };

                    var extension = path.extname(source);
                    if (extension !== ".js") { return null; };

                    var match = source.replace(/^@(.*)\.js$/, "libs/$1.js");
                    if (match !== source) {
                        return {
                            id: path.resolve("./src", match),
                            external: true,
                        };
                    };
                },
            },

            postcss({
                extract: true,
                use: ["sass"]
            }),

            copy({
                targets: [
                    { src: ["src/*.html", "src/*.json", "src/*.ico"], dest: target },
                    { src: "src/assets/*", dest: target + "assets" },
                ]
            }),

            release && terser({
                ecma: 2020,
                module: true,
                format:{
                    comments: false,
                },
                compress: {
                    arguments: true,
                    drop_console: true,
                    ecma: 2020,
                    unsafe: true,
                },
            }),
	    ],
    }
];