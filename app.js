var readlineSync = require('readline-sync');
var figlet = require('figlet');

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



//+--------------------+
//| Menu main function |
//+--------------------+
function menu() {
    console.log(figlet.textSync('LOST TALES!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

    console.log("Main Menu");

    let mainmenu = ['start', 'options'],
        index = readlineSync.keyInSelect(mainmenu, "What will you like to do?");

    if(mainmenu[index] == "start"){
        startup()
    }

    if(mainmenu[index] == "options"){
        console.log("Options coming soon");
        menu()
    }
}
menu();


// +-----------------+
// | Starup Function |
// +-----------------+
function startup() {
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapH7();
    }

    if(directions[index] == "West"){
        console.log("YOU MOVED WEST!!");
        startup()
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        startup()
    }

};



// +----------------+
// | MapG8 Function |
// +----------------+
function MapG8() {
    console.log("G8");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapG7();
    }

    if(directions[index] == "West"){
        console.log("YOU MOVED WEST!!");
        MapF8()
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapG9()
    }

}

// +----------------+
// | MapH7 Function |
// +----------------+
function MapH7() {
    console.log("H7");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapH6();
    }

    if(directions[index] == "West"){
        console.log("YOU MOVED WEST!!");
        startup()
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        startup()
    }

}

// +----------------+
// | MapG7 Function |
// +----------------+
function MapG7() {
    console.log("G7");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapH6();
    }

    if(directions[index] == "West"){
        console.log("Can't Move Here!!");
        MapG6();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapH7();
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapG8();
    }

}

// +----------------+
// | MapI7 Function |
// +----------------+
function MapI7() {
    console.log("I7");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapI6();
    }

    if(directions[index] == "West"){
        console.log("Can't Move Here!!");
        MapH6();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapI6();
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapI7();
    }
}

// +----------------+
// | MapG6 Function |
// +----------------+
function MapG6() {
    console.log("G6");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapG5();
    }

    if(directions[index] == "West"){
        console.log("Can't Move Here!!");
        MapG6();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapH6();
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapH7();
    }
}



function MapH11() {
    console.log("H11");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH10();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapG11()
    }

<<<<<<< HEAD
function MapG9() {
    console.log("G9");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapG8();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapG9();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapH9();
=======
    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapI11()
=======
        MapJ15();
>>>>>>> 94469a479e9bd1a0bff56b016491bcf4c0642718
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
<<<<<<< HEAD
        MapG10();
    }
}

function MapG5() {
    console.log("G5");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapG4();
    }

    if (directions[index] == "West") {
        console.log("You Moved West");
        MapF5);
    }

    if (directions[index] == "East") {
        console.log("YOU CANT MOVE HERE!!");
        MapG5();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapG6();
    }
}
function MapG4() {
    console.log("G4");
=======
<<<<<<< HEAD
        MapH12()
    }

}
function MapH12() {
    console.log("H12");
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
<<<<<<< HEAD
        MapG3();
    }

    if (directions[index] == "West") {
        console.log("You MOVED WEST!!");
        MapF4();
    }

    if (directions[index] == "East") {
        console.log("YOU CANT MOVE HERE");
        MapG4();
=======
        MapH11();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapG12()
    }

    if (directions[index] == "East") {
        console.log("Cant Move Here!!");
        MapH12()
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
<<<<<<< HEAD
        MapG5();
    }
}

function MapG3() {
    console.log("G3");
=======
        MapH13()
    }

}
function MapH13() {
    console.log("H13");
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
<<<<<<< HEAD
        console.log("YOU CANT MOVE HERE!!!");
        MapG3();
=======
        console.log("YOU MOVED NORTH!!!");
        MapH12();
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
<<<<<<< HEAD
        MapF3();
=======
        MapG13()
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
<<<<<<< HEAD
        MapH3();
=======
        MapI13()
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
<<<<<<< HEAD
        MapG4();
    }
}

function MapF1() {
    console.log("F1");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU CANT MOVE HERE!!!");
        MapF1();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapF1();
    }

    if (directions[index] == "East") {
        console.log("YOU CANT MOVE HERE!!");
        MapF1();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapF2();
    }
}

function MapF2() {
    console.log("F2");
=======
        MapH14()
    }

}
function MapH14() {
                console.log("H14");
                directions = ['North', 'West', 'East', 'South'],
                    index = readlineSync.keyInSelect(directions, 'What do you do now??');

                if (directions[index] == "North") {
                    console.log("YOU MOVED NORTH!!!");
                    MapH13();
                }

                if (directions[index] == "West") {
                    console.log("Cant Move Here!!");
                    MapH14()
                }

                if (directions[index] == "East") {
                    console.log("Cant Move Here!!");
                    MapH14()
                }

                if (directions[index] == "South") {
                    console.log("YOU MOVED SOUTH");
                    MapH15()
                }

            }
        =======
                MapI16();
        }
    }


    =======
//square J8
        function mapJ8() {
            console.log('J8');
            direction = ['North',  'West',  'East', 'South']
            index = readlineSync.keyInSelect(directions, 'What do you do now??');

            if(directions[index] == "North"){
                console.log("YOU MOVED NORTH!!!");
                MapJ7();
            }

            if(directions[index] == "West"){
                console.log("You MOVED WEST!!");
                MapI8();
            }
        >>>>>>> 34dc20e8eef2df8bf7d25d91e7cdc86d63fe962b

            if(directions[index] == "East"){
                console.log("YOU MOVED EAST!!");
                MapK8();
            }

            if(directions[index] == "South"){
                console.log("YOU MOVED SOUTH");
                MapJ9();
            }

            function mapJ7() {
                console.log('J7');
                direction = ['North',  'West',  'East', 'South']
                index = readlineSync.keyInSelect(directions, 'What do you do now??');

                if(directions[index] == "North"){
                    console.log("YOU MOVED NORTH!!!");
                    MapJ6();
                }

                if(directions[index] == "West"){
                    console.log("You MOVED WEST!!");
                    MapI7();
                }

                if(directions[index] == "East"){
                    console.log("YOU MOVED EAST!!");
                    MapK7();
                }

                if(directions[index] == "South"){
                    console.log("YOU MOVED SOUTH");
                    MapJ8();
                }
                function mapJ6() {
                    console.log('J7');
                    direction = ['North', 'West', 'East', 'South']
                    index = readlineSync.keyInSelect(directions, 'What do you do now??');

                    if (directions[index] == "North") {
                        console.log("YOU MOVED NORTH!!!");
                        MapJ5();
                    }

                    if (directions[index] == "West") {
                        console.log("You MOVED WEST!!");
                        MapI6();
                    }

                    if (directions[index] == "East") {
                        console.log("YOU MOVED EAST!!");
                        MapK6();
                    }
                }