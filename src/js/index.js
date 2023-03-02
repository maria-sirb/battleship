const Player = require("./factories/player");
const Ship = require("./factories/ship");
import { displayBoard, displayShipPlacingScreen, waitForBoard } from "./dom";
import "../style.css";
import { Game } from "./factories/game";


let currentGame = Game("human");
displayShipPlacingScreen(currentGame.humanPlayer.getGameboard().board);
currentGame.initializeGame();
