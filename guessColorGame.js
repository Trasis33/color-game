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
    messageDisplay.textContent = ""
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
    messageDisplay.textContent = ""
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        squares[i].style.display = "block"

    }
})

resetBtn.addEventListener("click", function() {

    colors = generateRandomColors(numOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue"
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = ""
})

colorDisplay.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {

    squares[i].style.background = colors[i]
    squares[i].addEventListener("click", function () {

        var clickedColor = this.style.background

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

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}

function pickColor() {

    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {

    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randColors())
    }

    return arr
}

function randColors() {

    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

return "rgb(" + r + ", " + g + ", " + b + ")"
}