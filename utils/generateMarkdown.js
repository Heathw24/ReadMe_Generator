// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![Generic badge](https://img.shields.io/badge/License-${data.license}-<COLOR>.svg)](https://shields.io/)

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](##Installation)
  2. [Usage](##Usage)
  3. [License](##License) 
  4. [Contributing](##Contributing)
  5. [Test](##Test)
  6. [Questions](##Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under a ${data.license} license.

  ## Contributing
  ${data.contributing} 

  ## Test
  ${data.test}

  ## Questions
  https://github.com/${data.github}

  If you have any questions please contact me at
  ${data.email}
`;
}

module.exports = generateMarkdown;
