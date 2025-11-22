// High-Level module depends directly on the Low-Level class
class OrderProcessor {
    private db: MySQLDatabase;

    constructor() {
        // 🚨 VIOLATION: Direct instantiation (tight coupling)
        this.db = new MySQLDatabase();
    }

    process(order: any): void {
        // High-level business logic
        console.log("Processing order...");

        // Use the concrete low-level class
        this.db.save(order);
        console.log("Order processed and saved.");
    }
}