const Ship = require('../Ship');

const destroyer = Ship(5, 2, 3);
const littleShip = Ship(1, 2, 3);

test('Ship is hit', () => {
  expect(littleShip.hit(0)).toStrictEqual([0]);
});

test('Not sunk ship', () => {
  expect(destroyer.isSunk()).toBe(false);
});

test('Sunk ship', () => {
  expect(littleShip.isSunk()).toBe(true);
});
