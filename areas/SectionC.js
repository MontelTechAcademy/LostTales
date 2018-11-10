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
     MapC3: function () {
        console.log("C3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionC.MapC3();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD3();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC4();
        }
     },
      MapC4: function () {
        console.log("C4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC3();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC5();
        }
     },
    MapC5: function () {
        console.log("C5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC4();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC6();
        }
     },
    MapC6: function () {
        console.log("C6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC5();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC7();
        }
     },
    MapC7: function () {
        console.log("C7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC6();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB7();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC8();
        }
     },
    MapC8: function () {
        console.log("C8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC7();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC9();
        }
     },
    MapC9: function () {
        console.log("C9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC8();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB9();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC10();
        }
     },
    MapC10: function () {
        console.log("C10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC9();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB10();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC11();
        }
     },
    MapC11: function () {
        console.log("C11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC10();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC12();
        }
     },
    MapC12: function () {
        console.log("C12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC11();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB12();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC13();
        }
     },
    MapC13: function () {
        console.log("C5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC12();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionD.MapD13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC14();
        }
     },
    MapC14: function () {
        console.log("C14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC13();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            SectionB.MapB14();
        }

        if (directions[index] == "East") {
            console.log("cAN'T mOVE HeRE!!");
            SectionC.MapC14();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC15();
        }
     },
    MapC15: function () {
        console.log("C15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC14();
        }

        if (directions[index] == "West") {
            console.log("CANT MOVE HERE!!");
            SectionC.MapC15();
        }

        if (directions[index] == "East") {
            console.log("MOVED EAST!!");
            SectionB.MapB15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionC.MapC16();
        }
     },
    MapC16: function () {
        console.log("C16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            SectionC.MapC15();
        }

        if (directions[index] == "West") {
            console.log("CANT MOVE HERE!!");
            SectionC.MapC16();
        }

        if (directions[index] == "East") {
            console.log("MOVED EAST!!");
            SectionD.MapD16();
        }

        if (directions[index] == "South") {
            console.log("CANT MOVE HERE");
            SectionC.MapC16();
        }
     },

    }
};