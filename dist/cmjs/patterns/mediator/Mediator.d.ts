import Notifier from "../observer/Notifier";
import IMediator from "../../interfaces/IMediator";
import INotifier from "../../interfaces/INotifier";
import IFacade from "../../interfaces/IFacade";
declare class Mediator extends Notifier implements IMediator, INotifier {
    private name;
    constructor(name: string, facade: IFacade);
    readonly Name: string;
    onRegister(): void;
    onRemove(): void;
}
export default Mediator;
