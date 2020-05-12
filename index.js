const BG=require ('./lib/badge.js');

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// Input questions

// Badge
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
    // User GitHub profile picture
    // User GitHub email

inquirer.prompt([
    
    {
        type:"input",
        name:"Badge 1",
        message:"What is Badge 1?"
    },

    {
        type:"input",
        name:"Badge 2",
        message:"What is Badge 2?"
    },
    

    {
        type:"input",
        name:"projectTitle",
        message:"What is the project title?"
    },
    
    {
        type:"input",
        name:"projectDescription",
        message:"Enter the project description?"
    },
 
    {
        type:"input",
        name:"usersName",
        message:"what is your name?"
    },


    {
        type:"list",
        name:"kanesList",
        message:"This is a list",
        choices:["list 1","list 2","list 3","list 4"]
    },

  
    {
        type:"checkbox",
        name:"kanesCheckbox",
        message:"This is a checkbox",
        choices:["checkbox 1","checkbox 2","checkbox  3","checkbox  4"]
    }])

    .then(answers =>{
        console.log(answers);
        const template = `
        
    
        # Badge
        ![Licence](https://img.shields.io/static/v1?label=Licence&message=BSD%203-Clause%20"New"%20or%20"Revised"%20License&color=blue)
    
        # PROJECT TITLE
            ${answers["projectTitle"]}
        # DESCRIPTION
            ${answers ["projectDescription"]}
        # DESCRIPTION
            ${answers ["projectDescription"]}
        # DESCRIPTION
            ${answers ["projectDescription"]}
        # DESCRIPTION
            ${answers ["projectDescription"]}
        # DESCRIPTION
            ${answers ["projectDescription"]}


        `
        fs.writeFile("README.md", template, err=>{
            if (err) throw err;
            console.log("Success! this README has been added to your repo");
        });
    })