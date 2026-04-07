interface Libro {
  id: number,
  titolo: string,
  autore: string,
  pagine: number,
  disponibile: boolean
}

const libro1: Libro = {
  id: 1,
  titolo: "Dune",
  autore: "Frank Herbert",
  pagine: 412,
  disponibile: true

}

function mostraLibro(libro: Libro): void {
  console.log(`Titolo: ${libro.titolo}, Autore: ${libro.autore}`);
  
}

mostraLibro(libro1);