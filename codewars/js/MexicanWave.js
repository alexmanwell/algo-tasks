// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

const wave = (str) => {
  const letters = str.split("");
  const result = [];
  for (let i = 0; i < letters.length; i++) {
    const temp = [...letters];
    temp[i] = temp[i].toUpperCase();
    if (temp[i] !== temp[i].toLowerCase()) {
      result.push(temp.join(""));
    }
  }

  return result;
};