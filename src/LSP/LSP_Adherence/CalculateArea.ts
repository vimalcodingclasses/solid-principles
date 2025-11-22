import { IAreaCalculable } from "./IAreaCalculable";

export class CalculateArea {
    calculateTotalArea(shape: IAreaCalculable) {
        return shape.getArea();
    }
}