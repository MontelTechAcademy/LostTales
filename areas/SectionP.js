var readlineSync = require('readline-sync');
var figlet = require('figlet');

//Mechanics
var Stamina = require('../mechanics/stamina');

//Sections
var SectionA = require('../areas/SectionA');
var SectionB = require('../areas/SectionB');
var SectionC = require('../areas/SectionC');
var SectionD = require('../areas/SectionD');
var SectionE = require('../areas/SectionE');
var SectionF = require('../areas/SectionF');
var SectionG = require('../areas/SectionG');
var SectionH = require('../areas/SectionH');
var SectionI = require('../areas/SectionI');
var SectionJ = require('../areas/SectionK');
var SectionK = require('../areas/SectionL');
var SectionL = require('../areas/SectionM');
var SectionM = require('../areas/SectionN');
var SectionN = require('../areas/SectionO');
var SectionO = require('../areas/SectionP');

module.exports = {
            MapP5: function () {
        console.log("P5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            MapP5();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapO5();
        }

        if (directions[index] == "East") {
            console.log("CANT MOVE HERE!!");
            MapP5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapP6();
        }
    },
            MapP6: function () {
        console.log("P6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("MOVED NORTH!!!");
            MapP5();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapO6();
        }

        if (directions[index] == "East") {
            console.log("CANT MOVE HERE!!");
            MapP5();
        }

        if (directions[index] == "South") {
            console.log("CANT MOVE HERE");
            MapP6();
        }
    },
            MapP8: function () {
        console.log("P8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            MapP8();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapO8();
        }

        if (directions[index] == "East") {
            console.log("CANT MOVE HERE!!");
            MapP8();
        }

        if (directions[index] == "South") {
            console.log("CANT MOVE HERE");
            MapP8();          
        }
    }
};