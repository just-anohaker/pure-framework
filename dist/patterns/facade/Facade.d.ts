import IFacade from "../../interfaces/IFacade";
import IModel from "../../interfaces/IModel";
import IController from "../../interfaces/IController";
import IMediator from "../../interfaces/IMediator";
import IProxy from "../../interfaces/IProxy";
import IObserver from "../../interfaces/IObserver";
import INotification from "../../interfaces/INotification";
declare class Facade implements IFacade {
    protected models?: IModel;
    protected controllers?: IController;
    protected observers: Map<string, IObserver[]>;
    constructor();
    private initializeFacade;
    private initializeModel;
    private initializeMediator;
    registerProxy(proxy: IProxy): void;
    removeProxy(proxyName: string): undefined | IProxy;
    retrieveProxy<T extends IProxy>(proxyName: string): undefined | T;
    hasProxy(proxyName: string): boolean;
    registerMediator(mediator: IMediator): void;
    removeMediator(mediatorName: string): undefined | IMediator;
    retrieveMediator<T extends IMediator>(mediatorName: string): undefined | T;
    hasMediator(mediatorName: string): boolean;
    registerObserver(notificationName: string, observer: IObserver): void;
    removeObserver(notificationName: string, notifyContext: any): void;
    notifyObserver(notification: INotification): void;
    sendNotification(name: string, body?: any, type?: string): void;
}
export default Facade;
