// Manager class that takes in name, id, email and office number as its constructor
// extends the class Employee.
// it will store all the information of the Manager
// it has methods that returns name, id number and email as well as which role it is
// additional it also has methods that returns the office number of the engineer.
const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
      super(name, id , email);
      this.officeNumber = officeNumber;
  }
  getRole(){
    return "Manager";
  }

  getOfficeNumber(){
    return this.officeNumber;
  }
}

module.exports = Manager;