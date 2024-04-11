// https://www.codewars.com/kata/60aa29e3639df90049ddf73d

const binarray = (arr) => {
  let sum = 0;
  let map = new Map();
  map.set(0, -1);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] === 0 ? -1 : 1;
    if (map.has(sum)) {
      const candidate = i - map.get(sum);
      max = Math.max(max, candidate);
    } else {
      map.set(sum, i);
    }
  }

  return max;
};