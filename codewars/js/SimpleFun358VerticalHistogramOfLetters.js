// https://www.codewars.com/kata/59cf0ba5d751dffef300001f

const verticalHistogramOf = (s) => {
  let map = new Map();
  for (let char of s) {
    if (/[A-Z]/.test(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  const sorted = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const findMaxLetter = [...sorted].sort((a, b) => b[1] - a[1]);
  const sizeRow = findMaxLetter.length ? findMaxLetter[0][1] + 1 : 0;
  const sizeCol = sorted.length;

  let histogram = new Array(sizeCol);
  let index = 0;
  for (let [letter, amount] of sorted) {
    let line = new Array(sizeRow).fill(" ");
    for (let i = 0; i < line.length - 1; i++) {
      if (i >= line.length - 1 - amount) {
        line[i] = "*";
      }
    }
    line[line.length - 1] = letter;
    histogram[index] = line;
    index++;
  }

  let result = "";
  for (let row = 0; row < sizeRow; row++) {
    let line = "";
    for (let col = 0; col < sizeCol; col++) {
      line += histogram[col][row] + (col < sizeCol - 1 ? " " : "");
    }
    if (row < sizeRow - 1) {
      line = line.substring(0, line.lastIndexOf("*") + 1);
    }
    result += line + (row < sizeRow - 1 ? "\n" : "");
  }

  return result;
};