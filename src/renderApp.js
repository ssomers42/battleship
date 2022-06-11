import { computerGameboard } from './index.js';
import sendAttack from './computerLogic.js';

const renderApp = () => {
  const clearGameboards = () => {
    const playerContainer = document.querySelector(
      `#player-gameboard .game-tiles`
    );
    const computerContainer = document.querySelector(
      `#player-gameboard .game-tiles`
    );
    while (playerContainer.firstChild)
      playerContainer.removeChild(playerContainer.firstChild);
    renderGameboard('player');
    while (computerContainer.firstChild)
      computerContainer.removeChild(computerContainer.firstChild);
    renderGameboard('computer');
  };

  //create both grids
  const renderGameboard = (player) => {
    const container = document.querySelector(
      `#${player}-gameboard .game-tiles`
    );
    for (let i = 0; i < 196; i++) {
      const tile = document.createElement('div');
      tile.classList.add('game-tile');
      container.append(tile);

      //create computer grid and bind click handler
      if (player === 'computer') {
        tile.classList.add('computer-tile');
        tile.addEventListener('click', function handleClick() {
          computerGameboard.receiveAttack(i, tile);
          tile.removeEventListener('click', handleClick);
          setTimeout(() => sendAttack(), 350);
        });
      }
    }
  };

  //add ships to grid for player
  const renderShip = (locationArr) => {
    let container = document.querySelector(`#player-gameboard .game-tiles`);
    locationArr.forEach((index) => {
      container.childNodes[index].classList.add('ship-tile');
    });
  };
  return { renderGameboard, renderShip, clearGameboards };
};

export default renderApp;
