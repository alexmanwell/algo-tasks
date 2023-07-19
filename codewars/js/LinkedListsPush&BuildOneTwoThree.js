// https://www.codewars.com/kata/55be95786abade3c71000079

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce((head, data) => {
    return push(head, data)
  }, null);
}