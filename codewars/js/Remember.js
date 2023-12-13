// https://www.codewars.com/kata/55a243393fb3e87021000198

const remember = (str) => {
  const letters = str.split("");
  let map = {};
  let duplicates = new Set();
  for (const letter of letters) {
    if (map[letter]) {
      duplicates.add(letter);
    }
    map[letter] = map[letter] ? map[letter] + 1 : 1;
  }

  return Array.from(duplicates);
};