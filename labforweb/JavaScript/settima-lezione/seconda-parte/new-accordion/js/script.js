document.addEventListener("DOMContentLoaded",function(){
/*
    const item=document.querySelector(".item");
    console.log(item);

    const faq=document.querySelector(".faq");
    console.log(faq);

    const testo=document.querySelector(".testo-item");
    console.log(testo);

    faq.addEventListener("click",function(){

        let controllo=item.classList.contains("active");
        console.log(controllo);

        let altezza=testo.scrollHeight;
        console.log(altezza);

        if(!controllo)
        {
            testo.style.height=altezza+"px";
            item.classList.add("active");
        }
        else{
            testo.style.height=0;
            item.classList.remove("active");       
        }

    });//faq click

*/


    const faqs=document.querySelectorAll(".faq");
    console.log(faqs);

    for(let i=0; i<faqs.length; i++)
    {
        faqs[i].addEventListener("click",function(){
            console.log(this);
            let fratello=this.nextElementSibling;
            console.log(fratello);
            let figli=fratello.children;
            //console.log(figli);

            let altezza=fratello.scrollHeight;
            console.log(altezza);

            let controllo=this.parentElement.classList.contains("active");
            console.log(controllo);

            if(!controllo)
            {
                fratello.style.height=altezza+"px";
                this.parentElement.classList.add("active");
            }
            else{
                fratello.style.height=0;
                this.parentElement.classList.remove("active");       
            }



        });
    }




}); //DOMContentLoaded