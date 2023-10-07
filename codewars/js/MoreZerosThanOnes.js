// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a

String.prototype.distinct = function () {
  const uniqueSymbols = [];
  let chars = this.split("");
  let index = 0;
  while (index < chars.length) {
    const symbol = chars[index];
    uniqueSymbols.push(symbol);
    if (chars.slice(index + 1).includes(symbol)) {
      chars = chars.filter(c => c !== symbol);
    } else {
      index++;
    }
  }

  return uniqueSymbols.join("");
};

const moreZeros = (s) => {
  return s
    .distinct()
    .split("")
    .map(c => c.charCodeAt(0).toString(2))
    .map((bits) => {
      const listOfBits = bits.split("");
      const countZeros = listOfBits.filter(bit => {
        return Number(bit) === 0
      }).length;

      return (bits.length - countZeros) < countZeros
        ? bits
        : undefined;
    })
    .filter(bits => bits !== undefined)
    .map((bit) => {
      return String.fromCharCode(parseInt(bit.toString(), 2));
    });
};