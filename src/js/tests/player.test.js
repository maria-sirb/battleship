let Player = require("../factories/player.js");
let Ship = require("../factories/ship.js");
describe("properites", () => {
  let player = Player("Admiral");
  test("player", () => {
    expect(player.hasWon()).toBe(false);
    expect(player.getName()).toBe("Admiral");
  });
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
describe("random", () => {
    let player1 = Player("computer");
    let player2 = Player("General");
    test("random placing", () => {
        expect(player1.placeShipRandomly(Ship("destroyer"))).toBe(true);
        expect(player1.placeShipRandomly(Ship("battleship"))).toBe(true);
        expect(player1.placeShipRandomly(Ship("carrier"))).toBe(true);
    });
    /*test("random move", () => {
       expect(player2.placeShip(Ship("carrier"), 0, 0, false)).toBe(true);
       expect(player2.placeShip(Ship("battleship"), 6, 5, false)).toBe(true);
       for(let i = 0; i < 30; i++)
       {
            player1.makeRandomMove(player2.getGameboard());
       }
       expect(player2.getGameboard().board).toBe(0);
    });*/

});
