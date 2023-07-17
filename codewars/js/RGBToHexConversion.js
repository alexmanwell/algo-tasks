// https://www.codewars.com/kata/513e08acc600c94f01000001

const HEX_NUMERAL = "0123456789abcdef";
const BASE_HEX = 16;
const MAX_VALUE = 255;
const MIN_VALUE = 0;

const rgb = (r, g, b) => {
  return toHex(r) + toHex(g) + toHex(b);
};

const toHex = (number) => {
  number = roundValidValue(number);
  return (HEX_NUMERAL.charAt(parseInt(number / BASE_HEX)) + HEX_NUMERAL.charAt(number % BASE_HEX)).toUpperCase();
};

const roundValidValue = (number) => {
  return (number < MIN_VALUE) ? MIN_VALUE : (number > MAX_VALUE) ? MAX_VALUE : number;
};