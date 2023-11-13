// https://www.codewars.com/kata/578597a122542a7d24000018

const sumDigitsByPower = (n, pow) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + Math.pow(digit, pow), 0);
};

const isHappy = (n, pow) => {
  const set = new Set([n]);
  let next = n;
  while (n !== 1) {
    next = sumDigitsByPower(next, pow);
    if (set.has(next)) {
      break;
    }
    set.add(next);
  }

  let sequence = [...set];
  const index = sequence.indexOf(next);
  sequence = sequence.slice(index);
  sequence.push(next);

  return next !== 1 ? sequence : [1];
};