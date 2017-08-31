import { p5sketch } from 'p5';

import { IDrawable } from '../Interfaces/IDrawable';

export class Mine implements IDrawable {
    cellCenterX: number;
    cellCenterY: number;
    size: number;

    constructor(ccX: number, ccY: number, size: number) {
        this.cellCenterX = ccX;
        this.cellCenterY = ccY;
        this.size = size;
    }

    render(p: p5sketch): void {
        p.fill("#FF2244");
        p.noStroke();
        p.ellipse(this.cellCenterX, this.cellCenterY, this.size / 2);
    }
}