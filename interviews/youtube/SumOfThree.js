// https://www.youtube.com/watch?v=uDd4-itcA2s
// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (numbers) => {
  numbers.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }

    let start = i + 1;
    let end = numbers.length - 1;
    while (start < end) {
      const sum = numbers[i] + numbers[start] + numbers[end];
      if (sum === 0) {
        result.push([numbers[i], numbers[start], numbers[end]]);
        while (numbers[start] === numbers[start + 1]) {
          start++;
        }
        while (numbers[end] === numbers[end + 1]) {
          start--;
        }
        start++;
        end--;
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }

  return numbers.length > 2 ? result : [];
};