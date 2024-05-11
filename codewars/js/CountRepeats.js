// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

const countRepeats = (str) => {
  let count = 0;
  let index = 0;
  while (index < str.length) {
    while (str[index] === str[index + 1]) {
      ++index;
      ++count;
    }
    ++index;
  }

  return count;
};