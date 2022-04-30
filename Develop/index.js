// Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'userName'
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
    },
    {
        type: 'input',
        message: "Describe you project:",
        name: 'description',
    },
    {
        type: 'list',
        message: "Choose the license for your project:",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"],
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
        message: "Describe any specific usage information about using this repo:",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Give the email of any contributors:",
        name: 'contributors'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('Gernerating markdown...');
            writeToFile('./README.md', generateMarkdown(answers));
        })
}

// Function call to initialize app
init();
