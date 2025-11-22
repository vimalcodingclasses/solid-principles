import { IDataStore } from "./IDataStore";

export class MySqlDatabase implements IDataStore {
    save(data: any): void {
        console.log(`[MySQL]: Saving data: ${JSON.stringify(data)}`);
    }
}