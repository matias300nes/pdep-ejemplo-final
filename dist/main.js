"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("./database/Database");
const Tarea_1 = require("./models/Tarea");
function main() {
    const db = new Database_1.Database();
    db.tareas.insert(new Tarea_1.Tarea(1, "Aprender TypeScript"));
    db.tareas.insert(new Tarea_1.Tarea(2, "Hacer un commit"));
    console.log(db.tareas.getAll());
}
main();
