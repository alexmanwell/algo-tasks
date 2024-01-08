// https://www.codewars.com/kata/59fd6d2332b8b9955200005f

const solve = (n, k) => {
  let digits = n.toString().split("").map(Number);
  while (k > 0) {
    let isAscending = true;
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i + 1] < digits[i]) {
        isAscending = false;
        digits = [
          ...digits.slice(0, i),
          ...digits.slice(i + 1)
        ];
        k--;
        break;
      }
    }
    if (isAscending) {
      const indexOf = digits.indexOf(Math.max(...digits));
      digits = [
        ...digits.slice(0, indexOf),
        ...digits.slice(indexOf + 1)
      ];
      k--;
    }
  }

  return digits.join("");
};