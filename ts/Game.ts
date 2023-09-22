import SubGrid from "./SubGrid.js";
import { Vector } from "./util.js";

namespace Game {
	export type Turn = "X" | "O";
}

class Game {
	subGrids: SubGrid[] = [];
	turn: Game.Turn = "X";

	private createSubgrids() {
		for (let i = 0; i < 9; i++) {
			const x = i % 3;
			const y = Math.floor(i / 3);
			this.subGrids[i] = new SubGrid(this, { x, y });
		}
	}

	constructor() {
		this.createSubgrids();
	}

	cellAt(subGridNum: number, cellNum: number) {
		return this.subGrids[subGridNum].cells[cellNum];
	}

	clearAllCells() {
		this.subGrids.forEach(subGrid => subGrid.clearCells());
	}

	getCellByAbsoluteCoords(coords: Vector) {
		return this.subGrids.map(subGrid => subGrid.cells).flat().find(c => Vector.match(coords, c.absolutePos))
	}

	getSubGridsInRow(rowNumber: number) {
		return this.subGrids.filter(subGrid => subGrid.pos.y === rowNumber);
	}
	getSubGridsInColumn(columnNumber: number) {
		return this.subGrids.filter(subGrid => subGrid.pos.x === columnNumber);
	}

	checkForWin() {
		const lines: SubGrid[][] = [];
		for (let i = 0; i < 3; i++) {
			lines.push(this.getSubGridsInRow(i), this.getSubGridsInColumn(i));
		}

		lines.push(
			[this.subGrids[0], this.subGrids[4], this.subGrids[8]],
			[this.subGrids[2], this.subGrids[4], this.subGrids[6]]);

		for (const line of lines) {
			const firstCellResult = line[0].result;
			if (line.every(cell => cell.result === firstCellResult)) {
				if (firstCellResult !== null && firstCellResult !== "tie") return firstCellResult;
			}
		}

		return null;
	}
}

export default Game;