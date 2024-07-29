let XP = 0;
let XPPerSecond = 1;
let Gold = 0;
let GoldPerSecond = 0;
let upgradeCost = 10;

let max_XP = 10;
let level = 1;

const XPElement = document.getElementById('XP');
const XPPerSecondElement = document.getElementById('XPPerSecond');
const max_XPElement = document.getElementById('max_XP');
const GoldElement = document.getElementById('Gold');
const GoldPerSecondElement = document.getElementById('GoldPerSecond');
const levelElement = document.getElementById('level');
const upgradeButton = document.getElementById('upgradeButton');

function updateDisplay() {
    XPElement.textContent = XP.toFixed(1);
    XPPerSecondElement.textContent = XPPerSecond.toFixed(1);
    max_XPElement.textContent = max_XP.toFixed(1);
    levelElement.textContent = level.toFixed(1);
    GoldElement.textContent = Gold.toFixed(1);
    GoldPerSecondElement.textContent = GoldPerSecond.toFixed(1);
    upgradeButton.textContent = `Practice (Cost: ${upgradeCost} XP)`;
}

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

function level_up(){
    if (XP >= max_XP){
        level += 1;
        XP = 0;
        max_XP += 10; //change this to exponential
        GoldPerSecond += 1;
    }
}

setInterval(idleUpdate, 1000);
upgradeButton.addEventListener('click', upgrade);

updateDisplay();