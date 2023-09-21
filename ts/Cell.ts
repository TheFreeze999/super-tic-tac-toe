import Game from "./Game.js";
import SubGrid from "./SubGrid.js";
import { Vector } from "./util.js";

namespace Cell {
	export type Result = "X" | "O" | null;
}

class Cell {
	result: Cell.Result = null;
	game: Game;
	absolutePos: Vector;

	constructor(public subGrid: SubGrid, public posWithinSubgrid: Vector) {
		this.game = this.subGrid.game;
		this.absolutePos = {
			x: this.subGrid.pos.x * 3 + this.posWithinSubgrid.x,
			y: this.subGrid.pos.y * 3 + this.posWithinSubgrid.y
		}
	}
}

export default Cell;