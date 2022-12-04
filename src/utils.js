const exec = require('child_process').exec;
const readline = require('readline');

async function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }))
}

async function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, async function(err, stdout, stderr) {
      if (err)
        reject(err);
      else if (stderr)
        reject(stderr);
      else
        resolve(stdout);
    });
  });
}

module.exports = {
  executeCommand,
  askQuestion,
}
