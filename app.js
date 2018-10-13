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

    if (mainmenu[index] == "start") {
        startup()
    }

    if (mainmenu[index] == "options") {
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


//+----------------+
//| MapH7 Function |
//+----------------+
function MapH7() {
    console.log("H7");
    let directions = ['North', 'West', 'East', 'South'],
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

// +-----------------+
// | MapH6 function  |
// +-----------------+
function MapH6() {
    console.log("H6");
    let directions = ['North', 'West', 'East', 'South'],
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

// +----------------+
// | MapG8 Function |
// +----------------+
function MapG8() {
    console.log("G8");
    let directions = ['North', 'West', 'East', 'South'],
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

// +----------------+
// | MapH7 Function |
// +----------------+
function MapH7() {
    console.log("H7");
    let directions = ['North', 'West', 'East', 'South'],
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

// +----------------+
// | MapG7 Function |
// +----------------+
function MapG7() {
    console.log("G7");
    let directions = ['North', 'West', 'East', 'South'],
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

// +----------------+
// | MapI7 Function |
// +----------------+
function MapI7() {
    console.log("I7");
    let directions = ['North', 'West', 'East', 'South'],
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

// +----------------+
// | MapG6 Function |
// +----------------+
function MapG6() {
    console.log("G6");
    let directions = ['North', 'West', 'East', 'South'],
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

// +-------+
// | MapI8 |
// +-------+
function MapI8() {
    console.log("I8");
    let directions = ['North', 'West', 'East', 'South'],
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

// +----------------+
// | MapI9 Function |
// +----------------+
function MapI9() {
    console.log("I9");
    let directions = ['North', 'West', 'East', 'South'],
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

