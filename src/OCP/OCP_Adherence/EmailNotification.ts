import { INotification } from "./INotification";

export class EmailNotification implements INotification {
    constructor() {
    }

    public send(): any {
        console.log(`Notification sent via Email`);
    }
}