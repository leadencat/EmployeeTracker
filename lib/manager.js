const employee = require('./employee');

class manager extends employee {
    constructor (name, id, email, ofcNum) {
        super(name, id, email);
        this.ofcNum = ofcNum;
    }

    userOfcNum () {
        return this.ofcNum;
    }

    userRole () {
        return 'Manager';
    }
};

module.exports = manager;