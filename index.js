const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");

const generateTeam = require("./util/generateHtml");
const generateHtml = require('./util/generateHtml');
const employeeTeam = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const generateManager = () => {
  
         inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is this employee's ID"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the office number?"
            }
        ]).then((answers)=>{
            const newManager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber)

          employeeTeam.push(newManager);
        }).then(()=>menuSelection())
    }

const menuSelection = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'roleSelection',
            message: 'What is the role of your next team member?',
            choices: ['Engineer', 'Intern', 'No more team members: build my HTML'],
        }
    ]) .then((answers) => {
        if (answers.roleSelection === 'Engineer'){
        generateEngineer()
        } else if (answers.roleSelection === 'Intern'){
        generateIntern()
        }else {
        buildHtml()
        }
    })
}

const generateEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github username?'
        }
    ]).then((answers)=>{
        const newEngineer = new Engineer(answers.name, answers.id, answers.email,answers.github)

        employeeTeam.push(newEngineer);
        menuSelection();
})
}


const generateIntern = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?'
        }
    ]).then((answers)=>{
        const newIntern = new Intern(answers.name, answers.id, answers.email,answers.school)

        employeeTeam.push(newIntern);
        menuSelection();
    })
}


const buildHtml = () => {
    const teamHTML = generateTeam(employeeTeam)
        fs.writeFile(`index.html`, teamHTML, (err) => console.error(err));
}
const init = () => {
        generateManager()
}

init()
