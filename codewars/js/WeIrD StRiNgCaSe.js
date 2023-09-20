// https://www.codewars.com/kata/52b757663a95b11b3d00062d

const toWeirdCase = (sentence) => {
  return sentence.split(" ").map((word) => {
    return word.split("").map((letter, index) => {
      return index % 2 !== 0 ? letter : letter.toUpperCase()
    }).join("")
  }).join(" ");
};