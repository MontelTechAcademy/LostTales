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
   MapF1: function () {
        console.log("F1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionF.MapF1();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionF.MapF1();
        }

        if (directions[index] == "East") {
            console.log("Can't Move Here!!");
            SectionF.MapF1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF2();
        }
    },
    MapF2: function () {
        console.log("F2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF1();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            SectionF.MapF2();
        }

        if (directions[index] == "East") {
            console.log("Can't Move Here!!");
            SectionF.MapF2();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF3();
        }
    },
     MapF3: function () {
        console.log("F3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF2();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionG.MapG3();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF4();
        }
    },
      MapF4: function () {
        console.log("F4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF3();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionG.MapG4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF5());
        }
    },
      MapF5: function () {
        console.log("F5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF4();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionG.MapG5();
        }

        if (directions[index] == "South") {
            console.log("Can't Move Here!!");
            SectionF.MapF5();
        }
    },
      MapF8: function () {
        console.log("F8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Can't Move Here!!!");
            SectionF.MapF8();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionG.MapG8();
        }

        if (directions[index] == "South") {
            console.log("Can't Move Here!!");
            SectionF.MapF8();
        }
    },
      MapF11: function () {
        console.log("F11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Can't Move Here!!!");
            SectionF.MapF11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionG.MapG11();
        }

        if (directions[index] == "South") {
            console.log("Can't Move Here!!");
            SectionF.MapF11();
        }
    },
       MapF13: function () {
        console.log("F13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Can't Move Here!!!");
            SectionF.MapF13();
        }

        if (directions[index] == "West") {
            console.log("Can't Move Here!!");
            SectionF.MapF13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionG.MapG13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF14());
        }
    },
       MapF14: function () {
        console.log("F14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF13();
        }

        if (directions[index] == "West") {
            console.log("Can't Move Here!!");
            SectionF.MapF14();
        }

        if (directions[index] == "East") {
            console.log("Can't Move Here!!");
            SectionF.MapF14();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF15());
        }
    },
       MapF15: function () {
        console.log("F15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF14();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE15();
        }

        if (directions[index] == "East") {
            console.log("Can't Move Here!!");
            SectionF.MapF15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionF.MapF16());
        }
    },
       MapF16: function () {
        console.log("F16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionF.MapF15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionE.MapE16();
        }

        if (directions[index] == "East") {
            console.log("Can't Move Here!!");
            SectionF.MapF16();
        }

        if (directions[index] == "South") {
            console.log("Can't Move Here!!");
            SectionF.MapF16());
        }
    },
    