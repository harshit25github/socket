"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startlogger = startlogger;
const store_1 = require("./store");
function startlogger() {
    setInterval(() => console.log(store_1.logs), 5000);
}
