// https://www.codewars.com/kata/5a981424373c2e479c00017f

const splitNumber = (str) => {
  let imaginary = 0;
  if (str === "i") {
    imaginary = 1;
  } else if (str && str.length === 2 && str[0] === "-") {
    imaginary = -1;
  } else {
    imaginary = Number(str.substring(0, str.length - 1));
  }

  return imaginary;
};

const replaceImaginaryNumber = (n) => {
  let imaginary = "";
  if (Math.abs(n) === 1) {
    imaginary = n > 0 ? "i" : "-i";
  } else if (Math.abs(n) > 1) {
    imaginary = `${n}i`;
  } else {
    imaginary = "";
  }

  return imaginary;
};

const replaceComplexNumber = ([real, imaginary]) => {
  let complex = "";
  if (real === 0) {
    complex = replaceImaginaryNumber(imaginary);
  } else {
    const temp = replaceImaginaryNumber(imaginary);
    imaginary = imaginary > 0 ? ("+" + temp) : temp;
    complex = real + imaginary;
  }

  return complex;
};

const complexSum = (arrays) => {
  if (!arrays.length) {
    return "0";
  }
  let complex = [0, 0];
  for (let arr of arrays) {
    let [real, imaginary] = arr.match(/-?[0-9i]+/g);
    if (real.includes("i")) {
      imaginary = splitNumber(real);
      real = 0;
    } else {
      imaginary = imaginary ? splitNumber(imaginary) : 0;
      real = real ? real : 0;
    }
    complex = [complex[0] + +real, complex[1] + +imaginary];
  }

  const result = replaceComplexNumber(complex);
  return result === "" ? "0" : result;
};