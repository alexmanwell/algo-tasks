// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

const UNICODE_CODE_LETTER_A = 97;

const high = (x) => {
  const scores = x
    .split(" ")
    .map((word) =>
      word
        .split("")
        .reduce((acc, letter, index) =>
          acc + word.charCodeAt(index) - UNICODE_CODE_LETTER_A + 1,
          0
        )
    );

  const index = scores.indexOf(Math.max(...scores));
  return x.split(" ")[index];
};