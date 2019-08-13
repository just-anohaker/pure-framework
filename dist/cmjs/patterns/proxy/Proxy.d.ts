import Notifier from "../observer/Notifier";
import IProxy from "../../interfaces/IProxy";
import INotifier from "../../interfaces/INotifier";
import IFacade from "../../interfaces/IFacade";
declare class Proxy extends Notifier implements IProxy, INotifier {
    private name;
    constructor(name: string, facade: IFacade);
    readonly Name: string;
    onRegister(): void;
    onRemove(): void;
}
export default Proxy;
