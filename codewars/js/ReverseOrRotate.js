// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

const separate = (str, sz) => {
  const result = [];
  let substring = "";
  str.split("").forEach((c, index) => {
    substring += c;
    if ((index + 1) % sz === 0) {
      result.push(Number(substring));
      substring = "";
    }
  });

  return result;
};

const revrot = (str, sz) => {
  let result = [];
  if (sz === 0 || (str.length === 0) || (str.length < sz)) {
    result = null;
  }

  if (result) {
    const numbers = separate(str, sz);
    numbers.forEach((number, index) => {
      const digits = number.toString().split("");
      let sum = digits.map(Number).reduce((acc, digit) => acc + Math.pow(digit, 3), 0);
      result[index] =
        (sum % 2 === 0)
          ? Number(digits.reverse().join(""))
          : Number([...digits.slice(1), digits[0]].join(""));
    });
  }

  return result ? result.join("") : "";
};