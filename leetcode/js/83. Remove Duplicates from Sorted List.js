// https://leetcode.com/problems/remove-duplicates-from-sorted-list

class ListNode {
  #val;
  #next;

  constructor(val, next) {
    this.#val = val;
    this.#next = next;
  }

  get val() {
    return this.#val;
  }

  get next() {
    return this.#next;
  }

  set next(listNode) {
    this.#next = listNode;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};