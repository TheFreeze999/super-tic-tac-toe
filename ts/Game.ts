import SubGrid from "./SubGrid.js";
import { Vector } from "./util.js";

namespace Game {
	export type Turn = "X" | "O";
}

class Game {
	subgrids: SubGrid[] = [];

	private createSubgrids() {
		for (let i = 0; i < 9; i++) {
			const x = i % 3;
			const y = Math.floor(i / 3);
			this.subgrids[i] = new SubGrid(this, { x, y });
		}
	}

	constructor() {
		this.createSubgrids();
	}

	cellAt(subGridNum: number, cellNum: number) {
		return this.subgrids[subGridNum].cells[cellNum]
	}

	clearAllCells() {
		this.subgrids.forEach(subGrid => subGrid.clearCells());
	}

	getCellByAbsoluteCoords(coords: Vector) {
		return this.subgrids.map(subGrid => subGrid.cells).flat().find(c => Vector.match(coords, c.absolutePos))
	}
}

export default Game;