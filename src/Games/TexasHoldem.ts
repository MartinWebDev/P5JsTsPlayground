// Import p5
import {
    p5sketch,
    Image
} from 'p5';

// Import interfaces and classes
import { IGame } from './Interfaces/IGame';

import { Card } from './TexasHoldem/Card';

// Import game data
import { CardList } from './TexasHoldem/Assets/CardList';

export class TexasHoldem implements IGame {
    p: p5sketch;
    bg: Image;

    // TEMP TEST DATA
    card: Card;

    constructor(p: p5sketch) {
        this.p = p;

        this.p.loadImage("/Games/TexasHoldem/Assets/Images/cloth.jpg", (img: Image) => { this.bg = img; }, (e: Event) => { console.log(e); });
    }

    getCanvasBackgroundColor(): Image { return this.bg; }
    getCanvasHeight() { return 300; }
    getCanvasWidth() { return 500; }

    setup() {
        // TEMP TEST DATA
        let cardData = CardList[Math.floor(Math.random() * CardList.length)];
        this.card = new Card(this.p, 20, 20, 100, cardData);

        console.log(this.card);
    }

    render() {
        this.card.render(this.p);
    }
}