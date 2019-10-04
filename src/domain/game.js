'use strict'
class Game {

    constructor(json){
        this.id = json.id;
        this.rows = json.rows;
        this.cols = json.cols;
        this.mines = json.mines;
        this.cellsRevealed = json.cellsRevealed;
        this.status = json.status;
        this.result = json.result;
        this.startTime = json.startTime;
        this.grid = this.createGrid(json.grid);
    }
    createGrid(grid) {
        grid.forEach( (row) => {
            row.forEach( (cell) => {
                cell = new Cell(cell.mine, cell.clicked, cell.value)
            })
        })
        return grid;
    }
}
module.exports = Game;

class Cell {

    constructor(mine, clicked, value){
        this.mine = mine;
        this.clicked = clicked;
        this.value = value;
    }
}