import Gameboard from ('../Gameboard.js')

test('Place ship', () => {
  expect(Gameboard.placeShip('battleShip', 1, 1)).toEqual({
    hit,
    isSunk,
    length: 5,
    xLoc: 1,
    yLoc: 1,
  });
});
