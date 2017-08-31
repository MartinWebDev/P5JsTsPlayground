import { p5sketch } from 'p5';

import { IDrawable } from '../Interfaces/IDrawable';

export class Flag implements IDrawable {
    cellX: number;
    cellY: number;
    size: number;

    padding: number;

    constructor(cX: number, cY: number, size: number) {
        this.cellX = cX;
        this.cellY = cY;
        this.size = size;

        this.padding = this.size * 0.2;
    }

    render(p: p5sketch): void {
        // Draw 2 sections of flag. The pole, and the flag itself
        let s = this.size;
        let x = this.cellX;
        let y = this.cellY;

        // Calculate pole position
        let poleStartX: number = x + (s * 0.65);
        let poleStartY: number = y + (s * 0.20);
        let poleEndX: number = x + (s * 0.75);
        let poleEndY: number = y + (s * 0.80);

        // Calculate triangle position
        let triangleStartX: number = poleStartX;
        let triangleStartY: number = poleStartY;
        let triangleEndX: number = poleStartX;
        let triangleEndY: number = y + (s * 0.60);
        let triangleMidX: number = x + (s * 0.30);
        let triangleMidY: number = (triangleStartY + triangleEndY) / 2;

        p.fill("#666");
        p.noStroke();
        p.rect(poleStartX, poleStartY, (poleEndX - poleStartX), (poleEndY - poleStartY));

        p.fill("#DD2266");
        p.noStroke();
        p.triangle(
            triangleStartX, triangleStartY,
            triangleMidX, triangleMidY,
            triangleEndX, triangleEndY
        );
    }
}