const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, gitprofile) {
        super(name,id,email)

        this.gitprofile = gitprofile;

    }
    getgit(){
        return this.gitprofile;
    }
    getRole() {
        return 'Engineer';

    }
}
module.exports = Engineer;