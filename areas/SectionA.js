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
    MapA1: function () {
        console.log("A1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionA.MapA1();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA1();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapA2();
        }
    },
    MapA2: function () {
        console.log("A2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapA1();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapA2();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB2();
        }

        if (directions[index] == "South") {
            console.log("Cant Move Here");
            SectionA.MapA2();
        }
    },
     MapA8: function () {
        console.log("A8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("cant Move Here!!!");
            SectionA.MapA8();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA8();
        }

        if (directions[index] == "East") {
            console.log("Cant Move Here!!");
            SectionA.MapA8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionA.MapA9();
        }
    },
     MapA9: function () {
        console.log("A9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapA8();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA9();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionA.MapA10();
        }
    },
     MapA10: function () {
        console.log("A10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapA9();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA10();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB10();
        }

        if (directions[index] == "South") {
            console.log("Cant Move Here");
            SectionA.MapA11();
        }
    },
     MapA11: function () {
        console.log("A11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapA10();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB11();
        }

        if (directions[index] == "South") {
            console.log("Cant Move Here");
            SectionA.MapA11();
        }
    },
     MapA13: function () {
        console.log("A13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionA.MapA13();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB13();
        }

        if (directions[index] == "South") {
            console.log("Cant Move Here");
            SectionA.MapA13();
        }
    },
