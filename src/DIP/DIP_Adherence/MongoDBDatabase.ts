import { IDataStore } from "./IDataStore";

export class MongoDBDatabase implements IDataStore {
    save(data: any): void {
        console.log(`[MongoDB]: Persisting document: ${JSON.stringify(data)}`);
    }
}