const GameBoard = require("./gameboard");

let Player = (playerName) => {
    let gameboard = GameBoard(10);
    let name = playerName;
    let usedMoves = [];
    let won = false;

    let getGameboard = () => {
        return gameboard;
    }

    let getName = () => {
        return name;
    }
    let hasWon = () => {
        return won;
    }
    let placeShip = (ship, row, column, isVerical) => {

       if(gameboard.placeShip(ship, row, column, isVerical).rstart != -1)
       {
            return true;
       }
       else 
       {
            return false;
       }
    }

    let makeMove = (enemyGameboard, row, column) => {
        
        if(!wasHitBefore(row, column))
        {
            usedMoves.push([row, column]);
            enemyGameboard.receiveAttack(row, column);
            if(enemyGameboard.isGameOver())
            {
                won = true;
            }
            return true;
        }
        return false;
    }

    let wasHitBefore = (row, column) => {
        for(let i = 0; i < usedMoves.length; i++)
        {
            if(usedMoves[i][0] == row && usedMoves[i][1] == column)
                return true;
        }
        return false;
    }
    return {getGameboard, getName, hasWon, makeMove, placeShip};

}
module.exports = Player;