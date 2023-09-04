// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

const findMissingLetter = (array) => {
  let codeLetter = array[0].codePointAt(0);
  for(let letter of array) {
    if (letter.charCodeAt(0) !== codeLetter) {
      break;
    }
    codeLetter++;
  }

  return String.fromCharCode(codeLetter);
};