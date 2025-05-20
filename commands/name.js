const { execSync } = require('child_process');

module.exports = (name) => {
    if(!name) {
        console.log('Use: gcli name <username>');
        return;
    }

    execSync(`git config --global user.name "${name}"`, { stdio: 'inherit' });
};