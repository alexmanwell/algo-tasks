// https://leetcode.com/problems/find-the-encrypted-string

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const getEncryptedString = (s, k) => {
  if (s.split("").every(c => c === s[0])) {
    return s;
  }

  const size = s.length;
  let result = "";
  for (let i = 0; i < size; i++) {
    result += s[(k + i) % size];
  }

  return result;
};