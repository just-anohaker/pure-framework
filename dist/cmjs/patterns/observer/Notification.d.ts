import INotification from "../../interfaces/INotification";
declare class Notification implements INotification {
    private name;
    private body?;
    private type?;
    constructor(name: string, body?: any, type?: string | undefined);
    getName(): string;
    setBody(body: any): void;
    getBody(): undefined | any;
    setType(type: string): void;
    getType(): undefined | string;
    toString(): string;
}
export default Notification;
