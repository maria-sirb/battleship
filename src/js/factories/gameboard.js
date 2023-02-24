let GameBoard = (boardSize) =>{

    let size = boardSize;
    let board =  Array.from(Array(size), () => {
        return new Array(size).fill(0)
    })
    let sunkenShips = 0;
    let ships = [];
    let placeShip = function(ship, row, column, isVertical)
    {
        ships.push(ship);
        let positions = {rstart: -1, rend: -1, cstart: -1, cend : -1};
        if(isPlaceAvailable(ship, row, column, isVertical))
        {
            if(isVertical)
            {
                positions.rstart = row;
                positions.rend = row + ship.length - 1;
                positions.cstart = column;
                positions.cend = column;
            }
            else
            {
                positions.rstart = row;
                positions.rend = row;
                positions.cstart = column;
                positions.cend = column + ship.length - 1;
            }

            for(let i = positions.rstart; i <=  positions.rend; i++)
            {
                for(let j =  positions.cstart; j <=  positions.cend; j++)
                {
                    board[i][j] = ship;
                }
            }
        }
        return positions;
    }
    let isPlaceAvailable = function(ship, row, column, isVertical)
    {
        if(!isVertical)
        { 
            if(row < 0 || row >= size || column < 0 || column + ship.length  >= size )
           {
                return false;
           }
           else
           {
                for(let j = column; j < column + ship.length; j++)
                {
                    if(board[row][j] != 0)
                    {
                        return false;
                    }
                    //check for ships one row above
                    if(row - 1 >= 0 && board[row - 1][j] != 0)
                    {
                        return false;
                    }
                    //check for ships one row under
                    if(row + 1 < size && board[row + 1][j] != 0)
                    {
                        return false;
                    }

                }
                //check for ships one column left
                if(column - 1 >= 0 && board[row][column - 1] != 0)
                {
                    return false;
                }
                //check for ships one column right
                if(column + ship.length < size && board[row][column + ship.length] != 0)
                {
                    return false;
                }
                return true;
           }
        }
        else if(isVertical)
        {
            if(row < 0 || row  + ship.length >= size || column < 0 || column >= size )
            {
                return false;
            }
            else
            {
                for(let i = row; i < row + ship.length; i++)
                {
                    if(board[i][column] != 0)
                    {
                        return false;
                    }
                    //check for ships one column left
                    if(column - 1 >= 0 && board[i][column - 1] != 0)
                    {
                        return false;
                    }
                    //check for ships one column right
                    if(column + 1 < size && board[i][column + 1] != 0)
                    {
                        return false;
                    }
                }
                //check for ships one row above
                if(row - 1 >= 0 && (board[row - 1][column] != 0))
                {
                    return false;
                }
                //check for ships one row under
                if(row + ship.length < size && board[row + ship.length][column] != 0)
                {
                    return false;
                }

                return true;
            }
        }
        else
            return true;
    }
    let receiveAttack = function(row, column)
    {
        if(board[row][column] == 0)
        {
            board[row][column] = -1;
        }
        else if(typeof board[row][column] != "number")
        {
           board[row][column].hit();
           if(board[row][column].isSunk())
           {
                sunkenShips++;
           }
           board[row][column] = 1;
          
        }
        return board[row][column];
    }
    let isGameOver = function()
    {
        if(sunkenShips == ships.length)
            return true;
        else
            return false;
    }
    return {board, placeShip, isPlaceAvailable, receiveAttack, isGameOver};
} 
module.exports = GameBoard;