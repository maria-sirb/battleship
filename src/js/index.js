const Player = require("./factories/player");
const Ship = require("./factories/ship");
import { displayBoard, waitForBoard } from "./dom";
import "../style.css";
import { Game } from "./factories/game";


let currentGame = Game("Human");
displayBoard(currentGame.humanPlayer.getGameboard().board);
currentGame.placeHumanShips();
//let board = await waitForBoard(".board");
//if(await board)
//{
    //console.log(board);
    
    
//}