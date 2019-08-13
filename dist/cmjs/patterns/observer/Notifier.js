"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notifier {
    constructor(facade) {
        this.facade = facade;
    }
    sendNotification(name, body, type = "") {
        this.facade.sendNotification(name, body, type);
    }
}
exports.default = Notifier;
