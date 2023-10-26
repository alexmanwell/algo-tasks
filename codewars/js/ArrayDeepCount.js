// https://www.codewars.com/kata/596f72bbe7cd7296d1000029

const deepCount = (a) => {
  let result = 0;
  const stack = [...a];
  while (stack.length) {
    const item = stack.pop();
    result++;
    if (Array.isArray(item)) {
      stack.push(...item);
    }
  }

  return result;
};