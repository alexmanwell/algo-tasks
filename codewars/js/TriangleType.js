// https://www.codewars.com/kata/53907ac3cd51b69f790006c5

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
const triangleType = (a, b, c) => {
  const max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) {
    return 0
  }
  if (2 * max * max === a * a + b * b + c * c) {
    return 2
  }
  if (2 * max * max > a * a + b * b + c * c) {
    return 3
  }

  return 1;
};