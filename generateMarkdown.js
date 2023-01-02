// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === "MIT") {
    //generate MIT license
    return `![MIT](https://img.shields.io/badge/license-MIT-blue)`
  } else if (License === "Apache"){
    //generate Apache license
  }
  else {""}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (data.License === MIT) {
    //generate MIT license link
  } else if (data.License === Apache){
    //generate Apache license link
  }
  else {""}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {} //get description from google

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.License)}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation) //#is link to data, but has to be lowercase and one word
// add more contents

## Installation //create header
${data.Installation} //link to data from index.js



## License
${renderLicenseSection(data.License)} //here we'll have description of license



`;
}

module.exports = generateMarkdown;
