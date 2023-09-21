import Cell from "./Cell.js";
import Game from "./Game.js";
import { Vector, round } from "./util.js";

namespace SubGrid {
	export type Result = "X" | "O" | "tie" | null;
}


class SubGrid {
	cells: Cell[] = [];
	result: SubGrid.Result = null;

	private createCells() {
		for (let i = 0; i < 9; i++) {
			const x = i % 3;
			const y = Math.floor(i / 3);
			this.cells[i] = new Cell(this, { x, y });
		}
	}

	constructor(public game: Game, public pos: Vector) {
		this.createCells();
	}

	clearCells() {
		this.cells.forEach(cell => cell.result = null);
	}
}

export default SubGrid;