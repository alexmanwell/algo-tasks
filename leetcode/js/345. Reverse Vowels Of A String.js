// https://leetcode.com/problems/reverse-vowels-of-a-string

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const chars = s.split("");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && !VOWELS.includes(chars[l])) {
      ++l;
    }
    while (l < r && !VOWELS.includes(chars[r])) {
      --r;
    }
    [chars[l], chars[r]] = [chars[r], chars[l]];
    ++l;
    --r;
  }

  return chars.join("");
};