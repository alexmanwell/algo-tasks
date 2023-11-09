// https://www.codewars.com/kata/57f7f71a7b992e699400013f

const joinItemsToColumnsArray = (items) => {
  const list = new Array(items[0].length).fill([]);
  for (let i = 0; i < list.length; i++) {
    for (let item of items) {
      list[i] = list[i].length !== 0 ? [...list[i], item[i]] : [item[i]];
    }
  }

  return list
};

const joinItemsToRowsArray = (items) => {
  const result = new Array(items[0].length).fill([]);
  for (let i = 0; i < result.length; i++) {
    for (let item of items) {
      result[i] = result[i].length !== 0 ? [...result[i], item[i]] : [item[i]];
    }
  }

  return result;
};

const sortCsvColumns = (csvFileContent) => {
  const items = csvFileContent
    .split(/\n/)
    .map(item => item.split(";"));
  const list = joinItemsToColumnsArray(items).sort((a, b) => a[0].localeCompare(b[0]));

  return joinItemsToRowsArray(list)
    .map(items => items.join(";"))
    .join("\n");
};