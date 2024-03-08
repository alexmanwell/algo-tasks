// https://www.codewars.com/kata/58b65c5e8b98b2e4fa000034
// Don't pass time limit tests

const unluckyNumber = (n) => {
  let count = 0;
  const amountNumbers = Math.floor(n / 13);
  for (let i = 0; i <= amountNumbers; i++) {
    if (!(/[4, 7]/).test((i * 13))) {
      count++;
    }
  }

  return count;
};