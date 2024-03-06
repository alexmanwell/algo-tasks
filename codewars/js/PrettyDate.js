// https://www.codewars.com/kata/53988ee02c2414dbad000baa

const TIMES = {
  1: "second",
  60: "minute",
  3600: "hour",
  86400: "day",
  604800: "week"
};

const ARTICLES = {
  "hour": "an",
  "minute": "a",
  "day": "a",
  "week": "a",
  "second": "a",
};

const toPretty = (seconds) => {
  if (seconds === 0) {
    return "just now";
  }
  let amount = 0;
  let date = "";
  for (let time of Object.keys(TIMES).reverse()) {
    if (Math.floor(seconds / +time) > 0) {
      amount = Math.floor(seconds / +time);
      date = TIMES[time];
      break;
    }
  }

  return amount === 1
    ? ARTICLES[date] + " " + date + " ago"
    : amount + " " + date + "s" + " ago";
};