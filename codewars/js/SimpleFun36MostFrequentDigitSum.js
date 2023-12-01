// https://www.codewars.com/kata/588809279ab1e0e17700002e

const mostFrequentDigitSum = (n) => {
  let map = {};
  while (n > 0) {
    const digits = n.toString().split("").map(Number);
    const sum = digits.reduce((acc, v) => acc + v, 0);
    map[sum] = map[sum] ? map[sum] + 1 : 1;
    n -= sum;
    if (n === 0) {
      map[sum] += 1;
    }
  }

  return +Array
    .from(Object.entries(map))
    .sort(([k, v], [k2, v2]) => v2 - v)[0][0];
};