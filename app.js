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
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
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
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapG3();
    }

    if (directions[index] == "West") {
        console.log("You MOVED WEST!!");
        MapF4();
    }

    if (directions[index] == "East") {
        console.log("YOU CANT MOVE HERE");
        MapG4();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapG5();
    }
}

function MapG3() {
    console.log("G3");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU CANT MOVE HERE!!!");
        MapG3();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapF3();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapH3();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
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
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapF1();
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapF2();
    }

    if (directions[index] == "East") {
        console.log("YOU CANT MOVE HERE!!");
        MapF2();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
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
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("YOU CANT MOVE HERE!!!");
        MapF13);
    }

    if (directions[index] == "West") {
        console.log("Can't Move Here!!");
        MapF13();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapG13();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapF14();
    }
}