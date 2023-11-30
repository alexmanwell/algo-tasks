// https://www.codewars.com/kata/577e277c9fb2a5511c00001d

const VOWELS = "aeiouAEIOU";

const shift = (arr, shiftPos, direction) => {
  return direction ? shiftRight(arr, shiftPos) : shiftLeft(arr, shiftPos);
};

const shiftRight = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }

  return arr;
};

const shiftLeft = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }

  return arr;
};

const vowelShift = (text, n) => {
  if (text === null) {
    return null;
  }
  if (!text) {
    return "";
  }

  const shiftRight = n >= 0;
  let vowels = text.split("").filter(vowel => VOWELS.includes(vowel));
  vowels = shift(vowels, Math.abs(n), shiftRight);
  let index = 0;
  text = text.split("");
  for (let i = 0; i < text.length; i++) {
    if (VOWELS.includes(text[i])) {
      text[i] = vowels[index];
      index++;
    }
  }

  return text.join("");
};