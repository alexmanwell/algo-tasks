// https://www.youtube.com/watch?v=L2RPLVLKiAY
// timeline position 00:35:37 найти в массиве из предложений предложение, в котором самое большое количество слов

const sentenceByMaxLengthWords = (sentences) => {
  let maxLength = 0;
  for (let sentence of sentences) {
    const length = sentence.split(" ").length;
    maxLength = (length > maxLength) ? length : maxLength;
  }

  return maxLength;
};