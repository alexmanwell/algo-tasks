// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651

const lastSurvivors = (str) => {
  let letters = str.split("");
  let isDifferent;
  do {
    isDifferent = false;
    for (let i = 0; i < letters.length; i++) {
      for (let j = i + 1; j < letters.length; j++) {
        if (isSameLetters(letters[i], letters[j])) {
          letters.splice(j, 1);
          letters[i] = nextChar(letters[i]);
          isDifferent = true;
        }
      }
    }
  } while (isDifferent);

  return letters.join("");
};

const isSameLetters = (l1, l2) => {
  return l1 === l2;
};

const nextChar = (letter) => {
  return (letter === 'z') ? "a" : String.fromCharCode(letter.charCodeAt(0) + 1);
};