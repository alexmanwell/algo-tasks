// https://www.codewars.com/kata/5902bc48378a926538000044

const distSameLetter = (s) => {
  let markedLetters = [];
  let result = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!markedLetters.includes(s[i])) {
      const lastIndex = s.lastIndexOf(s[i]);
      const diff = lastIndex - i + 1;
      result.set(s[i], diff);
      markedLetters.push(s[i]);
    }
  }

  return [...result.entries()]
    .sort(([k1, v1], [k2, v2]) => v2 - v1)[0]
    .join("");
};