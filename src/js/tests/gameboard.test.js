const GameBoard = require("../factories/gameboard.js");
const Ship = require("../factories/ship.js");
describe("properties", () => {
    let gameBoard = GameBoard(4);
    test("initial board", () => {
        expect(gameBoard.board).toEqual([[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]]);
    });
   
});
describe("ship placing", () => {

    let gameBoard = GameBoard(10);
    test("place first ship", () => {
        let ship = Ship("cruiser");
        expect(gameBoard.placeShip(ship, 0, 1, true)).toEqual({rstart: 0, rend: 2, cstart: 1, cend: 1});
    });
    test("is place available", () => {
        let ship = Ship("battleship");
        expect(gameBoard.isPlaceAvailable(ship, 1, 0, false)).toBe(false);
    });
    test("place second ship over anoter", () => {
        let ship = Ship("battleship");
        expect(gameBoard.placeShip(ship, 1, 0, false)).toEqual({rstart: -1, rend: -1, cstart: -1, cend: -1});
    });
    test("place ship outside board", () => {
        let ship = Ship("battleship");
        expect(gameBoard.placeShip(ship, 8, 8, false)).toEqual({rstart: -1, rend: -1, cstart: -1, cend: -1})
    });
});