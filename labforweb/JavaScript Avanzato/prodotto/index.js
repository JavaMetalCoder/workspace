let api = "https://dummyjson.com/products/add";

const btn_add = document.querySelector("button");
const btn_delete = document.querySelector(".bnt.danger");
const dati_prodotto = document.querySelectorAll("input");

btn_add.addEventListener("click", () => {

})

async function sendData() {
  const dato = getData();
  //ObJ qui
  const dataToSend = {};
  const chaivi = ["title", "price"];

  chaivi.forEach((keys, index) => {
    dataToSend[keys] = dato[index];
  })
  try {
    const response = await fetch(api, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(dataToSend)
  });

  const data = await response.json();

  console.log(data);

  } catch(msg) {
    console.error(msg);
    
  }
  
  
}

function getData() {
  let arrValues = [];

  dati_prodotto.forEach((valore) => {
      if(!valore.value.trim()) return;

      arrValues.push(valore.value.trim());
  });

  return arrValues;
}