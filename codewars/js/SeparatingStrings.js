// https://www.codewars.com/kata/5977ef1f945d45158d00011f

const maxLengthWord = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = (arr[i].length > max) ? arr[i].length : max;
  }
  return max;
};

function sepStr(str) {
  let words = str.split(" ");
  let length = maxLengthWord(words);
  let result = [];
  for (let col = 0; col < length; col++) {
    let line = [];
    for (let word of words) {
      const letters = word.split("");
      if (letters[col] === undefined) {
        line.push('');
      } else {
        line.push(letters[col]);
      }
    }
    result.push(line);
  }

  return result;
}