// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

const createMessage = (msg) => (fn) => {
  return fn
    ? createMessage(msg + ' ' + fn)
    : msg;
};