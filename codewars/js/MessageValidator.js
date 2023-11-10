// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc

const isAValidMessage = (message) => {
  if (message === "") {
    return true;
  }
  const words = message.match(new RegExp(/\d+[a-zA-Z]+/g));
  const length = words ? words.reduce((acc, item) => acc + item.length, 0) : 0;
  if (message.length !== length) {
    return false;
  }

  return words
    .filter(word => {
      const number = word.match(new RegExp(/\d+/));
      return +number !== word.replace(number, "").length;
    })
    .length === 0
};