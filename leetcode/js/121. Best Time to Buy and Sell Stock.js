// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  if (prices.length === 1) {
    return 0;
  }

  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i - 1]);
    profit = Math.max(prices[i] - min, profit);
  }

  return profit;
};