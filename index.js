const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

teamArray = [];

function runApp() {
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

  function createTeam() {
    console.log("Team successfully created!");
  }
}
