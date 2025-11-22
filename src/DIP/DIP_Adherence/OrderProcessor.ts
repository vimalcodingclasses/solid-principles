import { IDataStore } from "./IDataStore";

// 3. High-Level module depends on Abstraction
export class OrderProcessors {
    private dataStore: IDataStore; // Depends on the Interface

    // Dependency Injection via constructor
    constructor(dataStore: IDataStore) {
        this.dataStore = dataStore;
    }

    process(order: any): void {
        console.log("Processing order...");

        // Uses the Abstraction (doesn't know or care if it's MySQL or Mongo)
        this.dataStore.save(order);
        console.log("Order processed and saved.");
    }
}