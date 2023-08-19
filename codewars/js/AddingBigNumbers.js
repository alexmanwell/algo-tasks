// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

const add = (a, b) => {
  a = a.split("").map(Number);
  b = b.split("").map(Number);

  const length = Math.abs(a.length - b.length);
  if (a.length < b.length) {
    a = [...new Array(length).fill(0), ...a];
  } else {
    b = [...new Array(length).fill(0), ...b]
  }

  const result = [];
  let div = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const sum = a[i] + b[i] + div;
    result[i] = (sum) % 10;
    div = Math.floor(sum / 10);
  }

  if (div === 1) {
    result.unshift(div);
  }

  return result.join("");
};