 // .color__name 
 // .colored__box 
 // .switch__button
// rgb(red, green, blue)

let colorName = document.querySelector(".color__name");
let coloredBox = document.querySelector(".colored__box");
let switchButton = document.querySelector(".switch__button");

let stocks = "01234567890ABCDEF";
let randomNumber = Math.floor(Math.random() * stocks.length);
let boxColor;

function getColor() {
   
}

switchButton.addEventListener('click', function () {
    boxColor=`#`;
    for(let i=0; i<6; i++) {
        boxColor += stocks[randomNumber];
        randomNumber = Math.floor(Math.random() * stocks.length);
    }
    coloredBox.style.backgroundColor = boxColor;
  
    
})