const instillationTOC = instillation => {
  if (instillation) {
    return `* [Installation](#installation)`;
  } else {
    return '';
  }
};

const generateInstillation = instillation => {
  if (instillation) {
    return `
## Instillation

${instillation}
`;

  } else {
    return '';
  }
};

const testsTOC = tests => {
  if (tests) {
    return `* [Tests](#tests)`;
  } else {
    return '';
  }
};

const generateTests = tests => {
  if (tests) {
    return `
## Tests
    
${tests}
`;

  } else {
    return '';
  }
};

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

${instillationTOC(data.instillation)}
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
${testsTOC(data.tests)}
* [Questions](#questions)

${generateInstillation(data.instillation)}
## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}
${generateTests(data.tests)}
## Questions

If you have any additional questions you can contact me here:

* [GitHub](https://github.com/${data.githubUsername})
* [Email](${data.email})
`
};

// const mockData = {
//   title: 'My Project',
//   description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet',
//   instillation: 'officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est',
//   usage: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui',
//   license: 'MIT',
//   contributing: 'The boyz',
//   tests: 'officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est',
//   githubUsername: 'githubboyz',
//   email: 'theboyz@email.com'
// };

module.exports = generateMarkdown;
