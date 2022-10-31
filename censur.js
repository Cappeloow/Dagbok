let button = document.querySelector("button");
let input = document.querySelector("input");
let p = document.querySelector("p");
button.addEventListener("click",censorship);
function censorship(){
  let word = input.value;
  let regex = /[aeiou]/gi
  p.innerHTML= word.replace(regex,"*");
}