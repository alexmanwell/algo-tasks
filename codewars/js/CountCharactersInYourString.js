// https://www.codewars.com/kata/52efefcbcdf57161d4000091

const count = (string) => {
  const map = new Map();
  string.split("").forEach((item) => {
    map.set(item, map.get(item) ? map.get(item) + 1: 1);
  });

  return Object.fromEntries(map);
};