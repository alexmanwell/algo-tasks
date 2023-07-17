// https://www.codewars.com/kata/55c9172ee4bb15af9000005d

const countOddPentaFib = (n) => {
    let arr = [0,1,1,2,4];
    for (let i = 5; i <= n; i++) {
        arr[i] = parseInt((arr[i - 1] + arr[i - 2] + arr[i - 3] + arr[i - 4] + arr[i - 5]).toString().slice(-1));
    }

    let result = arr.filter((item) => {
        return item % 2 !== 0;
    });

    return result.length - 1;
};

const countOddPentaFib2 = (n) => {
  return Math.floor((n - 1) / 6) + Math.floor((n - 2) / 6) + 1;
};