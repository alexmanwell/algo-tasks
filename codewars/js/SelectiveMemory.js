// https://www.codewars.com/kata/58bee820e9f98b215200007c

const select = (memory) => {
  const arr = memory.split(", ");
  let index = 0;
  let result = [];
  while (index < arr.length) {
    let item = arr[index];
    if (item) {
      const person = item.substring(1);
      const hasExclamationSign = item[0] === "!";
      if (hasExclamationSign) {
        let nextIndex = arr.indexOf(person, index + 1);
        while (nextIndex !== -1) {
          arr[nextIndex] = null;
          nextIndex = arr.indexOf(person, nextIndex + 1);
        }
        nextIndex = index + 1;
        let count = 0;
        while (arr[nextIndex] && arr[nextIndex][0] === "!") {
          nextIndex++;
          count++;
        }
        nextIndex += count;
        if (arr[nextIndex] && arr[nextIndex][0] !== "!") {
          const removeCandidate = arr[nextIndex];
          while (nextIndex !== -1) {
            arr[nextIndex] = null;
            nextIndex = arr.indexOf(removeCandidate, nextIndex);
          }
        }
      } else {
        result.push(arr[index]);
      }
    }
    index++;
  }

  return result.join(", ");
};