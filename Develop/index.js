// requires the inquirer and fs packet
// imports the classes that we created so we can create objects of certain roles
// imports generateHTML that helps us generate the markdown for the html page
// teamMem array that stores an array of objects of all the team memebrs. 
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern =require("./lib/Intern");
const generateHtml = require("./util/generateHtml");
const fs = require("fs");
const teamMem = [];

//async function to run different functions in order to ask user about team member
const init = async () => {
    try {
      await getManager();
      await addOptions();
    } catch (err) {
        console.log(err);
    }   
}

//function that ask user intially to enter the team managers contact information. uses inquirer packet
//so users are able to type in inputs. after all the information is obtain. it will then create 
// a new team manager object and push it to teamMem, an array of object with all the team members in it
async function getManager(){
    const managerInfo = await inquirer.prompt ([
        {
            type:"input",
            message:"Please enter the team Manager's Name",
            name:"name",
        },
        {
            type:"input",
            message:"Please enter an employee ID",
            name:"id",
        },
        {
            type:"input",
            message:"Please enter an email",
            name:"email",
        },
        {
            type:"input",
            message:"Please enter an office number",
            name:"office",
        }
    ]) 
   teamMem.push(new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office));
}

// one part of a recursive function that ask if the user wants to add an engineer , intern or finish adding team members
// it uses an if statement to check which option is picked. if finish is picked then it runs the generateHTML function that was
//imported from generateHTML.js
async function addOptions(){
    const optionSelected = await inquirer.prompt ([
        {
            type:"list",
            message:"what would you like to do?",
            name:"options",
            choices: ["add engineer","add intern","finish"]
        },
    ]) 
    if(optionSelected.options == "add engineer"){
        await addEngineer();
    } else if (optionSelected.options == "add intern"){
        await addIntern();
    } else {
        //generate the html here
        fs.writeFile("index.html",generateHtml(teamMem),(err,data)=>{
            if(err){
                throw err;
            }
            console.log("complete!")
        })
    }

}

//a part of a recursive function that ask users information about the engineer they want to add
// after all information is obtain it will create a new Engineer object and push it to the teamMem array
//then it recalls addOptions function so we give the user option to add team members again
async function addEngineer(){
    const eInfo = await inquirer.prompt ([
        {
            type:"input",
            message:"Please enter the engineer's Name",
            name:"name",
        },
        {
            type:"input",
            message:"Please enter an employee ID",
            name:"id",
        },
        {
            type:"input",
            message:"Please enter an email",
            name:"email",
        },
        {
            type:"input",
            message:"Please enter the engineer's github username",
            name:"github",
        }
    ]) 
    teamMem.push(new Engineer(eInfo.name,eInfo.id,eInfo.email,eInfo.github));
    console.table(teamMem);
    addOptions();
}

//a part of a recusrive function that ask user information about the intern they want to add into the team
//after all information is obtain it will create a new Intern object and push it to the teamMem array
//calls addOptions function so we give the user the option to add team members again 
async function addIntern(){
    const iInfo = await inquirer.prompt ([
        {
            type:"input",
            message:"Please enter the intern's Name",
            name:"name",
        },
        {
            type:"input",
            message:"Please enter an employee ID",
            name:"id",
        },
        {
            type:"input",
            message:"Please enter an email",
            name:"email",
        },
        {
            type:"input",
            message:"Please enter the intern's school",
            name:"school",
        }
    ]) 
    teamMem.push(new Intern(iInfo.name,iInfo.id,iInfo.email,iInfo.school));
    console.table(teamMem);
    addOptions();
}

//intitiate the async functions

init();