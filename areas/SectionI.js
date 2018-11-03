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
    // +----------------+
    // | MapI8 Function |
    // +----------------+
    MapI8: function () {
        console.log("I8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if(directions[index] == "North"){
            console.log("YOU MOVED NORTH!!!");
            MapI7();
        }

        if(directions[index] == "West"){
            console.log("Can't Move Here!!");
            MapH7();
        }

        if(directions[index] == "East"){
            console.log("YOU MOVED EAST!!");
            MapI7();
        }

        if(directions[index] == "South"){
            console.log("YOU MOVED SOUTH");
            MapI8();

        }
    },

    // +----------------+
    // | MapI9 Function |
    // +----------------+
    MapI9: function () {
        console.log("I9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');
        if(directions[index] == "North"){
            console.log("YOU MOVED NORTH!!!");
            MapI8();
        }

        if(directions[index] == "West"){
            console.log("Can't Move Here!!");
            MapH8();
        }

        if(directions[index] == "East"){
            console.log("YOU MOVED EAST!!");
            MapI8();
        }

        if(directions[index] == "South"){
            console.log("YOU MOVED SOUTH");
            MapI9();
        }
    },

    // +-----------------+
    // | MapI15 Function |
    // +-----------------+
    MapI15: function () {
        console.log("I15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapG9();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            MapG10()
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapH10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapG11();
        }
    }
};