import Notifier from "../observer/Notifier";
class Proxy extends Notifier {
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
export default Proxy;
