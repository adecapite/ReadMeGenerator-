
function renderLicenseBadge(license) {}


function renderLicenseLink(license) {}


function renderLicenseSection(license) {}


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
