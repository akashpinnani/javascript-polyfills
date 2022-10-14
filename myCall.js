Function.prototype.myCall = function(scope, ...args) {
    scope._this = this;
      return scope._this(...args);
  };