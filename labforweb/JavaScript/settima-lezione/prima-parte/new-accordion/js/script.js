/*document.onclick=function()
{
    alert("Click");
}
*/

let faq;
let x=10;


document.addEventListener("click",
    function()
    {
        alert(x);
    }
);



document.addEventListener("DOMContentLoaded",function(){

    faq=document.querySelector(".accordion .item");
    console.log(faq);
    x=15;
});


faq=document.querySelector(".accordion .testo-item");
console.log(faq);

console.log(x);

