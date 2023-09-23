// https://www.codewars.com/kata/530e15517bc88ac656000716

const SHIFT_ROT_13 = 13;
const LETTER_OF_MIDDLE_ABC = "m";

const rot13 = (message) => {
  return message.replace(/[a-z]/giu, (letter) => {
    return String.fromCharCode(
      letter.charCodeAt()
      + ((letter.toLowerCase() <= LETTER_OF_MIDDLE_ABC)
        ? SHIFT_ROT_13
        : -SHIFT_ROT_13
      ));
  });
};