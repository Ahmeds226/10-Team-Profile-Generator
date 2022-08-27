// Calling Manager parent class
const Manager = require("../lib/Manager");

// Test ID's:
// Name: Ahmed
// GitHub: AhmedShahnawazTest
// Email: testahmeds@icloud.com

// Tests:
test("Test to create an office number", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Test to see if officeNumber will return office number", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing the Manager's role", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Ahmed", 2, "testahmeds@icloud.com", 2);
  expect(employeeInstance.getRole()).toBe(returnValue);
});
