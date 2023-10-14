// https://www.codewars.com/kata/5286d92ec6b5a9045c000087
// https://www.youtube.com/watch?v=8Xuftz2IiAI
// timeline position 01:04:07 Задача про url параметры

/*
const url = "user.name.firstname=Bob" +
"&user.name.lastname=Smith" +
"&user.favoritecolor=Light%20Blue" +
"&expreriments.theme=dark"

const data = {
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  },
  'experiments': {
    theme: 'dark'
  }
};
*/

const convertQueryToMap = (str) => {
  const obj = {};
  if (str.length !== 0) {
    const parts = str.split("&").map((subQuery) => subQuery.split("."));
    for (let i = 0; i < parts.length; i++) {
      let temp = obj;
      for (let key = 0; key < parts[i].length - 1; key++) {
        let name = parts[i][key];
        if (temp[name]) {
          temp = temp[name];
        } else {
          temp[name] = {};
          temp = temp[name];
        }
      }
      const name = parts[i][parts[i].length - 1].split("=");
      temp[name[0]] = decodeURIComponent(name[1]);
    }
  }

  return obj;
};

console.log(convertQueryToMap(
  "user.name.firstname=Bob" +
  "&user.name.lastname=Smith" +
  "&user.favoritecolor=Light%20Blue" +
  "&expreriments.theme=dark")
);
