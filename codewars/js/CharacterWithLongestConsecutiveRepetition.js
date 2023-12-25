// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

const max = (arr) => {
  return Math.max(
    ...arr.map(([, v]) => v)
  );
};

const longestRepetition = (str) => {
  if (!str.length) {
    return ["", 0];
  }
  let list = [];
  const letters = str.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      count++;
    } else {
      list.push([letters[i], count + 1]);
      count = 0;
    }
  }
  const maxLengthLetters = max(list);

  return list
    .find(([k, v]) =>
      v === maxLengthLetters
    );
};