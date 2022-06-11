import Ship from './Ship.js';
import renderApp from '../renderApp.js';

const Gameboard = (player) => {
  renderApp().renderGameboard(player);

  //move to game control such as Player.js??
  const Ships = {
    Carrier: Ship([0, 1, 2, 3, 4], player),
    ['Battle ship']: Ship([14, 15, 16, 17], player),
    Destroyer: Ship([28, 29, 30], player),
    Submarine: Ship([42, 43, 44], player),
    ['Patrol boat']: Ship([56, 57], player),
  };

  //bind event handlers to grid
  //
  const placeShips = () => {

  }

  const receiveAttack = (index, tile) => {
    //check all ship locations for hit
    for (const ship in Ships) {
      let currentShip = Ships[ship];
      if (currentShip.locationArr.includes(index)) {
        currentShip.hit(index);
        tile.classList.add('hit-shot');
        if (currentShip.checkIfSunk()) {
          markSunk(currentShip, ship);
        }
        return;
      }
    }
    tile.classList.add('missed-shot');
  };

  const markSunk = (ship, shipName) => {
    console.log(`${shipName} has sunk`);
    ship.locationArr.forEach((index) => {
      console.log(index);
    });
  };

  return { receiveAttack };
};

export default Gameboard;
