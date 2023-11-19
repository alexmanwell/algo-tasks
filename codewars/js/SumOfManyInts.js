// https://www.codewars.com/kata/54c2fc0552791928c9000517

const arithmeticProgression = (m) => {
  return (m - 1) * m / 2;
};

const f = (n, m) => {
  let sum = 0;
  while (n > 0) {
    m = n >= m ? m : n + 1;
    sum += arithmeticProgression(m);
    n -= m;
  }

  return sum;
};