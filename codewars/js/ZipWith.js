// https://www.codewars.com/kata/5825792ada030e9601000782

const min = (a, b) => {
  return Math.min(a, b);
};

const zipWith = (fn, a0, a1) => {
  const length = min(a0.length, a1.length);
  let result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = fn(a0[i], a1[i]);
  }

  return result;
};