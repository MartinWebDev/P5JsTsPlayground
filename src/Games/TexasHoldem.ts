import {
    p5sketch,
    Image
} from 'p5';

import { IGame } from './Interfaces/IGame';

export class TexasHoldem implements IGame {
    p: p5sketch;
    bg: Image;

    constructor(p: p5sketch) {
        this.p = p;

        this.p.loadImage("/Games/TexasHoldem/Assets/Images/cloth.jpg", (img: Image) => { this.bg = img; }, (e: Event) => { console.log(e); });
    }

    getCanvasBackgroundColor(): Image { return this.bg; }
    getCanvasHeight() { return 500; }
    getCanvasWidth() { return 700; }

    setup() { }

    render() { }
}