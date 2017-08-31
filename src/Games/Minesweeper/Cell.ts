import { p5sketch } from 'p5';
import { IDrawable } from '../Interfaces/IDrawable';

import { Mine } from './Mine';
import { Flag } from './Flag';

export class Cell implements IDrawable {
    x: number;
    y: number;
    size: number;

    cellCenterX: number;
    cellCenterY: number;

    revealed: boolean;
    neighbourCount: number;

    mine: Mine;
    flag: Flag;

    constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.cellCenterX = this.x + (this.size / 2);
        this.cellCenterY = this.y + (this.size / 2);

        this.revealed = false;
        this.mine = null;
        this.flag = null;
        this.neighbourCount = 0;
    }

    updateNeighbours(count: number): void {
        this.neighbourCount = count;
    }

    plantMine(): void {
        this.mine = new Mine(this.cellCenterX, this.cellCenterY, this.size);
    }

    toggleFlag(): void {
        if (this.flag == null)
            this.flag = new Flag(this.x, this.y, this.size);
        else
            this.flag = null;
    }

    reveal(): void {
        this.revealed = true;
    }

    render(p: p5sketch): void {
        // Setup cell rendering options
        if (this.revealed)
            p.fill(200);
        else
            p.fill(220);

        p.stroke(50);

        // Draw cell
        p.rect(this.x, this.y, this.size, this.size);

        // Draw extra stuff
        if (this.revealed) {
            if (this.mine != null) {
                // Draw Mine
                this.mine.render(p);
            }
            else if (this.neighbourCount > 0) {
                // Draw Neighbour count
                p.noStroke();
                p.fill(50);
                p.textSize(this.size - 10);
                p.textAlign(p.CENTER, p.CENTER);
                p.text(this.neighbourCount.toString(), this.cellCenterX, this.cellCenterY);
            }
        }
        else {
            if (this.flag != null) {
                this.flag.render(p);
            }
        }
    }
}