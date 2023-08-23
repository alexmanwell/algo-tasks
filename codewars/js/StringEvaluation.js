// https://www.codewars.com/kata/57f548337763f20e02000114

const getAmountSameSymbolsList = (symbols) => {
  let map = new Map();
  symbols.split("").forEach((c) => {
    map.set(c, (map.get(c) || 0) + 1);
  });

  return map;
};

const getValue = (map, expr) => {
  return (map.get(expr) === undefined) ? Number(expr) : Number(map.get(expr));
};

const stringEvaluation = (string, conditions) => {
  let result = [];
  const map = getAmountSameSymbolsList(string);
  for (let i = 0; i < conditions.length; i++) {
    const expr = conditions[i];
    const sign = expr.slice(1, expr.length - 1);
    const firstExpr = getValue(map, expr.slice(0, 1));
    const secondExpr = getValue(map, expr.slice(expr.length - 1));
    if (eval(firstExpr + sign + secondExpr)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};