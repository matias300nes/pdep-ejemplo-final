import { writeToFile } from "../utils/fileSystem";
import { readFromFile } from "../utils/fileSystem";

export class Store<T> {
  private name: string;
  private items: T[] = [];

  constructor(name: string) {
    this.name = name;
    this.load();
  }

  private load(): void {
    this.items = readFromFile<T>("data/" + this.name);
  }

  private save(): void {
    writeToFile("data/" + this.name, this.items);
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: string): T | null {
    return this.items.find((item) => (item as any).id === id) || null;
  }

  insert(item: T): void {
    this.items.push(item);
    this.save();
  }

  update(id: string, updatedItem: Partial<T>): boolean {
    const index = this.items.findIndex((item) => (item as any).id === id);

    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      this.save();
      return true;
    }

    return false;
  }

  delete(id: string): boolean {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => (item as any).id !== id);

    if (this.items.length < initialLength) {
      this.save();
      return true;
    }

    return false;
  }

  count(): number {
    return this.items.length;
  }
}
