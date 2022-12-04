const { askQuestion } = require('../utils');

const arDocs = require('../docs/ar.json');
const enDocs = require('../docs/en.json');

const explainDictionary = {
  ar: arDocs,
  en: enDocs
}

async function explainAction(options) {

  const { language } = options;

  let response = await askQuestion('Write the git command you want \n')

  if (!response.includes('git'))
    return console.error('Not a git command');

  // currently we don't support options with each command
  response = response
    .replace(/^git /, '') //remove `git` at start
    .split(' ')[0];

  console.log(explainDictionary[language][response] || 'Command Not Explained Yet');

}

module.exports = { explainAction }
