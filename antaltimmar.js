let button = document.querySelector("button");
let input = document.querySelector("input");
let paragraf = document.createElement("p");
const body = document.querySelector("body");
body.appendChild(paragraf);
button.addEventListener("click",calculateTotalYear);
function calculateTotalYear(){
  var number = input.value;
  var total = (number*365)*24;
  paragraf.innerHTML = total + " timmar";
}