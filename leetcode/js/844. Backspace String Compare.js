// https://leetcode.com/problems/backspace-string-compare

const removeExtraLetters = (arr) => {
  let index = arr.length - 1;
  let count = 0;
  while (index >= 0) {
    while (arr[index] === "#") {
      arr[index] = "";
      ++count;
      --index;
    }
    while (count > 0 && /[a-z]/.test(arr[index])) {
      arr[index] = "";
      --index;
      --count;
    }
    if (/[a-z]/.test(arr[index])) {
      --index;
    }
  }

  return arr.filter(item => item).join("");
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
  return removeExtraLetters([...s]) === removeExtraLetters([...t]);
};