// https://www.codewars.com/kata/5817030088ca96c0b7000083

const sort = (arr) => {
  return arr.sort((a, b) =>
    a.localeCompare(b)
  );
};

const findCharacters = (matrix) => {
  const items = matrix.split("\n");
  let map = new Map();
  for (let item of items) {
    for (let c of item) {
      map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
  }

  const min = Math.min(...map.values());
  let digits = [];
  let letters = [];
  let capitalLetters = [];
  for (const [key, value] of map.entries()) {
    if (value === min) {
      if (/[0-9]/.test(key)) {
        digits.push(key);
      } else if (/[a-z]/.test(key)) {
        letters.push(key);
      } else {
        capitalLetters.push(key);
      }
    }
  }

  return sort(capitalLetters).join("")
    + sort(letters).join("")
    + sort(digits).join("");
};