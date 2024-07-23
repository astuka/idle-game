let points = 0;
let pointsPerSecond = 1;
let upgradeCost = 10;

const pointsElement = document.getElementById('points');
const pointsPerSecondElement = document.getElementById('pointsPerSecond');
const upgradeButton = document.getElementById('upgradeButton');

function updateDisplay() {
    pointsElement.textContent = points.toFixed(1);
    pointsPerSecondElement.textContent = pointsPerSecond.toFixed(1);
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost} points)`;
}

function addPoints() {
    points += pointsPerSecond;
    updateDisplay();
}

function upgrade() {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        pointsPerSecond += 1;
        upgradeCost *= 2;
        updateDisplay();
    }
}

setInterval(addPoints, 1000);
upgradeButton.addEventListener('click', upgrade);

updateDisplay();