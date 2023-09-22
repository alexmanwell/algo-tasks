// https://www.codewars.com/kata/587731fda577b3d1b0001196

String.prototype.camelCase = function () {
  return this.split(" ").map(word => {
    return word.split("").map((letter, index) => {
      return index === 0
        ? letter.toUpperCase()
        : letter.toLowerCase()
    }).join("")
  }).join("");
};