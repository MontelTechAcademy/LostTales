var readlineSync = require('readline-sync');
var figlet = require('figlet');


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


//+----------------+
//| MapH7 Function |
//+----------------+
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

// +-----------------+
// | MapH6 function  |
// +-----------------+
function MapH6() {
    console.log("H6");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("The Woods are to thick to pass");
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

// +-------+
// | MapI8 |
// +-------+
function MapI8() {
    console.log("I8");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapI7();
    }

    if(directions[index] == "West"){
        console.log("Can't Move Here!!");
        MapH7();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapI7();
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapI8();
     
    }
    
    function MapI9(){
    console.log("I9");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');
P  
    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapI8();
    }

    if(directions[index] == "West"){
        console.log("Can't Move Here!!");
        MapH8();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapI8();
    }
'M
    ',
    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapI9();
    }
<<<<<<< HEAD
}
function MapI10() {
    console.log("I10");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

// +----------------+
// | MapI9 Function |
// +----------------+
function MapI9() {
    console.log("I9");
    let directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("CAN'T DRIVE HERE!!!");
        MapI10();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapH11();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapJ11();
    }

    if (directions[index] == "South") {
        console.log("CAN'T MOVE HERE!!");
        MapI11();
    }
}
<<<<<<< HEAD
function MapG8() {
    console.log("G10");
=======
function MapI15() {
    console.log("I15");
>>>>>>> 94469a479e9bd1a0bff56b016491bcf4c0642718
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
<<<<<<< HEAD
        console.log("YOU MOVED NORTH!!!");
        MapG9();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        MapG10()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapH10();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapG11()
    }

}
function MapG11() {
    console.log("G11");
    directions = ['North', 'West', 'East', 'South'],
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

}
function MapG12() {
    console.log("G12");
    directions = ['North', 'West', 'East', 'South'],
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

}
function MapG13() {
    console.log("G13");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapG12();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapF13()
=======
        console.log("CAN'T MOVE HERE!!");
        MapI15();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapH15();
>>>>>>> 94469a479e9bd1a0bff56b016491bcf4c0642718
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
<<<<<<< HEAD
        MapH13()
    }

    if (directions[index] == "South") {
        console.log("Cant Move Here!!");
        MapG13()
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
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
<<<<<<< HEAD
        MapF1();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapF2();
    }

    if (directions[index] == "East") {
        console.log("YOU CANT MOVE HERE!!");
        MapF2();
=======
        MapH13();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        MapH14()
    }

    if (directions[index] == "East") {
        console.log("Cant Move Here!!");
        MapH14()
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
<<<<<<< HEAD
        MapF3();
    }
}

function MapF3() {
    console.log("F3");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapF2();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapE3();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapG3();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapF4();
    }
}
function MapF4() {
    console.log("F4");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapF3();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapE4();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapG4();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapF5();
    }
}

function MapF5() {
    console.log("F5");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapF4();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapE5();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapG5();
    }

    if (directions[index] == "South") {
        console.log("YOU CANT MOVE HERE");
        MapF5();
    }
}

function MapF8() {
    console.log("F8");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU CANT MOVE HERE!!!");
        MapF8();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapE8();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapG8();
    }

    if (directions[index] == "South") {
        console.log("YOU CANT MOVE HERE");
        MapF8();
    }
}

function MapF11() {
    console.log("F11");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU CANT MOVE HERE!!!");
        MapF11();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapE11();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapG11();
    }

    if (directions[index] == "South") {
        console.log("YOU CANT MOVE HERE");
        MapF11();
    }
}

function MapF13() {
    console.log("F113");
=======
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
        direction = ['North',  'West',  'East', 'South']
             index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if(directions[index] == "North"){
        console.log("YOU MOVED NORTH!!!");
        MapJ5();
    }

    if(directions[index] == "West"){
        console.log("You MOVED WEST!!");
        MapI6();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapK6();
    }
<<<<<<< HEAD
>>>>>>> 94469a479e9bd1a0bff56b016491bcf4c0642718
=======

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapJ7();
    }       
>>>>>>> f2a521a1e77c4eba8fbb96800da0b53782f747dc

function MapH15() {
    console.log("H15");
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
<<<<<<< HEAD
        console.log("YOU CANT MOVE HERE!!!");
        MapF13);
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapF13();
=======
        console.log("YOU MOVED NORTH!!!");
        MapH14();
    }

    if (directions[index] == "West") {
        console.log("Cant Move Here!!");
        MapH15()
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
<<<<<<< HEAD
        MapG13();
=======
        MapI15()
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
<<<<<<< HEAD
        MapF14();
    }
}
=======
        MapH16()
    }

}
>>>>>>> 501e099fcc597cf1a8049cd4a10acaf09b57ec07
function MapI16() {
    console.log("I16");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapI15();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapH16();
    }

    if (directions[index] == "East") {
        console.log("CAN'T MOVE HERE!!");
        MapI16();
    }

    if (directions[index] == "South") {
        console.log("CAN'T MOVE HERE!!");
        MapI16();
    }
}
    function MapI5() {
    console.log("I5");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapI4();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapI5();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapJ5();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapI6();
    }
}


