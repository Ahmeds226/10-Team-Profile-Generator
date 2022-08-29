// Calling Manager parent class
const Manager = require("../lib/Manager");

// Test ID's:
// Name: Ahmed
// GitHub: Ahmeds226
// Email: iahmed.s226@gmail.com

// Tests:
test("Test to create an office number", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager(
    "Ahmed",
    2,
    "iahmed.s226@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Test to see if officeNumber will return office number", () => {
  const testOfficeNumber = 2;
  const employeeInstance = new Manager(
    "Ahmed",
    2,
    "iahmed.s226@gmail.com",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing the Manager's role", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Ahmed", 2, "iahmed.s226@gmail.com", 2);
  expect(employeeInstance.getRole()).toBe(returnValue);
});
