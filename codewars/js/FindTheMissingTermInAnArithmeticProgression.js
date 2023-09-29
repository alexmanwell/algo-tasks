// https://www.codewars.com/kata/52de553ebb55d1fca3000371

const findMissing = (list) => {
  const firstMember = list[0];
  const lastMember = list[list.length - 1];
  const amountMembers = list.length + 1;
  const sequenceSum = (firstMember + lastMember) / 2 * amountMembers;
  const sum = list.reduce((acc, member) => acc + member, 0);
  return sequenceSum - sum;
};