let Player = require("../factories/player.js");
let Ship = require("../factories/ship.js");
describe("properites", () => {
    let player = Player("Admiral");
    test("player", () => {
        expect(player.hasWon()).toBe(false);
        expect(player.getName()).toBe("Admiral");
    })
});
describe("moves", () => {
let player1 = Player("A");
let player2 = Player("B");

test("ship placing 1", () => {
    expect(player1.placeShip(Ship("destroyer"), 1, 1, true)).toBe(true);
    expect(player2.placeShip(Ship("carrier"), 2, 2, false)).toBe(true);
});

test("atttack", () => {
    expect(player1.makeMove(player2.getGameboard(), 2, 2)).toBe(true);
    expect(player2.makeMove(player1.getGameboard(), 9, 9)).toBe(true);
    expect(player1.makeMove(player2.getGameboard(), 2, 2)).toBe(false);
  
});

test("win", () => {
    player2.makeMove(player1.getGameboard(), 1, 1);
    player2.makeMove(player1.getGameboard(), 2, 1);
    expect(player2.hasWon()).toBe(true);
});
});