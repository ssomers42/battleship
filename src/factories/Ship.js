const Ship = (length, xLoc, yLoc) => {
  let hitArr = [];

  const fillHitArr = () => {
    let counter = length;
    hitArr.length = length;
    while (counter > 0) {
      hitArr[counter - 1] = false;
      counter--;
    }
  };

  const hit = (number) => {
    hitArr[number] = true;
    return hitArr;
  };

  const isSunk = () => {
    let hitCount = 0;
    hitArr.forEach((ele) => (ele == true ? hitCount++ : null));
    return hitCount === length ? true : false;
  };

  fillHitArr();

  return { hit, isSunk };
};

module.exports = Ship;