let url = 'https://itunes.apple.com/search?term={artista}&media=music&limit=20'  //url del server a cui vogliamo inviare la Richiesta

const btn = document.querySelector("button");

const input = document.querySelector("input");


btn.addEventListener("click", () => {
  const artista = input.value.trim();         

    fetch(`https://itunes.apple.com/search?term=${artista}&media=music&limit=50`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

})



