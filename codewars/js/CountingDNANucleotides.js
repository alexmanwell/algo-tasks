// https://www.codewars.com/kata/52e84c460d83dd96e50000dd

const getCountedNucleotides = (genCode) => {
  let result = {A: 0, C: 0, G: 0, T: 0};
  for (let c of genCode) {
    c = c.toUpperCase();
    result[c] = (result[c] || 0) + 1;
  }

  return result;
};