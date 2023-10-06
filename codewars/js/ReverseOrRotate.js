// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

const testCubes = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
const strReverse = s => [...s].reverse().join("");
const rotateLeft = s => s.slice(1) + s.slice(0, 1);


const revrot = (str, size) => {
  let len = str.length;
  if (size < 1 || !str || size > len) return "";
  if (len === 1 && size === 1) return str;
  if (/\D/.test(str)) {
    throw Error("Invalid numeric string");
  }
  let pat = new RegExp(`.{${size}}`, 'g');
  return str.match(pat).map(x =>
    testCubes(x) ? strReverse(x) : rotateLeft(x)
  ).join("");
};