// https://www.codewars.com/kata/55ec80d40d5de30631000025

const decompose = (num) => {
  let base = 2;
  let degrees = [];
  while (num >= Math.pow(base, 2)) {
    let temp = num;
    let degree = -1;
    while (temp > 0) {
      temp = Math.floor(temp / base);
      degree++;
    }
    degrees.push(degree);
    num -= Math.pow(base, degree);
    base++;
  }

  return [degrees, num];
};