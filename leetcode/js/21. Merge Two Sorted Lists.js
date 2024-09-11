// https://leetcode.com/problems/merge-two-sorted-lists

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let result = new ListNode(0);
  let current = result;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;

  return result.next;
};