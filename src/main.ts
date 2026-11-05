import { randomUUID } from "crypto";
import { Database } from "./database/Database";

function main() {
  const db = new Database();

  const id = randomUUID();
  db.tareas.insert({id, nombre: "Nueva Tarea", completada: false});

  console.log("Todas las tareas:", db.tareas.getAll());

  db.tareas.update(id, {completada: true});
  console.log("Tarea actualizada:", db.tareas.getById(id));

  db.tareas.delete(id);
  console.log("Tareas después de borrar:", db.tareas.getAll());
}

main();
