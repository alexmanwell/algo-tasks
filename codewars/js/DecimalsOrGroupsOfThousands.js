// https://www.codewars.com/kata/58379c3b51e3b680aa000164
// TODO: don't pass all tests. My solution isn't good.

const sumUpNumbers = (arr) => {
  let numbers = [];
  let decimals = [];
  for (const item of arr) {
    if (item.split("").includes(",") && item.split("").includes(".")) {
      const splited = item.split(/[,.\s]/);
      numbers.push(+splited.slice(0, splited.length - 1).join(""));
      decimals.push(+splited[splited.length - 1]);
    } else if (item.split("").includes(",") || item.split("").includes(".")) {
      const splited = item.split(/[,|\\.\s]/);
      numbers.push(+splited.slice(0, splited.length - 1).join(""));
      decimals.push(+splited[splited.length - 1]);
    } else {
      numbers.push(+item);
    }
  }

  let decimal = decimals
    .map(d => {
      if (d.toString().length === 1) {
        d = 10 * d;
      }
      return d;
    })
    .reduce((acc, d) => acc + d, 0);
  if (Math.floor(decimal / 100) > 0) {
    numbers.push(Math.floor(decimal / 100));
    decimal -= Math.floor(decimal / 100) * 100;
    if (decimal.toString().length === 1) {
      decimal = "0" + decimal;
    }
  }

  let number = numbers.reduce((acc, n) => acc + n, 0);
  let result = "";
  while (number > 0) {
    let temp = number % 1000;
    number -= temp;
    if (number > 0 && temp > 0) {
      const length = temp.toString().length;
      temp = length < 3 ? "0".repeat(3 - length) + temp : temp;
      result = "," + temp + result;
    }
    if (number === 0) {
      result += temp;
    }
    if (temp === 0) {
      const digit = number / 1000;
      result = digit + result;
      number -= digit * 1000;
    }
  }
  if (decimal.toString().length === 1) {
    decimal = decimal.toString() + "0";
  }
  return [result, decimal].join(".");
};

console.log(sumUpNumbers(["1,234.34", "1.324,2", "14"]), "2,572.54");
console.log(sumUpNumbers(["834.34", "14"]), "848.34");
console.log(sumUpNumbers(['4.44', '8', '14,56']), "27.00");
console.log(sumUpNumbers([ '4.4', '8.234,1', '14,56' ]), "8,253.06");