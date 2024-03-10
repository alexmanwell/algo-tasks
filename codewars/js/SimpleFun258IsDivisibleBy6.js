// https://www.codewars.com/kata/5911385598dcd432ae000004

const isDivisibleBy6 = (s) => {
  let arr = s.split("");
  const indexOf = arr.indexOf("*");
  arr[indexOf] = 0;
  arr = arr.map(Number);
  const sum = arr.reduce((acc, n) => acc + n);
  if (indexOf === arr.length - 1) {
    let result = [];
    for (let i = 0; i < 10; i += 2) {
      if ((sum + i) % 3 === 0) {
        arr[indexOf] = i;
        result.push([...arr]);
      }
    }

    return result.map(arr => arr.join(""));
  }
  if (arr[arr.length - 1] % 2 !== 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < 10; i++) {
    if ((sum + i) % 3 === 0) {
      arr[indexOf] = i;
      result.push([...arr]);
    }
  }

  return result.map(arr => arr.join(""));
};