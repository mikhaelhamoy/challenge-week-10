const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('../src/page-template.js');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.manager;
        this.engineer = [];
        this.intern = [];
    }

    initializeTeam() {
        this.promptManager()
            .then(({ name, id, email, officeNum }) => {
                this.manager = new Manager(name, id, email, officeNum);
                this.menu();
            });
    }

    menu() {
        inquirer
            .prompt({
                type: 'list',
                name: 'menu',
                message: 'Menu:',
                choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
            })
            .then(({ menu }) => {
                switch (menu) {
                    case 'Add Engineer':
                        this.promptEngineer()
                            .then(({ name, id, email, github }) => {
                                this.engineer.push(new Engineer(name, id, email, github));
                                this.menu();
                            });
                        break;
                    case 'Add Intern':
                        this.promptIntern()
                            .then(({ name, id, email, school }) => {
                                this.intern.push(new Intern(name, id, email, school));
                                this.menu();
                            });
                        break;
                    case 'Finish Building Team':
                        fs.writeFile('./dist/team-profile.html', generatePage(this.manager, this.engineer, this.intern), err => {
                            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                            if (err)
                                console.log(err);
                            else 
                                console.log("File written successfully\n");
                        });
                        break;
                }
            });
    }

    promptManager() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee id? (Required)",
                validate: idInput => {
                    if (idInput && Number.isInteger(parseInt(idInput)) ) {
                        return true;
                    } else {
                        console.log("Please enter the manager's employee id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is the manager's office number? (Required)",
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }        
            }
        ]);
    }

    promptEngineer() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee id? (Required)",
                validate: idInput => {
                    if (idInput && Number.isInteger(parseInt(idInput))) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's employee id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's GitHub username!");
                        return false;
                    }
                } 
            }
        ]);
    }

    promptIntern() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee id? (Required)",
                validate: idInput => {
                    if (idInput && Number.isInteger(parseInt(idInput))) {
                        return true;
                    } else {
                        console.log("Please enter the intern's employee id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school? (Required)",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                } 
            }
        ]);
    }
}

module.exports = Team;