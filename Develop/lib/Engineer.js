// Engineer class that takes in name, id, email and github as its constructor
// extends the class Employee.
// it will store all the information of new Engineer
// it has methods that returns name, id number and email as well as which role it is
// additional it also has methods that returns the github of the engineer.

const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
      super(name, id , email);
      this.github = github;
  }
  getRole(){
    return "Engineer";
    
  }

  getGithub(){
    return this.github;

  }
}

module.exports = Engineer;