// https://www.codewars.com/kata/52fb87703c1351ebd200081f

const whatCentury = (year) => {
  const tails = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
  const century = Math.ceil(year / 100);
  const ending = [11, 12, 13].includes(century % 100)
    ? 'th'
    : tails[century % 10];

  return `${century}${ending}`;
};