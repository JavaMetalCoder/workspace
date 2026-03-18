
const area = document.querySelector("#area");
const base = document.querySelector("input");
const altezza = document.querySelector("input:nth-of-type[2]");
const raggio = document.querySelector("input:nth-of-type[3]");
const figure = document.querySelectorAll(".figura");


for (let i = 0 ; i < figure.length; i++) {
  figure[i].addEventListener("click", function(e) {
    console.log(e);
    area.textContent = calcolaArea(this);
  })
}

function calcolaArea(target) {
  let area;
  if(target.classList.contains("r")) {
    area = altezza * base;
  } else if (target.classList.contains("t")) {
    area = (altezza * base)/2;
  } else {
    area = (raggio **2 * Math.PI).toFixed(2);
  }
  return area;
}