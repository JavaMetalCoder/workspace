class Alieno {
  #gruppoSanguigno;

  constructor(vite) {
    this.nome = "Gino Paolino";
    this.vite = vite;
    this.#gruppoSanguigno = "xyz";
    this.armi = ["laser-beam", "scar"];
  }

  getNome() {
    return this.nome;
  }

  setNome(newNome) {
    this.nome = newNome;
  }

  getVite() {
    return this.vite;
  }


  addVite() {
    if(this.vite < 0 || this.vite > 50) return false;
    this.vite++ ;
  }

  removeVite() {
    if(this.vite <= 0 || this.vite > 50) return false;
    this.vite--;
  }

  getGruppoSanguigno() {
    return `Il mio gruppo sanguigno è ${this.#gruppoSanguigno}: posso darlo solo ad \"abc\" ma ricevo da tutti`;
  }

  getArmiInPossesso() {
    return this.armi;
  }

  addArmiInPossesso(arma) {
    this.armi.push(arma);
    
    
  }

  removeArmiInPossesso(arma) {
    const newArmi = this.armi.filter(armi => arma !== armi);
    this.armi = newArmi;
  }
    

}



//DOM

const inputVite = document.querySelector("#card-input");
const form = document.querySelector(".card-alien");
const plus_btn = document.querySelector("#card-btns-plus");
const minus_btn = document.querySelector("#card-btns-minus");

function init() {
  form.addEventListener("submit", start);
  plus_btn.addEventListener("click", addVite);
  minus_btn.addEventListener("click", removeVite);

}

//START
let allArmi = [
  "../img/ak47.jpeg",
  "../img/arco.jpeg",
  "../img/aug.jpeg",
  "../img/barrett.jpeg",
  "../img/c4.jpeg",
  "../img/caccia.jpeg",
  "../img/cecchino.jpeg",
  "../img/doppietta.jpeg",
  "../img/jag-jag.jpeg",
  "../img/kombat.jpeg",
  "../img/lanciarazzi-quadruplo.jpeg",
  "../img/lanciarazzi.jpeg",
  "../img/missile-guidato.jpeg",
  "../img/p90.jpeg",
  "../img/pistola-silenziata.jpeg",
  "../img/pump.jpg",
  "../img/tomigun.jpeg"
];
let alieno = null;
init();


//FINE

//FUNCTIONS APP

function start(e) {
  e.preventDefault();
  resetError();
  let string = inputVite.value.trim();
  const num = Number(string);
  if(isNaN(num) || string === "") {
    error("Input errato: inserisci un numero!", form);
  } else if(num < 0 || num > 50) {
    error("Valore non valido: inserisci un numero tra 0 e 50!", form);
  } else {
    render(createAlieno(num));
    disabledBtnSubmit();
  }
}


function createAlieno(vite) {
  return alieno = new Alieno(vite);
}

function render(alieno) {
  const div = document.createElement("div");
  div.setAttribute("id", "divAlieno");
  div.innerHTML = `<p> Nome: ${alieno.getNome()}</p>
                      <p id="vite"> Vite: ${alieno.getVite()}</p>
                      <p> Gruppo Sanguigno: ${alieno.getGruppoSanguigno()}</p>
                      <span> Armi: </span>
                      <div class="armiAlieno">
                          ${renderImgArmi(createImgArmi())}
                      </div>
                      
                      
                      <span>Scegli altre armi: </span>
                      <div class="allArmi">
                      ${renderImgArmi(allArmi)}
                      </div>
                      `;
  

  form.appendChild(div);
  sceltaArma();
  rimuoviArma();
}

function createImgArmi() {
  let armi = alieno.getArmiInPossesso();
  return armi.map(arma => `../img/${arma}.jpeg`);
  
}

function renderImgArmi(armiImg) {
   return armiImg.map(img => {
     return `<div class="imgArmi">
                  <img src="${img}" alt="arma di gioco" id="${img.split("/").pop().replace(".jpeg", "").replace(".jpg", "")}">
              </div>`
  }).join("");
  
}

function rimuoviArma() {
  form.querySelector(".armiAlieno").addEventListener("click", (event) => {
    const img = event.target.closest("img");
    if (!img) return;
    resetError();

    const srcCompleto = img.getAttribute("src");
    alieno.removeArmiInPossesso(img.id);
    allArmi.push(srcCompleto);
    form.querySelector(".armiAlieno").innerHTML = renderImgArmi(createImgArmi());
    form.querySelector(".allArmi").innerHTML = renderImgArmi(allArmi);
  });
}

function sceltaArma() {
   form.querySelector(".allArmi").addEventListener("click", (event) => {
      const img = event.target.closest("img");
      if(!img) return;
      resetError();

      if(alieno.getArmiInPossesso().includes(img.id)) {
        return error("Arma già in possesso!", form.querySelector("#divAlieno"));
      }
      alieno.addArmiInPossesso(img.id);
      form.querySelector(".armiAlieno").innerHTML = `${renderImgArmi(createImgArmi())}`;
      allArmi = allArmi.filter(arma => !arma.includes(img.id));
      form.querySelector(".allArmi").innerHTML = renderImgArmi(allArmi);

       
    });
}    


function error(msg, element) {
  const divError = document.createElement("div");
  divError.setAttribute("id", "divError");
  divError.textContent = `${msg}`;
  element.appendChild(divError);
}

function resetError() {
  form.querySelectorAll("#divError").forEach(el => el.remove());
}

function disabledBtnSubmit() {
  form.querySelector("#card-btns-submit").setAttribute("disabled", true);
}

function addVite() {
  if(!alieno) return;
  alieno.addVite();
  const vite = form.querySelector("#vite");
  vite.textContent = `Vite: ${alieno.getVite()}`;


}

function removeVite() {
  if(!alieno) return;
  alieno.removeVite();
  const vite = form.querySelector("#vite");
  vite.textContent = `Vite: ${alieno.getVite()}`;
}


