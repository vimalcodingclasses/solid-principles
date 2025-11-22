/*************OCP_Voilation*************/
// import { NotificationService } from "./OCP/OCP_Violation/NotificationService";

// const notifyObj = new NotificationService('sms');
// notifyObj.sendNotification();

// const notifyObj2 = new NotificationService('email');
// notifyObj2.sendNotification();

// const notifyObj3 = new NotificationService('null');
// notifyObj3.sendNotification();

/*************OCP_Adherence*************/

// import { SMSNotification } from "./OCP/OCP_Adherence/SMSNotification";
// import { EmailNotification } from "./OCP/OCP_Adherence/EmailNotification";
// import { Notification } from "./OCP/OCP_Adherence/Notification";
// import { PushNotification } from "./OCP/OCP_Adherence/PushNotification";

// const notifyObj = new Notification();
// notifyObj.sendNotification(new SMSNotification());
// notifyObj.sendNotification(new EmailNotification());
// notifyObj.sendNotification(new PushNotification());

/*************LSP_Voilation*************/

// import { Rectangle } from "./LSP/LSP_Violation/Reactangle";
// import { Square } from "./LSP/LSP_Violation/Square";
// import { Area } from "./LSP/LSP_Violation/Area";

// const areaObj = new Area();
// areaObj.calculateArea(new Rectangle(10, 5));
// areaObj.calculateArea(new Square(5));

/*************LSP_Adherence*************/
// import { React } from "./LSP/LSP_Adherence/React";
// import { Squa } from "./LSP/LSP_Adherence/Squa";
// import { CalculateArea } from "./LSP/LSP_Adherence/CalculateArea";

// const areaObj = new CalculateArea();
// const reactArea = areaObj.calculateTotalArea(new React(10, 5));
// console.log(`Area of rectangle: ${reactArea}`);
// const sqArea = areaObj.calculateTotalArea(new Squa(10));
// console.log(`Area of square is: ${sqArea}`);


/*************DIP_Adherence*************/
import { OrderProcessors } from "./DIP/DIP_Adherence/OrderProcessor";
import { MySqlDatabase } from "./DIP/DIP_Adherence/MySQLDatabase";
import { MongoDBDatabase } from "./DIP/DIP_Adherence/MongoDBDatabase";

const mysqlProcess = new OrderProcessors(new MySqlDatabase());
mysqlProcess.process({ id: 101, amount: 50.00 });

const mongodbProcess = new OrderProcessors(new MongoDBDatabase());
mongodbProcess.process({ id: 101, amount: 50.00 });



