// A basic printer only implements the printing interface.
class SimplePrinters implements IPrinter {
    print(document: string): void {
        console.log(`Printing: ${document}`);
    }
    // No obligation to implement scan(), fax(), or staple().
}
