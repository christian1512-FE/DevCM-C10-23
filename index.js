

const inquire = require('inquirer');


//MANAGER INPUT QUESTIONS
function manager() {
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
            name: 'manager-email',
            message: 'Enter the managers email:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter the managers office number:'
        },
    ])
}

//EMPLOYEE INPUT QUESTIONS
function employee() {
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
    ])
}

//INTERN INPUT QUESTIONS

function intern() {
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
    ])
}
