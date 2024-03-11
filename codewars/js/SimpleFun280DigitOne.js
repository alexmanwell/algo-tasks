// https://www.codewars.com/kata/5919575c5ffc3080490000b9
// TODO: don't pass all tests. For Example 3729 must be 36 digits, but my solution compute 39 digits.

const subtract = (a, b) => {
  return Math.abs(a - b);
};

const numberOfConsistEachOnes = (length) => {
  return +(new Array(length).fill(1).join(""));
};

const sumDigits = (number) => {
  return number
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, n) =>
      acc + n
    );
};

const digitOne = (n) => {
  let length = n.toString().length;
  const candidateA = numberOfConsistEachOnes(length + 1);
  const a = sumDigits(subtract(candidateA, n));

  const candidateB = numberOfConsistEachOnes(length);
  const b = sumDigits(subtract(candidateB, n));

  let candidate = a >= b ? candidateB : candidateA;

  let digits = [candidate];
  n = Math.abs(candidate - n);
  while (n > 0) {
    candidate = numberOfConsistEachOnes(n.toString().length);
    digits.push(candidate);
    n = Math.abs(n - candidate);
  }

  return digits
    .reduce((acc, n) =>
      acc +
      n
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, n) => acc + n),
      0);
};

console.log(digitOne(121), 6, "111 + 11 - 1 = 121");
console.log(digitOne(6), 6, "1 + 1 + 1 + 1 + 1 + 1 = 6");
console.log(digitOne(7), 6, "11 - 1 - 1 - 1 - 1 = 7");
console.log(digitOne(11), 2, "11 = 11");
console.log(digitOne(1000), 7, "1111 - 111 = 1000");
console.log(digitOne(666), 17, "1111 - 111 - 111 - 111 - 111 - 1 = 666");
console.log(digitOne(61), 16, "11 + 11 + 11 + 11 + 11 + 1 + 1 + 1 + 1 + 1 + 1 = 61");
console.log(digitOne(0), 2, "1 - 1 = 0");
console.log(digitOne(6090), 40, "11111 - 1111 - 1111 - 1111 - 1111 - 111 - 111 - 111 - 111 - 111 - 11 - 11 = 6090");
console.log(digitOne(3729), 36);
