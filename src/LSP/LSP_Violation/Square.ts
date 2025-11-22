import { Rectangle } from "./Reactangle";

// Subclass violates the behavior of the parent class
export class Square extends Rectangle {
    constructor(side: number) {
        super(side, side);
    }

    // 🚨 VIOLATION: Square changes the expected behavior
    setWidth(width: number): void {
        this._width = width;
        this._height = width; // Forced change to maintain square invariant
    }

    // 🚨 VIOLATION: Square changes the expected behavior
    setHeight(height: number): void {
        this._height = height;
        this._width = height; // Forced change to maintain square invariant
    }
}