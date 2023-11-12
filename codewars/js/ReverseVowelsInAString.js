// https://www.codewars.com/kata/585db3e8eec141ce9a00008f
// TODO: Непонятный для меня баг js:

/*
if ((/[aeiouAEIOU]/g).test(letters[i])) { если letters[i] = e, то условие не выполняется
      Какие-то инстркуции.
}
    if (vowels.includes(letters[i])) { если поменять на массив гласных и вызывать метод includes, то условие выполняется
}
*/

const reverseVowels = (str) => {
  if (!str.length) {
    return "";
  }
  const pattern = /[aeiouAEIOU]/g;
  const vowels = str.match(new RegExp(pattern));
  if (!vowels) {
    return str;
  }

  vowels.reverse();
  const letters = str.split("");
  let index = 0;
  for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
      letters[i] = vowels[index];
      index++;
    }
  }

  return letters.join("");
};