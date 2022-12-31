// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];//given code
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
    },
    {
      type:'input',
      message: "Please input your Table of Contents.",
      name: 'contents',
    },
    {
      type:"input",
      message: "Please describe installation instructions.",
      name:"installation",
    },
    {
      type:"input",
      message: "Please describe the usage of your project.",
      name: "usage",
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'license',
      choices: ["MIT","Apache","Other"],
    },
    {
      type: "input",
      message: "Please describe contribution guidelines.",
      name: "contributing"
    },
    {
      type:"input",
      message: "Please input your test instructions.",
      name:"testing"
    }
    ])
    .then((data) => {
      console.log(data)
      const genReadME = `${data.title.toLowerCase().split(' ').join('')}.json`;
  
      fs.writeFile(genReadME, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    });


  ;
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
