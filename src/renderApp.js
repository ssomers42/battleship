import { computerGameboard, playerGameboard } from './index.js';
import sendAttack from './computerLogic.js';

const renderApp = () => {
  const renderGameboard = (player) => {
    let container;
    if (player === 'player') {
      container = document.querySelector(`#player-gameboard .game-tiles`);
    } else
      container = document.querySelector(`#computer-gameboard .game-tiles`);
    for (let i = 0; i < 196; i++) {
      const tile = document.createElement('div');
      tile.classList.add('game-tile');
      if (player === 'computer') {
        tile.classList.add('computer-tile');
        tile.addEventListener('click', function handleClick() {
          computerGameboard.receiveAttack(i, tile);
          tile.removeEventListener('click', handleClick);
          setTimeout(() => sendAttack(), 350);
        });
      }
      container.append(tile);
    }
  };

  const renderShip = (locationArr, player) => {
    let container;
    if (player === 'player') {
      container = document.querySelector(`#player-gameboard .game-tiles`);
    } else
      container = document.querySelector(`#computer-gameboard .game-tiles`);
    locationArr.forEach((index) => {
      container.childNodes[index].classList.add('ship-tile');
    });
  };

  return { renderGameboard, renderShip };
};

export default renderApp;
