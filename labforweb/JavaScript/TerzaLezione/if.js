
/*
console.log("ok");

let eta = 44;



if(eta>=18) {
  console.log("Sei maggiorenne");
} else {
  console.log("Sei minorenne");
}

let eta2 = "14";   // == stesso contenuto / === stesso tipo

if(eta2===14) {
  console.log("Benvenuto alla festa!");
} else {
  console.log("Mi dispiace!"); 
}

let luce = true;

if(luce === true) {
  console.log("Luce accesa");
} else {
  console.log("Spenta");
}

*/


let luce = false;

const lampadina = document.getElementById("lamp");
const cover = document.getElementById("cover");

lampadina.onclick = function() {
  console.log("Click");
  
  if(luce === false) {
    lampadina.setAttribute("src", "img/accesa.png");
    cover.classList.toggle("nascondi");
    luce = true;
  } else {
    lampadina.setAttribute("src", "img/spenta.png");
    cover.classList.toggle("nascondi");
    luce = false;
  }
}