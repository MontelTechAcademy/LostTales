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
    MapM1: function () {
        console.log("M1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CAN'T MOVE HERE!!!");
            SectionM.MapM1();
        }

        if (directions[index] == "West") {
            console.log("You moved west!!");
            SectionL.MapL1();
        }

        if (directions[index] == "East") {
            console.log("YOU CAN'T MOVE HERE!!");
            SectionM.MapM1();
        }

        if (directions[index] == "South") {
            console.log("you moved south!!");
            SectionM.MapM2();
        }
    },
};MapM2: function () {
    console.log("M2");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("You moved north!!!");
        SectionM.MapM1();
    }

    if (directions[index] == "West") {
        console.log("You moved west!!");
        SectionL.MapL2();
    }

    if (directions[index] == "East") {
        console.log("YOU CAN'T MOVE HERE!!");
        SectionM.MapM2();
    }

    if (directions[index] == "South") {
        console.log("YOU CAN'T MOVE HERE!!");
        SectionM.MapM2();
    }
},MapM3: function () {
    console.log("M3");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU CAN'T MOVE HERE!!!");
        SectionM.MapM2();
    }

    if (directions[index] == "West") {
        console.log("You moved west!!");
        SectionL.MapM2();
    }

    if (directions[index] == "East") {
        console.log("YOU CAN'T MOVE HERE!!");
        SectionM.MapM1();
    }

    if (directions[index] == "South") {
        console.log("you moved south!!");
        SectionM.MapM2();
    }
},