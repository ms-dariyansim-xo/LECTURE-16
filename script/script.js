//Testing to see if JS' alert works.
//alert('This is working!');

window.onload = function(){

const btnDisplay = document.getElementById("btnDisplay");
const numbers = document.getElementsByClassName("number");
const selectColor = document.getElementById("color");
const body = document.getElementsByTagName("body");

btnDisplay.addEventListener('click', function(){
    let selectedColorIndex = selectColor.selectedIndex;
    let color = selectColor.option[selectedColorIndex].value;

    body[0].style.backgroundColor = color;
});

}

const constant = 0;
var dontDoVar = 5;
let doLet = 10;

let isRunning = true;
if(isRunning){


}
else if (true){

}
else
{

}

switch("1"){
    case "1":

    break;
    default:

    break;
}

for(let i = 0; i <= 10; i++){

}

let sum = 0;
const numbers = [43, 53, 66, 2]

function AddTwoNumbers(num1, num2)
{
    let total = num1 + num2;
    return total;
}

let compareExample = 5 % 3;