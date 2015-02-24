describe("Bar", function() {
  var bar;

  beforeEach(function(){
    bar = new Bar();
  });

  describe("squared", function() {

    it("returns a number squared", function() {
      expect( bar.squared(9) ).eq(81);
    });

  });

  describe("cubed", function() {

    it("returns a number cubed", function() {
      expect( bar.cubed(3) ).eq(27);
    });

  });


// PLACEHOLDER FOR DOOZY


// PLACEHOLDER FOR DOOZY

  describe("reverseString", function() {

    it("reverses a given string", function() {
      expect( bar.reverseString("abcde") ).eq("edcba");
    });

  });

  describe("cipher", function() {

    it("returns a string whose letters have been converted to the characters 100 places ahead of them in the character map", function() {
      expect( bar.cipher("Surfin Safari") ).eq("·ÙÖÊÍÒ·ÅÊÅÖÍ");
    });

  });  

    describe("decipher", function() {

    it("returns a string whose letters have been converted to the characters 100 places BEHIND them in the character map", function() {
      expect( bar.decipher("·ÙÖÊÍÒ·ÅÊÅÖÍ") ).eq("Surfin Safari");
    });

  });

    describe("rot13", function() {

    it("shifts each character in a string up 13 places in the alphabet", function() {
      expect( bar.rot13("Michaelangelo is a party dude") ).eq("Zvpunrynatryb vf n cnegl qhqr");
    });

  });


});