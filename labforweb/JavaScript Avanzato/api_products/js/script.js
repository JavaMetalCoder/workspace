  //  this is the endpoint for the dummy data
  // https://dummyjson.com/products
//START
let api = "https://dummyjson.com/products";
const prodotti = await getData();
render();
createModal();

//END

//FUNCTIONS
function render() {
      document.querySelector(".products").innerHTML = prodotti.products.map(prodotto => {
          return `
                  <div class="product">
            <div class="content">
              <h2>${prodotto.category}</h2>
              <img
                src="${prodotto.thumbnail}"
                alt="${prodotto.title}"
              />
              <h3 class="h3-title" id="${prodotto.id}" data-id="${prodotto.id}">${prodotto.title}</h3>
              <p>${prodotto.brand ?? "--"}</p>
              <p>$ ${prodotto.price}</p>
              <p>In stock: ${prodotto.stock}</p>
            </div>
            <button class="btn button--product">View</button>
          </div>`;
    }).join("");
  }


async function getData() {
  try {
    const response = await fetch(api);
    if(!response.ok) throw new Error("Errore di Rete!");
    const data = await response.json();
    console.log(data);
    return data;
  
  } catch(err) {
    console.error(err);
    
  }
  
  
}

function createModal() {
  closeModal();
  document.querySelectorAll(".btn.button--product").forEach(btn => {
    btn.addEventListener("click", () => {
    document.querySelector(".modal.modal--hidden").classList.remove("modal--hidden");
    const h3 = btn.closest(".product").querySelector(".h3-title");
    addDataToModal(h3);
    

    });
    

  });
  
  
}

function closeModal() {
  document.querySelector(".btn.btn--close-modal").addEventListener("click", () => {
      document.querySelector(".modal").classList.add("modal--hidden");
  })
}

function addDataToModal(h3) {
  const ID_String= h3.dataset.id;
  const prod = prodotti.products.find(prod => {
    return prod.id === Number(ID_String);
  });
  const modal = document.querySelector(".modal");

  //IMG-MODAL
  modal.querySelector(".modal-image").setAttribute("src", `${prod.thumbnail}`);
  modal.querySelector(".modal-image").setAttribute("alt", `${prod.title}`);
  modal.querySelector("ul.list-image").innerHTML = prod.images.map(img => {
    return `<li class="list-image">
                <img src="${img}" alt="${prod.title}">
            </li>`
  }).join("");

  //TEXT-MODAL
  modal.querySelector(".modal-title").textContent = `${prod.title}`;
  modal.querySelector(".modal-price").textContent = `$ ${prod.price}`;
  modal.querySelector(".modal-description").textContent = `${prod.description}`;

  //RATING-MODAL
  
  const somma = prod.reviews.reduce((sommaVoto, voto) => {
    
   return sommaVoto += voto.rating;
    
     
  }, 0);

  const media = (somma/prod.reviews.length).toFixed(1);
  modal.querySelector(".modal-rating").textContent = `Rating: ${media}`;

  
  
}
