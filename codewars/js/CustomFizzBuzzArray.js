// https://www.codewars.com/kata/5355a811a93a501adf000ab7

const fizzBuzzCustom = (stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) => {
  const sequence = new Array(100).fill(-1);
  for (let i = 0; i < sequence.length; i++) {
    const num = i + 1;
    if (num % (numOne * numTwo) === 0) {
      sequence[i] = stringOne + stringTwo;
    } else if (num % numTwo === 0) {
      sequence[i] = stringTwo;
    } else if (num % numOne === 0) {
      sequence[i] = stringOne;
    } else {
      sequence[i] = num;
    }
  }

  return sequence;
};