var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.lopg(this.name + "'s offense has gone up!\n-----------");
        }
        else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n-------------");
        }
    };
    this.badGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n----------");
        }
        else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n-----------");
        }
    };
    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
            "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n--------");
    };
}

var starters = [];
var subs = [];
var team = [];


var createPlayer = function () {
    // if statement to ensure that our questions are only asked five times
    if (starters.length + subs.length < 8) {
        console.log("\nNewPlayer!\n");
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "name",
                message: "Player's Name: "
            }, {
                name: "position",
                message: "Players Position: "
            }, {
                name: "offense",
                message: "Player's Offensive Ability: ",
                validate: function (value) {
                    if (isNan(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                        return true;
                    }
                    return false;
                }
            }, {
                name: "defense",
                message: "Player's Defensive Ability: ",
                validate: function (value) {
                    if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (answers) {
            // initializes the variable newguy to be a programmer object which will
            // take in all of the user's answers to the questions above
            var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            // adds a player to the starters array if there are less than five player objects in it.
            // otherwise adds the newest player object to the subs array
            if (starters.length < 5) {
                starters.push(player);
                team.push(player);
                console.log(player.name + " added to the starters");
            }
            else {
                subs.push(player);
                team.push(player);
                console.log(player.name + " added to the subs");
            }
            // runs the createPlayer function once more
            createPlayer();
        });
    }
    else {
        // loops through the team array and calls printStats() for each object it contains
        for (var i = 0; i < team.length; i++) {
            team[i].printStats();
        }
    }
};

// calls the function createPlayer() to start the code
createPlayer();
