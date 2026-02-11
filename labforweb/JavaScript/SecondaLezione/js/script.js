console.log("TEST");

/*PRELIEVO*/ 

const titolo = document.getElementById("titolo");

const input = document.getElementById("input");

const btn = document.getElementById("inviaBtn");

/*ESECUZIONE*/ 

inviaBtn.onclick = function() {
  console.log("Cliccato");
  let valoreInput = input.value;

  titolo.innerText = valoreInput;

  /* RESET */

  input.value = "";
  

}





let num = 18;

console.log(num * 3.5);