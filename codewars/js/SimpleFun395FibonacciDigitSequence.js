// https://www.codewars.com/kata/5bc555bb62a4cec849000047

const find = (a, b, n) => {
  let seq = a.toString() + b.toString();
  n = Number(n.toString().slice(-4));
  while (seq.length <= n) {
    seq += (+seq[seq.length - 1] + +seq[seq.length - 2]).toString();
  }

  return +seq.charAt(n);
}