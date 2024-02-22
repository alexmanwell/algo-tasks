// https://www.codewars.com/kata/58942f9175f2c78f4b000108

const reverseSubstr = (str, i) => {
  return str
    .slice(0, i + 1)
    .split("")
    .reverse()
    .join("");
};

const reverse = (str) => {
  return str
    .split("")
    .reverse()
    .join("");
};

const buildPalindrome = (str) => {
  if (str === reverse(str)) {
    return str;
  }
  let index = 0;
  while (index < str.length - 1) {
    const substr = reverseSubstr(str, index);
    const temp = str.concat(substr);
    if (temp === reverse(temp)) {
      return temp;
    }
    index++;
  }

  return "";
};