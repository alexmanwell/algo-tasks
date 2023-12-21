// https://www.codewars.com/kata/55fb6537544ae06ccc0000dc

const isSame = (i, j, arr) => {
  return arr[j] - arr[i] === 0
};

const isDiffOne = (i, j, arr) => {
  return arr[j] - arr[i] === 1
};

const summaryRanges = (arr) => {
  let result = [];
  let start = 0;
  let i = 0;
  while (i < arr.length) {
    while (isSame(i, i + 1, arr)) {
      i++;
    }
    if (isDiffOne(i, i + 1, arr)) {
      while (isDiffOne(i, i + 1, arr) || isSame(i, i + 1, arr)) {
        i++;
      }
      result.push(`${arr[start]}->${arr[i]}`);
    } else {
      result.push(`${arr[start]}`);
    }
    i++;
    start = i;
  }

  return result;
};