
// A high-end machine implements all relevant interfaces.
class MultifunctionPrinter implements IPrinter, IScanner, IFaxMachine {
    print(document: string): void {
        console.log(`MFP Printing: ${document}`);
    }
    scan(document: string): void {
        console.log(`MFP Scanning: ${document}`);
    }
    fax(document: string): void {
        console.log(`MFP Faxing: ${document}`);
    }
}