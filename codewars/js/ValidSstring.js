// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196

const validWord = (map, word) => {
  return new RegExp(`^(?:${map.join('|')})+$`).test(word);
};