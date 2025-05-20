const { execSync } = require('child_process');

module.exports = (message) => {
    if(!message) {
        console.log('Use: gcli commit <message>');
        return;
    }

    execSync(`git add . && git commit -m "${message}"`, { stdio: 'inherit' });
};