import { playerOneGameboard } from './index.js';

const renderGameboard = (player) => {
  const container = document.querySelector(
    `#player-${player}-gameboard .game-tiles`
  );

  for (let i = 0; i < 196; i++) {
    const tile = document.createElement('div');
    tile.classList.add('game-tile');
    tile.addEventListener('click', () =>
      playerOneGameboard.receiveAttack(dataX, dataY)
    );
    container.append(tile);
  }
};

//TODO SWAP X, Y FOR locationArr of Index
const renderShip = (length, locationArr) => {
  const container = document.querySelector(
    `#player-${player}-gameboard .game-tiles`
  );
  for (let i = 0; i < length; i++) {
    container
      .querySelector(`[data-x="${xLoc + i}"][data-y="${yLoc}"]`)
      .classList.add('ship-tile');
  }
};

export { renderShip, renderGameboard };
