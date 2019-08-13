class Notifier {
    constructor(facade) {
        this.facade = facade;
    }
    sendNotification(name, body, type = "") {
        this.facade.sendNotification(name, body, type);
    }
}
export default Notifier;
