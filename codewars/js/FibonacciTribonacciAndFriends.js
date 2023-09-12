// https://www.codewars.com/kata/556e0fccc392c527f20000c5

const Xbonacci = (signature, n) => {
  const length = signature.length;
  if (length > n) {
    return signature.slice(0, n);
  }

  let result = [...signature];
  for (let i = 0; i < n - length; i++) {
    result = [...result, result.slice(i).reduce((acc, el) => acc + el, 0)];
  }

  return result;
};