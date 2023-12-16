// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};

const moveLetters = (letters) => {
  let arr = letters.split("");
  let size = arr.length;
  let halfSize = Math.floor(size / 2) - 1;
  for (let i = 0; i < halfSize / 2; i++) {
    arr = swap(
      arr,
      i,
      halfSize - i
    );
    arr = swap(
      arr,
      size - 1 - i,
      size - 1 - (halfSize - i)
    );
  }

  return arr.join("");
};

const insideOut = (str) => {
  const words = str.split(" ");
  let result = [];
  for (let word of words) {
    result.push(
      (word.length > 3)
        ? moveLetters(word)
        : word
    );
  }

  return result.join(" ");
};