// https://www.codewars.com/kata/5b65c47cbedf7b69ab00066e

const buildTrie = (...words) => {
  words = words.sort ((a, b) => a.length - b.length);
  let tree = {};
  for (let word of words) {
    let node = tree;
    let letters = "";
    for (let char of word) {
      letters += char;
      if (letters === word) {
        node[letters] = null;
        break;
      }
      if (!node[letters]) {
        node[letters] = {};
      }
      node = node[letters];
    }
  }

  return tree;
};