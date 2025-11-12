import { Store } from "../store/Store";
import { Tarea } from "../models/Tarea";
import { Usuario } from "../models/Usuario";

export class Database {
  public tareas: Store<Tarea>;
  public usuarios: Store<Usuario>;

  constructor() {
    this.tareas = new Store<Tarea>("tareas");
    this.usuarios = new Store<Usuario>("usuarios");
  }
}
