/*CREAZIONE VARS HTML*/

const giocaBtn = document.querySelector("#gioca");

const youSpan = document.querySelector("#you span");

const cpuSpan = document.querySelector("#cpu span");

const msgText = document.querySelector("#messaggio");

/*++++++++++++++++++++++++++++*/

giocaBtn.addEventListener("click",function() {

  let numYou = generaLoggaScrive(youSpan);

  let numCpu = generaLoggaScrive(cpuSpan);
  

/* CONTROLLO NUM */
  if (numYou > numCpu) {
    //VITTORIA UTENTE
    msgText.textContent = "Complimenti, hai vinto!";

  } else if (numYou < numCpu) {
    //SCONFITTA UTENTE
    msgText.textContent = "Che peccato, hai perso! Riprova!!"
  } else {
    //NUMERI UGUALI QUINDI PAREGGIO
    msgText.textContent = "WOW PAREGGIO!!"
  }

  

})


/*FUNZIONE PER IL CALCOLO RANDOMICO*/

function generaNumeroCasuale() {
  let numRandom = Math.floor(Math.random() * 10) + 1;
  return numRandom;
}

/*FUNZIONE PER GENERARE NUM CASUALE, TESTARE IL NUM E SCRIVERLO NELLO SPAN */

function generaLoggaScrive(tagHTML) {
    let numeroRandom = generaNumeroCasuale(); //GENERA
    console.log(numeroRandom); //TESTA
    tagHTML.textContent = numeroRandom; //SCRIVI
    return numeroRandom; 
}