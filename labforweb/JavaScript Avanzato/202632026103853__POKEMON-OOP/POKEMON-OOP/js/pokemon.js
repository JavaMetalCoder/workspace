class Pokemon {
  constructor(name, image, element, ability) {
    this._name = name;
    this._image = image;
    this._element = element;
    this._ability = ability;
    this._attackPoints = 30;
    this._attackPointsMax = 100;
    this._currentAttackPoints = this._attackPointsMax;
  }

  get name() { 
    return this._name; 
  }
  set name(value) { 
    this._name = value; 
  }

  get image() { 
    return this._image; 
  }
  set image(value) { 
    this._image = value; 
  }

  get element() { 
    return this._element; 
  }
  set element(value) { 
    this._element = value; 
  }

  get ability() { 
    return this._ability; 
  }
  set ability(value) { 
    this._ability = value; 
  }

  get attackPoints() { 
    return this._attackPoints; 
  }
  set attackPoints(value) {
    this._attackPoints = value;
  }

  get attackPointsMax() {
    return this._attackPointsMax;
  }

  set attackPointsMax(value) {
    this._attackPointsMax = value;
  }

  get currentAttackPoints() {
    return this._currentAttackPoints;
  }

  set currentAttackPoints(value) {
    this._currentAttackPoints = value;
  }

  //metodi dei pokemon

  attacca() {
    if(this._currentAttackPoints < this._attackPoints) {
      return null;
      
    } else {
      this._currentAttackPoints -= this._attackPoints;
      
      }

    
  }
  
  ricaricaPuntiAttacco() {
    if(this._currentAttackPoints === this.attackPointsMax ) {
      return null;
    } else {
      this._currentAttackPoints = this._attackPointsMax;
    }

  }
}

const rechargeAttackBtn = document.querySelector(".rigeneraMana");
const attackBtn = rechargeAttackBtn.nextElementSibling;
const eggContainer = document.querySelector(".eggsContainer");
const cardContainer = document.querySelector(".cardContainer");
const cardHistory = cardContainer.nextElementSibling;

//START
let log; 
let currentPkm = null;
init();



//END


function init() {
  rechargeAttackBtn.addEventListener("click", rechargeAttack);
  attackBtn.addEventListener("click", attack);
  eggContainer.addEventListener("click", initPokemon);
  

}

function initPokemon(event) {
  const imgClick = event.target.closest("img");
  if (!imgClick) return;
  

  if (imgClick.id === "eggCharmander" ) {
    log = "Hai generato un nuovo Charmander!";
    alert(log);
    generateLog(log);
    createPokemon(new Pokemon("Charmander", "../assets/Charmander.webp", "Fuoco", "Fuocobomba"));
    
  } else if (imgClick.id === "eggSquirtle") {
    log = "Hai generato un nuovo Squirtle!";
    alert(log);
    generateLog(log);
    createPokemon(new Pokemon("Squirtle", "../assets/squirtle.webp", "Acqua", "Pistolacqua"));
    
  } else {
    log = "Hai generato un nuovo Bulbasaur!";
    alert(log);
    generateLog(log);
    createPokemon(new Pokemon("Bulbasaur", "../assets/bulbasaur.webp", "Erba", "Fendifoglia"));
  }

}

function createPokemon(pokemon) {
  currentPkm = pokemon;
  cardContainer.innerHTML = `<div class="card" id="${pokemon.name.toLowerCase()}Card">
                                <h4>${pokemon.name}</h4>
                                <img id="${pokemon.name.toLowerCase()}Img" src="${pokemon.image}" alt="Lo sprite del pokemon ${pokemon.name}">
                                <span>Elemento: ${pokemon.element}</span>
                                <span>Abilita: ${pokemon.ability}</span>
                                <span id="attackPoints">Punti Attacco: ${pokemon.currentAttackPoints}</span>
                              </div>`;

}

function attack() {
  if(!currentPkm) {
    alert("Prima devi generare un Pokemon!!");
    return;
  }
     
  const isNull = currentPkm.attacca();
  if(isNull === null) {
    alert("Punti Attacco Insufficienti!");
    return;
  }
  cardContainer.querySelector("#attackPoints").textContent = `Punti Attacco: ${currentPkm.currentAttackPoints}`; 

  log = `${currentPkm.name} usa ${currentPkm.ability}!`;
  alert(log);
  generateLog(log);

}

function rechargeAttack() {
  if(!currentPkm) {
    alert("Prima devi generare un Pokemon!!");
    return;
  }
  const checkAP = currentPkm.ricaricaPuntiAttacco();
  if(checkAP === null) {
    alert("Punti Attacco ancora disponibili!!");
    return;
  }
  
  cardContainer.querySelector("#attackPoints").textContent = `Punti Attacco: ${currentPkm.currentAttackPoints}`; 
  log = "Punti Attacco ricaricati!!";
  alert(log);
  generateLog(log);



}

function generateLog(stringa) {
    cardHistory.insertAdjacentHTML("beforeend", `<li style="list-style: none">${stringa}</li>`);

}