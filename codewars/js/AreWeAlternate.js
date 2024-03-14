// https://www.codewars.com/kata/59325dc15dbb44b2440000af

const isAlt = (word) => {
  const vowels = new RegExp(/[aeiou]/);
  return word.split('').every((v, i) => {
    if (vowels.test(word[0])) {
      if (i % 2 === 0 && vowels.test(v)) {
        return true;
      } else {
        return i % 2 !== 0 && !vowels.test(v);
      }
    }
    if (!vowels.test(word[0])) {
      if (i % 2 === 0 && !vowels.test(v)) {
        return true;
      } else {
        return i % 2 !== 0 && vowels.test(v);
      }
    }
  })
};