
function cambiaImmagine() {
  
    console.log("Z");
  
}


let id;
const img = document.getElementById("img");
const bottone = document.querySelector("button"); //solo il primo nel DOM

bottone.addEventListener("click", function() {

  if(bottone.innerText == "Stop") {
    clearInterval(id);
    id = null;
    bottone.innerText = "Avvia";
  } else {
    id = setInterval(cambiaImmagine, 1000)
    bottone.innerText ="Stop";

  }
  
});

id = setInterval(cambiaImmagine, 1000);
console.log(id);