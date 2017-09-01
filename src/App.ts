import p5, {
    p5sketch,
    Vector,
    Image
} from 'p5';

import { IGame } from './Games/Interfaces/IGame';
import { Minesweeper } from './Games/Minesweeper';
import { AttractionPhysics } from './Games/AttractionPhysics';
import { TexasHoldem } from './Games/TexasHoldem';

(() => {
    console.log("Init bootstrapper.");

    let p5proj = new p5((p: p5sketch) => {
        console.log("Begin p5 project, sketch initialised.");

        console.log("Assigning current game class.");
        //let game: IGame = new Minesweeper(p);
        //let game: IGame = new AttractionPhysics(p);
        let game: IGame = new TexasHoldem(p);
        console.log("Game assigned.");

        p.setup = function () {
            console.log("Creating canvas...");
            p.createCanvas(game.getCanvasWidth(), game.getCanvasHeight());
            p.background(game.getCanvasBackgroundColor()); // TODO: Fix the return types on interfaces so no longer have to specify "as" here.
            console.log("Canvas created.");

            game.setup();
        }

        p.draw = function () {
            game.render();
        }
    });
})();
