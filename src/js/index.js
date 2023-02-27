const Player = require("./factories/player");
const Ship = require("./factories/ship");
import { displayBoard, displayShipPlacingScreen, waitForBoard } from "./dom";
import "../style.css";
import { Game } from "./factories/game";


let currentGame = Game("Human");
displayShipPlacingScreen(currentGame.humanPlayer.getGameboard().board);
//displayBoard(currentGame.humanPlayer.getGameboard().board);
currentGame.placeShips();
//let board = await waitForBoard(".board");
//if(await board)
//{
    //console.log(board);
    
    
//}