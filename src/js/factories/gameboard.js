let GameBoard = (boardSize) =>{

    let size = boardSize;
    let board =  Array.from(Array(size), () => {
        return new Array(size).fill(0)
    })
    
    let placeShip = function(ship, row, column, isVertical)
    {
        let positions = {rstart: -1, rend: -1, cstart: -1, cend : -1};
        if(isPlaceAvailable(ship, row, column, isVertical))
        {
            if(isVertical)
            {
               /* for(let i = row; i < row + ship.length; i++)
                {
                    board[i][column] = ship;
                }*/
                positions.rstart = row;
                positions.rend = row + ship.length - 1;
                positions.cstart = column;
                positions.cend = column;
            }
            else
            {
               /* for(let j = column; j < column + ship.length; i++)
                {
                    boar[row][j] = ship;
                }*/
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
    let isPlaceAvailable = function(ship, row, column, isVerical)
    {
        if(!isVerical)
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
                }
                return true;
           }
        }
        else if(isVerical)
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
                }
                return true;
            }
        }
        else
            return true;
    }
    return {board, placeShip, isPlaceAvailable};
} 
module.exports = GameBoard;