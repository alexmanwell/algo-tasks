// https://www.codewars.com/kata/55eee789637477c94200008e

function* sequenceGen(...values) {
  const initLength = values.length;
  for (const v of values) {
    yield v;
  }

  while (true) {
    const length = values.length;
    values.push(
      values
        .slice(length - initLength, length)
        .reduce((acc, v) => acc + v, 0)
    );

    yield values[length];
  }
}