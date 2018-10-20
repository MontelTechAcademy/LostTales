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
    MapE5: function () {
        console.log("E5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapE4();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF5();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE!!");
            MapE5();
        }
    },
    MapE7: function () {
        console.log("E7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapE7();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD7();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapE7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapE8();
        }
    },
    MapE8: function () {
        console.log("E8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapE7();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF8();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapE8();
        }
    },
    MapE11: function () {
        console.log("E11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapE11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD11;
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF11();
        }

        if (directions[index] == "South") {
            console.log("YOU YOU CANT HERE");
            MapE11();
        }
    },
    MapE15: function () {
        console.log("E15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapE15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapE16();
        }
    },
    MapE16: function () {
        console.log("E16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapE15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapD15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapF15();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapE16();
        }
    },