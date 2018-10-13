var readlineSync = require('readline-sync');
var figlet = require('figlet');

function menu(){
    console.log(figlet.textSync('LOST TALES!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

    console.log("Main Menu");

    mainmenu = ['start', 'options'],
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

function startup() {
    directions = ['North', 'West', 'East', 'South'],
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

function MapH7(){
    console.log("H7");
    directions = ['North', 'West', 'East', 'South'],
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

function MapH6(){
    console.log("H6");
    directions = ['North', 'West', 'East', 'South'],
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
function MapG8(){
    console.log("G8");
    directions = ['North', 'West', 'East', 'South'],
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
function MapH7(){
    console.log("H7");
    directions = ['North', 'West', 'East', 'South'],
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

function MapG7(){
    console.log("G7");
    directions = ['North', 'West', 'East', 'South'],
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

function MapI7(){
    console.log("I7");
    directions = ['North', 'West', 'East', 'South'],
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
    
    function MapG6(){
    console.log("G6");
    directions = ['North', 'West', 'East', 'South'],
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
function MapI8(){
    console.log("I8");
    directions = ['North', 'West', 'East', 'South'],
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

    if (directions[index] == "North") {
        console.log("YOU MOVED NORTH!!!");
        MapI9();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapH10();
    }

    if (directions[index] == "East") {
        console.log("CAN'T MOVE HERE!!");
        MapI10();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
        MapI11();
    }
}
function MapI13() {
    console.log("I13");
    directions = ['North', 'West', 'East', 'South'],
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
function MapI15() {
    console.log("I15");
    directions = ['North', 'West', 'East', 'South'],
        index = readlineSync.keyInSelect(directions, 'What do you do now??');

    if (directions[index] == "North") {
        console.log("CAN'T MOVE HERE!!");
        MapI15();
    }

    if (directions[index] == "West") {
        console.log("YOU MOVED WEST!!");
        MapH15();
    }

    if (directions[index] == "East") {
        console.log("YOU MOVED EAST!!");
        MapJ15();
    }

    if (directions[index] == "South") {
        console.log("YOU MOVED SOUTH");
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
        MapI8();
    }
>>>>>>> 34dc20e8eef2df8bf7d25d91e7cdc86d63fe962b

    if(directions[index] == "West"){
        console.log("You MOVED WEST!!");
        MapH8();
    }

    if(directions[index] == "East"){
        console.log("YOU MOVED EAST!!");
        MapI8();
    }

    if(directions[index] == "South"){
        console.log("YOU MOVED SOUTH");
        MapI9();
    }
