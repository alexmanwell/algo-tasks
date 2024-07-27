// https://leetcode.com/problems/buy-two-chocolates

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = (prices, money) => {
  prices = prices.sort((a, b) => a - b);
  if (prices[0] > money) {
    return money;
  }
  let chocolates = [];
  let copiedMoney = money;
  for (const price of prices) {
    if (chocolates.length === 2) {
      break;
    }
    if (copiedMoney - price >= 0) {
      chocolates.push(price);
      copiedMoney -= price;
    } else {
      break;
    }
  }

  return chocolates.length === 2
    ? money - chocolates.reduce((a, b) => a + b)
    : copiedMoney + chocolates[0];
};