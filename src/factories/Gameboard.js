import Ship from './Ship.js';
import { renderGameboard } from '../renderApp.js';

const Gameboard = (player) => {
  const missedShot = [];
  renderGameboard(player);
  //only need the x & y location to place ship
  //renderShips function will handle populating the board
  const placeShip = (ship, locationArr) => {
    switch (ship) {
      case 'carrier':
        const carrier = Ship(5, locationArr);
        break;
      case 'battleShip':
        const battleShip = Ship(4, locationArr);
        break;
      case 'destroyer':
        const destroyer = Ship(3, locationArr);
        break;
      case 'submarine':
        const submarine = Ship(3, locationArr);
        break;
      case 'patrolBoat':
        const patrolBoat = Ship(2, locationArr);
        break;
    }
  };

  //move to game control such as Player.js
  placeShip('carrier', [0, 1, 2, 3, 4]);
  placeShip('battleShip', [14, 15, 16, 17]);
  placeShip('destroyer', [28, 29, 30]);
  placeShip('submarine', [42, 43, 44]);
  placeShip('patrolBoat', [56, 57]);

  //determine if ship is at xLoc, yLoc by looking at DOM for
  //rendered ships
  const receiveAttack = (index) => {
    //Send hit function to ship
    //Or record index of missed shot
    //Remove event listener on cell, add missed-shot class to cell
    missedShot.push(index);
    console.log(missedShot);
  };

  return { placeShip, receiveAttack };
};

export { Gameboard };
