// https://www.codewars.com/kata/55ae997d1c40a199e6000018/train/javascript

const decrement = (digit) => {
  return (Number(digit) - 1).toString();
};

const buildNextMember = (str, index) => {
  return Number(str.charAt(index)) === 0
    ? str.substring(0, index) + "9".repeat(str.length - index)
    : str.substring(0, index) + decrement(str.charAt(index)).repeat(str.length - index);
};

const pattern = (n) => {
  if (n <= 0) {
    return "";
  }

  const str = n.toString();
  let original = str.substring(str.length - 1).repeat(n);
  const sequence = new Array(n);
  sequence[0] = original;
  for (let i = 1; i < n; i++) {
    const member = buildNextMember(original, i);
    sequence[i] = member;
    original = member;
  }

  return sequence.join("\n");
};

// another solution.
const pattern = n => {
  return Array.from({length: n}, (_, rowIndex) =>
    Array.from({length: n}, (_, colIndex) =>
      (n - Math.min(rowIndex, colIndex)) % 10
    ).join``
  ).join`\n`;
};