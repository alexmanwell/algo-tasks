//https://www.codewars.com/kata/559e708e72d342b0c900007b

const EvenOdd = (arr) => {
  let result = arr[0];
  let index = 1;
  while (index < arr.length) {
    const current = arr[index];
    result = (index % 2 !== 0)
      ? result * current
      : result + current;
    ++index;
  }

  return result;
};