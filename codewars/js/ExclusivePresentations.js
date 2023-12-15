// https://www.codewars.com/kata/57dd8c78eb0537722f0006bd

const personsByCities = (list) => {
  let map = {};
  for (let item of list) {
    const cities = item["dest"];
    for (let city  of cities) {
      map[city] = map[city]
        ? [...map[city], item]
        : [item];
    }
  }

  return map;
};

const personsByVisitUniqueCities = (list) => {
  let map = {};
  for (let [city, obj] of list) {
    map[obj[0]["person"]] =
      map[obj[0]["person"]]
        ? [...map[obj[0]["person"]], city]
        : [city];
  }

  return map;
};

const presentationPersons = (map) => {
  let result = [];
  for (let [person, destinations] of Object.entries(map)) {
    result.push({person: person, dest: destinations});
  }

  return result
};

const presentationAgenda = (friendList) => {
  const cities = personsByCities(friendList);
  const filtered =
    Object
      .entries(cities)
      .filter(([city, arr]) => arr.length === 1);
  const persons = personsByVisitUniqueCities(filtered);

  return presentationPersons(persons);
};