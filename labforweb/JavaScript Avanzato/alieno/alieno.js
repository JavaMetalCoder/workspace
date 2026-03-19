class Alieno {
  constructor(nome, provenienza, immagine, poteri, eta, colore, razza, armi, vite) {
    this.nome = nome;
    this.provenienza = provenienza;
    this.immagine = immagine;
    this.poteri = poteri;
    this.eta = eta;
    this.colore = colore;
    this.razza = razza;
    this.armi = armi;
    this.vite = vite;

  }

  
}

const alieno = new Alieno(
  "Franco",
  "Saturno",
  "franco.png",
  ["telepatia", "invisibilità", "volo"],
  250,
  "verde",
  "Saturniano",
  ["raggio laser", "spada al plasma"],
  5
);

console.log(alieno);

const body = document.getElementById("alienoBody");
      body.innerHTML = `
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-dark text-white"><strong>Nome:</strong> ${alieno.nome}</li>
          <li class="list-group-item bg-dark text-white"><strong>Provenienza:</strong> ${alieno.provenienza}</li>
          <li class="list-group-item bg-dark text-white"><strong>Razza:</strong> ${alieno.razza}</li>
          <li class="list-group-item bg-dark text-white"><strong>Colore:</strong> ${alieno.colore}</li>
          <li class="list-group-item bg-dark text-white"><strong>Età:</strong> ${alieno.eta} anni</li>
          <li class="list-group-item bg-dark text-white"><strong>Vite:</strong> ${alieno.vite}</li>
          <li class="list-group-item bg-dark text-white"><strong>Poteri:</strong> ${alieno.poteri.join(", ")}</li>
          <li class="list-group-item bg-dark text-white"><strong>Armi:</strong> ${alieno.armi.join(", ")}</li>
        </ul>
      `;