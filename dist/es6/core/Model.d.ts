import IModel from "../interfaces/IModel";
import IProxy from "../interfaces/IProxy";
declare class Model implements IModel {
    private _proxies;
    constructor();
    initializeModel(): void;
    registerProxy(proxy: IProxy): void;
    removeProxy(proxyName: string): undefined | IProxy;
    retrieveProxy<T extends IProxy>(proxyName: string): undefined | T;
    hasProxy(proxyName: string): boolean;
}
export default Model;
