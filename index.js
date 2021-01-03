const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your gitHub address:',
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project:',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributinbg to the project?',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test?',
        default: 'npm test',
    },

    {
        type: 'list',
        name: 'license',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}
// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...answers}));
    }).catch((err) => console.error(err));

}

// function call to initialize program
init();
