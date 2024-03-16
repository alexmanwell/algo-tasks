// https://www.codewars.com/kata/54129112fb7c188740000162

const prefill = (n, v = undefined) => {
  if (parseInt(n) !== Math.abs(n)) {
    throw new TypeError(`${n} is invalid`);
  }

  return +n ? new Array(n).fill(v) : [];
};