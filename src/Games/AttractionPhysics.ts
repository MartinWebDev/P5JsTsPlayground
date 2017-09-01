import { p5sketch, Vector } from 'p5';
import { IGame } from './Interfaces/IGame';

export class AttractionPhysics implements IGame {
    p: p5sketch;

    constructor(p: p5sketch) {
        this.p = p;
    }

    // Display related properties and values
    getCanvasWidth(): number {
        return 400;
    }

    getCanvasHeight(): number {
        return 400;
    }

    getCanvasBackgroundColor(): number {
        return 10;
    }

    setup() { }

    render() { }
}