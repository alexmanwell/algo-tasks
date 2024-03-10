// https://www.codewars.com/kata/5bc027fccd4ec86c840000b7

const solve = (n) => {
  const arr = n.toString().split("");
  const firstDigit = +arr[0];
  const tailDigits = [firstDigit - 1, ...new Array(arr.length - 1).fill(9)];
  const diff = n - +tailDigits.join("");

  return tailDigits
      .reduce((acc, n) =>
        acc + n
      ) +
    diff
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, n) =>
        acc + n
      );
};