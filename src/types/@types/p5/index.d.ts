declare module "p5" {
    //export interface color { }

    export class p5sketch {
        // TODO: Most of these seem to be chainable, so need to figure out how to make them chainable while still returning the correct value. Void is not correct for most
        // TODO: Add all keys eventually

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

        // Consts - KeyCodes
        keyCode: number;
        BACKSPACE: number;
        DELETE: number;
        ENTER: number;
        RETURN: number;
        TAB: number;
        ESCAPE: number;
        SHIFT: number;
        CONTROL: number;
        OPTION: number;
        ALT: number;
        UP_ARROW: number;
        DOWN_ARROW: number;
        LEFT_ARROW: number;
        RIGHT_ARROW: number;

        // Main functions
        setup(): void;
        draw(): void;

        // Canvas and canvas control
        createCanvas(width: number, height: number): void;
        background(greyscaleValue: number, alpha?: number): void;
        background(hexValue: string, alpha?: number): void;
        background(r: number, g: number, b: number, alpha?: number): void;
        //TODO: Allow usage of image object after added TS interface for image

        // Stroke and fill control
        stroke(v1: number, v2: number, v3: number, alpha?: number): void;
        stroke(greyscaleValue: number, alpha?: number): void;
        stroke(hexValue: string, alpha?: number): void;
        stroke(values?: number[]): void;
        //stroke(p5color: color, alpha?: number): void;
        noStroke(): void;

        fill(v1: number, v2: number, v3: number, alpha?: number): void;
        fill(greyscaleValue: number, alpha?: number): void;
        fill(hexValue: string, alpha?: number): void;
        fill(values: number[]): void;
        //fill(color: color, alpha?: number): void;
        noFill(): void;

        // Basic shapes - Ellipse
        ellipse(x: number, y: number, w: number, h?: number): void;
        ellipseMode(mode: string): void;

        // Basic shapes - Rectangle
        rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): void;
        rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): void;
        rectMode(mode: string): void;

        // Basic shapes - Line
        line(x1: number, y1: number, x2: number, y2: number): void;

        // Basic shapes - Triangle
        triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

        // Text control
        text(textValue: string, x: number, y: number): void;
        textSize(size: number): void;
        textAlign(horizAlign: string, vertAlign?: string): void;

        // Events - Mouse
        mouseClicked(): void;
        mousePressed(): void;

        // Events - Keyboard
        keyPressed(): void;

        // Utils - Maths
        abs(value: number): number;
        ceil(value: number): number;
        floor(value: number): number;
        max(values: number[]): number;
        max(...values: number[]): number;
        min(values: number[]): number;
        min(...values: number[]): number;
        sq(value: number): number;
        sqrt(value: number): number;
        random(min?: number, max?: number): number;
        random(choices: number[]): number;
    }

    export default class p5 {
        constructor(sketch: (p: any) => void);
    }
}