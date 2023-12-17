// https://www.codewars.com/kata/5800b6568f7ddad2c10000ae

const simplify = (number) => {
  return number
    .toString()
    .split("")
    .map((n, i, arr) =>
      [n, 10 ** (arr.length - 1 - i)]
    )
    .reduce((str, [digit, multiplier]) => {
      if (digit > 0) {
        str += multiplier > 1
          ? `${digit}*${multiplier}+`
          : `${digit}+`;
      }

      return str;
    }, "")
    .slice(0, -1);
};