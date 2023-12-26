// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb

const firstDup = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j >= i + 1; j--) {
      if (str.charAt(i) === str.charAt(j)) {
        return str.charAt(i);
      }
    }
  }

  return undefined;
};