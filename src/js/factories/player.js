const GameBoard = require("./gameboard");

let Player = (playerName) => {
    let gameboard = GameBoard(10);
    let name = playerName;
    let usedMoves = [];
    let nextMoves = [];
    let lastHit;
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
        
        if(isValidMove(row, column))
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

    let makeRandomMove = (enemyGameboard) => {

        //if there are no next moves make random move
        if(nextMoves.length == 0)
        {
            let row, column, move;
            do
            {
                row = getRandomNumber(0, 9);
                column = getRandomNumber(0, 9);
                move = makeMove(enemyGameboard, row, column);

            }while(move == false);

            if(enemyGameboard.board[row][column] == 1)
            {
                lastHit = [row, column];
                AddNextMoves(row, column);
            }
            console.log("move:" + [row, column]);
            return [row, column];
        }
        else
        {
            let column = -1, row = -1;
            //check for two hits in a row (two 1)
            //if we find it, we only keep the next moves on that row or column
            for(let i = 0; i < nextMoves.length; i++)
            {
                let neighbour = nextMoves[i];
                if(enemyGameboard.board[neighbour[0]][neighbour[1]] == 1)
                {
                    if(neighbour[0] == lastHit[0])
                    {
                        row = lastHit[0];
                    }
                    else if(neighbour[1] == lastHit[1])
                    {
                        column = lastHit[1];
                    }
                }
            }

            AlterNextMoves(row, column);
            let move, coordsPair;

            do
            {
                coordsPair = nextMoves.pop(); 
                move = makeMove(enemyGameboard, coordsPair[0], coordsPair[1]);

            }while(move == false && nextMoves.length > 0);

            console.log("move:" + coordsPair);

            if(enemyGameboard.board[coordsPair[0]][coordsPair[1]] == 1)
            {
                lastHit = coordsPair;
                AddNextMoves(coordsPair[0], coordsPair[1]);
            }
            return coordsPair;
        }
       
    }

let AddNextMoves = (row, column) => {

    if(column + 1 < 10)
        nextMoves.push([row, column + 1]);
    if(column - 1 >= 0)
        nextMoves.push([row, column - 1]);
    if(row - 1 >= 0)
        nextMoves.push([row - 1, column]);
    if(row + 1 < 10)
        nextMoves.push([row + 1, column]);
}

let AlterNextMoves = (row, column) => {
    if(row != -1)
    {
        nextMoves = nextMoves.filter((coordsPair) => {
            return coordsPair[0] == row;
        });
    }
    else if(column != - 1)
    {
       nextMoves = nextMoves.filter((coordsPair) => {
            return coordsPair[1] == column;
        });
    }
}



    let isValidMove = (row, column) => {

        if(row < 0 || row >= 10 || column < 0 || column >= 10)
            return false;
        for(let i = 0; i < usedMoves.length; i++)
        {
            if(usedMoves[i][0] == row && usedMoves[i][1] == column)
                return false;
        }
        return true;
    }

    let placeShipRandomly = (ship) =>
    {
        let row, column, isVertical;
        do
        {
            row = getRandomNumber(0, 9);
            column = getRandomNumber(0, 9);
            isVertical = Boolean(getRandomNumber(0, 1));
            

        }while(!gameboard.isPlaceAvailable(ship, row, column, isVertical));

        gameboard.placeShip(ship, row, column, isVertical);
        return true;
    }
    
    let getRandomNumber = (min , max) =>
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {getGameboard, getName, hasWon, makeMove, placeShip, placeShipRandomly, makeRandomMove};

}
module.exports = Player;