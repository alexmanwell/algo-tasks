// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

const removeChars = (str, index) => {
  return str.substring(0, index - 1)
    + str.substring(index + 1)
};

const cleanString = (str) => {
  let index = 0;
  while (index < str.length) {
    if (str.charAt(index) === "#") {
      str = removeChars(str, index);
      index--;
    } else {
      index++;
    }
  }

  return str;
};