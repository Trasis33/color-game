// Array of 6 colors
let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
// selects all divs of class square
let squares = document.querySelectorAll(".square")
// picks winnig color-value
let pickedColor = colors[3]
//insert the wanted color into title
let colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor

//loops through squares and assigns rgb value from colors-array
for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        
        //grab color of picked square (.this. referrs to item that was clicked on)
        let clickedColor = this.style.background
        
        //compare color to picked color
        if(clickedColor === pickedColor) {
            alert("Correct!")
        } else {
            alert("WRONG!")
        }
    })
}