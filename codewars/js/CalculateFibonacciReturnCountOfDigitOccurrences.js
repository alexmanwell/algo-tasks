// https://www.codewars.com/kata/5779f894ec8832493f00002d

const fibSequence = (n) => {
  let [current, next] = [0n, 1n];
  for (let i = 2; i <= n; i++) {
    [next, current] = [current + next, next];
  }

  return next;
};

const countDigits = (digits) => {
  let dictionary = {};
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    dictionary[digit] = (dictionary[digit])
      ? dictionary[digit] + 1
      : 1;
  }

  return dictionary;
};

const fibDigits = (n) => {
  const member = fibSequence(n);
  const digits = member
    .toString()
    .split("")
    .map(BigInt);

  return Object.entries(countDigits(digits))
    .map(([key, value]) => [value, +key])
    .sort(([k1, v1], [k2, v2]) => k2 - k1 || v2 - v1);
};