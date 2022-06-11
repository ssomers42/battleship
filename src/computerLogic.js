import { playerGameboard } from './index.js';

const sendAttack = () => {
  let randomIndex = Math.floor(Math.random() * 196);
  let randomTile = document.querySelector('#player-gameboard .game-tiles')
    .childNodes[randomIndex];
  while (
    randomTile.classList.contains('hit-shot') ||
    randomTile.classList.contains('missed-shot')
  ) {
    randomIndex = Math.floor(Math.random() * 196);
    randomTile = document.querySelector('#player-gameboard .game-tiles')
      .childNodes[randomIndex];
  }
  playerGameboard.receiveAttack(randomIndex, randomTile);
};

export default sendAttack;
