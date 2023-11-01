// https://www.codewars.com/kata/54a2e93b22d236498400134b

const KEYPAD = {
  "ADGJMPTW #*1": 1,
  "BEHKNQUX0": 2,
  "CFILORVY": 3,
  "SZ234568": 4,
  "79": 5
};

const presses = (phrase) => {
  let taps = 0;
  for (let letter of phrase.toUpperCase()) {
    for (let [keys, value] of Object.entries(KEYPAD)) {
      taps += keys.includes(letter) ? value : 0;
    }
  }

  return taps;
};