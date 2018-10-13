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

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapI11()
=======
        MapJ15();
>>>>>>> 94469a479e9bd1a0bff56b016491bcf4c0642718
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
<<<<<<< HEAD
        MapH12()
    }

}
function MapH12() {
    console.log("H12");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH11();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapG12()
    }

    if (directions[index] == "East") {
        console.log("Cant Move Here!!");
        MapH12()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapH13()
    }

}
function MapH13() {
    console.log("H13");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH12();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapG13()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapI13()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
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
