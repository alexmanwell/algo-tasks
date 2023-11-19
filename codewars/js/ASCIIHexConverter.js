// https://www.codewars.com/kata/52fea6fd158f0576b8000089

class Converter {

  static toAscii(hex) {
    const listOfHex = hex.match(/(.){2}/g);
    let chars = new Array(listOfHex.length);
    for (let i = 0; i < listOfHex.length; i++) {
      const code = Number("0x" + listOfHex[i]);
      chars[i] = String.fromCharCode(code);
    }

    return chars.join("");
  }

  static toHex(ascii) {
    let listOfHex = new Array(ascii.length);
    for (let i = 0; i < listOfHex.length; i++) {
      listOfHex[i] = ascii.charCodeAt(i).toString(16);
    }

    return listOfHex.join("");
  }
}