// Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'userName'
    },
    {
        type: 'input',
        message: "what is your email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
    },
    {
        type: 'input',
        message: "Describe you project.",
        name: 'title',
    },
    {
        type: 'list',
        message: "Choose the license for your project.",
        choices: ['MIT', 'Apache 2.0', 'GNU v3.0', 'Boost Software License', 'Creative Commons Zero v1.0', 'Eclise Public Lincense 2.0', 'Mozilla Public License 2.0', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Any commands needed to install dependences?",
        name: 'dependencies'
    },
    {
        type: 'input',
        message: "What is the input to run tests?",
        name: 'test'
    },
    {
        type: 'input',
        message: "Describe any specific usage information about using this repo.",
        name: 'usage'
    },
    {
        type: 'input'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join())
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('Gernerating markdown.');
            writeToFile('./README.md', generateMarkdown({ answers }));
        })
}

// Function call to initialize app
init();
