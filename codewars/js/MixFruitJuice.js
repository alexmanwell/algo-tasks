// https://www.codewars.com/kata/5905871c00881d0e85000015

const REGULAR_PRICE = 5;
const SPECIAL_PRICE = 7;
const EXTRA_SPECIAL_PRICE = 9;

const REGULAR_FRUITS = [["banana", "orange", "apple", "lemon", "grapes"], REGULAR_PRICE];
const SPECIAL_FRUITS = [["avocado", "strawberry", "mango"], SPECIAL_PRICE];

const mixFruit = (arr) => {
  let sum = 0;
  for (let fruit of arr) {
    fruit = fruit.toLowerCase();
    if (REGULAR_FRUITS[0].includes(fruit)) {
      sum += REGULAR_FRUITS[1];
    } else if (SPECIAL_FRUITS[0].includes(fruit)) {
      sum += SPECIAL_FRUITS[1];
    } else {
      sum += EXTRA_SPECIAL_PRICE;
    }
  }

  return Math.round(sum / arr.length);
};