import { p5sketch } from 'p5';

export interface IDrawable {
    render: (p: p5sketch) => void;
}