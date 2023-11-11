// https://www.codewars.com/kata/61419e8f0d12db000792d21a
// TODO: done this problem. But it doesn't pass all tests. Tests don't pass for large polynomial (>40).

const generatePascalTriangle = (n) => {
  const triangle = new Array(n).fill([]);
  let count = 0;
  while (count <= n) {
    const polynomial = [1];
    for (let i = 0; i <= count; i++) {
      let k = 1;
      for (let j = 1; j <= count; j++) {
        k = Math.floor(k * (count - j + 1) / j);
        polynomial[j] = Math.floor(k);
      }
    }
    triangle[count] = polynomial;
    count++;
  }

  return triangle;
};

const buildPolynomialAAndB = (polynomial) => {
  let result = "";
  const size = polynomial.length - 1;
  for (let i = 0; i <= size; i++) {
    const degreeA = size - i;
    const degreeB = i;
    result += polynomial[i] > 1 ? polynomial[i] : "";
    result += degreeA > 1 ? "a^" + degreeA : degreeA === 1 ? "a" : "";
    result += degreeB > 1 ? "b^" + degreeB : degreeB === 1 ? "b" : "";
    result += i !== size ? "+" : "";
  }

  return result;
};

const formula = (n) => {
  const negative = n < 0;
  n = Math.abs(n);
  const polynomial = generatePascalTriangle(n)[n];
  const result = buildPolynomialAAndB(polynomial);

  return n === 0 ? 1 : negative ? "1/(" + result + ")" : result;
};