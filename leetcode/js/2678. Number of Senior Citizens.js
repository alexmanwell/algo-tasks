// https://leetcode.com/problems/number-of-senior-citizens

/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = (details) => {
  let count = 0;
  for (const detail of details) {
    const age = detail.substring(11, 13);
    if (age > 60) {
      ++count;
    }
  }

  return count;
};