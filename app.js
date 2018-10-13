var readlineSync = require('readline-sync');
var figlet = require('figlet');

function menu() {
    console.log(figlet.textSync('LOST TALES!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

    console.log("Main Menu");

    mainmenu = ['start', 'options'],
        index = readlineSync.keyInSelect(mainmenu, "What will you like to do?");

    if (mainmenu[index] == "start") {
        startup()
    }

    if (mainmenu[index] == "options") {
        console.log("Options coming soon");
        menu()
    }
}

menu();

function startup() {
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH7();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        startup()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        startup()
    }

};

function MapH7() {
    console.log("H7");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH6();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        startup()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        startup()
    }

}

function MapH6() {
    console.log("H6");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("The Woods are to thick to pass");
        MapH6();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        startup()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        startup()
    }

}

function MapG8() {
    console.log("G8");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapG7();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapF8()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapG9()
    }

}

function MapH7() {
    console.log("H7");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH6();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        startup()
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        startup()
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        startup()
    }

}

function MapG7() {
    console.log("G7");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapH6();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapG6();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapH7();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapG8();
    }

}

function MapI7() {
    console.log("I7");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapI6();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapH6();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapI6();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapI7();
    }
}

function MapG6() {
    console.log("G6");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapG5();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapG6();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapH6();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapH7();
    }
}

function MapI8() {
    console.log("I8");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapI7();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapH7();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapI7();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapI8();
    }
}

function MapI9() {
    console.log("I9");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapI8();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapH8();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapI8();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapI9();
    }
}
function MapG8() {
    console.log("G10");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
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
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
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
