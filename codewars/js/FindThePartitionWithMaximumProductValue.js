// https://www.codewars.com/kata/5716a4c2794d305f4900156b

const findPartMaxProd = (n) => {
  let result = [];
  let numbers = [];
  let fillNumbers = [];
  while (true) {
    numbers = [...numbers, ...fillNumbers];
    const count = numbers.length > 0 ? numbers.reduce((acc, n) => acc + n) : 0;
    if (count < n) {
      fillNumbers = new Array(Math.ceil(n - count)).fill(1);
    }
    if (count === n) {
      result.push(numbers);
      numbers = [...numbers];
    }
    if (count >= n) {
      const min = Math.min(...numbers);
      if (min < n) {
        const index = numbers.indexOf(min);
        numbers[index]++;
        numbers = numbers.slice(0, index + 1);
        fillNumbers = [];
      } else {
        break;
      }
    }
  }

  const pairs = result
    .map(arr => {
      return [
        arr,
        arr.reduce((acc, n) => acc * n, 1)
      ];
    })
    .sort(([arr1, v1], [arr2, v2]) =>
      v2 - v1 || arr1.length - arr2.length
    );
  const max = pairs[0][1];

  return [
    ...pairs
      .reduce((result, pair) => {
        if (pair[1] === max) {
          result.push(pair[0])
        }
        return result;
      }, []),
    max
  ];
};