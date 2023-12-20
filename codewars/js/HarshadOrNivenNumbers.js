// https://www.codewars.com/kata/54a0689443ab7271a90000c6

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = (function () {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function (number) {
      const digits = number
        .toString()
        .split("")
        .map(Number);
      const sum = digits.reduce((acc, digit) => acc + digit, 0);
      return number % sum === 0;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function (number) {
      do {
        number += 1;
      } while (!Harshad.isValid(number));

      return number;
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} amount The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function (amount, start = 0) {
      start++;
      while (!Harshad.isValid(start)) {
        start++;
      }
      let result = new Array(amount);
      let index = 0;
      result[index++] = start;
      while (index < amount) {
        result[index] = Harshad.getNext(start);
        start = result[index];
        index++;
      }

      return result;
    }
  };

}());