console.log("TEST");

/*PRELIEVO*/ 

const titolo = document.getElementById("titolo");

const input = document.getElementById("input");

const btn = document.getElementById("inviaBtn");

const err = document.getElementById("errore");

/*ESECUZIONE*/ 

btn.onclick = function() {
  console.log("Cliccato");
  
  let valoreInput = input.value;
  if(valoreInput.trim().length == 0) {
    //window.alert("Inserisci un valore ");
    //err.textContent = "Inserisci contenuto valido! Riprova!"
    input.classList.add("erroreInput");

    

  } else {
    //err.innerText = "";
    input.classList.remove("erroreInput");
    titolo.innerText = valoreInput;
    input.value = "";
    input.focus();
    

  }

  

 

  

}





