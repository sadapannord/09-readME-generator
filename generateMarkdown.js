// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === "MIT") {
    //generate MIT license
    return `![MIT](https://img.shields.io/badge/license-MIT-blue)`
  } else if (License === "Apache"){
    //generate Apache license
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else {""}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === "MIT") {
    //generate MIT license link
    return 'https://opensource.org/licenses/MIT'
  } else if (License === "Apache"){
    //generate Apache license link
    return 'https://www.apache.org/licenses/LICENSE-2.0.txt'
  }
  else {""}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License === "MIT") {
    return 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.'
  } else if (License === "Apache") {
    return 'The Apache License is a permissive free software license written by the Apache Software Foundation. It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.'
  } else {""}
} //get description from google

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.License)}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Testing Instructions](#testinginstructions)
- [Questions](#questions)


## Installation 
${data.Installation} 



## License
${renderLicenseLink(data.License)}

${renderLicenseSection(data.License)} 

## Usage
${data.Usage}

## Testing Instructions
${data.Testing}


## Questions
In order to reach me at my email please email: [${data.email}](${data.email})

In order to view my GitHub repository please visit: [${data.gitHub}](${data.gitHub})

`;
}

module.exports = generateMarkdown;
