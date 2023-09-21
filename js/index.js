"use strict";
class Game {
    subgrids = [];
    populateSubgrids() {
        for (let i = 0; i < 9; i++) {
            this.subgrids[i] = new SubGrid(this);
        }
    }
    constructor() {
        this.populateSubgrids();
    }
}
class SubGrid {
    game;
    cells = [];
    result = null;
    populateCells() {
        for (let i = 0; i < 9; i++) {
            this.cells[i] = null;
        }
    }
    constructor(game) {
        this.game = game;
        this.populateCells();
    }
}
// turn cell into a class
const game = new Game();
console.log(game.subgrids);
