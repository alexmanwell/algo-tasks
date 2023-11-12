// https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea

const stringParse = (str) => {
  if (typeof str !== "string") {
    return "Please enter a valid string";
  }
  const listOfLetters = str.match(/(.)\1*/g) || [];
  let result = "";
  for (let letters of listOfLetters) {
    result +=
      (letters.length > 2)
        ? letters.substring(0, 2) + "[" + letters.substring(2) + "]"
        : letters;
  }

  return result;
};