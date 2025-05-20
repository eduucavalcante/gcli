const { execSync } = require('child_process');

module.exports = () => {
    execSync(`git branch -M main`, { stdio: 'inherit' });
};