import { p5sketch, Image } from 'p5';

export interface IGame {
    p: p5sketch;

    getCanvasWidth: () => number;
    getCanvasHeight: () => number;
    getCanvasBackgroundColor: () => number | string | number[][][] | number[][][][] | Image; // TODO: This is a terrible way to do this. Find a better way!

    setup: () => void;
    render: () => void;
}