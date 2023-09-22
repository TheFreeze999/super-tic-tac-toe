import SubGrid from "./SubGrid.js";
import { Vector } from "./util.js";
class Game {
    subGrids = [];
    turn = "X";
    lastMovePositionWithinSubGrid = {
        X: null,
        O: null,
    };
    createSubgrids() {
        for (let i = 0; i < 9; i++) {
            const x = i % 3;
            const y = Math.floor(i / 3);
            this.subGrids[i] = new SubGrid(this, { x, y });
        }
    }
    constructor() {
        this.createSubgrids();
    }
    cellAt(subGridNum, cellNum) {
        return this.subGrids[subGridNum].cells[cellNum];
    }
    clearAllCells() {
        this.subGrids.forEach(subGrid => subGrid.clearCells());
    }
    getCellByAbsoluteCoords(coords) {
        return this.subGrids.map(subGrid => subGrid.cells).flat().find(c => Vector.match(coords, c.absolutePos));
    }
    getSubGridsInRow(rowNumber) {
        return this.subGrids.filter(subGrid => subGrid.pos.y === rowNumber);
    }
    getSubGridsInColumn(columnNumber) {
        return this.subGrids.filter(subGrid => subGrid.pos.x === columnNumber);
    }
    checkForWin() {
        const lines = [];
        for (let i = 0; i < 3; i++) {
            lines.push(this.getSubGridsInRow(i), this.getSubGridsInColumn(i));
        }
        lines.push([this.subGrids[0], this.subGrids[4], this.subGrids[8]], [this.subGrids[2], this.subGrids[4], this.subGrids[6]]);
        for (const line of lines) {
            const firstCellResult = line[0].result;
            if (line.every(cell => cell.result === firstCellResult)) {
                if (firstCellResult !== null && firstCellResult !== "tie")
                    return firstCellResult;
            }
        }
        return null;
    }
}
export default Game;
