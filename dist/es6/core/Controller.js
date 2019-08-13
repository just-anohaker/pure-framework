class Controller {
    constructor() {
        this._mediators = new Map();
        this.initializeController();
    }
    initializeController() {
    }
    registerMediator(mediator) {
        if (this.hasMediator(mediator.Name)) {
            return;
        }
        this._mediators.set(mediator.Name, mediator);
        mediator.onRegister();
    }
    removeMediator(mediatorName) {
        if (!this.hasMediator(mediatorName)) {
            return undefined;
        }
        const mediator = this._mediators.get(mediatorName);
        this._mediators.delete(mediatorName);
        mediator.onRemove();
        return mediator;
    }
    retrieveMediator(mediatorName) {
        if (!this.hasMediator(mediatorName)) {
            return undefined;
        }
        const mediator = this._mediators.get(mediatorName);
        return mediator;
    }
    hasMediator(mediatorName) {
        return this._mediators.has(mediatorName);
    }
}
export default Controller;
