const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "AhmedShahnawazTest";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "AhmedShahnawazTest";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Ahmed",
    2,
    "testahmeds@icloud.com",
    "AhmedShahnawazTest"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
