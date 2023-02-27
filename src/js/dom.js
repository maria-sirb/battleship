
import Ship from "./factories/ship";

export function displayGameScreen(human, computer)
{  
    removeShipPlacingScreen();

    let body = document.querySelector("body");
    let container = document.createElement('div');
    container.classList = "game-container";
    container.innerHTML = 
    `   <div>
        <h1>${human.getName()}</h1>
        <div class = "board-containerh"></div>
       </div>
        <div>
        <h1>${computer.getName()}</h1>
        <div class = "board-containerc"></div>
        </div>
    `;
    body.appendChild(container);
    displayBoard(human.getGameboard().board, "h");
    refreshBoard(human.getGameboard().board, "h");
    displayBoard(computer.getGameboard().board, "c");
   // refreshBoard(computer.getGameboard().board, "c");

}
export function removeShipPlacingScreen() 
{
    let shipPalcingScreen = document.querySelector(".board-container");
    let body = document.querySelector("body");
    body.removeChild(shipPalcingScreen);
}

export function displayShipPlacingScreen(board){

    let body = document.querySelector("body");
    let container = document.createElement('div');
    container.classList = "board-container";
    let rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate-btn");
    rotateBtn.textContent = "Rotate";
    container.appendChild(rotateBtn);
    body.appendChild(container);
    displayBoard(board);

}

export function displayBoard (board, playerType = "") {

    console.log(board);
    console.log(playerType);
    console.log(document.querySelector(`.board-container${playerType}`));
    let container = document.querySelector(`.board-container${playerType}`);
    let boardElem = document.createElement("div");
    boardElem.classList.add("board");
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.createElement("div");
            cell.id = `${i}${j}${playerType}`;
            cell.classList.add("cell", "empty");
            boardElem.appendChild(cell);
        }
    }
    container.appendChild(boardElem); 
}

export function refreshBoard(board, playerType = "")
{
    for(let i = 0; i < board.length; i++)
    {
        for(let j = 0; j < board[i].length; j++)
        {
            let cell = document.getElementById(`${i}${j}${playerType}`);
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

export let handleShipPlacing = (player, ships, computer) => {
    let currShipIndex = [0];
    let isVertical = [false];
    let rotateBtn = document.querySelector(".rotate-btn");
    let cells = document.querySelectorAll(".cell");
    rotateBtn.addEventListener('click', () => rotate(isVertical));
    cells.forEach(cell => {
        
        cell.addEventListener('mouseenter', () => {
           addHoverEffect(cell, Ship(ships[currShipIndex[0]]), isVertical[0], player);
        });
        cell.addEventListener('mouseleave', () => {
            removeHoverEffect(cell, Ship(ships[currShipIndex[0]]), isVertical[0]);
        });
        cell.addEventListener('click',() => {
           placeShip(Ship(ships[currShipIndex[0]]), cell, isVertical[0], player, currShipIndex);
           if(currShipIndex[0] >= 5)
           {
            console.log(computer.getGameboard().board);
                displayGameScreen(player, computer);
           }
        });          

    });
    
}
export let rotate = (isVertical) => {

    isVertical[0] = !isVertical[0];
    console.log(isVertical);

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