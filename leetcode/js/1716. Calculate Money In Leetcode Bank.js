// https://leetcode.com/problems/calculate-money-in-leetcode-bank

/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = n => {
  let sum = 0;
  let monday = 0;
  let nextDay = 0;
  const AMOUNT_WEEK_DAYS = 7;
  for (let i = 1; i <= n; i++) {
    if (i % AMOUNT_WEEK_DAYS === 1) {
      ++monday;
      nextDay = monday;
      sum += monday;
    } else {
      sum += ++nextDay;
    }
  }

  return sum;
};