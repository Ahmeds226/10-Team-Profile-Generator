// Calling Employee parent class
const Employee = require("../lib/Employee");

// Test ID's:
// Name: Ahmed
// GitHub: AhmedShahnawazTest
// Email: testahmeds@icloud.com

// Tests:
test("Test to create a new employee", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing the employee name", () => {
  const name = "Ahmed";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing the employee ID", () => {
  const id = 2;
  const employeeInstance = new Employee("Ahmed", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing the employee email", () => {
  const email = "testahmeds@icloud.com";
  const employeeInstance = new Employee("Ahmed", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Test to get the employees name through getName method", () => {
  const testName = "Ahmed";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Test to get the employee ID through getID method", () => {
  const testID = 2;
  const employeeInstance = new Employee("Ahmed", testID);
  expect(employeeInstance.getID()).toBe(testID);
});

test("Test to get the employee email through getEmail method", () => {
  const testEmail = "testahmeds@icloud.com";
  const employeeInstance = new Employee("Ahmed", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing the Employee's role", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Ahmed", 2, "testahmeds@icloud.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
