class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    userName () {
        return this.name;
    }

    userId () {
        return this.id;
    }

    userEmail () {
        return this.email;
    }

    userRole () {
        return 'Employee';
    }
};

module.exports = employee;