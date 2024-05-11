// https://www.codewars.com/kata/5491689aff74b9b292000334

const f = (s) => {
  let subStr = s[0];
  let count = 0;
  let size = 1;
  let index = 0;
  while (index < s.length - size) {
    const current = s.substring(index, index + size);
    const next = s.substring(index + size, index + 2 * size);
    if (current === next) {
      index += size;
      ++count;
    }
    if (current !== next) {
      ++size;
      count = 0;
      index = 0;
      subStr = s.substring(0, size);
    }
  }

  return [subStr, count + 1];
};