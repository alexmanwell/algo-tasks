// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

const sortAnimal = (animals) => {
  let map = new Map();
  for (let animal of animals) {
    const legs = animal.numberOfLegs;
    map.set(
      legs,
      map.has(legs)
        ? [animal, ...map.get(legs)]
        : [animal]
    );
  }

  return [...map.entries()]
    .sort(([leg1,], [leg2,]) => {
      return leg1 - leg2
    })
    .map(([, animals]) => {
      return animals.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    })
    .flat();
};