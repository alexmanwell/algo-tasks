// https://www.codewars.com/kata/51b66044bce5799a7f000003

class RomanNumerals {

  static relatedRomanNumbers(number) {
    let romans = new Map();
    romans.set(1, "I");
    romans.set(5, "V");
    romans.set(10, "X");
    romans.set(50, "L");
    romans.set(100, "C");
    romans.set(500, "D");
    romans.set(1000, "M");

    return romans.get(number);
  }

  static toRoman(number) {
    let romanNumber = "";
    while (number > 0) {
      let n = Math.pow(10, bitDepthNumber(number) - 1);
      let digit = Math.floor(number / n);
      if (Math.floor(digit / 5) < 1) {
        if (digit % 4 > 0) {
          romanNumber += this.relatedRomanNumbers(n);
          number -= n;
        } else if (digit % 4 === 0) {
          romanNumber += this.relatedRomanNumbers(n) + this.relatedRomanNumbers((digit + 1) * n);
          number -= digit * n;
        }
      } else if (digit / 5 === 1) {
        romanNumber = this.relatedRomanNumbers(digit * n);
        number -= digit * n;
      } else if (digit / 5 > 1) {
        if (digit % 5 < 4) {
          romanNumber += this.relatedRomanNumbers(Math.floor(digit / 5) * 5 * n);
          number -= Math.floor(digit / 5) * 5 * n;
        } else if (digit % 5 === 4) {
          romanNumber += this.relatedRomanNumbers(n) + this.relatedRomanNumbers(10 * n);
          number -= digit * n;
        }
      }
    }

    return romanNumber;
  }

  static relatedFromRomanNumbers(roman) {
    let numbers = new Map();
    numbers.set("I", 1);
    numbers.set("V", 5);
    numbers.set("X", 10);
    numbers.set("L", 50);
    numbers.set("C", 100);
    numbers.set("D", 500);
    numbers.set("M", 1000);

    return numbers.get(roman);
  };

  static fromRoman(romanNumber) {
    let number = 0;
    for (let i = 0; i < romanNumber.length; i++) {
      let current = this.relatedFromRomanNumbers(romanNumber.charAt(i));
      let next = (i < romanNumber.length - 1) ? this.relatedFromRomanNumbers(romanNumber.charAt(i + 1)) : 0;
      if (current < next) {
        number += next - current;
        i++;
      } else {
        number += current;

        if (i == romanNumber.length - 1) {
          number += next;
        }
      }
    }

    return number;
  };

}

function bitDepthNumber(number) {
  let count = 0;
  while (number > 0) {
    count++;
    let denominator = 10 ** count;
    number -= number % denominator;
  }

  return count;
}

RomanNumerals.toRoman(2020);