let home = document.querySelector("#Home");
let about = document.querySelector("#About");
let contect = document.querySelector("#Contect");

let hometext = document.querySelector("#Hometext");
let abouttext = document.querySelector("#Abouttext");
let contecttext = document.querySelector("#Contecttext");

hometext.style.display = "block";
hometext.style.width = "50%";

home.addEventListener("click",function(){
    texthide();
    hometext.style.display = "block";
    hometext.style.width = "50%";
})

about.addEventListener("click",function(){
    texthide();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})

contect.addEventListener("click",function(){
    texthide();
    contecttext.style.display = "block";
    contecttext.style.width = "50%";
})

function texthide(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}