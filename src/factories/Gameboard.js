const Ship = require('./Ship');

const Gameboard = () => {
  const destroyer = Ship(5, 1, 2);

  const receiveAttack = (xLoc, yLoc) => {
    //determine if a ship exists at xLoc, yLoc
    //Send hit function to ship
    //Or record xLoc, yLoc of missed shot
    //Remove event listener on cell, add missed-shot class to cell
  };
};

module.exports = Gameboard;
