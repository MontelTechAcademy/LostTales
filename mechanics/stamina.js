var stamina = 100;



module.exports = {
    StaminaIncrease: function () {
        console.log("Increasing Stamina");
        stamina = stamina + 10;
        console.log("Current Stamina: " + stamina)
    },
    StaminaDecrease: function () {
        console.log("Decreasing Stamina");
        stamina = stamina - 10;
        console.log("Current Stamina: " + stamina)
    },
    StaminaCheck: function () {
        console.log("Checking Stamina");
        console.log("Current Stamina: " + stamina)
    },
}

