
let body = document.querySelector("body");
let players =  [];
let input = document.querySelector("input");
let button = document.querySelector("#NewPlayer");
let score =0;







button.addEventListener("click",()=>{
  let player=input.value;
  players.push({player,score});
  input.value="";
  console.log(players);
  CreatingLayout();
});







function CreatingLayout(){

  let divOfResult = document.createElement("div");
  let output;
  let id = 0;
  for (const player of players){
    output = `
      <div>
      <h1>${player.player}</h1>
      <p>${player.score}</p>
      <button id="${id}" onclick="decrement(this)">-</button>
      <button id="${id}" onclick="increment(this)">+</button>
      </div>
    `
    id++;
  }
  divOfResult.innerHTML =output;
  body.appendChild(divOfResult);
}

function decrement(e){
  player.player.score--;
}

function increment(e){

}