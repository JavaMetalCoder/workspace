/*Tag*/

const ulList = document.querySelector("#gioco ul");
const fine = document.querySelector("#fine");
const paragEndGame = document.querySelector("#fine p");
const btnStartNewGame = document.querySelector("#new");

/*Test tag*/
console.log("ulList:" + ulList, "paragEndGame:" + paragEndGame, "btnStartNewGame:" + btnStartNewGame);

let state = "";
let bombIndex = -1;
let clicks;

init();

 
/*Functions*/

function init() {
  state = "idle";
  btnStartNewGame.addEventListener("click", reset);
  ulList.addEventListener("click", clickCells);
  startNewGame();
}

function startNewGame() {
  if (state !== "idle" && state !== "endGame") {
    return;
  }
  clicks = 0;
  bombIndex = getRandomNumber();
  resetUlList();
  renderUlList();
  state = "playing";
  
  
}

function endGame() {
  if (state !== "playing") {
    return;
  } else {
    fine.style.display = "block";
    paragEndGame.textContent ="Hai cliccato " + clicks + " volte!!!";
    
    state = "endGame";

  }
  
}

function getRandomNumber() {
  return Math.floor(Math.random() * 16);
}

function renderUlList() {
  for (let i = 0; i < 16; i++) {
    let li = document.createElement("li");
    ulList.appendChild(li);
    if (bombIndex === i) {
      li.classList.add("bomba");
    } 
  }
}

function resetUlList() {
  ulList.innerHTML = "";
}

function clickCells(e) {
  if (state !== "playing") {
    return;
  }
  let cell = e.target.closest("li");
  if (cell.classList.contains("bomba")) {
    renderBomb(cell);
    endGame();
    return;
  } else if(cell.classList.contains          ("scoperto")) {
    return;

  } else {
      renderRainbow(cell);
      cell.classList.add("scoperto");
      clicks++;

    }
  
    
  }

  function renderRainbow(cell) {
    cell.classList.add("rainbow");

  }

  function renderBomb(cell) {
    cell.classList.add("showBomb");
  }

  function reset() {
    
    state = "idle";
    startNewGame();
    fine.style.display = "none";

  }
