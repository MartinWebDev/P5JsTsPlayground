// Import stuff required for game class
import { p5sketch } from 'p5';
import { IGame } from './Interfaces/IGame';

// Import children for this game
import { Grid } from './Minesweeper/Grid';
//import { Cell } from './Minesweeper/Cell';
//import { Mine } from './Minesweeper/Mine';

enum GameState {
    NEW_GAME = 0,
    GAME_STARTED = 1,
    GAME_WON = 2,
    GAME_OVER = 3
};

export class Minesweeper implements IGame {
    // p5js
    p: p5sketch;

    // Game mechanics
    rows: number;
    cols: number;
    cellSize: number;
    state: GameState;
    grid: Grid;
    mines: number;

    constructor(p: p5sketch) {
        console.info("Creating Minesweeper game. Initilising properties...");
        this.p = p;
        this.rows = 10;
        this.cols = 10;
        this.cellSize = 40;
        this.mines = 10;
        this.state = GameState.NEW_GAME;
        console.info("Initial properties set.")
    }

    // Display related properties and values
    getCanvasWidth(): number {
        return (this.cols * this.cellSize) + 1;
    }

    getCanvasHeight(): number {
        return (this.rows * this.cellSize) + 1;
    }

    getCanvasBackgroundColor(): number {
        return 220;
    }

    //////////////////////////////////
    // p5js framework functionality //
    //////////////////////////////////
    setup(): void {
        console.info("Beginning main game setup...");

        this.grid = new Grid(this.rows, this.cols, this.cellSize, this.mines);
        this.p.mousePressed = this.handleMouseClick.bind(this);
        this.p.keyPressed = this.handleKeyPress.bind(this);

        console.info("Main game setup complete.");
    }

    render(): void {
        this.grid.render(this.p);
    }

    ////////////////////////////
    // Event handling - Mouse //
    ////////////////////////////
    handleMouseClick(): void {
        this.grid.click(this.p.mouseX, this.p.mouseY);
    }

    handleKeyPress(): void {
        if (this.p.keyCode == 70) {
            this.grid.toggleFlag(this.p.mouseX, this.p.mouseY);
        }
    }
}