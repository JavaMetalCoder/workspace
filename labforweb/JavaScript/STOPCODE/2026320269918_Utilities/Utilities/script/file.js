// TAG MODULO
const modulo          = document.querySelector("#modulo");
const form            = document.querySelector("form");
const nameInput       = document.querySelector("#nome");
const emailInput      = document.querySelector("#email");
const numTelInput     = document.querySelector("#tel");
const checkBoxPrivacy = document.querySelector("#privacy");

// TAG CARD
const card       = document.querySelector("#card");
const nameCard   = document.querySelector(".nome");
const emailCard  = document.querySelector(".mail");
const phoneCard  = document.querySelector(".phone");
const imgCard    = document.querySelector("img");

// STATE INIZIALIZZAZIONE
let state = {
  utente: {
    name:  "",
    email: "",
    phone: ""
  },
  ui: {
    view: "",
    error: {
      name:    "",
      email:   "",
      phone:   "",
      privacy: ""
    }
  }
};

function setState(update) {
  state = { ...state, ...update };
  render();
}

// START APP
init();

// FUNCTIONS
function init() {
  form.addEventListener("submit", impostaCard);
  setState({
    ui: {
      ...state.ui,
      view: "form"
    }
  });
}

function impostaCard(event) {
  event.preventDefault();
  let utente = catturaInput();
  validazioneInput(utente);
}

// CATTURA, VALIDAZIONE E UTENTE
function catturaInput() {
  let nameCatt   = nameInput.value.trim();
  let emailCatt  = emailInput.value.trim().toLowerCase();
  let phoneCatt  = numTelInput.value.trim();
  let privacyCatt = checkBoxPrivacy.checked;

  return {
    name:   nameCatt,
    email:  emailCatt,
    phone:  phoneCatt,
    privacy: privacyCatt
  };
}

function validazioneInput(utente) {
  let errors = {};

  if (!utente.privacy) {
    errors.privacy = "Accetta i termini di condizione!";
  }

  if (utente.name.length === 0) {
    errors.name = "Inserisci il tuo nome!";
  } else if (utente.name.length > 25) {
    errors.name = "Nome troppo lungo!";
  }

  if (utente.email.length === 0) {
    errors.email = "Inserisci l'email!";
  } else if (utente.email.length > 50) {
    errors.email = "Email troppo lunga!";
  } else if (!utente.email.includes("@") || !utente.email.includes(".")) {
    errors.email = "Inserisci una email corretta!";
  }

  let phoneClean = utente.phone.split(" ").join("").split("-").join("");

  if (phoneClean.length === 0) {
    errors.phone = "Inserisci il tuo num di Telefono!";
  } else if (isNaN(Number(phoneClean))) {
    errors.phone = "Inserisci un num di Telefono corretto!";
  } else if (phoneClean.length < 9 || phoneClean.length > 12) {  
    errors.phone = "Il numero deve avere tra 9 e 12 cifre!";
  } else {
    utente.phone = phoneClean;
  }

  if (Object.keys(errors).length > 0) {
    setState({
      ui: {
        ...state.ui,
        error: errors
      }
    });
    return;
  } else {
    setState({
      utente: utente,
      ui: {
        view: "card",
        error: resetErr()
      }
    });
    form.reset();
  }
}

function resetErr() {
  return {
    name:    "",
    email:   "",
    phone:   "",
    privacy: ""
  };
}

// IMG RANDOM
function randomImgUrl() {
  const imgArray = ["1.png", "2.png", "3.png", "4.png"];
  let randomNum = Math.floor(Math.random() * 4);
  return imgArray[randomNum];
}

function setImgUrl(imgUrl) {
  return "immagini/" + imgUrl;
}

// RENDER FUNCTIONS
function render() {
  renderView();
  renderError();
  renderCard();
}

function renderView() {
  if (state.ui.view === "form") {
    modulo.style.display = "block";
    card.style.display  = "none";
  } else {
    modulo.style.display = "none";
    card.style.display  = "block";
  }
}

function renderError() {
  mostraErrore(nameInput,  state.ui.error.name);
  mostraErrore(emailInput, state.ui.error.email);
  mostraErrore(numTelInput, state.ui.error.phone);

  const privacyError = checkBoxPrivacy.parentElement.querySelector("span");
  privacyError.textContent = state.ui.error.privacy;

  if (state.ui.error.privacy) {
    checkBoxPrivacy.classList.add("errore");
  } else {
    checkBoxPrivacy.classList.remove("errore");
  }
}

function mostraErrore(input, messaggio) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = messaggio;

  if (messaggio) {
    input.classList.add("errore");
  } else {
    input.classList.remove("errore");
  }
}

function renderCard() {
  if (state.ui.view === "form") {
    return;
  }

  nameCard.textContent  = state.utente.name;
  emailCard.textContent = state.utente.email;
  phoneCard.textContent = state.utente.phone;
  imgCard.setAttribute("src", setImgUrl(randomImgUrl()));
}