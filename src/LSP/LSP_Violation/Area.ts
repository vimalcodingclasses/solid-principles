import { Rectangle } from "./Reactangle";

export class Area {
    calculateArea(react: Rectangle) {
        react.setWidth(10);
        react.setHeight(5);
        const area = react.getArea();
        console.log(`Area is: ${area}`);
    }
}