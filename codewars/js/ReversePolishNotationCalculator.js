// https://www.codewars.com/kata/52f78966747862fc9a0009ae

const OPERATIONS = ['+', '-', '*', '/'];

const calc = (expr) => {
  let result = [];
  const tokens = expr.split(/\s+/);
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        result.push(result.pop() + result.pop());
        break;
      case '-':
        result.push(-result.pop() + result.pop());
        break;
      case '*':
        result.push(result.pop() * result.pop());
        break;
      case '/':
        result.push(1 / (result.pop() / result.pop()));
        break;
      default:
        result.push(parseFloat(tokens[i]));
    }
  }
  
  return result.pop() || 0;
};