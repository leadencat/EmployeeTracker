const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const genHtml = require('./src/generateHTML')
const team = [];

function teamBuilder() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role would you like to select?',
            choices: ['Intern', 'Engineer', 'Manager', 'None'],
            name: 'employeeType'
        }
    ])
        .then((data) => {
            if (data.employeeType === 'Intern') {
                newIntern(data);
            } else if (data.employeeType === 'Engineer') {
                newEngineer(data);
            } else if (data.employeeType === 'Manager') {
                newManager(data);
            } else {
                buildTeam(team);
            }
        })
};

function newIntern(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the interns employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the interns email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What school does the intern go to?',
            name: 'school'
        }
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            teamBuilder();
        })
};

function newEngineer(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the engineers employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the engineers email?',
            name: 'email'
        }
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            teamBuilder();
        })
};

function newManager(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the managers employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'ofcNum'
        }
    ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.ofcNum);
            team.push(manager);
            teamBuilder();
        })
};

function buildTeam(team) {
    const generateHTML = genHtml(team);

    fs.writeFile('index.html', generateHTML, (err) => 
        err ? console.log(err) : console.log('Generated HTML file!'));
};

teamBuilder();