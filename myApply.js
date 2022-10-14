//apply polyfill

  Function.prototype.myApply = function(scope, args) {
    scope._this = this;
      return scope._this(...args);
  };
