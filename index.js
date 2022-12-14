const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template");

teamArray = [];
// Functions:
// Add validation later to the questions similar to the readme generator!!!!!
function runApp() {
  // Start prompting the questions
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please select what type of Employee you would like to add",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            htmlBuilder();
        }
      });
  }
  // Add Manager Function
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter your Manager's name",
        },

        {
          type: "input",
          name: "managerId",
          message: "Please enter your Manager's ID number",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "Please enter you Manager's email address",
        },

        {
          type: "input",
          name: "managerPhone",
          message: "Please enter yout Manager's phone number",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerPhone
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  // Add Engineer Function
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please enter your engineer's name",
        },
        {
          type: "input",
          name: "engineerId",
          message: "Please enter your engineer's id",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Please enter your engineer's email?",
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "Please your engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  // Add Intern Function
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please enter the Intern's full name",
        },

        {
          type: "input",
          name: "internId",
          message: "Please enter the Intern's ID number",
        },

        {
          type: "input",
          name: "internEmail",
          message: "Please enter the Intern's email address",
        },

        {
          type: "input",
          name: "internSchool",
          message:
            "Please enter the school the Intern's is currently attending",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  // Create team function
  function htmlBuilder() {
    console.log("Team successfully created!");
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  createTeam();
}

runApp();
