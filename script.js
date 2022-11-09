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

let outputs = document.querySelector(".output");
let container = document.querySelector(".container");

console.log(outputs);
submit.addEventListener("click", pushElementsToArray);




function pushElementsToArray() {
  let localItems = JSON.parse(localStorage.getItem("Posts"));
  if (localItems===null){
    arrayOfBlog=[].map(obj => {
      return {...obj, date: new Date(obj.date)};
    });
  } else {
    arrayOfBlog = localItems;
  }

  let post = {
    rubric:rubric.value,
    date: date.value,
    text: textContent.value,

  }
  arrayOfBlog.push(post);
  rubric.value = "";
  textContent.value = "";
  localStorage.setItem("Posts",JSON.stringify(arrayOfBlog));
   DisplayBlogsOfUser();

}

function DisplayBlogsOfUser() {
  let localItems = JSON.parse(localStorage.getItem("Posts"));
  if (localItems===null){
    arrayOfBlog=[].map(obj => {
      return {...obj, date: new Date(obj.date)};
    });
  } else {
    arrayOfBlog = localItems;
  }


  arrayOfBlog.sort((a, b) => new Date(b.date) - new Date (a.date));


  let output="";
  for (const post of arrayOfBlog) {
    output += `
    <div class ="container">
      <h1>${post.rubric}</h1>
      <p id="userDate">${post.date}</p>
      <p id="contentOfUser">${post.text}</p>    
    </div>

  `;
}
outputs.innerHTML=output;
}
DisplayBlogsOfUser();
