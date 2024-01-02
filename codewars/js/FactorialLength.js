// https://www.codewars.com/kata/59f34ec5a01431ab7600005a

const count = (n) => {
  let digits = 0;
  for (let i = 2; i <= n; i++) {
    digits += Math.log10(i);
  }

  return Math.floor(digits) + 1;
};