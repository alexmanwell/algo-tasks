// https://www.codewars.com/kata/59df2f8f08c6cec835000012

const meeting = (str) => {
  return str
    .replace(/;/gi, ' ')
    .split(' ')
    .map(v =>
      v
        .split(':')
        .reverse()
        .join(', ')
        .toUpperCase()
    )
    .sort()
    .map(v => '(' + v + ')')
    .join('')
};