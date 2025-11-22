// The "Fat" Interface
interface IMultiTasker {
    print(document: string): void;
    scan(document: string): void;
    fax(document: string): void;
    staple(document: string): void;
}