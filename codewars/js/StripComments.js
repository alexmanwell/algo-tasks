// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

const solution = (input, markers) => {
  let rows = input.split("\n");
  const result = [];
  rows.forEach((row) => {
    let index;
    for (let marker of markers) {
      index = row.indexOf(marker);
      if (index !== -1) {
        result.push(row.substring(0, index).trim());
        break;
      }
    }
    if (index === -1) {
      result.push(row);
    }
  });

  return result.join("\n");
};