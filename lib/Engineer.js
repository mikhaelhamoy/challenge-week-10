const Employee = require('./Employee');

class Engineer {
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id =  id;
        this.email =  email;
        this.position = 'Engineer';
        this.gitHub =  gitHub;
    }
}

module.exports = Engineer;