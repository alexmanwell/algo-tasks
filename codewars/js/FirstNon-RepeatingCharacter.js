// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

const firstNonRepeatingLetter = (s) => {
  const letters = s.toLowerCase().split("");
  const map = new Map();
  letters.forEach((letter) => {
    map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
  });

  let uniqueFirstLetter;
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      uniqueFirstLetter = key;
      break;
    }
  }

  return uniqueFirstLetter
    ? s.split("").find(letter => letter.toLowerCase() === uniqueFirstLetter)
    : "";
};