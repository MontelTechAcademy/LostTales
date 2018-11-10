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
       MapM1: function () {
        console.log("M1");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("Cant Move Here!!!");
            SectionA.MapM1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL1();
        }

        if (directions[index] == "East") {
            console.log("CANT MOVE HERE!!");
            SectionB.MapO4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM2();
            
            
        }
    },
       MapM2: function () {
        console.log("M2");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM1();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL2();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM2();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            SectionA.MapM2();
            
            
        }
    },
     MapM4: function () {
        console.log("M4");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            SectionA.MapM4();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL4();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapN4();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM5();
            
            
        }
    },
     MapM5: function () {
        console.log("M5");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM4();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            SectionA.MapM5();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM5();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM6();
            
            
        }
    },
     MapM6: function () {
        console.log("M6");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM5();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL6();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapN6();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM7();
            
            
        }
    },
     MapM7: function () {
        console.log("M7");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM6();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL7();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM7();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM8();
            
            
        }
    },
     MapM8: function () {
        console.log("M8");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM7();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL8();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM8();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM9();
            
            
        }
    },
     MapM9: function () {
        console.log("M9");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM8();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL8();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM9();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM10();
            
            
        }
    },
     MapM10: function () {
        console.log("M10");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM9();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            SectionA.MapM10();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapN10();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH!!!");
            SectionA.MapM11();
            
            
        }
    },
     MapM11: function () {
        console.log("M11");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM10();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            SectionA.MapM11();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM11();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM12();
            
            
        }
    },
     MapM12: function () {
        console.log("M12");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM11();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL12();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM12();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            SectionA.MapM12();
            
            
        }
    },
     MapM14: function () {
        console.log("M14");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU CANT MOVE HERE!!!");
            SectionA.MapM14();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL14();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapN14();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM15();
            
            
        }
    },
     MapM15: function () {
        console.log("M15");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM14();
        }

        if (directions[index] == "West") {
            console.log("YOU CANT MOVE HERE!!");
            SectionA.MapM15();
        }

        if (directions[index] == "East") {
            console.log("YOU MOVED EAST!!");
            SectionB.MapN15();
        }

        if (directions[index] == "South") {
            console.log("YOU MOVED SOUTH");
            SectionA.MapM16();
            
            
        }
    },
     MapM16: function () {
        console.log("M16");
        let directions = ['North', 'West', 'East', 'South'],
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

        if (directions[index] == "North") {
            console.log("YOU MOVED NORTH!!!");
            SectionA.MapM15();
        }

        if (directions[index] == "West") {
            console.log("YOU MOVED WEST!!");
            SectionA.MapL16();
        }

        if (directions[index] == "East") {
            console.log("YOU CANT MOVE HERE!!");
            SectionB.MapM16();
        }

        if (directions[index] == "South") {
            console.log("YOU CANT MOVE HERE");
            SectionA.MapM16();
            
            
        }
    }
};