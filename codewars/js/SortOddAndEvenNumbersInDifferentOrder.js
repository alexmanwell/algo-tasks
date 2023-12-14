// https://www.codewars.com/kata/5a1cb5406975987dd9000028

const sortedOdd = (arr) => {
  return arr
    .reduce((list, n) => {
        if (n % 2 === 1) {
          list.push(n);
        }
        return list;
      }, []
    ).sort((a, b) => a - b);
};

const sortedEven = (arr) => {
  return arr
    .reduce((list, n) => {
        if (n % 2 === 0) {
          list.push(n);
        }
        return list;
      }, []
    ).sort((a, b) => b - a);
};

const sortArray = (arr) => {
  const oddArray = sortedOdd(arr);
  const evenArray = sortedEven(arr);

  return arr.map((n) =>
    n % 2 === 0
      ? evenArray.shift()
      : oddArray.shift()
  );
};