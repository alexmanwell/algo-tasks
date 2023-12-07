// https://www.codewars.com/kata/5830e7feff1a3ce8d4000062

const elipse = (a, b) => {
  const area = Number(Math.PI * a * b).toFixed(1);
  const perimeter = Number(
    Math.PI * (3 / 2 * (a + b) - Math.sqrt(a * b))
  ).toFixed(1);

  return `Area: ${area}, perimeter: ${perimeter}`
};