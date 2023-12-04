// https://www.codewars.com/kata/59b0492f7d3c9d7d4a0000bd

const sum = (arr, start, end) => {
  return arr.slice(start, end).reduce((acc, v) => acc + v, 0);
};

const compare = (prev, current) => {
  return prev === current;
};

const isMadhavArray = (arr) => {
  if (arr.length < 2) {
    return false;
  }

  let isMadhav = true;
  let start = 0;
  let end = 1;
  let count = 1;
  while (end < arr.length) {
    const prev = sum(arr, start, end);
    start = end;
    end += ++count;
    const current = sum(arr, start, end);
    if (end > arr.length) {
      isMadhav = false;
      break;
    }
    if (!compare(prev, current)) {
      isMadhav = false;
      break;
    }
  }

  return isMadhav;
};