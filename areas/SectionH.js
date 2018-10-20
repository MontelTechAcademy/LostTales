var readlineSync = require('readline-sync');
var figlet = require('figlet');

//Mechanics
var Stamina = require('./mechanics/stamina');

//Sections
var SectionA = require('./areas/SectionA');
var SectionB = require('./areas/SectionB');
var SectionC = require('./areas/SectionC');
var SectionD = require('./areas/SectionD');
var SectionE = require('./areas/SectionE');
var SectionF = require('./areas/SectionF');
var SectionG = require('./areas/SectionG');
var SectionH = require('./areas/SectionH');
var SectionI = require('./areas/SectionI');
var SectionJ = require('./areas/SectionK');
var SectionK = require('./areas/SectionL');
var SectionL = require('./areas/SectionM');
var SectionM = require('./areas/SectionN');
var SectionN = require('./areas/SectionO');
var SectionO = require('./areas/SectionP');

module.exports = {
    //+----------------+
    //| MapH7 Function |
    //+----------------+
    MapH7: function () {
        console.log("H7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if(directions[index] == "North"){
            console.log("YOU MOVED NORTH!!!");
            MapH6();
        }

        if(directions[index] == "West"){
            console.log("YOU MOVED WEST!!");
            startup()
        }

        if(directions[index] == "East"){
            console.log("YOU MOVED EAST!!");
            startup()
        }

        if(directions[index] == "South"){
            console.log("YOU MOVED SOUTH");
            startup()
        }
    },

    // +----------------+
    // | MapH6 Function |
    // +----------------+
    MapH6: function () {
        console.log("H6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if(directions[index] == "North"){
            console.log("The Woods are to thick to pass");
            MapH6();
        }

        if(directions[index] == "West"){
            console.log("YOU MOVED WEST!!");
            startup()
        }

        if(directions[index] == "East"){
            console.log("YOU MOVED EAST!!");
            startup()
        }

        if(directions[index] == "South"){
            console.log("YOU MOVED SOUTH");
            startup()
        }
    }
};

