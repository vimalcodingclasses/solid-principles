export class Rectangle {
    protected _width: number;
    protected _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    setWidth(width: number): void {
        this._width = width;
    }

    setHeight(height: number): void {
        this._height = height;
    }

    getArea(): number {
        return this._width * this._height;
    }
}
