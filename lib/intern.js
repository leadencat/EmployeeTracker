const employee = require('./employee');

class intern extends employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    userSchool () {
        return this.school;
    }

    userRole () {
        return 'Intern';
    }
};

module.exports = intern;