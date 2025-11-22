class MySQLDatabase {
    // Low-level detail implementation
    save(data: any): void {
        console.log(`[MySQL]: Saving data: ${JSON.stringify(data)}`);
        // ... specific code to connect to MySQL and execute INSERT ...
    }
}