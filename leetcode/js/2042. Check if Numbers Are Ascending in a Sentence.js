// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence

/**
 * @param {string} sentence
 * @return {boolean}
 */
const areNumbersAscending = (sentence) => {
  const numbers = sentence.split(" ").filter((word) => {
    return Number(word) === parseInt(word);
  });

  for (let i = 0; i < numbers.length - 1; i++) {
    if (parseInt(numbers[i]) >= parseInt(numbers[i + 1])) {
      return false;
    }
  }

  return true;
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
console.log(areNumbersAscending("hello world 5 x 5"));
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"));