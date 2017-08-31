import p5, {
    p5sketch,
    Vector
} from 'p5';

import { IGame } from './Games/Interfaces/IGame';
import { Minesweeper } from './Games/Minesweeper';

(() => {
    console.log("Init bootstrapper.");

    let p5proj = new p5((p: p5sketch) => {
        console.log("Begin p5 project, sketch initialised.");

        console.log("Assigning current game class.");
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

            let test = p.createVector(10, 10);
            console.log([test.x, test.y, test.z]);
            //let v = new p5.Vector(20, 20);
        }
    });
})();
