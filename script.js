/************
 * Vi utvecklar en dagbok för oss själva. Våra dagboksinlägg skall sparas i localStorage så att vi kan återkomma till sidan vid ett senare tillfälle och skriva nya inlägg. 

När vi skapar ett inlägg så skall vi kunna ändra och skriva datum, rubrik samt en text.

Alla skriva inlägg skall sedan visas i kronologiskt ordning på sidan under formuläret.

 
 * Skapa en layout för varje inlägg så som divs med paragrafer
 * Kronologisk ordning
 * 
 * 
 * 
 * 
 * 
 * ************* */




const body = document.querySelector("body");
let rubric = document.querySelector("#rubric");
let date = document.querySelector("#date");
let textContent = document.querySelector("#textContent");
let submit = document.querySelector(".submit")
let divinput = document.querySelector(".input")

let arrayOfBlog =[];
let container;


if (!localStorage.getItem("userPost")){
  localStorage.setItem("userPost",container);
}
container= localStorage.getItem("userPost");

submit.addEventListener("click",createElementsOfUser);

function createElementsOfUser(){
  let output;
  

  output = `
    <div class ="container">
      <h1>${rubric.value}</h1>
      <p id="userDate">${date.value}</p>
      <p id="contentOfUser">${textContent.value}</p>    
    </div>
  
  `

  divinput.insertAdjacentHTML("afterend",output);
  arrayOfBlog.push(output);
  console.log(arrayOfBlog);


  rubric.value ="";
  date.value ="";
  textContent.value ="";

  localStorage.setItem("userPost", container);
  container = localStorage.getItem("userPost");
}