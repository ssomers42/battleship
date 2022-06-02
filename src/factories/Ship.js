const Ship = (length, xLoc, yLoc) => {
  let hitArr = [];

  const hit = (number) => {
    hitArr.push(number);
    return hitArr;
  };

  const isSunk = () => {
    let hitCount = 0;
    hitArr.forEach((ele) => hitCount++);
    return hitCount === length ? true : false;
  };

  return { hit, isSunk };
};

module.exports = Ship;
