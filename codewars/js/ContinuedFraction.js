// https://www.codewars.com/kata/660e5631b673a8004b71d208

const continuedFraction = (numerator, denominator) => {
  let result = [];
  if (numerator === 0) {
    return [];
  }
  if (numerator < denominator) {
    result.push(+0);
  }
  while (numerator > 0) {
    if (numerator >= denominator) {
      const div = Math.floor(numerator / denominator);
      if (div === Infinity) {
        break;
      }
      numerator = numerator - div * denominator;
      result.push(div);
    } else {
      const div = Math.floor(denominator / numerator);
      if (div === Infinity) {
        break;
      }
      denominator = denominator - div * numerator;
      result.push(div);
    }
  }

  return result;
};