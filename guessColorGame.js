// Array of 6 colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
// selects all divs of class square
var squares = document.querySelectorAll(".square")
// picks winnig color-value
var pickedColor = pickRandColor();
//insert the wanted color into title
var colorDisplay = document.getElementById("colorDisplay")

var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor


//loops through squares and assigns rgb value from colors-array, adds event listeners and guess check
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        
        //grab color of picked square (.this. referrs to item that was clicked on)
        var clickedColor = this.style.background

        //compare color to picked color, removes wrong colors and displays result
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor)
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    })
}
function changeColors(color) {
    //loops through all squares and change color to match given color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
    }
function pickRandColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
    }
