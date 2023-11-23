// https://www.codewars.com/kata/596925532f709fccf3000077

const findMultipliers = (number, arr) => {
  let result = new Set();
  while (number > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (number % arr[i] === 0) {
        result.add(arr[i]);
        number /= arr[i];
      }
    }
    if (!arr.includes(number)) {
      break;
    }
  }

  return [...result];
};

const fizzbuzzPlusPlus = (numbers, words) => {
  const length = numbers.reduce((acc, v) => acc * v, 1);
  let result = new Array(length);
  for (let v = 1; v <= length; v++) {
    const multipliers = findMultipliers(v, numbers);
    let str = "";
    for (let i = 0; i < multipliers.length; i++) {
      const index = numbers.indexOf(multipliers[i]);
      str += index !== -1 ? words[index] : "";
    }
    result[v - 1] = (str === "") ? v : str;
  }

  return result;
};