// https://www.codewars.com/kata/5840107b6fcbf56d2000010b

const palindromization = (values, n) => {
  if (values === "" || n < 2) {
    return String("Error!");
  }
  let halfPalindrome = "";
  let size = Math.ceil(n / 2);
  for (let i = 0; i < size; i++) {
    halfPalindrome += values[i % values.length];
  }
  size = n % 2 === 0 ? size : size - 1;

  return halfPalindrome +
    halfPalindrome
      .substring(0, size)
      .split("")
      .reverse()
      .join("");
};