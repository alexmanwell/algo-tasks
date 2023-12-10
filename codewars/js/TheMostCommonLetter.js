// https://www.codewars.com/kata/5a434a9dc5e284724f000011

const countLetters = (str) => {
  let map = {};
  for (let c of str) {
    if (c !== " ") {
      map[c] = map[c] ? map[c] + 1 : 1;
    }
  }

  return map;
};

const filteredMaxAmountOfLetters = (map) => {
  const max = Math.max(...Object.values(map));

  return Array
    .from(Object.entries(map))
    .filter(([k, v]) => v === max)
    .map(([k,]) => k);
};

const findFirstLetterOfText = (str, letters) => {
  let firstLetter = "";
  for (let c of str) {
    if (letters.includes(c)) {
      firstLetter = c;
      break;
    }
  }

  return firstLetter;
};

const replaceCommon = (str, letter) => {
  const map = countLetters(str);
  const letters = filteredMaxAmountOfLetters(map);
  const firstLetter = findFirstLetterOfText(str, letters);

  return str.replaceAll(firstLetter, letter);
};