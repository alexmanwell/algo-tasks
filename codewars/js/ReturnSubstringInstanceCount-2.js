// https://www.codewars.com/kata/52190daefe9c702a460003dd

const searchSubstr = (fullText, searchText, allowOverlap = true) => {
  let count = 0;
  if (searchText.length === 0) {
    return count;
  }
  if (allowOverlap) {
    let index = 0;
    while (index < fullText.length) {
      index = fullText.indexOf(searchText, index);
      if (index >= 0) {
        count++;
        index++;
      } else {
        break;
      }
    }
  } else {
    count = fullText.match(new RegExp(searchText)).length;
  }

  return count;
};