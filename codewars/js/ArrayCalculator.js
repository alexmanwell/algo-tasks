// https://www.codewars.com/kata/54224ce3dda526a97d00127d

const filteredNumbers = (arr) => {
  return arr.filter((v, index) =>
    index % 2 === 0 &&
    (/[0-9]+/g).test(v)
  );
};

const evaluate = (arr) => {
  const numbers = filteredNumbers(arr);
  const size = arr.length;
  const amountNumbers = (size - Math.floor(size / 2));
  if (size % 2 === 0 || numbers.length !== amountNumbers) {
    return undefined;
  }

  while (true) {
    const index = arr.indexOf("*");
    if (index > -1) {
      arr = [
        ...arr.slice(0, index - 1),
        +arr[index - 1] * +arr[index + 1],
        ...arr.slice(index + 2)
      ];
    }
    if (index === -1) {
      break;
    }
  }

  return arr
    .filter(v => (/[0-9]+/g).test(v))
    .map(Number)
    .reduce((acc, v) => acc + v, 0);
};