// https://www.codewars.com/kata/57814d79a56c88e3e0000786

const encrypt = (text, n) => {
  if (text !== null && text && n > 0) {
    let count = 0;
    while (count < n) {
      text = text.split("").map((c, index) => {
          return (index % 2 === 1) ? c : "";
        }).join("")
        + text.split("").map((c, index) => {
          return (index % 2 === 0) ? c : "";
        }).join("");
      count++;
    }
  }

  return text;
};

const decrypt = (text, n) => {
  if (text|| n > 0) {
    const result = new Array(text.length);
    let count = 0;
    while (count < n) {
      let j = 0;
      for (let i = 1; i < result.length; i += 2) {
        result[i] = text[j++];
      }
      for (let i = 0; i < result.length; i += 2) {
        result[i] = text[j++];
      }
      text = result.join('');
      count++;
    }
  }

  return text;
};