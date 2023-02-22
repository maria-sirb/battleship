const Ship = require("../factories/ship.js");
describe('properties', () => {
    let ship = Ship("carrier");
    test("type", () => {
        expect(ship.type).toBe("carrier");
    });
    test("length", () => {
        expect(ship.length).toBe(5);
    });
    test("hits", () => {
        expect(ship.hits).toEqual([false, false, false, false, false]);
    });
});
describe('functions', () => {
    let ship = Ship("carrier");
    test('one hit', () => {
        expect(ship.hit(2)).toEqual([false, false, true, false, false]);
    });
    test('wrong hit', () => {
        expect(ship.hit(9)).toEqual([false, false, true, false, false]);
    });
    test('not sunk', () => {
        expect(ship.isSunk()).toBe(false);
    })
    test('sunk', () => {
        ship.hit(0);
        ship.hit(1);
        ship.hit(3);
        ship.hit(4);
        expect(ship.isSunk()).toBe(true);
    })

});