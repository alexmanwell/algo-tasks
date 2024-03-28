// https://www.codewars.com/kata/56f3ed90de254a2ca7000e20

const findDiscounted = (prices) => {
  prices = prices.split(" ").map(Number);
  let discounts = [];
  for (let i = 0; i < prices.length; i++) {
    let cost = -1;
    if (prices[i] !== null) {
      cost = Math.ceil(prices[i] * 4 / 3);
    }
    const index = prices.indexOf(cost);
    if (i !== index && index !== -1) {
      prices[index] = null;
      discounts.push(prices[i]);
    }
  }

  return discounts ? discounts.join(" ") : 0;
};