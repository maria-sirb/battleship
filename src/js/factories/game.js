import { addClickPlace, placeOnClick, handleShipPlacing } from "../dom";

const Player = require("./player");
const Ship = require("./ship");

export let Game = (playerName) =>
{
    let humanPlayer = Player(playerName);
    let computer = Player("Computer");
    let ships = ["battleship", "carrier", "cruiser", "submarine", "destroyer"];
    
    let placeComputerShips = () => {

        ships.forEach(ship => {
            computer.placeShipRandomly(Ship(ship));
        })
    }

    async function placeHumanShips () {

       handleShipPlacing(humanPlayer, ships, false);       
       
    }
    
    return {humanPlayer, computer, ships, placeComputerShips, placeHumanShips};
}