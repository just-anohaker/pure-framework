class Observer {
    constructor(method, context) {
        this.method = method;
        this.context = context;
    }
    get Method() {
        return this.method;
    }
    get Context() {
        return this.context;
    }
    setMethod(method) {
        this.method = method;
    }
    setContext(context) {
        this.context = context;
    }
    notify(notification) {
        this.Method.call(this.Context, notification);
    }
    compareContext(context) {
        return context === this.context;
    }
}
export default Observer;
