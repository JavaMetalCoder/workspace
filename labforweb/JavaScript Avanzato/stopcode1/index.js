const scarpe = [
  {
    id: 1,
    nome: "Air Force 1",
    prezzo: 89.99,
    taglia: "42",
    colore: "Bianco",
    immagine: "https://picsum.photos/400/500?random=1",
    disponibile: true
  },
  {
    id: 2,
    nome: "Revolution 6",
    prezzo: 54.99,
    taglia: "41",
    colore: "Nero",
    immagine: "https://picsum.photos/400/500?random=2",
    disponibile: false
  },
  {
    id: 3,
    nome: "Cortez Classic",
    prezzo: 99.99,
    taglia: "43",
    colore: "Rosso",
    immagine: "https://picsum.photos/400/500?random=3",
    disponibile: true
  },
  {
    id: 4,
    nome: "Blazer Mid",
    prezzo: 109.99,
    taglia: "40",
    colore: "Blu",
    immagine: "https://picsum.photos/400/500?random=4",
    disponibile: true
  },
  {
    id: 5,
    nome: "React Infinity",
    prezzo: 139.99,
    taglia: "42",
    colore: "Grigio",
    immagine: "https://picsum.photos/400/500?random=5",
    disponibile: false
  },
  {
    id: 6,
    nome: "Dunk Low",
    prezzo: 119.99,
    taglia: "41",
    colore: "Verde",
    immagine: "https://picsum.photos/400/500?random=6",
    disponibile: true
  },
  {
    id: 7,
    nome: "Pegasus 39",
    prezzo: 129.99,
    taglia: "43",
    colore: "Arancione",
    immagine: "https://picsum.photos/400/500?random=7",
    disponibile: true
  },
  {
    id: 8,
    nome: "Air Max 90",
    prezzo: 149.99,
    taglia: "42",
    colore: "Bianco/Nero",
    immagine: "https://picsum.photos/400/500?random=8",
    disponibile: false
  },
  {
    id: 9,
    nome: "Zoom Fly 5",
    prezzo: 159.99,
    taglia: "40",
    colore: "Giallo",
    immagine: "https://picsum.photos/400/500?random=9",
    disponibile: true
  },
  {
    id: 10,
    nome: "Court Legacy",
    prezzo: 79.99,
    taglia: "41",
    colore: "Rosa",
    immagine: "https://picsum.photos/400/500?random=10",
    disponibile: true
  }
];

const card = document.querySelector("#cards-container");

creaCards();

function creaCards() {
  const cards = scarpe
    .map(scarpa => `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card h-100">
          <img 
            src="${scarpa.immagine}" 
            alt="${scarpa.nome}" 
            class="card-img-top" 
            style="height: 200px; object-fit: cover;"
          >
          <div class="card-body">
            <h5 class="card-title">${scarpa.nome}</h5>
            <p class="card-text">
              <strong>€${scarpa.prezzo}</strong>
            </p>
            <p class="card-text">
              <small>Taglia: ${scarpa.taglia} | ${scarpa.colore}</small>
            </p>
            <p class="card-text">
              ${scarpa.disponibile 
                ? '<span class="badge bg-success">Disponibile</span>' 
                : '<span class="badge bg-danger">Esaurito</span>'}
            </p>
          </div>
        </div>
      </div>
    `)
    .join("");

  card.innerHTML = cards;
}