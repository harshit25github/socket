"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogManager = exports.logs = void 0;
exports.logs = [];
class LogManager {
    constructor() {
        this.logs = [];
        this.logs = [];
    }
    addLog(id, log) {
        console.log(`adding logId ${id} to add the log - ${log}`);
        const logObj = this.logs.find((ins) => ins.id === id);
        logObj === null || logObj === void 0 ? void 0 : logObj.logs.push(log);
    }
    startLog(id) {
        const log = {
            id: id,
            subscribers: [`user${Math.random().toString()}`],
            logs: []
        };
        this.logs.push(log);
    }
}
exports.LogManager = LogManager;
