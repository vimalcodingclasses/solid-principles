import { INotification } from "./INotification";

export class Notification {
    public sendNotification(notificationEngine: INotification) {
        notificationEngine.send();
    }
}
