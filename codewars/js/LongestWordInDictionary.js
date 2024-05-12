// https://www.codewars.com/kata/5a003c8c06d5b6bb2a0000b8
// TODO: doesn't pass tests.

const findLongestWord = (str, dictionary) => {
  dictionary = dictionary.sort((a, b) => b.length - a.length || a.localeCompare(b));
  let result = "";
  for (let word of dictionary) {
    let index = -1;
    for (let c of word) {
      const indexOf = str.indexOf(c, index + 1);
      if (indexOf !== -1 && indexOf > index) {
        index = indexOf;
      }
      if (indexOf === -1) {
        break;
      }
    }
    if (index > 0) {
      result = word;
      break;
    }
  }

  return result;
};