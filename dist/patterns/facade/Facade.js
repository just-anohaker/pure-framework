"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../../core/Model"));
const Controller_1 = __importDefault(require("../../core/Controller"));
const Notification_1 = __importDefault(require("../observer/Notification"));
class Facade {
    constructor() {
        this.observers = new Map();
        this.initializeFacade();
    }
    initializeFacade() {
        this.initializeModel();
        this.initializeMediator();
    }
    initializeModel() {
        if (this.models === undefined) {
            this.models = new Model_1.default();
        }
    }
    initializeMediator() {
        if (this.controllers === undefined) {
            this.controllers = new Controller_1.default();
        }
    }
    /// proxy 
    registerProxy(proxy) {
        this.models.registerProxy(proxy);
    }
    removeProxy(proxyName) {
        return this.models.removeProxy(proxyName);
    }
    retrieveProxy(proxyName) {
        return this.models.retrieveProxy(proxyName);
    }
    hasProxy(proxyName) {
        return this.models.hasProxy(proxyName);
    }
    /// mediator
    registerMediator(mediator) {
        this.controllers.registerMediator(mediator);
    }
    removeMediator(mediatorName) {
        return this.controllers.removeMediator(mediatorName);
    }
    retrieveMediator(mediatorName) {
        return this.controllers.retrieveMediator(mediatorName);
    }
    hasMediator(mediatorName) {
        return this.controllers.hasMediator(mediatorName);
    }
    /// observer
    registerObserver(notificationName, observer) {
        const collections = this.observers.get(notificationName);
        if (collections == null) {
            this.observers.set(notificationName, [observer]);
        }
        else {
            collections.push(observer);
        }
    }
    removeObserver(notificationName, notifyContext) {
        const collections = this.observers.get(notificationName);
        if (collections == null)
            return;
        let idx = collections.length;
        while (idx--) {
            const inst = collections[idx];
            if (inst.compareContext(notifyContext)) {
                collections.splice(idx, 1);
                break;
            }
        }
        if (collections.length == 0) {
            this.observers.delete(notificationName);
        }
    }
    notifyObserver(notification) {
        const name = notification.getName();
        const collections = this.observers.get(name);
        if (collections) {
            const observers = collections.slice();
            observers.forEach(val => {
                val.notify(notification);
            });
        }
    }
    sendNotification(name, body, type) {
        this.notifyObserver(new Notification_1.default(name, body, type));
    }
}
exports.default = Facade;
