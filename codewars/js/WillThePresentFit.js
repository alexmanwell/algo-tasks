// https://www.codewars.com/kata/52b23340c65ea422b1000045

const willFit = (present, box) => {
  present = present.sort((a, b) => a - b);
  box = box.sort((a, b) => a - b);
  for (let i = 0; i < box.length; i++) {
    if (!(present[i] <= box[i] - 2)) {
      return false;
    }
  }

  return true;
};