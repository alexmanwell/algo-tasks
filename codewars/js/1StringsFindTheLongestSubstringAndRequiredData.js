// https://www.codewars.com/kata/59167d51c63c18af32000055

const excludes = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split("");

const findLongestSubstr = (s) => {
  let index = 0;
  let result = [];
  while (index < s.length) {
    while (excludes.includes(s[index])) {
      index++;
    }
    while (s[index] !== s[index + 1]) {
      index++;
    }
    if (!s[index] || !s[index + 1]) {
      break;
    }
    const start = index;
    const char = s.codePointAt(index).toString();
    if (!excludes.includes(s[index])) {
      while (s[index] === s[index + 1]) {
        index++;
      }
    }
    const amount = index - start + 1;
    const item = [char, amount, [start, index]];
    if (!result.length) {
      result.push(item)
    }
    if (result[0][1] < amount) {
      result.shift();
      result.push(item);
    }
  }

  return result[0];
};