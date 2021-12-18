
let links = document.querySelector(".links") ;
let lenksUl = document.querySelector(".links ul")

links.onclick = function () {
    lenksUl.classList.toggle("avtive")
    
} ;
document.onclick = function(e){
    if(e.target.id !== "links" ){
        lenksUl.classList.remove("avtive")
    }
}
