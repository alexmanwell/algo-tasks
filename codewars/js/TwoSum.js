// https://www.codewars.com/kata/52c31f8e6605bcc646000082

const twoSum = (numbers, target) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const next = numbers[j];
      if ((current + next) === target) {
        result.push(i, j);
        break;
      }
    }
  }

  return result;
};