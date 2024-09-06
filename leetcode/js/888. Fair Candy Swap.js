// https://leetcode.com/problems/fair-candy-swap

/**
 * @param {number[]} aliceCandiesList
 * @param {number[]} bobCandiesList
 * @return {number[]}
 */
const fairCandySwap = (aliceCandiesList, bobCandiesList) => {
  const halfDiff = (
    aliceCandiesList.reduce((a, b) => a + b, 0)
    - bobCandiesList.reduce((a, b) => a + b, 0)
  ) / 2;
  let set = new Set(bobCandiesList);
  let result = [];
  for (const aliceCandy of aliceCandiesList) {
    const bobCandy = aliceCandy - halfDiff;
    if (set.has(bobCandy)) {
      result = [aliceCandy, bobCandy];
      break;
    }
  }

  return result;
};