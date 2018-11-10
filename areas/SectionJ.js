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
    MapJ1: function () {
        console.log("J1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            MapJ1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI1();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ2();
        }
    },
module.exports = {
    MapJ2: function () {
        console.log("J2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!");
            MapJ1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI2();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK2();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapJ2();
        }
    },
module.exports = {
    MapJ5: function () {
        console.log("J5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            MapJ5();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI5();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ6();
        }
    },module.exports = {
    MapJ6: function () {
        console.log("J6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!");
            MapJ5();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ7();
        }
    },
        module.exports = {
    MapJ7: function () {
        console.log("J7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!");
            MapJ6();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI7();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ8();
        }
    },
         module.exports = {
    MapJ8: function () {
        console.log("J8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            MapJ7();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI8();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ9();
        }
    },   
        module.exports = {
    MapJ9: function () {
        console.log("J9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!");
            MapJ8();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI9();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK9();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT GO HERE");
            MapJ9();
        }
    },
        module.exports = {
    MapJ11: function () {
        console.log("J1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!");
            MapJ11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ12();
        }
    },
        module.exports = {
    MapJ12: function () {
        console.log("J12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            MapJ11();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapJ12();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK12();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ13();
        }
    },
            module.exports = {
    MapJ13: function () {
        console.log("J13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!");
            MapJ12();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI13();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK13();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ14();
        }
    },
            module.exports = {
    MapJ14: function () {
        console.log("J14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!");
            MapJ13();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            MapJ14();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK14();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapJ15();
        }
    },
        module.exports = {
    MapJ15: function () {
        console.log("J15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVE NORTH!!");
            MapJ14();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapI15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapK15();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            MapJ15();
        }
    }
};