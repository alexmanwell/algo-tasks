// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001

const numericals = (str) => {
  const map = new Map();
  const result = new Array(str.length).fill(0);
  str.split("").forEach((c, index) => {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    result[index] = map.get(c);
  });

  return result.join("");
};