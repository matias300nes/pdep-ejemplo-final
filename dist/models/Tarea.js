"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
class Tarea {
    constructor(id, nombre, completada = false) {
        this.id = id;
        this.nombre = nombre;
        this.completada = completada;
    }
}
exports.Tarea = Tarea;
