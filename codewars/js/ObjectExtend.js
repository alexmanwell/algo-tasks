// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb

const extend = (...objects) => {
  if (!objects.length) {
    return {};
  }
  let map = {};
  for (let obj of objects) {
    if (typeof obj === "object") {
      const entry = Object.entries(obj);
      for (let [key, value] of entry) {
        if (map[key] === undefined) {
          map[key] = value;
        }
      }
    }
  }

  return map;
};