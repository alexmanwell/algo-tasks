// https://www.codewars.com/kata/580b746830f829e46400001e

const oneCharDifference = (word1, word2) => {
  if (word1 === word2) {
    return false;
  }
  if (Math.abs(word1.length - word2.length) > 1) {
    return false;
  }
  let size = word1.length;
  let size2 = word2.length;
  for (let i = 0; i < size; i++) {
    if (word1[i] !== word2[i]) {
      if (size === size2) {
        word1 = [word1.slice(0, i), word2[i], word1.slice(i + 1)].join("");
      } else if (size > size2) {
        word2 = [word2.slice(0, i), word1[i], word2.slice(i)].join("");
      } else {
        word1 = [word1.slice(0, i), word2[i], word1.slice(i)].join("");
      }

      return word1 === word2;
    }
  }

  return true;
};