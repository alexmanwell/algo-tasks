// https://leetcode.com/problems/lemonade-change

/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
  let amountFiveBill = 0;
  let amountTenBill = 0;
  for (let bill of bills) {
    if (bill === 5) {
      ++amountFiveBill;
    } else if (bill === 10) {
      ++amountTenBill;
      --amountFiveBill;
    } else {
      if (amountTenBill > 0) {
        --amountTenBill;
        if (amountFiveBill > 0) {
          --amountFiveBill;
        } else {
          return false;
        }
      } else {
        amountFiveBill -= 3;
        if (amountFiveBill < 0) {
          return false;
        }
      }
    }

    if (amountFiveBill < 0) {
      return false;
    }
    if (amountTenBill < 0) {
      return false;
    }
  }

  return true;
};