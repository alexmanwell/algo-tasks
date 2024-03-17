// https://www.codewars.com/kata/566d5e2e57d8fae53c00000c

const getCard = () => {
  const BINGO = "BINGO".split("");
  const STEP = 15;
  let result = [];
  for (const letter of BINGO) {
    let length = BINGO.length;
    if (letter === "N") {
      length = BINGO.length - 1;
    }
    const k = BINGO.indexOf(letter);
    let index = 0;
    while (index < length) {
      const min = k * STEP + 1;
      const max = (k + 1) * STEP;
      const number = Math.floor(Math.random() * (max - min) + min);
      if (!result.includes(letter + number)) {
        result.push(letter + number);
        index++;
      }
    }
  }

  return result;
};