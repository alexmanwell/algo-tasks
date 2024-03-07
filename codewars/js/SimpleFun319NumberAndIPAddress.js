// https://www.codewars.com/kata/5936371109ca68fe6900000c

const numberAndIPaddress = (s) => {
  if (!s.includes(".")) {
    return Number(s)
      .toString(2)
      .split("")
      .reverse()
      .join("")
      .match(/.{1,8}/gi)
      .map(bit =>
        bit.split("")
          .reverse()
          .join("")
      )
      .map(bit =>
        parseInt(bit, 2)
      )
      .reverse()
      .join(".");
  }

  return Number(BigInt(
    "0b" +
    s
      .split(".")
      .map(n =>
        Number(n).toString(2)
      )
      .map(bit => {
        const BYTE = 8;
        const size = BYTE - bit.length;
        let arr = bit.split("");
        for (let i = 0; i < size; i++) {
          arr.unshift("0");
        }
        return arr.join("");
      })
      .join("")
    )
  ).toString();
};