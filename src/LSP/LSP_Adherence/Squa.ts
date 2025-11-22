import { IAreaCalculable } from "./IAreaCalculable";

export class Squa implements IAreaCalculable {
    constructor(public side: number) { }

    getArea(): number {
        return this.side * this.side;
    }
}