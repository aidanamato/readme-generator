// if instillation section, creates TOC entry for instillation
const instillationTOC = instillation => {
  if (instillation) {
    return `
* [Installation](#installation)`;
  } else {
    return '';
  }
};

// if instillation section, creates the instillation section in the markdown
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

// if tests section, creates TOC entry for tests
const testsTOC = tests => {
  if (tests) {
    return `
* [Tests](#tests)`;
  } else {
    return '';
  }
};

// if tests section, creates tests section in the markdown
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

const licenseTOC = license => {
  if (license !== 'No license') {
    return `
* [License](#license)`;
  } else {
    return '';
  }
};

// Function to create license badge
const renderLicenseBadge = (license, licenseOther) => {
  if (license === 'Other') {
    return `
![${licenseOther} License](https://img.shields.io/badge/license-${licenseOther}-green)
`
  } else if (license !== 'No license') {
    return `
![${license} License](https://img.shields.io/badge/license-${license}-green)
`;
  } else {
    return '';
  }
};

// Function to create link to license
const generateLicenseLink = (license, licenseOther) => {
  // If license is other does not create a link but displays the license name entered by user
  if (license === 'Other') {
    return `

## License

${licenseOther}`;

  // If user selects license from list, generate link to that license
  } else if (license === 'Apache License 2.0') {
    return `

## License

[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
  
  } else if (license === 'GNU GPLv3') {
    return `

## License

[${license}](https://https://choosealicense.com/licenses/gpl-3.0/)`;
  
  } else if (license === 'ISC') {
    return `

## License

[${license}](https://choosealicense.com/licenses/isc/)`;
  
  } else if (license === 'MIT') {
    return `

## License

[${license}](https://choosealicense.com/licenses/mit/)`;

  // if user selects no license return empty string
  } else if (license === 'No license') {
    return '';
  }
};

const creditsTOC = credits => {
  if (credits) {
    return `
* [Credits](#credits)`;
  } else {
    return '';
  }
};

const generateCredits = credits => {
  if (credits) {
    return `

## Credits

${credits.replace(/, /g, `  
`)}`;
  } else {
    return '';
  }
};

// Function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license, data.licenseOther)}
## Description

${data.description}

## Table of Contents
${instillationTOC(data.instillation)}
* [Usage](#usage)${licenseTOC(data.license)}${creditsTOC(data.credits)}
* [Authors](#authors)${testsTOC(data.tests)}
* [Questions](#questions)
${generateInstillation(data.instillation)}
## Usage

${data.usage}${generateLicenseLink(data.license, data.licenseOther)}${generateCredits(data.credits)}

## Authors

${data.authors.replace(/, /g, `  
`)}
${generateTests(data.tests)}
## Questions

Please reach out of you have any additional questions!

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
