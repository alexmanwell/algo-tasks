// https://www.codewars.com/kata/5318f00b31b30925fd0001f8

const numberToPrice = (number) => {
  if (!number.toString().match(/\d/g)) {
    return "NaN";
  }
  if (number.toString().match(",")) {
    return "NaN"
  }
  const separated = number.toString().split(".");
  if (separated.length > 2) {
    return "NaN";
  }

  let tail = separated[1] || "";
  if (tail.length === 0) {
    tail = "00";
  } else if (tail.length < 2) {
    tail += "0";
  } else {
    tail = tail.substring(0, 2);
  }

  const result = separated[0]
    .split("")
    .reverse()
    .join("")
    .match(/(\d){1,3}/g)
    .join(",")
    .split("")
    .reverse()
    .join("");
  const isNegative = number < 0;

  return isNegative ? "-" + result + "." + tail : result + "." + tail;
};