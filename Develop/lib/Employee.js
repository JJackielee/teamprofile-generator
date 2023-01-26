// Employee class that takes in name, id and email as its constructor
// it will store all the information of new employee
// it has methods that returns name, id number and email as well as which role it is
class Employee {
    constructor(name, id, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
    getName() {
        return this.name;
    }
    getId(){

        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }

  }
  module.exports = Employee;