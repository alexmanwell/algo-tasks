// https://www.codewars.com/kata/57f8ff867a28db569e000c4a

const kebabize = (str) => {
  const words = str.split(new RegExp(/(?=[A-Z])/));
  return words
    .map(word =>
      /\d/.test(word) ? word.split(/\d/).join("") : word)
    .map(word => word.toLowerCase())
    .join("-");
};