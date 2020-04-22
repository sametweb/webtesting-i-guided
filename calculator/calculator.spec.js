const { add } = require("./calculator.js");

// test away!
describe("calculator.js", () => {
  //test case
  it("should run tests without errors", () => {
    //arrange --> setup the world
    const expected = 10;
    //act --> execute the code we're testing
    const check = add(4, 5, 1);
    //assert --> check our assumptions
    expect(expected).toBe(check);
  });

  describe(".add()", () => {
    it("should add two numbers", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(3, 2)).toBe(5);
      expect(add(2, 0)).toBe(2);
      expect(add(0, 0)).toBe(0);
    });
    it("return the number if only one argument", () => {
      expect(add(3)).toBe(3);
    });
    it("return 0 when called with no arguments", () => {
      expect(add()).toBe(0);
    });
  });
});

// try to make the tests fail, before making them pass
// jest runs files ending in .test.js or spec.js
// jest run .js files contained inside any __tests__ folder at any level
// low hanging freuit first (happy path -> if the world is perfect, what does it do)
// you'll most likely have to make itup and make it happen
