"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor() {
        this._proxies = new Map();
        this.initializeModel();
    }
    initializeModel() {
    }
    registerProxy(proxy) {
        if (this.hasProxy(proxy.Name)) {
            return;
        }
        this._proxies.set(proxy.Name, proxy);
        proxy.onRegister();
    }
    removeProxy(proxyName) {
        if (!this.hasProxy(proxyName)) {
            return undefined;
        }
        const proxy = this._proxies.get(proxyName);
        this._proxies.delete(proxyName);
        proxy.onRemove();
        return proxy;
    }
    retrieveProxy(proxyName) {
        if (!this.hasProxy(proxyName)) {
            return undefined;
        }
        const proxy = this._proxies.get(proxyName);
        return proxy;
    }
    hasProxy(proxyName) {
        return this._proxies.has(proxyName);
    }
}
exports.default = Model;
