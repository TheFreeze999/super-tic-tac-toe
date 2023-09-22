import Game from "./Game.js";
const game = new Game();
const subGridEls = Array.from(document.querySelectorAll(".sub-grid"));
const cellElsBySubGrid = subGridEls.map(subGridEl => Array.from(subGridEl.children));
const allCellEls = cellElsBySubGrid.flat();
const turnEl = document.querySelector(".turn");
cellElsBySubGrid.forEach((cellElsInSubGrid, subGridNum) => {
    cellElsInSubGrid.forEach((cellEl, cellNum) => {
        const subGrid = game.subGrids[subGridNum];
        const cell = game.cellAt(subGridNum, cellNum);
        cellEl.addEventListener("click", () => {
            if (cell.result !== null)
                return;
            const turn = getTurn();
            const opponent = invertTurn(turn);
            if (subGridNum !== game.lastMovePositionWithinSubGrid[opponent] && game.lastMovePositionWithinSubGrid[opponent] !== null) {
                if (subGrid.result === null)
                    if (game.subGrids[game.lastMovePositionWithinSubGrid[opponent]].result === null)
                        return;
            }
            cellEl.classList.add(turn.toLowerCase());
            cell.result = turn;
            const subGridWinCheck = subGrid.checkForWin();
            subGrid.result = subGridWinCheck;
            if (subGrid.result !== null) {
                const subGridEl = subGridEls[subGridNum];
                subGridEl.classList.add(subGrid.result.toLowerCase());
                const gameWinCheck = game.checkForWin();
                if (gameWinCheck !== null) {
                    alert(`${gameWinCheck.toUpperCase()} wins!`);
                    document.location.reload();
                }
            }
            game.lastMovePositionWithinSubGrid[turn] = cellNum;
            swapTurn();
            console.log(cellNum);
            game.subGrids.forEach((subGrid, i) => {
                const subGridEl = subGridEls[i];
                subGridEl.classList.remove("inactive");
                if (subGrid.result !== null)
                    subGridEl.classList.add("inactive");
                if (i !== cellNum && game.subGrids[cellNum].result === null) {
                    subGridEl.classList.add("inactive");
                }
            });
            if (game.subGrids.every(subGrid => subGrid.result !== null)) {
                const gameWinCheck = game.checkForWin();
                if (gameWinCheck !== null) {
                    alert(`${gameWinCheck.toUpperCase()} wins!`);
                    document.location.reload();
                }
                else {
                    alert(`Tie!`);
                    document.location.reload();
                }
            }
        });
    });
});
function getTurn() {
    return turnEl.classList.contains("x") ? "X" : "O";
}
function invertTurn(turn) {
    return turn === "X" ? "O" : "X";
}
function swapTurn() {
    const newTurn = invertTurn(getTurn()).toLowerCase();
    turnEl.classList.remove("x");
    turnEl.classList.remove("o");
    turnEl.classList.add(newTurn);
    return newTurn.toUpperCase();
}
