// https://leetcode.com/problems/license-key-formatting

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {
  const keys = s.split("-").join("").toUpperCase();
  const partKeySize = Math.ceil(keys.length / k);
  let partKeyIndex = partKeySize - 1;
  let licenseKeys = new Array(partKeySize);
  let index = keys.length - 1;
  let count = 0;
  let partKey = new Array(k).fill(undefined);
  while (index >= 0) {
    if (count === k) {
      licenseKeys[partKeyIndex] = (partKey);
      --partKeyIndex;
      count = 0;
      partKey = new Array(k).fill(undefined);
    }
    partKey[count] = keys[index];
    --index;
    ++count;
  }
  licenseKeys[partKeyIndex] = partKey;

  return licenseKeys.map(key => key.reverse().join("")).join("-");
};