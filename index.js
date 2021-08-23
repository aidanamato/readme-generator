// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create function to retrieve user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project's title!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
      validate: descriptionInput =>{
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description for your project!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'instillation',
      message: 'Enter the required steps to install the project. (Optional)'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions and examples for proper usage of your project.',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter instructions and examples for proper usage of your project.');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license does your project use?',
      choices: ['Apache License 2.0', 'GNU GPLv3', 'ISC', 'MIT', 'Other']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who are the contributors of your project?',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log("Please enter the contributors of your project!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions for your project. (Optional)'
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: emailConfirm => {
        if (emailConfirm) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    }
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
  .then(userResponse => {
    return generateMarkdown(userResponse);
  })
  .then(readmeMarkdown => {
    writeToFile('./dist/README.md', readmeMarkdown);
  })
  .catch(err => {
    console.log(err)
  });
};

// Function call to initialize app
init();
