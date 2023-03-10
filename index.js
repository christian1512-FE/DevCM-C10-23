const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const team = []
const htmlgenerator = require('./src/htmlgenerator')
const inquire = require('inquirer');


//MANAGER INPUT QUESTIONS
function addManager() {
    inquire.prompt([
        {
            type: 'input',
            name: 'managersname',
            message: 'Enter the managers name:'
        },
        {
            type: 'input',
            name: 'managersID',
            message: 'Enter the managers ID:'
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'Enter the managers email:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter the managers office number:'
        },
    ]).then(answers => {
        const manager = new Manager(answers.managersname, answers.managersID, answers.manageremail, answers.office)
        team.push(manager)
        mainMenu()
    })
}

//EMPLOYEE INPUT QUESTIONS
function addEngineer() {
    inquire.prompt([
        {
            type: 'input',
            name: 'engineersname',
            message: 'Enter the employees name:',
        },
        {
            type: 'input',
            name: 'engineersID',
            message: 'Enter the employees ID:',
        },
        {
            type: 'input',
            name: 'engineersemail',
            message: 'Enter the employees email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the employees github profile:'
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineersname, answers.engineersID, answers.engineersemail, answers.github)
        team.push(engineer)
        mainMenu()
    })
}

//INTERN INPUT QUESTIONS

function addIntern() {
    inquire.prompt([
        {
            type: 'input',
            name: 'internsname',
            message: 'Enter the interns name:',
        },
        {
            type: 'input',
            name: 'internsID',
            message: 'Enter the interns ID:',
        },
        {
            type: 'input',
            name: 'internsemail',
            message: 'Enter the interns email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school name:'
        },
    ])
        .then(answers => {
            const intern = new Intern(answers.internsname, answers.internsID, answers.internsemail, answers.school)
            team.push(intern)
            mainMenu()
        })
}

const buildteam = () => {
    fs.writeFileSync(path.join(__dirname, "/dist/", "team.html"), htmlgenerator(team))
}
const mainMenu = () => {
    inquire.prompt({ type: "list", name: "task", message: "select employee type", choices: ["manager", "engineer", "intern", "buildteam"] }).then(answer => {
        switch (answer.task) {
            case "manager":
                addManager()
                break;
            case "engineer":
                addEngineer()
                break;
            case "intern":
                addIntern()
                break;
            case "buildteam":
                buildteam()
                break;

            default:
                break;
        }
    })
}
mainMenu()