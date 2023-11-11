// https://www.codewars.com/kata/5b1b27c8f60e99a467000041

const arrayToMap = (items) => {
  const map = new Map();
  for (let item of items) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  }
  return map;
};

const anagramDifference = (w1, w2) => {
  const mapW1 = arrayToMap(w1.split(""));
  const mapW2 = arrayToMap(w2.split(""));
  let count = 0;
  for (let [letter, amount] of mapW1.entries()) {
    count += !mapW2.has(letter) ? amount : Math.abs(mapW2.get(letter) - amount);
  }
  for (let [letter, amount] of mapW2.entries()) {
    count += !mapW1.has(letter) ? amount : 0;
  }

  return count;
};