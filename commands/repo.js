const { execSync } = require('child_process');

module.exports = (url) => {
  if (!url) {
    console.log("Use: gcli repo <url>");
    return;
  }

  execSync(`git remote add origin ${url}`, { stdio: 'inherit' });
};