
//initialize variables
let XP = 0;
let XPPerSecond = 1;
let Gold = 0;
let GoldPerSecond = 0;
let upgradeCost = 10;
let shopatkCost = 10;
let shopdefCost = 10;
let max_XP = 10;
let level = 1;
let attack = 1;
let defense = 1;

let ene_attack = 1;
let ene_def = 1;

//initialize UI
const XPElement = document.getElementById('XP');
const XPPerSecondElement = document.getElementById('XPPerSecond');
const max_XPElement = document.getElementById('max_XP');
const GoldElement = document.getElementById('Gold');
const GoldPerSecondElement = document.getElementById('GoldPerSecond');
const levelElement = document.getElementById('level');
const attackElement = document.getElementById('attack');
const defenseElement = document.getElementById('defense');
const upgradeButton = document.getElementById('upgradeButton');
const shopatkButton = document.getElementById('shopatkButton');
const shopdefButton = document.getElementById('shopdefButton');
const fightButton = document.getElementById('fightButton');
const fightResults = document.getElementById('fightResults');



//updater
function updateDisplay() {
    XPElement.textContent = XP.toFixed(1);
    XPPerSecondElement.textContent = XPPerSecond.toFixed(1);
    max_XPElement.textContent = max_XP.toFixed(1);
    levelElement.textContent = level.toFixed(1);
    attackElement.textContent = attack.toFixed(1);
    defenseElement.textContent = defense.toFixed(1);
    GoldElement.textContent = Gold.toFixed(1);
    GoldPerSecondElement.textContent = GoldPerSecond.toFixed(1);
    upgradeButton.textContent = `Practice (Cost: ${upgradeCost} XP)`;
    shopatkButton.textContent = `Upgrade Sword (Cost: ${shopatkCost} Gold)`;
    shopdefButton.textContent = `Upgrade Armor (Cost: ${shopdefCost} Gold)`;
    fightButton.textContent = `Fight!`;
}

//idle changes
function idleUpdate() {
    XP += XPPerSecond;
    Gold += GoldPerSecond;
    level_up();
    updateDisplay();
}

function upgrade() {
    if (XP >= upgradeCost) {
        XP -= upgradeCost;
        XPPerSecond += 1;
        upgradeCost *= 2;
        updateDisplay();
    }
}

function shop_atk(){
    //same as upgrade, but get stats
    if (Gold >= shopatkCost) {
        Gold -= shopatkCost;
        attack *= 2;
        shopatkCost *= 2;
        updateDisplay();
    }
}

function shop_def(){
    //same as upgrade, but get stats
    if (Gold >= shopdefCost) {
        Gold -= shopdefCost;
        defense *= 2;
        shopdefCost *= 2;
        updateDisplay();
    }
}


function fight(){
    //logic for the roll fight system
    player_dmg = Math.max((Math.random() * (attack+1)) - (Math.random() * (ene_def+1)),0);
    ene_dmg = Math.max((Math.random() * (ene_attack+1)) - (Math.random() * (defense+1)),0);
    console.log(player_dmg)
    console.log(ene_dmg)
    if (player_dmg >= ene_dmg){
        fightResults.textContent = `Player: ${player_dmg} vs Enemy: ${ene_dmg} ... You won!`;
        XPPerSecond *= 2
        GoldPerSecond *= 2
        ene_attack *= 2;
        ene_def *= 2;
    } else {
        fightResults.textContent = `Player: ${player_dmg} vs Enemy: ${ene_dmg} ... You lost!`;

        XP = 0;
        Gold = 0;
    }
}

function level_up(){
    if (XP >= max_XP){
        level += 1;
        XP = 0;
        max_XP *= 2;
        GoldPerSecond += 1;
    }
}

setInterval(idleUpdate, 1000);
upgradeButton.addEventListener('click', upgrade);
shopatkButton.addEventListener('click', shop_atk);
shopdefButton.addEventListener('click', shop_def);
fightButton.addEventListener('click', fight);


updateDisplay();