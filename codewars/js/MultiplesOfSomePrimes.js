// https://www.codewars.com/kata/62e66bea9db63bab88f4098c
// TODO: Doesn't pass time limit tests.

const combinations = (arr, n) => {
  if (arr.length < n) {
    return [];
  }
  let res = [];
  for (let i = 0; i <= arr.length - n; i++) {
    const stack = [{start: i, indexes: [i]}];
    while (stack.length) {
      const {start, indexes} = stack.pop();
      if (indexes.length === n) {
        res.push(indexes.map(idx => arr[idx]));
      } else {
        for (let j = start + 1; j <= arr.length - n + indexes.length; j++) {
          stack.push({start: j, indexes: [...indexes, j]});
        }
      }
    }
  }

  return res;
};

const findThem = (limit, primes) => {
  let combos = [];
  for (let i = 1; i <= limit; i++) {
    const combo = combinations(primes, i);
    combos.push(...combo);
  }
  const multiplies = combos.map(arr => arr.reduce((acc, n) => acc * n, 1n));

  let result = new Set();
  for (let i = multiplies.length - 1; i >= 0; i--) {
    for (let candidate = 2n; candidate < limit; candidate++) {
      if (multiplies[i] > limit) {
        break;
      }
      if (candidate % multiplies[i] === 0n) {
        result.add(candidate);
      }
    }
  }

  return [...result].reduce((a, b) => a + b);
};