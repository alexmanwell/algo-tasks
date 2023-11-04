// https://www.codewars.com/kata/59d0ee709f0cbcf65400003b

const STATES = [
  ["AZ", "Arizona"],
  ["CA", "California"],
  ["ID", "Idaho"],
  ["IN", "Indiana"],
  ["MA", "Massachusetts"],
  ["OK", "Oklahoma"],
  ["PA", "Pennsylvania"],
  ["VA", "Virginia"]
];

const byState = (str) => {
  const addresses = str.replace(/,/g, "").split(`\n`);
  let result = "";
  STATES.forEach(([abbr, state]) => {
    const temp = addresses.filter(address => address.slice(-2) === abbr).sort();
    if (temp.length) {
      result += "\r\n " + state + "\r\n";
      result += temp.map(address => `..... ${address.slice(0, -3)} ${state}`).join(`\r\n`);
    }
  });

  return result.slice(3);
};