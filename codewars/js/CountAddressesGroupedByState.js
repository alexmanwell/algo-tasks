// https://www.codewars.com/kata/55f8370b0229d3dad000007a

const count = (addresses) => {
  let map = new Map();
  for (let address of addresses) {
    const {house: house, street: street, city: city, zipcode: zipcode, state: state} = address;
    if (Object.getOwnPropertyNames(address).includes("state")) {
      map.set(state, (map.get(state) || 0) + 1);
    } else {
      throw new Error("Invalid property. Object doesn't have state property.");
    }
  }
  let results = new Array(map.size);
  let index = 0;
  for (let [state, amount] of map.entries()) {
    results[index] = {state: state, count: amount};
    ++index;
  }

  return results;
};