// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

const isSquare = (n) => {
  if (n < 0) {
    return false;
  }

  for (let i = 0; i <= parseInt(n / 2) + 1; i++) {
    if (i * i === n) {
      return true;
    }
  }

  return false;
};