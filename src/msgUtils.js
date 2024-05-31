"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Displayer {
    constructor() {
        this.messages = [];
        this.callbacks = [];
    }
    add(message) {
        this.messages.push(message);
        this.notify();
    }
    getMessages() {
        return this.messages;
    }
    subscribe(callback) {
        this.callbacks.push(callback);
    }
    unsubscribe(callback) {
        this.callbacks = this.callbacks.filter((cb) => cb !== callback);
    }
    notify() {
        this.callbacks.forEach((callback) => callback(this.messages));
    }
}
const displayer = new Displayer();
exports.default = displayer;
