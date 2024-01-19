// https://www.codewars.com/kata/5a057ec846d843c81a0000ad

const cycle = (n) => {
  if (n % 2 === 0 || n % 5 === 0) {
    return -1;
  }
  let c = 0;
  let result = 1;
  while (++c) {
    result = result * 10 % n;
    if (result === 1) {
      return c;
    }
  }
};