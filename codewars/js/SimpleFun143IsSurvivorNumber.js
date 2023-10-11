// https://www.codewars.com/kata/58aa6141c9eb047fec000133

const survivor = (n) => {
  let isSurvivor = true;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      isSurvivor = false;
      break;
    }
    n -= parseInt(n / i);
  }

  return isSurvivor;
};

/*
const survivor = (n) => {
  let isSurvivor = false;

  return sequence.find(num => num === n);
};
*/

console.log(survivor(1), true);
console.log(survivor(13), true);
console.log(survivor(8), false);
console.log(survivor(134), false);
console.log(survivor(289), true);
console.log(survivor(100), true);
console.log(survivor(9102299 ), true);