import { INotification } from "./INotification";

export class SMSNotification implements INotification {
    constructor() {
    }

    public send(): any {
        console.log(`Notification sent via SMS`);
    }
}