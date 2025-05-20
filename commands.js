module.exports = {
  repo: require('./commands/repo'),
  commit: require('./commands/commit'),
  deploy: require('./commands/deploy'),
  main: require('./commands/main'),
  name: require('./commands/name'),
  email: require('./commands/email'),
  help: require('./commands/help')
};