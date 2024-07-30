// https://leetcode.com/problems/remove-letter-to-equalize-frequency

/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = (word) => {
  const frequencies = new Array(26).fill(0);
  for (const char of word) {
    frequencies[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; ++i) {
    if (frequencies[i]) {
      frequencies[i]--;
      let commonFrequency = 0;
      let hasFrequenciesEqual = true;
      for (const frequency of frequencies) {
        if (frequency === 0) {
          continue;
        }
        if (commonFrequency && frequency !== commonFrequency) {
          hasFrequenciesEqual = false;
          break;
        }
        commonFrequency = frequency;
      }

      if (hasFrequenciesEqual) {
        return true;
      }
      frequencies[i]++;
    }
  }

  return false;
};