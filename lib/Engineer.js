// Engineer Parent Class
// Calling Employee class
const Employee = require("./Employee");

// Properties and Methods
class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }

  getGitHub() {
    return this.GitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
