
let body = document.querySelector("body");
let input = document.querySelector("input");
let button = document.querySelector("#NewPlayer");

let playersInGame =[];
let BtnDec;
let BtnInc;




button.addEventListener("click",()=>{
  let players = {
    firstName:input.value,
    score:0,
  }
  playersInGame.push(players);
  CreatingLayout();
});







function CreatingLayout(){
  let divOfPlayer = document.createElement("div");
  let nameOfPlayer = document.createElement("h1");
  let playerScore = document.createElement("p");
  let btnDec = document.createElement("button");
  let btnInc= document.createElement("button");
  btnDec.className = "BtnDec";
  btnInc.className ="BtnInc";
  btnDec.innerText="-";
  btnInc.innerText="+";

  
  divOfPlayer.appendChild(nameOfPlayer);
  divOfPlayer.appendChild(playerScore);
 
  
  let id = 0;
  for (const player of playersInGame){
    nameOfPlayer.innerHTML = player.firstName;
    playerScore.innerHTML = player.score;
    player.id=id;
    divOfPlayer.appendChild(btnDec);   
    divOfPlayer.appendChild(btnInc); 
    btnDec.id = id;
    btnInc.id = id;
    id++;
  }
  
  body.appendChild(divOfPlayer);

  btnDec.addEventListener("click",()=>decrement(playerScore));
  btnInc.addEventListener("click", ()=>increment(playerScore));
}






function increment(playerScore){
playerScore.textContent++;
}


function decrement(playerScore){
  playerScore.textContent--;
}