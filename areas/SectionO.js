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
    MapO4: function () {
        console.log("O4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            MapO4();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapN4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST !!");
            MapN4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO5();
        }
    },
    MapO5: function () {
        console.log("O5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO4();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapP5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO6();
        }
    },
    MapO6: function () {
        console.log("O6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO5();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapN6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST !!");
            MapP6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO6();
        }
    },
    MapO7: function () {
        console.log("O7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO6();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO7();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE !!");
            MapO7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO8();
        }
    },
    MapO8: function () {
        console.log("O8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO7();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST !!");
            MapP8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO9();
        }
    },
    MapO9: function () {
        console.log("O9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO8();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO9();
        }

        if (directions[index] == "East") {
            console.log("NO!!");
            MapO9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO10();
        }
    },
    MapO10: function () {
        console.log("O10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO9();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapN10();
        }

        if (directions[index] == "East") {
            console.log("No.");
            MapO10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO11();
        }
    },
    MapO11: function () {
        console.log("O11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO10();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO11();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapO11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO12();
        }
    },
    MapO12: function () {
        console.log("O12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO11();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO12();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapO12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO13();
        }
    },
    MapO13: function () {
        console.log("O13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO12();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapO13();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapO13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapO14();
        }
    },
    MapO14: function () {
        console.log("O14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapO13();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapN14();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            MapO14();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapO14();
        }
    },