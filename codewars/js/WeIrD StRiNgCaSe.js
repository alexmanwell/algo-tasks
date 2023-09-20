// https://www.codewars.com/kata/52b757663a95b11b3d00062d

const toWeirdCase = (str) => {
  return str
    .split(" ")
    .map((letters) => {
      return letters
        .split("")
        .map((letter, index) =>
          (letter === " ") || (index % 2 !== 0)
            ? letter
            : letter.toUpperCase()
        )
        .join("")
    })
    .join(" ");
};