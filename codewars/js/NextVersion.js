// https://www.codewars.com/kata/56c0ca8c6d88fdb61b000f06

const nextVersion = (version) => {
  const numbers = version.split(".").map(Number);
  let tail = 1;
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbers[i] += tail;
    tail = 0;
    if (numbers[i] === 10) {
      numbers[i] = 0;
      tail = 1;
    }
  }
  numbers[0] = numbers[0] === 0 && tail ? 10 : numbers[0];

  return numbers.join(".");
};