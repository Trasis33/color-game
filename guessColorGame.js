var numOfSquares = 6
var colors = generateRandomColors(numOfSquares)
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetBtn = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    numOfSquares = 3
    colors = generateRandomColors(numOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numOfSquares = 6
    colors = generateRandomColors(numOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i]
            squares[i].style.display = "block"

    }
})

resetBtn.addEventListener("click", function() {
    //generate new colors
    colors = generateRandomColors(numOfSquares)
    // pick new rand color
    pickedColor = pickColor()
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue"
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = ""
})

colorDisplay.textContent = pickedColor

//loops through squares and assigns rgb value from colors-array, adds event listeners and guess check
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function () {

        //grab color of picked square (.this. referrs to item that was clicked on)
        var clickedColor = this.style.background

        //compare color to picked color, removes wrong colors and displays result
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            resetBtn.textContent = "Play Again?"
            changeColors(clickedColor)
            h1.style.background = clickedColor
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

function pickColor() {
    //generates rand nbr, returns color @ rand nbr pos
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to arr
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randColors())
    }
    //return arr
    return arr
}

function randColors() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
return "rgb(" + r + ", " + g + ", " + b + ")"
}