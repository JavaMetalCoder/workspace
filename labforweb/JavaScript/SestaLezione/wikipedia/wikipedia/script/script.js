const link = document.querySelector("a");
const linkAll = document.querySelectorAll("a");
const popup = document.querySelector("#popup");
const DOMINIO = "https://it.wikipedia.org";

let url = link.getAttribute("href");
let indirizzo;


let url_assoluta = modificaURL(url);
link.setAttribute("href", url_assoluta);

linkAll.forEach((a)=> {
    let urlOnce = a.getAttribute("href");

    if(urlOnce.charAt(0)=="/") {
      let urlAssolute = modificaURL(urlOnce);
      a.setAttribute("href", urlAssolute);
      a.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(e);
        document.querySelector("#popup").style.display = "block";
        
        indirizzo = this.getAttribute("href");
      })
    } else {
      a.style.color = "red";
    }
    
    
});

//POPUP

const btns = document.querySelectorAll("#popup button");

btns.forEach((btn) => {
  btn.addEventListener("click", function() {
    if(this.innerText == "NO") {
      popup.style.display = "none";
    } else {
      location.href = indirizzo;
    }
      
  
  })
})




function modificaURL(relative_url) {
  return DOMINIO + relative_url;

}