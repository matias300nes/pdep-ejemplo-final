import { randomUUID } from "crypto";
import { Database } from "./database/Database";

function main() {
  const db = new Database();

  db.tareas.insert({id: randomUUID(), nombre: "Nueva Tarea", completada: false});
}

main();