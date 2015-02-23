window.Foo = (function() {

  function Foo() {
 
  }

  Foo.greet = function(name) {
      return ("Hello, " + name + "!");
    };

  Foo.prototype = {
    plusOne: function(number) {
      return (number + 1);
    },
    sortArray: function(array) {
      return _.sortBy(array);
    },
    hasValue: function(list, array) {
      return _.contains(list, array);
    }
  };

  return Foo;

})();