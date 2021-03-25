// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
 # Table Of Contents 
  - [Project Title](#title)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contribution)
  - [Test](#testing)
  - [License](#license)
  - [GitHub Username](#github)
  - [Email](#email)
  ${data.title}
  ${data.description}
  ${data.installation}
  ${data.usage}
  ${data.contribution}
  ${data.testing}
  ${data.license}
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
