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
    MapG11: function () {
        console.log("G11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapG10();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapF11();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapH11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapG12();
        }
    },
    MapG12: function () {
        console.log("G12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapG11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapF12()
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapH12()
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            MapG13()
        }
    },
    MapG13: function() {
        console.log("G13");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            MapG12();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapF13()
                console.log("CAN'T MOVE HERE!!");
            MapI15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            MapH15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            MapH13()
        }

        if (directions[index] == "South") {
            console.log("Cant Move Here!!");
            MapG13()
        }

    }
};