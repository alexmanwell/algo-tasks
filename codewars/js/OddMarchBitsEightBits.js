// https://www.codewars.com/kata/58ee4db3e479611e6f000086

const bitMarch = (n) => {
  let bits = [];
  for (let i = 0; i < n; i++) {
    bits.push(1);
  }
  for (let i = 0; i < 8 - n; i++) {
    bits.unshift(0);
  }

  let arr = [];
  arr.push([...bits]);
  while (bits[0] !== 1) {
    bits.splice(0, 1);
    bits.push(0);
    arr.push([...bits]);
  }

  return n !== 0 ? arr : [];
};