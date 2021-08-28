const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.position = 'Intern';
        this.school =  school;
    }
}

module.exports = Intern;