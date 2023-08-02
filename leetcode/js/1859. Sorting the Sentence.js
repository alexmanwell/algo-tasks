// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} sentence
 * @return {string}
 */
const sortSentence = (sentence) => {
  const words = sentence.split(" ");
  const result = new Array(words.length);
  for (let word of words) {
    const index = word.charAt(word.length - 1);
    result[index] = word.slice(0, word.length - 1);
  }

  return result.join(" ").trim();
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));