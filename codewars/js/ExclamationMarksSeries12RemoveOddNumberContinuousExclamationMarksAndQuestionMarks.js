// https://www.codewars.com/kata/57fb0f3f9610ced69000023c

const isOddItems = (s) => {
  return s.length > 1 && s.length % 2 !== 0;
};

const remove = (s) => {
  let result = [];
  let index = 0;
  while (index < s.length) {
    let substr = "";
    const sign = s[index];
    while (s[index] === sign) {
      substr += s[index];
      ++index;
    }
    substr = isOddItems(substr) ? "" : substr;
    const size = result.length;
    if (size && result[size - 1][0] === sign) {
      substr = result.pop() + substr;
    }
    substr = isOddItems(substr) ? "" : substr;
    if (substr.length) {
      result.push(substr);
    }
  }

  return result.join("");
};