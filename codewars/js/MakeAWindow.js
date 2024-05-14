// https://www.codewars.com/kata/59c03f175fb13337df00002e

const makeAWindow = (n) => {
  const length = 3 + 2 * n;
  let window = "-".repeat(length) + "\n";
  let pane = "|" + ".".repeat(n) + "|" + ".".repeat(n) + "|" + "\n";
  let panes = "";
  for (let i = 0; i < n; i++) {
    panes += pane;
  }
  window += panes;
  window += "|" + "-".repeat(n) + "+" + "-".repeat(n) + "|" + "\n";
  window += panes;
  window += "-".repeat(length);

  return window;
};