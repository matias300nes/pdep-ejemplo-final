import { Database } from "./database/Database";
import { Tarea } from "./models/Tarea";

function main() {
  const db = new Database();


  db.tareas.insert(new Tarea(1, "Aprender JAVA"));
  db.tareas.count();  
  db.tareas.insert(new Tarea(2, "Hacer un commit"));

  console.log(db.tareas.getAll());

}

main();