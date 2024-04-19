// https://leetcode.com/problems/split-with-minimum-sum/description/

/**
 * @param {number} num
 * @return {number}
 */
const splitNum = (num) => {
  const arr = num.toString().split("").sort((a,b ) => +a - +b);
  let firstItem = "";
  let secondItem = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      firstItem += arr[i];
    } else {
      secondItem += arr[i];
    }
  }

  return +firstItem + +secondItem;
};