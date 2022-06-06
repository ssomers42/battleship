import Ship from './Ship.js';
import { renderShip } from '../index.js';

const Gameboard = () => {
  console.log('gameboard');
  const missedShot = [];
  //only need the x & y location to place ship
  //renderShips function will handle populating the board
  const placeShip = (ship, xLoc, yLoc) => {
    switch (ship) {
      case 'carrier':
        const carrier = Ship(5, xLoc, yLoc);
        break;
      case 'battleShip':
        const battleShip = Ship(4, xLoc, yLoc);
        break;
      case 'destroyer':
        const destroyer = Ship(3, xLoc, yLoc);
        break;
      case 'submarine':
        const submarine = Ship(3, xLoc, yLoc);
        break;
      case 'patrolBoat':
        const patrolBoat = Ship(2, xLoc, yLoc);
        break;
    }
  };

  placeShip('carrier', 1, 1);
  placeShip('battleShip', 2, 1);
  placeShip('destroyer', 3, 1);
  placeShip('submarine', 4, 1);
  placeShip('patrolBoat', 5, 1);

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
