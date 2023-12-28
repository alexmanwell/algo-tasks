// https://www.codewars.com/kata/53d8aea2e584dd9e67000ae6

const multipliers = (n) => {
  let result = [];
  let divisor = 2;
  while (n > 1) {
    if (n % divisor === 0) {
      result.push(divisor);
    } else {
      divisor++;
    }
    n /= divisor;
  }

  if (new Set(result).size === 1) {
    return result.length % 2 === 0
      ? result.slice(0, result.length / 2).reduce((acc, n) => acc * n, 1)
      : undefined;
  } else {
    return undefined;
  }
};

const solveQuadratic = (a, b, c) => {
  const d = b * b - 4 * a * c;

  if (d > 0) {
    const determinant = multipliers(d);
    if (determinant) {
      return [
        (-b + determinant) / (2 * a),
        (-b - determinant) / (2 * a)
      ]
    } else {
      const determinant = Math.sqrt(d);
      return [
        (-b + determinant) / (2 * a),
        (-b - determinant) / (2 * a)
      ];
    }
  } else if (d === 0) {
    return [-b / (2 * a)];
  } else {
    return undefined;
  }
};