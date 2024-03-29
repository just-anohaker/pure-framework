"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notifier_1 = __importDefault(require("../observer/Notifier"));
class Mediator extends Notifier_1.default {
    constructor(name, facade) {
        super(facade);
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    onRegister() {
    }
    onRemove() {
    }
}
exports.default = Mediator;
