# teamprofile-generator
a weather application that shows you the forecast of a city

## Description

This javascript file will help user create a team profile webpage by asking the user questions about the team. It will initially ask for the team managers information and then will prompt user to add engineer or interns to the managers team. Questions like name, email, employee ID, office number, github and schools that the interns are currently attending. After all questions are asked and all team members are added then the application will generate an HTML page that shows each member in a card with their corresponding contact information. 

What I learn from this project is the usage of inquirer as well as async methods/functions. I also learn to use classes and sub classes to create new objects that works together. I created an employee classes that then branches out to manager,Intern, and engineer class. 

## Installation

After cloning all the files from the respository you would need to install inquirer for this application to work. There is a package.json file attached with the repository so you will only need to run "npm install" in terminal. 

## Usage

- install inquirer 8.2.4
- run index.js
- answer all the question that comes up in terminal
- Open index.html that was generate in the same folder that index.js was in
- go through the contact information that was generated for the team members


![teamprofile](assets/teamprofile.png)


## Credits

N/A

## License

N/A

---


## Features

When the user answers all the questions regarding the team. The appication will create an HTML file that will display each team members contact information in indivisual cards. 
