// https://www.codewars.com/kata/52cb0b50c61b330f18000763

const DIRECTION = {
  ascending: 1,
  descending: 0
};

const sortStrings = (records, key, direction) => {
  return records.sort((a, b) =>
    DIRECTION[direction]
      ? a[key].localeCompare(b[key])
      : b[key].localeCompare(a[key])
  )
};

const sortNumbers = (records, key, direction) => {
  return records.sort((a, b) =>
    DIRECTION[direction]
      ? a[key] - b[key]
      : b[key] - a[key]
  );
};

const multilevelsort = (records, orders) => {
  for (let {key, direction} of orders.reverse()) {
    const item = records[0][key];
    records = typeof item === "string"
      ? sortStrings(records, key, direction)
      : sortNumbers(records, key, direction);
  }

  return records;
};