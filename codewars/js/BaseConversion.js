// https://www.codewars.com/kata/526a569ca578d7e6e300034e

const ALPHABET = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

const convert = (input, source, target) => {
  const baseIn = source.length;
  const baseOut = target.length;

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum *= baseIn;
    sum += source.indexOf(input[i]);
  }

  let result = "";
  while (sum !== 0) {
    result = target[sum % baseOut] + result;
    sum = Math.floor(sum / baseOut);
  }

  return result ? result : target[0];
};