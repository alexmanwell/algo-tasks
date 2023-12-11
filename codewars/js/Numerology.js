// https://www.codewars.com/kata/525b4164eb636fb2f90002a0

const sumDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, v) => acc + v, 0)
};

/**
 * Your solution
 * @date JS Date object
 **/
const solution = (date) => {
  let [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear()
  ];
  date = "" + month + day + year;
  let sum = 0;
  for (let i = 0; i < date.length; i++) {
    if (sum > 9) {
      sum = sumDigits(sum);
    }
    sum += +date[i];
  }

  return sum > 9 ? sumDigits(sum) : sum;
};