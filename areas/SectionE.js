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
    MapE3: function () {
        console.log("E3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapE3();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF3();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapE4();
        }
    },
    MapE4: function () {
        console.log("E4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapE3();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapE5();
        }
    },