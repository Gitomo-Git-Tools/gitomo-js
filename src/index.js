#!/usr/bin/env node

const cli = require('cac')();

const { commitAction } = require('./actions/commit.action');
const { explainAction } = require('./actions/explain.action');


cli
  .command('commit', 'Commit a repository after you see your git status')
  .action(commitAction);



cli.command('explain', 'Explain Git Commands')
  .option('--language <language>', 'Choose a language', { default: 'ar' })
  .action(explainAction);


cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})


cli.help()
cli.version('0.0.1')

cli.parse()
