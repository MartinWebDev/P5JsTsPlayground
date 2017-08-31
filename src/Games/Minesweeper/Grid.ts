// Import things required from p5 framework
import { p5sketch } from 'p5';

// Children needed for this class
import { Cell } from './Cell';

// Import utilities
import { GameUtils } from '../../utils/GameUtils';

interface IValidMineLocation {
    xIndex: number;
    yIndex: number;
}

export class Grid {
    rows: number;
    cols: number;
    cellSize: number;
    mines: number;

    cells: Cell[][];
    validMineLocations: IValidMineLocation[];
    initialClick: boolean;

    constructor(rows: number, cols: number, cellSize: number, mines: number) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.mines = mines;
        this.cells = GameUtils.Make2DArray<Cell>(this.cols, this.rows);
        this.validMineLocations = new Array<IValidMineLocation>(this.cols * this.rows);
        this.initialClick = true;

        this.setupGrid();
    }

    setupGrid() {
        // Initialise all cells
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                let xPos = i * this.cellSize;
                let yPos = j * this.cellSize;
                this.cells[i][j] = new Cell(xPos, yPos, this.cellSize);

                // Add entry to possible mine locations
                this.validMineLocations[(i * 10) + j] = { xIndex: i, yIndex: j } as IValidMineLocation;
            }
        }
    }

    /**
     * Takes in mouse x and y so we can calculate which cell we cannot put a mine in.
     * @param x {number} mouseX
     * @param y {number} mouseY
     */
    plantMines(x: number, y: number) {
        console.info("Planting mines...");
        // After moving the plantMines function to be executed only after the first mouse click, be sure to omit the mouse cell from valid locations.
        for (var n = 0; n < this.mines; n++) {
            // Grab a random entry from the valid list and remove it. The [0] is needed at the end as the splice method always returns an array, but we only want the first element.
            let position: IValidMineLocation = this.validMineLocations.splice(Math.floor(Math.random() * this.validMineLocations.length), 1)[0];

            if (position.xIndex == x && position.yIndex == y) {
                n--; // Reduce the count by one so we still have 10 mines, but this position has been removed from posible locations
            }
            else {
                this.cells[position.xIndex][position.yIndex].plantMine();
            }
        }
        console.info("Mines planted");
    }

    countNeighbours() {
        for (var i = 0; i < this.cols; i++) { //For each col
            for (var j = 0; j < this.rows; j++) { // For each row (cell inside col)
                // For each cell sum up the total mine around this one
                let total: number = 0;

                for (var xOff = -1; xOff <= 1; xOff++) { // For each x index 1 around center
                    for (var yOff = -1; yOff <= 1; yOff++) { // For each y index 1 around center
                        // Get the offset values for this grid entry then check the mine
                        var iOff = i + xOff;
                        var jOff = j + yOff;

                        if (iOff > -1 && iOff < this.cols && jOff > -1 && jOff < this.rows) {
                            var neighbour = this.cells[iOff][jOff];

                            if (neighbour.mine != null) {
                                total++;
                            }
                        }
                    }
                }

                this.cells[i][j].updateNeighbours(total);
            }
        }
    }

    toggleFlag(mX: number, mY: number): void {
        // Determine if flag press was inside a valid cell, and if it was, set the flag mode
        // Calculate which cell was clicked based on mouse position an cell size
        let xIndex = Math.floor(mX / this.cellSize);
        let yIndex = Math.floor(mY / this.cellSize);

        // Only handle valid cells. If a mouse click is outside the grid it can give a false cell index, so avoid that here
        if (xIndex >= 0 && xIndex < this.cols && yIndex >= 0 && yIndex < this.rows) {
            console.log(`Toggle flag on Cell[${xIndex}][${yIndex}]`);

            this.cells[xIndex][yIndex].toggleFlag();
        }
    }

    click(x: number, y: number): void {
        // Calculate which cell was clicked based on mouse position an cell size
        let xIndex = Math.floor(x / this.cellSize);
        let yIndex = Math.floor(y / this.cellSize);

        // Only handle valid cells. If a mouse click is outside the grid it can give a false cell index, so avoid that here
        if (xIndex >= 0 && xIndex < this.cols && yIndex >= 0 && yIndex < this.rows) {
            // Initialise the planting of mines if not already placed
            if (this.initialClick) {
                this.plantMines(xIndex, yIndex);
                this.countNeighbours();
                this.initialClick = false;
            }

            console.log(`Click on Cell[${xIndex}][${yIndex}]`);

            this.floodFill(this.cells[xIndex][yIndex], xIndex, yIndex);
        }
    }

    floodFill(cell: Cell, xIndex: number, yIndex: number): void {
        if (cell.flag == null) {
            cell.reveal();

            // Begin recursion if cell has no neighbours
            if (cell.neighbourCount == 0) {
                for (var xOff = -1; xOff <= 1; xOff++) {
                    for (var yOff = -1; yOff <= 1; yOff++) {
                        var i = xIndex + xOff;
                        var j = yIndex + yOff;

                        // Flood fill correction, only show direct neighbours, not empty diagonals
                        if (i > -1 && i < this.cols && j > -1 && j < this.rows) {
                            var neighbour = this.cells[i][j];

                            if (Math.abs(xOff) != Math.abs(yOff) || (Math.abs(xOff) == Math.abs(yOff) && neighbour.neighbourCount > 0)) {
                                if (neighbour.mine == null && !neighbour.revealed) {
                                    this.floodFill(neighbour, i, j);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    render(p: p5sketch): void {
        // Draw grid
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                this.cells[i][j].render(p);
            }
        }
    }
}