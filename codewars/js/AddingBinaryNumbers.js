// https://www.codewars.com/kata/55c11989e13716e35f000013

const add = (a, b) => {
  if (+a === 0 && +b === 0) {
    return "0";
  }
  let size = Math.max(a.length, b.length);
  a = a.split("").reverse();
  b = b.split("").reverse();
  let tail = 0;
  let binary = "";
  for (let i = 0; i < size; i++) {
    let x = a[i] ? +a[i] : 0;
    let y = b[i] ? +b[i] : 0;
    let sum = x + y + tail;
    if (sum === 0) {
      binary += 0;
    } else if (sum === 1) {
      binary += 1;
      tail = 0;
    } else if (sum === 2) {
      binary += 0;
      tail = 1;
    } else {
      binary += 1;
      tail = 1;
    }
  }
  if (tail === 1) {
    binary += tail;
  }

  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary.charAt(i) !== "0") {
      binary = binary.substring(0, i + 1);
      break;
    }
  }

  return binary.split("").reverse().join("");
};