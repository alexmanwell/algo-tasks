// https://www.codewars.com/kata/65d4d2c4e2b49c3d1f3c3aec
// TODO: don't pass all tests. I don't know how make right solution, but I'm going to make this kata later.

const fibonacci = (n) => {
  let sequence = [];
  let [current, next] = [1n, 1n];
  for (let i = 0; i <= n; i++) {
    [current, next] = [next, current + next];
    if (n < next) {
      break;
    }
    sequence.push(next);
  }

  return sequence;
};

const factors = (arr) => {
  let map = new Map();
  for (let n of arr.reverse()) {
    let index = 0;
    let sequence = [];
    let m = n;
    while (index < arr.length) {
      const candidate = arr[index];
      if (m % candidate === 0n && m !== candidate) {
        sequence.push(candidate);
        m /= candidate;
        if (m === candidate) {
          sequence.push(candidate);
          break;
        }
      } else {
        index++;
      }
    }
    if (sequence.length > 1) {
      map.set(n, sequence);
    }
  }

  return map;
};

const fibProd = (n) => {
  const fibo = fibonacci(n).filter(item => item <= n).reverse();
  let result = [];
  let index = fibo.indexOf(fibo.find(item => Number(n % item) === 0));
  index = index === -1 ? 0 : index;
  while (index < fibo.length) {
    let j = index;
    let multipliers = [];
    let candidate = BigInt(n);
    while (j < fibo.length) {
      if (Number(candidate % fibo[j]) === 0) {
        multipliers.push(fibo[j]);
        candidate /= fibo[j];
      } else {
        j++;
      }
    }
    if (multipliers.reduce((acc, item) => acc * item, 1n) === n) {
      if (multipliers.every(item => item === multipliers[0]) && multipliers.length > 1) {
        index = j;
      }
      result.push([...multipliers]);
      const findItem = multipliers.find(item => factors(fibonacci(n)).has(item));
      let k = -1;
      while (k < multipliers.length) {
        k = multipliers.indexOf(findItem, k + 1);
        if (k !== -1) {
          multipliers[k] = factors(fibonacci(n)).get(findItem);
          result.push([...multipliers]);
        } else {
          break;
        }
      }
    }
    index++;
  }

  return result.length;
};