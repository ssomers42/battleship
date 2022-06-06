import { renderShip } from '../index.js';

const Ship = (length, xLoc, yLoc) => {
  let hitArr = [];

  const hit = (index) => {
    hitArr.push(index);
    const isSunk = checkIfSunk();
    return isSunk;
  };

  const checkIfSunk = () => {
    let hitCount = 0;
    hitArr.forEach((ele) => hitCount++);
    return hitCount === length ? true : false;
  };

  renderShip(length, xLoc, yLoc);

  return { hit };
};

export default Ship;
