// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

const numberOfPairs = (gloves) => {
  const pairs = new Map();
  const colors = new Set(gloves);
  for (let color of colors) {
    pairs.set(color, 0);
  }
  for (let glove of gloves) {
    pairs.set(glove, pairs.get(glove) + 1);
  }

  return [...pairs.values()].reduce((acc, values) => {
    return acc + Math.floor(values / 2)
  }, 0);
};