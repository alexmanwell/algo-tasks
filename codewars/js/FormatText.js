// https://www.codewars.com/kata/559c7b6e3c38b1d1b900006f

const countLengthWords = (arr) => {
  return arr.length + arr.reduce((acc, v) => acc + v.length, 0);
};

const format = (text, width) => {
  const words = text.split(" ");
  let result = "";
  let temp = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const length = word.length;
    if ((countLengthWords(temp) + length) <= width) {
      temp.push(word);
    } else {
      result += temp.join(" ") + "\n";
      temp = [];
      i--;
    }
  }

  return result + temp.join(" ");
};