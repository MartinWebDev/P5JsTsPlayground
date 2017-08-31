import { p5sketch } from 'p5';

export interface IGame {
    p: p5sketch;

    getCanvasWidth: () => number;
    getCanvasHeight: () => number;
    getCanvasBackgroundColor: () => number; // TODO: Change to return any possible valid p5 type here

    setup: () => void;
    render: () => void;
}