import Cell from "./Cell.js";
class SubGrid {
    game;
    pos;
    cells = [];
    result = null;
    createCells() {
        for (let i = 0; i < 9; i++) {
            const x = i % 3;
            const y = Math.floor(i / 3);
            this.cells[i] = new Cell(this, { x, y });
        }
    }
    constructor(game, pos) {
        this.game = game;
        this.pos = pos;
        this.createCells();
    }
    clearCells() {
        this.cells.forEach(cell => cell.result = null);
    }
    getCellsInRow(rowNumber) {
        return this.cells.filter(cell => cell.posWithinSubgrid.y === rowNumber);
    }
    getCellsInColumn(columnNumber) {
        return this.cells.filter(cell => cell.posWithinSubgrid.x === columnNumber);
    }
    checkForWin() {
        const lines = [];
        for (let i = 0; i < 3; i++) {
            lines.push(this.getCellsInRow(i), this.getCellsInColumn(i));
        }
        lines.push([this.cells[0], this.cells[4], this.cells[8]], [this.cells[2], this.cells[4], this.cells[6]]);
        for (const line of lines) {
            const firstCellResult = line[0].result;
            if (line.every(cell => cell.result === firstCellResult)) {
                if (firstCellResult !== null)
                    return firstCellResult;
            }
        }
        if (this.cells.every(cell => cell.result !== null))
            return "tie";
        return null;
    }
}
export default SubGrid;
