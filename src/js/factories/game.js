import { addClickPlace, placeOnClick, handleShipPlacing, play, waitForBoard, startGame } from "../dom";

const Player = require("./player");
const Ship = require("./ship");

export let Game = (playerName) =>
{
    let humanPlayer = Player(playerName);
    let computer = Player("Computer");
    let ships = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
    
    let placeComputerShips = () => {

        ships.forEach(ship => {
            computer.placeShipRandomly(Ship(ship));
        })
    }

   function initializeGame() {

        placeComputerShips();
        startGame(humanPlayer, ships, computer);

    }

    
    return {humanPlayer, computer, ships, placeComputerShips, initializeGame};
}