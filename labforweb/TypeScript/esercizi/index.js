"use strict";
const libro1 = {
    id: 1,
    titolo: "Dune",
    autore: "Frank Herbert",
    pagine: 412,
    disponibile: true
};
function mostraLibro(libro) {
    console.log(`Titolo: ${libro.titolo}, Autore: ${libro.autore}`);
}
mostraLibro(libro1);
