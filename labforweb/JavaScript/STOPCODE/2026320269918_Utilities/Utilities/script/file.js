//TAG MODULO

const modulo = document.querySelector("#modulo");

const form = document.querySelector("form");

const nameInput = document.querySelector("#nome");

const emailInput = document.querySelector("#email");

const numTelInput = document.querySelector("#tel");

const checkBoxPrivacy = document.querySelector("#privacy");

//TAG CARD

const card = document.querySelector("#card");

const nameCard = document.querySelector(".nome");

const emailCard = document.querySelector(".mail");

const phoneCard = document.querySelector(".phone");

const imgCard = document.querySelector("img");

//STATE INIZIALIZZAZIONE
let state = {
  utente: {
    name: "",
    email: "",
    phone: ""
  },
  ui: {
    view: "",
    error: {
      name: "",
      email: "",
      phone: "",
      privacy: ""
    }
  }
};

function setState(update) {
  state = {
    ...state,  ...update

  };
  render();
}


//START APP
init();





//FUNCTIONS

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
  let utenteBeta = catturaInput();
  validazioneInput(utenteBeta);
  

  


}






//CATTURA, VALIDAZIONE E UTENTE
function catturaInput() {
  
  let nameCatt = nameInput.value.trim();
  let emailCatt = emailInput.value.trim().toLowerCase();
  let phoneCatt = numTelInput.value.trim();
  let privacyCatt = checkBoxPrivacy.checked;

  return {
    name: nameCatt,
    email: emailCatt,
    phone: phoneCatt,
    privacy: privacyCatt
  }

}
function validazioneInput(utente) {
  


  if(!utente.privacy) {
    setState({
      ui: {
        ...state.ui,
        view: "form",
        error: {
          ...state.ui.error,
          privacy: "Accetta le condizioni di Utilizzo!"
        }
      }
    });
    return;
  }

  if(utente.name.length === 0) {
    setState({
      ui: {
        ...state.ui,
        view: "form",
        error: {
          ...state.ui.error,
          name: "Nome vuoto!"
        }
      }
    });
    return;

  }

  if(utente.email.length === 0) {
    setState({
      ui: {
        ...state.ui,
        view: "form",
        error: {
          ...state.ui.error,
          email: "Email vuota!"
        }
      }
    });
    return;

  }

  if(utente.phone.length === 0) {
    setState({
      ui: {
        ...state.ui,
        view: "form",
        error: {
          ...state.ui.error,
          phone: "Numero di Tel. vuoto!"
        }
      }
    });
    return;

  } 

  setState({
    utente: utente, 
    ui: {
      view: "card",
      error: resetErr()
    }
  });
  form.reset();
  

}

  
function resetErr() {
  return {
    name: "",
    email: "",
    phone: "",
    privacy: ""
  }
}

function resetUtente() {
  return {
    name: "",
    email: "",
    phone: "",
    privacy: false
  }
}



//IMG RANDOM
function randomImgUrl() {
  const imgArray = ["1.png", "2.png", "3.png", "4.png"];
  let randomNum = Math.floor(Math.random() * 4);
  return imgArray[randomNum];

}
function setImgUrl(imgUrl) {
  return "immagini/"+imgUrl;
}

//RENDER FUNCTIONS

function render() {
  renderView();
  renderError();
  renderCard();
  
}

function renderView() {
  if(state.ui.view == "form") {
    modulo.style.display = "block";
    card.style.display = "none";

  } else {
    modulo.style.display = "none";
    card.style.display = "block";
  }
}

function renderError() {
  if(state.ui.error.name !== "") {
    nameInput.nextElementSibling.textContent = state.ui.error.name;
    nameInput.classList.add("errore");
  } else {
    nameInput.nextElementSibling.textContent = "";
    nameInput.classList.remove("errore");
  }


  if(state.ui.error.email !== "") {
    emailInput.nextElementSibling.textContent = state.ui.error.email;
    emailInput.classList.add("errore");
  } else {
    emailInput.nextElementSibling.textContent = "";
    emailInput.classList.remove("errore");
  }


  if(state.ui.error.phone !== "") {
    numTelInput.nextElementSibling.textContent = state.ui.error.phone;
    numTelInput.classList.add("errore");
  } else {
    numTelInput.nextElementSibling.textContent = "";
    numTelInput.classList.remove("errore");
  }


  if(state.ui.error.privacy !== "") {
    checkBoxPrivacy.parentElement.querySelector("span").textContent = state.ui.error.privacy;
    checkBoxPrivacy.classList.add("errore");
  } else {
    checkBoxPrivacy.parentElement.querySelector("span").textContent = "";
    checkBoxPrivacy.classList.remove("errore");
  }

}

function renderCard() {
  if(state.ui.view === "form") {
    return;
  }
  nameCard.textContent = state.utente.name;
  emailCard.textContent = state.utente.email;
  phoneCard.textContent = state.utente.phone;
  imgCard.setAttribute("src", setImgUrl(randomImgUrl()) )
  
}