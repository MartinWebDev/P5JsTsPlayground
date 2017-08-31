import p5, {
    p5sketch
} from 'p5';

import { IGame } from './Games/Interfaces/IGame';
import { Minesweeper } from './Games/Minesweeper';

(() => {
    console.log("Init bootstrapper.");

    let p5proj = new p5((p: p5sketch) => {
        console.log("Begin p5 project, sketch initialised.");

        console.log("Assignin current game class.");
        let game: IGame = new Minesweeper(p);
        console.log("Game assigned.");

        p.setup = function () {
            console.log("Creating canvas...");
            p.createCanvas(game.getCanvasWidth(), game.getCanvasWidth());
            p.background(game.getCanvasBackgroundColor());
            console.log("Canvas created.");

            game.setup();
        }

        p.draw = function () {
            game.render();
        }
    });
})();
