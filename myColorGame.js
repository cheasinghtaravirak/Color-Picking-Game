var numSquares = 6; 
var colors = []; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1"); 
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode"); 
var pickedColor; 
 
init(); 

function init() {
	setupModeBtns(); 
	reset(); 
	setupSquares(); 
}

function setupModeBtns() {		
	for(var i=0; i<modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected"); 
			this.classList.add("selected"); 
			//Figure out how many colors
			this.textContent === "Easy" ? numSquares=3:numSquares=6; 
			reset();  
		});
	}
}

function setupSquares() {
	for(var i=0; i<colors.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor; 
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor); 
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again?"; 
			} else {
				this.style.background = "#232323"; 
				messageDisplay.textContent = "Try Again!"; 
			}
		}); 
	}
}

function reset() {
	//Create new colors 
	colors = generateRandomColors(numSquares); 
	//pick a new color
	pickedColor = pickColor();
	//Assign a new color to each square based on difficulty level  
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block"; 
			squares[i].style.backgroundColor = colors[i];  
		} else {
			squares[i].style.display = "none"; 
		}
	}
	colorDisplay.textContent = pickedColor; 
	h1.style.backgroundColor = "steelblue"; 
	resetBtn.textContent = "New Colors"; 
	messageDisplay.textContent = "";
}

resetBtn.addEventListener("click", function() {
	reset(); 
}); 

function changeColors(color) {
	for(var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color; 
	}
}

function pickColor() {
	var randomIndex = Math.floor((Math.random() * colors.length));
	return colors[randomIndex];  
}

function generateRandomColors(num) {
	//empty array 
	var arr = []; 
	//push all random colors to arr[]
	for(var i=0; i<num; i++) {
		arr.push(randomColor()); 
	} 
	//return arr 
	return arr; 
}

function randomColor() {
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256);
	//"rgb(r, g, b)"
	var color = "rgb(" + r + ", " + g + ", " + b + ")"; 
	return color; 
}

