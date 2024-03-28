// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

const beeramid = (bonus, price) => {
  let amount = bonus > 0 ? Math.floor(bonus / price) : 0;
  let level = 0;
  while (amount > 0) {
    level++;
    amount -= Math.pow(level + 1, 2);
  }

  return level;
};