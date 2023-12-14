// https://www.codewars.com/kata/5158bfce931c51b69b000001

const extractIds = (data) => {
  if (!Object.entries(data).length) {
    return [];
  }
  let stack = [data.items];
  let listOfIds = [data.id];
  while (stack.length) {
    const list = stack.pop();
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        const items = list[i].items;
        listOfIds.push(list[i].id);
        if (items) {
          stack.push(items)
        }
      }
    }
  }

  return listOfIds;
};