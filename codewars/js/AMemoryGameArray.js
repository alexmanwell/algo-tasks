// https://www.codewars.com/kata/55437532b73f053bac000096

const generateNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const arePairsNumber = (map, number) => {
  if (!map.has(number)) {
    return false;
  }
  return (map.has(number) && map.get(number) % 2 !== 0);
}

const createTiles = (n) => {
  if (n === 0 || n % 2 !== 0) {
    return [];
  }
  let pairs = new Array(n).fill(null);
  let map = new Map();
  let count = 0;
  while (count < n) {
    const number = generateNumber(n / 2);
    if (!arePairsNumber(map, number)) {
      pairs[count] = number;
      map.set(number, (map.get(number) || 1) + 1);
      count++;
    }
  }

  return pairs;
};