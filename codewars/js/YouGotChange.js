// https://www.codewars.com/kata/5966f6343c0702d1dc00004c

const BILLS = [1, 5, 10, 20, 50, 100];

const giveChange = (amount) => {
  let result = [];
  for (let i = BILLS.length - 1; i >= 0; i--) {
    const multiple = parseInt(amount / BILLS[i]);
    result.unshift(multiple);
    amount -= multiple * BILLS[i];
  }

  return result;
};