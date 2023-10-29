// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

const add = (n) => {
  const sum = (m) => {
    return add(n + m);
  };
  
  sum.toString = () => n;

  return sum;
};