// https://www.codewars.com/kata/5848565e273af816fb000449

const encryptThis = (text) => {
  return text
    .split(" ")
    .map(word => {
      return word.length < 3
        ? word.charCodeAt(0) + word.charAt(1)
        : word.charCodeAt(0) +
          word.charAt(word.length - 1) +
          word.slice(2, word.length - 1) +
          word.charAt(1);
    })
    .join(" ");
};