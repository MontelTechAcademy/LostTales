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
            MapC3();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD3();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD4();
        }
     },
      MapC4: function () {
        console.log("C4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC3();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC5();
        }
     },
    MapC5: function () {
        console.log("C5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC4();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC6();
        }
     },
    MapC6: function () {
        console.log("C6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC5();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC7();
        }
     },
    MapC7: function () {
        console.log("C7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC6();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB7();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC8();
        }
     },
    MapC8: function () {
        console.log("C8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC7();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC9();
        }
     },
    MapC9: function () {
        console.log("C9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC8();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB9();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC10();
        }
     },
    MapC10: function () {
        console.log("C10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC9();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB10();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC11();
        }
     },
    MapC11: function () {
        console.log("C11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC10();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC12();
        }
     },
    MapC12: function () {
        console.log("C12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC11();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB12();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC13();
        }
     },
    MapC13: function () {
        console.log("C5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC12();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapD13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC14();
        }
     },
    MapC14: function () {
        console.log("C14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC13();
        }

        if (directions[index] == "West") {
            console.log("MOVED WEST!!");
            MapB14();
        }

        if (directions[index] == "East") {
            console.log("cAN'T mOVE HeRE!!");
            MapC14();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC15();
        }
     },
    MapC15: function () {
        console.log("C15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC14();
        }

        if (directions[index] == "West") {
            console.log("CANT MOVE HERE!!");
            MapC15();
        }

        if (directions[index] == "East") {
            console.log("MOVED EAST!!");
            MapB15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapC16();
        }
     },
    MapC16: function () {
        console.log("C16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!!");
            MapC15();
        }

        if (directions[index] == "West") {
            console.log("CANT MOVE HERE!!");
            MapC16();
        }

        if (directions[index] == "East") {
            console.log("MOVED EAST!!");
            MapD16();
        }

        if (directions[index] == "South") {
            console.log("CANT MOVE HERE");
            MapC16();
        }
     },

    }
};