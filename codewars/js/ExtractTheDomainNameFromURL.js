// https://www.codewars.com/kata/514a024011ea4fb54200004b

const domainName = (url) => {
  if (url.match(new RegExp("//"))) {
    url = url.substring(url.indexOf("//") + 2);
  }
  if (url.match(new RegExp("www"))) {
    url = url.substring(url.indexOf(".") + 1);
  }

  return url.substring(0, url.indexOf("."));
};