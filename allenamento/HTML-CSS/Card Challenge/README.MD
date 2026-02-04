Esercizio: Card Flexbox "Resilienti"

Esercizio pratico per creare card di prodotti (stile e-commerce) che rimangono ordinate anche con immagini e testi di dimensioni diverse.

Concetti Chiave

Immagini Perfette (object-fit: cover) Uso un "guscio" con altezza fissa e dico all'immagine di riempirlo senza deformarsi. Utile per foto verticali o panoramiche mischiate insieme.

Bottoni Allineati (margin-top: auto) Il trucco per spingere il bottone sempre in fondo alla card, anche se la descrizione sopra è corta. Funziona solo se il genitore è display: flex e flex-direction: column.

Snippet da ricordare
CSS

/* Per le immagini */
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Per i bottoni in fondo */
.card-content button {
  margin-top: auto; 
}
