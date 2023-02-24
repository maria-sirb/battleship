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
    test("place ship over anoter", () => {
        let ship = Ship("battleship");
        expect(gameBoard.placeShip(ship, 1, 0, false)).toEqual({rstart: -1, rend: -1, cstart: -1, cend: -1});
    });
    test("place ship right next to another", () => {
        let ship = Ship("battleship");
        expect(gameBoard.placeShip(ship, 3, 0, false)).toEqual({rstart: -1, rend: -1, cstart: -1, cend: -1});
    });
    test("place ship outside board", () => {
        let ship = Ship("battleship");
        expect(gameBoard.placeShip(ship, 8, 8, false)).toEqual({rstart: -1, rend: -1, cstart: -1, cend: -1})
    });
});
describe("attack", () => {

    let gameBoard = GameBoard(10);
    let ship = Ship("cruiser");
    gameBoard.placeShip(ship, 0, 1, true);

    test("missed hit", () => {
       expect(gameBoard.receiveAttack(5, 5)).toBe(-1); 
    });
    test("hit ship", () => {
       gameBoard.receiveAttack(0, 1);
       expect(gameBoard.board[0][1]).toBe(1);
    });
    test("game not over", () => {
        expect(gameBoard.isGameOver()).toBe(false);
    });
    test("game over", () => {
        gameBoard.receiveAttack(1, 1);
        gameBoard.receiveAttack(2, 1);
        expect(gameBoard.isGameOver()).toBe(true);
    })
});