// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

const compose = (...fn) => (...args) => {
  return fn.reduceRight((acc, item) => {
    return Array.isArray(acc) ? item(...acc) : item(acc)
  }, args)
};