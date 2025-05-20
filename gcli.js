#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];
const params = args.slice(1);
const commands = require('./commands');

if (commands[command]) {
  commands[command](params.join(' '));
} else {
  console.log(`Invalid command: "${command}"`);
}