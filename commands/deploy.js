const { execSync } = require('child_process');

module.exports = () => {
    execSync(`git push origin main`, { stdio: 'inherit' });
};