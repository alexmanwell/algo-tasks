// https://www.codewars.com/kata/536c6b8749aa8b3c2600029a

const sortString = (string, ordering) => {
  const sortedString = new Array(new Set(string).size);
  let index = 0;
  let letters = string.toString().split("");
  for (let char of ordering) {
    letters = letters.filter(letter => letter !== char);
    for (let i = 0; i < (string.length - letters.length); i++) {
      sortedString[index] = char;
      index++;
    }
    string = letters;
  }

  return sortedString.concat(string).join("");
};