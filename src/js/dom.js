
import Ship from "./factories/ship";


export function displayBoard (board) {

    let container = document.createElement("div");
    container.classList.add("board");
    let body = document.querySelector("body");
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.createElement("div");
            cell.id = `${i}${j}`;
            cell.classList.add("cell");
            container.appendChild(cell);
        }
    }
    body.appendChild(container);
}

export function refreshBoard(board)
{
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.getElementById(`${i}${j}`);
            if(board[i][j] == 0)
            {
                cell.classList.add("empty");
            }
            else if(board[i][j] == 1)
            {
                cell.classList.add("hit");
            }
            else if(board[i][j] == -1)
            {
                cell.classList.add("missed");
            }
            else
            {
                cell.classList.remove("empty");
                cell.classList.add("occupied");
            }
        }
    }
}

export function waitForBoard (selector) {
    return new Promise(resolve => {
        if(document.querySelector(selector))
        {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(true);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

}

export let handleShipPlacing = (player, ships, isVertical) => {
    let currShipIndex = [0];
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
           cell.addEventListener('mouseenter', () => {
           addHoverEffect(cell, Ship(ships[currShipIndex[0]]), isVertical, player);
        });
        cell.addEventListener('mouseleave', () => {
            removeHoverEffect(cell, Ship(ships[currShipIndex[0]]), isVertical);
        });
        cell.addEventListener('click',() =>
           placeShip(Ship(ships[currShipIndex[0]]), cell, isVertical, player, currShipIndex));

    });
    
}

export let placeOnClick = (currShipIndex) => {
    let cells = document.querySelectorAll(".cell");
    for(let i = 0; i < cells.length; i++)
    {   
        cells[i].addEventListener('click',() => getCoords(cells[i], currShipIndex));
    }   
}

let placeShip = (ship, cell, isVertical, player, currShipIndex) =>
{
    console.log(cell);
    let coords = [Number(cell.id[0]), Number(cell.id[1])];   
    console.log(coords);
    if(player.getGameboard().isPlaceAvailable(ship, coords[0], coords[1], isVertical))
    {
        currShipIndex[0]++; 
        player.placeShip(ship, coords[0], coords[1], isVertical);
        refreshBoard(player.getGameboard().board);
    }
    
    return coords;
}

export let removeClick = () =>
{
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.removeEventListener('click', () => {
        }, false);
    });
}
let addHoverEffect = (cell, ship, isVertical, player) => {

    for(let i = 0; i < ship.length; i++)
    {
        let coveredCell;
        if(isVertical)
        {
           coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);   
        }
        else if(!isVertical)
        {
            coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
        }

        if(player.getGameboard().isPlaceAvailable(ship, Number(cell.id[0]), Number(cell.id[1]), isVertical))
        {
            cell.classList.add("place-available");
            coveredCell.classList.add("place-available");
        }
        else if(coveredCell != null)
        {
            cell.classList.add("place-unavailable");
            coveredCell.classList.add("place-unavailable");
        }
    }
}

let removeHoverEffect = (cell, ship, isVertical) => {

    cell.classList.remove("place-available");
    cell.classList.remove("place-unavailable");
   for(let i = 0; i < ship.length; i++)
   {
        if(isVertical)
        {
            try
            {
                let coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);
                coveredCell.classList.remove("place-available");
                coveredCell.classList.remove("place-unavailable");
            }
            catch(err)
            {
                return err;
            }
        }
        else if(!isVertical)
        {
            try
            {
                let coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
                coveredCell.classList.remove("place-available");
                coveredCell.classList.remove("place-unavailable");
            }
            catch(err)
            {
                return err;
            }
        }
   }
}