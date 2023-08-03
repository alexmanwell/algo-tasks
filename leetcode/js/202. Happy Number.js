// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  let number = n;
  const store = [];
  while (number !== 1) {
    store.push(number);
    let sum = 0;
    const digits = Array.from(String(number), Number);
    for (let num of digits) {
      sum += num * num;
    }
    number = sum;
    if (store.includes(sum)) {
      break;
    }
  }

  return number === 1;
};