// https://www.codewars.com/kata/589e4d646642d144a90000d8

const runningAverage = () => {
  let cache = [];
  return (m) => {
    cache.push(m);
    return Math.round(
      cache.reduce((a, b) => a + b) / cache.length * 100
    ) / 100;
  };
};