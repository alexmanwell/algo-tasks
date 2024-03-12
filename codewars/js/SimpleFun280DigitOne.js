// https://www.codewars.com/kata/5919575c5ffc3080490000b9

const ones = (length) => {
  return +(new Array(length).fill(1).join(""));
};

const sumDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, n) =>
      acc + n, 0
    );
};

const digitOne = (n) => {
  let sequences = [];
  for (let size = n.toString().length; size <= n.toString().length + 1; size++) {
    let candidate = ones(size);
    let candidates = [candidate];
    let number = Math.abs(n - candidate);
    while (number > 0) {
      const length = number.toString().length;
      const a = ones(length + 1);
      const b = ones(length);
      candidate = Math.abs(number - a) >= Math.abs(number - b) ? b : a;
      candidates.push(candidate);
      number = Math.abs(number - candidate);
    }
    sequences.push([...candidates]);
  }

  return Math.min(
    ...sequences
      .map(digits => digits
        .reduce((acc, n) =>
          acc + sumDigits(n), 0
        )
      )
  );
};