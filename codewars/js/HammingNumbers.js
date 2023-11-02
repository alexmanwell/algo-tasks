// https://www.codewars.com/kata/526d84b98f428f14a60008da
// TODO: task solved. But tests don't pass on time limit.

const HAMMING_NUMBERS = [2, 3, 5];

const findMinMember = (obj) => {
  return Math.min(...Object.keys(obj).map(Number));
};

const computeMembers = (pointers) => {
  const members = pointers
    .reduce((members, pointer, index) => {
      const member = pointer * HAMMING_NUMBERS[index];
      const value = [pointer, HAMMING_NUMBERS[index]];
      if (members[member]) {
        members[member].push(value);
      } else {
        members[member] = [value];
      }
      return members;
    }, {});

  return members;
};

const hamming = (n) => {
  let pointers = [1, 1, 1];
  const sequence = [1];
  while (sequence.length < n) {
    const members = computeMembers(pointers);
    const min = findMinMember(members);
    if (sequence.includes(min)) {
      for (let [value, prime] of members[min]) {
        const index = HAMMING_NUMBERS.indexOf(prime);
        pointers[index] = sequence.find(v => v >= value + 1);
      }
    } else {
      const index = HAMMING_NUMBERS.indexOf(members[min][1]);
      pointers[index] = sequence.find(v => v >= members[min][0] + 1);
      sequence.push(min);
    }
  }

  return sequence[sequence.length - 1];
};