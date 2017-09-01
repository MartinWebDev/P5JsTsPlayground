import { p5sketch, Image } from 'p5';

import { IDrawable } from '../Interfaces/IDrawable';
import { ICard, ICardData } from './ICard';

import { Spade } from './CardTypes/Spade';
import { Club } from './CardTypes/Club';
import { Diamond } from './CardTypes/Diamond';
import { Heart } from './CardTypes/Heart';

export class Card implements ICard, IDrawable {
    p: p5sketch;
    x: number;
    y: number;
    size: number;
    drawMode: "CENTER" | "CORNER";

    cardData: ICardData;

    bgTexture: Image;

    constructor(p: p5sketch, x: number, y: number, size: number, cardData: ICardData) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.size = size;
        this.cardData = cardData;
        this.drawMode = "CORNER";

        //this.bgTexture = p.loadImage("");
        //this.bgTexture = this.p.loadImage("/Games/TexasHoldem/Assets/Images/CardFrontFaceTexture.jpg");
        //this.p.loadImage("/Games/TexasHoldem/Assets/Images/CardFrontFaceTexture.jpg", (img: Image) => { this.bgTexture = img; }, (e: Event) => { console.log(e); });
    }

    render(p: p5sketch) {
        // TEMP - Will need lots of math later, this is just to test drawing
        p.noStroke();
        p.fill(240);

        let cornerRadius: number = this.size * 0.08;
        p.rect(this.x, this.y, this.size, (this.size / 5) * 7, cornerRadius); // TODO: Work out why calculated corner radius isn't working
    }
}
