import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: "./src/index.ts",
    output: {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, "build"),
        library: {
            type: "module",
        },
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
            },
        ],
    },
    experiments: {
        outputModule: true,
    },
    mode: "development",
};
