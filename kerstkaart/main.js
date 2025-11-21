const c = document.getElementById("canvas");
const g = c.getContext("2d");

const randomColor = () =>
    ["red","gold","blue","pink","purple","orange","white","cyan","lime"]
    [Math.floor(Math.random() * 9)];

function drawHouse(x, y, w, h) {
    const roofH = h * 0.4;

    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + w, y);
    g.lineTo(x + w, y + h);
    g.lineTo(x, y + h);
    g.closePath();
    g.fillStyle = "#d8c6a5";
    g.fill();
    g.stroke();

    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + w / 2, y - roofH);
    g.lineTo(x + w, y);
    g.closePath();
    g.fillStyle = "#a13b1b";
    g.fill();
    g.stroke();
}

function drawTree() {
    g.beginPath();
    g.moveTo(600, 40);
    g.lineTo(615, 85);
    g.lineTo(665, 95);
    g.lineTo(625, 130);
    g.lineTo(640, 175);
    g.lineTo(600, 150);
    g.lineTo(560, 175);
    g.lineTo(575, 130);
    g.lineTo(535, 95);
    g.lineTo(585, 85);
    g.closePath();
    g.fillStyle = "yellow";
    g.fill();
    g.stroke();

    g.beginPath();
    g.moveTo(600, 180);
    g.lineTo(470, 300);
    g.lineTo(730, 300);
    g.closePath();
    g.fillStyle = "#0c6b23";
    g.fill();
    g.stroke();

    g.beginPath();
    g.moveTo(600, 260);
    g.lineTo(430, 380);
    g.lineTo(770, 380);
    g.closePath();
    g.fill();
    g.stroke();

    g.beginPath();
    g.moveTo(600, 340);
    g.lineTo(400, 500);
    g.lineTo(800, 500);
    g.closePath();
    g.fill();
    g.stroke();

    g.beginPath();
    g.moveTo(570, 500);
    g.lineTo(630, 500);
    g.lineTo(630, 600);
    g.lineTo(570, 600);
    g.closePath();
    g.fillStyle = "#5b3a1e";
    g.fill();
    g.stroke();

    function ball(x, y) {
        g.beginPath();
        g.arc(x, y, 14, 0, Math.PI * 2);
        g.fillStyle = randomColor();
        g.fill();
        g.stroke();
    }

    ball(600,230);
    ball(565,260);
    ball(635,260);
    ball(540,310);
    ball(660,310);
    ball(570,360);
    ball(630,360);
    ball(600,390);
}

function drawHouses() {
    drawHouse(100, 500, 120, 120);
    drawHouse(350, 520, 120, 120);
    drawHouse(650, 510, 120, 120);
    drawHouse(900, 530, 120, 120);
}

function drawText() {
    g.fillStyle = "red";
    g.font = "bold 60px Arial";
    g.textAlign = "center";
    g.fillText("Merry Christmas", 600, 680);
}

drawTree();
drawHouses();
drawText();