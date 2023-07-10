const fs = require('fs');
const inquirer = require('inquirer');
//https://nodejs.dev/en/learn/accept-input-from-the-command-line-in-nodejs/

const ReadMeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project description?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What is your project installation instructions?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is your project usage?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What is your project contribution rules?",
    },
    {
        type: 'input',
        name: 'test',
        message: "What is your project test cases?",
    },
    {
        type: "list",
        name: "license",
        message: "What is your project licensing?",
        choices: ["MIT", "Apache"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];


async function generateReadMe() {
    await inquirer.prompt(ReadMeQuestions).then(ReadMeAnswers => {
        let readMeText = `
# ${ReadMeAnswers.title}
${ReadMeAnswers.license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" :
                "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            }

## Description
${ReadMeAnswers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licensing](#licensing)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${ReadMeAnswers.installation}

## Usage
${ReadMeAnswers.usage}

## Licensing
Distributed under the ${ReadMeAnswers.license} License

## Contributing
${ReadMeAnswers.contribution}

## Tests
${ReadMeAnswers.test}

## Questions
Github: [${ReadMeAnswers.username}](https://github.com/${ReadMeAnswers.username})
Email: ${ReadMeAnswers}.email`

        fs.writeFileSync("./README.md", readMeText);
    });
}

generateReadMe();