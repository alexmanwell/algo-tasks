// https://www.codewars.com/kata/5202ef17a402dd033c000009

const titleCase = (title, minorWords) => {
  let minor = [];
  if (minorWords) {
    minor = minorWords.split(" ").map(word => word.toLowerCase());
  }

  return title
    .split(" ")
    .map(word => word.toLowerCase())
    .map((word, index, words) => {
      return index === 0 ? words[index].split("").map((letter, index) => {
          return index === 0 ? letter.toUpperCase() : letter
        }).join("")
        : (minor.find(w => w === word)) ? word : word.split("").map((letter, index) => {
          return index === 0 ? letter.toUpperCase() : letter
        }).join("")
    }).join(" ");
};