import { IAreaCalculable } from "./IAreaCalculable";

export class React implements IAreaCalculable {
    constructor(public width: number, public height: number) { }

    getArea(): number {
        return this.width * this.height;
    }
}