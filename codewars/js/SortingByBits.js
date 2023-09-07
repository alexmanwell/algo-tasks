// https://www.codewars.com/kata/59fa8e2646d8433ee200003f

const countBits = (num) => {
  return num
    .toString(2)
    .split("")
    .filter(s => {
      return s === "1";
    }).length;
};

const sortByBit = (arr) => {
  return arr.sort((a, b) =>
    countBits(a) === countBits(b)
      ? a - b
      : countBits(a) - countBits(b)
  )
};