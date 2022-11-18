const canvas = document.createElement('canvas');
window.addEventListener('resize', resizeCanvas(window.innerWidth, window.innerHeight));


function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background('#121212');
}


function resizeCanvas(w, h) {
	canvas.width = w;
	canvas.height = h;
}


function createCanvas(w, h) {
	canvas.width = w;
	canvas.height = h;
	document.body.appendChild(canvas);
	return canvas;
}


function background(color) {
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function drawLineToCursor(cursorX, cursorY) {
	const ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
	ctx.globalAlpha = 0.25;
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(cursorX, cursorY);
	ctx.stroke();
}


window.addEventListener('mousemove', (e) => drawLineToCursor(e.clientX, e.clientY));