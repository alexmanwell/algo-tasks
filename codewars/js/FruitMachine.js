// https://www.codewars.com/kata/590adadea658017d90000039

const FRUITS = [
  "Wild",
  "Star",
  "Bell",
  "Shell",
  "Seven",
  "Cherry",
  "Bar",
  "King",
  "Queen",
  "Jack"
].reverse();

const WILD = "Wild";

const fruit = (reels, spins) => {
  let map = {};

  reels.forEach((reel, index) => {
    const spin = spins[index];
    const item = reel[spin];
    map[item] = map[item] ? map[item] + 1 : 1;
  });

  const sorted = Object
    .entries(map)
    .sort(([, v1], [, v2]) => v2 - v1);

  const maxFruit = sorted[0][0];
  const amountMaxFruit = sorted[0][1];
  if (amountMaxFruit === 3) {
    return (FRUITS.indexOf(maxFruit) + 1) * 10;
  }
  if (FRUITS.includes(maxFruit)
    && amountMaxFruit === 2
    && sorted[1][0] === WILD) {
    return (FRUITS.indexOf(maxFruit) + 1) * 2;
  }
  if (FRUITS.includes(maxFruit)
    && amountMaxFruit === 2) {
    return (FRUITS.indexOf(maxFruit) + 1);
  }

  return 0;
};