// https://www.codewars.com/kata/5e4a1a43698ef0002d2a1f73
// TODO: done task. But this solution isn't good. Don't pass test next(998) and large numbers, more than max integer value.

const findValidDivisible = (n) => {
  let divisible = 1;
  const size = n.toString().length;
  while (divisible <= size) {
    const number = Number(n.toString().substring(0, divisible));
    if (number % divisible !== 0) {
      break;
    }
    divisible++;
  }

  return divisible > size ? divisible - 1 : divisible;
};

const next = (n) => {
  let number = n.toString();
  let divisible = findValidDivisible(n);
  while (divisible <= number.length) {
    let candidate = Number(number.toString().substring(0, divisible));
    for (let i = candidate; i < Number.MAX_SAFE_INTEGER; i++) {
      if (i % divisible === 0 && Number(i) > candidate) {
        number = i + number.toString().substring(divisible);
        divisible++;
        break;
      }
    }
  }

  return BigInt(number);
};