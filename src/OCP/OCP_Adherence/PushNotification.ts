import { INotification } from "./INotification";

export class PushNotification implements INotification {
    constructor() {
    }

    public send(): any {
        console.log(`Notification sent via Push`);
    }
}