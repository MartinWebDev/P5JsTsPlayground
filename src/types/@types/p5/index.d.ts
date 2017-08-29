declare module "p5" {
    export const CENTER: any;

    export class p5sketch {
        // Main functions
        setup(): void;
        draw(): void;

        // Canvas and canvas control
        createCanvas(width: number, height: number): void;
        background(greyscaleValue: number): void;
        background(hexValue: string): void;

        // Text control
        text(textValue: string, x: number, y: number): void;

        // Stroke and fill control
        stroke(greyscaleValue: number): void;
        stroke(hexValue: string): void;
        noStroke(): void;

        fill(greyscaleValue: number): void;
        fill(hexValue: string): void;
        noFill(): void;
    }

    export default class p5 {
        constructor(sketch: (p: any) => void);
    }
}