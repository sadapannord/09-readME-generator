// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const generateMarkdown = require('./generateMarkdown.js')
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
      name: 'Description',
    },
    {
      type: "input",
      message: "Please describe installation instructions.",
      name: "Installation",
    },
    {
      type: "input",
      message: "Please describe the usage of your project.",
      name: "Usage",
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'License',
      choices: ["MIT", "Apache"],
    },
    {
      type: "input",
      message: "Please describe contribution guidelines.",
      name: "Contributing"
    },
    {
      type: "input",
      message: "Please input your test instructions.",
      name: "Testing"
    }, 
    {
      type: "input",
      message: "What is your gitHub username?",
      name: "gitHub"
    },
    {
      type: "input",
      message: "What is your email?",
      name:"email"
    }

  ])
  .then((data) => {
    const genReadME = generateMarkdown(data)
    // `${data.Title.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile("./output/README.md", (genReadME), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

