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
    return this._currentAttackPointsMax;
  }

  set currentAttackPoints(value) {
    this._currentAttackPointsMax = value;
  }

  //metodi dei pokemon

  attacca() {
    return this._currentAttackPoints -= this._attackPoints;
  }
}

const rechargeAttackBtn = document.querySelector(".rigeneraMana");
const attackBtn = rechargeAttackBtn.nextElementSibling;
const eggContainer = document.querySelector(".eggsContainer");

//START


const pk = new Pokemon("a", "a", "a", "a");
console.log(pk.attacca());

//END


function init() {
  rechargeAttackBtn.addEventListener("click", rechargeAttack);
  attackBtn.addEventListener("click", attack);
  eggContainer.addEventListener("click", generatePokemon);

}

