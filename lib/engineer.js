const employee = require('./employee');

class engineer extends employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    userGithub () {
        return this.github;
    }

    userRole () {
        return 'Engineer';
    }
};

module.exports = engineer;