// https://www.codewars.com/kata/5ae326342f8cbc72220000d2

const digitMatch = (value) => {
  return /\d/.test(value);
};

const stringExpansion = (s) => {
  const value = s.match(/[0-9][a-zA-Z]+|[a-zA-Z]+/gi);
  if (value === null) {
    return "";
  }

  let result = "";
  for (let i = 0; i < value.length; i++) {
    const candidate = value[i][0];
    const number = digitMatch(candidate) ? candidate : 1;
    const letters = digitMatch(candidate) ? value[i].slice(1) : value[i];
    for (let letter of letters) {
      result += letter.repeat(number);
    }
  }

  return result;
};