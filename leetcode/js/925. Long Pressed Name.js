// https://leetcode.com/problems/long-pressed-name

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = (name, typed) => {
  let typedIndex = 0;
  let nameIndex = 0;
  while (nameIndex < name.length) {
    let countLetterName = 1;
    let countLetterTyped = 0;
    const letter = name[nameIndex];
    while (letter === name[nameIndex + 1]) {
      ++nameIndex;
      ++countLetterName;
    }
    while (letter === typed[typedIndex]) {
      ++typedIndex;
      ++countLetterTyped;
    }
    if (countLetterName > countLetterTyped) {
      return false;
    }
    ++nameIndex;
  }

  return typedIndex >= typed.length;
};