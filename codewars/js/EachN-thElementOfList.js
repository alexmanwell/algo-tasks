// https://www.codewars.com/kata/5a077e8106d5b654b800004f

const each = (n, xs) => {
  let result = [];
  if (n  === 0) {
    return result;
  }
  if (n > 0) {
    for (let i = n - 1; i < xs.length; i += n) {
      result.push(xs[i]);
    }
  } else {
    n = Math.abs(n);
    for (let i = xs.length - n; i >= 0 ; i -=n) {
      result.push(xs[i]);
    }
  }

  return result;
};