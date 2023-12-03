// https://www.codewars.com/kata/5266fba01283974e720000fa

const variance = (numbers) => {
  const length = numbers.length;
  const average = numbers.reduce((acc, v) => acc + v, 0) / length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += Math.pow((numbers[i] - average), 2);
  }

  return Number(result / length).toFixed(4);
};