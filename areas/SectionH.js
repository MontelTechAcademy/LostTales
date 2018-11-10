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
      MapH1: function () {
        console.log("H1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Can't Move Here!!!");
            SectionH.MapH1();
        }

        if (directions[index] == "West") {
            console.log("Can't Move Here!!");
            SectionH.MapH1();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH2();
        }
    },
     MapH2: function () {
        console.log("H2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH1();
        }

        if (directions[index] == "West") {
            console.log("Can't Move Here!!");
            SectionH.MapH2();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI2();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH3();
        }
    },
     MapH3: function () {
        console.log("H3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH2();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED NORTH!!");
            SectionG.MapG3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI3();
        }

        if (directions[index] == "South") {
            console.log("Can't Move Here!!");
            SectionH.MapH3();
        }
    },
     MapH6: function () {
        console.log("H6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Can't Move Here!!!");
            SectionH.MapH6();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH2();
        }
    },
     MapH7: function () {
        console.log("H7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH6();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG7();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH8();
        }
    },
     MapH8: function () {
        console.log("H8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH7();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH9();
        }
    },
     MapH9: function () {
        console.log("H9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH8();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG9();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH10();
        }
    },
     MapH10: function () {
        console.log("H10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH9();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG10();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH11();
        }
    },
     MapH11: function () {
        console.log("H11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH10();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH12();
        }
    },
     MapH12: function () {
        console.log("H12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG12();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionH.MapH12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH13();
        }
    },
     MapH13: function () {
        console.log("H13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH12();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionG.MapG13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH14();
        }
    },
     MapH14: function () {
        console.log("H14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH13();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionH.MapH14();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionH.MapH14();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH15();
        }
    },
     MapH15: function () {
        console.log("H15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH14();
        }

        if (directions[index] == "West") {
            console.log("Can't Move Here!!");
            SectionH.MapH15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionH.MapH16();
        }
    },
     MapH16: function () {
        console.log("H16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionH.MapH15();
        }

        if (directions[index] == "West") {
            console.log("Can't Move Here!!");
            SectionH.MapH16();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionI.MapI16();
        }

        if (directions[index] == "South") {
            console.log("Can't Move Here");
            SectionH.MapH16();
        }
    }
};