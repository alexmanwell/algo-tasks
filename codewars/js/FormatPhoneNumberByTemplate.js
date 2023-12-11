// https://www.codewars.com/kata/61393fd03e441f001ac9c7d4

const formatNumber = (number, template) => {
  number = number.toString();
  const length = (template.match(new RegExp(/[#]+/g)) || []).join("").length;
  if (length - 1 >= number.length) {
    return "Invalid phone number";
  }

  let result = "";
  let index = 0;
  for (let c of template) {
    if (c === "#") {
      result += number.charAt(index);
      index++;
    } else {
      result += c;
    }
  }

  return result;
};