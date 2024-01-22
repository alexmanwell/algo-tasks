// https://www.codewars.com/kata/525a3d6b85a9a47fcf00055a

const calculateHypotenuse = (a, b) => {
  if (a !== +a || b !== +b || a <= 0 || b <= 0) {
    throw new Error(`${a} and ${b} must be integer and more than 0`);
  }

  return Math.sqrt(a ** 2 + b ** 2).toFixed(3);
};