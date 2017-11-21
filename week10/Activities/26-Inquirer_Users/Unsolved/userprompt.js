// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

// var questions = ["What is your name", "What is your quest", "What is your favorite color"]

inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "password",
            message: "Set your password",
            name: "password",
        },
        {
            type: "list",
            message: "What is your quest?",
            choices: ["I seek the Holy Grail", "Johnny", "Request what"],
            name: "quest"
        },
        {
            type: "checkbox",
            message: "What is your favotire Color?",
            choices: ["blue", "yellow", "green", "green"]
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        if (inquirerReponse.confirm) {
            console.log("/Welcome " + inquirerResponse.username);
            console.log("Your " + inquirerResponse.username + " the brave!\n");
            console.log("Your answer: " + inquirerResponse.quest)
        }
        else {
            console.log("Your " + inquirerResponse.username + " bravely ran away!\n");
        }
    });