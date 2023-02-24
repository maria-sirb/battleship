const Ship = require("../factories/ship.js");
describe('properties', () => {
    let ship = Ship("carrier");
    test("type", () => {
        expect(ship.type).toBe("carrier");
    });
    test("length", () => {
        expect(ship.length).toBe(5);
    });
    test("hitNo", () => {
        expect(ship.hitNo).toBe(0);
    });
});
describe('functions', () => {
    let ship = Ship("carrier");
    test('one hit', () => {
       // expect(ship.hit(2)).toEqual([false, false, true, false, false]);
       expect(ship.hit()).toBe(1);
    });
    /*test('wrong hit', () => {
        expect(ship.hit(9)).toEqual([false, false, true, false, false]);
    });*/
    test('not sunk', () => {
        expect(ship.isSunk()).toBe(false);
    })
    test('sunk', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })
    test("hit after sunk", () => {
        expect(ship.hit()).toBe(5);
    })

});