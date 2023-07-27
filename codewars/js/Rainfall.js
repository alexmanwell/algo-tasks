// https://www.codewars.com/kata/56a32dd6e4f4748cc3000006

const mean = (town, strng) => {
  if (!towns.some(t => t === town)) {
    return -1;
  }

  const rainfalls = strng.split('\n');

  let values = getValues(rainfalls, town);

  let result = 0;
  for (const value of values) {
    result += value;
  }

  return (values.length === 0) ? -1 : result / values.length;
};


const variance = (town, strng) => {
  if (!towns.some(t => t === town)) {
    return -1;
  }

  const rainfalls = strng.split('\n');
  let values = getValues(rainfalls, town);

  const avgRainfall = mean(town, strng);
  let result = 0;
  for (const value of values) {
    result = (avgRainfall < value) ?
      result + Math.pow(value - avgRainfall, 2) :
      result + Math.pow(avgRainfall - value, 2);
  }

  return (values.length === 0) ? -1 : result / values.length;
};

const getValues = (rainfalls, town) => {
  let values = [];
  for (const rainfall of rainfalls) {
    if (rainfall.includes(town)) {
      const digits = rainfall.split(',');
      for (const digit of digits) {
        values.push(parseFloat(digit.replace(/[^\d\.]/g, '')));
      }
    }
  }

  return values;
};

const towns = [
  "Rome",
  "London",
  "Paris",
  "NY",
  "Vancouver",
  "Sydney",
  "Bangkok",
  "Tokyo",
  "Beijing",
  "Lima",
  "Montevideo",
  "Caracas",
  "Madrid",
  "Berlin"
];