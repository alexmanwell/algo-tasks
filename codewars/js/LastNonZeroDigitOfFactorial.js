// https://www.codewars.com/kata/5f79b90c5acfd3003364a337
// TODO: done this solutions. But all tests don't pass.

const lastDigit = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    while (result % 10 === 0) {
      result /= 10;
    }
    result %= 10;
  }

  return result;
};

console.log(lastDigit(1));
console.log(lastDigit(2));
console.log(lastDigit(3));
console.log(lastDigit(4));
console.log(lastDigit(5));
console.log(lastDigit(6));
console.log(lastDigit(7));
console.log(lastDigit(8));
console.log(lastDigit(9));
console.log(lastDigit(10));
console.log(lastDigit(11));
console.log(lastDigit(12));
console.log(lastDigit(20));
console.log(lastDigit(387), 2);
