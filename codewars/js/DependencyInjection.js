/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
class DI {

  constructor(dependency) {
    this.dependency = dependency;
  }

  inject(func) {
    let methods = func.toString().match(/function\s?\((.+)\)\s?{/);
    methods = methods && methods[1].split(",").map(function (i) {
      return i.replace(/\s+/, '');
    });
    const funcs = [];

    for (let i = 0; methods && i < methods.length; i++) {
      funcs.push(this.dependency[methods[i]]);
    }

    return function () {
      return func.apply(func, funcs);
    };
  };
}

// another solution. 
class DI {
  constructor(dependencies) {
    this.dependencyStore = dependencies;
  }

  inject(func) {
    const code = func.toString();
    const paramsStart = code.indexOf('(') + 1;
    const paramsEnd = code.indexOf(')');
    const dependencies = code.slice(paramsStart, paramsEnd)
      .split(', ')
      .map(param => this.dependencyStore[param])
      .filter(Boolean);

    return () => func(...dependencies);
  }
}
