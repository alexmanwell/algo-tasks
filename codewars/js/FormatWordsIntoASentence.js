// https://www.codewars.com/kata/51689e27fe9a00b126000004

Array.prototype.trim = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== "") {
      result.push(this[i]);
    }
  }

  return result;
};

const formatWords = (words) => {
  words = words ? words.trim() : null;
  let sentence = "";
  if (words && words.length !== 0) {
    if (words.length === 1) {
      sentence += words[0];
    }
    if (words.length === 2) {
      sentence += words[0] + " and " + words[1];
    }
    if (words.length > 2) {
      sentence += words.slice(0, words.length - 1).join(", ") + " and " + words[words.length - 1];
    }
  }

  return sentence;
};