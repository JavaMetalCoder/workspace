/*Tags*/
const btnGo = document.querySelector("#inizia");
const youBox = document.querySelector("#you");
const cpuBox = document.querySelector("#cpu");
const ulListScelta = document.querySelector("#scelta");
const imgFoglia = document.querySelector("#foglia");
const imgForbice = document.querySelector("#forbice");
const imgSasso = document.querySelector("#sasso"
);


/*Test*/

console.log("btn: " + btnGo);
console.log("scelta list: " + ulListScelta);
console.log("imgFoglia: " + imgFoglia);
console.log("imgForbice: " + imgForbice);
console.log("imgSasso: " + imgSasso);

let state = "";


init();

function init() {
  state = "idle";
  btnGo.addEventListener("click", startNewGame);
  ulListScelta.addEventListener("click", sceltaMossa);
}
  

function startNewGame() {
  if (state !== "idle") {
    return;
  }
  renderListaUtente();
  state = "choosing";

}

function sceltaMossa(e) {
  if (state !== "choosing") {
    return;
  }
  let sceltaYou = e.target.closest("img");
  if (sceltaYou === null) {
    return;
  }
  hiddenListaUtente();
  console.log("target:", e.target, "closest img:", e.target.closest("img"));
  let urlImage = sceltaYou.getAttribute("src");
  console.log("urlImage:", urlImage);

  youBox.style.backgroundImage = 'url("' + urlImage +'")';
}

function renderListaUtente() {
  ulListScelta.style.display = "block";

}
  


function hiddenListaUtente() {
  ulListScelta.style.display = "none";
}