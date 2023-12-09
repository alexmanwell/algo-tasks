// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

const countChars = (text) => {
  let map = {};
  for (let c of text) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }

  return map;
};

const duplicateEncode = (word) => {
  word = word.toLowerCase();
  let map = countChars(word);
  let result = "";
  for (let c of word) {
    result += map[c] > 1 ? ")" : "(";
  }

  return result;
};