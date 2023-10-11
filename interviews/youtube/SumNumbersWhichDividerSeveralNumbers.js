// https://www.youtube.com/watch?v=L2RPLVLKiAY
// timeline position 00:27:24 сумма всех чисел, которые делятся на 3, 5, 7, до n

const isDivider = (n, k) => {
  return n % k === 0;
};

const sum = (n) => {
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum += (isDivider(i, 3) || isDivider(i, 5) || isDivider(i, 7)) ? i : 0;
  }

  return sum;
};