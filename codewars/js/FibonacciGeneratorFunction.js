// https://www.codewars.com/kata/58a5d9aaa49f6cd0f9000ad7

function* fibonacci() {
  let [current, next] = [0, 1];
  yield current;
  yield next;
  while (true) {
    [current, next] = [next, current + next];
    yield next;
  }
}