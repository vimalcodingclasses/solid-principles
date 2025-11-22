// 1. Abstraction (The contract)
export interface IDataStore {
    save(data: any): void;
}