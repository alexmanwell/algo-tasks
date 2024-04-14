// https://www.codewars.com/kata/54fdbad0762e2e8a54000452

const split = (s, pattern) => {
  return s
    .split(pattern)
    .filter(item => item)
}

const wordCounter = function (text) {
  const arr = split(text, new RegExp(/[,.\s]/));
  return {
    count: (search) => {
      if (!arr.length) {
        return 0;
      }
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        const index = arr.indexOf(search, i);
        if (index === -1) {
          break;
        }
        count++;
        i = index;
      }

      return count;
    }
  }
};