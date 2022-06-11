import renderApp from '../renderApp.js';

const Ship = (locationArr, player) => {
  let hitArr = [];
  let isSunk = false;
  const boatLength = locationArr.length;

  const hit = (index) => {
    hitArr.push(index);
  };

  const checkIfSunk = () => {
    console.log(hitArr);
    let hitCount = 0;
    hitArr.forEach(() => hitCount++);
    return hitCount === boatLength ? (isSunk = true) : false;
  };

  if (player == 'player') renderApp().renderShip(locationArr, player);

  return { locationArr, hit, checkIfSunk };
};

export default Ship;
