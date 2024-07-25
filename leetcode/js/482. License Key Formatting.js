// https://leetcode.com/problems/license-key-formatting

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
  const keys = s.split("-").join("").toUpperCase();
  let licenseKeys = [];
  let index = keys.length - 1;
  let count = 0;
  let partKey = new Array(k).fill(null);
  while (index >= 0) {
    if (count === k) {
      licenseKeys.unshift(partKey.reverse().join(""));
      count = 0;
      partKey = new Array(k).fill(null);
    }
    partKey[count] = keys[index];
    --index;
    ++count;
  }
  licenseKeys.unshift(partKey.reverse().join(""));

  return licenseKeys.join("-");
};