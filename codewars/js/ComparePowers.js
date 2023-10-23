// https://www.codewars.com/kata/55b2549a781b5336c0000103

const COMPARE = {
  LESS: -1,
  EQUAL: 0,
  GREETER: 1
};

const comparePowers = (n1, n2) => {
  let [base1, expo1] = n1;
  let [base2, expo2] = n2;
  let result = COMPARE.EQUAL;
  if (base1 === 1 && base2 === 1) {
    result = COMPARE.EQUAL;
  } else if (base1 === base2) {
    result = expo1 < expo2 ? COMPARE.GREETER : expo1 > expo2 ? COMPARE.LESS : COMPARE.EQUAL;
  } else if (expo1 === expo2) {
    result = base1 > base2 ? COMPARE.LESS : base1 < base2 ? COMPARE.GREETER : COMPARE.EQUAL;
  } else {
    const first = Math.log10(base1) * expo1;
    const second = Math.log10(base2) * expo2;
    result = first < second ? COMPARE.GREETER : first > second ? COMPARE.LESS : COMPARE.EQUAL;
  }

  return result;
};