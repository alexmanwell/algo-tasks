// https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045

function Node(data) {
  this.data = data;
  this.next = null;
}

const insertSort = (head) => {
  if (head) {
    let sorted = new Node(head.data, head.next);
    while (head !== null) {
      let node = sorted;
      while (node.next && node.next.data < head.data) {
        node = node.next;
      }

      let temp = head.next;
      head.next = node.next;
      node.next = head;
      head = temp;
    }
    head = sorted.next;
  }

  return head;
};