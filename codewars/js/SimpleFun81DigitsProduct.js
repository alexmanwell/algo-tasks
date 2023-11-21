// https://www.codewars.com/kata/589436311a8808bf560000f9

const containZero = (number) => {
  return number
    .toString()
    .split("")
    .map(Number)
    .includes(0);
};

const containOne = (number) => {
  return number
    .toString()
    .split("")
    .map(Number)
    .includes(1);
};

const multipliers = (number) => {
  const members = [];
  let candidate = number;
  for (let i = 2; i <= candidate; i++) {
    if (number % i === 0) {
      if (!containZero(i) && !containOne(i)) {
        members.push(i);
      }
      if (!containZero(number / i)
        && !containOne(number / i)
      ) {
        members.push(number / i);
      }
      candidate = number / i;
    }
  }

  return [
    ...new Set(members.sort((a, b) => a - b))
  ];
};

const multiplication = (number) => {
  return number
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, v) => acc * v, 1);
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const digitsProduct = (number) => {
  if (number === 0) {
    return 10;
  }
  if (number < 10) {
    return 10 + number;
  }
  if (isPrime(number)) {
    return -1;
  }

  const members = multipliers(number);
  let numbers = [];
  let multiply = 1;
  let targetValue = number;
  while (multiply < number) {
    let index = members.length - 1;
    while (index >= 0 && targetValue !== 1) {
      let member = members[index];
      const value = multiplication(member);
      if (targetValue % value === 0) {
        multiply *= value;
        numbers.push(member);
        targetValue /= member;
        member = members[index];
      } else {
        index--;
      }
    }
    if (multiply !== number) {
      members.pop();
      multiply = 1;
      numbers = [];
      targetValue = number;
      index = members.length - 1;
    } else {
      break;
    }
    if (!members.length) {
      break;
    }
  }

  return numbers.length > 0 ?
    +numbers
      .join("")
      .split("")
      .map(Number)
      .sort((a, b) => a - b)
      .join("")
    : -1;
};