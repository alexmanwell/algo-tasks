// https://www.codewars.com/kata/54b724efac3d5402db00065e

const decodeMorse = (morseCode) => {
  const codes = morseCode.trim().split(" ");
  let result = "";
  for (let code of codes) {
    result += (code !== "") ? MORSE_CODE[code] : " ";
  }

  return result.split(" ").filter((word) => word !== "").join(" ");
};