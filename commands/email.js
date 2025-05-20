const { execSync } = require('child_process');

module.exports = (email) => {
    if(!email) {
        console.log('Use: gcli email <email>');
        return;
    }

    execSync(`git config --global user.email "${email}"`, { stdio: 'inherit' });
};