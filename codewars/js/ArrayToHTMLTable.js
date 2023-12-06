// https://www.codewars.com/kata/5e7e4b7cd889f7001728fd4a

const toTable = (data, hasHeaders = false, hasIndex = false) => {
  let result = "<table>";
  let index = 0;
  if (hasHeaders) {
    result += "<thead><tr>";
    result += hasIndex ? "<th></th>" : "";
    for (let i = 0; i < data[index].length; i++) {
      result += `<th>${data[index][i]}</th>`;
    }
    result += "</tr></thead>";
    index++;
  }
  result += "<tbody>";
  for (let i = index; i < data.length; i++) {
    result += "<tr>";
    result += hasIndex ? `<td>${index ? i : i + 1}</td>` : "";
    for (let j = 0; j < data[i].length; j++) {
      const elem = data[i][j];
      result += `<td>${elem !== null ? elem : ""}</td>`;
    }
    result += "</tr>";
  }

  return result + "</tbody></table>";
};