class Cell {
    subGrid;
    posWithinSubgrid;
    result = null;
    game;
    absolutePos;
    constructor(subGrid, posWithinSubgrid) {
        this.subGrid = subGrid;
        this.posWithinSubgrid = posWithinSubgrid;
        this.game = this.subGrid.game;
        this.absolutePos = {
            x: this.subGrid.pos.x * 3 + this.posWithinSubgrid.x,
            y: this.subGrid.pos.y * 3 + this.posWithinSubgrid.y
        };
    }
}
export default Cell;
