// https://www.codewars.com/kata/5945fe7d9b33194f960000df

const findGatecrashers = (people, invitations) => {
  for (let invitation of invitations) {
    const {member, guests} = invitation;
    let index = people.indexOf(member);
    people[index] = null;
    for (let guest of guests) {
      index = people.indexOf(guest);
      people[index] = null;
    }
  }

  return people.filter(Number.isFinite);
};