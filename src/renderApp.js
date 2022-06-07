const renderGameboard = (player) => {
  const container = document.querySelector(
    `#player-${player}-gameboard .game-tiles`
  );

  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 14; j++) {
      const tile = document.createElement('div');
      tile.setAttribute('data-y', i);
      tile.setAttribute('data-x', j);
      tile.classList.add('game-tile');
      container.append(tile);
    }
  }
};

const renderShip = (length, xLoc, yLoc, player) => {
  console.log('ship rendered' + ' ' + length);
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
