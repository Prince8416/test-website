let icon=document.querySelector('.icon');
let links=document.querySelector('.links');

icon .addEventListener("click",()=>{
    links.classList.toggle('showData');
    if (links.className=="showData"){
        document.getElementById('bar').className="icon"
    }


})