const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern =require("./lib/Intern");
const generateHtml = require("./util/generateHtml");
const fs = require("fs");
const teamMem = [];

const init = async () => {
    try {
      await getManager();
      await addOptions();
    } catch (err) {
        console.log(err);
    }   
}

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

init();