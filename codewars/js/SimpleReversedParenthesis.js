// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

const turnBrackets = (s) => {
  return s === "(" ? ")" : "(";
};

const solve = (s) => {
  if (s.length % 2 !== 0) {
    return -1;
  }
  let arr = s.split("");
  let count = 0;
  while (arr.length) {
    const start = arr.lastIndexOf("(");
    const end = arr.indexOf(")", start + 1);
    if (start === -1) {
      arr[end] = turnBrackets(arr[end]);
      count++;
    } else if (end === -1) {
      arr[start] = turnBrackets(arr[start]);
      count++;
    } else if (start <= end - 1) {
      [arr[start], arr[end]] = [null, null];
      arr = arr.filter(item => item !== null);
    } else if (start > end) {
      arr[start] = turnBrackets(arr[start]);
      count++;
    }
  }

  return count;
};