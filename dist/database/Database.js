"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const Store_1 = require("../store/Store");
class Database {
    constructor() {
        this.tareas = new Store_1.Store("tareas");
        this.usuarios = new Store_1.Store("usuarios");
    }
}
exports.Database = Database;
