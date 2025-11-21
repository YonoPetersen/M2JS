

const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d")
var img = document.getElementById("persona");

img.onload = function () {
    g.drawImage(img, 0, 0);
};

g.beginPath();
g.moveTo(200, 350);
g.lineTo(350, 600);
g.lineTo(50, 600)
g.closePath();
g.stroke();

g.beginPath();
g.moveTo(600, 350);
g.lineTo(800, 350);
g.lineTo(850, 500);
g.lineTo(700, 650);
g.lineTo(550, 500);
g.closePath();
g.stroke();