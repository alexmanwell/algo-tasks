// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

const foldArray = (numbers, runs) => {
  while (runs > 0) {
    let temp = [];
    for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
      temp.push(numbers[i] + numbers[numbers.length - 1 - i])
    }

    if (numbers.length % 2 === 1) {
      temp.push(numbers[parseInt(numbers.length / 2)]);
    }
    numbers = [...temp];
    runs--;
  }
  return numbers;
};