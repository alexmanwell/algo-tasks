// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

const INCREMENT = "i";
const DECREMENT = "d";
const SQUARE = "s";
const OUTPUT = "o";

const parse = (data) => {
  let currentValue = 0;
  const result = [];
  const commands = data.split("");
  commands.forEach((command) => {
    switch (command) {
      case INCREMENT:
        currentValue++;
        break;
      case DECREMENT:
        currentValue--;
        break;
      case SQUARE:
        currentValue *= currentValue;
        break;
      case OUTPUT:
        result.push(currentValue);
        break;
      default:
        break;
    }
  });

  return result;
};