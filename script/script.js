//Testing to see if JS' alert works.
//alert('This is working!');

window.onload = function(){}

const btnDisplay = document.getElementById();
const numbers = document.getElementsByClassName();
const selectColor = document.getElementById();
const body = document.getElementsByTagName();

btnDisplay.addEventListener('click', function(){
    let selectedColorIndex = selectColor.selectedIndex;
    let color = selectColor.option[selectedColorIndex].value;

    body[0].style.backgroundColor = color;
});


function AddTwoNumbers(num1, num2)
{
    let total = num1 + num2;
    return total;
}

let compareExample = 5 % 3;



