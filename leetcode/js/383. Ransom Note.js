// https://leetcode.com/problems/ransom-note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  let list = magazine.split("");
  for (let c of ransomNote) {
    const index = list.indexOf(c);
    if (index === -1) {
      return false;
    }
    list[index] = "";
  }

  return true;
};