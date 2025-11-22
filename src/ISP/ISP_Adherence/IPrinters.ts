interface IPrinter {
    print(document: string): void;
}

interface IScanner {
    scan(document: string): void;
}

interface IFaxMachine {
    fax(document: string): void;
}

interface IStapler {
    staple(document: string): void;
}