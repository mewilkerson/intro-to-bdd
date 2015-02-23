window.Foo = (function() {

  function Foo() {

  }

  Foo.prototype = {
    plusOne: function(number) {
      return (number + 1);
    },
    sortArray: function(array) {
      return _.sortBy(array);
    }
  };

  return Foo;

})();