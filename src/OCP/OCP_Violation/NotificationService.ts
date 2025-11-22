export class NotificationService {
    public constructor(private type: string) {
    }

    public sendNotification() {
        // In this design, NotificationService is tightly coupled to the concrete notification types.
        if (this.type === 'sms') {
            console.log(`Notification sent via SMS`);
        }
        else if (this.type === 'email') {
            console.log(`Notification sent via email`);
        } else {
            console.log(`Notification type not found`);
        }
        //What will happen if in future we need push notification
    }
}