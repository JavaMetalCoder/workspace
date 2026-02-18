console.log("Pre");

for(let i = 1; i < 10; i++) {
  console.log("ciao");
}

console.log("post");

const giorni = document.querySelector("#giorni");

const mesi = document.querySelector("#mesi");

const anni = document.querySelector("#anni");


//giorni for
for(let i = 1; i <= 31; i++) {
  giorni.innerHTML+= "<option>" + i + "</option>";

}

const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
//mesi for
let fragment = document.createDocumentFragment();
for(let i = 0; i < nomiMesi.length; i++) {
  //mesi.innerHTML+= "<option>" + i + "</option>";
  let optionTag = document.createElement("option");
  optionTag.textContent = nomiMesi[i];
  optionTag.value = i + 1;
  //mesi.appendChild(optionTag);
  fragment.appendChild(optionTag);
}
mesi.appendChild(fragment);

//anni for
for(let i = 2026; i >= 1926; i--) {
  anni.innerHTML+="<option>" + i + "</option>";
}