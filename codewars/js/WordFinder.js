// https://www.codewars.com/kata/525d8c20915a399b5600087b

class Dictionary {

  constructor(words) {
    this.words = words;
  }

  getMatchingWords(pattern) {
    let result = [];
    for (let word of this.words) {
      let isMatch = true;
      if (word.length !== pattern.length) {
        isMatch = false;
      } else {
        for (let i = 0; i < word.length; i++) {
          if (pattern[i] !== '?' && pattern[i] !== word[i]) {
            isMatch = false;
          }
        }

      }
      if (isMatch) {
        result.push(word);
      }
    }

    return result;
  }
}