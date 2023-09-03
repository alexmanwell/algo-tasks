// https://www.codewars.com/kata/5842df8ccbd22792a4000245

const expandedForm = (num) => {
  let result = "";
  while (num > 0) {
    const length = String(num).length - 1;
    const firstDigit = Number(String(num).substring(0, 1));
    const number = Number(firstDigit * Math.pow(10, length));
    result += (number !== 0) ? number : "";
    num -= number;
    result += (num > 0) ? " + " : "";
  }

  return result;
};