import Game from "./Game.js";
const game = new Game();
//create detection systems on game and subgrid to see if a row/column/diagonal has been completed.
const subGrid5 = game.subGrids[5];
console.log(subGrid5.checkForWin());
console.log(game.checkForWin());
