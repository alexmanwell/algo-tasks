// https://www.codewars.com/kata/5921c0bc6b8f072e840000c0

const CLASSIFIER = {
  "UNORDERED": 0,
  "STRICTLY_INCREASING": 1,
  "NOT_DECREASING": 2,
  "STRICTLY_DECREASING": 3,
  "NOT_INCREASING": 4,
  "CONSTANT": 5
};

const compares = {
  "CONSTANT": (arr) => arr.filter((_, i) =>
    arr[0] === arr[i]
  ).length === arr.length,
  "STRICTLY_INCREASING": (arr) => arr.filter((v, i, arr) =>
    (i < arr.length - 1) ? arr[i] < arr[i + 1] : arr[i]
  ).length === arr.length,
  "NOT_DECREASING": (arr) => arr.filter((v, i, arr) =>
    (i < arr.length - 1) ? arr[i] <= arr[i + 1] : arr[i]
  ).length === arr.length,
  "STRICTLY_DECREASING": (arr) => arr.filter(
    (v, i, arr) => (i < arr.length - 1) ? arr[i] > arr[i + 1] : arr[i]
  ).length === arr.length,
  "NOT_INCREASING": (arr) => arr.filter(
    (v, i, arr) => (i < arr.length - 1) ? arr[i] >= arr[i + 1] : arr[i]
  ).length === arr.length,
};

const sequenceClassifier = (arr) => {
  for (let key of Object.keys(compares)) {
    if (compares[key](arr)) {
      return CLASSIFIER[key];
    }
  }

  return CLASSIFIER.UNORDERED;
};