// https://leetcode.com/problems/find-common-characters/description/

const lengthUniqueLettersInWords = (words) => words.map((word) => {
  const uniqueLetters = new Set();
  for (let letter of word.split("")) {
    uniqueLetters.add(letter);
  }
  
  return uniqueLetters.size;
});

/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = (words) => {
  const lengthLetters = lengthUniqueLettersInWords(words);

  const max = Math.max(...lengthLetters);
  const index = lengthLetters.findIndex((length) => length === max);
  const letters = words[index].split("");
  const result = [];
  for (let letter of letters) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(letter)) {
        const index = words[i].split("").findIndex((char) => char === letter);
        words[i] = [...words[i].slice(0, index), words[i].slice(index + 1)].join("");
        count++;
      }
    }
    if (count === words.length) {
      result.push(letter);
    }
  }

  return result;
};