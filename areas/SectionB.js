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
     MapB1: function () {
        console.log("B1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionB.MapB1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapA1();
        }

        if (directions[index] == "East") {
            console.log("Cant Move Here!!");
            SectionB.MapB1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB2();
        }
    },
   MapB2: function () {
        console.log("B2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapA2();
        }

        if (directions[index] == "East") {
            console.log("Cant Move Here!!");
            SectionB.MapB2();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB3();
        }
    },
    MapB3: function () {
        console.log("B3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB2();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC3();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapA4();
        }
    },
    MapB4: function () {
        console.log("B3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB3();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapB1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB5();
        }
    },
    MapB5: function () {
        console.log("B5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB4();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB6();
        }
    },
    MapB6: function () {
        console.log("B6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB5();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB7();
        }
    },
    MapB7: function () {
        console.log("B7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB6();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB7();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC7();
        }

        if (directions[index] == "South") {
            console.log("cant Move Here!!!");
            SectionB.MapB7();
        }
    },
    MapB9: function () {
        console.log("B9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionB.MapB9();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapA9();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB10();
        }
    },
    MapB10: function () {
        console.log("B10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB9();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapA10();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB11();
        }
    },
    MapB11: function () {
        console.log("B11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB10();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapA11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB12();
        }
    },
    MapB12: function () {
        console.log("B12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB11();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB12();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB13();
        }
    },
     MapB13: function () {
        console.log("B13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB12();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionA.MapA13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionB.MapB14();
        }
    },
     MapB14: function () {
        console.log("B14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionB.MapB13();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionB.MapB14();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionC.MapC14();
        }

        if (directions[index] == "South") {
            console.log("Cant Move Here!!!");
            SectionB.MapB14();
        }
    },