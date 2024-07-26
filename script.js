let XP = 0;
let XPPerSecond = 1;
let upgradeCost = 10;

let max_XP = 100;
let level = 1;

const XPElement = document.getElementById('XP');
const XPPerSecondElement = document.getElementById('XPPerSecond');
const max_XPElement = document.getElementById('max_XP');
const levelElement = document.getElementById('level');
const upgradeButton = document.getElementById('upgradeButton');

function updateDisplay() {
    XPElement.textContent = XP.toFixed(1);
    XPPerSecondElement.textContent = XPPerSecond.toFixed(1);
    max_XPElement.textContent = max_XP.toFixed(1);
    levelElement.textContent = level.toFixed(1);
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost} XP)`;
}

function addXP() {
    XP += XPPerSecond;
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

function level_up(){
    if (XP >= max_XP){
        level += 1;
        XP = 0;
        max_XP += 100; //change this to exponential
    }
}

setInterval(addXP, 1000);
upgradeButton.addEventListener('click', upgrade);

updateDisplay();