const { add } = require("./add")

describe("addition", () => {
    xit("adds two numbers", ()=> {
      expect (add(2,3)).toBe(5)  
    })
})