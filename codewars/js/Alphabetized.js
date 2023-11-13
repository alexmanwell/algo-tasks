// https://www.codewars.com/kata/5970df092ef474680a0000c9

const compare = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

const alphabetized = (s) => {
  return !s.match(/\D/g) ? "" :
    (s.match(/([a-zA-Z]+)/g) || [])
      .join("")
      .split("")
      .sort(compare)
      .join("");
};