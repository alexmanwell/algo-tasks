// https://www.codewars.com/kata/5697a0d35f754d1592000018

const isSquare = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  arr = arr.flat(Number.MAX_SAFE_INTEGER);
  for (let num of arr) {
    let candidate = Math.sqrt(num);
    if (candidate !== Math.floor(candidate)) {
      return false;
    }
  }

  return true;
};