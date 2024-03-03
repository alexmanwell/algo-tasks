// https://www.codewars.com/kata/65d2460f512ea70058594a3d
// TODO: Don't pass big random tests.

const lastNonEmptyString = (str) => {
  let letters = str.split("");
  let memo = [];
  while(letters.length) {
    memo = [];
    let temp = [];
    let index = 0;
    while (index < letters.length) {
      const letter = letters[index];
      if (memo.includes(letter)) {
        temp.push(letter);
      } else {
        memo.push(letter);
      }
      index++;
    }
    letters = temp;
  }

  return [...memo.values()].join("");
};