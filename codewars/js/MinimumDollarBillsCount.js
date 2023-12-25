// https://www.codewars.com/kata/58e4d3530e1018e155000058

const minimumBillCount = (value, bills) => {
  bills = bills.sort((a,b) => b - a);
  let count = 0;
  while (value > 0) {
    const bill = bills.shift();
    if (bill <= value) {
      let amount = parseInt(value / bill);
      value -= amount * bill;
      count += amount;
    }
  }

  return count;
};