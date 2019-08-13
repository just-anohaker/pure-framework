import IObserver from "../../interfaces/IObserver";
import INotification from "../../interfaces/INotification";
declare class Observer implements IObserver {
    protected method: Function;
    protected context: any;
    constructor(method: Function, context: any);
    private readonly Method;
    private readonly Context;
    setMethod(method: Function): void;
    setContext(context: any): void;
    notify(notification: INotification): void;
    compareContext(context: any): boolean;
}
export default Observer;
