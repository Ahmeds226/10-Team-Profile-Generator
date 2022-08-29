// Calling Engineer parent class
const Engineer = require("../lib/Engineer");

// Test ID's:
// Name: Ahmed
// GitHub: Ahmeds226
// Email: iahmed.s226@gmail.com

// Tests:
test("Test to create a GitHub", () => {
  const testGitHub = "Ahmeds226";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "iahmed.s226@gmail.com",
    testGitHub
  );
  expect(employeeInstance.GitHub).toBe(testGitHub);
});

test("Testing getGitHub's response to get GitHub", () => {
  const testGitHub = "Ahmeds226";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "iahmed.s226@gmail.com",
    testGitHub
  );
  expect(employeeInstance.getGitHub()).toBe(testGitHub);
});

test("Testing the Engineer's role", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "iahmed.s226@gmail.com",
    "Ahmeds226"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
