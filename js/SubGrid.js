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
}
export default SubGrid;
