// Calling Intern parent class
const Intern = require("../lib/Intern");

// Test ID's:
// Name: Ahmed
// GitHub: AhmedShahnawazTest
// Email: testahmeds@icloud.com

// Tests:
test("Test to create a new school", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Test to see if officeNumber will return office number", () => {
  const testSchool = "School Name";
  const employeeInstance = new Intern(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testSchool
  );
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing the Intern's role", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    "School Name"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
