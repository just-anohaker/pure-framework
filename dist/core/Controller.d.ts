import IController from "../interfaces/IController";
import IMediator from "../interfaces/IMediator";
declare class Controller implements IController {
    private _mediators;
    constructor();
    initializeController(): void;
    registerMediator(mediator: IMediator): void;
    removeMediator(mediatorName: string): undefined | IMediator;
    retrieveMediator<T extends IMediator>(mediatorName: string): undefined | T;
    hasMediator(mediatorName: string): boolean;
}
export default Controller;
