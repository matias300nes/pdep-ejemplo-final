"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const fileSystem_1 = require("../utils/fileSystem");
const fileSystem_2 = require("../utils/fileSystem");
class Store {
    constructor(name) {
        this.items = [];
        this.name = name;
        this.load();
    }
    load() {
        this.items = (0, fileSystem_2.readFromFile)(this.name);
    }
    save() {
        (0, fileSystem_1.writeToFile)(this.name, this.items);
    }
    getAll() {
        return this.items;
    }
    getById(id) {
        return this.items.find((item) => item.id === id) || null;
    }
    insert(item) {
        this.items.push(item);
        this.save();
    }
    update(id, updatedItem) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
            this.save();
            return true;
        }
        return false;
    }
    delete(id) {
        const initialLength = this.items.length;
        this.items = this.items.filter((item) => item.id !== id);
        if (this.items.length < initialLength) {
            this.save();
            return true;
        }
        return false;
    }
    count() {
        return this.items.length;
    }
}
exports.Store = Store;
