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