

/*Tags*/
const btnGo = document.querySelector("#inizia");
const youBox = document.querySelector("#you");
const cpuBox = document.querySelector("#cpu");
const boxPunteggioYou = document.querySelector("#punteggioYou");
const boxPunteggioCpu = document.querySelector("#punteggioCpu");
const ulListScelta = document.querySelector("#scelta");
const imgFoglia = document.querySelector("#foglia");
const imgForbice = document.querySelector("#forbice");
const imgSasso = document.querySelector("#sasso"
);
const risultato = document.querySelector("#risultato");
const spanRisultato = document.createElement("span");
  risultato.appendChild(spanRisultato);

/*Variabili*/
let state = "";
let imgArray = [imgFoglia, imgForbice, imgSasso];
let punteggioYou = 0;
let punteggioCpu = 0;


//INIZIO
init();


/*++++++++FUNCTIONS+++++++++++++++*/

function init() {
  state = "idle";
  btnGo.addEventListener("click", startNewGame);
  ulListScelta.addEventListener("click", scelteMosse);
  
}
  

function startNewGame() {
  if (state !== "idle" && state !== "endGame") {
    return;
  }
  reset();
  renderListaUtente();
  state = "choosing";

}

function scelteMosse(e) {
  if (state !== "choosing") {
    return;
  }
  let imgClickYou = e.target.closest("img");
  if (imgClickYou === null) {
    return;
  }

  hiddenListaUtente();
  let urlYou = imgClickYou.getAttribute("src");
  youBox.style.backgroundImage = 'url("' + urlYou +'")';
  
  let youString = imgClickYou.id;
  let cpuString = sceltaCPU();
  state = "endGame";
  confrontoYou_CPU(youString, cpuString);


}

function sceltaCPU() {
  let numRandom = Math.floor(Math.random() * 3);
  let imgClickCPU = imgArray[numRandom];
  let urlCPU = imgClickCPU.getAttribute("src");
  renderSceltaCPU(urlCPU);
  return imgClickCPU.id;

}

function confrontoYou_CPU(youString, cpuString) {
  if (state !== "endGame") {
    return;
  }
//PAREGGIO

  if (youString === cpuString) {
    renderRisultato("patta");
    return;
  }

  const userWin = 
  (youString === imgSasso.id 
  && 
  cpuString === imgForbice.id) 
  || 
  (youString === imgForbice.id 
  && 
  cpuString === imgFoglia.id)
  || 
  (youString === imgFoglia.id 
  && 
  cpuString === imgSasso.id);


  if (userWin) {
    renderRisultato("vittoria");

  } else {
    renderRisultato("sconfitta")

  }
  
}



function renderListaUtente() {
  ulListScelta.style.display = "block";

}
  
function hiddenListaUtente() {
  ulListScelta.style.display = "none";
}

function renderSceltaCPU(sceltaCPU) {
  cpuBox.style.backgroundImage = 'url("' + sceltaCPU + '")';
}

function renderRisultato(esito) {
  
  risultato.style.display = "block";
  switch (esito) {
    case "patta": 
      spanRisultato.classList.remove("vinta", "persa");
      spanRisultato.classList.add("patta");
      spanRisultato.textContent = "Partita patta!"
      break;
    case "vittoria":
      spanRisultato.classList.remove("patta", "persa");
      spanRisultato.classList.add("vinta");
      spanRisultato.textContent = "Vittoria! Grande!"
      boxPunteggioYou.textContent = "" + ++punteggioYou;
      break;
    case "sconfitta":
      spanRisultato.classList.remove("patta", "vinta");
      spanRisultato.classList.add("persa");
      spanRisultato.textContent = "Perdincibacco :("
      boxPunteggioCpu.textContent = "" + ++punteggioCpu;
      break;
    
  }

}


function reset() {
  youBox.style.backgroundImage = "none";
  cpuBox.style.backgroundImage = "none";
  risultato.style.display = "none";
  spanRisultato.textContent = "";
}

