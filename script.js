let XP = 0;
let XPPerSecond = 1;
let upgradeCost = 10;

const XPElement = document.getElementById('XP');
const XPPerSecondElement = document.getElementById('XPPerSecond');
const upgradeButton = document.getElementById('upgradeButton');

function updateDisplay() {
    XPElement.textContent = XP.toFixed(1);
    XPPerSecondElement.textContent = XPPerSecond.toFixed(1);
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost} XP)`;
}

function addXP() {
    XP += XPPerSecond;
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

setInterval(addXP, 1000);
upgradeButton.addEventListener('click', upgrade);

updateDisplay();