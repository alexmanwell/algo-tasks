// https://www.codewars.com/kata/5a24254fe1ce0ec2eb000078

const solve = (str, idx) => {
  if (str.charAt(idx) !== "(") {
    return -1;
  }
  let count = 0;
  for (let i = idx; i < str.length; i++) {
    count = (str.charAt(i) === "(") ? count + 1 : count;
    count = (str.charAt(i) === ")") ? count - 1 : count;
    if (count === 0) {
      return i;
    }
  }

  return -1;
};