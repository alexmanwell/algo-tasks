// https://www.codewars.com/kata/595bbea8a930ac0b91000130

const calculate1RM = (w, r) => {
  const a = w * (1 + r / 30);
  const b = (100 * w) / (101.3 - 2.67123 * r);
  const c = w * (r ** 0.1);
  if (r === 0 || w === 0) {
    return 0;
  }
  if (r === 1) {
    return w;
  }

  return Math.round(Math.max(a, b, c))
};