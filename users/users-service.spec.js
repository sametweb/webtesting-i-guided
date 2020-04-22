const { validate } = require("./users-service");

describe("users-service.js", () => {
  describe(".validate()", () => {
    it("it should return false if the user is missing username or password", () => {
      expect(validate({})).toBe(false);
      expect(validate({ username: "sad" })).toBe(false);
      expect(validate({ password: "asd" })).toBe(false);
    });

    it("should return true when user has a username and password", () => {
      expect(validate({ username: "sam", password: "pass" })).toBe(true);
    });

    it.todo("isAdmin should be true or false");
    it.todo("username should be at least 2 character");
  });
});
