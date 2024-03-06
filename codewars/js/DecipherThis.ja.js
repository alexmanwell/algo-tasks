// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};

const decipherThis = (str) => {
  if (!str.length) {
    return "";
  }
  const arr = str.split(" ");
  let result = [];
  for (let item of arr) {
    const digits = +item.match(/[0-9]+/g).join("");
    let letters = item.match(/[a-zA-Z]+/g) || [];
    letters = letters.join("").split("");
    letters = swap(letters, 0, letters.length - 1);
    result.push(String.fromCharCode(digits) + letters.join(""));
  }

  return result.join(" ");
};