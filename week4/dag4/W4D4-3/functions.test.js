const {
  passwordVerifierLength,
  passwordVerifierIsNotNull,
  passwordVerifier1Uppercase,
  passwordVerifier1Lowercase,
  passwordVerifier1Number,
  passwordHasMoreThan3Requirements
} = require("./functions.js");
const myPasword = "BIER23";

test("Not more then 8 characters", function() {
  const output = passwordVerifierLength(myPasword);

  expect(output).toBe(true);
});

test("password is not null", function() {
  const output = passwordVerifierIsNotNull(myPasword);
  expect(output).toBe(true);
});

test("password has 1 uppercase", function() {
  const output = passwordVerifier1Uppercase(myPasword);
  expect(output).toBe(true);
});

test("password has 1 lowercase", function() {
  const output = passwordVerifier1Lowercase(myPasword);
  expect(output).toBe(true);
});

test("password has 1 number", function() {
  const output = passwordVerifier1Number(myPasword);
  expect(output).toBe(true);
});

test("password has 3 or more requirements And 1 lowcase is true", function() {
  const output = passwordHasMoreThan3Requirements(myPasword);
  expect(output).toBe(true);
});

// deze testen hieronder werken.

// test("Not more then 8 characters", function() {
//   const output = passwordVerifier(myPasword).length;
//   const expected = 8;
//   expect(output).toBeLessThanOrEqual(expected);
// });

// test("password is not null", function() {
//   const output = passwordVerifier(myPasword);
//   expect(output).not.toBeNull();
// });

// test("password has 1 uppercase", function() {
//   const output = passwordVerifier(myPasword);
//   expect(output).toMatch(/([A-Z]+)/);
// });

// test("password has 1 lowercase", function() {
//   const output = passwordVerifier(myPasword);
//   expect(output).toMatch(/([a-z]+)/);
// });

// test("password has 1 number", function() {
//   const output = passwordVerifier(myPasword);
//   expect(output).toMatch(/([0-9]+)/);
// });
