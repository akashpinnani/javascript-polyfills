Function.prototype.myBind = function(scope, ...args) {
    scope._this = this;
    return function() {
      return scope._this(...args);
    }
  };