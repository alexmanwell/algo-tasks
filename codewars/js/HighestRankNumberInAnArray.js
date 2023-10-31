// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

const highestRank = (arr) => {
  const map = new Map();
  for (let unique of [...new Set(arr)]) {
    map.set(unique, arr.filter(number => unique === number).length);
  }

  return [...map.entries()]
    .sort((item1, item2) => item2[1] - item1[1])
    .filter((item, _, arr) => item[1] === arr[0][1])
    .sort((item1, item2) => item2[0] - item1[0])[0][0];
};