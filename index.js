const Manager = require('./lib/Manager');
const team = []
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
        console.log(answers);
        const manager = new Manager(answers.managersname,answers.managersID,answers.manageremail,answers.office)
        team.push(manager)
        mainMenu()
    })
}

//EMPLOYEE INPUT QUESTIONS
function addEngineer() {
    inquire.prompt([
        {
            type: 'input',
            name: 'employeesname',
            message: 'Enter the employees name:',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the employees ID:',
        },
        {
            type: 'input',
            name: 'employees-email',
            message: 'Enter the employees email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the employees github profile:'
        },
    ]).then(answers => {
        console.log(answers);
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
            name: 'interns-email',
            message: 'Enter the interns email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school name:'
        },
    ]).then(answers => {
        console.log(answers);
        mainMenu()
    })
}

const mainMenu = () => {
    inquire.prompt({ type: "list", name: "task", message: "select employee type", choices: ["manager", "engineer", "intern"] }).then(answer => {
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
            default:
                break;
        }
    })
}
mainMenu()