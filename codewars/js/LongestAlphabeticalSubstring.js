// https://www.codewars.com/kata/5a7f58c00025e917f30000f1

const compareLetters = (a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0) <= 0;
};

const lengthsSubArrays = (arr) => {
  let lengths = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    lengths[i] = arr[i].length;
  }

  return lengths;
};

const findIndexMaxValue = (arr) => {
  const max = Math.max(...arr);

  return arr.indexOf(max);
};

const longest = (str) => {
  const result = [];
  let sequence = [];
  for (let i = 0; i < str.length; i++) {
    const a = str.charAt(i);
    const b = str.charAt(i + 1);
    if (compareLetters(a, b)) {
      sequence.push(a);
    } else {
      sequence.push(a);
      result.push(sequence);
      sequence = [];
    }
  }

  const lengths = lengthsSubArrays(result);
  const index = findIndexMaxValue(lengths);
  return result[index].join("");
};