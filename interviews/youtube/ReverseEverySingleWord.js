// https://www.youtube.com/watch?v=L2RPLVLKiAY
// timeline position 00:07:00 реверс слов в строке, но оставить позицию этих строк на месте;

const reverseString = (str) => {
  return str.split("").reverse().join("")
};

const reverseEachWords = (sentence) => {
  const words = sentence.split(" ");
  const result = [];
  words.forEach(word => {
    result.push(reverseString(word));
  });

  return result.join(" ");
};