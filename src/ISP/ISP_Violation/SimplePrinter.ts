class SimplePrinter implements IMultiTasker {
    print(document: string): void {
        console.log(`Printing: ${document}`);
    }

    // 🚨 VIOLATION: Forced to implement unused methods
    scan(document: string): void {
        throw new Error("Unsupported Operation: This printer cannot scan.");
    }

    fax(document: string): void {
        throw new Error("Unsupported Operation: This printer cannot fax.");
    }

    staple(document: string): void {
        throw new Error("Unsupported Operation: This printer cannot staple.");
    }
}