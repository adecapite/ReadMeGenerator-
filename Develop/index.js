// TODO: Include packages needed for this application
const fileSystem = require('fs')
const inquirer = require('inquirer')
const markdown = require('/Users/anthonydecapite/Desktop/osu-bootcamp/osu-col-fsf-pt-01-2021-u-c/09-NodeJS/02-Homework/Develop/utils')
// TODO: Create an array of questions for user input
const questions = [
   .prompt({
        type: 'input',
        name: 'title',
        message: "What is your project name ",
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'explain the instructions of installation',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how is it used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'provide guidelines for others to contribute to your project. ',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can functionality be tested?',
    },
    {
        type:'list',
        name: 'license',
        message: 'what license will your project be under?',
        choices: ['MIT','Apache','GPL'],
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'WHat is your GitHub username?',
    },
    {

    }
       
   ) 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
