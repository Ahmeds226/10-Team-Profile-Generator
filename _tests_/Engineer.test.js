// Calling engineer parent class
const Engineer = require("../lib/Engineer");

// Test ID's:
// Name: Ahmed
// GitHub: AhmedShahnawazTest
// Email: testahmeds@icloud.com

// Tests:
test("Test to create a GitHub", () => {
  const testGitHub = "AhmedShahnawazTest";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testGitHub
  );
  expect(employeeInstance.GitHub).toBe(testGitHub);
});

test("Testing getGitHub's response to get GitHub", () => {
  const testGitHub = "AhmedShahnawazTest";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testGitHub
  );
  expect(employeeInstance.getGitHub()).toBe(testGitHub);
});

test("Testing the role", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    "AhmedShahnawazTest"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
