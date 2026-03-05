const dominio="https://it.wikipedia.org"
const links=document.querySelectorAll("a");
const popup=document.getElementById("popup");
console.log(links);
console.log(popup);



let url,urlAssoluta,indirizzo;

let elemento;


for(let i=0; i<links.length; i++)
{
    url=links[i].getAttribute("href");

    if(url.charAt(0)=="/"){
        urlAssoluta=dominio+url;
        links[i].setAttribute("href",urlAssoluta);

        links[i].onclick=function(e)
        {
           e.preventDefault();
           popup.style.display="block";
           console.log(this);
           indirizzo=this.getAttribute("href");
           console.log(indirizzo);
           elemento=links[i].getAttribute("href");
           console.log(elemento);
        }
    }
    else{
        links[i].style.color="red";
    }
}


const buttons=document.querySelectorAll("#popup button");
console.log(buttons);

for(let i=0;i<buttons.length;i++)
{
    /*
    if(buttons[i].innerText=="NO")
    {
        console.log("NO");
    }
    else
    {
        console.log("SI");
    }
    */
   //console.log(buttons[i].innerText);

    buttons[i].onclick=function()
    {
        console.log("Hai fatto click su uno dei button");
        console.log(this);

        if(this.innerHTML=="NO")
        {
            popup.style.display="none";
        }
        else
        {
            //console.log(location);
            //location.href="https://www.labforweb.it";
            location.href=indirizzo;
        }

    }

}




