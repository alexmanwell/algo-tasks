// https://www.codewars.com/kata/5680781b6b7c2be860000036

const isVowel = (c) => {
  return ['a', 'e', 'i', 'u', 'y', 'o'].indexOf(c.toLowerCase()) !== -1;
};

const vowelIndices = (word) => {
  return word.split("").reduce((args, c, index) => {
    return isVowel(c) ? [...args, index + 1] : [...args];
  }, []);
};