// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

const race = (v1, v2, g) => {
  const result = Math.floor(3600 * g / (v2 - v1));
  return (v2 <= v1)
    ? null
    : [
      Math.floor(result / 3600),
      Math.floor(result / 60) % 60,
      result % 60
    ];
};