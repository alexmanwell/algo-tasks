// https://www.codewars.com/kata/52a0f488852a85c723000aca

const reverse = (n) => {
  return n
    .toString()
    .split("")
    .reverse()
    .join("");
}

const isPalindrome = (n) => {
  return n.toString() !== reverse(n);
}

const palindromize = (number) => {
  let count = 0;
  let result = number;
  while (isPalindrome(result)) {
    result += +reverse(result);
    count++;
  }

  return `${count} ${result}`;
};