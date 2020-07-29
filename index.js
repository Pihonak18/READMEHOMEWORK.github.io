const fs = require("fs");
const path = require("path");
//Loading required Modules
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  //rest of the questions here....
  {
      type: "input",
      name: "email",
      message: "What is your Email Address?"
  },
  {
      type: "input",
      name: "title",
      message: "What is your Projects Name?"
  },
  {
      type: "input",
      name: "description",
      message: "Please Write a Short Description of your Project"
  },
  {
      type: "list",
      name: "license",
      message: "What Kind of License Should your Project Have?",
      choices: ["MIT", "APACHIE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
      type: "input",
      name: "installation",
      message: "What Command Should be Run to Install Dependencies?",
      default: "npm Install"
  },
  {
      type: "input",
      name: "test",
      message: "What Command Should be Run to Run Tests?",
      default: "npm Test"

  },
  {
      type: "input",
      name: "usage",
      message: "What Does the User Need to Know About the Repo?"
  },
  {
      type: "input",
      name: "contributing",
      message: "What Does the User Need to Know About Contributing to the Repo?"
  },
    //rest of the questions here....
   
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquireResponses) => {
        writeToFile("README.md", generateMarkdown({...inquireResponses}));
    })
}

// function call to initialize program
init();
