import Ship from './Ship.js';
import { renderGameboard } from '../renderApp.js';

const Gameboard = (player) => {
  renderGameboard(player);
  const missedShot = [];
  //only need the x & y location to place ship
  //renderShips function will handle populating the board
  const placeShip = (ship, xLoc, yLoc) => {
    switch (ship) {
      case 'carrier':
        const carrier = Ship(5, xLoc, yLoc, player);
        break;
      case 'battleShip':
        const battleShip = Ship(4, xLoc, yLoc, player);
        break;
      case 'destroyer':
        const destroyer = Ship(3, xLoc, yLoc, player);
        break;
      case 'submarine':
        const submarine = Ship(3, xLoc, yLoc, player);
        break;
      case 'patrolBoat':
        const patrolBoat = Ship(2, xLoc, yLoc, player);
        break;
    }
  };

  //move to game control such as Player.js
  placeShip('carrier', 1, 1, player);
  placeShip('battleShip', 1, 2, player);
  placeShip('destroyer', 1, 3, player);
  placeShip('submarine', 1, 4, player);
  placeShip('patrolBoat', 1, 5, player);

  //determine if ship is at xLoc, yLoc by looking at DOM for
  //rendered ships
  const receiveAttack = (xLoc, yLoc) => {
    //Send hit function to ship
    //Or record xLoc, yLoc of missed shot
    //Remove event listener on cell, add missed-shot class to cell
    console.log('received');
  };

  return { placeShip, receiveAttack };
};

export { Gameboard };
