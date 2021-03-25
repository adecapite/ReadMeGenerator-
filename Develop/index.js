// TODO: Include packages needed for this application

const { title } = require('process')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create a function to write README file
// function writeToFile(fileName, data) 
// {
//     inquirer.prompt(data)
// }

// TODO: Create a function to initialize app
function init() {
const fileSystem = require('fs')
const inquirer = require('inquirer')
const Generatemarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
inquirer
   .prompt([{
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
        type: 'input',
        name: 'email',
        message: 'whats ya email?',
    }
    
       
   ])
   .then((
    
   dataEntry) => 
   {
        /*
        {
           title,
           description,
           installation,
           usage,
           contribution,
           testing,
           license,
           GitHub,
           email
       }
        */
    // const data =
    // [
    //     {
    //         title: title,
    //         description: description,
    //         installation: installation,
    //         usage: usage,
    //         contribution: contribution,
    //         testing: testing,
    //         license: license,
    //         GitHub: GitHub,
    //         email: email
    //     }
    // ];
    const template = generateMarkdown(dataEntry);
    // TODO: Create a function to write README file
function writeToFile(template) 
{
    fileSystem.writeFile('README.MD', template,(err) => 
    {
        if(err)
        {
            console.log(err)
        }
        console.log('README has been created')
    })
}
writeToFile(template);
   }
   );}

// Function call to initialize app
init();
