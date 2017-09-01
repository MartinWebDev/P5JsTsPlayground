import { p5sketch } from 'p5';

import { IDrawable } from '../../Interfaces/IDrawable';

export class Diamond implements IDrawable {
    x: number;
    y: number;
    size: number;
    drawMode: "CENTER" | "CORNER";

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.drawMode = "CORNER";
    }

    render(p: p5sketch) {

    }
}