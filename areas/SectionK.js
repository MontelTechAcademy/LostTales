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
    MapK1: function () {
        console.log("K1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionK.MapK1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionJ.MapJ1();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionL.MapL1();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionK.MapK2();
        }
    },            }
    MapK4: function () {
    console.log("K4");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("Cant Move Here!!!");
        SectionK.MapK3();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        SectionJ.MapJ4();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL4();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK5();
    }
},
    MapK5: function () {
    console.log("K5");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK4();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionJ.MapJ5();
    }

    if (directions[index] == "East") {
        console.log("Cant Move Here!!");
        SectionL.MapL5();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK6();
    }
},
    MapK6: function () {
    console.log("K6");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK5();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionL.MapL6();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionJ.MapJ6();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK6();
    }
},
    MapK7: function () {
    console.log("k7");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK6();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED NORTH!!");
        SectionL.MapL6();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionJ.MapJ6();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK8();
    }
},
    MapK8: function () {
    console.log("K8");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK7();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionJ.MapJ8();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL8();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK9();
    }
},
    MapK9: function () {
    console.log("K9");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK8();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionJ.MapJ8();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL9();
    }

    if (directions[index] == "South") {
        console.log("Cant Move Here");
        SectionK.MapK10();
    }
},
    MapK11: function () {
    console.log("K11");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("Cant Move Here!!!");
        SectionK.MapK10();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        SectionL.MapL11();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionJ.MapJ11();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK12();
    }
},
    MapK12: function () {
    console.log("K12");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK11();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        SectionJ.MapJ12();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL12();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK13();
    }
},
    MapK13: function () {
    console.log("K13");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK12();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionJ.MapJ13();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL13();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionA.MapK14();
    }
},
    MapK14: function () {
    console.log("K14");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("!!!");
        SectionK.MapK13();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionJ.MapJ14();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionJ.MapL14();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK15();
    }
},
    MapK15: function () {
    console.log("K15");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK14();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        SectionJ.MapJ15();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL15();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        SectionK.MapK16();
    }
},
    MapK16: function () {
    console.log("K16");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        SectionK.MapK15();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        SectionJ.MapJ16();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        SectionL.MapL16();
    }

    if (directions[index] == "South") {
        console.log("Cant Move Here");
        SectionK.MapK17();
    }
},