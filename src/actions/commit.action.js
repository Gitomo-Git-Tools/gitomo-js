const { executeCommand, askQuestion } = require('../utils');

async function commitAction() {
    try {
      const result = await executeCommand(`git status`);
      console.log(result);

      let response = await askQuestion('Continue to commit? (y/n)')

      if (response == 'yes' || response == 'y') {
        let message = await askQuestion('Write your commit message \n')
        await executeCommand(`git commit -m '${message}'`);
      } else {
        process.exit();
      }
    } catch (error) {
      console.error(error);
    }

  }

module.exports = { commitAction }
