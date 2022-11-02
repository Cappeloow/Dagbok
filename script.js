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

let body = document.querySelector("body");
let rubric = document.querySelector("#rubric");
let date = document.querySelector("#date");
let textContent = document.querySelector("#textContent");
let submit = document.querySelector(".submit");
let divinput = document.querySelector(".input");
let arrayOfBlog = [];
let blogOutputs = document.querySelector(".output");
let container = document.querySelector(".container");

submit.addEventListener("click", pushElementsToArray);

  if(JSON.parse(localStorage.getItem("MyBlogg"))){

    arrayOfBlog = JSON.parse(localStorage.getItem("MyBlogg"));
  }


function pushElementsToArray() {
  arrayOfBlog.push({
    rubric: rubric.value,
    date: date.value,
    text: textContent.value,
  });
  console.log(arrayOfBlog);
  createElementsOfUser();
  localStorage.setItem("MyBlogg", JSON.stringify(arrayOfBlog));
  JSON.parse(localStorage.getItem("MyBlogg"));
  rubric.value = "";
  date.value = "";
  textContent.value = "";
}
function createElementsOfUser() {
  let output="";
  for (const post of arrayOfBlog) {
    output = `
    <div class ="container">
      <h1>${post.rubric}</h1>
      <p id="userDate">${post.date}</p>
      <p id="contentOfUser">${post.text}</p>    
    </div>

  `;
  }
  divinput.insertAdjacentHTML("afterend", output);
}
createElementsOfUser();
