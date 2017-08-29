declare module "p5" {
    export interface Color { }

    export class p5sketch {
        // Consts - Canvas
        width: number;
        height: number;

        // Consts - Shapes
        CORNER: string;
        CORNERS: string;
        CENTER: string;
        RADIUS: string;

        // Consts - Text
        //CENTER: string; // Exists on shapes, so no need to declare again
        LEFT: string;
        RIGHT: string;
        TOP: string;
        BOTTOM: string;
        BASELINE: string;

        // Consts - Mouse
        mouseX: number;
        mouseY: number;

        // Main functions
        setup(): void;
        draw(): void;

        // Canvas and canvas control
        createCanvas(width: number, height: number): void;
        background(greyscaleValue: number): void;
        background(hexValue: string): void;

        // Stroke and fill control
        stroke(v1: number, v2: number, v3: number, alpha?: number): void;
        stroke(greyscaleValue: number, alpha?: number): void;
        stroke(hexValue: string, alpha?: number): void;
        stroke(values?: number[]): void;
        stroke(p5color: Color, alpha?: number): void;
        noStroke(): void;

        fill(v1: number, v2: number, v3: number, alpha?: number): void;
        fill(greyscaleValue: number, alpha?: number): void;
        fill(hexValue: string, alpha?: number): void;
        fill(values: number[]): void;
        fill(color: Color, alpha?: number): void;
        noFill(): void;

        // Basic shapes - Ellipse
        ellipse(x: number, y: number, w: number, h?: number): void;
        ellipseMode(mode: string): void;

        // Basic shapes - Rectangle
        rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): void;
        rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): void;
        rectMode(mode: string): void;

        // Text control
        text(textValue: string, x: number, y: number): void;
        textSize(size: number): void;
        textAlign(horizAlign: string, vertAlign?: string): void;

        // Events - Mouse
        mouseClicked(): void;
        mousePressed(): void;

        // Utils - Maths
        abs(value: number): number;
    }

    export default class p5 {
        constructor(sketch: (p: any) => void);
    }
}