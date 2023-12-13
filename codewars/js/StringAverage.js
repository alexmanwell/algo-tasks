// https://www.codewars.com/kata/5966847f4025872c7d00015b

const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

const averageString = (str) => {
  if (str === "") {
    return "n/a";
  }

  const list = str.split(" ");
  let sum = 0;
  for (const item of list) {
    if (!NUMBERS.includes(item)) {
      return "n/a"
    }
    sum += NUMBERS.indexOf(item);
  }
  const average = Math.floor(sum / list.length);

  return NUMBERS[average];
};