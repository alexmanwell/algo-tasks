// https://www.codewars.com/kata/52817f04b70058a1b1000037

class Process {

  constructor(id, arr) {
    this.id = id;
    this.arr = arr;
  }
}

const makeProcessTree = (list) => {
  let roots = {};
  let children = {};
  list.forEach((v, i) => {
    children[v.pid] = i;
    list[i].children = [];
  });

  for (let obj of list) {
    if (obj.ppid !== -1) {
      const index = children[obj.ppid];
      const child = obj.children ? obj.children : [];
      list[index].children.push(new Process(obj.pid, child));
    } else {
      roots = new Process(obj.pid, obj.children);
    }
  }

  return roots;
};