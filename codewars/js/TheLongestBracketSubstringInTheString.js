// https://www.codewars.com/kata/584c3e45710dca21be000088

const findLongest = (str) => {
  let max = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      max = Math.max(max, 2 * left);
    } else if (right > left) {
      left = 0;
      right = 0;
    }
  }
  left = 0;
  right = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      max = Math.max(max, 2 * left);
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }

  return max;
};