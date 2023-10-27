// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

const compose = (...functions) => (arg) => {
  return functions.reduceRight((acc, cur) => {
    return Array.isArray(acc) ? cur(...acc) : cur(acc)
  }, arg)
};