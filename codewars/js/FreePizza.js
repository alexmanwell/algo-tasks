// https://www.codewars.com/kata/595910299197d929a10005ae

const filtered = (arr, predicate) => {
  return arr.filter(v => v >= predicate);
};

const hasMinOrders = (arr, amount) => {
  return arr.length >= amount;
};

const pizzaRewards = (customers, minOrders, minPrice) => {
  let result = [];
  for (const [customer, orders] of Object.entries(customers)) {
    if (hasMinOrders(filtered(orders, minPrice), minOrders)) {
      result.push(customer);
    }
  }

  return result;
};