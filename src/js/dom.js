
import Ship from "./factories/ship";

export function displayGameScreen(human, computer)
{  
    removeShipPlacingScreen();

    let body = document.querySelector("body");
    let container = document.createElement('div');
    container.classList = "game-container";
    container.innerHTML = 
    `   <div>
        <h1>Your Board</h1>
        <div class = "board-containerh">
        </div>
       </div>
        <div>
        <h1>${computer.getName()}'s Board</h1>
        <div class = "board-containerc">
        </div>
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
    let boatTypeText = document.createElement("div");
    boatTypeText.classList = "boat-type";
    let rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate-btn");
    rotateBtn.textContent = "Rotate";
    container.appendChild(boatTypeText);
    container.appendChild(rotateBtn);
    body.appendChild(container);
    displayBoard(board);

}

export function displayBoard (board, playerType = "") {

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
                cell.classList.remove("empty");
                cell.classList.add("missed");
                cell.innerHTML = "<svg viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
            }
            else if(playerType != "c")
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
export function removeGameScreen() 
{
    let gameScreen = document.querySelector(".game-container");
    let body = document.querySelector("body");
    body.removeChild(gameScreen);
}


export let displayWinnerScreen = (text) => {

    removeGameScreen();
    let winnerScreen = document.createElement("div");
    winnerScreen.classList.add = "winner-screen";
    winnerScreen.innerHTML = 
    `
        <h1 class = "winner-text">${text}</h1>
        <button class = "new-game-btn">New game</button>
    `
    document.querySelector("body").append(winnerScreen);
    let newGameBtn = document.querySelector(".new-game-btn");
    newGameBtn.addEventListener('click', () => window.location.reload());

}
export async function startGame(player, ships, computer) {
    let currShipIndex = [0];
    document.querySelector(".boat-type").textContent = `Place your ${ships[currShipIndex]}`;
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
        cell.addEventListener('click',async () => {
           placeShip(Ship(ships[currShipIndex[0]]), cell, isVertical[0], player, currShipIndex, ships);
           if(currShipIndex[0] >= 5)
           {
               displayGameScreen(player, computer);
               play(player, computer);

           }
        });          

    });
}
export let rotate = (isVertical) => {

    isVertical[0] = !isVertical[0];
}

let placeShip = (ship, cell, isVertical, player, currShipIndex, ships) =>
{
    let coords = [Number(cell.id[0]), Number(cell.id[1])];   
    if(player.getGameboard().isPlaceAvailable(ship, coords[0], coords[1], isVertical))
    {
        currShipIndex[0]++; 
        player.placeShip(ship, coords[0], coords[1], isVertical);
        document.querySelector(".boat-type").textContent = `Place your ${ships[currShipIndex]}`;
        refreshBoard(player.getGameboard().board);
        
    }
    
    return coords;
}

let addHoverEffect = (cell, ship, isVertical, player) => {

    
    cell.classList.remove("empty");  
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
            coveredCell.classList.remove("empty");
        }
        else if(coveredCell != null)
        {
            cell.classList.add("place-unavailable");
            coveredCell.classList.add("place-unavailable");
            coveredCell.classList.remove("empty");
        }
       
    }
}

let removeHoverEffect = (cell, ship, isVertical) => {

    cell.classList.remove("place-available");
    cell.classList.remove("place-unavailable");
    if(!cell.classList.contains("occupied"))
        cell.classList.add("empty");
    
   for(let i = 0; i < ship.length; i++)
   {
    let coveredCell;
        if(isVertical)
        {
            try
            {
                coveredCell = document.getElementById(`${Number(cell.id[0]) + i}${cell.id[1]}`);
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
                coveredCell = document.getElementById(`${cell.id[0]}${Number(cell.id[1]) + i}`);
                coveredCell.classList.remove("place-available");
                coveredCell.classList.remove("place-unavailable");
            }
            catch(err)
            {
                return err;
            }
        }
        if(!coveredCell.classList.contains("occupied"))
            coveredCell.classList.add("empty");
        
   }
}

export let play = (human, computer) => {

    let computerBoardContainer = document.querySelector(".board-containerc");
    
    let computerCells = computerBoardContainer.querySelectorAll(".cell");
           
    computerCells.forEach(cell => {
        cell.addEventListener('mouseenter', () => addMoveHoverEffect(cell));
        cell.addEventListener('mouseleave', () => removeMoveHoverEffect(cell));
        cell.addEventListener('click', () => makeMove(cell, human, computer));
    });
}

export let makeMove = (cell, player, enemy) => {
   
    let coords = [cell.id[0], cell.id[1]];
    if(player.makeMove(enemy.getGameboard(), coords[0], coords[1]))
    {
        refreshBoard(enemy.getGameboard().board, 'c');
        
        if(player.hasWon())
        {
            displayWinnerScreen("You won!");
        }
        else
        {
            computerMakesMove(enemy, player);
        }
    }

}

export let computerMakesMove = (computer, enemy) => {

    computer.makeRandomMove(enemy.getGameboard());
    refreshBoard(enemy.getGameboard().board, 'h');
    if(computer.hasWon())
    {
        displayWinnerScreen("Computer won!");
    }
}

export let addMoveHoverEffect = (cell) => {
    
    if(!cell.classList.contains("missed") && !cell.classList.contains("hit"))
    {
        cell.classList.remove("empty");
        cell.classList.add("place-available");
    }
}
export let removeMoveHoverEffect = (cell) => {
  
    cell.classList.remove("place-available");
    if(!cell.classList.contains("missed") && !cell.classList.contains("hit"))
    {
        cell.classList.add("empty");
    }

}

