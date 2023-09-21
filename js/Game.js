import SubGrid from "./SubGrid.js";
import { Vector } from "./util.js";
class Game {
    subgrids = [];
    createSubgrids() {
        for (let i = 0; i < 9; i++) {
            const x = i % 3;
            const y = Math.floor(i / 3);
            this.subgrids[i] = new SubGrid(this, { x, y });
        }
    }
    constructor() {
        this.createSubgrids();
    }
    cellAt(subGridNum, cellNum) {
        return this.subgrids[subGridNum].cells[cellNum];
    }
    clearAllCells() {
        this.subgrids.forEach(subGrid => subGrid.clearCells());
    }
    getCellByAbsoluteCoords(coords) {
        return this.subgrids.map(subGrid => subGrid.cells).flat().find(c => Vector.match(coords, c.absolutePos));
    }
}
export default Game;
