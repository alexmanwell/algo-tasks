// https://www.codewars.com/kata/56a115cadb39a2faa000001e

const addCommas = (arr) => {
  return arr
    .reverse()
    .reduce((acc, v, index) =>
        (index > 0 && index % 3 === 0)
          ? acc + "," + v
          : acc + v
      , ""
    )
    .split("")
    .reverse()
    .join("");
};

const toArray = (str) => {
  return str.toString().split("");
};

const commas = (num) => {
  const isNegative = num.toString().charAt(0) === "-";
  if (isNegative) {
    num = +num.toString().split("").slice(1).join("");
  }
  const isTail = num.toString().indexOf(".") !== -1;
  if (isTail) {
    const index = num.toString().indexOf(".");
    const integer = num.toString().substring(0, index);
    let tail = num.toString().substring(index + 1);
    if (tail.length > 3) {
      tail =
        Number("0" + "." + tail)
          .toFixed(3)
          .toString()
          .substring(2);
    }
    while (tail.charAt(tail.length - 1) === "0") {
      tail = tail.substring(0, tail.length - 1);
    }

    return isNegative
      ? "-" + addCommas(toArray(integer)) + "." + tail
      : addCommas(toArray(integer)) + "." + tail;
  }

  return isNegative
    ? "-" + addCommas(toArray(num))
    : addCommas(toArray(num));
};