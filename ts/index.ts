type CellType = "X" | "O" | null;
type SubGridResult = "X" | "O" | "tie" | null;

class Game {
	subgrids: SubGrid[] = [];

	private populateSubgrids() {
		for (let i = 0; i < 9; i++) {
			this.subgrids[i] = new SubGrid(this);
		}
	}

	constructor() {
		this.populateSubgrids();
	}
}

class SubGrid {
	cells: CellType[] = [];
	result: SubGridResult = null;

	private populateCells() {
		for (let i = 0; i < 9; i++) {
			this.cells[i] = null;
		}
	}

	constructor(public game: Game) {
		this.populateCells();
	}
}
// turn cell into a class

const game = new Game();
console.log(game.subgrids)