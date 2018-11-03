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
    MapD1: function () {
        console.log("D1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionD.MapD2();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            MapD1();
        }

        if (directions[index] == "East") {
            console.log("Cant move here!!");
            MapD1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!");
            MapD2();
        }
    },
    MapD2: function () {
        console.log("D2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD1();
        }

        if (directions[index] == "West") {
            console.log("Cant Move Here!!");
            MapD2();
        }

        if (directions[index] == "East") {
            console.log("CANT MOVE HERE!!");
            MapD2();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD3();
        }
    },
    MapD3: function () {
        console.log("D3");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD2();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC3();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE3();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD4();
        }
    },
    MapD4: function () {
        console.log("D4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD3();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD5();
        }
    },
    MapD5: function () {
        console.log("D5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD4();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD6();
        }
    },
    MapD6: function () {
        console.log("D6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD5();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD7();
        }
    },
    MapD7: function () {
        console.log("D7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD6();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD8();
        }
    },
    MapD8: function () {
        console.log("D8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD7();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC7();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD9();
        }
    },
    MapD9: function () {
        console.log("D9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD8();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC9();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapD9();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapD9();
        }
    },
    MapD11: function () {
        console.log("D11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapD11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD12();
        }
    },
    MapD12: function () {
        console.log("D12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC11();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapD12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD13();
        }
    },
    MapD13: function () {
        console.log("D13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD12();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC12();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapD13();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapD13();
        }
    },
    MapD15: function () {
        console.log("D15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapD15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapD16();
        }
    },
    MapD16: function () {
        console.log("D16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapD15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapC15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapE15();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE!!");
            MapD16();
        }
    },


