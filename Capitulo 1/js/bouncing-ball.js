var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 20;
var color = '#0082bf';
var g = 0.1;
var x = 50;
var y = 50;
var vx = 2;
var vy = 0;

window.onload = init;

function init() {
     setInterval(onEachStep, 1000/60);
};

function onEachStep() {
     vy += g;
     x += vx;
     y += vy;
     if (y > canvas.height - radius) {
          y = canvas.height - radius;
          vy *= -0.8;
     }
     if (x > canvas.width + radius) {
          x = -radius;
     }
     drawBall();
};

function drawBall() {
     with (context) {
          clearRect(0, 0, canvas.width, canvas.height);
          fillStyle = color;
          beginPath();
          arc(x, y, radius, 0, 2*Math.PI, true);
          closePath();
          fill();
     }
};
