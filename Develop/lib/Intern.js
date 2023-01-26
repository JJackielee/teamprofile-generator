// Intern class that takes in name, id, email and school as its constructor
// extends the class Employee.
// it will store all the information of new Intern
// it has methods that returns name, id number and email as well as which role it is
// additional it also has methods that returns the school of the engineer.
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
      super(name, id , email);
      this.school = school;
  }
  getRole(){
    return "Intern";
    
  }
  
  getSchool(){
    return this.school;

  }
}

module.exports = Intern;