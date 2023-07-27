// https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b

/**
 * @return {number}
 */
const F = (n) => {
  return n === 0 ? 1 : n - M(F(n - 1));
};

/**
 * @return {number}
 */
const M = (n) => {
  return n === 0 ? 0 : n - F(M(n - 1));
};