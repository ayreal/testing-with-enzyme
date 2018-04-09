// in a test file, there is usually a single root describe() function
// and an it() function nested within it
// describe() is a test suite that describes what's under test
// (typically this is the React component)
// it() function is a description of the test
// adding     "test": "mocha ./src/**/*.spec.js" to the package.json "scripts" dependencies
// allows you to run "npm run test"

// mocha is only ES5 aware, need to tell it how to read ES6 syntax

const expect = require("chai").expect;

const add = (x, y) => x + y;

describe("add", () => {
  it("should add positive numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });
});
