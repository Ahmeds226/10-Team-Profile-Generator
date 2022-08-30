# 10-Team-Profile-Generator

I have created a Team Profile Generator that utiilises the command line within the terminal to gather input from the user about their team and generate a fully designed HTML. This then provides the user with the teams details such as their name, email, GitHub and email. Tests have also been constrcuted and ran through Jest to esnure that they are passing and operable.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Instructions

The application will be invoked by using the following command:

```bash
node index.js
```

To test the application please run the code below in the termainal:

```bash
npm run test
```

## Sample HTML File / Preview:

<img src="./assets/images/preview.png" alt="" />

## Walkthrough Video

<!-- Link HERE -->
