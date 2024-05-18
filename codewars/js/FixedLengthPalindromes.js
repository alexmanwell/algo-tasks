// https://www.codewars.com/kata/59f0ee47a5e12962cb0000bf

const palin = (a, b) => {
  let halfDigits = Math.ceil(a / 2);
  let halfPalindrome = "1";
  for (let i = 0; i < halfDigits - 1; i++) {
    halfPalindrome += "0";
  }
  halfPalindrome = Number(halfPalindrome);
  let count = 0;
  while (count < b - 1) {
    ++count;
    ++halfPalindrome;
  }
  halfDigits = Math.floor(a / 2);
  let tailPalindrome =
    halfPalindrome
      .toString()
      .split("")
      .slice(0, halfDigits)
      .reverse()
      .join("");

  return +(halfPalindrome.toString() + tailPalindrome);
};