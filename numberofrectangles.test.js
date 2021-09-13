const { numberOfRectangles } = require("./numberofrectangles");

describe("Tests", () => {
  it("test", () => {
    expect(numberOfRectangles(4, 4)).toBe(100);
    //Test.assertEquals(numberOfRectangles(5, 5), 225, "");
  });
});
